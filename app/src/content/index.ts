import type { Deel, Vraag } from '../types'
import { deel1 } from './deel1'
import { deel2 } from './deel2'
import { deel3 } from './deel3'
import { deel4 } from './deel4'
import { deel5 } from './deel5'
import { deel6 } from './deel6'
import { deel7 } from './deel7'
import { zelfgemaakteVragen } from './zelfgemaakt'

const ruweDelen: Deel[] = [deel1, deel2, deel3, deel4, deel5, deel6, deel7]

// Voeg de zelfgemaakte vragen toe aan het juiste deel (komen achter de PDF-vragen).
for (const v of zelfgemaakteVragen) {
  const d = ruweDelen.find((x) => x.nr === v.deel)
  if (d) d.vragen.push(v)
}

// Alle delen in de oorspronkelijke (deel)volgorde.
export const delen: Deel[] = ruweDelen

/**
 * Geschat tentamengewicht per deel, DATAGEDREVEN: het aandeel van de
 * echte (PDF-)vragen dat onder dit deel valt, genormaliseerd naar 100%.
 * Dit is een schatting (er bestaat geen officiële %-verdeling).
 */
export function pdfVraagAantal(d: Deel): number {
  return d.vragen.filter((v) => v.bron === 'pdf').length
}

const totaalPdf = ruweDelen.reduce((s, d) => s + pdfVraagAantal(d), 0)

export const gewichten: Record<number, number> = Object.fromEntries(
  ruweDelen.map((d) => [d.nr, Math.round((pdfVraagAantal(d) / totaalPdf) * 100)]),
)

/** Delen gesorteerd op geschat gewicht (zwaarste eerst) voor het dashboard. */
export const delenOpGewicht: Deel[] = [...ruweDelen].sort(
  (a, b) => gewichten[b.nr] - gewichten[a.nr],
)

/** Zichtbare vragen voor een deel, afhankelijk van de zelfgemaakt-toggle. */
export function zichtbareVragen(d: Deel, toonZelfgemaakt: boolean): Vraag[] {
  return toonZelfgemaakt ? d.vragen : d.vragen.filter((v) => v.bron === 'pdf')
}

export function deelByNr(nr: number): Deel | undefined {
  return ruweDelen.find((d) => d.nr === nr)
}
