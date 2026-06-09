import type { Vraag } from '../types'

// Extra, zélf gemaakte oefenvragen (bron: 'zelfgemaakt').
// Standaard verborgen — alleen zichtbaar met de toggle in de quiz.
// Bedoeld als extra drill bovenop de echte PDF-vragen.
export const zelfgemaakteVragen: Vraag[] = [
  {
    id: 'z-d1-direct-indirect',
    deel: 1,
    type: 'mc',
    stam: 'Een meewerkend voorman houdt toezicht op de productie van drie verschillende producten en wordt per maand een vast salaris betaald. Zijn loonkosten zijn:',
    opties: [
      { id: 'a', tekst: 'direct en variabel' },
      { id: 'b', tekst: 'direct en constant' },
      { id: 'c', tekst: 'indirect en variabel' },
      { id: 'd', tekst: 'indirect en constant' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d. Vast maandsalaris → constant (niet afhankelijk van aantallen). Toezicht op meerdere producten zonder direct verband → indirect. Kwadrant IV.',
    hints: [
      'Vast salaris per maand: variabel of constant?',
      'Toezicht op drie producten tegelijk: direct toewijsbaar aan één product?',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'makkelijk',
  },
  {
    id: 'z-d2-iskp',
    deel: 2,
    type: 'mc',
    stam: 'Variabele kosten €18/stuk, constante kosten €600.000, normale productie 50.000 stuks. Wat is de integrale standaardkostprijs?',
    opties: [
      { id: 'a', tekst: '€12' },
      { id: 'b', tekst: '€18' },
      { id: 'c', tekst: '€30' },
      { id: 'd', tekst: '€42' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c. Constante kosten p.e. = €600.000 / 50.000 = €12. ISKP = €18 + €12 = €30.',
    hints: [
      'ISKP = variabele kosten p.e. + constante kosten p.e.',
      'Constante kosten p.e. = constante kosten ÷ normale productie.',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'makkelijk',
  },
  {
    id: 'z-d3-efficiency',
    deel: 3,
    type: 'mc',
    stam: 'Standaard 5 kg/stuk à €4. Werkelijk: 10.000 stuks geproduceerd met 52.000 kg. Bereken het efficiencyverschil op grondstof.',
    opties: [
      { id: 'a', tekst: '−€8.000 (nadelig)' },
      { id: 'b', tekst: '+€8.000 (voordelig)' },
      { id: 'c', tekst: '−€2.000 (nadelig)' },
      { id: 'd', tekst: '+€2.000 (voordelig)' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Standaardhoeveelheid = 10.000 × 5 = 50.000 kg. Efficiencyverschil = (HS − HW) × PS = (50.000 − 52.000) × €4 = −€8.000 (nadelig: meer verbruikt dan standaard).',
    hints: [
      'Efficiencyverschil = (standaardhoeveelheid − werkelijke hoeveelheid) × standaardprijs.',
      'Standaardhoeveelheid = werkelijke productie × standaard kg/stuk.',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'gemiddeld',
  },
  {
    id: 'z-d4-terugverdien',
    deel: 4,
    type: 'mc',
    stam: 'Investering €100.000, jaarlijkse nettogeldontvangst constant €25.000. Wat is de (boekhoudkundige) terugverdienperiode?',
    opties: [
      { id: 'a', tekst: '2 jaar' },
      { id: 'b', tekst: '4 jaar' },
      { id: 'c', tekst: '5 jaar' },
      { id: 'd', tekst: '0,25 jaar' },
    ],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. TVP = investering / jaarlijkse nettogeldontvangst = €100.000 / €25.000 = 4 jaar.',
    hints: ['TVP = investering ÷ jaarlijkse nettogeldontvangst.'],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'makkelijk',
  },
  {
    id: 'z-d5-ri',
    deel: 5,
    type: 'mc',
    stam: 'Divisie: winst €90.000, geïnvesteerd vermogen €500.000, vereist rendement 15%. Wat is de residual income (RI)?',
    opties: [
      { id: 'a', tekst: '+€15.000' },
      { id: 'b', tekst: '−€15.000' },
      { id: 'c', tekst: '+€75.000' },
      { id: 'd', tekst: '+€90.000' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. RI = winst − vereist rendement × vermogen = €90.000 − 0,15 × €500.000 = €90.000 − €75.000 = €15.000 positief.',
    hints: ['RI = winst − (vereist rendement × geïnvesteerd vermogen).'],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'makkelijk',
  },
  {
    id: 'z-d6-bezetting',
    deel: 6,
    type: 'mc',
    stam: 'Werkelijke productie 11.000, normale productie 10.000, constante kosten €500.000. Wat is het bezettingsresultaat?',
    opties: [
      { id: 'a', tekst: '+€50.000 (voordelig)' },
      { id: 'b', tekst: '−€50.000 (nadelig)' },
      { id: 'c', tekst: '+€5.000' },
      { id: 'd', tekst: '+€500.000' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Constante kosten p.e. = €500.000 / 10.000 = €50. Bezettingsresultaat = (11.000 − 10.000) × €50 = +€50.000 (meer dan normaal geproduceerd → voordelig).',
    hints: [
      'Constante kosten p.e. = constante kosten ÷ normale productie.',
      'Bezettingsresultaat = (werkelijke − normale productie) × constante kosten p.e.',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'gemiddeld',
  },
  {
    id: 'z-d7-overboeking',
    deel: 7,
    type: 'mc',
    stam: 'Een rubriek heeft een voordelig (credit) saldo dat naar rubriek 9 moet worden overgeboekt. Hoe wordt dat geboekt?',
    opties: [
      { id: 'a', tekst: 'overboekingsrekening debiteren, resultatenrekening in rubriek 9 crediteren' },
      { id: 'b', tekst: 'overboekingsrekening crediteren, resultatenrekening in rubriek 9 debiteren' },
      { id: 'c', tekst: 'beide rekeningen debiteren' },
      { id: 'd', tekst: 'beide rekeningen crediteren' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Een voordelig (credit) saldo wordt weggeboekt door de overboekingsrekening te debiteren en de bijbehorende resultatenrekening in rubriek 9 te crediteren (bij een nadelig saldo precies andersom).',
    hints: ['Een creditsaldo wegboeken = die rekening aan de debetzijde tegenboeken.'],
    bron: 'zelfgemaakt',
    bronLabel: 'Extra oefenvraag',
    difficulty: 'lastig',
  },
]
