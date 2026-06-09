import type { Deel } from '../types'
import { Button, Card } from './ui'
import { Prose } from './Prose'

export function TheorieView({
  deel,
  onNaarQuiz,
  onTerug,
}: {
  deel: Deel
  onNaarQuiz: () => void
  onTerug: () => void
}) {
  return (
    <div>
      <button className="crumb" onClick={onTerug} style={{ marginBottom: 8 }}>
        ← Alle delen
      </button>
      <h2>
        Deel {romein(deel.nr)} — {deel.titel}
      </h2>
      <p className="muted">{deel.hoofdstukken}</p>

      {deel.theorie.map((sectie, i) => (
        <Card key={i} className="theorie-sectie">
          <h3>{sectie.titel}</h3>
          <Prose text={sectie.uitleg} />

          {sectie.formules && sectie.formules.length > 0 && (
            <div className="formule-box">{sectie.formules.join('\n')}</div>
          )}

          {sectie.voorbeelden?.map((vb, j) => (
            <details className="voorbeeld" key={j}>
              <summary>Voorbeeld: {vb.titel}</summary>
              <div className="voorbeeld-body">
                <div className="casus">{vb.casus}</div>
                <ol>
                  {vb.stappen.map((s, k) => (
                    <li key={k}>{s}</li>
                  ))}
                </ol>
                <div className="voorbeeld-antwoord">✓ {vb.antwoord}</div>
              </div>
            </details>
          ))}
        </Card>
      ))}

      <Card>
        <div className="row between">
          <span className="muted">Theorie doorgenomen? Toets jezelf met de oefenvragen.</span>
          <Button onClick={onNaarQuiz}>Naar de oefenvragen →</Button>
        </div>
      </Card>
    </div>
  )
}

function romein(n: number): string {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n] ?? String(n)
}
