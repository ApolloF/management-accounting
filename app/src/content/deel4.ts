import type { Deel } from '../types'

export const deel4: Deel = {
  nr: 4,
  titel: 'Besluitvorming & investeringsselectie',
  hoofdstukken: 'Hoofdstukken 9–10',
  kernthema:
    'Economische levensduur, interest vs. disconto, incidentele orders (different costs), terugverdienperiode, boekhoudkundige rentabiliteit en netto contante waarde.',
  theorie: [
    {
      titel: 'Economische levensduur van een machine',
      uitleg:
        'De **economische levensduur** is het gebruiksjaar waarin de gemiddelde **kosten per machine-uur** het láágst zijn. Bereken cumulatief per jaar:\n\n`Kosten per machine-uur = (cumulatieve waardedaling + cumulatieve complementaire kosten) ÷ cumulatief aantal machine-uren`\n\n- **Waardedaling** = aanschafwaarde − restwaarde aan het einde van dat jaar (cumulatief).\n- **Complementaire kosten** = bediening, onderhoud, brandstof, reparaties (cumulatief).\n\nHet jaar met de laagste kosten per machine-uur is de economische levensduur.\n\n**Restwaarde bij verkoop tegen boekwaarde:** als een machine aan het eind tegen boekwaarde wordt verkocht (geen boekwinst/-verlies), reken je terug: waarde machine-uren − complementaire kosten = component afschrijvingen; restwaarde = aanschafwaarde − cumulatieve afschrijvingen.',
      formules: [
        'Kosten/machine-uur = (cum. waardedaling + cum. complementaire kosten) ÷ cum. machine-uren',
        'Economische levensduur = jaar met de laagste kosten per machine-uur',
      ],
      voorbeelden: [
        {
          titel: 'Economische levensduur bepalen',
          casus:
            'Machine €200.000. Restwaarde eind jaar 1 €152.000, jaar 2 €112.000, jaar 3 €76.000, daarna −€19.000/jaar. Complementaire kosten jaar 1 €104.000, jaar 2 €104.000, jaar 3 €105.600, daarna stijgend. Machine-uren: 1.850 / 2.100 / 1.950 / 1.750 / ... Wat is de economische levensduur?',
          stappen: [
            't/m jaar 1: (€48.000 + €104.000)/1.850 = €82,16',
            't/m jaar 2: (€88.000 + €208.000)/3.950 = €74,94',
            't/m jaar 3: (€124.000 + €313.600)/5.900 = €74,17',
            't/m jaar 4: (€143.000 + €422.400)/7.650 = €73,91 ← laagste',
            't/m jaar 5: €75,37 — stijgt weer',
          ],
          antwoord: 'Economische levensduur = 4 jaar (laagste kosten per machine-uur: €73,91)',
        },
        {
          titel: 'Verkoopprijs machine = boekwaarde',
          casus:
            'Aanschaf €180.000, economische levensduur 6 jaar bij €35,00/machine-uur. Cumulatief 12.300 machine-uren, cumulatieve complementaire kosten €290.000. Verkoop eind jaar 6 tegen boekwaarde. Wat is de verkoopprijs?',
          stappen: [
            'Waarde machine-uren t/m jaar 6 = 12.300 × €35,00 = €430.500',
            'Af: cumulatieve complementaire kosten €290.000 → component afschrijvingen = €140.500',
            'Restwaarde (boekwaarde) = €180.000 − €140.500 = €39.500',
          ],
          antwoord: '€39.500',
        },
      ],
    },
    {
      titel: 'Interest vs. disconto; arbeidsproductiviteit',
      uitleg:
        '**Interest** = rente berekend over een geleend/uitgeleend bedrag om toekomstige betalingen vast te stellen. **Disconto** = het contant maken van toekomstige waarden (terugrekenen naar nu). Bij een gewone lening spreek je van interest, niet disconto — vanuit beide oogpunten (geldverstrekker én -ontvanger).\n\n**Arbeidsproductiviteit** = output ÷ ingezette werkeenheden (bv. geslaagde studenten per bestede uren). Een procentuele stijging van de productiviteit vergelijk je met de procentuele stijging van het uurloon om te zien of een maatregel per saldo gunstig is.',
    },
    {
      titel: 'Incidentele orders: different costs for different purposes',
      uitleg:
        'Voor een **eenmalige (incidentele) order** met voldoende vrije capaciteit geldt: accepteren zodra de verkoopprijs **boven de variabele kostprijs** ligt. De constante kosten zijn immers toch al gedekt → ze zijn niet relevant voor deze beslissing (*different costs for different purposes*).\n\n**Variabele kostprijs** = directe arbeids- + materiaalkosten per stuk + variabele seriekosten per stuk (seriekosten ÷ seriegrootte).',
      formules: [
        'Minimale prijs incidentele order = variabele kostprijs per stuk',
        'Variabele kostprijs = arbeid p.s. + materiaal p.s. + (seriekosten ÷ seriegrootte)',
      ],
      voorbeelden: [
        {
          titel: 'Minimale prijs incidentele order',
          casus:
            'IJsmachines: arbeid €144, materiaal €82, seriekosten €10.000 per serie van 200. Constante kosten €308.000. Voldoende capaciteit. Australische keten wil eenmalig 400 stuks. Boven welke prijs accepteren?',
          stappen: [
            'Variabele seriekosten p.s. = €10.000 ÷ 200 = €50',
            'Variabele kostprijs = €144 + €82 + €50 = €276',
            'Constante kosten zijn niet relevant (al gedekt door de normale productie)',
          ],
          antwoord: 'Boven €276 per ijsmachine accepteren',
        },
      ],
    },
    {
      titel: 'Investeringsselectie: TVP, rentabiliteit, NCW',
      uitleg:
        '**Boekhoudkundige terugverdienperiode (TVP):** hoe lang tot de investering is terugverdiend uit de nettogeldontvangsten. Let op: **afschrijvingskosten zijn géén uitgaven**, belastingen wél. Schuif je afschrijvingen naar achteren (bv. per stuk i.p.v. lineair), dan stijgt de winst — en belasting — in eerdere jaren → minder nettogeldontvangsten vroeg → langere TVP.\n\n**Gemiddelde boekhoudkundige rentabiliteit** = gemiddelde nettowinst ÷ gemiddeld geïnvesteerd vermogen. Gemiddeld geïnvesteerd vermogen ≈ (aanschafwaarde + restwaarde) ÷ 2. Een hogere restwaarde verhoogt de noemer → lagere rentabiliteit (bij gelijke winst).\n\n**Netto contante waarde (NCW):** alle toekomstige nettogeldontvangsten contant maken tegen de vermogenskostenvoet en optellen, minus de investering. Een extra gebruiksjaar met flinke nettogeldontvangsten levert meestal een hogere NCW op dan een eenmalige restwaarde aan het eind.',
      formules: [
        'Gem. boekhoudkundige rentabiliteit = gem. nettowinst ÷ gem. geïnvesteerd vermogen',
        'Gem. geïnvesteerd vermogen ≈ (aanschafwaarde + restwaarde) ÷ 2',
        'Nettogeldontvangst = nettowinst + afschrijving (afschrijving is geen uitgave)',
      ],
    },
  ],
  vragen: [
    {
      id: 'd4-economische-levensduur',
      deel: 4,
      type: 'mc',
      stam: 'Bepaal de economische levensduur van de machine.',
      context:
        'Aanschaf €200.000. Restwaarde eind jaar 1 €152.000, jaar 2 €112.000, jaar 3 €76.000, jaar 4 e.v. −€19.000/jaar. Complementaire kosten jaar 1 €104.000, jaar 2 €104.000, jaar 3 €105.600, daarna stijgend. Machine-uren: 1.850 / 2.100 / 1.950 / 1.750 / 1.600 / 1.500 / 1.400.',
      opties: [
        { id: 'a', tekst: '3 jaar' },
        { id: 'b', tekst: '4 jaar' },
        { id: 'c', tekst: '5 jaar' },
        { id: 'd', tekst: '6 jaar' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. De kosten per machine-uur dalen tot t/m jaar 4 (€73,91) en stijgen daarna weer (jaar 5 €75,37). Het minimum ligt bij jaar 4.',
      hints: [
        'Bereken per jaar cumulatief: (waardedaling + complementaire kosten) ÷ machine-uren.',
        'Waardedaling = aanschaf − restwaarde eind jaar. Zoek het laagste bedrag per machine-uur.',
        'De reeks daalt en stijgt weer; het keerpunt is de economische levensduur.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 49% goed',
      difficulty: 'lastig',
      scorePct: 49,
    },
    {
      id: 'd4-verkoopprijs-machine',
      deel: 4,
      type: 'mc',
      stam: 'Machine €180.000, economische levensduur 6 jaar bij €35,00/machine-uur. Cumulatief 12.300 machine-uren; cumulatieve complementaire kosten €290.000. Verkoop eind jaar 6 tegen boekwaarde. Verkoopprijs?',
      opties: [
        { id: 'a', tekst: '€39.500' },
        { id: 'b', tekst: '€70.500' },
        { id: 'c', tekst: '€110.000' },
        { id: 'd', tekst: '€140.500' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Waarde machine-uren = 12.300 × €35,00 = €430.500. Af: complementaire kosten €290.000 → afschrijvingscomponent €140.500. Boekwaarde = €180.000 − €140.500 = €39.500.',
      hints: [
        'Kosten per machine-uur × uren = totale kosten die door de uren zijn gedekt.',
        'Trek de complementaire kosten eraf om de afschrijvingen te vinden.',
        'Restwaarde = aanschaf − cumulatieve afschrijvingen.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.7',
      difficulty: 'lastig',
    },
    {
      id: 'd4-incidentele-order',
      deel: 4,
      type: 'mc',
      stam: 'IJsmachines: arbeid €144, materiaal €82 (beide proportioneel variabel), seriekosten €10.000 per serie van 200 (trapsgewijs variabel), constante kosten €308.000. Voldoende capaciteit. Boven welke prijs een eenmalige order van 400 stuks accepteren?',
      opties: [
        { id: 'a', tekst: '€226' },
        { id: 'b', tekst: '€276' },
        { id: 'c', tekst: '€346' },
        { id: 'd', tekst: '€353' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. Bij een incidentele order met vrije capaciteit: accepteren zodra de prijs > variabele kostprijs. Variabele kostprijs = €144 + €82 + €10.000/200 = €276. Constante kosten zijn niet relevant.',
      hints: [
        'Welke kosten zijn relevant bij een eenmalige order met vrije capaciteit?',
        'Alleen de variabele kostprijs telt — inclusief de variabele seriekosten per stuk.',
        'Seriekosten per stuk = €10.000 ÷ 200.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.25',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd4-arbeidsproductiviteit',
      deel: 4,
      type: 'mc',
      stam: 'Docent Winters: 300 geslaagden in 100 uur, €75/uur. Boomsma: 200 geslaagden in 100 uur, €60/uur. Winters gaat beide groepen doen in 125 uur (Boomsma ontslagen); totale besparing €1.000. T.o.v. de uitgangssituatie is:',
      opties: [
        { id: 'a', tekst: 'de procentuele stijging van de arbeidsproductiviteit van Winters lager dan die van zijn uurloon' },
        { id: 'b', tekst: 'de procentuele stijging van de arbeidsproductiviteit gelijk aan die van zijn uurloon' },
        { id: 'c', tekst: 'de procentuele stijging van de arbeidsproductiviteit hoger dan die van zijn uurloon' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. Uitgangskosten = €75×100 + €60×100 = €13.500; nieuw = €12.500. Bij 125 uur Winters = €100/uur → +33,3%. Productiviteit Winters: was 300/100 = 3, wordt 500/125 = 4 → +33,3%. Beide stijgen 33,3%.',
      hints: [
        'Bereken het nieuwe uurloon van Winters uit de totale besparing (€13.500 − €1.000) en 125 uur.',
        'Arbeidsproductiviteit = geslaagden ÷ uren. Was 3, wordt 500/125.',
        'Vergelijk beide procentuele stijgingen.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.6',
      difficulty: 'lastig',
    },
    {
      id: 'd4-interest-disconto',
      deel: 4,
      type: 'mc',
      stam: 'Aristoteles spreekt over een vergoeding voor het lenen van geld (rente over het geleende bedrag). Die rente kan worden aangeduid als:',
      opties: [
        { id: 'a', tekst: 'interest (geldverstrekker) en interest (geldontvanger)' },
        { id: 'b', tekst: 'interest (geldverstrekker) en disconto (geldontvanger)' },
        { id: 'c', tekst: 'disconto (geldverstrekker) en interest (geldontvanger)' },
        { id: 'd', tekst: 'disconto (geldverstrekker) en disconto (geldontvanger)' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Bij leningen wordt rente over het geleende bedrag berekend = interest, vanuit beide oogpunten. Disconteren is het contant maken van toekomstige waarden — daarvan is hier geen sprake.',
      hints: [
        'Interest = rente over een bedrag. Disconto = toekomstige waarde contant maken.',
        'Hier is sprake van een lening, niet van terugrekenen naar nu.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.8',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd4-rentabiliteit',
      deel: 4,
      type: 'mc',
      stam: 'Nieuw scenario: restwaarde €6.000 → €12.000, plus onderhoudskosten €1.200/jaar (= even hoog als de minder-afschrijving). Overige uitgangspunten gelijk. T.o.v. de uitgangssituatie wordt de gemiddelde boekhoudkundige rentabiliteit:',
      opties: [
        { id: 'a', tekst: 'hoger' },
        { id: 'b', tekst: 'niet veranderen' },
        { id: 'c', tekst: 'lager' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. De nettowinst verandert niet (minder afschrijving = even veel extra onderhoud). Maar de hogere restwaarde verhoogt het gemiddeld geïnvesteerd vermogen ((aanschaf + restwaarde)/2). Grotere noemer bij gelijke teller → lagere rentabiliteit.',
      hints: [
        'Verandert de nettowinst? (minder afschrijving vs. meer onderhoud)',
        'Gemiddeld geïnvesteerd vermogen ≈ (aanschaf + restwaarde)/2 — wat doet de hogere restwaarde?',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.23',
      difficulty: 'lastig',
    },
    {
      id: 'd4-tvp',
      deel: 4,
      type: 'mc',
      stam: 'TVP1 = boekhoudkundige terugverdienperiode bij lineaire afschrijving. TVP2 = bij afschrijving per stuk (oplopend in de tijd, totaal gelijk). Mandy constateert dat:',
      opties: [
        { id: 'a', tekst: 'TVP2 korter is dan TVP1' },
        { id: 'b', tekst: 'TVP2 gelijk is aan TVP1' },
        { id: 'c', tekst: 'TVP2 langer is dan TVP1' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Bij afschrijving per stuk zijn de afschrijvingskosten in eerdere jaren lager (de omzet/productie groeit). Lagere afschrijving → hogere winst → meer winstbelasting in die jaren → lagere nettogeldontvangsten vroeg. Daardoor duurt het langer voor de investering is terugverdiend.',
      hints: [
        'Afschrijving is geen uitgave, maar beïnvloedt wel de winst en dus de belasting (een uitgave).',
        'Per stuk afschrijven schuift afschrijving naar later → vroeg meer winst → vroeg meer belasting.',
        'Meer belasting vroeg = minder nettogeldontvangsten vroeg = langere TVP.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.24',
      difficulty: 'berucht',
    },
    {
      id: 'd4-ncw',
      deel: 4,
      type: 'mc',
      stam: 'Machine €360.000, 5 jaar lineair, restwaarde 1/6 van aanschaf. Jansen overweegt een 6e gebruiksjaar (restwaarde dan nul; omzet jaar 6 = jaar 5). Vermogenskostenvoet 20%. NCW1 (5 jaar) vs. NCW2 (6 jaar):',
      opties: [
        { id: 'a', tekst: 'NCW2 lager dan NCW1' },
        { id: 'b', tekst: 'NCW2 gelijk aan NCW1' },
        { id: 'c', tekst: 'NCW2 hoger dan NCW1' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. De nettogeldontvangsten in jaar 6 zijn ca. €135.000 (afschrijving is geen uitgave, belasting wel; geen restwaarde meer). Reken je dat één jaar terug (÷1,20) naar het eind van jaar 5, dan is dat veel hoger dan de restwaarde van €60.000 die in scenario 1 op datzelfde moment vrijkomt. NCW2 is dus duidelijk hoger.',
      hints: [
        'Waarin verschillen de twee scenario’s precies? (extra jaar ontvangsten vs. restwaarde eind jaar 5)',
        'Bereken de nettogeldontvangst van jaar 6 en maak die contant naar eind jaar 5.',
        'Vergelijk dat met de €60.000 restwaarde uit scenario 1.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.26',
      difficulty: 'berucht',
    },
    {
      id: 'd4-desinvesteren',
      deel: 4,
      type: 'mc',
      stam: 'Gastdocent Van de Leur adviseerde de studentes Hilda en Jeanne te desinvesteren (stoppen met hun bedrijf). Wat verkochten de dames?',
      opties: [
        { id: 'a', tekst: 'dozen met mini-vlaaien' },
        { id: 'b', tekst: 'zakken met fruit' },
        { id: 'c', tekst: 'cosmetica-artikelen' },
        { id: 'd', tekst: 'zelfgemaakte sieraden' },
      ],
      juistAntwoord: 'b',
      uitleg: 'Antwoord b. Zakken met fruit (zie het gastcollege van Van de Leur).',
      hints: ['Dit is een weetje uit het gastcollege — geen berekening.'],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.27',
      difficulty: 'gemiddeld',
    },
  ],
}
