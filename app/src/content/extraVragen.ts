import type { Vraag } from '../types'

// Extra ECHTE tentamenvragen, geëxtraheerd uit het tentamen 15-6-2023 en het
// hertentamen 27-6-2024. bron='pdf' → tellen mee voor gewicht en zijn standaard
// zichtbaar. Filterbaar op jaar via bronCategorie.
// Elke vraag is self-contained: alle gegevens die de uitwerking gebruikt staan
// in `context` of in de stam (zoals op het echte tentamen).
const mc = (q: Omit<Vraag, 'type' | 'bron'>): Vraag => ({ ...q, type: 'mc', bron: 'pdf' })

// ---- gedeelde casussen (letterlijk uit de tentamens) ----

const KINGMA_CONTEXT =
  'Onderneming Kingma verkoopt zitzakken; waardering tegen integrale standaardkostprijs. Gegevens over de afgelopen maand:\n' +
  'Begroot (en normaal): productie 25.000 · verkopen 25.000 · verkoopprijs €75 · 1,20 manuur/product · €30 kosten/manuur · constante productiekosten €750.000.\n' +
  'Werkelijk: productie 25.300 · verkopen 25.100 · verkoopprijs €80 · 1,25 manuur/product · €31 kosten/manuur · constante productiekosten €800.000.'

const FOODTRUCK_2023_CONTEXT =
  'Tijdens een festival bak en verkoop je vanuit je foodtruck hamburgers (mei): €0,40 gehakt per hamburger; bakplaat met €500 afschrijving per maand; je betaalt de festivaldirectie 15% van de verkoopopbrengsten. In mei: 2.000 hamburgers à €4,00. Van de opbrengsten minus de genoemde kosten betaal je jezelf de helft uit als loonkosten. Geen begin- of eindvoorraden.\n\n' +
  'In juni vervang je 1.000 hamburgers door 2.000 reuzestroopwafels (€0,20 stroop/stuk, verkoopprijs €2,00); je bakt beide producten vrolijk door elkaar op de bakplaat. De festivaldirectie krijgt nog steeds 15% van de opbrengsten en je betaalt jezelf nog steeds de helft van (opbrengsten − genoemde kosten) als loonkosten.'

const WANDTEGELS_CONTEXT =
  'Kantens BV: nieuwe machine, aanschaf €100.000, in 5 jaar lineair afgeschreven; restwaarde na 5 jaar = 20% van de aanschaf (€20.000). Verkoop wandtegels: 10.000 stuks in jaar 1, daarna +2.000 per jaar. Verkoopprijs €15,00; grondstofkosten €8,00 en arbeidskosten €5,00 per product. Geen omzetbelasting; 25% vennootschapsbelasting over de winst.'

const DIVISIE_PRODUCT_CONTEXT =
  'Een product van jouw divisie; waardering tegen integrale standaardkostprijs. Afgelopen maand: productie werkelijk 50.000, productie normaal 48.000, verkopen 49.000. Constante kosten €60.000; variabele kosten €3,00 per stuk (proportioneel variabel); break-evenpunt 40.000 stuks. Alle kosten zijn tevens normale kosten.'

