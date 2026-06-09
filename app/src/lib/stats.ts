import type { Deel } from '../types'
import { delen, gewichten, pdfVraagAantal } from '../content'
import type { ProgressState } from '../hooks/useProgress'

export interface DeelStats {
  deel: Deel
  gewicht: number // geschat % van het tentamen
  totaalPdf: number // aantal PDF-vragen
  beantwoord: number // beantwoorde PDF-vragen
  goed: number // goed beantwoorde PDF-vragen
  hintsTotaal: number // som hints gebruikt over beantwoorde PDF-vragen
  beheersing: number // 0..1 (goed / beantwoord), 0 als niets beantwoord
  voortgangPct: number // beantwoord / totaal × 100
  focusScore: number // hoger = eerder focussen
}

export function deelStats(deel: Deel, state: ProgressState): DeelStats {
  const pdfVragen = deel.vragen.filter((v) => v.bron === 'pdf')
  let beantwoord = 0
  let goed = 0
  let hintsTotaal = 0
  for (const v of pdfVragen) {
    const st = state.vragen[v.id]
    if (st?.beantwoord) {
      beantwoord++
      if (st.goed) goed++
      hintsTotaal += st.hintsGebruikt
    }
  }
  const totaalPdf = pdfVraagAantal(deel)
  const beheersing = beantwoord > 0 ? goed / beantwoord : 0
  const voortgangPct = totaalPdf > 0 ? (beantwoord / totaalPdf) * 100 : 0
  const gewicht = gewichten[deel.nr] ?? 0

  // Focus-score: zwaar wegende delen die je nog niet beheerst (of waarvoor je
  // veel hints nodig had) komen bovenaan. Onbegonnen delen tellen als "niet beheerst".
  const hintFactor = beantwoord > 0 ? hintsTotaal / (beantwoord * 3) : 0 // 0..1
  const onbeheerst = 1 - beheersing
  const onbegonnen = beantwoord === 0 ? 0.3 : 0 // lichte boost voor nog niet gestart
  const focusScore = gewicht * (onbeheerst + 0.4 * hintFactor + onbegonnen)

  return {
    deel,
    gewicht,
    totaalPdf,
    beantwoord,
    goed,
    hintsTotaal,
    beheersing,
    voortgangPct,
    focusScore,
  }
}

export function alleStats(state: ProgressState): DeelStats[] {
  return delen.map((d) => deelStats(d, state))
}

/** Delen gerangschikt op focus-score (hoogste eerst). */
export function focusRanking(state: ProgressState): DeelStats[] {
  return [...alleStats(state)].sort((a, b) => b.focusScore - a.focusScore)
}

export function totaalGoed(state: ProgressState): { goed: number; beantwoord: number; totaal: number } {
  let goed = 0
  let beantwoord = 0
  let totaal = 0
  for (const d of delen) {
    for (const v of d.vragen.filter((x) => x.bron === 'pdf')) {
      totaal++
      const st = state.vragen[v.id]
      if (st?.beantwoord) {
        beantwoord++
        if (st.goed) goed++
      }
    }
  }
  return { goed, beantwoord, totaal }
}
