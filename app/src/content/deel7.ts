import type { Deel } from '../types'

export const deel7: Deel = {
  nr: 7,
  titel: "Results control van de fabricageonderneming",
  hoofdstukken: 'Hoofdstukken 15–16',
  kernthema:
    'De fabricageboekhouding: overboekingsrekeningen, standaard vs. werkelijk (rekening 699), incidentele resultaten (950), en de ISKP als management-control-instrument.',
  theorie: [
    {
      titel: 'Overboekingsrekeningen en de rubrieken',
      uitleg:
        'In de fabricageboekhouding worden kosten en resultaten via **overboekingsrekeningen** (…99) tussen rubrieken doorgeboekt:\n- Rubriek 4: vastlegging van alle werkelijke kosten (directe/indirecte fabricage- en verkoopkosten).\n- Rubriek 5/6/8: verbijzondering en standaarden.\n- Rubriek 9: presentatie van de resultatenrekening op hoofdlijnen.\n\n**Rekening 699** verzamelt het verschil tussen de werkelijke kosten (600/601/602) en de standaardkosten (610/611/612). Het saldo is dus het verschil tussen **ex-post (standaard)gebudgetteerde kosten en de werkelijke kosten** — oftewel het totale verschil standaard vs. werkelijkheid.\n\n**Voordelig (credit) saldo** wordt uit een rubriek weggeboekt door de overboekingsrekening te **debiteren** en de bijbehorende resultatenrekening in rubriek 9 te **crediteren** (en omgekeerd voor een nadelig saldo).',
      formules: [
        'Saldo 699 = ex-post gebudgetteerde (standaard) kosten − werkelijke kosten',
      ],
    },
    {
      titel: 'Incidentele resultaten (rekening 950) bepalen',
      uitleg:
        'De **incidentele resultaten** (950) vind je door alle naar rubriek 9 overgeboekte rubrieksaldi te salderen tegen wat al via rekening 999 is weggeboekt. Werkwijze: tel de bijdragen vanuit rubriek 5, 6 en 8 (let op debet/credit), bepaal het subtotaal in rubriek 9, en het verschil met de wegboeking (999) is het saldo van 950.',
      voorbeelden: [
        {
          titel: 'Saldo rekening 950 afleiden',
          casus:
            'Gegeven (debet/credit): 499 credit €5.000; 599 debet €70; 699 credit €110; 899 debet €880; 999 debet €930. Bepaal het saldo van rekening 950 (incidentele resultaten).',
          stappen: [
            'De kosten van rubriek 4 zijn al verwerkt in de saldi van 599, 699 en 899.',
            'Boekingen in rubriek 9: vanuit rubriek 5 → €70 credit; vanuit rubriek 6 → €110 debet; vanuit rubriek 8 → €880 credit.',
            'Subtotaal rubriek 9 = €70 cr − €110 db + €880 cr = €840 credit.',
            'Weggeboekt uit rubriek 9 (999) = €930 debet.',
            'Saldo rekening 950 = €930 − €840 = €90.',
          ],
          antwoord: 'Saldo rekening 950 = €90',
        },
      ],
    },
    {
      titel: 'De ISKP als management-control-instrument',
      uitleg:
        'De integrale standaardkostprijs is een **management accounting techniek** die pas een instrument voor **management control** wordt wanneer de afwijkingen tussen werkelijke kostprijs en standaardkostprijs worden gebruikt om *het proces bij te sturen*. Niet de waardering van voorraden of het bepalen van verkoopprijzen, maar het *vergelijken van plan met realisatie, verschillen analyseren en actie nemen* is het kenmerk van control.',
    },
  ],
  vragen: [
    {
      id: 'd7-rekening-699',
      deel: 7,
      type: 'mc',
      stam: 'Het verschil tussen de rekeningen 600/601/602 (werkelijk) en 610/611/612 (standaard) wordt verzameld in overboekingsrekening 699. Het saldo van 699 kan worden geïnterpreteerd als het verschil tussen:',
      opties: [
        { id: 'a', tekst: 'ex-ante gebudgetteerde kosten en ex-post gebudgetteerde kosten' },
        { id: 'b', tekst: 'ex-ante gebudgetteerde kosten en werkelijke kosten' },
        { id: 'c', tekst: 'ex-post gebudgetteerde kosten en werkelijke kosten' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Rekening 699 vangt het verschil tussen de standaard (ex-post gebudgetteerd) en de werkelijkheid op.',
      hints: [
        '610/611/612 zijn de standaardkosten; 600/601/602 de werkelijke.',
        'Standaard = ex-post gebudgetteerd. Het verschil is dus standaard vs. werkelijk.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 39% goed',
      difficulty: 'lastig',
      scorePct: 39,
    },
    {
      id: 'd7-rekening-950',
      deel: 7,
      type: 'mc',
      stam: 'Gegeven (debet/credit): 499 credit €5.000; 599 debet €70; 699 credit €110; 899 debet €880; 999 debet €930. Bepaal het saldo van rekening 950 (incidentele resultaten).',
      opties: [
        { id: 'a', tekst: '€10' },
        { id: 'b', tekst: '€90' },
        { id: 'c', tekst: '€230' },
        { id: 'd', tekst: '€3.230' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. In rubriek 9: vanuit rubriek 5 €70 credit, rubriek 6 €110 debet, rubriek 8 €880 credit → subtotaal €840 credit. Weggeboekt via 999 = €930 debet. Saldo 950 = €930 − €840 = €90.',
      hints: [
        'De kosten van rubriek 4 zitten al in de saldi van 599, 699 en 899 — kijk naar de overboekingen naar rubriek 9.',
        'Tel de bijdragen uit rubriek 5/6/8 (let op debet vs. credit) op tot een subtotaal.',
        'Saldo 950 = wegboeking via 999 (€930) − subtotaal rubriek 9 (€840).',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 47% goed',
      difficulty: 'berucht',
      scorePct: 47,
    },
    {
      id: 'd7-mc-techniek',
      deel: 7,
      type: 'mc',
      stam: 'Welke situatie kan het meest worden aangemerkt als het gebruik van de integrale standaardkostprijs voor management control?',
      opties: [
        { id: 'a', tekst: 'Afwijkingen tussen werkelijke kostprijs en ISKP leiden tot aanpassingen in het productieproces.' },
        { id: 'b', tekst: 'Niet-verkochte producten worden op de balans gewaardeerd tegen de ISKP.' },
        { id: 'c', tekst: 'De verkoopprijs wordt bepaald door de ISKP met 30% te verhogen.' },
        { id: 'd', tekst: 'Bij verkoopresultaten worden de kosten van verkochte producten tegen de ISKP gewaardeerd.' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Management control = sturen en beheersen: plan vs. realisatie vergelijken, verschillen analyseren en actie nemen. Het bijsturen van het proces op basis van afwijkingen is precies dat. De andere opties zijn waarderings- of prijsstellingstoepassingen, geen control.',
      hints: [
        'Wat is het kenmerk van control: waarderen, of vergelijken-en-bijsturen?',
        'Zoek de optie waarin verschillen tot actie (procesaanpassing) leiden.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.1',
      difficulty: 'gemiddeld',
    },
  ],
}
