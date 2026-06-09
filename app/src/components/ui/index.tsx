// Design-system kernset. Eén bron voor herbruikbare UI-primitieven,
// gebouwd op de tokens in styles/tokens.css.
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { Difficulty } from '../../types'

/* ---------- Card ---------- */
export function Card({
  children,
  interactive,
  onClick,
  className = '',
}: {
  children: ReactNode
  interactive?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <div
      className={`card ${interactive ? 'card-interactive' : ''} ${className}`}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick?.()
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}

/* ---------- Button ---------- */
type BtnVariant = 'primary' | 'secondary' | 'ghost'
export function Button({
  variant = 'primary',
  block,
  size,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: BtnVariant
  block?: boolean
  size?: 'sm'
}) {
  return (
    <button
      className={`btn btn-${variant} ${block ? 'btn-block' : ''} ${size === 'sm' ? 'btn-sm' : ''}`}
      {...rest}
    >
      {children}
    </button>
  )
}

/* ---------- Badge ---------- */
export function Badge({
  children,
  variant = 'neutral',
}: {
  children: ReactNode
  variant?: 'neutral' | 'brand' | Difficulty
}) {
  const cls = variant === 'neutral' ? 'badge' : `badge badge-${variant}`
  return <span className={cls}>{children}</span>
}

const DIFF_LABEL: Record<Difficulty, string> = {
  makkelijk: 'Makkelijk',
  gemiddeld: 'Gemiddeld',
  lastig: 'Lastig',
  berucht: 'Berucht lastig',
}
export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return <Badge variant={difficulty}>{DIFF_LABEL[difficulty]}</Badge>
}

/* ---------- ProgressBar ---------- */
export function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className="progress" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin={0} aria-valuemax={100}>
      <div className={`progress-fill ${pct >= 100 ? 'is-full' : ''}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

/* ---------- Toggle ---------- */
export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label?: string
}) {
  return (
    <label className="toggle">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="toggle-track">
        <span className="toggle-thumb" />
      </span>
      {label && <span className="toggle-label">{label}</span>}
    </label>
  )
}
