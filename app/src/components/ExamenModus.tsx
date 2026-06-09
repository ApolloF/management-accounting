import { useEffect, useMemo, useState } from 'react'
import type { Vraag } from '../types'
import { alleVragen, deelByNr } from '../content'
import { Badge, Button, Card, ProgressBar } from './ui'

const AANTAL = 26 // zoals een echt MC-tentamen
const TIJD_MIN = 120

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function romein(n: number): string {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n] ?? String(n)
}

export function ExamenModus({ onTerug }: { onTerug: () => void }) {
  // Sample uit alle echte PDF-vragen. Doordat het deelgewicht ∝ aantal vragen is,
  // is een uniforme steekproef automatisch gewogen naar tentamengewicht.
  const vragen = useMemo<Vraag[]>(() => {
    const pool = alleVragen().filter((v) => v.bron === 'pdf' && v.type === 'mc')
    return shuffle(pool).slice(0, Math.min(AANTAL, pool.length))
  }, [])

  const [antwoorden, setAntwoorden] = useState<Record<string, string>>({})
  const [idx, setIdx] = useState(0)
  const [klaar, setKlaar] = useState(false)
  const [secondenOver, setSecondenOver] = useState(TIJD_MIN * 60)

  useEffect(() => {
    if (klaar) return
    const t = setInterval(() => {
      setSecondenOver((s) => {
        if (s <= 1) {
          clearInterval(t)
          setKlaar(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [klaar])

  const vraag = vragen[idx]
  const mm = String(Math.floor(secondenOver / 60)).padStart(2, '0')
  const ss = String(secondenOver % 60).padStart(2, '0')
  const beantwoordAantal = Object.keys(antwoorden).length

  if (klaar) return <Uitslag vragen={vragen} antwoorden={antwoorden} onTerug={onTerug} />

  return (
    <div>
      <div className="exam-bar">
        <span className={`exam-timer ${secondenOver < 300 ? 'urgent' : ''}`}>⏱ {mm}:{ss}</span>
        <span className="muted">
          {beantwoordAantal}/{vragen.length} beantwoord
        </span>
        <span className="spacer" style={{ flex: 1 }} />
        <Button
          size="sm"
          onClick={() => {
            if (confirm('Tentamen inleveren en nakijken?')) setKlaar(true)
          }}
        >
          Inleveren & nakijken
        </Button>
      </div>

      <ProgressBar value={((idx + 1) / vragen.length) * 100} />

      <Card className="mt-4">
        <div className="row between" style={{ marginBottom: 8 }}>
          <span className="q-counter">
            Vraag {idx + 1} / {vragen.length}
          </span>
          <Badge>Deel {romein(vraag.deel)}</Badge>
        </div>
        {vraag.context && <div className="q-context">{vraag.context}</div>}
        <div className="q-stam">{vraag.stam}</div>
        <div className="opties">
          {vraag.opties!.map((o) => (
            <button
              key={o.id}
              className={`optie ${antwoorden[vraag.id] === o.id ? 'selected' : ''}`}
              onClick={() => setAntwoorden((a) => ({ ...a, [vraag.id]: o.id }))}
            >
              <span className="letter">{o.id}</span>
              <span>{o.tekst}</span>
            </button>
          ))}
        </div>
      </Card>

      <div className="quiz-nav">
        <Button variant="secondary" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>
          ← Vorige
        </Button>
        {idx < vragen.length - 1 ? (
          <Button onClick={() => setIdx(idx + 1)}>Volgende →</Button>
        ) : (
          <Button onClick={() => setKlaar(true)}>Inleveren & nakijken →</Button>
        )}
      </div>
    </div>
  )
}

function Uitslag({
  vragen,
  antwoorden,
  onTerug,
}: {
  vragen: Vraag[]
  antwoorden: Record<string, string>
  onTerug: () => void
}) {
  const goed = vragen.filter((v) => antwoorden[v.id] === v.juistAntwoord).length
  const totaal = vragen.length
  const cijfer = Math.round((1 + 9 * (goed / totaal)) * 10) / 10
  const geslaagd = cijfer >= 5.5

  // Per-deel uitsplitsing
  const perDeel = new Map<number, { goed: number; totaal: number }>()
  for (const v of vragen) {
    const e = perDeel.get(v.deel) ?? { goed: 0, totaal: 0 }
    e.totaal++
    if (antwoorden[v.id] === v.juistAntwoord) e.goed++
    perDeel.set(v.deel, e)
  }

  return (
    <div>
      <div className="focus-banner">
        <div className="k">Oefen-examen resultaat</div>
        <h2>
          <span className={`grade-big ${geslaagd ? 'grade-pass' : 'grade-fail'}`}>{cijfer.toFixed(1)}</span>
          <span style={{ fontSize: 'var(--fs-md)', marginLeft: 12 }}>{geslaagd ? 'Voldoende ✓' : 'Onvoldoende'}</span>
        </h2>
        <p>
          {goed} van {totaal} goed. (Indicatief cijfer op MC-basis; het echte tentamen heeft daarnaast een
          open opgave over de fabricageboekhouding, weging MC 70 / open 23.)
        </p>
        <div className="mt-4">
          <Button variant="secondary" onClick={onTerug}>
            ← Terug naar overzicht
          </Button>
        </div>
      </div>

      <Card>
        <h3>Per deel</h3>
        <table className="res-table">
          <thead>
            <tr>
              <th>Deel</th>
              <th className="num">Goed</th>
            </tr>
          </thead>
          <tbody>
            {[...perDeel.entries()]
              .sort((a, b) => a[0] - b[0])
              .map(([nr, e]) => (
                <tr key={nr}>
                  <td>
                    Deel {romein(nr)} — {deelByNr(nr)?.titel}
                  </td>
                  <td className="num">
                    {e.goed}/{e.totaal}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Card>

      <Card className="mt-4">
        <h3>Antwoorden nakijken</h3>
        {vragen.map((v, i) => {
          const gekozen = antwoorden[v.id]
          const correct = gekozen === v.juistAntwoord
          return (
            <details key={v.id} className="voorbeeld">
              <summary>
                {i + 1}. {correct ? '✓' : '✗'} {v.stam.slice(0, 70)}
                {v.stam.length > 70 ? '…' : ''}
              </summary>
              <div className="voorbeeld-body">
                <p className="muted" style={{ marginTop: 0 }}>
                  Jouw antwoord: {gekozen ?? '—'} · Juist: {v.juistAntwoord}
                </p>
                <div className="uitleg" style={{ whiteSpace: 'pre-wrap' }}>
                  {v.uitleg}
                </div>
              </div>
            </details>
          )
        })}
      </Card>
    </div>
  )
}
