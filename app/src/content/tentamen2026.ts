import type { Vraag } from '../types'

// ============================================================================
// ECHTE TENTAMENVRAAG­EN — TENTAMEN (DIGITAAL) MANAGEMENT ACCOUNTING BDK
// donderdag 11 juni 2026 (Aletta Jacobshal). 34 MC-vragen (70%).
// Geëxtraheerd uit de officiële opgave MÉT de gepubliceerde uitleg/antwoorden.
// bron='pdf' → telt mee voor het gewicht en is standaard zichtbaar.
//
// Van vraag 1 t/m 29 is de volledige vraagtekst + officiële uitwerking bekend.
// Vraag 30 t/m 34 zijn op het tentamen NIET gefotografeerd; alleen het juiste
// antwoord uit de nakijksleutel is zeker (30=d, 31=b, 32=d, 33=d, 34=b). Deze
// vijf zijn hieronder NAGEBOUWD op basis van het geheugen van de student
// (onderwerp + juiste antwoordletter); de cijfers/opties zijn een reconstructie
// van het type vraag, niet de exacte tentamentekst. Ze dragen bronLabel "(nagebouwd)"
// en een waarschuwing in de uitleg. Zie ook Oefententamen/tentamen-2026-11juni.md.
// ============================================================================

const mc = (q: Omit<Vraag, 'type' | 'bron'>): Vraag => ({ ...q, type: 'mc', bron: 'pdf' })

const L = (n: number) => `Tentamen 11-6-2026 vr.${n}`

// ---- gedeelde casussen (letterlijk uit het tentamen) ----

const MHC_BESLUIT_CONTEXT =
  'Bij de onderneming Mustang Hoofcare (MHC) van de groepsopdracht nam uw oom op een gegeven ogenblik het besluit (1) naast de bestaande hoefijzers ook hoefschoenen te willen gaan fabriceren en verkopen. Hij hoopte zo nieuwe markten aan te boren. Een ander besluit (2) was dat hij wilde gaan investeren in een nieuwe machine om die schoenen te gaan produceren, waarbij u hem de nodige ondersteuning bood met behulp van investeringsselectiemethoden.'

const HOORCOLLEGE_CASUS =
  'In het hoorcollege werd bij de behandeling van investeringsselectiemethoden de volgende casus gebruikt. De directeur-eigenaar van een middelgrote onderneming overweegt de aanschaf van een nieuwe machine met een aankoopbedrag van €20.000. Deze machine zal in 5 jaar met gelijke bedragen per jaar worden afgeschreven. Na die 5 jaar zal de machine een restwaarde van €0 hebben en worden afgestoten. De omzet wordt in het eerste jaar geschat op €10.000 met een jaarlijkse groei geraamd op €1.000. De grondstofkosten en de arbeidskosten bedragen 35% respectievelijk 25% van de verkoopprijs. Omzetbelasting speelt geen rol. Over de winst moet 25% vennootschapsbelasting worden betaald. Deze uitgangssituatie is aangeduid als scenario 0.'

