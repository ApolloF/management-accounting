import { useCallback, useEffect, useState } from 'react'

// Voortgang per vraag, bewaard in localStorage.
export interface VraagStatus {
  beantwoord: boolean
  goed: boolean
  hintsGebruikt: number // aantal hints onthuld voor deze vraag
}

export interface ProgressState {
  vragen: Record<string, VraagStatus>
  toonZelfgemaakt: boolean
}

const KEY = 'ma-bdk-progress-v1'

const leeg: ProgressState = { vragen: {}, toonZelfgemaakt: false }

function laad(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return leeg
    const parsed = JSON.parse(raw)
    return { ...leeg, ...parsed, vragen: parsed.vragen ?? {} }
  } catch {
    return leeg
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(laad)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(state))
    } catch {
      /* localStorage niet beschikbaar — negeer */
    }
  }, [state])

  const beantwoord = useCallback((vraagId: string, goed: boolean, hintsGebruikt: number) => {
    setState((s) => ({
      ...s,
      vragen: {
        ...s.vragen,
        [vraagId]: { beantwoord: true, goed, hintsGebruikt },
      },
    }))
  }, [])

  // Registreer hintgebruik los van het beantwoorden (zodat het onthouden wordt
  // ook als de gebruiker een hint opent en pas later antwoordt).
  const registreerHint = useCallback((vraagId: string, hintsGebruikt: number) => {
    setState((s) => {
      const huidig = s.vragen[vraagId]
      return {
        ...s,
        vragen: {
          ...s.vragen,
          [vraagId]: {
            beantwoord: huidig?.beantwoord ?? false,
            goed: huidig?.goed ?? false,
            hintsGebruikt: Math.max(huidig?.hintsGebruikt ?? 0, hintsGebruikt),
          },
        },
      }
    })
  }, [])

  const setToonZelfgemaakt = useCallback((v: boolean) => {
    setState((s) => ({ ...s, toonZelfgemaakt: v }))
  }, [])

  const reset = useCallback(() => setState(leeg), [])

  const statusVan = useCallback(
    (vraagId: string): VraagStatus | undefined => state.vragen[vraagId],
    [state.vragen],
  )

  return {
    state,
    statusVan,
    beantwoord,
    registreerHint,
    setToonZelfgemaakt,
    reset,
  }
}

export type ProgressApi = ReturnType<typeof useProgress>
