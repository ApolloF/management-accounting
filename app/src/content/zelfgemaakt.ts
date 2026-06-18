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
  // ===== GERECONSTRUEERD uit geheugen: tentamen 11-6-2026, niet-gefotografeerde vragen 30-34 =====
  // Deel V (prestatiemanagement / resultaatverantwoording). Exacte vraagtekst en opties zijn
  // ONBEKEND; deze zijn op onderwerp nagemaakt met zelf gekozen cijfers. De juiste letters van de
  // echte vragen (30=d, 31=b, 32=d, 33=d, 34=b) horen NIET per se bij deze reconstructies.
  {
    id: 'z26-roi-brutowinst',
    deel: 5,
    type: 'mc',
    stam: 'Welk filiaal behaalt de hoogste brutowinst? (brutowinst = geïnvesteerd vermogen × omloopsnelheid van het vermogen × brutowinstmarge)',
    context:
      'Vier filialen (geïnvesteerd vermogen · omloopsnelheid · brutowinstmarge):\n· A: €200.000 · 3,0 · 8%\n· B: €150.000 · 4,0 · 9%\n· C: €300.000 · 2,0 · 10%\n· D: €250.000 · 2,5 · 7%',
    opties: [
      { id: 'a', tekst: 'filiaal A (€48.000)' },
      { id: 'b', tekst: 'filiaal B (€54.000)' },
      { id: 'c', tekst: 'filiaal C (€60.000)' },
      { id: 'd', tekst: 'filiaal D (€43.750)' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c. Omzet = vermogen × omloopsnelheid; brutowinst = omzet × marge = vermogen × omloopsnelheid × marge.\nA: 200.000×3,0×8% = €48.000 · B: 150.000×4,0×9% = €54.000 · C: 300.000×2,0×10% = €60.000 · D: 250.000×2,5×7% = €43.750. Hoogste = C.',
    hints: [
      'Omloopsnelheid van het vermogen = omzet / geïnvesteerd vermogen → omzet = vermogen × omloopsnelheid.',
      'Brutowinst = omzet × brutowinstmarge. Reken alle vier uit en vergelijk.',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Tentamen 2026 (Deel V) — gereconstrueerd',
    difficulty: 'lastig',
  },
  {
    id: 'z26-takken-winstgevend',
    deel: 5,
    type: 'mc',
    stam: 'Welke takken zijn economisch winstgevend, d.w.z. creëren waarde bóven de vermogenskosten (vermogenskostenvoet 10%)?',
    context:
      'Per tak (nettowinst · geïnvesteerd vermogen):\n· tak 1: €22.000 · €200.000\n· tak 2: €18.000 · €200.000\n· tak 3: €33.000 · €300.000\n· tak 4: €12.000 · €150.000',
    opties: [
      { id: 'a', tekst: 'alleen tak 1' },
      { id: 'b', tekst: 'tak 1 en tak 3' },
      { id: 'c', tekst: 'tak 1, 2 en 3' },
      { id: 'd', tekst: 'alle vier' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. Waarde gecreëerd als ROI > vermogenskostenvoet (of residual income RI = winst − 10%×vermogen > 0).\ntak 1: 22.000/200.000 = 11% (RI +€2.000) ✓ · tak 2: 9% (RI −€2.000) ✗ · tak 3: 33.000/300.000 = 11% (RI +€3.000) ✓ · tak 4: 8% (RI −€3.000) ✗. Dus tak 1 en 3.',
    hints: [
      'Reken per tak de ROI = nettowinst / geïnvesteerd vermogen.',
      'Winstgevend bóven de vermogenskosten = ROI > 10% (oftewel residual income > 0).',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Tentamen 2026 (Deel V) — gereconstrueerd',
    difficulty: 'lastig',
  },
  {
    id: 'z26-ebit-berekening',
    deel: 5,
    type: 'mc',
    stam: 'Bereken de EBIT.',
    context:
      'Gegeven: omzet €500.000; operationele kosten (excl. afschrijving) €380.000; afschrijvingen €40.000; rentelasten €15.000; vennootschapsbelasting €12.000.',
    opties: [
      { id: 'a', tekst: '€ 68.000' },
      { id: 'b', tekst: '€ 80.000' },
      { id: 'c', tekst: '€ 120.000' },
      { id: 'd', tekst: '€ 53.000' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. EBIT (Earnings Before Interest and Taxes) = bedrijfsresultaat vóór rente en belasting = omzet − operationele kosten − afschrijvingen = 500.000 − 380.000 − 40.000 = €80.000. Rente (€15.000) en belasting (€12.000) trek je NIET af. (Let op: EBITDA = €80.000 + €40.000 afschrijving = €120.000 → distractor c.)',
    hints: [
      'EBIT = vóór rente en belasting → die twee posten laat je staan.',
      'Afschrijvingen tellen wél mee in EBIT (anders krijg je EBITDA).',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Tentamen 2026 (Deel V) — gereconstrueerd',
    difficulty: 'gemiddeld',
  },
  {
    id: 'z26-ebit-vs-ebitda',
    deel: 5,
    type: 'mc',
    stam: 'Wat is het verschil tussen EBIT en EBITDA?',
    opties: [
      { id: 'a', tekst: 'EBITDA is EBIT vóór aftrek van rente' },
      { id: 'b', tekst: 'EBITDA = EBIT + afschrijvingen en amortisatie' },
      { id: 'c', tekst: 'EBITDA = EBIT − belasting' },
      { id: 'd', tekst: 'EBIT en EBITDA zijn synoniemen' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortisation = EBIT mét de afschrijvingen (depreciation) en amortisatie er weer bij opgeteld. Beide zijn vóór rente en belasting; EBITDA telt daarbovenop ook de afschrijvingen/amortisatie niet mee.',
    hints: [
      'De extra letters "DA" staan voor Depreciation & Amortisation (afschrijving & amortisatie).',
      'EBITDA ligt dus hóger dan EBIT met precies de afschrijvingen + amortisatie.',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Tentamen 2026 (Deel V) — gereconstrueerd',
    difficulty: 'gemiddeld',
  },
  {
    id: 'z26-kpi-relatief',
    deel: 5,
    type: 'mc',
    stam: 'Welk van deze kengetallen corrigeert voor de omvang van een resultaatverantwoordelijke eenheid (RVE) en is daarom geschikt om RVE’s van verschillende grootte te vergelijken?',
    context: 'Kengetallen: kosten, EBIT, EBITDA, ROI, RI (residual income).',
    opties: [
      { id: 'a', tekst: 'EBIT' },
      { id: 'b', tekst: 'EBITDA' },
      { id: 'c', tekst: 'ROI' },
      { id: 'd', tekst: 'RI (residual income)' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c. Alleen de ROI (Return on Investment = winst / geïnvesteerd vermogen) is een RELATIEF kengetal (een %) dat corrigeert voor de omvang. Kosten, EBIT, EBITDA en RI zijn absolute bedragen in euro’s en zijn daardoor niet zonder meer vergelijkbaar tussen RVE’s van verschillende grootte.',
    hints: [
      'Zoek het kengetal dat een verhouding/percentage is, geen bedrag in euro’s.',
      'RI is een bedrag (absoluut); ROI is een percentage (relatief).',
    ],
    bron: 'zelfgemaakt',
    bronLabel: 'Tentamen 2026 (Deel V) — gereconstrueerd',
    difficulty: 'gemiddeld',
  },
]
