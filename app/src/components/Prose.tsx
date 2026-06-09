import type { ReactNode } from 'react'

// Minimale markdown-light renderer: **bold**, `code`, '- ' lijsten, dubbele
// newline = nieuwe alinea. Geen externe dependency nodig.
function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  // Split op **bold** en `code`
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let m: RegExpExecArray | null
  let key = 0
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) nodes.push(<strong key={key++}>{tok.slice(2, -2)}</strong>)
    else nodes.push(<code key={key++}>{tok.slice(1, -1)}</code>)
    last = m.index + tok.length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

export function Prose({ text }: { text: string }) {
  const blocks = text.split('\n\n')
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        const lines = block.split('\n')
        const isList = lines.every((l) => l.trim().startsWith('- '))
        if (isList) {
          return (
            <ul key={i}>
              {lines.map((l, j) => (
                <li key={j}>{inline(l.trim().slice(2))}</li>
              ))}
            </ul>
          )
        }
        // Gemengd blok: render regel voor regel, '- ' regels als losse bullets.
        return (
          <p key={i}>
            {lines.map((l, j) => {
              const t = l.trim()
              const bullet = t.startsWith('- ')
              return (
                <span key={j}>
                  {bullet ? '• ' : ''}
                  {inline(bullet ? t.slice(2) : l)}
                  {j < lines.length - 1 && <br />}
                </span>
              )
            })}
          </p>
        )
      })}
    </div>
  )
}
