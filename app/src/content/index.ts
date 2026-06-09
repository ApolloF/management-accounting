import type { BronCategorie, Deel, Difficulty, Vraag } from '../types'
import { deel1 } from './deel1'
import { deel2 } from './deel2'
import { deel3 } from './deel3'
import { deel4 } from './deel4'
import { deel5 } from './deel5'
import { deel6 } from './deel6'
import { deel7 } from './deel7'
import { zelfgemaakteVragen } from './zelfgemaakt'
import { extraVragen } from './extraVragen'

const ruweDelen: Deel[] = [deel1, deel2, deel3, deel4, deel5, deel6, deel7]

// Extra echte tentamenvragen (2023/2024) toevoegen aan het juiste deel — vóór de
// zelfgemaakte, zodat die laatste altijd onderaan staan.
for (const v of extraVragen) {
  const d = ruweDelen.find((x) => x.nr === v.deel)
  if (d) d.vragen.push(v)
}

// Voeg de zelfgemaakte vragen toe aan het juiste deel (komen achter de PDF-vragen).
for (const v of zelfgemaakteVragen) {
  const d = ruweDelen.find((x) => x.nr === v.deel)
  if (d) d.vragen.push(v)
}

// Leid de bron-categorie af uit bron + bronLabel (zodat bestaande vragen niet
// allemaal handmatig hoeven te worden aangepast).
function inferCategorie(v: Vraag): BronCategorie {
  if (v.bron === 'zelfgemaakt') return 'zelfgemaakt'
  const l = (v.bronLabel ?? '').toLowerCase()
  if (l.includes('formatieve')) return 'formatief'
  if (l.includes('hertentamen') || l.includes('2024')) return 'hertentamen-2024'
  if (l.includes('2023')) return 'tentamen-2023'
  if (l.includes('2025') || l.includes('12-6')) return 'tentamen-2025'
  return 'deel-oefen'
}
for (const d of ruweDelen) {
  for (const v of d.vragen) {
    if (!v.bronCategorie) v.bronCategorie = inferCategorie(v)
  }
}

export const delen: Deel[] = ruweDelen

export const BRON_LABELS: Record<BronCategorie, string> = {
  formatief: 'Formatieve toets',
  'tentamen-2025': 'Tentamen 2025',
  'hertentamen-2024': 'Hertentamen 2024',
  'tentamen-2023': 'Tentamen 2023',
  'deel-oefen': 'Deel-oefenvragen',
  zelfgemaakt: 'Zelfgemaakt',
}

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  makkelijk: 'Makkelijk',
  gemiddeld: 'Gemiddeld',
  lastig: 'Lastig',
  berucht: 'Berucht',
}

/**
 * Geschat tentamengewicht per deel, DATAGEDREVEN: het aandeel van de
 * echte (PDF-)vragen dat onder dit deel valt, genormaliseerd naar 100%.
 */
export function pdfVraagAantal(d: Deel): number {
  return d.vragen.filter((v) => v.bron === 'pdf').length
}

const totaalPdf = ruweDelen.reduce((s, d) => s + pdfVraagAantal(d), 0)

export const gewichten: Record<number, number> = Object.fromEntries(
  ruweDelen.map((d) => [d.nr, Math.round((pdfVraagAantal(d) / totaalPdf) * 100)]),
)

export const delenOpGewicht: Deel[] = [...ruweDelen].sort(
  (a, b) => gewichten[b.nr] - gewichten[a.nr],
)

export interface VraagFilter {
  toonZelfgemaakt: boolean
  bronnen?: BronCategorie[] // leeg/undefined = alle PDF-bronnen
  difficulties?: Difficulty[] // leeg/undefined = alle
  alleenOnaf?: boolean // alleen fout of nog niet gedaan
  statusVan?: (id: string) => { beantwoord: boolean; goed: boolean } | undefined
}

/** Welke bron-categorieën komen in een deel voor (voor de filterchips). */
export function aanwezigeBronnen(d: Deel): BronCategorie[] {
  const set = new Set<BronCategorie>()
  for (const v of d.vragen) if (v.bronCategorie) set.add(v.bronCategorie)
  return [...set]
}

/** Gefilterde zichtbare vragen voor een deel. */
export function zichtbareVragen(d: Deel, filter: VraagFilter): Vraag[] {
  return d.vragen.filter((v) => {
    if (v.bron === 'zelfgemaakt' && !filter.toonZelfgemaakt) return false
    if (filter.bronnen && filter.bronnen.length > 0 && !filter.bronnen.includes(v.bronCategorie!))
      return false
    if (
      filter.difficulties &&
      filter.difficulties.length > 0 &&
      (!v.difficulty || !filter.difficulties.includes(v.difficulty))
    )
      return false
    if (filter.alleenOnaf && filter.statusVan) {
      const st = filter.statusVan(v.id)
      if (st?.beantwoord && st.goed) return false // alleen onaf of fout
    }
    return true
  })
}

export function deelByNr(nr: number): Deel | undefined {
  return ruweDelen.find((d) => d.nr === nr)
}

export function alleVragen(): Vraag[] {
  return ruweDelen.flatMap((d) => d.vragen)
}
