import { useState } from 'react'

// Interactief kostprijs-kwadrant: klik een kostenpost en zie in welk kwadrant
// hij valt (direct/indirect × variabel/constant).
type Kwadrant = 'II' | 'I' | 'III' | 'IV'

interface Post {
  naam: string
  kwadrant: Kwadrant
  uitleg: string
}

const POSTEN: Post[] = [
  { naam: 'Grondstof per product', kwadrant: 'II', uitleg: 'Direct toewijsbaar én stijgt met de productie → direct + variabel.' },
  { naam: 'Provisie over de omzet (per productgroep)', kwadrant: 'II', uitleg: 'Hangt aan de omzet van één productgroep → direct + variabel.' },
  { naam: 'Bakboter (door elkaar gebakken)', kwadrant: 'I', uitleg: 'Stijgt met productie, maar niet aan één product toewijsbaar → indirect + variabel.' },
  { naam: 'Energie voor gedeelde machine', kwadrant: 'I', uitleg: 'Variabel met gebruik, maar gedeeld → indirect + variabel.' },
  { naam: 'Stukloon voor één product', kwadrant: 'III', uitleg: 'Per stuk (variabel?) — als vast bedrag per productlijn en direct: direct + constant.' },
  { naam: 'Afschrijving machine voor één product', kwadrant: 'III', uitleg: 'Vast per periode én aan één product te koppelen → direct + constant.' },
  { naam: 'Afschrijving gedeelde bakplaat', kwadrant: 'IV', uitleg: 'Vast per periode én gedeeld over producten → indirect + constant.' },
  { naam: 'Tijdloon meewerkend voorman', kwadrant: 'IV', uitleg: 'Vast salaris, toezicht op meerdere producten → indirect + constant.' },
]

const CELLEN: { k: Kwadrant; titel: string }[] = [
  { k: 'II', titel: 'II · direct + variabel' },
  { k: 'I', titel: 'I · indirect + variabel' },
  { k: 'III', titel: 'III · direct + constant' },
  { k: 'IV', titel: 'IV · indirect + constant' },
]

export function KwadrantDiagram() {
  const [actief, setActief] = useState<Post | null>(null)

  return (
    <div className="card" style={{ marginTop: 'var(--sp-3)' }}>
      <h4 style={{ marginTop: 0 }}>Interactief: in welk kwadrant valt de kostenpost?</h4>
      <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: 'var(--sp-3)' }}>
        {POSTEN.map((p) => (
          <button
            key={p.naam}
            className={`chip ${actief?.naam === p.naam ? 'chip-on' : ''}`}
            onClick={() => setActief(actief?.naam === p.naam ? null : p)}
          >
            {p.naam}
          </button>
        ))}
      </div>

      <div className="kwadrant-grid">
        <div className="kwadrant-axis kwadrant-axis-top">
          <span>Direct</span>
          <span>Indirect</span>
        </div>
        {CELLEN.map((c) => (
          <div key={c.k} className={`kwadrant-cel ${actief?.kwadrant === c.k ? 'kwadrant-actief' : ''}`}>
            <span className="kwadrant-titel">{c.titel}</span>
            {actief?.kwadrant === c.k && <span className="kwadrant-post">{actief.naam}</span>}
          </div>
        ))}
        <div className="kwadrant-axis kwadrant-axis-left">
          <span>Variabel</span>
          <span>Constant</span>
        </div>
      </div>

      <div className="formule-box" style={{ marginTop: 'var(--sp-3)' }}>
        {actief ? `${actief.naam} → kwadrant ${actief.kwadrant}. ${actief.uitleg}` : 'Klik op een kostenpost hierboven.'}
      </div>
    </div>
  )
}
