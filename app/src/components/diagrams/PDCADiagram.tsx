import { useEffect, useState } from 'react'

// Management control / PDCA-cyclus: Plan → Do → Check → Act, met een
// rondlopende highlight en uitleg per fase.
const FASEN = [
  { letter: 'P', naam: 'Plan', kleur: 'var(--c-brand)', uitleg: 'Plan opstellen: doelen, budgetten en normen vaststellen.' },
  { letter: 'D', naam: 'Do', kleur: 'var(--c-success)', uitleg: 'Uitvoeren: het plan realiseren (produceren, verkopen).' },
  { letter: 'C', naam: 'Check', kleur: 'var(--c-warn)', uitleg: 'Vergelijken: realisatie vs. plan, verschillen bepalen en analyseren.' },
  { letter: 'A', naam: 'Act', kleur: 'var(--c-danger)', uitleg: 'Bijsturen: actie ondernemen op basis van de analyse.' },
]

const R = 90
const CX = 130
const CY = 130

// Bereken het pad van een cirkelsegment (kwart).
function arc(startDeg: number, endDeg: number, r: number) {
  const a = (d: number) => ((d - 90) * Math.PI) / 180
  const x1 = CX + r * Math.cos(a(startDeg))
  const y1 = CY + r * Math.sin(a(startDeg))
  const x2 = CX + r * Math.cos(a(endDeg))
  const y2 = CY + r * Math.sin(a(endDeg))
  return `M ${CX} ${CY} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`
}

export function PDCADiagram() {
  const [actief, setActief] = useState(0)
  const [auto, setAuto] = useState(true)

  useEffect(() => {
    if (!auto) return
    const t = setInterval(() => setActief((i) => (i + 1) % 4), 1400)
    return () => clearInterval(t)
  }, [auto])

  return (
    <div className="card" style={{ marginTop: 'var(--sp-3)' }}>
      <h4 style={{ marginTop: 0 }}>Management control: de PDCA-cyclus</h4>
      <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap', alignItems: 'center' }}>
        <svg viewBox="0 0 260 260" style={{ width: 220, height: 220 }} role="img" aria-label="PDCA-cyclus">
          {FASEN.map((f, i) => (
            <path
              key={i}
              d={arc(i * 90, (i + 1) * 90, R)}
              fill={f.kleur}
              opacity={actief === i ? 1 : 0.32}
              stroke="var(--c-surface)"
              strokeWidth="3"
              style={{ cursor: 'pointer', transition: 'opacity 200ms' }}
              onClick={() => { setActief(i); setAuto(false) }}
            />
          ))}
          {FASEN.map((f, i) => {
            const mid = i * 90 + 45
            const a = ((mid - 90) * Math.PI) / 180
            const lx = CX + R * 0.6 * Math.cos(a)
            const ly = CY + R * 0.6 * Math.sin(a)
            return (
              <text key={i} x={lx} y={ly + 6} textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff" style={{ pointerEvents: 'none' }}>
                {f.letter}
              </text>
            )
          })}
          <circle cx={CX} cy={CY} r="30" fill="var(--c-surface)" stroke="var(--c-border)" />
          <text x={CX} y={CY + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--c-text)">
            PDCA
          </text>
        </svg>

        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 'var(--fs-lg)', fontWeight: 700, color: FASEN[actief].kleur }}>
            {FASEN[actief].letter} — {FASEN[actief].naam}
          </div>
          <p style={{ marginBottom: 'var(--sp-3)' }}>{FASEN[actief].uitleg}</p>
          <button className="btn btn-secondary btn-sm" onClick={() => setAuto((a) => !a)}>
            {auto ? '⏸ Pauzeer' : '▶ Speel af'}
          </button>
        </div>
      </div>
    </div>
  )
}
