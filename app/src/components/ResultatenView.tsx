import { Button, Card, ProgressBar } from './ui'
import type { ProgressApi } from '../hooks/useProgress'
import { focusRanking, totaalGoed } from '../lib/stats'

export function ResultatenView({
  progress,
  onOpenDeel,
  onTerug,
}: {
  progress: ProgressApi
  onOpenDeel: (nr: number) => void
  onTerug: () => void
}) {
  const ranking = focusRanking(progress.state)
  const tot = totaalGoed(progress.state)
  const focus = ranking[0]
  const ietsGedaan = tot.beantwoord > 0

  return (
    <div>
      <button className="crumb" onClick={onTerug} style={{ marginBottom: 8 }}>
        ← Alle delen
      </button>

      {ietsGedaan ? (
        <div className="focus-banner">
          <div className="k">Focus eerst op</div>
          <h2>
            Deel {romein(focus.deel.nr)} — {focus.deel.titel}
          </h2>
          <p>{focusUitleg(focus)}</p>
          <div className="mt-4">
            <Button variant="secondary" onClick={() => onOpenDeel(focus.deel.nr)}>
              Ga naar deel {romein(focus.deel.nr)} →
            </Button>
          </div>
        </div>
      ) : (
        <Card>
          <h2>Nog geen vragen beantwoord</h2>
          <p className="muted">
            Beantwoord een paar oefenvragen, dan bereken ik op welk deel je je het eerst moet richten.
            Tip: begin bij het zwaarste deel bovenaan het overzicht.
          </p>
          <Button onClick={onTerug}>Naar de delen →</Button>
        </Card>
      )}

      <Card className="mt-5">
        <div className="row between" style={{ marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>Per deel</h3>
          <span className="muted">
            Totaal goed: {tot.goed}/{tot.beantwoord} (van {tot.totaal} vragen)
          </span>
        </div>
        <table className="res-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Deel</th>
              <th className="num">Gewicht</th>
              <th className="num">Gedaan</th>
              <th className="num">Goed</th>
              <th className="num">Hints</th>
              <th style={{ width: 120 }}>Voortgang</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((s, i) => (
              <tr key={s.deel.nr}>
                <td className="res-rank">{i + 1}</td>
                <td>
                  <button className="crumb" style={{ padding: 0 }} onClick={() => onOpenDeel(s.deel.nr)}>
                    Deel {romein(s.deel.nr)} — {s.deel.titel}
                  </button>
                </td>
                <td className="num">{s.gewicht}%</td>
                <td className="num">
                  {s.beantwoord}/{s.totaalPdf}
                </td>
                <td className="num">{s.beantwoord > 0 ? `${Math.round(s.beheersing * 100)}%` : '—'}</td>
                <td className="num">{s.hintsTotaal}</td>
                <td>
                  <ProgressBar value={s.voortgangPct} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted mt-4">
          De rangschikking weegt het geschatte tentamengewicht, hoe goed je de vragen maakte, en hoeveel
          hints je nodig had. Delen die zwaar tellen én nog niet goed zitten, staan bovenaan.
        </p>
      </Card>

      <Card className="mt-4">
        <div className="row between">
          <span className="muted">Wil je opnieuw beginnen? Dit wist je voortgang en hint-historie.</span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              if (confirm('Weet je zeker dat je alle voortgang wilt wissen?')) progress.reset()
            }}
          >
            Voortgang resetten
          </Button>
        </div>
      </Card>
    </div>
  )
}

function focusUitleg(s: ReturnType<typeof focusRanking>[number]): string {
  if (s.beantwoord === 0) {
    return `Dit deel telt naar schatting ${s.gewicht}% van het tentamen en je hebt er nog geen vragen van gemaakt. Een logische plek om te beginnen.`
  }
  const pct = Math.round(s.beheersing * 100)
  const hint = s.hintsTotaal > 0 ? ` Je had hier ${s.hintsTotaal} hint(s) nodig.` : ''
  return `Dit deel telt naar schatting ${s.gewicht}% van het tentamen en je scoort er nu ${pct}% goed.${hint} Hier valt de meeste winst te halen.`
}

function romein(n: number): string {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n] ?? String(n)
}
