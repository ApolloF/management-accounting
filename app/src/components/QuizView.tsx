import { useMemo, useState } from 'react'
import type { Deel, Vraag } from '../types'
import { Badge, Button, Card, DifficultyBadge, ProgressBar } from './ui'
import type { ProgressApi } from '../hooks/useProgress'
import { aanwezigeBronnen, zichtbareVragen } from '../content'
import { FilterBar, type FilterState } from './FilterBar'

export function QuizView({
  deel,
  progress,
  onNaarTheorie,
  onKlaar,
}: {
  deel: Deel
  progress: ProgressApi
  onNaarTheorie: () => void
  onKlaar: () => void
}) {
  const [filter, setFilter] = useState<FilterState>({
    bronnen: [],
    difficulties: [],
    alleenOnaf: false,
    toonZelfgemaakt: progress.state.toonZelfgemaakt,
  })
  const [idx, setIdx] = useState(0)

  const beschikbareBronnen = useMemo(() => aanwezigeBronnen(deel), [deel])
  const vragen = useMemo(
    () =>
      zichtbareVragen(deel, {
        toonZelfgemaakt: filter.toonZelfgemaakt,
        bronnen: filter.bronnen,
        difficulties: filter.difficulties,
        alleenOnaf: filter.alleenOnaf,
        statusVan: progress.statusVan,
      }),
    [deel, filter, progress.statusVan, progress.state.vragen],
  )

  const veiligIdx = Math.min(idx, Math.max(0, vragen.length - 1))
  const vraag = vragen[veiligIdx]

  const updateFilter = (s: FilterState) => {
    setFilter(s)
    if (s.toonZelfgemaakt !== progress.state.toonZelfgemaakt) progress.setToonZelfgemaakt(s.toonZelfgemaakt)
    setIdx(0)
  }

  return (
    <div>
      <button className="crumb" onClick={onNaarTheorie} style={{ marginBottom: 8 }}>
        ← Terug naar theorie
      </button>
      <div className="quiz-head">
        <h2 style={{ margin: 0, fontSize: 'var(--fs-lg)' }}>
          {deel.nr === 8 ? 'Open vragen — oefenen' : `Deel ${romein(deel.nr)} — oefenvragen`}
        </h2>
        <span className="q-counter">
          {vragen.length > 0 ? `Vraag ${veiligIdx + 1} / ${vragen.length}` : '0 vragen'}
        </span>
      </div>

      <FilterBar beschikbareBronnen={beschikbareBronnen} state={filter} onChange={updateFilter} />

      {!vraag ? (
        <Card>
          <p className="muted" style={{ margin: 0 }}>
            Geen vragen die aan deze filters voldoen. Pas de bron-/niveaufilter aan of zet "alleen
            fout / nog niet gedaan" uit.
          </p>
        </Card>
      ) : (
        <>
          <ProgressBar value={((veiligIdx + 1) / vragen.length) * 100} />
          <VraagKaart key={vraag.id} vraag={vraag} progress={progress} />
          <div className="quiz-nav">
            <Button variant="secondary" disabled={veiligIdx === 0} onClick={() => setIdx(veiligIdx - 1)}>
              ← Vorige
            </Button>
            {veiligIdx < vragen.length - 1 ? (
              <Button onClick={() => setIdx(veiligIdx + 1)}>Volgende →</Button>
            ) : (
              <Button onClick={onKlaar}>Naar mijn voortgang →</Button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function VraagKaart({ vraag, progress }: { vraag: Vraag; progress: ProgressApi }) {
  const eerder = progress.statusVan(vraag.id)
  const [gekozen, setGekozen] = useState<string | null>(null)
  const [gecontroleerd, setGecontroleerd] = useState(false)
  const [hintsOpen, setHintsOpen] = useState(0)
  const [openTekst, setOpenTekst] = useState('')
  const [openOnthuld, setOpenOnthuld] = useState(false)

  const toonHint = () => {
    const n = Math.min(hintsOpen + 1, vraag.hints.length)
    setHintsOpen(n)
    progress.registreerHint(vraag.id, n)
  }

  const controleer = () => {
    if (vraag.type === 'mc') {
      if (!gekozen) return
      setGecontroleerd(true)
      progress.beantwoord(vraag.id, gekozen === vraag.juistAntwoord, hintsOpen)
    }
  }

  const isMC = vraag.type === 'mc'

  return (
    <Card className="mt-4">
      <div className="row between" style={{ marginBottom: 8 }}>
        <div className="row" style={{ gap: 8 }}>
          {vraag.difficulty && <DifficultyBadge difficulty={vraag.difficulty} />}
          {vraag.bron === 'zelfgemaakt' ? (
            <Badge>Zelfgemaakt</Badge>
          ) : (
            <Badge variant="brand">{vraag.bronLabel ?? 'Echte tentamenvraag'}</Badge>
          )}
        </div>
        {eerder?.beantwoord && (
          <span className="muted">
            Eerder: {eerder.goed ? '✓ goed' : '✗ fout'}
            {eerder.hintsGebruikt > 0 && ` · ${eerder.hintsGebruikt} hint(s)`}
          </span>
        )}
      </div>

      {vraag.context && <div className="q-context">{vraag.context}</div>}
      <div className="q-stam">{vraag.stam}</div>

      {isMC && (
        <div className="opties">
          {vraag.opties!.map((o) => {
            let cls = 'optie'
            if (gecontroleerd) {
              if (o.id === vraag.juistAntwoord) cls += ' correct'
              else if (o.id === gekozen) cls += ' wrong'
            } else if (o.id === gekozen) {
              cls += ' selected'
            }
            return (
              <button
                key={o.id}
                className={cls}
                disabled={gecontroleerd}
                onClick={() => setGekozen(o.id)}
              >
                <span className="letter">{o.id}</span>
                <span>{o.tekst}</span>
              </button>
            )
          })}
        </div>
      )}

      {!isMC && (
        <textarea
          className="open-antwoord"
          placeholder="Schrijf hier je uitwerking / antwoord…"
          value={openTekst}
          onChange={(e) => setOpenTekst(e.target.value)}
          disabled={openOnthuld}
        />
      )}

      {/* Hints */}
      <div className="hints">
        <div className="hint-row">
          <Button
            variant="ghost"
            size="sm"
            onClick={toonHint}
            disabled={hintsOpen >= vraag.hints.length}
          >
            💡 {hintsOpen === 0 ? 'Hint' : hintsOpen >= vraag.hints.length ? 'Geen hints meer' : 'Nog een hint'}
          </Button>
          {hintsOpen > 0 && (
            <span className="muted">
              {hintsOpen}/{vraag.hints.length} hint(s) gebruikt — wordt onthouden
            </span>
          )}
        </div>
        {vraag.hints.slice(0, hintsOpen).map((h, i) => (
          <div className="hint-card" key={i}>
            <span className="h-lbl">Hint {i + 1}</span>
            {h}
          </div>
        ))}
      </div>

      {/* Actie + feedback */}
      {isMC && !gecontroleerd && (
        <Button onClick={controleer} disabled={!gekozen}>
          Controleer antwoord
        </Button>
      )}

      {isMC && gecontroleerd && (
        <div className={`feedback ${gekozen === vraag.juistAntwoord ? 'goed' : 'fout'}`}>
          <div className="f-title">
            {gekozen === vraag.juistAntwoord ? '✓ Juist!' : '✗ Niet juist'}
          </div>
          <div className="uitleg">{vraag.uitleg}</div>
        </div>
      )}

      {!isMC && !openOnthuld && (
        <Button onClick={() => setOpenOnthuld(true)}>Toon uitwerking</Button>
      )}

      {!isMC && openOnthuld && (
        <>
          <div className="feedback goed">
            <div className="f-title">Uitwerking</div>
            <div className="uitleg">{vraag.uitleg}</div>
          </div>
          <div className="row" style={{ gap: 8 }}>
            <span className="muted">Had je dit goed?</span>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => progress.beantwoord(vraag.id, true, hintsOpen)}
            >
              ✓ Goed
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => progress.beantwoord(vraag.id, false, hintsOpen)}
            >
              ✗ Fout
            </Button>
            {eerder?.beantwoord && <span className="muted">opgeslagen</span>}
          </div>
        </>
      )}
    </Card>
  )
}

function romein(n: number): string {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][n] ?? String(n)
}
