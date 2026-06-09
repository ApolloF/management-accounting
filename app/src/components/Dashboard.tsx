import { boekhouden, delenOpGewicht, gewichten } from '../content'
import { Badge, Button, Card, DifficultyBadge, ProgressBar } from './ui'
import type { ProgressApi } from '../hooks/useProgress'
import { deelStats, totaalGoed } from '../lib/stats'
import type { Difficulty } from '../types'

// Bepaal het "zwaarste" difficulty-label van de PDF-vragen in een deel.
const RANG: Record<Difficulty, number> = { makkelijk: 1, gemiddeld: 2, lastig: 3, berucht: 4 }
function deelDifficulty(nr: number): Difficulty | undefined {
  const d = delenOpGewicht.find((x) => x.nr === nr)!
  let best: Difficulty | undefined
  for (const v of d.vragen) {
    if (v.bron !== 'pdf' || !v.difficulty) continue
    if (!best || RANG[v.difficulty] > RANG[best]) best = v.difficulty
  }
  return best
}

export function Dashboard({
  progress,
  onOpenDeel,
  onResultaten,
  onExamen,
}: {
  progress: ProgressApi
  onOpenDeel: (nr: number) => void
  onResultaten: () => void
  onExamen: () => void
}) {
  const tot = totaalGoed(progress.state)

  return (
    <div>
      <section className="intro">
        <h2>Klaar voor het tentamen?</h2>
        <p className="lede">
          De stof is opgesplitst in de 7 officiële delen, met de zwaarste delen eerst. Leer per deel
          eerst de theorie en rekenvoorbeelden, en toets jezelf daarna met echte tentamenvragen.
          Hints worden onthouden, en aan het eind krijg je advies waar je je het eerst op moet richten.
        </p>
        <div className="stat-row">
          <div className="stat-pill">
            <span className="n">7</span>
            <span className="l">Delen</span>
          </div>
          <div className="stat-pill">
            <span className="n">
              {tot.goed}/{tot.beantwoord || 0}
            </span>
            <span className="l">Goed beantwoord</span>
          </div>
          <div className="stat-pill">
            <span className="n">{tot.totaal}</span>
            <span className="l">Echte tentamenvragen</span>
          </div>
        </div>
        <div className="row mt-4">
          <Button onClick={onExamen}>🎓 Oefen-examen starten (2 uur)</Button>
          <Button variant="secondary" onClick={onResultaten}>
            Bekijk mijn voortgang & focus-advies
          </Button>
        </div>
      </section>

      <div className="deel-list">
        {(() => {
          const st = deelStats(boekhouden, progress.state)
          return (
            <Card interactive onClick={() => onOpenDeel(boekhouden.nr)}>
              <div className="deel-card">
                <div className="deel-rank">✍️</div>
                <div className="deel-main">
                  <h3>
                    {boekhouden.titel}
                    <Badge variant="brand">Schriftelijk deel</Badge>
                  </h3>
                  <div className="sub">
                    {boekhouden.hoofdstukken} · {boekhouden.kernthema}
                  </div>
                  <div className="deel-meta">
                    <Badge>{st.totaalPdf} open opgaven</Badge>
                    <DifficultyBadge difficulty="berucht" />
                  </div>
                  <div className="deel-progress-row">
                    <ProgressBar value={st.voortgangPct} />
                    <span className="pct">
                      {st.beantwoord}/{st.totaalPdf}
                    </span>
                  </div>
                </div>
                <div className="deel-weight">
                  <span className="big">30%</span>
                  <span className="lbl">tentamen-<br />gewicht</span>
                </div>
                <div className="deel-cta">
                  <Button size="sm" onClick={() => onOpenDeel(boekhouden.nr)}>
                    Start →
                  </Button>
                </div>
              </div>
            </Card>
          )
        })()}
        {delenOpGewicht.map((d, i) => {
          const st = deelStats(d, progress.state)
          const diff = deelDifficulty(d.nr)
          return (
            <Card key={d.nr} interactive onClick={() => onOpenDeel(d.nr)}>
              <div className="deel-card">
                <div className="deel-rank">{i + 1}</div>
                <div className="deel-main">
                  <h3>
                    Deel {romein(d.nr)} — {d.titel}
                    {i === 0 && <Badge variant="brand">Begin hier</Badge>}
                  </h3>
                  <div className="sub">
                    {d.hoofdstukken} · {d.kernthema}
                  </div>
                  <div className="deel-meta">
                    <Badge>{st.totaalPdf} vragen</Badge>
                    {diff && <DifficultyBadge difficulty={diff} />}
                  </div>
                  <div className="deel-progress-row">
                    <ProgressBar value={st.voortgangPct} />
                    <span className="pct">
                      {st.beantwoord}/{st.totaalPdf}
                    </span>
                  </div>
                </div>
                <div className="deel-weight">
                  <span className="big">{gewichten[d.nr]}%</span>
                  <span className="lbl">geschat<br />gewicht</span>
                </div>
                <div className="deel-cta">
                  <Button size="sm" onClick={() => onOpenDeel(d.nr)}>
                    Start deel →
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

function romein(n: number): string {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n] ?? String(n)
}
