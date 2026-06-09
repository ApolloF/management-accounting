import type { Deel } from '../types'

export const deel6: Deel = {
  nr: 6,
  titel: 'Management accounting & de fabricageonderneming',
  hoofdstukken: 'Hoofdstukken 13–14',
  kernthema:
    'Integrale standaardkostprijs in de fabricage: transactie- en bezettingsresultaat, het volledige verschillenoverzicht, en balans- vs. resultatenrekeningen.',
  theorie: [
    {
      titel: 'Transactieresultaat en bezettingsresultaat',
      uitleg:
        'Bij waardering tegen **integrale standaardkostprijs (ISKP)** ontstaan twee resultaten:\n\n**Transactieresultaat** = omzet − kosten van de verkopen (verkochte aantallen × ISKP). Het is het resultaat op de verkochte producten.\n\n**Bezettingsresultaat** = (werkelijke productie − normale productie) × constante kosten per eenheid. Bij méér dan normale productie is het positief: er wordt méér constante kosten "gedekt" dan begroot.\n\n`Bezettingsresultaat = (werkelijke productie − normale productie) × constante kosten p.e.`\n`Constante kosten p.e. = constante kosten ÷ normale productie`\n`ISKP = variabele kosten p.e. + constante kosten p.e.`',
      formules: [
        'Transactieresultaat = omzet − (verkopen × ISKP)',
        'ISKP = variabele kosten p.e. + (constante kosten ÷ normale productie)',
        'Bezettingsresultaat = (werkelijke − normale productie) × constante kosten p.e.',
      ],
      voorbeelden: [
        {
          titel: 'Bezettingsresultaat afleiden uit het transactieresultaat',
          casus:
            'Dinox NV (ISKP). Productie werkelijk 22.000, verkopen 21.500. Constante kosten €700.000, variabele kosten €32/stuk, verkoopprijs €78. Transactieresultaat €236.500 positief. Hoe hoog is het bezettingsresultaat?',
          stappen: [
            'Omzet = 21.500 × €78 = €1.677.000',
            'Kosten van de verkopen = omzet − transactieresultaat = €1.677.000 − €236.500 = €1.440.500',
            'ISKP = €1.440.500 ÷ 21.500 = €67,00',
            'Constante kosten p.e. = ISKP − variabele kosten = €67 − €32 = €35',
            'Normale productie = constante kosten ÷ constante kosten p.e. = €700.000 ÷ €35 = 20.000',
            'Meer dan normaal = 22.000 − 20.000 = 2.000 → bezettingsresultaat = 2.000 × €35 = €70.000',
          ],
          antwoord: 'Bezettingsresultaat = €70.000',
        },
      ],
    },
    {
      titel: 'Het volledige verschillenoverzicht',
      uitleg:
        'De som van de zes verschillen (verkoopprijs-, verkoopomvang-, prijs- en efficiencyverschil grondstof, prijs- en efficiencyverschil arbeid + bezettingsresultaat) hoeft niet exact gelijk te zijn aan het verschil tussen begroot en werkelijk totaalsaldo. Het ontbrekende stuk is meestal het **voorraadresultaat eindproducten**: het verschil tussen begrote en werkelijk geproduceerde voorraad.\n\n**Welke resultaten zitten in de productiesfeer en welke in de verkoopsfeer?**\n- Productiesfeer: bezettingsresultaat, prijs- en efficiencyverschillen op grondstof/manuren. → Veranderen *niet* door een wijziging in de verkopen.\n- Verkoopsfeer: transactieresultaat, verkoopprijs- en verkoopomvangverschil. → Veranderen *wel* bij meer/minder verkopen.\n\nHet **totale resultaat op de constante kosten** = prijsverschil constante kosten + bezettingsresultaat. Verhoog je begrote én werkelijke constante kosten met hetzelfde bedrag, dan blijft het prijsverschil gelijk maar wordt het bezettingsresultaat gunstiger (hogere constante kosten p.e. × meer-dan-normale productie).',
    },
    {
      titel: 'Balans- versus resultatenrekeningen',
      uitleg:
        'In een fabricageboekhouding horen sommige rekeningen op de **balans** en andere op de **resultatenrekening**. Op de balans horen o.a.: eigen vermogen, bank, debiteuren, te vorderen/te betalen OB, voorraad grondstoffen, voorraad gereed product en voorraad goederen in bewerking.\n\nIn het voorbeeld-rekeningschema horen 8 rekeningen op de balans: **040** (eigen vermogen), **120** (bank), **130** (debiteuren), **180** (te vorderen OB), **181** (te betalen OB), **300** (voorraad grondstoffen), **700** (voorraad gereed product) en **710** (voorraad goederen in bewerking). Alle kosten-, opbrengst-, opslag- en resultaatrekeningen horen op de resultatenrekening.',
    },
  ],
  vragen: [
    {
      id: 'd6-bezettingsresultaat-dinox',
      deel: 6,
      type: 'mc',
      stam: 'Dinox NV (ISKP). Productie werkelijk 22.000, verkopen 21.500. Constante kosten €700.000, variabele kosten €32/stuk, verkoopprijs €78. Transactieresultaat €236.500 positief. Hoe hoog is het (positieve) bezettingsresultaat?',
      opties: [
        { id: 'a', tekst: '€17.500' },
        { id: 'b', tekst: '€52.500' },
        { id: 'c', tekst: '€64.000' },
        { id: 'd', tekst: '€70.000' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Omzet 21.500×€78 = €1.677.000. Kosten verkopen = €1.677.000 − €236.500 = €1.440.500 → ISKP = €67. Constante kosten p.e. = €67 − €32 = €35 → normale productie = €700.000/€35 = 20.000. Meer dan normaal = 2.000 × €35 = €70.000.',
      hints: [
        'Werk terug: omzet − transactieresultaat = kosten van de verkopen → ISKP.',
        'Constante kosten p.e. = ISKP − variabele kosten. Daarmee vind je de normale productie.',
        'Bezettingsresultaat = (werkelijke − normale productie) × constante kosten p.e.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 56% goed',
      difficulty: 'gemiddeld',
      scorePct: 56,
    },
    {
      id: 'd6-bezettingsresultaat-oom',
      deel: 6,
      type: 'mc',
      stam: 'Wijnvaten (ISKP). Productie werkelijk 30.000, verkopen 29.000. Constante kosten €800.000, variabele kosten €35/stuk, verkoopprijs €70. Transactieresultaat €87.000 positief. Bezettingsresultaat is positief — hoe hoog?',
      opties: [
        { id: 'a', tekst: '€128.000' },
        { id: 'b', tekst: '€140.000' },
        { id: 'c', tekst: '€160.000' },
        { id: 'd', tekst: '€175.000' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Omzet 29.000×€70 = €2.030.000. Kosten verkopen = €2.030.000 − €87.000 = €1.943.000 → ISKP = €67. Constante kosten p.e. = €67 − €35 = €32 → normale productie = €800.000/€32 = 25.000. Meer dan normaal = 30.000 − 25.000 = 5.000 × €32 = €160.000.',
      hints: [
        'Zelfde aanpak als Dinox: omzet − transactieresultaat → ISKP.',
        'ISKP − variabele kosten = constante kosten p.e. → normale productie = €800.000 / die waarde.',
        'Bezettingsresultaat = (30.000 − normale productie) × constante kosten p.e.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.18',
      difficulty: 'lastig',
    },
    {
      id: 'd6-patty-voorraad',
      deel: 6,
      type: 'mc',
      stam: 'Patty bepaalde zes verschillen (verkopen, constante en variabele kosten) tussen budget/norm en werkelijk. De som week af van het verschil tussen begroot en werkelijk totaalsaldo. Waar had die afwijking betrekking op?',
      opties: [
        { id: 'a', tekst: 'het gerealiseerde bezettingsresultaat' },
        { id: 'b', tekst: 'het ongerealiseerde bezettingsresultaat' },
        { id: 'c', tekst: 'de kosten van de goederen in bewerking' },
        { id: 'd', tekst: 'de voorraad eindproducten' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Er ontstaat ook een resultaat door het verschil tussen begrote en werkelijk geproduceerde voorraad eindproducten. In Patty’s eerste periode kon dat alleen nul of positief zijn (geen beginvoorraad om op in te teren).',
      hints: [
        'Zes verschillen dekken verkopen + kosten. Wat blijft er over aan de productiekant?',
        'Denk aan het verschil tussen begrote en werkelijk geproduceerde voorraad.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 43% goed',
      difficulty: 'lastig',
      scorePct: 43,
    },
    {
      id: 'd6-rekeningen-balans',
      deel: 6,
      type: 'mc',
      stam: 'Hoeveel van de rekeningen in het schema (040 EV, 120 Bank, 130 Debiteuren, 180 Te vorderen OB, 181 Te betalen OB, 300 Voorraad grondstoffen, 400/420/430 kosten, 560/580 indirecte kosten, 600-612 verbruik, 700 Voorraad gereed product, 710 Voorraad goederen in bewerking, 800-840, 900-999 resultaten...) horen thuis op de balans?',
      opties: [
        { id: 'a', tekst: '6 rekeningen' },
        { id: 'b', tekst: '7 rekeningen' },
        { id: 'c', tekst: '8 rekeningen' },
        { id: 'd', tekst: '9 of meer rekeningen' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. 8 rekeningen: 040 (eigen vermogen), 120 (bank), 130 (debiteuren), 180 (te vorderen OB), 181 (te betalen OB), 300 (voorraad grondstoffen), 700 (voorraad gereed product) en 710 (voorraad goederen in bewerking). Alle kosten-, opbrengst- en resultaatrekeningen gaan naar de resultatenrekening.',
      hints: [
        'Balansrekeningen zijn bezittingen, schulden en vermogen — geen kosten/opbrengsten.',
        'Denk aan: vermogen, bank, debiteuren, beide OB-rekeningen en de drie voorraadrekeningen.',
        'Tel ze: 040, 120, 130, 180, 181, 300, 700, 710.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 55% goed',
      difficulty: 'gemiddeld',
      scorePct: 55,
    },
    {
      id: 'd6-constante-kosten-resultaat',
      deel: 6,
      type: 'mc',
      stam: 'Waterhome (ISKP). Stel dat zowel de begrote (en normale) als de werkelijke constante kosten met terugwerkende kracht €25.000 hoger worden. Het totale resultaat op de constante kosten zal t.o.v. de oorspronkelijke situatie:',
      context: 'Begroot/normaal: productie 180, constante kosten €810.000. Werkelijk: productie 190, constante kosten €840.000.',
      opties: [
        { id: 'a', tekst: 'verbeteren' },
        { id: 'b', tekst: 'niet veranderen' },
        { id: 'c', tekst: 'verslechteren' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Het totale resultaat op de constante kosten = prijsverschil constante kosten + bezettingsresultaat. Het prijsverschil verandert niet (begroot en werkelijk stijgen met hetzelfde bedrag). Het bezettingsresultaat wordt gunstiger: de meer-dan-normale productie (190 > 180) × een hogere constante kosten p.e. → groter positief bezettingsresultaat. Per saldo verbetert het.',
      hints: [
        'Splits het totale resultaat op constante kosten in prijsverschil + bezettingsresultaat.',
        'Het prijsverschil blijft gelijk (beide +€25.000). Wat doet het bezettingsresultaat bij hogere constante kosten p.e.?',
        'Meer dan normaal geproduceerd × hogere constante kosten p.e. = gunstiger.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.20',
      difficulty: 'berucht',
    },
    {
      id: 'd6-verkoop-effect',
      deel: 6,
      type: 'mc',
      stam: 'OneWayHome BV: in maand 2 exact dezelfde cijfers als maand 1, behalve de verkopen (120 i.p.v. 90 stuks). Hoeveel van deze resultaten/verschillen veranderen?\n• bezettingsresultaat • perioderesultaat • efficiencyverschil manuren • prijsverschil manuren',
      opties: [
        { id: 'a', tekst: 'een' },
        { id: 'b', tekst: 'twee' },
        { id: 'c', tekst: 'drie' },
        { id: 'd', tekst: 'vier' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Alleen het perioderesultaat verandert (hoger transactieresultaat door meer verkopen). Bezettingsresultaat en beide manuren-verschillen zitten in de productiesfeer en worden niet beïnvloed door een verandering in de verkopen.',
      hints: [
        'Welke resultaten zitten in de verkoopsfeer en welke in de productiesfeer?',
        'Alleen verkoop-gerelateerde resultaten veranderen bij meer verkopen.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.21',
      difficulty: 'lastig',
    },
  ],
}