export const extraVragen: Vraag[] = [
  // ===================== DEEL I =====================
  mc({
    id: 'x-2024-pdca', deel: 1, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.1', difficulty: 'gemiddeld',
    stam: '"U besluit dat idee op te geven, maar behoudt uw online verkoopkanalen, want u bent van plan net zo lang te zoeken tot u een ander product vindt dat u denkt wel winstgevend te kunnen verhandelen."\nBij welke stap van de PDCA-cyclus past bovenstaande zin het beste?',
    context:
      'Je hebt een geweldig idee voor een onderneming bedacht. Enthousiast benader je leveranciers, denk je productieprocessen uit en zet je online verkoopkanalen op. Na een maand bereken je hoopvol het eerste perioderesultaat en blijkt het idee toch niet zo veelbelovend. Je besluit het idee op te geven, maar behoudt de verkoopkanalen om door te zoeken naar een winstgevend product.',
    opties: [{ id: 'a', tekst: 'P (Plan)' }, { id: 'b', tekst: 'D (Do)' }, { id: 'c', tekst: 'C (Check)' }, { id: 'd', tekst: 'A (Act)' }],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d (Act). Bedenken/leveranciers/kanalen opzetten = Plan + Do. Het perioderesultaat berekenen = Check. Het besluit om de koers te wijzigen n.a.v. die check is Act — let op: je bent nog níet een concrete planning voor een vervangend product aan het opstellen (dat zou weer Plan zijn).',
    hints: ['PDCA: Plan → Do → Check → Act.', 'Een besluit nemen ná het evalueren van resultaten = welke letter?'],
  }),
  mc({
    id: 'x-2023-tactisch', deel: 1, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.1', difficulty: 'gemiddeld',
    stam: 'Een voorbeeld van tactische planning is:',
    opties: [
      { id: 'a', tekst: 'de verandering van een functionele in een marktgerichte organisatiestructuur' },
      { id: 'b', tekst: 'het vaststellen op welk soort klanten de verkopen zich moeten richten' },
      { id: 'c', tekst: 'het maken van een productieplanning wanneer bepaalde producten te produceren' },
    ],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. De organisatiestructuur (her)inrichten is tactisch. Klantkeuze/product-marktcombinaties = strategisch; productieplanning korte termijn = operationeel.',
    hints: ['Structuur inrichten = middellange termijn = tactisch.', 'Klantkeuze = strategisch; korte-termijn productieplan = operationeel.'],
  }),
  mc({
    id: 'x-2023-pdca-count', deel: 1, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.2', difficulty: 'lastig',
    stam: 'Hoeveel van deze activiteiten moeten vooral worden toegeschreven aan stap C en hoeveel aan stap A van de PDCA-cyclus?',
    context:
      'Je bent directeur van de onderneming van je overspannen oom en neemt je verantwoordelijkheid voor de verkoopfunctie, blijkend uit deze activiteiten (willekeurig geordend):\n1. de verkoper op een cursus Marketing en Verkoop sturen\n2. de hoogte van verkoopprijsverschillen berekenen\n3. de verkoper vragen de omzetcijfers uit te splitsen naar productgroepen\n4. het verkoopteam versterken met een ervaren verkoper\n5. je verdiepen in de verkoopcijfers van een concurrent om de prestaties van je verkoper te beoordelen\n6. de verkoper opdracht geven de promotie van bepaalde producten te staken',
    opties: [
      { id: 'a', tekst: 'twee in C, drie in A' }, { id: 'b', tekst: 'twee in C, vier in A' },
      { id: 'c', tekst: 'drie in C, twee in A' }, { id: 'd', tekst: 'drie in C, drie in A' },
    ],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. Check (vergelijken/uiteenrafelen/analyseren): verschillen berekenen (2), omzet uitsplitsen (3), concurrent bestuderen om te beoordelen (5). Act (concrete actie n.a.v. de analyse): cursus (1), team versterken (4), promotie staken (6).',
    hints: ['Check = meten/analyseren/vergelijken. Act = concrete acties n.a.v. de analyse.', 'Deel de 6 activiteiten in twee hoopjes: "meten/beoordelen" vs "ingrijpen".'],
  }),
  mc({
    id: 'x-2024-arbeidsspec', deel: 1, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.6', difficulty: 'lastig',
    stam: 'Hoe groot is de totale loonkostenbesparing?',
    context:
      'Je onderneming produceert banden. Werknemer Marco produceert per week 2.500 fietsbanden en 500 autobanden tegen een uurloon van €50. Werknemer Toni produceert per week 2.400 fietsbanden en 625 autobanden tegen een uurloon van €60. Beiden besteden 20 arbeidsuren per week aan fietsbanden en 20 aan autobanden.\n\nJe past arbeidsspecialisatie toe: Marco maakt alleen nog fietsbanden, Toni alleen nog autobanden. De totale weekproductie blijft gelijk; beide werknemers hebben een flexibel urencontract (uren op 2 decimalen afgerekend) en gaan minder uren werken. De uurlonen blijven ongewijzigd.',
    opties: [{ id: 'a', tekst: '€248' }, { id: 'b', tekst: '€280' }, { id: 'c', tekst: '€300' }, { id: 'd', tekst: '€580' }],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. Productiviteit: Marco 125 fietsbanden/u, Toni 31,25 autobanden/u. Nieuw: Marco 4.900 fietsbanden ÷ 125 = 39,2 u × €50 = €1.960; Toni 1.125 autobanden ÷ 31,25 = 36 u × €60 = €2.160 → samen €4.120. Oud: 40u×€50 + 40u×€60 = €4.400. Besparing = €280.',
    hints: ['Bereken eerst de productiviteit per uur per product per persoon.', 'Verdeel de nieuwe totalen: ieder doet alleen nog het product waarin hij zich specialiseert → benodigde uren × uurloon.', 'Oude kosten = 80 uur totaal; vergelijk met de nieuwe som.'],
  }),
  mc({
    id: 'x-2024-loonkosten-verschuiving', deel: 1, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.10', difficulty: 'lastig',
    stam: 'Welke van de volgende stellingen over de loonkosten is juist?',
    context:
      'Festival, mei: vanuit je foodtruck bak en verkoop je broodjes falafel (€0,40 ingrediënten/stuk) en shoarma (€0,80 vlees/stuk), vrolijk door elkaar op één bakplaat (afschrijving €500/maand). De festivaldirectie krijgt 15% van de verkoopopbrengsten. Verkocht: 4.000 falafelbroodjes à €1,00 en 2.000 shoarmabroodjes à €2,00. Van de opbrengsten minus alle genoemde kosten betaal je jezelf de helft uit als loonkosten.\n\nJuni: je zet volledig in op falafel en bakt/verkoopt 10.000 falafelbroodjes; met shoarma ben je gestopt. Bakplaat, 15%-afdracht en de loonafspraak (helft van opbrengsten − kosten) blijven gelijk.',
    opties: [
      { id: 'a', tekst: 'Net als mei zijn de loonkosten in juni direct.' },
      { id: 'b', tekst: 'Net als mei zijn de loonkosten in juni indirect.' },
      { id: 'c', tekst: 'In mei zijn de loonkosten direct en in juni indirect.' },
      { id: 'd', tekst: 'In mei zijn de loonkosten indirect en in juni direct.' },
    ],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. De loonkosten blijven variabel (ze hangen samen met de verkopen). In mei zijn er twee productgroepen en zitten de indirecte bakplaatkosten in de winstbasis → het loon is niet aan één productgroep toe te wijzen (indirect). In juni is er nog maar één productgroep → wél direct toewijsbaar.',
    hints: ['Met meerdere producten op één bakplaat: is het loon aan één product toe te wijzen?', 'Bij één productgroep wordt alles direct toewijsbaar.'],
  }),
  mc({
    id: 'x-2024-fiscaal-omega', deel: 1, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.7', difficulty: 'berucht',
    stam: 'Welke van de volgende stellingen is/zijn juist?\nA. Vanuit het perspectief van de Nederlandse belastingdienst is de winst van beide ondernemingen gelijk als het rentepercentage over het eigen vermogen van Omega 10% bedraagt.\nB. De bedrijfseconomische winst van beide ondernemingen is gelijk als het rentepercentage over het eigen vermogen van Omega 14% bedraagt.',
    context:
      'De Nederlandse ondernemingen Alpha en Omega hebben hetzelfde balanstotaal en dezelfde positieve brutowinst (resultaat exclusief rentekosten). Alpha is volledig gefinancierd met vreemd vermogen, Omega voor driekwart. Rente over het vreemd vermogen: Alpha 8%, Omega 6%. Omega rekent daarnaast opportunity costs (kosten) over het eigen vermogen.',
    opties: [{ id: 'a', tekst: 'A en B juist' }, { id: 'b', tekst: 'A juist, B onjuist' }, { id: 'c', tekst: 'A onjuist, B juist' }, { id: 'd', tekst: 'A en B onjuist' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Fiscaal telt alleen rente over vreemd vermogen: Omega 0,75A×6% = 0,045A; Alpha A×8% = 0,08A → verschillend, dus A onjuist (de EV-rente doet fiscaal niet mee). Bedrijfseconomisch tellen de totale vermogenskosten: Alpha 8% van A. Omega: 0,045A + 0,25A×14% = 0,08A = óók 8% → B juist.',
    hints: ['Fiscaal: alleen rente over vreemd vermogen aftrekbaar.', 'Bedrijfseconomisch: óók rente over eigen vermogen. Zet de totale vermogenskosten van beide gelijk.'],
  }),
  mc({
    id: 'x-2024-nietfin', deel: 1, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.2', difficulty: 'gemiddeld',
    stam: 'Bij management control hoort een degelijk systeem van interne rapportage. Welke van de volgende redenen is de meest plausibele verklaring om naast financiële óók niet-financiële indicatoren op te nemen in dat systeem?',
    opties: [
      { id: 'a', tekst: 'Niet-financiële indicatoren helpen het vroegtijdig signaleren van ontwikkelingen die pas later tot uiting komen in de financiële resultaten.' },
      { id: 'b', tekst: 'Niet-financiële indicatoren zijn doorgaans makkelijker te kwantificeren dan financiële indicatoren.' },
      { id: 'c', tekst: 'Niet-financiële indicatoren lenen zich doorgaans beter voor benchmarking dan financiële indicatoren.' },
      { id: 'd', tekst: 'Niet-financiële indicatoren leggen het accent op de korte termijn als aanvulling op financiële indicatoren die een langetermijnperspectief kennen.' },
    ],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Niet-financiële indicatoren werken als "early warning system": ontwikkelingen die pas later financieel zichtbaar worden, signaleer je zo vroegtijdig. Ze zijn doorgaans júist moeilijker te kwantificeren (b onjuist), benchmarking is doorgaans eenvoudiger voor gestandaardiseerde financiële indicatoren (c onjuist), en de termijnen in d staan precies andersom: niet-financieel = lange termijn, financieel = korte termijn.',
    hints: ['Financieel = achteraf/korte termijn. Niet-financieel = vooruitkijkend.', 'Denk aan een "early warning system".'],
  }),
  mc({
    id: 'x-2023-bsc', deel: 1, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.3', difficulty: 'gemiddeld',
    stam: 'Een divisie past de balanced scorecard toe. Dat blijkt vooral uit de opmerking dat met dit management control systeem:',
    opties: [
      { id: 'a', tekst: 'de aandacht zich toespitst op financiële en niet-financiële doelstellingen die op de korte termijn moeten worden gerealiseerd' },
      { id: 'b', tekst: 'vier perspectieven in hun samenhang de strategie van de divisie helder zouden moeten communiceren' },
      { id: 'c', tekst: 'invulling wordt gegeven aan negen aandachtsgebieden, betrekking hebbend op de organisatie en haar resultaten' },
    ],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. De BSC kent vier samenhangende perspectieven waarmee de realisatie van de strategie wordt bewaakt; ze zoekt juist een evenwicht tussen korte- én langetermijndoelen (a onjuist). Negen aandachtsgebieden = EFQM-/INK-model (c onjuist).',
    hints: ['Hoeveel perspectieven kent de balanced scorecard?', 'Negen aandachtsgebieden hoort bij het INK/EFQM-model, niet de BSC.'],
  }),

  // ===================== DEEL II =====================
  mc({
    id: 'x-2024-afval-iskp', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.9', difficulty: 'lastig',
    stam: 'Op grond van deze gegevens is de integrale standaardkostprijs van een krentebol ... die van een croissant.',
    context:
      'Een onderneming fabriceert krentebollen en croissants. Productie van 2.000 krentebollen kost €1.000; productie van 3.000 croissants kost €1.500. Van de kosten van krentebollen heeft 3% betrekking op afval van grondstoffen; bij croissants is dat 6%. Het afval van de krentebollen is economisch gezien geheel onvermijdbaar; dat van de croissants slechts voor de helft.',
    opties: [{ id: 'a', tekst: 'hoger dan' }, { id: 'b', tekst: 'gelijk aan' }, { id: 'c', tekst: 'lager dan' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Onvermijdbaar afval = normale kosten → in de ISKP; vermijdbaar afval → rechtstreeks naar de resultatenrekening. Krentebol: €1.000/2.000 = €0,50. Croissant: vermijdbaar = ½ × 6% × €1.500 = €45 → (€1.500−€45)/3.000 = €0,485. €0,50 > €0,485.',
    hints: ['Vermijdbaar afval → resultatenrekening (eruit). Onvermijdbaar → in de kostprijs.', 'Bereken per product: (kosten − vermijdbaar deel) ÷ aantal.'],
  }),
  mc({
    id: 'x-2024-overcapaciteit', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.11', difficulty: 'berucht',
    stam: 'De ondernemer koopt een machine met een capaciteit van 180.000 eenheden. Met die aankoop heeft zij geïnvesteerd in:',
    context:
      'Voor de normale productie is een capaciteit van 100.000 eenheden per periode vereist. In piektijden (seizoenproductie) is 48.000 extra capaciteit nodig, en omdat de machine elke periode onderhouden moet worden nóg eens 10.000 extra. Machines zijn te koop in capaciteiten van 120.000, 180.000 en 240.000 eenheden.',
    opties: [
      { id: 'a', tekst: 'een rationele overcapaciteit van 32.000 eenheden' },
      { id: 'b', tekst: 'een irrationele overcapaciteit van 32.000 eenheden' },
      { id: 'c', tekst: 'een rationele overcapaciteit van 58.000 en een irrationele van 22.000 eenheden' },
      { id: 'd', tekst: 'een rationele overcapaciteit van 80.000 eenheden' },
    ],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. Vereist = 100.000 + 48.000 + 10.000 = 158.000. De kleinste verkrijgbare machine die dat dekt is 180.000 → de aankoop is onvermijdbaar en dus rationeel. Overcapaciteit = alles boven de normale productie = 180.000 − 100.000 = 80.000 eenheden, geheel rationeel.',
    hints: ['Bereken de totaal vereiste capaciteit (normaal + piek + onderhoud).', 'Welke machinemaat dekt dat net? Die keuze is onvermijdbaar = rationeel.', 'Overcapaciteit = machinecapaciteit − normale productie.'],
  }),
  mc({
    id: 'x-2024-iskp-vkc', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.12', difficulty: 'berucht',
    stam: 'Na de eerste periode blijkt het perioderesultaat bij de integrale standaardkostprijsmethode exact gelijk aan dat bij de variabelekostencalculatie. Welke stelling geeft het meest complete beeld van de situatie?',
    context:
      'Startende onderneming (eerste periode, dus geen beginvoorraad) die krentenbollen fabriceert en verkoopt. Proportioneel variabele kosten en constante kosten, beide normaal. Je onderscheidt de werkelijke productie, de normale productie en de verkopen.',
    opties: [
      { id: 'a', tekst: 'de werkelijke productie moet gelijk zijn aan de normale productie' },
      { id: 'b', tekst: 'de werkelijke productie moet gelijk zijn aan de verkopen' },
      { id: 'c', tekst: 'de normale productie moet gelijk zijn aan de verkopen' },
      { id: 'd', tekst: 'werkelijke productie, normale productie en verkopen moeten allemaal gelijk zijn' },
    ],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. Verschil ISKP − VKC = (W−V)×C/N (geactiveerde constante kosten in de voorraad). Voor gelijkheid (met C>0) moet W=V: alle productie wordt verkocht en er worden geen constante kosten op de balans geactiveerd. De normale productie speelt geen rol.',
    hints: ['Het verschil tussen de methoden zit in geactiveerde constante kosten in de voorraad.', 'Verschil = (Werkelijke productie − Verkopen) × C/N. Wanneer is dat nul?'],
  }),
  mc({
    id: 'x-2024-vkc-vk', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.14', difficulty: 'gemiddeld',
    stam: 'De variabele kosten per sok bedragen:',
    context:
      'Sokkenfabrikant Sander Sandaal (variabelekostencalculatie). Afgelopen maand: productie werkelijk 16.000, productie normaal 15.000, verkopen 12.500. Constante kosten €40.000; verkoopprijs €25,00 per stuk; perioderesultaat €80.000 (voordelig). Variabele kosten per stuk onbekend (proportioneel variabel). Constante en variabele kosten zijn zowel werkelijk als begroot/normaal.',
    opties: [{ id: 'a', tekst: '€15,40' }, { id: 'b', tekst: '€17,00' }, { id: 'c', tekst: '€17,50' }, { id: 'd', tekst: '€21,80' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Bij VKC: perioderesultaat = (P−vk)×V − C → (€25−vk)×12.500 − €40.000 = €80.000 → (25−vk) = 9,6 → vk = €15,40. De productie-aantallen doen er bij VKC niet toe.',
    hints: ['Bij VKC: perioderesultaat = (prijs − variabele kosten) × verkopen − constante kosten.', 'Los op naar vk; negeer de productie-aantallen.'],
  }),
  mc({
    id: 'x-2024-dekkingsbijdrage', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.16', difficulty: 'gemiddeld',
    stam: 'De dekkingsbijdrage is het verschil tussen de omzet en:',
    opties: [
      { id: 'a', tekst: 'de variabele standaardkosten van de omzet' },
      { id: 'b', tekst: 'het totaal van de variabele standaardkosten van de periode' },
      { id: 'c', tekst: 'de constante standaardkosten van de omzet' },
      { id: 'd', tekst: 'de totale constante standaardkosten van de periode' },
    ],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Dekkingsbijdrage = omzet − variabele kosten van de verkochte (omzet)producten. Variabele kosten van onverkochte producten staan op de balans, niet in het resultaat.',
    hints: ['Dekkingsbijdrage moet de constante kosten dekken → omzet − variabele kosten.', 'Alleen variabele kosten van de verkóchte producten tellen.'],
  }),
  mc({
    id: 'x-2024-normaleprod-progressief', deel: 2, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.15', difficulty: 'lastig',
    stam: 'Het fabriceren van een product vergt constante kosten én variabele kosten met een progressief stijgend karakter. Na verhóging van de normale productie is de integrale standaardkostprijs gestegen.\n"Deze stijging kan veroorzaakt zijn door hogere variabele kosten per product, maar niet door hogere constante kosten per product." Deze stelling is:',
    opties: [{ id: 'a', tekst: 'Juist' }, { id: 'b', tekst: 'Onjuist' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Hogere normale productie bij gelijke constante kosten → constante kosten p.e. dalen (kunnen de stijging dus niet veroorzaken). Progressief stijgend = variabele kosten per extra eenheid nemen toe → bij een hogere normale productie zijn de totale variabele kosten ÷ normale productie per eenheid hóger → die verklaren de stijging wél.',
    hints: ['Wat doet de constante-kostencomponent als de noemer (normale productie) groter wordt?', 'Progressief = variabele kosten per extra eenheid lopen op.'],
  }),

  // ===================== DEEL III =====================
  mc({
    id: 'x-2024-budgettype', deel: 3, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.17', difficulty: 'lastig',
    stam: 'Aan het begin van elke maand stel je voor de totale kosten een budget op. Welke van de volgende stellingen is/zijn juist?\nA. In mei pas je een gemengd budget toe.\nB. In juni pas je een flexibel budget toe.',
    context:
      'Mei (begroot): foodtruck met hamburgers — €0,40 gehakt per hamburger; bakplaat-afschrijving €350/maand; bakboter (elk product evenveel boter) begroot op €50; festivaldirectie €1,00 per verkocht product; 2.000 hamburgers à €4,00; geen voorraden.\n\nJuni (begroot): 1.000 hamburgers worden vervangen door 1.500 reuzestroopwafels (€0,30 stroop/stuk, prijs €3,00, festivaldirectie nog steeds €1,00 per verkocht product); beide producten door elkaar op de bakplaat, beide vergen evenveel boter; gehakt en afschrijving onveranderd.',
    opties: [{ id: 'a', tekst: 'A en B juist' }, { id: 'b', tekst: 'A juist, B onjuist' }, { id: 'c', tekst: 'A onjuist, B juist' }, { id: 'd', tekst: 'A en B onjuist' }],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. In beide maanden zijn er constante kosten (afschrijving) én zijn alle variabele kosten proportioneel variabel (gehakt/stroop per stuk, €1 per verkocht product, boter per product). Constant + proportioneel variabel = gemengd budget — in béíde maanden. Een flexibel budget is pas nodig bij niet-proportioneel (progressief/degressief) variabele kosten, dus B is onjuist.',
    hints: ['Bepaal per kostenpost: constant of (proportioneel) variabel?', 'Constant + proportioneel variabel samen = gemengd budget. Flexibel is pas nodig bij niet-proportionele variabele kosten.'],
  }),
  mc({
    id: 'x-2024-totaalverschil', deel: 3, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.18', difficulty: 'lastig',
    stam: 'Hoe hoog is het totaal van prijs- en efficiencyverschil (samen genomen) op de variabele kosten?',
    context:
      'Hoedenmaker Alexander Rietveld maakt rieten hoeden; de enige variabele kosten zijn de kosten van riet.\nBegroot ex-ante: 200 hoeden, 410 cm riet per hoed, €0,20 per cm.\nWerkelijk: 215 hoeden, 400 cm riet per hoed, €0,21 per cm.',
    opties: [{ id: 'a', tekst: '€1.660 nadelig' }, { id: 'b', tekst: '€840 nadelig' }, { id: 'c', tekst: '€800 nadelig' }, { id: 'd', tekst: '€430 nadelig' }],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. Ex-post (toegestaan) budget: 215 × 410 × €0,20 = €17.630. Werkelijk: 215 × 400 × €0,21 = €18.060. Prijs- + efficiencyverschil samen = €17.630 − €18.060 = −€430 (nadelig). (Apart: efficiency +€1.230 voordelig, prijs −€1.660 nadelig.)',
    hints: ['Prijs- + efficiencyverschil samen = ex-post (toegestane) kosten − werkelijke kosten.', 'Ex-post = werkelijke productie × standaard cm × standaardprijs.'],
  }),
  mc({
    id: 'x-2024-vpb', deel: 3, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.19', difficulty: 'lastig',
    stam: 'De hoogte van de begrote verkoopprijs is:',
    context:
      'Onderneming Offerein verkoopt voetbalshirts; waardering tegen integrale standaardkostprijs. Variabele kosten = de stof.\nBegroot (en normaal): productie 400, verkopen 300, verkoopprijs ?, 0,25 m stof per shirt, €11 per meter, constante productiekosten €500.\nWerkelijk: productie 625, verkopen 350, verkoopprijs €11, 0,20 m per shirt, €9 per meter, constante productiekosten €400.\nOverig: verkoopomvangverschil €300 (voordelig); verkoopprijsverschil €350 (voordelig).',
    opties: [{ id: 'a', tekst: '€9,45' }, { id: 'b', tekst: '€9,55' }, { id: 'c', tekst: '€10,00' }, { id: 'd', tekst: '€11,00' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. KP = 0,25×€11 + €500/400 = €2,75 + €1,25 = €4. Verkoopomvangverschil = (Qw−Qb)×(VPb−KP) → (350−300)×(VPb−€4) = €300 → VPb = €10. Check via het prijsverschil: (€11−VPb)×350 = €350 → VPb = €10. ✓',
    hints: ['Bereken eerst de integrale standaardkostprijs KP (standaard stof + constante kosten/normale productie).', 'Verkoopomvangverschil = (werkelijke − begrote afzet) × (begrote prijs − KP).'],
  }),
  mc({
    id: 'x-2023-efficiency-kingma', deel: 3, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.18', difficulty: 'lastig',
    stam: 'Bij onderneming Kingma is sprake van een (nadelig) efficiencyverschil op manuren van:',
    context: KINGMA_CONTEXT,
    opties: [{ id: 'a', tekst: '−€50.375' }, { id: 'b', tekst: '−€48.750' }, { id: 'c', tekst: '−€37.950' }, { id: 'd', tekst: '−€31.625' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Efficiencyverschil = (HS − HW) × PS = (25.300×1,20 − 25.300×1,25) × €30 = (30.360 − 31.625) × €30 = −€37.950 (nadelig).',
    hints: ['Efficiencyverschil = (toegestane uren − werkelijke uren) × standaardprijs.', 'Toegestane uren = werkelijke productie × standaard manuur/product.'],
  }),
  mc({
    id: 'x-2023-welk-getal', deel: 3, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.19', difficulty: 'berucht',
    stam: 'Stel dat van de getallen/bedragen in de tabel er één verandert t.o.v. de uitgangssituatie. Daardoor veranderen zowel het verkoopomvangverschil als het prijsverschil op manuren. Welk getal/bedrag moet zijn veranderd?',
    context: KINGMA_CONTEXT,
    opties: [{ id: 'a', tekst: '1,20' }, { id: 'b', tekst: '1,25' }, { id: 'c', tekst: '€30' }, { id: 'd', tekst: '€31' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Verkoopomvangverschil = (Qw−Qb)×(VPb−KP), met KP afhankelijk van de standaard manuren (1,20) én de standaardprijs (€30). Prijsverschil op manuren = (PS−PW)×HW, met alleen de standaardprijs (€30). Alleen €30 zit in beide.',
    hints: ['Welk verschil bevat de integrale standaardkostprijs (KP)?', 'Welke standaardwaarde zit zowel in KP als in het prijsverschil op manuren?'],
  }),
  mc({
    id: 'x-2023-vpv-count', deel: 3, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.20', difficulty: 'gemiddeld',
    stam: 'In de kolom "begroot (en normaal)" staan zes getallen/bedragen. Hoeveel daarvan beïnvloeden de hoogte van het verkoopprijsverschil?',
    context: KINGMA_CONTEXT,
    opties: [{ id: 'a', tekst: 'één' }, { id: 'b', tekst: 'twee' }, { id: 'c', tekst: 'drie' }, { id: 'd', tekst: 'vijf' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Verkoopprijsverschil = (VPw − VPb) × Qw. Daarin staat slechts één begrote grootheid: de begrote verkoopprijs VPb (€75).',
    hints: ['Schrijf de formule: (werkelijke − begrote prijs) × werkelijke afzet.', 'Welk begróót getal staat in die formule?'],
  }),
  mc({
    id: 'x-2023-expost-budget', deel: 3, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.21', difficulty: 'lastig',
    stam: 'Wat zijn de totale begrote kosten van het ex-post budget?',
    context:
      'Je docent rijdt wekelijks 100 km (begroot, ex-ante) voor familiebezoek. Door een politiecontrole moest hij omrijden: werkelijk 110 km. Variabele kosten (benzine):\nEx-ante begroot: 100 km, 0,07 liter/km, €1,80/liter → €12,60.\nWerkelijk: 110 km, 0,06 liter/km, €2,00/liter → €13,20.',
    opties: [{ id: 'a', tekst: '€11,88' }, { id: 'b', tekst: '€12,00' }, { id: 'c', tekst: '€13,86' }, { id: 'd', tekst: '€15,40' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Ex-post budget = werkelijke output × standaardverbruik × standaardprijs = 110 km × 0,07 l/km × €1,80 = 7,70 liter × €1,80 = €13,86.',
    hints: ['Ex-post budget = werkelijke output, maar standaard-verbruik en standaard-prijs.', '110 × 0,07 × €1,80.'],
  }),

  // ===================== DEEL IV =====================
  mc({
    id: 'x-2024-levensduur-lineair', deel: 4, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.8', difficulty: 'berucht',
    stam: 'Stel dat de waardedaling van de machine gedurende de vijf jaar lineair zou zijn (€20.000 per jaar). Wat is de consequentie voor de economische levensduur?',
    context:
      'Machine van €100.000, technische levensduur 5 jaar. Begroot (bedragen cumulatief, t/m het betreffende jaar):\n' +
      'Jaar 1: waardedaling €37.500 · complementaire kosten €62.500 · machine-uren 1.500\n' +
      'Jaar 2: waardedaling €62.500 · complementaire kosten €125.000 · machine-uren 3.500\n' +
      'Jaar 3: waardedaling €81.250 · complementaire kosten €192.500 · machine-uren 5.700\n' +
      'Jaar 4: waardedaling €95.000 · complementaire kosten €267.500 · machine-uren 7.600\n' +
      'Jaar 5: waardedaling €100.000 · complementaire kosten €367.500 · machine-uren 9.300',
    opties: [
      { id: 'a', tekst: 'De economische levensduur is en blijft drie jaar.' },
      { id: 'b', tekst: 'De economische levensduur is en blijft vier jaar.' },
      { id: 'c', tekst: 'De economische levensduur gaat van drie naar vier jaar.' },
      { id: 'd', tekst: 'De economische levensduur gaat van vier naar drie jaar.' },
    ],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. Oorspronkelijk (kosten per machine-uur, cumulatief): €66,67 / €53,57 / €48,03 / €47,70 / €50,27 → laagste bij jaar 4. Lineair (€20.000/jaar): €55,00 / €47,14 / €44,30 / €45,72 / €50,27 → laagste bij jaar 3. De economische levensduur gaat dus van 4 naar 3 jaar.',
    hints: ['Bereken per jaar: (cumulatieve waardedaling + cumulatieve complementaire kosten) ÷ cumulatieve uren.', 'Doe dat twee keer: met de gegeven waardedaling én met €20.000/jaar lineair.', 'Zoek per variant het jaar met de laagste kosten per machine-uur.'],
  }),
  mc({
    id: 'x-2024-incidenteel-cat', deel: 4, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.22', difficulty: 'gemiddeld',
    stam: 'Welke kostencategorieën zijn van belang bij het bepalen van de minimale prijs waarboven de winkelketen moet bieden om de incidentele order te accepteren?',
    context:
      'Heatwave produceerde en verkocht het afgelopen jaar 18.000 airfryers (= normale productie), normaal afzetgebied Europa. De controller onderscheidt: categorie I = indirect+variabel, II = direct+variabel, III = direct+constant, IV = indirect+constant. Een keten uit Latijns-Amerika wil eenmalig 500 stuks kopen onder eigen merk. Heatwave wil de winst maximaliseren en heeft voldoende productiecapaciteit.',
    opties: [{ id: 'a', tekst: 'I en II' }, { id: 'b', tekst: 'III en IV' }, { id: 'c', tekst: 'II en III' }, { id: 'd', tekst: 'I en IV' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Een incidentele order accepteer je zodra de prijs boven de variabele kostprijs ligt (different costs for different purposes). Relevant zijn dus de variabele categorieën I en II; de constante kosten (III, IV) zijn al gedekt en niet relevant.',
    hints: ['Welke kosten zijn relevant bij vrije capaciteit? Alleen de variabele.', 'Variabele kosten = de twee categorieën met "variabel".'],
  }),
  mc({
    id: 'x-2024-gbr', deel: 4, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.23', difficulty: 'lastig',
    stam: 'Hoe hoog is de gemiddelde boekhoudkundige rentabiliteit van deze investering?',
    context:
      'Van der Steen BV: machine van €175.000, economische levensduur 2 jaar, in 2 jaar lineair afgeschreven, restwaarde €25.000. Verkoop bouwstenen: jaar 1: 10.500 stuks, jaar 2: 11.000 stuks à €32. Grondstof- + arbeidskosten: jaar 1 €100.000 + €150.000, jaar 2 €110.000 + €160.000. Geen omzetbelasting; 25% vennootschapsbelasting.',
    opties: [{ id: 'a', tekst: '3,60%' }, { id: 'b', tekst: '4,80%' }, { id: 'c', tekst: '6,75%' }, { id: 'd', tekst: '9,00%' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Winst voor belasting = (10.500+11.000)×€32 − €100.000 − €150.000 − €110.000 − €160.000 − afschrijving (€175.000−€25.000) = €18.000. Na belasting ×0,75 = €13.500 → gemiddeld €6.750/jaar. Gem. geïnvesteerd vermogen = (€175.000+€25.000)/2 = €100.000. GBR = €6.750/€100.000 = 6,75%.',
    hints: ['Winst vóór belasting over de hele looptijd; vergeet de afschrijving (aanschaf − restwaarde) niet.', 'GBR = gemiddelde winst na belasting ÷ gemiddeld geïnvesteerd vermogen ((aanschaf+restwaarde)/2).'],
  }),
  mc({
    id: 'x-2024-tvp-ncw', deel: 4, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.24', difficulty: 'lastig',
    stam: 'Welke van de volgende stellingen is juist?',
    context:
      'Van Slooten BV berekent voor een machine (aanschaf €120.000, restwaarde €30.000, 6 jaar lineair afgeschreven) een boekhoudkundige terugverdientijd van 4 jaar (TVP 1) en een netto contante waarde van €15.000 (NCW 1).\nNu koopt hij dezelfde machine tweedehands: aanschaf €100.000, restwaarde €10.000, nog steeds 6 jaar lineair; alle overige gegevens gelijk. Hij berekent TVP 2 en NCW 2.',
    opties: [
      { id: 'a', tekst: 'TVP2 is korter dan TVP1 en NCW2 is lager dan NCW1' },
      { id: 'b', tekst: 'TVP2 is korter dan TVP1 en NCW2 is hoger dan NCW1' },
      { id: 'c', tekst: 'TVP2 is langer dan TVP1 en NCW2 is lager dan NCW1' },
      { id: 'd', tekst: 'TVP2 is langer dan TVP1 en NCW2 is hoger dan NCW1' },
    ],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. TVP: er hoeft nu €20.000 minder terugverdiend te worden; de restwaarde valt ná het terugverdienmoment en beïnvloedt de TVP niet → korter. NCW: €20.000 minder investeren nú weegt zwaarder dan €20.000 lagere restwaarde in jaar 6 (contant gemaakt < €20.000) → hoger. (Afschrijving aanschaf−restwaarde blijft €90.000/6 gelijk, dus de winstbelasting verandert niet.)',
    hints: ['Restwaarde komt aan het eind — beïnvloedt die de terugverdientijd?', 'NCW: €20.000 minder nu vs. €20.000 minder restwaarde over 6 jaar (contant gemaakt).'],
  }),
  mc({
    id: 'x-2023-levensduur-stelling', deel: 4, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.7', difficulty: 'lastig',
    stam: 'Welke van de volgende stellingen is/zijn juist?\nA. De afschrijvingskosten van de taxi berekend per jaar moeten in jaar 3 lager zijn dan in jaar 5.\nB. De economische levensduur van de taxi wordt ook wel aangeduid als zijn relatieve technische levensduur, waarbij de absolute technische levensduur het moment aanduidt waarop de taxi niet meer kan presteren.',
    context:
      'In het leerboek wordt een taxi besproken bij het begrip levensduur van een actief. Voor een periode t/m zeven jaar zijn de kosten per kilometer op een rij gezet; de economische levensduur blijkt 4 jaar.',
    opties: [{ id: 'a', tekst: 'A en B juist' }, { id: 'b', tekst: 'A juist, B onjuist' }, { id: 'c', tekst: 'A onjuist, B juist' }, { id: 'd', tekst: 'A en B onjuist' }],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. Niet de afschrijvingskosten maar de tótale kosten (afschrijving + complementaire kosten) per kilometer bepalen de economische levensduur — uit een levensduur van 4 jaar volgt dus niets over de afschrijving per jaar (A onjuist). "Relatieve technische levensduur" is geen economisch begrip (B onjuist; het absolute deel van de stelling klopt wel, maar de gelijkstelling niet).',
    hints: ['Wat bepaalt de economische levensduur: afschrijving alleen, of totale kosten per eenheid?', 'Economische levensduur ≠ (relatieve) technische levensduur.'],
  }),
  mc({
    id: 'x-2023-disconto-interest', deel: 4, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.10', difficulty: 'lastig',
    stam: 'In hoeveel van de volgende situaties kan het rentepercentage als discontopercentage worden aangeduid en in hoeveel als interestpercentage?\n1. bij het bepalen van vermogenskosten die ten laste van het perioderesultaat worden gebracht\n2. bij het vaststellen van opbrengsten over tegoeden die een onderneming aanhoudt bij een bank\n3. bij het bepalen van de opportunity costs van het gebruik van eigen vermogen\n4. bij het berekenen van de nettocontantewaarde van een investering',
    opties: [
      { id: 'a', tekst: '1× disconto, 3× interest' },
      { id: 'b', tekst: '2× disconto, 2× interest' },
      { id: 'c', tekst: '3× disconto, 1× interest' },
    ],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Disconto = een toekomstige waarde terugrekenen in de tijd → alleen (4) NCW. Interest = vanuit een huidige waarde toekomstige kosten/opbrengsten berekenen → (1), (2) en (3).',
    hints: ['Disconto = toekomstige waarde terugrekenen naar nu.', 'Alleen de NCW maakt contant; de rest is interest.'],
  }),
  mc({
    id: 'x-2023-gbr-wandtegels', deel: 4, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.24', difficulty: 'lastig',
    stam: 'De gemiddelde boekhoudkundige rentabiliteit van deze investering bedraagt:',
    context: WANDTEGELS_CONTEXT,
    opties: [{ id: 'a', tekst: '10,0%' }, { id: 'b', tekst: '12,0%' }, { id: 'c', tekst: '15,0%' }, { id: 'd', tekst: '22,5%' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Marge €15−€8−€5 = €2/stuk × (10+12+14+16+18 dzd = 70.000 stuks) = €140.000; − afschrijving (€100.000−€20.000) = €80.000 → winst voor belasting €60.000. Na belasting €45.000 → gemiddeld €9.000/jaar. Gem. geïnvesteerd vermogen = (€100.000+€20.000)/2 = €60.000. GBR = €9.000/€60.000 = 15%.',
    hints: ['Marge per stuk × totale afzet over 5 jaar − totale afschrijving = winst voor belasting.', 'GBR = gem. winst na belasting ÷ gem. geïnvesteerd vermogen.'],
  }),
  mc({
    id: 'x-2023-gbr-tvp-spreiding', deel: 4, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.25', difficulty: 'berucht',
    stam: 'GBR(1)/TVP(1) horen bij lineaire afschrijving; daarna wordt — bij verder gelijke gegevens — afgeschreven naar rato van de producten (elk product evenveel afschrijving), wat GBR(2)/TVP(2) geeft. Welke stelling(en) is/zijn juist?\nA. GBR(2) is lager dan GBR(1).\nB. TVP(2) is korter dan TVP(1).',
    context: WANDTEGELS_CONTEXT + '\n\nLet op: de afzet groeit (10.000 → 18.000), dus afschrijving per product betekent: weinig afschrijving in vroege jaren, veel in late jaren; gesommeerd gelijk aan lineair.',
    opties: [{ id: 'a', tekst: 'A en B juist' }, { id: 'b', tekst: 'A juist, B onjuist' }, { id: 'c', tekst: 'A onjuist, B juist' }, { id: 'd', tekst: 'A en B onjuist' }],
    juistAntwoord: 'd',
    uitleg: 'Antwoord d. GBR blijft gelijk: de totale (en dus gemiddelde) winst verandert niet door een andere spreiding van de afschrijving (A onjuist). Per-stuk afschrijven schuift kosten naar latere jaren → vroege jaren meer winst → meer belasting (een échte uitgave) vroeg → nettogeldontvangsten verschuiven naar achteren → TVP wordt lánger, niet korter (B onjuist).',
    hints: ['Verandert de tótale winst door een andere afschrijvingsspreiding?', 'Vroeg meer winst → vroeg meer belasting → terugverdientijd langer.'],
  }),

  // ===================== DEEL V =====================
  mc({
    id: 'x-2024-centra', deel: 5, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.3', difficulty: 'lastig',
    stam: 'Een onderneming past kostencentra en opbrengstencentra toe; aan de condities is voldaan. De directie stuurt op effectiviteit en efficiency. Waarvan zal zij GÉÉN goed beeld kunnen krijgen?',
    opties: [
      { id: 'a', tekst: 'de efficiency van het kostencentrum' },
      { id: 'b', tekst: 'de effectiviteit van het kostencentrum' },
      { id: 'c', tekst: 'de efficiency van het opbrengstencentrum' },
      { id: 'd', tekst: 'de effectiviteit van het opbrengstencentrum' },
    ],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. De effectiviteit van een opbrengstencentrum is prima meetbaar (verkochte aantallen en prijzen vs. budget), maar die verschillen zeggen niets over de geleverde verkoopinspanning → de efficiency is niet te beoordelen. Bij een kostencentrum zijn input, output én hun relatie bekend → beide meetbaar.',
    hints: ['Een opbrengstencentrum stuurt op omzet; valt de verkoop-inspanning goed te meten?', 'Bij een kostencentrum zijn input-outputrelaties bekend.'],
  }),
  mc({
    id: 'x-2024-roi-bombari', deel: 5, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.4', difficulty: 'gemiddeld',
    stam: 'Hoeveel divisies hebben een return on investment (ROI) die hoger is dan die van de onderneming in totaliteit?',
    context:
      'Brouwerij Bombari, vier divisies (bedragen in mln €):\nDivisie A: omzet 200, winst 32, geïnvesteerd vermogen 500.\nDivisie B: omzet 250, winst 40, vermogen 600.\nDivisie C: omzet 150, winst 28, vermogen 280.\nDivisie D: omzet 125, winst 25, vermogen 400.\nVereist rendement per divisie: 6%.',
    opties: [{ id: 'a', tekst: '1' }, { id: 'b', tekst: '2' }, { id: 'c', tekst: '3' }, { id: 'd', tekst: '4' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. ROI = winst/vermogen: A 6,40%, B 6,67%, C 10,00%, D 6,25%. Onderneming = 125/1.780 = 7,02%. Alleen C ligt erboven.',
    hints: ['ROI = winst ÷ vermogen per divisie.', 'Onderneming-ROI = totale winst ÷ totaal vermogen.'],
  }),
  mc({
    id: 'x-2024-ri-cronen', deel: 5, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.5', difficulty: 'lastig',
    stam: 'Hoeveel divisies hebben een negatief (nadelig) residual income (RI)?',
    context:
      'Frisdrankproducent Cronen, vier divisies (bedragen in mln €):\nDivisie A: omzet 400, winst 32, geïnvesteerd vermogen 500.\nDivisie B: omzet 630, winst 40, vermogen 600.\nDivisie C: omzet 420, winst 28, vermogen 380.\nDivisie D: omzet 350, winst 25, vermogen 400.\nVereist rendement per divisie: 7%.',
    opties: [{ id: 'a', tekst: '1' }, { id: 'b', tekst: '2' }, { id: 'c', tekst: '3' }, { id: 'd', tekst: '4' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. RI = winst − 7%×vermogen: A 32−35 = −3; B 40−42 = −2; C 28−26,6 = +1,4; D 25−28 = −3. Drie divisies negatief (A, B en D).',
    hints: ['RI = winst − (vereist rendement × vermogen) per divisie.', 'Tel hoeveel er onder nul uitkomen.'],
  }),
  mc({
    id: 'x-2023-ri-hoogste', deel: 5, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.4', difficulty: 'lastig',
    stam: 'Welke divisie heeft het hoogste residual income (RI)?',
    context:
      'Industriële onderneming in Drenthe, vier divisies (bedragen in mln €):\nDivisie A: winstmarge 8,00%, omloopsnelheid 1,60, gemiddeld geïnvesteerd vermogen 6.250.\nDivisie B: winstmarge 7,50%, omloopsnelheid 1,92, vermogen 5.000.\nDivisie C: winstmarge 7,75%, omloopsnelheid 1,60, vermogen 10.000.\nDivisie D: winstmarge 13,75%, omloopsnelheid 0,80, vermogen 20.000.\nMinimaal vereist rendement per divisie: 10%.',
    opties: [{ id: 'a', tekst: 'divisie A' }, { id: 'b', tekst: 'divisie B' }, { id: 'c', tekst: 'divisie C' }, { id: 'd', tekst: 'divisie D' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. ROI = winstmarge × omloopsnelheid: A 12,8%, B 14,4%, C 12,4%, D 11%. RI = (ROI − 10%) × vermogen: A 175, B 220, C 240, D 200. C is het hoogst — ondanks een lagere ROI dan B, door het grotere vermogen.',
    hints: ['ROI = winstmarge × omloopsnelheid (DuPont).', 'RI = (ROI − vereiste ROI) × geïnvesteerd vermogen — let op het grote vermogen van C.'],
  }),
  mc({
    id: 'x-2023-winst-b', deel: 5, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.5', difficulty: 'lastig',
    stam: 'De return on investment (ROI) van divisie B is twee keer die van de onderneming als geheel. Hoe hoog is de winst van divisie B?',
    context:
      'Drie divisies (bedragen in mln €):\nDivisie A: omzet 2.160, winst 300, gemiddeld geïnvesteerd vermogen 1.200.\nDivisie B: omzet 1.440, winst ?, vermogen 1.200.\nDivisie C: omzet 1.440, winst 480, vermogen 3.600.',
    opties: [{ id: 'a', tekst: '€390 mln' }, { id: 'b', tekst: '€460 mln' }, { id: 'c', tekst: '€520 mln' }, { id: 'd', tekst: '€624 mln' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Winst excl. B = 300 + 480 = 780. Vergelijking: 2 × (780 + B)/6.000 = B/1.200 → (780 + B)/3.000 = B/1.200 → 1.200×(780+B) = 3.000B → 936.000 = 1.800B → B = €520 mln.',
    hints: ['ROI onderneming = (300 + B + 480) ÷ (1.200+1.200+3.600).', 'Zet ROI_B = 2 × ROI_onderneming en los de vergelijking op.'],
  }),
  mc({
    id: 'x-2023-ri-procentueel', deel: 5, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.6', difficulty: 'lastig',
    stam: 'Vier divisies (A t/m D) scoren allemaal ruim boven de vereiste ROI van 10%. "Als de vereiste ROI van 10% wordt verhoogd naar 12,5% voor alle divisies, zal het RI voor elke divisie afnemen met 25%." Deze stelling is:',
    opties: [{ id: 'a', tekst: 'juist' }, { id: 'b', tekst: 'onjuist' }],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. RI is het absolute verschil tussen werkelijke en vereiste winst (€), ROI een relatief getal (%). De vereiste winst stijgt weliswaar met 25%, maar de procentuele afname van het RI pakt per divisie anders uit (afhankelijk van werkelijke winst en vermogen).',
    hints: ['RI is absoluut (€), niet relatief (%).', 'Eenzelfde stijging in vereiste winst werkt per divisie anders door in het RI.'],
  }),

  // ===================== DEEL VI =====================
  mc({
    id: 'x-2024-perioderesultaat-iskp', deel: 6, bronCategorie: 'hertentamen-2024', bronLabel: 'Hertentamen 2024 vr.13', difficulty: 'lastig',
    stam: 'Het perioderesultaat bedraagt:',
    context:
      'Crompouce-fabrikant Heslinga uit Slooten (integrale standaardkostprijsmethode). Gegevens over een maand: productie werkelijk 250.000, productie normaal 200.000, verkopen 240.000. Constante kosten €300.000; variabele kosten €1,40 per stuk (proportioneel variabel); verkoopprijs €4,00. Constante en variabele kosten zijn zowel werkelijk als begroot/normaal.',
    opties: [{ id: 'a', tekst: '€264.000 (voordelig)' }, { id: 'b', tekst: '€324.000 (voordelig)' }, { id: 'c', tekst: '€339.000 (voordelig)' }, { id: 'd', tekst: '€350.000 (voordelig)' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. CK p.e. = €300.000/200.000 = €1,50 → ISKP = €1,40 + €1,50 = €2,90. Transactieresultaat = 240.000 × (€4,00 − €2,90) = €264.000. Bezettingsresultaat = (250.000 − 200.000) × €1,50 = €75.000. Perioderesultaat = €339.000.',
    hints: ['Perioderesultaat (ISKP) = transactieresultaat + bezettingsresultaat.', 'Transactieresultaat = verkopen × (prijs − ISKP); bezetting = (werkelijk − normaal) × CK p.e.'],
  }),
  mc({
    id: 'x-2023-perioderesultaat-vkc', deel: 6, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.15', difficulty: 'lastig',
    stam: 'Op basis van deze gegevens berekent de management assistent het (voordelige) perioderesultaat ter hoogte van:',
    context:
      'Eberhart BV (variabelekostencalculatie). Afgelopen maand: productie werkelijk 11.150, productie normaal 11.200, verkopen 11.050. Constante kosten €42.000; variabele kosten €8,25 per stuk (proportioneel variabel); verkoopprijs €12,80. Alle kosten zijn tevens normale kosten.',
    opties: [{ id: 'a', tekst: '€8.277,50' }, { id: 'b', tekst: '€8.652,50' }, { id: 'c', tekst: '€8.732,50' }, { id: 'd', tekst: '€8.840,50' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. VKC: dekkingsbijdrage = (€12,80 − €8,25) × 11.050 = €50.277,50; minus constante kosten €42.000 = €8.277,50. (De productie-aantallen spelen bij VKC geen rol.)',
    hints: ['Bij VKC telt alleen de verkochte hoeveelheid.', 'Dekkingsbijdrage = (prijs − variabele kosten) × verkopen, minus constante kosten.'],
  }),
  mc({
    id: 'x-2023-transactieresultaat', deel: 6, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.16', difficulty: 'berucht',
    stam: 'Op basis van deze gegevens bereken je het (voordelige) transactieresultaat. Dat bedraagt:',
    context: DIVISIE_PRODUCT_CONTEXT,
    opties: [{ id: 'a', tekst: '€12.250' }, { id: 'b', tekst: '€13.500' }, { id: 'c', tekst: '€14.750' }, { id: 'd', tekst: '€15.000' }],
    juistAntwoord: 'a',
    uitleg: 'Antwoord a. Verkoopprijs uit het break-evenpunt: te dekken kosten = 40.000×€3 + €60.000 = €180.000 → prijs = €180.000/40.000 = €4,50. CK p.e. = €60.000/48.000 = €1,25 → ISKP = €4,25. Transactieresultaat = 49.000 × (€4,50 − €4,25) = €12.250.',
    hints: ['Leid eerst de verkoopprijs af uit het break-evenpunt: prijs = totale te dekken kosten ÷ break-even afzet.', 'Transactieresultaat = verkopen × (prijs − ISKP).'],
  }),
  mc({
    id: 'x-2023-productie-plus', deel: 6, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.17', difficulty: 'gemiddeld',
    stam: 'Stel dat de werkelijke productie 1.000 hoger zou zijn geweest en alle overige gegevens gelijk blijven. T.o.v. de oorspronkelijke situatie zou het perioderesultaat:',
    context: DIVISIE_PRODUCT_CONTEXT,
    opties: [{ id: 'a', tekst: 'zijn gedaald' }, { id: 'b', tekst: 'niet zijn veranderd' }, { id: 'c', tekst: 'zijn gestegen' }],
    juistAntwoord: 'c',
    uitleg: 'Antwoord c. Meer productie verandert de ISKP en de verkopen niet → transactieresultaat gelijk. Het bezettingsresultaat stijgt (groter positief verschil werkelijk − normaal) → het perioderesultaat (transactie + bezetting) stijgt.',
    hints: ['Verandert het transactieresultaat door méér produceren (niet meer verkopen)?', 'Meer dan normaal produceren → hoger bezettingsresultaat.'],
  }),
  mc({
    id: 'x-2023-kwadrant-loon', deel: 6, bronCategorie: 'tentamen-2023', bronLabel: 'Tentamen 2023 vr.13', difficulty: 'lastig',
    stam: 'Juni met mei vergelijkend zijn de loonkosten:',
    context:
      FOODTRUCK_2023_CONTEXT +
      '\n\nKwadranten: II = direct+variabel, I = indirect+variabel, III = direct+constant, IV = indirect+constant.',
    opties: [
      { id: 'a', tekst: 'niet veranderd van kwadrant: ze horen thuis in kwadrant I' },
      { id: 'b', tekst: 'verschoven van kwadrant II naar kwadrant I' },
      { id: 'c', tekst: 'niet veranderd van kwadrant: ze horen thuis in kwadrant II' },
      { id: 'd', tekst: 'verschoven van kwadrant III naar kwadrant IV' },
    ],
    juistAntwoord: 'b',
    uitleg: 'Antwoord b. De loonkosten waren en blijven variabel (ze hangen samen met de verkopen), maar verschuiven van direct naar indirect: in juni zijn er twee productgroepen i.p.v. één, en door de indirecte bakplaatkosten in de winstbasis is het loon niet meer aan één productgroep toe te wijzen. Kwadrant II → I.',
    hints: ['Kwadrant II = direct+variabel, I = indirect+variabel.', 'Eén product → direct; twee door elkaar → indirect.'],
  }),
]
