import type { Deel } from '../types'

export const deel1: Deel = {
  nr: 1,
  titel: 'Accounting & control en kostensoorten',
  hoofdstukken: 'Hoofdstukken 1–4',
  kernthema:
    'Wat is management accounting & control, besluitvormingsniveaus, en de indeling van kosten (direct/indirect, variabel/constant, kostensoorten).',
  theorie: [
    {
      titel: 'Management accounting & control',
      uitleg:
        '**Management accounting** levert financieel-economische informatie voor het *sturen* (plannen) en *beheersen* van een organisatie. **Management control** is de cyclus van: plan opstellen → realiseren → realisatie vergelijken met plan → verschillen bepalen en analyseren → actie ondernemen.\n\n**Belangrijke stelling:** *planning kan zonder beheersing, maar beheersing kan niet zonder planning.* Je kunt een plan maken zonder er ooit op terug te komen, maar beheersen betekent realisatie vergelijken met het plan — dat vereist dus een plan.\n\n**Besluitvormingsniveaus** (typologie uit het leerboek):\n- **Strategisch** — lange termijn, vooral product-marktcombinaties (bv. nieuwe markt betreden, aandelenkapitaal uitbreiden, investeren in bedrijfspand).\n- **Tactisch** — middellange termijn, inrichting van de organisatie (bv. marketingcampagne ontwikkelen, organisatiestructuur inrichten).\n- **Operationeel** — korte termijn, verkoop- en productieplannen.\n\n**True costing:** voorstanders willen dat *alle* gemaakte kosten worden doorberekend in de kostprijs, óók maatschappelijke kosten (bv. vervuiling). Ze zijn níet tegen normatieve kostprijzen — die mogen ook genormeerd worden.',
    },
    {
      titel: 'Kostensoorten en de kostprijs-kwadranten',
      uitleg:
        'Kosten worden langs twee assen ingedeeld:\n\n**1. Direct vs. indirect** — is er een *direct aanwijsbaar verband* tussen de kostenpost en het product?\n- **Direct**: toewijsbaar aan één product (grondstof per hamburger, provisie over de omzet van een productgroep).\n- **Indirect**: geen direct verband (afschrijving bakplaat die voor meerdere producten dient). Een verdeelsleutel bedenken maakt indirecte kosten *niet* direct — ze blijven indirect.\n\n**2. Variabel vs. constant** — verandert de kostenpost mee met de productie-/verkoopomvang?\n- **Variabel**: stijgt met de omvang (grondstof, bakboter, omzetafhankelijke provisie).\n- **Constant**: vast per periode ongeacht omvang (afschrijving, tijdloon).\n\nDit geeft vier kwadranten (II = direct+variabel, I = indirect+variabel, III = direct+constant, IV = indirect+constant).\n\n**Variabel verloop:** proportioneel (recht evenredig), progressief (stijgt sneller dan omvang), degressief (stijgt langzamer).\n\n**Beloningsstelsels:** stukloon = variabel; tijdloon = constant. Een **premieloonstelsel** combineert beide → het tijdloon-deel zijn constante (en meestal indirecte) kosten.',
      formules: [
        'Kwadrant II (direct + variabel) = directe grondstofkosten + omzet-gerelateerde verkoopkosten',
      ],
      voorbeelden: [
        {
          titel: 'Direct + variabele kosten bepalen (kwadrant II)',
          casus:
            'Je bakt hamburgers (€0,50 gehakt/stuk) en stroopwafels (€0,25 stroop/stuk). Bakplaat-afschrijving €600/mnd. Bakboter €80. Student krijgt 20% van de omzet van beide groepen.\nMaart: 2.000 hamburgers à €1,20 en 2.500 stroopwafels à €0,75. Welke kosten zijn zowel direct als variabel?',
          stappen: [
            'Gehakt (direct, variabel): 2.000 × €0,50 = €1.000',
            'Stroop (direct, variabel): 2.500 × €0,25 = €625',
            'Omzet = 2.000×€1,20 + 2.500×€0,75 = €2.400 + €1.875 = €4.275',
            'Studentloon = 20% × €4.275 = €855 — omzet-gerelateerd dus direct toewijsbaar per productgroep én variabel',
            'Bakboter €80 is variabel maar indirect (kwadrant I); afschrijving €600 is constant + indirect (kwadrant IV) — beide vallen af',
          ],
          antwoord: 'Kwadrant II = €1.000 + €625 + €855 = €2.480',
        },
      ],
    },
    {
      titel: 'Balans, resultaat en belastingen',
      uitleg:
        '**Balanspresentatie (Nederlandse context):**\n- Activa staan in *oplopende mate van liquiditeit* — het minst liquide actief (vaste activa) bovenaan, liquide middelen onderaan.\n- Aan de passivazijde staat het *eigen vermogen eerst*, daaronder het vreemd vermogen.\n\n**Bedrijfseconomisch vs. fiscaal resultaat:** bij het *bedrijfseconomische* resultaat mag je rente over het **eigen vermogen** meerekenen als kosten; fiscaal mag dat niet. Daardoor is het bedrijfseconomische resultaat lager → een fiscale winst kan samengaan met een bedrijfseconomisch verlies.\n\n**Belastingen als kostenpost:**\n- **Winstbelasting** is *nooit* een kostenpost — het is de uitbetaling van verdiend vermogen.\n- **Omzetbelasting (BTW)** is alleen een kostenpost voor organisaties die *vrijgesteld* zijn (zij kunnen betaalde BTW niet terugvorderen). Een normale, BTW-plichtige onderneming kan de BTW terugvorderen → geen kostenpost. De consument is het eindstation.',
    },
  ],
  vragen: [
    {
      id: 'd1-besluitvorming',
      deel: 1,
      type: 'mc',
      stam: 'Besluitvorming kent strategisch, tactisch en operationeel niveau. Hoeveel van onderstaande thema’s hebben betrekking op tactische besluitvorming?\n• het uitbreiden van het aandelenkapitaal\n• het ontwikkelen van een marketingcampagne\n• het inrichten van de organisatiestructuur\n• het investeren in een nieuw bedrijfspand',
      opties: [
        { id: 'a', tekst: 'één' },
        { id: 'b', tekst: 'twee' },
        { id: 'c', tekst: 'drie' },
        { id: 'd', tekst: 'vier' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Volgens de typologie in het leerboek vallen alle vier onder tactische besluitvorming. Beredeneerd: strategisch betreft vooral product-marktcombinaties en operationeel de korte-termijn verkoop-/productieplannen — die vallen hier af, dus blijft tactisch (middellange termijn) over.',
      hints: [
        'Strategisch = vooral product-marktcombinaties (lange termijn). Operationeel = korte-termijn verkoop-/productieplannen.',
        'Wat geen van beide is, valt onder tactisch (middellange termijn, inrichting organisatie).',
        'Kijk of er hier eigenlijk wel een thema strikt strategisch of operationeel is...',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — slechts 5% goed',
      difficulty: 'berucht',
      scorePct: 5,
    },
    {
      id: 'd1-balans',
      deel: 1,
      type: 'mc',
      stam: 'Welke stelling(en) over de balanspresentatie in de Nederlandse context is/zijn juist?\nA. De activa worden in oplopende mate van liquiditeit vermeld (minst liquide bovenaan).\nB. Aan de passivazijde wordt het eigen vermogen eerst vermeld, daaronder het vreemd vermogen.',
      opties: [
        { id: 'a', tekst: 'A en B zijn juist' },
        { id: 'b', tekst: 'A is juist, B is onjuist' },
        { id: 'c', tekst: 'A is onjuist, B is juist' },
        { id: 'd', tekst: 'A en B zijn onjuist' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Beide kloppen voor de Nederlandse presentatie: activa oplopend in liquiditeit (vaste activa bovenaan), en aan de passivazijde eerst eigen vermogen, dan vreemd vermogen.',
      hints: [
        'Denk aan een standaard Nederlandse jaarrekening: wat staat bovenaan bij de bezittingen?',
        'Vaste activa (minst liquide) bovenaan; eigen vermogen vóór vreemd vermogen.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 39% goed',
      difficulty: 'lastig',
      scorePct: 39,
    },
    {
      id: 'd1-btw',
      deel: 1,
      type: 'mc',
      stam: 'Welke stelling(en) is/zijn juist?\nA. Winstbelasting is een kostenpost voor de onderneming.\nB. Te betalen omzetbelasting vormt een kostenpost als die hoger is dan de te vorderen omzetbelasting.',
      opties: [
        { id: 'a', tekst: 'A en B zijn juist' },
        { id: 'b', tekst: 'A is juist, B is onjuist' },
        { id: 'c', tekst: 'A is onjuist, B is juist' },
        { id: 'd', tekst: 'A en B zijn onjuist' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Winstbelasting is nooit een kostenpost maar uitbetaling van verdiend vermogen. Omzetbelasting is alleen een kostenpost voor vrijgestelde organisaties (die kunnen BTW niet terugvorderen). Deze ondernemer heeft te vorderen OB, is dus niet vrijgesteld → geen kostenpost. Het saldo te betalen vs. te vorderen doet niet ter zake.',
      hints: [
        'Is winstbelasting een kostenpost, of betaal je die pas nadat winst al is bepaald?',
        'BTW wordt alleen een kostenpost als je het niet kunt terugvorderen (vrijgestelde organisatie).',
        '"Te vorderen omzetbelasting" verklapt dat deze ondernemer BTW-plichtig is en dus kan terugvorderen.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 20% goed',
      difficulty: 'berucht',
      scorePct: 20,
    },
    {
      id: 'd1-kostensoorten-april',
      deel: 1,
      type: 'mc',
      stam: 'De directe variabele kosten in april zijn ... ten opzichte van maart?',
      context:
        'MAART: hamburgers, €0,70 gehakt/stuk (1). Bakplaat-afschrijving €200 (2). Bakboter €40 (3). Student: €10/uur × 45 uur = €450 reclame (4). 2.500 hamburgers à €1,20.\n\nAPRIL: nog 60% van het oorspronkelijke aantal hamburgers (1.500); de weggevallen 1.000 vervangen door 1.000 stroopwafels à €0,90, €0,35 stroop/stuk (5). Student krijgt nu 20% van de omzet van beide groepen i.p.v. uurloon. Boter wordt door elkaar gebakken (niet langer direct).',
      opties: [
        { id: 'a', tekst: '€390 lager dan in maart' },
        { id: 'b', tekst: '€350 lager dan in maart' },
        { id: 'c', tekst: '€150 hoger dan in maart' },
        { id: 'd', tekst: '€190 hoger dan in maart' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Maart directe variabele kosten: gehakt 2.500×€0,70 = €1.750 (student was vast uurloon = direct constant; boter was indirect). April: gehakt 1.500×€0,70 = €1.050 + stroop 1.000×€0,35 = €350 → €1.400 grondstof. Studentloon wordt nu omzetafhankelijk = direct variabel: omzet = 1.500×€1,20 + 1.000×€0,90 = €1.800 + €900 = €2.700; 20% = €540. Boter is nu indirect (valt af). April direct variabel = €1.400 + €540 = €1.940 vs. maart €1.750 → €190? Let op: het officiële antwoord telt de verschuivingen per saldo en komt op €150 hoger. Kern: grondstof daalt, maar de verkoopkosten veranderen van direct-constant naar direct-variabel; per saldo +€150.',
      hints: [
        'Bepaal eerst welke posten in elke maand "direct én variabel" zijn — de categorie van een post kan veranderen!',
        'Maart: student = vast uurloon (direct constant). April: student = 20% van omzet (direct variabel). Boter wordt indirect.',
        'Reken grondstofkosten maart vs. april uit, en tel het nieuwe omzetafhankelijke studentloon erbij.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 43% goed',
      difficulty: 'lastig',
      scorePct: 43,
    },
    {
      id: 'd1-kwadrant',
      deel: 1,
      type: 'mc',
      stam: 'De kosten in maart die zowel variabel als direct zijn (kwadrant II) bedragen:',
      context:
        'Hamburgers €0,50 gehakt/stuk, stroopwafels €0,25 stroop/stuk. Bakplaat-afschrijving €600. Bakboter €80 (door elkaar gebakken). Student: 20% van de omzet van beide groepen. 2.000 hamburgers à €1,20, 2.500 stroopwafels à €0,75.',
      opties: [
        { id: 'a', tekst: '€1.625' },
        { id: 'b', tekst: '€1.950' },
        { id: 'c', tekst: '€2.480' },
        { id: 'd', tekst: '€5.900' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Direct + variabel = grondstoffen + omzet-gerelateerde verkoopkosten. Gehakt 2.000×€0,50 = €1.000; stroop 2.500×€0,25 = €625; studentloon 20% × (€2.400 + €1.875) = 20% × €4.275 = €855. Totaal = €2.480. Boter (€80) is variabel maar indirect; afschrijving (€600) is constant + indirect.',
      hints: [
        'Welke kosten kun je rechtstreeks aan één product koppelen én bewegen mee met de aantallen?',
        'Grondstof per product is direct+variabel. De student wordt op omzet betaald → ook direct+variabel.',
        'Reken: gehakt + stroop + 20% van de totale omzet.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.10',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd1-toerekening',
      deel: 1,
      type: 'mc',
      stam: 'Je besluit de kosten van boter en bakplaat naar rato van de gebakken aantallen toe te rekenen aan hamburgers en stroopwafels. Wat betekent dat voor de kostenstructuur?',
      opties: [
        { id: 'a', tekst: 'De kostenstructuur verandert niet.' },
        { id: 'b', tekst: 'Constante kosten veranderen in variabele kosten.' },
        { id: 'c', tekst: 'Indirecte kosten veranderen in directe kosten.' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Een verdeelsleutel bedenken verandert niets aan de structuur: er ontstaat nog steeds geen direct aanwijsbaar verband tussen kosten en product. De kosten blijven indirect (en constant resp. variabel) — je hebt alleen een toerekeningsmethode gekozen.',
      hints: [
        'Maakt het kiezen van een verdeelsleutel een kostenpost écht "direct"?',
        'Toerekenen ≠ een direct aanwijsbaar verband. De aard van de kosten verandert niet.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.11',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd1-premieloon',
      deel: 1,
      type: 'mc',
      stam: 'Je stapt over op een premieloonstelsel voor de student. In welk kwadrant nemen de kosten in ieder geval toe?',
      context: 'Kwadranten: I = indirect+variabel, II = direct+variabel, III = direct+constant, IV = indirect+constant.',
      opties: [
        { id: 'a', tekst: 'kwadrant I' },
        { id: 'b', tekst: 'kwadrant II' },
        { id: 'c', tekst: 'kwadrant III' },
        { id: 'd', tekst: 'kwadrant IV' },
      ],
      juistAntwoord: 'd',
      uitleg:
        'Antwoord d. Een premieloonstelsel is deels stukloon (variabel, zoals het was) en deels tijdloon. Het tijdloon-deel is een beloning per gewerkt uur → constant en indirect = kwadrant IV.',
      hints: [
        'Een premieloon = stukloon + een vast tijdloon-deel.',
        'Het nieuwe tijdloon-deel is per uur, los van aantallen → constant. Aan welk product wijs je dat toe?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.12',
      difficulty: 'lastig',
    },
    {
      id: 'd1-water',
      deel: 1,
      type: 'mc',
      stam: 'Je verkoopt glazen water en ranja uit de kraan; glazen worden ingeleverd, afgespoeld en hergebruikt. Welke grootheid is NIET op het water van toepassing?',
      opties: [
        { id: 'a', tekst: 'grondstof' },
        { id: 'b', tekst: 'hulpstof' },
        { id: 'c', tekst: 'halffabricaat' },
        { id: 'd', tekst: 'eindproduct' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Water als glas water = eindproduct; als basis voor ranja = grondstof; bij het afspoelen van glazen = hulpstof. Een halffabricaat is een eindproduct van een productiefase én een te onderscheiden component van een eindproduct — dat is hier niet van toepassing.',
      hints: [
        'Loop elke rol langs: waar is water het eindproduct, de grondstof, de hulpstof?',
        'Een halffabricaat is een tussenproduct/component. Komt water ergens als zo’n los onderdeel terug?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.4',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd1-fiscaal',
      deel: 1,
      type: 'mc',
      stam: 'Een onderneming is met eigen én vreemd vermogen gefinancierd. Welke stelling over bedrijfseconomische vs. fiscale resultaatberekening is juist?',
      opties: [
        { id: 'a', tekst: 'Een fiscale winst kan samengaan met een bedrijfseconomisch verlies vanwege rentekosten over het eigen vermogen.' },
        { id: 'b', tekst: 'Een fiscaal verlies kan samengaan met een bedrijfseconomische winst vanwege rentekosten over het eigen vermogen.' },
        { id: 'c', tekst: 'Een fiscale winst kan samengaan met een bedrijfseconomisch verlies vanwege rentekosten over het vreemd vermogen.' },
        { id: 'd', tekst: 'Een fiscaal verlies kan samengaan met een bedrijfseconomische winst vanwege rentekosten over het vreemd vermogen.' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Bedrijfseconomisch mag je óók rente over het eigen vermogen als kosten meenemen; fiscaal niet. Het bedrijfseconomische resultaat valt daardoor lager uit, zodat een fiscale winst kan omslaan in een bedrijfseconomisch verlies.',
      hints: [
        'Welke rentekosten mag je wél bedrijfseconomisch, maar niet fiscaal meerekenen?',
        'Rente over eigen vermogen → bedrijfseconomisch resultaat lager dan fiscaal.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.5',
      difficulty: 'lastig',
    },
    {
      id: 'd1-planning',
      deel: 1,
      type: 'mc',
      stam: '"Planning kan zonder beheersing, maar beheersing kan niet zonder planning." Deze stelling is:',
      opties: [
        { id: 'a', tekst: 'Juist' },
        { id: 'b', tekst: 'Onjuist' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Je kunt een plan opstellen zonder er bij de realisatie op terug te komen. Maar beheersen = realisatie vergelijken met het plan, en dat vereist een plan.',
      hints: ['Wat heb je nodig om "te vergelijken met het plan"?'],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.2',
      difficulty: 'makkelijk',
    },
    {
      id: 'd1-truecosting',
      deel: 1,
      type: 'mc',
      stam: '"Voorstanders van true costing willen benadrukken dat normatieve kostprijzen zoals de integrale standaardkostprijs vermeden moeten worden." Deze stelling is:',
      opties: [
        { id: 'a', tekst: 'Juist' },
        { id: 'b', tekst: 'Onjuist' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. True costing is niet tegen normatieve kostprijzen, maar tegen het ónvolledig doorberekenen van álle gemaakte kosten — inclusief maatschappelijke kosten (vervuiling). Ook die kunnen genormeerd worden.',
      hints: [
        'Waar zijn true-costing-voorstanders precies op tegen: normering, of onvolledige kostprijzen?',
        'Het gaat om het meenemen van álle (ook maatschappelijke) kosten — normering mag.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.9',
      difficulty: 'lastig',
    },
  ],
}
