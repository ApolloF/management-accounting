// Schema dat het perioderesultaat en de verschillenanalyse uitsplitst.
// Klik een knoop voor de formule/uitleg.
import { useState } from 'react'

interface Knoop {
  id: string
  label: string
  formule?: string
  kinderen?: Knoop[]
}

const BOOM: Knoop = {
  id: 'periode',
  label: 'Perioderesultaat (ISKP)',
  formule: 'Perioderesultaat = transactieresultaat + bezettingsresultaat',
  kinderen: [
    {
      id: 'transactie',
      label: 'Transactieresultaat',
      formule: 'Omzet − (verkopen × integrale standaardkostprijs). Resultaat op de verkochte producten.',
      kinderen: [
        { id: 'vpv', label: 'Verkoopprijsverschil', formule: '(VPw − VPb) × Qw — onafhankelijk van de normale productie.' },
        { id: 'vov', label: 'Verkoopomvangverschil', formule: '(Qw − Qs) × (VPb − KP) — bevat KP, dus afhankelijk van normale productie.' },
      ],
    },
    {
      id: 'bezetting',
      label: 'Bezettingsresultaat',
      formule: '(werkelijke − normale productie) × constante kosten p.e. Positief bij méér dan normaal produceren.',
    },
    {
      id: 'kosten',
      label: 'Kostenverschillen (productiesfeer)',
      formule: 'Prijs- en efficiencyverschillen op grondstof en manuren.',
      kinderen: [
        { id: 'pv', label: 'Prijsverschil', formule: '(PS − PW) × HW — per kostensoort (grondstof, manuren).' },
        { id: 'ev', label: 'Efficiencyverschil', formule: '(HS − HW) × PS — toegestane vs. werkelijke hoeveelheid.' },
      ],
    },
  ],
}

function Node({ knoop, actief, setActief, diep }: { knoop: Knoop; actief: string; setActief: (id: string) => void; diep: number }) {
  return (
    <div className="boom-node">
      <button
        className={`boom-box ${actief === knoop.id ? 'boom-actief' : ''}`}
        style={{ marginLeft: diep * 18 }}
        onClick={() => setActief(knoop.id)}
      >
        {diep > 0 && <span className="boom-tak">└</span>}
        {knoop.label}
      </button>
      {knoop.kinderen?.map((k) => (
        <Node key={k.id} knoop={k} actief={actief} setActief={setActief} diep={diep + 1} />
      ))}
    </div>
  )
}

function vind(k: Knoop, id: string): Knoop | undefined {
  if (k.id === id) return k
  for (const c of k.kinderen ?? []) {
    const r = vind(c, id)
    if (r) return r
  }
}

export function VerschillenBoom() {
  const [actief, setActief] = useState('periode')
  const sel = vind(BOOM, actief)
  return (
    <div className="card" style={{ marginTop: 'var(--sp-3)' }}>
      <h4 style={{ marginTop: 0 }}>Resultaten & verschillen — overzicht</h4>
      <div className="boom">
        <Node knoop={BOOM} actief={actief} setActief={setActief} diep={0} />
      </div>
      {sel?.formule && <div className="formule-box" style={{ marginTop: 'var(--sp-3)' }}>{sel.formule}</div>}
    </div>
  )
}
