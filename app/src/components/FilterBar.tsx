import type { BronCategorie, Difficulty } from '../types'
import { BRON_LABELS, DIFFICULTY_LABELS } from '../content'
import { Toggle } from './ui'

const DIFFS: Difficulty[] = ['makkelijk', 'gemiddeld', 'lastig', 'berucht']

export interface FilterState {
  bronnen: BronCategorie[]
  difficulties: Difficulty[]
  alleenOnaf: boolean
  toonZelfgemaakt: boolean
}

function Chip({
  actief,
  onClick,
  children,
  variant,
}: {
  actief: boolean
  onClick: () => void
  children: React.ReactNode
  variant?: Difficulty
}) {
  const cls = ['chip']
  if (actief) cls.push('chip-on')
  if (actief && variant) cls.push(`chip-${variant}`)
  return (
    <button type="button" className={cls.join(' ')} onClick={onClick} aria-pressed={actief}>
      {children}
    </button>
  )
}

export function FilterBar({
  beschikbareBronnen,
  state,
  onChange,
}: {
  beschikbareBronnen: BronCategorie[]
  state: FilterState
  onChange: (s: FilterState) => void
}) {
  const toggleBron = (b: BronCategorie) => {
    const has = state.bronnen.includes(b)
    onChange({ ...state, bronnen: has ? state.bronnen.filter((x) => x !== b) : [...state.bronnen, b] })
  }
  const toggleDiff = (d: Difficulty) => {
    const has = state.difficulties.includes(d)
    onChange({
      ...state,
      difficulties: has ? state.difficulties.filter((x) => x !== d) : [...state.difficulties, d],
    })
  }
  // Toon de zelfgemaakt-bron alleen als de toggle aan staat.
  const bronnen = beschikbareBronnen.filter((b) => b !== 'zelfgemaakt' || state.toonZelfgemaakt)

  return (
    <div className="filterbar">
      <div className="filter-group">
        <span className="filter-label">Bron</span>
        <div className="chips">
          {bronnen.map((b) => (
            <Chip key={b} actief={state.bronnen.includes(b)} onClick={() => toggleBron(b)}>
              {BRON_LABELS[b]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Niveau</span>
        <div className="chips">
          {DIFFS.map((d) => (
            <Chip key={d} actief={state.difficulties.includes(d)} onClick={() => toggleDiff(d)} variant={d}>
              {DIFFICULTY_LABELS[d]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="filter-group filter-toggles">
        <Toggle
          checked={state.alleenOnaf}
          onChange={(v) => onChange({ ...state, alleenOnaf: v })}
          label="Alleen fout / nog niet gedaan"
        />
        <Toggle
          checked={state.toonZelfgemaakt}
          onChange={(v) =>
            onChange({
              ...state,
              toonZelfgemaakt: v,
              // bij uitschakelen ook de zelfgemaakt-bronfilter opruimen
              bronnen: v ? state.bronnen : state.bronnen.filter((b) => b !== 'zelfgemaakt'),
            })
          }
          label="Toon ook zelfgemaakte vragen"
        />
      </div>
    </div>
  )
}