export const tentamen2026Vragen: Vraag[] = [
  // ===================== DEEL I — Accounting & control / kostensoorten =====================
  mc({
    id: 't26-01', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(1), difficulty: 'gemiddeld',
    stam: 'Welke van de volgende stellingen over besluitvorming (ook wel aangeduid als planning) is juist?',
    context: MHC_BESLUIT_CONTEXT,
    opties: [
      { id: 'a', tekst: 'Beide besluiten hebben betrekking op strategische besluitvorming.' },
      { id: 'b', tekst: 'Beide besluiten hebben betrekking op tactische besluitvorming.' },
      { id: 'c', tekst: 'Besluit 1 op tactische en besluit 2 op strategische besluitvorming.' },
      { id: 'd', tekst: 'Besluit 1 op strategische en besluit 2 op tactische besluitvorming.' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d. Het bepalen van de klanten waarop de verkopen zich richten en de producten die in de markt worden gezet, leidt tot besluiten over product-marktcombinaties; dat behoort tot het terrein van de strategische besluitvorming (besluit 1: hoefschoenen toevoegen). Het doen van investeringen in machines behoort tot de tactische besluitvorming (besluit 2).',
    hints: ['Product-marktcombinaties / nieuwe markten = strategisch.', 'Investeren in een machine = tactisch (middellange termijn).'],
  }),
  mc({
    id: 't26-02', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(2), difficulty: 'gemiddeld',
    stam: 'De berekening van de efficiency- en prijsverschillen op grondstofkosten zette u aan het denken in welke fase van de PDCA-cyclus u zich met die activiteit bevindt. Het betreft de fase:',
    context:
      'Bij MHC vroeg uw oom of u integralestandaardkostprijzen wilde berekenen van twee types hoefijzers (Amazone en Gaucho). Na het verstrijken van het eerste kwartaal bepaalde u mede op basis van deze standaarden de efficiency- en prijsverschillen op grondstofkosten voor de gefabriceerde hoefijzers afzonderlijk.',
    opties: [
      { id: 'a', tekst: 'P (Plan)' }, { id: 'b', tekst: 'D (Do)' }, { id: 'c', tekst: 'C (Check)' }, { id: 'd', tekst: 'A (Act)' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (Check). De integralestandaardkostprijs is een norm; het opstellen ervan is in eerste instantie een doel/norm = Plan. Maar hier ligt het accent niet op het opstellen van de norm, maar op het vergelijken van die norm met de realisatie (Do) — en dat vergelijken is de Check-fase. Pas daarna volgt eventueel Act.',
    hints: ['Verschillen berekenen = norm vergelijken met realisatie.', 'Norm opstellen = Plan; norm vergelijken met werkelijkheid = Check.'],
  }),
  mc({
    id: 't26-03', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(3), difficulty: 'lastig',
    stam: 'Een ondernemer krijgt te maken met technisch initiële kosten. Zij besluit die kosten op de balans te activeren en ze de komende jaren via de integralestandaardkostprijs toe te rekenen aan de gefabriceerde producten. Wat is het bedrijfseconomische beginsel dat de ondernemer met name toepast?',
    opties: [
      { id: 'a', tekst: 'continuïteitsbeginsel' }, { id: 'b', tekst: 'realisatiebeginsel' },
      { id: 'c', tekst: 'matching' }, { id: 'd', tekst: 'voorzichtigheidsbeginsel' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (matching). Technisch initiële kosten dienen vanuit het oogpunt van matching geactiveerd te worden op de balans en door middel van afschrijvingen te worden toegerekend aan de toekomstig te verkopen producten — kosten en opbrengsten in dezelfde periode matchen. Zie leerboek §2.5 en §6.1.2.2.',
    hints: ['Kosten koppelen aan de opbrengsten die ze voortbrengen = welk beginsel?', 'Activeren + later via afschrijving toerekenen = matching.'],
  }),
  mc({
    id: 't26-04', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(4), difficulty: 'gemiddeld',
    stam: 'Bij publicatie van de balans in de Nederlandse context vereist de regelgeving dat het vreemd vermogen onder het eigen vermogen komt te staan, waarbij eerst het kortlopende en dan het langlopende vreemd vermogen wordt vermeld. Deze stelling is:',
    opties: [{ id: 'a', tekst: 'Juist' }, { id: 'b', tekst: 'Onjuist' }],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b (Onjuist). Eerst wordt inderdaad het eigen vermogen vermeld, maar binnen het vreemd vermogen moet juist eerst het LANGLOPENDE en dan het kortlopende vreemd vermogen worden aangegeven. De logica van de volgorde op de creditzijde van de balans is van vast naar vlottend.',
    hints: ['Creditzijde: van vast naar vlottend.', 'Langlopend VV komt vóór kortlopend VV — de stelling draait dat om.'],
  }),
  mc({
    id: 't26-05', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(5), difficulty: 'gemiddeld',
    stam: 'Welke stelling is juist?',
    context:
      'Een zorginstelling hoeft van de belastingdienst geen omzetbelasting (OB/BTW) in rekening te brengen bij het verlenen van zorg. Over productiemiddelen en diensten die de instelling inkoopt, krijgt ze wel OB in rekening gebracht. Zo brengt bijvoorbeeld het schildersbedrijf voor onderhoudswerkzaamheden ook OB in rekening.',
    opties: [
      { id: 'a', tekst: 'De zorginstelling zal de OB aan het schildersbedrijf betalen en als kosten doorberekenen in de prijs van haar zorgverlening.' },
      { id: 'b', tekst: 'De zorginstelling zal de rekening van het schildersbedrijf terugsturen en vragen om een rekening zonder OB.' },
      { id: 'c', tekst: 'De zorginstelling zal de OB terugvorderen van de belastingdienst.' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Omdat de zorginstelling zelf geen OB in rekening brengt, kan zij de aan haar in rekening gebrachte OB ook niet terugvorderen. De OB wordt voor haar een kostenpost en een kostprijsverhogende belasting: ze betaalt het schildersbedrijf inclusief OB en verwerkt dat in haar kostprijs. Zie leerboek §4.5.1.1.',
    hints: ['Wie geen OB afdraagt, kan voor-OB niet terugvragen.', 'OB wordt dan een kostprijsverhogende belasting.'],
  }),
  mc({
    id: 't26-06', deel: 1, bronCategorie: 'tentamen-2026', bronLabel: L(6), difficulty: 'berucht',
    stam: 'Uw nichtje heeft voor zowel het stukloonstelsel, het premieloonstelsel als het tijdloonstelsel gekozen. Deze stelling is:',
    context:
      'Uw nichtje bakt en verkoopt op een open dag stroopwafels en broodjes hamburger vanuit een kraam. Zij onderscheidt drie kostensoorten: (1) de huur van de kraam en de bakplaat — constant en niet rechtstreeks aan een product toewijsbaar; (2) de grond- en hulpstoffen (stroop, gehakt) — variabel en direct per productgroep toewijsbaar; (3) het loon dat zij zichzelf uitbetaalt. Voor dat loon overweegt zij drie vormen: een loon van een percentage van de verkoopprijs per product; een vast uurloon; of een loon dat deels vast is en deels meebeweegt met de winst/omzet.',
    opties: [{ id: 'a', tekst: 'Juist' }, { id: 'b', tekst: 'Onjuist' }],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a (Juist). De drie kostensoorten passen elk bij een loonstelsel: (1) huur kraam/bakplaat = constante, indirecte kosten → tijdloonstelsel; (2) loon als percentage van de omzet/verkoopprijs is variabel en direct per productgroep toewijsbaar → stukloonstelsel; (3) een loon dat deels constant en deels variabel (met de winst) meebeweegt → premieloonstelsel (combinatie van beide). Ergo: alle drie loonstelsels kunnen van toepassing zijn op de geschetste situatie.',
    hints: ['Koppel elke kostensoort (constant/indirect, variabel/direct, gemengd) aan een loonstelsel.', 'Tijdloon = vast; stukloon = per stuk/omzet; premieloon = vast + variabel.'],
  }),
  // ===================== DEEL II — Kostprijzen =====================
  mc({
    id: 't26-08', deel: 2, bronCategorie: 'tentamen-2026', bronLabel: L(8), difficulty: 'lastig',
    stam: 'Het onderscheid tussen rationele en irrationele overcapaciteit is dat rationele overcapaciteit in zijn geheel wordt benut voor het produceren van goederen en irrationele overcapaciteit helemaal niet. Deze stelling is:',
    context: 'Een ondernemer heeft een machine gekocht waarvan hij zich afvraagt in hoeverre hij heeft geïnvesteerd in rationele of irrationele overcapaciteit, of misschien wel beide.',
    opties: [{ id: 'a', tekst: 'Juist' }, { id: 'b', tekst: 'Onjuist' }],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b (Onjuist). Vanwege technische ondeelbaarheid zal rationele overcapaciteit óók bestaan uit capaciteit die wordt gekocht doordat het niet mogelijk is een kleinere machine te kopen die aan de gestelde voorwaarden voldoet. Rationele overcapaciteit wordt dus niet "in zijn geheel benut"; ze is bewust/onvermijdelijk aanwezig (bv. reserve- of ondeelbaarheidscapaciteit).',
    hints: ['Denk aan technische ondeelbaarheid: je kunt geen halve machine kopen.', 'Rationele overcapaciteit is bewust/onvermijdelijk, niet volledig benut.'],
  }),
  mc({
    id: 't26-09', deel: 2, bronCategorie: 'tentamen-2026', bronLabel: L(9), difficulty: 'lastig',
    stam: 'Hoeveel procent van de waarde van de oorspronkelijke marmerplaten kan worden aangeduid als kosten van verspilling?',
    context:
      'Een onderneming maakt aanrechtbladen van platen marmer. Van dat gebruik is 4% afval. Als alle marmerplaten zijn gebruikt en alle aanrechtbladen zijn gefabriceerd, wordt van de aanrechtbladen 5% afgekeurd (uitval). Afval en uitval hebben verder geen waarde en zijn onvermijdelijk. De onderneming past de integralestandaardkostprijsmethode toe.',
    opties: [
      { id: 'a', tekst: '0 %' }, { id: 'b', tekst: '4 %' }, { id: 'c', tekst: '5 %' }, { id: 'd', tekst: '8,8 %' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a (0%). Afval en uitval zijn weliswaar kosten, maar géén verspillingen voor zover ze economisch onvermijdelijk zijn. Onvermijdbare afval/uitval hoort tot de normale (toegestane) kosten en is dus geen verspilling. Verspilling = vermijdbaar verlies, en dat is hier niet aan de orde.',
    hints: ['Let op het woord "onvermijdelijk".', 'Verspilling = vermijdbaar; onvermijdbare afval/uitval is normale kostprijs, geen verspilling.'],
  }),
  mc({
    id: 't26-13', deel: 2, bronCategorie: 'tentamen-2026', bronLabel: L(13), difficulty: 'berucht',
    stam: 'Stel dat de ondernemer met terugwerkende kracht over die eerste periode de normale productie aanpast door die te verhogen. De periodewinst over de eerste periode:',
    context:
      'Een startende ondernemer heeft constante kosten en degressief stijgende variabele kosten. Ze twijfelt tussen de integralestandaardkostprijsmethode (ISKP) en de variabelekostprijscalculatie (VKC), en of ze de normale productie wel goed heeft vastgesteld. Na de eerste periode zijn alle geproduceerde artikelen met winst verkocht, maar resteert een kleine eindvoorraad gereed product die ze de volgende periode zal verkopen.',
    opties: [
      { id: 'a', tekst: 'zal toenemen zowel bij ISKP als VKC' },
      { id: 'b', tekst: 'zal afnemen bij ISKP en toenemen bij VKC' },
      { id: 'c', tekst: 'zal toenemen bij ISKP en afnemen bij VKC' },
      { id: 'd', tekst: 'zal afnemen zowel bij ISKP als VKC' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d. Verhoging van de normale productie leidt zowel bij ISKP als VKC tot een lagere standaardkostprijs. De eindvoorraad gereed product zal daardoor lager in waarde uitvallen, dat wil zeggen er worden minder kosten doorgeschoven naar de toekomst (volgende periode). Daardoor drukken er in de eerste periode méér kosten op het resultaat en valt de periodewinst dus lager uit — bij beide methoden.',
    hints: ['Hogere normale productie → lagere kostprijs per stuk → lagere voorraadwaardering.', 'Minder kosten doorgeschoven naar de toekomst = hogere kosten nu = lagere winst nu.'],
  }),
  // ===================== DEEL III — Budget control & verschillenanalyse =====================
  mc({
    id: 't26-16', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(16), difficulty: 'lastig',
    stam: 'Een afdeling heeft variabele en constante kosten en past noodzakelijkerwijs een flexibel afdelingsbudget toe. Als de constante kosten verdwijnen:',
    opties: [
      { id: 'a', tekst: 'verandert het flexibele afdelingsbudget in een gemengd afdelingsbudget' },
      { id: 'b', tekst: 'moet nog steeds een flexibel afdelingsbudget worden toegepast' },
      { id: 'c', tekst: 'verandert het flexibele afdelingsbudget in een variabel afdelingsbudget' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. Dat een afdeling noodgedwongen een flexibel afdelingsbudget toepast, kan niet anders betekenen dan dat (een deel van) de variabele kosten niet-proportioneel variabel is. Dát verandert niet als de constante kosten verdwijnen. Een variabel, vast en gemengd budget vallen daarom af; flexibel budgetteren blijft de enige optie.',
    hints: ['Waarom is een flexibel budget "noodzakelijk"? → niet-proportioneel variabele kosten.', 'Het verdwijnen van constante kosten verandert die niet-proportionaliteit niet.'],
  }),
  mc({
    id: 't26-17', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(17), difficulty: 'gemiddeld',
    stam: 'U concludeert dat de integralestandaardkostprijzen kunnen worden toegepast om met het budget van de fabricageafdeling vast te stellen. Wat is de meest passende aanduiding van het budgetteringssysteem?',
    context: 'Bij MHC heeft u integralestandaardkostprijzen berekend voor de hoefijzers Amazone en Gaucho. Die fabricagekosten bestuderend, koppelt u het afdelingsbudget aan de standaardkostprijzen en de geproduceerde aantallen.',
    opties: [
      { id: 'a', tekst: 'inputbudgettering' }, { id: 'b', tekst: 'procesbudgettering' },
      { id: 'c', tekst: 'prestatiebudgettering' }, { id: 'd', tekst: 'outputbudgettering' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d (outputbudgettering). Bij outputbudgettering worden afspraken gemaakt over standaardkostprijzen van de output (de producten) en hun volume (de geproduceerde aantallen). Het budget = standaardkostprijs × geproduceerde hoeveelheid — precies wat hier gebeurt.',
    hints: ['Budget = standaardkostprijs × aantal producten → koppeling aan de output.', 'Output = producten en hun volume.'],
  }),
  mc({
    id: 't26-18', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(18), difficulty: 'lastig',
    stam: 'Als u hem zou informeren over de totale kosten van het EX-POST budget, dan bedraagt dat:',
    context:
      'Uw docent rijdt wekelijks heen en terug (100 km totaal) voor familiebezoek. De benzineprijs is met 20% gestegen en hij rijdt nu 110 i.p.v. 100 km (10 extra km).\n' +
      'Variabele kosten (ex-ante = begroot/normaal · werkelijk):\n' +
      '· kilometers: 100 · 110\n' +
      '· liter per km: 0,07 · 0,05\n' +
      '· liters totaal: 7,00 · 5,50\n' +
      '· prijs per liter: €2,00 · €2,40\n' +
      '· totale kosten: €14,00 · €13,20',
    opties: [
      { id: 'a', tekst: '€ 11,00' }, { id: 'b', tekst: '€ 12,00' }, { id: 'c', tekst: '€ 14,00' }, { id: 'd', tekst: '€ 15,40' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d (€15,40). Het ex-post (toegestane) budget waardeert de WERKELIJKE hoeveelheid output tegen de BEGROTE (ex-ante) verbruiks- en prijsnormen: kilometers 110 (werkelijk) × 0,07 liter/km (begroot) = 7,70 liter × €2,00/liter (begroot) = €15,40. Je rekent dus af op de werkelijke prestatie (110 km), maar met de standaardprijs en het standaardverbruik.',
    hints: ['Ex-post budget = werkelijke hoeveelheid × standaard (begrote) prijs en verbruik.', '110 km × 0,07 l/km × €2,00/l = €15,40.'],
  }),
  mc({
    id: 't26-19', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(19), difficulty: 'berucht',
    stam: 'Stel dat met terugwerkende kracht de werkelijke verkoopprijs (€1,55) als de normale verkoopprijs wordt genomen. In hoeverre zouden dan het perioderesultaat en het verkoopomvangverschil zijn veranderd?',
    context:
      'MHC maakt en verkoopt hoefijzers; waardering tegen integrale standaardkostprijs. Eerste kwartaal (budget=normaal · werkelijk):\n' +
      '· gefabriceerde hoefijzers: 1.000.000 · 1.250.000\n' +
      '· grondstofkosten per hoefijzer: €0,750 · €0,800\n' +
      '· personeelskosten per hoefijzer: €0,500 · €0,495\n' +
      '· constante kosten: €250.000 · €270.000\n' +
      '· verkochte hoefijzers: 950.000 · 1.100.000\n' +
      '· verkoopprijs: €1,65 (begroot) · €1,55 (werkelijk)\n' +
      'Achteraf vindt uw oom €1,65 te ambitieus; €1,55 had de normale prijs moeten zijn.',
    opties: [
      { id: 'a', tekst: 'Alleen het verkoopomvangverschil zou zijn veranderd.' },
      { id: 'b', tekst: 'Alleen het perioderesultaat zou zijn veranderd.' },
      { id: 'c', tekst: 'Zowel het verkoopomvangverschil als het perioderesultaat zouden zijn veranderd.' },
      { id: 'd', tekst: 'Beide zouden niet zijn veranderd.' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Het verkoopomvangverschil = (Qw − Qs) × (VPb − KP), met VPb = de begrote/normale verkoopprijs. Aangezien VPb verandert (van €1,65 naar €1,55), verandert dit verschil. Het perioderesultaat verandert NIET: dat is opgebouwd uit het transactieresultaat en het bezettingsresultaat, en in die berekeningen speelt de begrote/normale verkoopprijs geen rol (alleen de werkelijke verkoopprijs en de standaardkostprijs).',
    hints: ['Verkoopomvangverschil bevat de begrote verkoopprijs VPb → verandert mee.', 'Perioderesultaat = transactie- + bezettingsresultaat; daarin zit de begrote verkoopprijs niet.'],
  }),
  mc({
    id: 't26-20', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(20), difficulty: 'lastig',
    stam: 'Hoeveel van de drie ontbrekende gegevens heeft de ondernemer nog nodig om het efficiencyverschil op manuren te kunnen berekenen?',
    context:
      'Een ondernemer fabriceert en verkoopt caravans; waardering tegen integrale standaardkostprijs. Bekend zijn o.a.: het werkelijk aantal gefabriceerde producten (120), de begrote én werkelijke uren per product (250 respectievelijk 260) en de standaardprijs per uur (€45). In de tabel staan drie cellen nog open ("????").',
    opties: [
      { id: 'a', tekst: 'een' }, { id: 'b', tekst: 'twee' }, { id: 'c', tekst: 'drie' }, { id: 'd', tekst: 'geen enkele (nul)' },
    ],
    juistAntwoord: 'd',
    uitleg:
      'Antwoord d (geen enkele). Efficiencyverschil = (SH − WH) × SP. Om de standaarduren (SH) en werkelijke uren (WH) te berekenen heb je nodig: het werkelijk aantal gefabriceerde producten (120), de begrote en werkelijke uren per product (250 resp. 260) en de standaardprijs per uur (€45). Die zijn allemaal al bekend → SH = 120 × 250, WH = 120 × 260, en je hebt SP. Geen van de ontbrekende (begrote) cellen is nodig.',
    hints: ['Efficiencyverschil = (standaarduren − werkelijke uren) × standaardprijs per uur.', 'Welke gegevens heb je daarvoor concreet nodig — en zijn die al gegeven?'],
  }),
  mc({
    id: 't26-21', deel: 3, bronCategorie: 'tentamen-2026', bronLabel: L(21), difficulty: 'lastig',
    stam: 'Bij de onderneming is sprake van een nadelig PRIJSVERSCHIL op manuren van:',
    context:
      'Tweewieler BV produceert en verkoopt fietsen tegen integrale standaardkostprijs (budget=normaal · werkelijk):\n' +
      '· productie: 1.450 · 1.500\n' +
      '· manuur per product: 18,0 · 18,5\n' +
      '· kosten per manuur: €28,00 · €29,00\n' +
      '(we zien af van andere kosten die normaal bij fietsenproductie komen kijken)',
    opties: [
      { id: 'a', tekst: '-/- € 27.750' }, { id: 'b', tekst: '-/- € 27.000' }, { id: 'c', tekst: '-/- € 26.825' }, { id: 'd', tekst: '-/- € 21.000' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a (-/- €27.750, nadelig). Prijsverschil = (PS − PW) × HW, met HW = de werkelijke uren = werkelijke productie × werkelijke uren per product = 1.500 × 18,5 = 27.750 uur. Prijsverschil = (€28,00 − €29,00) × 27.750 = -€1,00 × 27.750 = -/- €27.750.',
    hints: ['Prijsverschil = (standaardprijs − werkelijke prijs) × WERKELIJKE uren.', 'Werkelijke uren = 1.500 × 18,5 = 27.750.'],
  }),
  // ===================== DEEL IV — Besluitvorming & investeringsselectie =====================
  mc({
    id: 't26-07', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(7), difficulty: 'lastig',
    stam: 'De economische levensduur van de oven is:',
    context:
      'Bij Mustang Hoofcare wordt geïnvesteerd in een oven van €500.000 (aanschafwaarde). De oven kan aan het eind van elk jaar tegen restwaarde worden verkocht. Per jaar (restwaarde einde jaar · complementaire kosten · machine-uren):\n' +
      '· jaar 1: €400.000 · €50.500 · 3.500\n' +
      '· jaar 2: €310.000 · €58.800 · 3.800\n' +
      '· jaar 3: €230.000 · €72.700 · 4.000\n' +
      '· jaar 4: €160.000 · €97.650 · 4.000\n' +
      '· jaar 5: €100.000 · €122.550 · 3.800\n' +
      '· jaar 6: €50.000 · €164.800 · 3.500\n' +
      '· jaar 7: €0 · €213.000 · 3.000',
    opties: [
      { id: 'a', tekst: '3 jaar' }, { id: 'b', tekst: '4 jaar' }, { id: 'c', tekst: '5 jaar' }, { id: 'd', tekst: '6 jaar' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a (3 jaar). De economische levensduur ligt waar de gemiddelde kosten per machine-uur (cumulatieve waardedaling + cumulatieve complementaire kosten, gedeeld door de cumulatieve machine-uren) minimaal zijn. Die kosten per machine-uur dalen t/m jaar 3 en stijgen daarna: ca. €43,00 (t/m jr 1) → €41,00 → €40,00 (t/m jr 3, minimum) → €40,50 → €42,00 → €45,00 → €50,00. Het minimum (€40,00) ligt bij t/m jaar 3.',
    hints: ['Bereken per jaar: (cumulatieve waardedaling + cumulatieve complementaire kosten) / cumulatieve machine-uren.', 'De economische levensduur = het jaar met de laagste kosten per machine-uur.'],
  }),
  mc({
    id: 't26-10', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(10), difficulty: 'gemiddeld',
    stam: 'Een ondernemer berekent rentekosten over het gebruik van eigen vermogen (opportunity costs); dat percentage noemen we rente (1). Bij het berekenen van de nettocontantewaarde van een investering past hij ook een rentepercentage toe, rente (2). Welke stelling is juist?',
    opties: [
      { id: 'a', tekst: 'Rente (1) en rente (2) zijn beide discontopercentages.' },
      { id: 'b', tekst: 'Rente (1) is een disconto- en rente (2) een interestpercentage.' },
      { id: 'c', tekst: 'Rente (1) is een interest- en rente (2) een discontopercentage.' },
      { id: 'd', tekst: 'Rente (1) en rente (2) zijn beide interestpercentages.' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c. Wordt een toekomstige waarde teruggerekend in de tijd (contant maken), dan spreken we van een DISCONTOpercentage — dat is het geval bij de nettocontantewaarde (rente 2). Wordt berekend wat een huidige waarde in de toekomst waard is, of welke opbrengsten/kosten over (eigen) vermogen worden vergoed, dan spreken we van een INTERESTpercentage (rente 1, de opportunity costs van eigen vermogen). Rentepercentage is de verzamelnaam van interest- en discontopercentage.',
    hints: ['Terugrekenen naar nu (contant maken) = disconto.', 'Vergoeding over vermogen / vooruitrekenen = interest.'],
  }),
  mc({
    id: 't26-12', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(12), difficulty: 'gemiddeld',
    stam: "In het leerboek duikt het fenomeen 'different costs for different purposes' op: hoe relevant zijn bepaalde kosten/kostprijzen bij het nemen van een besluit? Welk onderscheid in kosten speelt daarbij met name een rol?",
    opties: [
      { id: 'a', tekst: 'de fabricage- versus de verkoopkosten' },
      { id: 'b', tekst: 'de kosten van de onderneming versus die van de maatschappij' },
      { id: 'c', tekst: 'de variabele versus de constante kosten' },
      { id: 'd', tekst: 'de directe versus de indirecte kosten' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c. De constante kosten hoeven geen rol te spelen in situaties waarbij alleen een afweging hoeft plaats te vinden van extra opbrengsten (de omzet per product) ten opzichte van extra kosten (de variabele kosten). Bij dergelijke (korte-termijn) besluiten zijn alleen de variabele/relevante kosten van belang; de constante kosten zijn sunk/irrelevant.',
    hints: ['Welke kosten zijn "relevant" bij een extra order of besluit?', 'Constante kosten lopen toch wel door → variabele vs. constante kosten is het kernonderscheid.'],
  }),
  mc({
    id: 't26-22', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(22), difficulty: 'gemiddeld',
    stam: 'Welke stelling is juist?',
    context:
      'Een ondernemer (die bedrijfskunde heeft gevolgd) wordt geconfronteerd met twee besluiten. Besluit 1: de keuze tussen een kapitaalintensieve en een arbeidsintensieve productiemethode. Besluit 2: de restaurantvoorziening voor de werknemers zelf blijven doen of uitbesteden.',
    opties: [
      { id: 'a', tekst: 'Het indifferentiepunt speelt een rol bij beide besluiten.' },
      { id: 'b', tekst: 'Het indifferentiepunt speelt een rol bij besluit 1, maar niet bij besluit 2.' },
      { id: 'c', tekst: 'Het indifferentiepunt speelt geen rol bij besluit 1, maar wel bij besluit 2.' },
      { id: 'd', tekst: 'Het indifferentiepunt speelt bij beide besluiten geen rol.' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a. Het gaat in beide gevallen om het berekenen van het punt waarbij de alternatieven gelijkwaardig zijn wat betreft de omvang van de kosten (het indifferentie- of break-evenpunt tussen twee alternatieven). Bij besluit 1 (kapitaal- vs. arbeidsintensief) én besluit 2 (zelf doen vs. uitbesteden) zoek je het productie-/afzetvolume waarbij beide alternatieven even duur zijn.',
    hints: ['Indifferentiepunt = het volume waarbij twee alternatieven even duur zijn.', 'Geldt dat zowel voor de productiemethode- als de make-or-buy-keuze?'],
  }),
  mc({
    id: 't26-23', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(23), difficulty: 'berucht',
    stam: 'De verandering wordt steeds bedoeld t.o.v. het voorgaande scenario (scenario 3 t.o.v. scenario 2). Welke stelling is juist?',
    context:
      HOORCOLLEGE_CASUS +
      '\n\nDrie scenario’s t.o.v. scenario 0:\n' +
      '· scenario 1: de restwaarde wordt €5.000 (i.p.v. €0).\n' +
      '· scenario 2: de nieuwe machine wordt vervangen door een tweedehands met aanschafwaarde €15.000 en restwaarde €0.\n' +
      '· scenario 3: tweedehands machine €15.000, maar nu wordt het omzetpatroon veranderd (de omzet over de jaren verschuift, terwijl de totale omzet gelijk blijft).\n' +
      'Voor elk scenario is de gemiddelde boekhoudkundige rentabiliteit (GBR) uitgerekend.',
    opties: [
      { id: 'a', tekst: 'De GBR veranderde bij scenario 2 en bij scenario 3.' },
      { id: 'b', tekst: 'De GBR veranderde bij scenario 2, maar niet bij scenario 3.' },
      { id: 'c', tekst: 'De GBR veranderde niet bij scenario 2, maar wel bij scenario 3.' },
      { id: 'd', tekst: 'De GBR veranderde niet bij scenario 2 en evenmin bij scenario 3.' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. GBR = gemiddelde winst na belasting / gemiddeld geïnvesteerd vermogen. Scenario 2 verandert het investeringsbedrag (€15.000 i.p.v. €20.000) → zowel het gemiddeld geïnvesteerd vermogen als de afschrijvingen (en dus de winst) wijzigen → de GBR verandert. Scenario 3 verschuift alleen het omzetpatroon in de tijd, terwijl de totale omzet (en daarmee de totale en gemiddelde winst) en het gemiddeld geïnvesteerd vermogen gelijk blijven → een gemiddelde verandert daardoor niet → de GBR verandert niet. Zie het voorbeeld uit het hoorcollege.',
    hints: ['GBR werkt met GEMIDDELDEN (gem. winst / gem. vermogen).', 'Een andere timing van de omzet verandert het gemiddelde niet; een ander investeringsbedrag wel.'],
  }),
  mc({
    id: 't26-24', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(24), difficulty: 'lastig',
    stam: 'Als gevolg van deze verandering zal de boekhoudkundige terugverdienperiode (gerekend in 2 decimalen):',
    context:
      HOORCOLLEGE_CASUS +
      '\n\nStel dat t.o.v. dit scenario het volgende verandert: de grondstofkosten bedragen niet 35% maar 40% van de verkoopprijs. Deze jaarlijkse stijging in kosten is in totaliteit gelijk aan €3.000. De totale afschrijvingskosten worden met hetzelfde bedrag (€3.000) verlaagd doordat de restwaarde niet langer €0 maar €3.000 is.',
    opties: [
      { id: 'a', tekst: 'korter worden' }, { id: 'b', tekst: 'gelijk blijven' }, { id: 'c', tekst: 'langer worden' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (langer worden). De totale kosten veranderen per saldo niet (extra grondstofkosten €3.000 vs. €3.000 lagere afschrijving), en daardoor blijft ook de winstbelasting in totaliteit gelijk. Maar er zijn méér UITGAVEN door de hogere grondstofkosten, terwijl afschrijvingskosten géén uitgaven zijn. De terugverdienperiode kijkt naar kasstromen/uitgaven → door dat effect wordt de terugverdienperiode langer.',
    hints: ['Afschrijving is een kost, maar GEEN uitgave; grondstofkosten zijn wél uitgaven.', 'Terugverdienperiode draait om kasstromen → meer uitgaven = langer.'],
  }),
  mc({
    id: 't26-25', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(25), difficulty: 'lastig',
    stam: 'Gastdocent Van de Leur besloot tot het desinvesteren van zijn gehele onderneming (verkoop van Van de Leur Banketspecialiteiten BV aan Royal Smilde), omdat:',
    context: 'Een dergelijk desinvesteringsbesluit kan diverse achtergronden hebben, zowel van persoonlijke als van bedrijfseconomische aard.',
    opties: [
      { id: 'a', tekst: 'de verantwoordelijkheden van het leiden van een eigen bedrijf in lastige marktomstandigheden hem te zwaar begonnen te drukken' },
      { id: 'b', tekst: 'de verkoop in het belang van de onderneming zou zijn' },
      { id: 'c', tekst: "hem werd toegezegd na een overgangsperiode voorzitter van de Raad van Bestuur van Royal Smilde te worden, wat hem in staat stelde een lang gekoesterde droom ('private investor') te realiseren" },
      { id: 'd', tekst: 'de aankoopsom die Royal Smilde wilde betalen hem in staat stelde als private investor verder te gaan' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b. Van de Leur had ooit met de oprichter van het bedrijf — zijn vader — afgesproken dat hij het bedrijf zou verkopen als zich één van twee situaties zou voordoen: (1) hij zou er geen plezier meer in hebben, of (2) de verkoop zou in het belang van de onderneming zijn. Het eerste was niet het geval, dus gaf de tweede reden — het belang van de onderneming — de doorslag.',
    hints: ['Let op de afspraak met zijn vader: twee voorwaarden voor verkoop.', 'Voorwaarde 1 (geen plezier meer) gold niet → dus voorwaarde 2.'],
  }),
  mc({
    id: 't26-26', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(26), difficulty: 'lastig',
    stam: 'Voor Royal Smilde was de belangrijkste reden om Van de Leur Banketspecialiteiten BV over te nemen:',
    context: 'Gastdocent Van de Leur deed verslag van de overname van zijn winstgevende bedrijf door Royal Smilde; zo’n investering kan diverse redenen hebben.',
    opties: [
      { id: 'a', tekst: "het behouden/verkrijgen van het predicaat 'royal' (koninklijk) als visitekaartje t.o.v. concurrenten" },
      { id: 'b', tekst: 'het vergroten van de winstgevendheid dankzij de hefboomwerking door de aankoop met vreemd vermogen te financieren' },
      { id: 'c', tekst: 'het realiseren van synergie-effecten, onder andere wat betreft het productassortiment en de productiecapaciteit' },
      { id: 'd', tekst: "het zich door schaalvergroting onttrekken aan de situatie 'te klein voor tafellaken, te groot voor servet'" },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (synergie-effecten). De overname leverde Royal Smilde synergievoordelen op qua productassortiment en productiecapaciteit. De andere opties kloppen niet: het predicaat "royal" vormde eerder een risico (mogelijke onregelmatigheden uit het verleden); over hefboomwerking heeft de gastdocent geen woord gezegd; en het was juist Van de Leur Banketspecialiteiten BV — niet Royal Smilde — die worstelde met "te klein voor tafellaken, te groot voor servet".',
    hints: ['Eén optie gaat over voordelen in assortiment + capaciteit = synergie.', 'De andere opties bevatten elk een fout (predicaat = risico; geen hefboomwerking genoemd; verkeerde onderneming).'],
  }),
  mc({
    id: 't26-27', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(27), difficulty: 'berucht',
    stam: 'De gemiddelde boekhoudkundige rentabiliteit (GBR) van deze investering bedraagt:',
    context:
      'Een directeur-eigenaar overweegt een machine van €225.000, in 5 jaar lineair afgeschreven, na 5 jaar verkocht tegen restwaarde €25.000. Omzet jaar 1 €120.000, jaarlijkse groei €30.000 (dus 120/150/180/210/240 duizend). Grondstof- en arbeidskosten zijn 35% respectievelijk 25% van de verkoopprijs. Omzetbelasting speelt geen rol; over de winst 25% vennootschapsbelasting.',
    opties: [
      { id: 'a', tekst: '9,6 %' }, { id: 'b', tekst: '12,8 %' }, { id: 'c', tekst: '19,2 %' }, { id: 'd', tekst: '25,6 %' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (19,2%). Totale omzet 5 jaar = 120+150+180+210+240 = €900.000. Brutomarge = 100% − 35% − 25% = 40% → €360.000. Totale afschrijving = €225.000 − €25.000 = €200.000. Winst vóór belasting (5 jr) = €360.000 − €200.000 = €160.000. Winst na belasting = €160.000 × (1 − 0,25) = €120.000. Gemiddelde winst na belasting = €120.000 / 5 = €24.000. Gemiddeld geïnvesteerd vermogen = (€225.000 + €25.000) / 2 = €125.000. GBR = €24.000 / €125.000 = 19,2%.',
    hints: ['Brutomarge = 40% van de totale omzet; trek de totale afschrijving (aanschaf − restwaarde) eraf.', 'GBR = gem. winst na belasting / gem. geïnvesteerd vermogen = (aanschaf + restwaarde)/2.'],
  }),
  mc({
    id: 't26-28', deel: 4, bronCategorie: 'tentamen-2026', bronLabel: L(28), difficulty: 'lastig',
    stam: 'De nettocontantewaarde van de tweedehands machine zal, in vergelijking met die van de oorspronkelijke machine:',
    context:
      'Een ondernemer vergelijkt met de nettocontantewaardemethode (vermogenskostenvoet 15%) twee alternatieven: de oorspronkelijke (nieuwe) machine en een tweedehands machine. Van de tweedehands machine is zowel de aanschafprijs als de restwaarde €5.000 lager. De overige gegevens zijn gelijk.',
    opties: [
      { id: 'a', tekst: 'lager zijn' }, { id: 'b', tekst: 'hetzelfde zijn' }, { id: 'c', tekst: 'hoger zijn' },
    ],
    juistAntwoord: 'c',
    uitleg:
      'Antwoord c (hoger). De netto geldontvangsten zijn per jaar gelijk, behalve in het laatste jaar (restwaarde). Het voordeel van de tweedehands machine — €5.000 lagere aanschafprijs — telt NU (jaar 0) volledig mee. Het nadeel — €5.000 lagere restwaarde — valt pas in jaar 5 en wordt contant gemaakt tegen 15%, dus telt voor minder dan €5.000. Per saldo is de tweedehands machine gunstiger: hogere nettocontantewaarde.',
    hints: ['€5.000 minder uitgeven NU weegt zwaarder dan €5.000 minder ontvangen over 5 jaar.', 'Contant maken tegen 15% verkleint het toekomstige nadeel.'],
  }),
  // ===================== DEEL V — Prestatiemanagement & resultaatverantwoording =====================
  mc({
    id: 't26-11', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(11), difficulty: 'lastig',
    stam: 'Welke van de aanvullende gegevens 1 t/m 3 heeft u nodig om de verandering in arbeidsproductiviteit van docent Tuinman vast te kunnen stellen?',
    context:
      'Docent Tuinman verzorgt colleges voor het vak Boekhouden aan Bedrijfskundestudenten; zijn productie wordt gemeten in geslaagde studenten. Het faculteitsbestuur besluit dat Tuinman óók Economiestudenten gaat doceren (een vak dat eerder door collega Feenstra werd verzorgd, die wordt ontslagen). Het totaal aantal bestede uren van Tuinman blijft gelijk.\n' +
      'Aanvullende gegevens: (1) het aantal geslaagde Economiestudenten in de OUDE situatie; (2) het aantal geslaagde Economiestudenten in de NIEUWE situatie; (3) de loonkosten per gewerkt uur van Tuinman.',
    opties: [
      { id: 'a', tekst: 'alleen gegeven 1' }, { id: 'b', tekst: 'alleen gegeven 2' },
      { id: 'c', tekst: 'gegevens 1 en 2' }, { id: 'd', tekst: 'alle gegevens (1, 2 en 3)' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b (alleen gegeven 2). Arbeidsproductiviteit = aantal prestaties (geslaagde studenten) gedeeld door het aantal werkeenheden (uren). Het uurloon (gegeven 3) heeft daar geen invloed op. In de oude situatie waren er nog geen geslaagde Economiestudenten van Tuinman (Feenstra deed dat vak), dus gegeven 1 is niet nodig; om de verandering te bepalen ontbreekt alleen het aantal geslaagde Economiestudenten in de NIEUWE situatie (gegeven 2).',
    hints: ['Arbeidsproductiviteit = prestaties / werkeenheden — loonkosten doen niet mee.', 'Wat is er in de nieuwe situatie bijgekomen dat je nog niet kent?'],
  }),
  mc({
    id: 't26-29', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(29), difficulty: 'lastig',
    stam: 'Voor hoeveel van de opgesomde concepten (kosten, winst, EBIT, EBITDA, ROI, RI) geldt dat het rekening houdt met de relatieve omvang van elke RVE (of daarvoor corrigeert)?',
    context:
      'Op een sheet werden zes concepten gepresenteerd als potentiële resultaten waarop resultaatverantwoordelijke eenheden (RVE’s) kunnen worden afgerekend: kosten, winst, EBIT, EBITDA, ROI en RI. Grote concerns willen vergelijkbare RVE’s vergelijken; daarvoor is bij voorkeur een concept nodig dat rekening houdt met (corrigeert voor) de relatieve omvang van elke RVE.',
    opties: [
      { id: 'a', tekst: 'een' }, { id: 'b', tekst: 'twee' }, { id: 'c', tekst: 'drie' }, { id: 'd', tekst: 'vier' },
    ],
    juistAntwoord: 'a',
    uitleg:
      'Antwoord a (een). Behalve de ROI (Return on Investment) betreft het allemaal ABSOLUTE kengetallen (kosten, winst, EBIT, EBITDA en ook RI = Residual Income zijn bedragen in euro’s). Alleen de ROI is een RELATIEF/genormaliseerd kengetal (winst gedeeld door geïnvesteerd vermogen) en corrigeert dus voor de omvang van de RVE. Dus precies één concept.',
    hints: ['Welke van deze zes is een verhouding (%) i.p.v. een bedrag in euro’s?', 'RI is een bedrag (absoluut); ROI is een percentage (relatief).'],
  }),
  // ===================== DEEL VI — MA & de fabricageonderneming =====================
  mc({
    id: 't26-14', deel: 6, bronCategorie: 'tentamen-2026', bronLabel: L(14), difficulty: 'berucht',
    stam: 'Als u wordt gevraagd het (voordelige) transactieresultaat te berekenen, geeft u als antwoord:',
    context:
      'Een product van uw divisie; waardering tegen integrale standaardkostprijs (ISKP). Afgelopen maand: productie werkelijk 50.000, productie normaal 48.000, verkopen 43.600. Constante kosten €36.000; variabele kosten €3,00 per stuk (proportioneel variabel); break-evenpunt 20.000 stuks. Alle kosten zijn tevens normale kosten.',
    opties: [
      { id: 'a', tekst: '€ 42.480' }, { id: 'b', tekst: '€ 45.780' }, { id: 'c', tekst: '€ 47.280' }, { id: 'd', tekst: '€ 54.000' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b (€45.780). Eerst de verkoopprijs uit het break-evenpunt: bij break-even dekt de omzet de totale kosten → 20.000 × P = 20.000 × €3,00 + €36.000 → P = €3,00 + €36.000/20.000 = €3,00 + €1,80 = €4,80. Integrale standaardkostprijs = variabel €3,00 + constant per stuk (€36.000/48.000 = €0,75) = €3,75. Transactieresultaat = verkopen × (verkoopprijs − ISKP) = 43.600 × (€4,80 − €3,75) = 43.600 × €1,05 = €45.780. (Controle: omzet 43.600 × €4,80 = €209.280; kostprijs verkopen 43.600 × €3,75 = €163.500; verschil €45.780.)',
    hints: ['Haal eerst de verkoopprijs uit het break-evenpunt: 20.000 × P = variabele + constante kosten.', 'Transactieresultaat = afzet × (verkoopprijs − integrale standaardkostprijs); ISKP = €3,00 + €0,75.'],
  }),
  mc({
    id: 't26-15', deel: 6, bronCategorie: 'tentamen-2026', bronLabel: L(15), difficulty: 'lastig',
    stam: 'De divisie past de variabelekostprijscalculatie (VKC) toe. Het perioderesultaat bedraagt:',
    context:
      'Een product van uw divisie. Afgelopen maand: productie werkelijk 24.400, productie normaal 22.400, verkopen 23.000. Constante kosten €56.000; variabele kosten €11,00 per stuk (proportioneel variabel); verkoopprijs €15,00 per stuk. Alle kosten zijn normale kosten.',
    opties: [
      { id: 'a', tekst: '€ 34.500' }, { id: 'b', tekst: '€ 36.000' }, { id: 'c', tekst: '€ 39.500' }, { id: 'd', tekst: '€ 41.600' },
    ],
    juistAntwoord: 'b',
    uitleg:
      'Antwoord b (€36.000). Bij VKC telt alleen de afzet, niet de productie. Dekkingsbijdrage = verkopen × (verkoopprijs − variabele kosten) = 23.000 × (€15,00 − €11,00) = 23.000 × €4,00 = €92.000. Perioderesultaat = dekkingsbijdrage − constante kosten = €92.000 − €56.000 = €36.000. (Omzet €345.000 − variabele kosten €253.000 = dekkingsbijdrage €92.000.)',
    hints: ['Bij VKC: perioderesultaat = (verkoopprijs − variabele kosten) × VERKOPEN − constante kosten.', 'De productie-aantallen doen er bij VKC niet toe.'],
  }),

  // ===================== VRAAG 30 t/m 34 — NAGEBOUWD (niet gefotografeerd) =====================
  // Onderwerp + juiste antwoordletter komen uit de nakijksleutel/het geheugen van de student;
  // de getallen en opties zijn een reconstructie van het TYPE vraag, niet de exacte tentamentekst.
  mc({
    id: 't26-30', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(30) + ' (nagebouwd)', difficulty: 'gemiddeld',
    stam: 'Welke vestiging behaalt de hoogste brutowinst?',
    context:
      'Op een sheet over prestatiemeting werd de brutowinst van vier vestigingen (RVE’s) vergeleken. De brutowinst kun je schrijven als: omloopsnelheid van het geïnvesteerd vermogen × geïnvesteerd vermogen × brutowinstmarge. (Want omzet = omloopsnelheid × geïnvesteerd vermogen, en brutowinst = brutowinstmarge × omzet.)\n' +
      'Vestiging A: omloopsnelheid 2,0 · geïnvesteerd vermogen €500.000 · marge 8%.\n' +
      'Vestiging B: omloopsnelheid 1,5 · geïnvesteerd vermogen €800.000 · marge 9%.\n' +
      'Vestiging C: omloopsnelheid 4,0 · geïnvesteerd vermogen €300.000 · marge 7%.\n' +
      'Vestiging D: omloopsnelheid 2,5 · geïnvesteerd vermogen €600.000 · marge 10%.',
    opties: [
      { id: 'a', tekst: 'Vestiging A' }, { id: 'b', tekst: 'Vestiging B' },
      { id: 'c', tekst: 'Vestiging C' }, { id: 'd', tekst: 'Vestiging D' },
    ],
    juistAntwoord: 'd',
    uitleg:
      '⚠️ NAGEBOUWD — vraag 30 is niet gefotografeerd; alleen het juiste antwoord uit de nakijksleutel (d) is zeker. De cijfers hieronder zijn een reconstructie van het type vraag. (Jij had toen c — fout.)\n' +
      'Brutowinst = omloopsnelheid × geïnvesteerd vermogen × marge. A: 2,0 × €500.000 × 8% = €80.000. B: 1,5 × €800.000 × 9% = €108.000. C: 4,0 × €300.000 × 7% = €84.000. D: 2,5 × €600.000 × 10% = €150.000. Hoogste = vestiging D.',
    hints: ['Reken eerst de omzet uit: omloopsnelheid × geïnvesteerd vermogen.', 'Brutowinst = die omzet × de marge. Vergelijk alle vier.'],
  }),
  mc({
    id: 't26-31', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(31) + ' (nagebouwd)', difficulty: 'gemiddeld',
    stam: 'Welke takken zijn economisch winstgevend (rendement boven de vermogenskostenvoet van 10%)?',
    context:
      'Een concern beoordeelt vier takken (RVE’s) op winstgevendheid. Een tak is economisch winstgevend als de ROI hoger is dan de vermogenskostenvoet van 10% (oftewel een positieve residual income heeft).\n' +
      'Tak 1: winst €60.000 · geïnvesteerd vermogen €400.000.\n' +
      'Tak 2: winst €30.000 · geïnvesteerd vermogen €400.000.\n' +
      'Tak 3: winst €55.000 · geïnvesteerd vermogen €500.000.\n' +
      'Tak 4: winst €20.000 · geïnvesteerd vermogen €300.000.',
    opties: [
      { id: 'a', tekst: 'alleen tak 1' }, { id: 'b', tekst: 'tak 1 en 3' },
      { id: 'c', tekst: 'tak 2 en 4' }, { id: 'd', tekst: 'alle takken' },
    ],
    juistAntwoord: 'b',
    uitleg:
      '⚠️ NAGEBOUWD — vraag 31 is niet gefotografeerd; alleen het juiste antwoord uit de nakijksleutel (b) is zeker. De cijfers zijn een reconstructie van het type vraag. (Jij had toen b — goed.)\n' +
      'ROI = winst / geïnvesteerd vermogen. Tak 1: 60.000/400.000 = 15% (> 10% ✓). Tak 2: 30.000/400.000 = 7,5% (< 10% ✗). Tak 3: 55.000/500.000 = 11% (> 10% ✓). Tak 4: 20.000/300.000 ≈ 6,7% (< 10% ✗). Boven de vermogenskostenvoet → tak 1 en 3. (Residual income: tak 1 +€20.000, tak 3 +€5.000, tak 2 −€10.000, tak 4 −€10.000.)',
    hints: ['Reken per tak de ROI uit: winst / geïnvesteerd vermogen.', 'Winstgevend = ROI boven de vermogenskostenvoet (10%), dus positieve RI.'],
  }),
  mc({
    id: 't26-32', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(32) + ' (nagebouwd)', difficulty: 'gemiddeld',
    stam: 'Hoe groot is de EBIT?',
    context:
      'Uit de resultatenrekening van een onderneming over een jaar:\n' +
      '- omzet: €500.000\n' +
      '- operationele kosten exclusief afschrijving: €380.000\n' +
      '- afschrijving: €40.000\n' +
      '- interestlasten: €15.000\n' +
      '- vennootschapsbelasting: €16.250',
    opties: [
      { id: 'a', tekst: '€ 120.000' }, { id: 'b', tekst: '€ 65.000' },
      { id: 'c', tekst: '€ 48.750' }, { id: 'd', tekst: '€ 80.000' },
    ],
    juistAntwoord: 'd',
    uitleg:
      '⚠️ NAGEBOUWD — vraag 32 is niet gefotografeerd; alleen het juiste antwoord uit de nakijksleutel (d) is zeker. De cijfers zijn een reconstructie van het type vraag. (Jij had toen d — goed.)\n' +
      'EBIT = Earnings Before Interest and Taxes = bedrijfsresultaat vóór interest en belasting = omzet − operationele kosten − afschrijving = €500.000 − €380.000 − €40.000 = €80.000. (€120.000 = EBITDA; €65.000 = winst vóór belasting (EBT); €48.750 = nettowinst.)',
    hints: ['EBIT = resultaat vóór interest én belasting — die twee tel je dus NIET mee.', 'Afschrijving trek je bij EBIT wél af (anders bereken je EBITDA).'],
  }),
  mc({
    id: 't26-33', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(33) + ' (nagebouwd)', difficulty: 'gemiddeld',
    stam: 'Hoe groot is de EBITDA (zelfde resultatenrekening als de vorige vraag)?',
    context:
      'Zelfde gegevens: omzet €500.000; operationele kosten exclusief afschrijving €380.000; afschrijving €40.000; interestlasten €15.000; vennootschapsbelasting €16.250.',
    opties: [
      { id: 'a', tekst: '€ 80.000' }, { id: 'b', tekst: '€ 65.000' },
      { id: 'c', tekst: '€ 48.750' }, { id: 'd', tekst: '€ 120.000' },
    ],
    juistAntwoord: 'd',
    uitleg:
      '⚠️ NAGEBOUWD — vraag 33 is niet gefotografeerd; alleen het juiste antwoord uit de nakijksleutel (d) is zeker. De cijfers zijn een reconstructie van het type vraag. (Jij had toen d — goed.)\n' +
      'EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortization = EBIT + afschrijving (en amortisatie) = €80.000 + €40.000 = €120.000. Oftewel rechtstreeks: omzet − operationele kosten exclusief afschrijving = €500.000 − €380.000 = €120.000.',
    hints: ['EBITDA = EBIT, maar dan vóór afschrijving — dus de afschrijving tel je er weer bij op.', 'EBITDA = omzet − operationele kosten exclusief afschrijving.'],
  }),
  mc({
    id: 't26-34', deel: 5, bronCategorie: 'tentamen-2026', bronLabel: L(34) + ' (nagebouwd)', difficulty: 'gemiddeld',
    stam: 'Voor hoeveel van de vier maatstaven (ROA, ROI, EBIT, EBITDA) geldt dat het een relatief kengetal (een verhouding) is?',
    context:
      'Op een sheet werden vier prestatiemaatstaven getoond: ROA, ROI, EBIT en EBITDA. Een concern wil eenheden (RVE’s) van verschillende omvang eerlijk vergelijken en zoekt daarvoor relatieve/genormaliseerde kengetallen — verhoudingsgetallen in plaats van absolute bedragen in euro’s.',
    opties: [
      { id: 'a', tekst: 'een' }, { id: 'b', tekst: 'twee' },
      { id: 'c', tekst: 'drie' }, { id: 'd', tekst: 'vier' },
    ],
    juistAntwoord: 'b',
    uitleg:
      '⚠️ NAGEBOUWD — vraag 34 is niet gefotografeerd; alleen het juiste antwoord uit de nakijksleutel (b) is zeker. De opties zijn een reconstructie van het type vraag. (Jij had toen d — fout.)\n' +
      'Twee. ROA (Return on Assets) en ROI (Return on Investment) zijn verhoudingsgetallen/percentages (winst gedeeld door (geïnvesteerd) vermogen) en corrigeren voor de omvang van een eenheid. EBIT en EBITDA zijn absolute bedragen in euro’s en zijn dus niet relatief. → twee. (Vergelijk vraag 29: van kosten/winst/EBIT/EBITDA/ROI/RI is alleen ROI relatief.)',
    hints: ['Welke van de vier zijn een percentage/verhouding en welke een bedrag in euro’s?', 'ROA en ROI = winst gedeeld door vermogen (relatief); EBIT en EBITDA = bedragen (absoluut).'],
  }),
]
