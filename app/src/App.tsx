import { useState } from 'react'
import { useProgress } from './hooks/useProgress'
import { Dashboard } from './components/Dashboard'
import { TheorieView } from './components/TheorieView'
import { QuizView } from './components/QuizView'
import { ResultatenView } from './components/ResultatenView'
import { deelByNr } from './content'

type View =
  | { naam: 'dashboard' }
  | { naam: 'theorie'; deel: number }
  | { naam: 'quiz'; deel: number }
  | { naam: 'resultaten' }

export default function App() {
  const progress = useProgress()
  const [view, setView] = useState<View>({ naam: 'dashboard' })

  const huidigDeel = 'deel' in view ? deelByNr(view.deel) : undefined

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <span className="brand-dot">📘</span>
          <h1>MA BDK — Tentamenvoorbereiding</h1>
          <span className="spacer" />
          {view.naam !== 'dashboard' && (
            <button className="crumb" onClick={() => setView({ naam: 'dashboard' })}>
              ← Overzicht
            </button>
          )}
          {view.naam !== 'resultaten' && (
            <button className="crumb" onClick={() => setView({ naam: 'resultaten' })}>
              Mijn voortgang
            </button>
          )}
        </div>
      </header>

      <main className="container">
        {view.naam === 'dashboard' && (
          <Dashboard
            progress={progress}
            onOpenDeel={(nr) => setView({ naam: 'theorie', deel: nr })}
            onResultaten={() => setView({ naam: 'resultaten' })}
          />
        )}

        {view.naam === 'theorie' && huidigDeel && (
          <TheorieView
            deel={huidigDeel}
            onNaarQuiz={() => setView({ naam: 'quiz', deel: huidigDeel.nr })}
            onTerug={() => setView({ naam: 'dashboard' })}
          />
        )}

        {view.naam === 'quiz' && huidigDeel && (
          <QuizView
            deel={huidigDeel}
            progress={progress}
            onNaarTheorie={() => setView({ naam: 'theorie', deel: huidigDeel.nr })}
            onKlaar={() => setView({ naam: 'resultaten' })}
          />
        )}

        {view.naam === 'resultaten' && (
          <ResultatenView
            progress={progress}
            onOpenDeel={(nr) => setView({ naam: 'theorie', deel: nr })}
            onTerug={() => setView({ naam: 'dashboard' })}
          />
        )}
      </main>

      <footer className="container muted center" style={{ paddingTop: 8 }}>
        Oefenstof o.b.v. de cursus Management Accounting BDK (EBP026A05, RUG). Gewichten zijn een schatting.
      </footer>
    </div>
  )
}
