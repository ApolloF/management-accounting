import type { Deel } from '../types'

export const deel5: Deel = {
  nr: 5,
  titel: 'Prestatiemanagement & resultaatverantwoording',
  hoofdstukken: 'Hoofdstukken 11–12',
  kernthema:
    'Verantwoordelijkheidscentra, ROI en residual income (RI), kritische succesfactoren en prestatie-indicatoren.',
  theorie: [
    {
      titel: 'Verantwoordelijkheidscentra',
      uitleg:
        'Organisatieonderdelen worden aangestuurd als **verantwoordelijkheidscentra**:\n- **Kostencentrum** — verantwoordelijk voor kosten. Vereist dat er **normen** kunnen worden vastgesteld voor de relatie tussen *input en output* (om effectiviteit en efficiency te beoordelen). Geschikt voor zowel fabricage- als dienstverlenende bedrijven met repetitieve processen.\n- **Opbrengstencentrum** — verantwoordelijk voor opbrengsten.\n- **Winstcentrum** — voor het verschil tussen opbrengsten en kosten.\n- **Investeringscentrum** — óók voor het geïnvesteerd vermogen (ROI/RI).',
    },
    {
      titel: 'ROI en Residual Income (RI)',
      uitleg:
        '**Return on Investment (ROI)** = winst ÷ (gemiddeld) geïnvesteerd vermogen. Een relatief getal (%). De ROI van de hele onderneming = totale winst ÷ totaal geïnvesteerd vermogen — let op: dat is *niet* het simpele gemiddelde van de divisie-ROI’s, maar gewogen naar vermogen.\n\n**Residual Income (RI)** = winst − (minimaal vereist rendement × geïnvesteerd vermogen). Een absoluut bedrag (€). Een divisie met een ROI boven het vereiste rendement heeft een positieve RI.\n\n**Subtiel:** als het minimaal vereiste rendement wordt gelijkgesteld aan de ROI van de hele onderneming, kan het zijn dat slechts *één* divisie (die met de hoogste ROI en veel gewicht) een positieve RI behaalt — minimaal één dus.',
      formules: [
        'ROI = winst ÷ geïnvesteerd vermogen',
        'ROI onderneming = Σ winst ÷ Σ geïnvesteerd vermogen',
        'RI = winst − (vereist rendement × geïnvesteerd vermogen)',
      ],
      voorbeelden: [
        {
          titel: 'Winst van een divisie uit de totale RI afleiden',
          casus:
            'Divisies A/B/C/D: vermogen 320/144/400/480, winst A=?/36/66/144. Vereist rendement 28%. Totale RI van de onderneming = €20 mln positief. Hoe hoog is de winst van A?',
          stappen: [
            'Totaal vermogen = 320 + 144 + 400 + 480 = €1.344 mln',
            'Totale winst = RI + vereist rendement × totaal vermogen = €20 + 0,28 × €1.344 = €20 + €376,32 = €396,32 mln',
            'Winst A = totale winst − (36 + 66 + 144) = €396,32 − €246 = €150,32 mln',
          ],
          antwoord: 'Winst A = €150,32 mln',
        },
      ],
    },
    {
      titel: 'ROI-decompositie & residual income',
      uitleg:
        'De **ROI** kun je ontleden (DuPont):\n\n`ROI = winstmarge × omloopsnelheid`\n\nwaarbij winstmarge = winst/omzet en omloopsnelheid = omzet/geïnvesteerd vermogen. Twee divisies met dezelfde ROI kunnen dus een heel andere marge/omloop-mix hebben.\n\n**ROI vs. RI bij sturing:** stuur je op **ROI**, dan kan een divisie een op zichzelf rendabele investering (boven de vermogenskosten, maar onder de huidige divisie-ROI) afwijzen omdat die de ROI "verwatert". **RI** (absoluut: winst − vereist rendement × vermogen) heeft dat nadeel niet: elke investering die meer dan het vereiste rendement oplevert, verhoogt het RI. Let op: een verandering in het vereiste rendement werkt **per divisie verschillend** door in het RI (RI is absoluut, ROI relatief).',
      formules: [
        'ROI = winstmarge × omloopsnelheid = (winst/omzet) × (omzet/vermogen)',
        'RI = winst − (vereist rendement × geïnvesteerd vermogen)',
      ],
    },
    {
      titel: 'Balanced scorecard & rapportage',
      uitleg:
        'De **balanced scorecard (BSC)** stuurt op **vier samenhangende perspectieven** (financieel, klant, interne processen, leren & groei) die samen de *strategie* communiceren en bewaken. "Balanced" = evenwichtige aandacht tussen **lange- en kortetermijndoelen**, **interne en externe** gebieden en **financiële en niet-financiële** maatstaven — niet dat het financiële perspectief evenveel weegt als de andere drie samen.\n\nTer vergelijking: het **INK-/EFQM-model** werkt met **negen aandachtsgebieden** over de organisatie en haar resultaten.\n\n**Niet-financiële indicatoren** opnemen is zinvol omdat ze ontwikkelingen *vroegtijdig* signaleren (langetermijnperspectief), terwijl financiële indicatoren vooral achteraf uitsluitsel geven over de korte termijn. Een **prestatie-indicator (KPI)** meet in welke mate een **kritische succesfactor (KSF)** wordt gerealiseerd.',
    },
    {
      titel: 'Kritische succesfactoren & prestatie-indicatoren',
      uitleg:
        'Een **kritische succesfactor (KSF)** is een factor die bepalend is voor het succes/voortbestaan van de organisatie (bv. de *mate van scholing* als maat voor innovatievermogen). Een **prestatie-indicator (PI)** is een meeteenheid die aangeeft in welke mate een KSF wordt gerealiseerd, meestal als absoluut getal of percentage (bv. *scholingskosten als % van de omzet*).',
    },
  ],
  vragen: [
    {
      id: 'd5-roi',
      deel: 5,
      type: 'mc',
      stam: 'Divisies A/B/C/D — omzet 200/250/150/125, winst 32/40/28/25, geïnvesteerd vermogen 500/600/280/400. Hoeveel divisies hebben een ROI hoger dan die van de hele onderneming?',
      opties: [
        { id: 'a', tekst: '1' },
        { id: 'b', tekst: '2' },
        { id: 'c', tekst: '3' },
        { id: 'd', tekst: '4' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. ROI = winst/vermogen. A=6,40%, B=6,67%, C=10,00%, D=6,25%. Onderneming = (32+40+28+25)/(500+600+280+400) = 125/1.780 = 7,02%. Alleen C (10%) ligt boven 7,02%.',
      hints: [
        'Bereken elke divisie-ROI als winst ÷ geïnvesteerd vermogen.',
        'De onderneming-ROI = totale winst ÷ totaal vermogen (niet het gemiddelde van de percentages!).',
        'Vergelijk elke divisie met ~7,02%.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.28',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd5-ri-winst-a',
      deel: 5,
      type: 'mc',
      stam: 'Divisies A/B/C/D — vermogen 320/144/400/480, winst A=?/36/66/144. Vereist rendement 28%. Totale RI = €20 mln positief. Hoe hoog is de winst van divisie A?',
      opties: [
        { id: 'a', tekst: '€112,00 mln' },
        { id: 'b', tekst: '€135,80 mln' },
        { id: 'c', tekst: '€150,32 mln' },
        { id: 'd', tekst: '€175,80 mln' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Totale winst = €20 + 28% × (320+144+400+480) = €20 + 28% × €1.344 = €20 + €376,32 = €396,32 mln. Winst A = €396,32 − (36 + 66 + 144) = €150,32 mln.',
      hints: [
        'RI = winst − vereist rendement × vermogen. Werk dit om naar de totale winst.',
        'Totale winst = RI + 28% × totaal vermogen.',
        'Trek de bekende winsten van B, C en D eraf.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.29',
      difficulty: 'lastig',
    },
    {
      id: 'd5-ri-minimum',
      deel: 5,
      type: 'mc',
      stam: '5 divisies. Het minimaal vereiste rendement wordt gelijkgesteld aan de ROI van de hele onderneming. De divisie-ROI’s verschillen onderling. Wat is het minimum aantal divisies met een positieve RI?',
      opties: [
        { id: 'a', tekst: 'één' },
        { id: 'b', tekst: 'twee' },
        { id: 'c', tekst: 'drie' },
        { id: 'd', tekst: 'geen één (nul)' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. De onderneming-ROI is een gewogen gemiddelde. Eén divisie met een hoge ROI én veel gewicht kan als enige boven dat gemiddelde uitkomen → minimaal één divisie heeft een positieve RI.',
      hints: [
        'De onderneming-ROI is gewogen naar vermogen, niet het simpele gemiddelde.',
        'Kan één zware divisie het gemiddelde grotendeels bepalen en als enige erboven liggen?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.30',
      difficulty: 'berucht',
    },
    {
      id: 'd5-kostencentrum',
      deel: 5,
      type: 'mc',
      stam: 'Toepassing van het kostencentrum als verantwoordelijkheidscentrum:\nA. vereist dat er normen kunnen worden vastgesteld voor de relatie tussen input en output.\nB. kan geschikt zijn voor zowel fabricage- als dienstverlenende bedrijven.',
      opties: [
        { id: 'a', tekst: 'A en B zijn juist' },
        { id: 'b', tekst: 'A is juist, B is onjuist' },
        { id: 'c', tekst: 'A is onjuist, B is juist' },
        { id: 'd', tekst: 'A en B zijn onjuist' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Het kostencentrum berust op normering en de input-outputrelatie (om effectiviteit en efficiency te beoordelen). Bij repetitieve processen geldt dat zowel voor fabricage- als dienstverlenende bedrijven.',
      hints: [
        'Waar is een kostencentrum op gebaseerd? (normen voor input vs. output)',
        'Geldt dat alleen voor fabrieken, of ook voor dienstverleners met repetitieve processen?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.31',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd5-ksf-pi',
      deel: 5,
      type: 'mc',
      stam: 'Innovatievermogen wordt gemeten via de mate van scholing, uitgedrukt in scholingskosten als % van de omzet. In dit voorbeeld:',
      opties: [
        { id: 'a', tekst: 'zijn beide kritische succesfactoren' },
        { id: 'b', tekst: 'is de mate van scholing een KSF en scholingskosten/omzet een prestatie-indicator' },
        { id: 'c', tekst: 'is de mate van scholing een prestatie-indicator en scholingskosten/omzet een KSF' },
        { id: 'd', tekst: 'zijn beide prestatie-indicatoren' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. De mate van scholing is de kritische succesfactor (bepalend voor innovatie/voortbestaan). De prestatie-indicator is de meeteenheid die aangeeft in welke mate die KSF wordt gerealiseerd — hier scholingskosten als % van de omzet.',
      hints: [
        'Wat is de onderliggende succesfactor, en wat is slechts de meeteenheid ervan?',
        'Een % is typisch een prestatie-indicator van een achterliggende KSF.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.32',
      difficulty: 'gemiddeld',
    },
  ],
}
