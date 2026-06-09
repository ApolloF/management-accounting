import { useState } from 'react'

// Interactief break-even & indifferentiepunt-diagram (zelfgemaakte SVG, geen deps).
// Arbeidsintensief (A): lage constante, hoge variabele kosten.
// Kapitaalintensief (K): hoge constante, lage variabele kosten.
// Toont opbrengstlijn, beide kostenlijnen, break-evenpunten en het indifferentiepunt.

const W = 560
const H = 360
const PAD_L = 56
const PAD_B = 40
const PAD_T = 16
const PAD_R = 16

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  suffix?: string
}) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 'var(--fs-sm)' }}>
      <span>
        {label}: <strong>{value}{suffix}</strong>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  )
}

export function BreakEvenDiagram() {
  const [prijs, setPrijs] = useState(50)
  const [cfA, setCfA] = useState(2000) // constante kosten arbeidsintensief
  const [vcA, setVcA] = useState(30) // variabele kosten p.e. arbeidsintensief
  const [cfK, setCfK] = useState(6000) // constante kosten kapitaalintensief
  const [vcK, setVcK] = useState(15) // variabele kosten p.e. kapitaalintensief
  const [toonK, setToonK] = useState(true)

  // Break-even & indifferentiepunt
  const beA = prijs > vcA ? cfA / (prijs - vcA) : Infinity
  const beK = prijs > vcK ? cfK / (prijs - vcK) : Infinity
  const indiff = vcA !== vcK ? (cfK - cfA) / (vcA - vcK) : Infinity

  // Schaal
  const punten = [beA, toonK ? beK : 0, toonK ? indiff : 0].filter((x) => isFinite(x) && x > 0)
  const qMax = Math.max(100, ...punten.map((p) => p * 1.6))
  const yMax = Math.max(prijs * qMax, cfK + vcK * qMax, cfA + vcA * qMax) * 1.05

  const x = (q: number) => PAD_L + (q / qMax) * (W - PAD_L - PAD_R)
  const y = (v: number) => H - PAD_B - (v / yMax) * (H - PAD_T - PAD_B)

  const lijn = (fn: (q: number) => number) => `${x(0)},${y(fn(0))} ${x(qMax)},${y(fn(qMax))}`

  const fmt = (n: number) => (isFinite(n) ? Math.round(n).toLocaleString('nl-NL') : '—')

  return (
    <div className="card" style={{ marginTop: 'var(--sp-3)' }}>
      <h4 style={{ marginTop: 0 }}>Interactief: break-even & indifferentiepunt</h4>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }} role="img" aria-label="Break-even diagram">
        {/* assen */}
        <line x1={PAD_L} y1={PAD_T} x2={PAD_L} y2={H - PAD_B} stroke="var(--c-border-strong)" />
        <line x1={PAD_L} y1={H - PAD_B} x2={W - PAD_R} y2={H - PAD_B} stroke="var(--c-border-strong)" />
        <text x={PAD_L - 8} y={PAD_T + 4} textAnchor="end" fontSize="11" fill="var(--c-text-faint)">€</text>
        <text x={W - PAD_R} y={H - PAD_B + 26} textAnchor="end" fontSize="11" fill="var(--c-text-faint)">afzet (stuks)</text>

        {/* opbrengstlijn */}
        <polyline points={lijn((q) => prijs * q)} fill="none" stroke="var(--c-success)" strokeWidth="2.5" />
        {/* kostenlijn A */}
        <polyline points={lijn((q) => cfA + vcA * q)} fill="none" stroke="var(--c-brand)" strokeWidth="2.5" />
        {/* kostenlijn K */}
        {toonK && <polyline points={lijn((q) => cfK + vcK * q)} fill="none" stroke="var(--c-warn)" strokeWidth="2.5" />}

        {/* break-even A */}
        {isFinite(beA) && beA <= qMax && (
          <>
            <line x1={x(beA)} y1={y(prijs * beA)} x2={x(beA)} y2={H - PAD_B} stroke="var(--c-brand)" strokeDasharray="4 3" opacity="0.6" />
            <circle cx={x(beA)} cy={y(prijs * beA)} r="5" fill="var(--c-brand)" />
          </>
        )}
        {/* break-even K */}
        {toonK && isFinite(beK) && beK <= qMax && (
          <>
            <line x1={x(beK)} y1={y(prijs * beK)} x2={x(beK)} y2={H - PAD_B} stroke="var(--c-warn)" strokeDasharray="4 3" opacity="0.6" />
            <circle cx={x(beK)} cy={y(prijs * beK)} r="5" fill="var(--c-warn)" />
          </>
        )}
        {/* indifferentiepunt */}
        {toonK && isFinite(indiff) && indiff > 0 && indiff <= qMax && (
          <>
            <line x1={x(indiff)} y1={PAD_T} x2={x(indiff)} y2={H - PAD_B} stroke="var(--c-danger)" strokeDasharray="2 3" opacity="0.7" />
            <circle cx={x(indiff)} cy={y(cfA + vcA * indiff)} r="5" fill="var(--c-danger)" />
          </>
        )}
      </svg>

      <div style={{ display: 'flex', gap: 'var(--sp-4)', flexWrap: 'wrap', fontSize: 'var(--fs-sm)', marginBottom: 'var(--sp-3)' }}>
        <span><span style={{ color: 'var(--c-success)' }}>━</span> opbrengst</span>
        <span><span style={{ color: 'var(--c-brand)' }}>━</span> kosten arbeidsintensief (A)</span>
        {toonK && <span><span style={{ color: 'var(--c-warn)' }}>━</span> kosten kapitaalintensief (K)</span>}
        {toonK && <span><span style={{ color: 'var(--c-danger)' }}>┊</span> indifferentiepunt</span>}
      </div>

      <div className="formule-box" style={{ marginTop: 0 }}>
        Break-even A = {fmt(beA)} stuks{'   '}
        {toonK && <>· Break-even K = {fmt(beK)} stuks{'   '}· Indifferentiepunt = {fmt(indiff)} stuks</>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--sp-3)', marginTop: 'var(--sp-3)' }}>
        <Slider label="Verkoopprijs p.e." value={prijs} min={10} max={100} step={1} onChange={setPrijs} suffix=" €" />
        <Slider label="Constante kosten A" value={cfA} min={0} max={10000} step={500} onChange={setCfA} suffix=" €" />
        <Slider label="Variabele kosten A p.e." value={vcA} min={0} max={60} step={1} onChange={setVcA} suffix=" €" />
        {toonK && <Slider label="Constante kosten K" value={cfK} min={0} max={15000} step={500} onChange={setCfK} suffix=" €" />}
        {toonK && <Slider label="Variabele kosten K p.e." value={vcK} min={0} max={60} step={1} onChange={setVcK} suffix=" €" />}
      </div>

      <label className="toggle" style={{ marginTop: 'var(--sp-3)' }}>
        <input type="checkbox" checked={toonK} onChange={(e) => setToonK(e.target.checked)} />
        <span className="toggle-track"><span className="toggle-thumb" /></span>
        <span className="toggle-label">Toon tweede methode (kapitaalintensief) + indifferentiepunt</span>
      </label>
    </div>
  )
}
