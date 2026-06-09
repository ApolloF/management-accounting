import type { Deel } from '../types'

export const deel3: Deel = {
  nr: 3,
  titel: 'Budget control & verschillenanalyse',
  hoofdstukken: 'Hoofdstukken 7–8',
  kernthema:
    'Budgetten, en het ontleden van verschillen tussen budget/norm en realisatie: prijs- en efficiencyverschillen, verkoopprijs- en verkoopomvangverschil.',
  theorie: [
    {
      titel: 'Verschillen ontleden: prijs- en efficiencyverschil',
      uitleg:
        'Het totale verschil op een variabele kostenpost (grondstof of manuren) splits je in een **prijsverschil** en een **efficiencyverschil** (hoeveelheidsverschil).\n\n**Prijsverschil** = (standaardprijs − werkelijke prijs) × werkelijke hoeveelheid\n`PV = (PS − PW) × HW`\n\n**Efficiencyverschil** = (standaardhoeveelheid − werkelijke hoeveelheid) × standaardprijs\n`EV = (HS − HW) × PS`\n\nEen *negatief* (nadelig) verschil betekent dat de werkelijke kosten hoger zijn dan standaard. Let bij manuren op: de werkelijke hoeveelheid uren = werkelijke productie × werkelijke manuren per product.',
      formules: [
        'Prijsverschil = (PS − PW) × HW',
        'Efficiencyverschil = (HS − HW) × PS',
        'HW (manuren) = werkelijke productie × werkelijke uren per product',
      ],
      voorbeelden: [
        {
          titel: 'Nadelig prijsverschil op manuren',
          casus:
            'Vredevoort BV. Begroot/normaal: productie 1.440, 18,0 manuur/product, €28,00/manuur. Werkelijk: productie 1.584, 18,3 manuur/product, €28,50/manuur. Bereken het prijsverschil op manuren.',
          stappen: [
            'Werkelijke hoeveelheid uren = 1.584 × 18,3 = 28.987,2 uur',
            'Prijsverschil = (PS − PW) × HW = (€28,00 − €28,50) × 28.987,2',
            '= −€0,50 × 28.987,2 = −€14.493,60',
          ],
          antwoord: '−€14.493,60 (nadelig: werkelijke prijs hoger dan standaard)',
        },
      ],
    },
    {
      titel: 'Verkoopprijsverschil & verkoopomvangverschil',
      uitleg:
        'In de verkoopsfeer onderscheid je twee verschillen:\n\n**Verkoopprijsverschil** = (werkelijke verkoopprijs − begrote verkoopprijs) × werkelijke afzet\n`(VPw − VPb) × Qw`\nDe normale productie heeft hier **geen** invloed op.\n\n**Verkoopomvangverschil** = (werkelijke afzet − standaardafzet) × (begrote verkoopprijs − integrale standaardkostprijs)\n`(Qw − Qs) × (VPb − KP)`\nHier zit de KP (integrale standaardkostprijs) in, dus de **normale productie wél** invloed: een hogere normale productie verlaagt de constante kosten p.e. → lagere KP → gunstiger verkoopomvangverschil.\n\nOm het verkoopprijsverschil te berekenen heb je alleen de werkelijke afzet (Qw), de werkelijke verkoopprijs (VPw) en de begrote verkoopprijs (VPb) nodig.',
      formules: [
        'Verkoopprijsverschil = (VPw − VPb) × Qw',
        'Verkoopomvangverschil = (Qw − Qs) × (VPb − KP)',
      ],
    },
  ],
  vragen: [
    {
      id: 'd3-prijsverschil-manuren',
      deel: 3,
      type: 'mc',
      stam: 'Vredevoort BV (waardering tegen integrale standaardkostprijs). Bereken het nadelige prijsverschil op manuren.',
      context:
        'Begroot/normaal: productie 1.440, verkopen 1.260, verkoopprijs €700, manuur/product 18,0, kosten/manuur €28,00, constante productiekosten €180.000.\nWerkelijk: productie 1.584, verkopen 1.332, verkoopprijs €650, manuur/product 18,3, kosten/manuur €28,50, constante productiekosten €198.000.',
      opties: [
        { id: 'a', tekst: '−€14.493,60' },
        { id: 'b', tekst: '−€14.256,00' },
        { id: 'c', tekst: '−€13.543,20' },
        { id: 'd', tekst: '−€13.305,60' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Prijsverschil = (PS − PW) × HW = (€28,00 − €28,50) × (1.584 × 18,3) = −€0,50 × 28.987,2 = −€14.493,60 (nadelig).',
      hints: [
        'Prijsverschil = (standaardprijs − werkelijke prijs) × werkelijke hoeveelheid.',
        'De werkelijke hoeveelheid uren = werkelijke productie × werkelijke uren/product (1.584 × 18,3).',
        'Gebruik 1.584, niet de verkopen of de begrote productie.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 63% goed',
      difficulty: 'gemiddeld',
      scorePct: 63,
    },
    {
      id: 'd3-gegevens-verkoopprijsverschil',
      deel: 3,
      type: 'mc',
      stam: 'Controller heeft alleen: werkelijke verkopen (aantal), begrote verkoopprijs én werkelijke verkoopprijs. Hoeveel gegevens ontbreken om het verkoopprijsverschil te berekenen?',
      opties: [
        { id: 'a', tekst: 'één' },
        { id: 'b', tekst: 'twee' },
        { id: 'c', tekst: 'vijf' },
        { id: 'd', tekst: 'geen één' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Verkoopprijsverschil = Qw × (VPw − VPb). Precies die drie gegevens (werkelijke afzet, werkelijke en begrote verkoopprijs) zijn aanwezig — er ontbreekt niets.',
      hints: [
        'Schrijf de formule voor het verkoopprijsverschil op.',
        '(VPw − VPb) × Qw — heb je die drie gegevens?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.19',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd3-normale-productie-verkoopresultaat',
      deel: 3,
      type: 'mc',
      stam: 'Het hoofd verkoop wil de verkoopresultaten beter voorstellen. Dat lukt door de directie te overtuigen de normale productie:',
      opties: [
        { id: 'a', tekst: 'te verlagen waardoor het verkoopprijsverschil verbetert' },
        { id: 'b', tekst: 'te verhogen waardoor het verkoopprijsverschil verbetert' },
        { id: 'c', tekst: 'te verlagen waardoor het verkoopomvangverschil verbetert' },
        { id: 'd', tekst: 'te verhogen waardoor het verkoopomvangverschil verbetert' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Het verkoopomvangverschil = (Qw − Qs) × (VPb − KP). De KP (integrale standaardkostprijs) hangt af van de normale productie: een hogere normale productie → lagere constante kosten p.e. → lagere KP → gunstiger verkoopomvangverschil. Het verkoopprijsverschil (VPw − VPb) × Qw wordt niet beïnvloed door de normale productie.',
      hints: [
        'Welk verkoopverschil bevat de integrale standaardkostprijs (KP)?',
        'Normale productie ↑ → KP ↓. Dat raakt het verkoopomvangverschil, niet het prijsverschil.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.22',
      difficulty: 'lastig',
    },
  ],
}
