// Datamodel voor de tentamen-prep app.

export type Bron = 'pdf' | 'zelfgemaakt'

// Herkomst van de vraag — voor het bron/jaar-filter.
export type BronCategorie =
  | 'formatief'
  | 'tentamen-2026'
  | 'tentamen-2025'
  | 'hertentamen-2024'
  | 'tentamen-2023'
  | 'deel-oefen'
  | 'zelfgemaakt'

export type Difficulty = 'makkelijk' | 'gemiddeld' | 'lastig' | 'berucht'

export interface MCOptie {
  id: string // 'a' | 'b' | 'c' | 'd'
  tekst: string
}

export interface Vraag {
  id: string
  deel: number // 1..7
  type: 'mc' | 'open'
  stam: string // de vraagtekst (mag \n bevatten)
  context?: string // optionele casus/gegevens die boven de vraag staan
  opties?: MCOptie[] // bij type 'mc'
  juistAntwoord: string // optie-id ('a') of, bij open, het kernantwoord
  uitleg: string // volledige uitwerking / waarom dit antwoord juist is
  hints: string[] // 1-3 oplopende hints
  bron: Bron
  bronCategorie?: BronCategorie // herkomst voor het filter (wordt automatisch afgeleid indien leeg)
  bronLabel?: string // bv. "Formatieve toets vr.18" of "Tentamen 12-6-2025 (53% goed)"
  difficulty?: Difficulty
  scorePct?: number // % studenten dat de echte vraag goed had (indien bekend)
}

export interface Voorbeeld {
  titel: string
  casus: string // probleemstelling / gegevens
  stappen: string[] // stap-voor-stap uitwerking
  antwoord: string
}

export interface TheorieSectie {
  titel: string
  uitleg: string // markdown-light (kopjes via **bold**, lijsten via '- ')
  formules?: string[]
  voorbeelden?: Voorbeeld[]
  diagram?: 'breakeven' | 'kwadrant' | 'pdca' | 'verschillen' // optioneel interactief diagram
}

export interface Deel {
  nr: number
  titel: string
  hoofdstukken: string
  kernthema: string // korte omschrijving voor de kaart
  theorie: TheorieSectie[]
  vragen: Vraag[]
}
