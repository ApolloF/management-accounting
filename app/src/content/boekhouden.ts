import type { Deel, Vraag } from '../types'

// ============================================================================
// OPEN VRAGEN — FABRICAGEBOEKHOUDING (het 40-punten gedeelte van het tentamen)
// Gebaseerd op de officiële formatieve toets "Opgave Fabricageboekhouding"
// (aquarium-casus, versie 1) inclusief de officiële uitwerking, plus een
// zelfgemaakte variant-casus (vogelhuisjes) om koud mee te oefenen.
// ============================================================================

// ---------- Casus 1: aquaria (officiële formatieve toets) ----------

const AQUARIUM_CASUS =
  'CASUS — FABRICAGE VAN AQUARIA (eerste kwartaal 2024). Je voert een fabricageboekhouding waarin het onderscheid tussen werkelijke en standaardkosten tot uitdrukking komt. De saldi in de rubrieken 4, 5, 6, 8 en 9 houd je in stand wanneer gegevens worden overgeboekt (je crediteert dus niet de kostenrekeningen in rubriek 4 zelf, maar gebruikt de overboekingsrekening 499).\n' +
  '\n' +
  'STANDAARDKOSTPRIJS-GEGEVENS per aquarium: 2,30 m² glas à €40,00; 1,35 uur directe arbeid à €80,00. Standaard toeslagen indirecte fabricagekosten: 25% op directe materiaalkosten, 25% op directe personeelskosten en 30% op de totale directe fabricagekosten. Verkoopprijs €380,00 excl. 21% OB. Indirecte verkoopkosten worden toegerekend met een standaardtoeslag van 10% van de verkoopprijs (excl. OB).\n' +
  '\n' +
  'WERKELIJK eerste kwartaal: materiaalverbruik 312 m² à €41,50 = €12.948; directe arbeid 155 uur à €82,00 = €12.710. Gereedgekomen: 120 aquaria. Gefactureerd en afgeleverd: 125 aquaria.\n' +
  'Onderhanden werk 1 januari (tegen standaard): 11,50 m² à €40 = €460 en 6,75 uur à €80 = €540 (plus de bijbehorende indirecte toeslag).\n' +
  'Onderhanden werk 31 maart (tegen standaard): 16,10 m² à €40 = €644 en 9,45 uur à €80 = €756 (plus de bijbehorende indirecte toeslag).\n' +
  'Werkelijke indirecte fabricagekosten: €12.579. Werkelijke indirecte verkoopkosten: €6.317.\n' +
  '\n' +
  'OORSPRONKELIJKE SALDIBALANS (relevante saldi): 042 Eigen vermogen €57.518 C · 120 ING bank €1.253 D · 150 Debiteuren €3.675 D · 180 Te vorderen OB €1.117 D · 181 Te betalen OB €1.563 C · 300 Voorraad glas €760 D · 420 Kosten glas €12.948 D · 440 Directe personeelskosten €12.710 D · 445 Indirecte personeelskosten €12.786 D · 460 Huurkosten €6.234 D · 480 Reclame en advertenties €2.478 D · 490 Overige kosten €810 D · 499 Overboekingsrekening €29.070 C · 600 Verbruik glas €12.948 D · 601 Directe personeelskosten €12.710 D · 700 Voorraad gereed product €3.100 D · 710 Voorraad goederen in bewerking €1.550 D · 810 Directe verkoopkosten €3.412 D · 990 Incidentele resultaten €340 C. Totaal €88.491.\n' +
  '\n' +
  'Standaardfabricagekostprijs per aquarium (uitkomst van onderdeel I): €310.'

// ---------- Casus 2: vogelhuisjes (zelfgemaakte oefenvariant) ----------

const VOGELHUIS_CASUS =
  'OEFENCASUS (variant) — FABRICAGE VAN HOUTEN VOGELHUISJES (tweede kwartaal 2024). Zelfde systeem als de officiële opgave: werkelijke vs. standaardkosten in de boekhouding; saldi in rubriek 4, 5, 6, 8 en 9 in stand houden (overboeken via de …99-rekeningen).\n' +
  '\n' +
  'STANDAARDKOSTPRIJS-GEGEVENS per vogelhuisje: 1,50 m² hout à €20,00; 0,50 uur directe arbeid à €60,00. Standaard toeslagen indirecte fabricagekosten: 20% op directe materiaalkosten, 20% op directe personeelskosten en 25% op de totale directe fabricagekosten. Verkoopprijs €150,00 excl. 21% OB. Indirecte verkoopkosten: standaardtoeslag van 8% van de verkoopprijs (excl. OB).\n' +
  '\n' +
  'WERKELIJK tweede kwartaal: materiaalverbruik 320 m² à €21,00 = €6.720; directe arbeid 105 uur à €62,00 = €6.510. Gereedgekomen: 200 vogelhuisjes. Gefactureerd en afgeleverd: 200 vogelhuisjes.\n' +
  'Onderhanden werk 1 april (tegen standaard): 10 m² à €20 = €200 en 4 uur à €60 = €240 (plus de bijbehorende indirecte toeslag).\n' +
  'Onderhanden werk 30 juni (tegen standaard): 16 m² à €20 = €320 en 6 uur à €60 = €360 (plus de bijbehorende indirecte toeslag).\n' +
  'Werkelijke indirecte fabricagekosten: €3.800. Werkelijke indirecte verkoopkosten: €2.350.\n' +
  '\n' +
  'SALDIBALANS (relevante saldi): 600 Verbruik hout €6.720 D · 601 Directe personeelskosten €6.510 D · 700 Voorraad gereed product €1.740 D · 710 Voorraad goederen in bewerking €638 D · 810 Directe verkoopkosten €9.800 D · 990 Incidentele resultaten €150 C · 499 Overboekingsrekening €23.030 C.\n' +
  '\n' +
  'Standaardfabricagekostprijs per vogelhuisje (uitkomst van onderdeel I): €87.'

// ---------- Casus 3: Mustang Hoofcare (ECHTE open opgave tentamen 11-6-2026) ----------

const MHC_CASUS =
  'CASUS — MUSTANG HOOFCARE (MHC), open opgave tentamen 11 juni 2026. U helpt uw oom met de administratie van MHC (gestart 1 januari, fabricage en verkoop van hoefijzers) en bepaalt het rendement over het eerste kwartaal. Alle werkelijk gemaakte kosten worden eerst in rubriek 4 per kostensoort geregistreerd. Grondstof- en personeelskosten zijn DIRECTE, de huurkosten INDIRECTE fabricagekosten. Verkoopkosten en onderhanden werk blijven buiten beschouwing.\n' +
  '\n' +
  'INTEGRALESTANDAARDKOSTPRIJS per hoefijzer (Q × P): grondstoffen 1,5 kg × €0,50 = €0,75; arbeid 0,040 uur × €30,00 = €1,20; toeslag indirecte kosten 0,040 uur × €12,50 = €0,50. Integralestandaardkostprijs = €2,45 per hoefijzer.\n' +
  '\n' +
  'GEREEDGEKOMEN (gefabriceerde) hoefijzers 1e kwartaal: 80.000 stuks.\n' +
  '\n' +
  'WERKELIJKE DIRECTE FABRICAGEKOSTEN 1e kwartaal: grondstof — 1,6 kg/hoefijzer, totaal 128.000 kg à €0,48 = €61.440. Arbeid — 0,038 uur/hoefijzer, totaal 3.040 uur à €32,00 = €97.280.\n' +
  '\n' +
  'VERKOOP: gefactureerd en afgeleverd 75.000 stuks; verkoopprijs €2,60 excl. 21% OB.\n' +
  '\n' +
  'REKENINGSCHEMA / OORSPRONKELIJKE SALDIBALANS (debet/credit): 040 Eigen vermogen €168.500 C · 110 Bank €83.500 C · 150 Debiteuren · 180 Te vorderen OB €19.750 D · 181 Te betalen OB · 190 Te betalen winstbelasting · 300 Voorraad grondstoffen €35.000 D · 410 Grondstofkosten €61.440 D · 430 Personeelskosten €97.280 D · 435 Huurkosten €37.390 D · 499 Overboekingsrekening · 560 Indirecte fabricagekosten · 565 Opslag indirecte fabricagekosten · 599 Overboekingsrekening · 600 Verbruik grondstoffen · 601 Directe personeelskosten · 602 Toeslag indirecte fabricagekosten · 610 Standaard verbruik grondstoffen · 611 Standaard directe personeelskosten · 612 Standaard toeslag indir.fab.ko’n · 699 Overboekingsrekening · 700 Voorraad gereed product · 800 Fabricagekostprijs verkopen · 840 Opbrengst verkopen · 899 Overboekingsrekening · 950 Resultaat indirecte kosten · 960 Fabricageresultaat · 980 Verkoopresultaat · 995 Interestkosten €1.140 D · 999 Overboekingsrekening. Totaal €252.000 = €252.000.\n' +
  '\n' +
  'LET OP: dit schema wijkt af van de formatieve-toetsopgave (hier o.a. 840 = Opbrengst verkopen, 950 = Resultaat indirecte kosten, 960 = Fabricageresultaat, 980 = Verkoopresultaat). Werk altijd met het schema op de opgave; de systematiek is dezelfde.'

// Helper voor open vragen.
const open = (q: Omit<Vraag, 'type' | 'bron' | 'deel'>): Vraag => ({
  ...q,
  type: 'open',
  bron: 'pdf',
  deel: 8,
})

export const boekhouden: Deel = {
  nr: 8,
  titel: 'Open vragen — Fabricageboekhouding',
  hoofdstukken: 'Schriftelijk tentamendeel (30% / 40 punten)',
  kernthema:
    'Journaalposten en de kolommenbalans: debet/credit, het rubriekenstelsel, de vaste route a1–c4 en resultaatbepaling — precies zoals op het tentamen.',
  theorie: [
    {
      titel: 'Zo werkt het open gedeelte op het tentamen',
      uitleg:
        'Naast de MC-vragen (70%) bevat het tentamen een **schriftelijke opgave over de fabricageboekhouding** (30%). De puntenverdeling van de officiële oefenopgave:\n- **I. Kostprijsberekening** — 2 punten\n- **II. Journaalposten** (a1 t/m c4) — 26 punten\n- **III. Kolommenbalans** — 12 punten\n\n**Vormvereisten (puntenaftrek als je ze negeert!):**\n- Vermeld bij het journaliseren altijd **rekeningnummer én rekeningnaam**.\n- Zet het voorvoegsel **"Aan"** vóór elke creditboeking.\n- Laat bij de resultaatbepalingen (c1–c4) de **gedetailleerde berekening** van het saldo zien aan de hand van de rekeningen (nummer + bedrag) en vermeld expliciet of het saldo **voordelig of nadelig** is.\n- In de kolommenbalans vermeld je bij elke journaalpost de bijbehorende **letter** (a1, b3, …) in de kolom "nr".\n- Je mag de voorgeschreven literatuur (het boek) gebruiken tijdens dit onderdeel.\n\n> ⚠️ De **rekeningnummers en -namen kunnen per tentamen verschillen** (zo was in 2025 rekening 980 het verkoopresultaat en 950 de incidentele resultaten, terwijl in de oefenopgave 950 het verkoopresultaat is en 990 de incidentele resultaten). Werk dus altijd met het rekeningschema dat op de opgave staat — de **systematiek** is steeds dezelfde.',
    },
    {
      titel: 'Debet en credit: de basis',
      uitleg:
        'Elke journaalpost bestaat uit één of meer **debet**-boekingen en één of meer **credit**-boekingen ("Aan …"), en het totaal debet is altijd gelijk aan het totaal credit.\n\n**Wanneer debiteer/crediteer je een rekening?**\n- **Bezittingen (activa)** — debiteren bij toename, crediteren bij afname. Voorbeelden: 120 Bank, 150 Debiteuren, 300 Voorraad grondstoffen, 700 Voorraad gereed product, 710 Goederen in bewerking, 180 Te vorderen OB.\n- **Schulden en eigen vermogen (passiva)** — crediteren bij toename, debiteren bij afname. Voorbeelden: 042 Eigen vermogen, 181 Te betalen OB.\n- **Kosten** — debiteren wanneer ze ontstaan (kostenrekeningen hebben een debetsaldo).\n- **Opbrengsten** — crediteren wanneer ze ontstaan (850 Opbrengst verkopen heeft een creditsaldo).\n\n**Notatie op het tentamen** — debetboeking(en) eerst, daaronder de creditboeking(en) met "Aan":\n\n`610 Standaard verbruik glas      € 460`\n`611 Standaard directe personeelskosten  € 540`\n`612 Standaard toeslag indirecte fabricageko’n € 550`\n`   Aan 710 Voorraad goederen in bewerking   € 1.550`\n\n**Saldo bepalen:** het saldo van een rekening = totaal debet − totaal credit. Is de uitkomst positief, dan is het een debetsaldo; negatief = creditsaldo. Bij resultaatrekeningen geldt: **creditsaldo = voordelig** (opbrengst groter dan kosten), **debetsaldo = nadelig**.',
      formules: [
        'Totaal debet = totaal credit (elke journaalpost)',
        'Bezit ↑ = debet · Schuld/EV ↑ = credit · Kosten = debet · Opbrengsten = credit',
        'Creditsaldo op een resultaatrekening = voordelig; debetsaldo = nadelig',
      ],
    },
    {
      titel: 'Het rekeningschema en de rubrieken',
      uitleg:
        'De fabricageboekhouding gebruikt een **decimaal rekeningstelsel**: het eerste cijfer van het rekeningnummer is de rubriek.\n- **Rubriek 0** — eigen vermogen (042 Eigen vermogen).\n- **Rubriek 1** — liquide middelen en vorderingen/kortlopende schulden: 120 Bank, 150 Debiteuren, 180 Te vorderen OB, 181 Te betalen OB.\n- **Rubriek 3** — voorraad grondstoffen (300 Voorraad glas).\n- **Rubriek 4** — **alle werkelijke kosten naar soort**: 420 Kosten glas, 440 Directe personeelskosten, 445 Indirecte personeelskosten, 460 Huur, 480 Reclame, 490 Overige kosten. Hier worden alle kosten éérst vastgelegd.\n- **Rubriek 5** — indirecte kosten en hun opslagen: 520 Indirecte fabricagekosten (werkelijk) vs. 525 Opslag indirecte fabricagekosten (standaard, doorberekend); 540 Indirecte verkoopkosten (werkelijk) vs. 545 Opslag indirecte verkoopkosten (standaard).\n- **Rubriek 6** — de fabricage: **werkelijke** kosten op 600 Verbruik glas, 601 Directe personeelskosten, 602 Toeslag indirecte fabricagekosten; **standaard**kosten op 610/611/612 (standaard verbruik, standaard personeelskosten, standaard toeslag).\n- **Rubriek 7** — voorraden gereed product en onderhanden werk: 700, 710 (gewaardeerd tegen standaardkostprijs).\n- **Rubriek 8** — de verkoop: 800 Fabricagekostprijs verkopen, 810 Directe verkoopkosten, 815 Toeslag indirecte verkoopkosten, 850 Opbrengst verkopen.\n- **Rubriek 9** — de resultaten: 910 Resultaat indirecte kosten, 930 Fabricageresultaat, 950 Verkoopresultaat, 990 Incidentele resultaten.\n\n**Overboekingsrekeningen (…99: 499, 599, 699, 899, 999).** Omdat je de saldi van de rubrieken 4, 5, 6, 8 en 9 **in stand wilt houden** (voor analyse), boek je bedragen niet wég van die rekeningen, maar via de overboekingsrekening van de rubriek. Wil je bv. werkelijke indirecte fabricagekosten "verplaatsen" van rubriek 4 naar rubriek 5, dan debiteer je 520 en crediteer je **499** (de kostenrekeningen in rubriek 4 blijven onaangetast).\n\n**Rekening 699** verzamelt zo het verschil tussen werkelijke fabricagekosten (600/601/602) en standaardkosten (610/611/612) = het verschil tussen **ex-post gebudgetteerde (standaard) kosten en werkelijke kosten**.',
      formules: [
        'Rubriek = eerste cijfer rekeningnummer · …99 = overboekingsrekening van die rubriek',
        'Saldi rubriek 4/5/6/8/9 in stand houden → tegenboeking altijd op de …99-rekening',
        'Saldo 699 = standaard (ex-post) kosten − werkelijke kosten',
      ],
    },
    {
      titel: 'Onderdeel I — de standaardkostprijs',
      uitleg:
        'De opgave begint met de **standaardfabricagekostprijs** per product: directe materiaalkosten + directe personeelskosten + de standaardtoeslagen voor indirecte fabricagekosten. Let op: de toeslag indirecte **verkoop**kosten hoort **niet** in de fabricagekostprijs (die komt pas in rubriek 8 aan bod).',
      formules: [
        'Standaardfabricagekostprijs = standaard materiaal + standaard arbeid + toeslagen indirecte fabricagekosten',
      ],
      voorbeelden: [
        {
          titel: 'Standaardkostprijs aquarium (officiële uitwerking)',
          casus:
            'Per aquarium: 2,30 m² glas à €40; 1,35 uur arbeid à €80. Toeslagen: 25% op materiaal, 25% op personeel, 30% op totale directe fabricagekosten.',
          stappen: [
            'Materialen: 2,30 × €40 = €92',
            'Arbeid: 1,35 × €80 = €108 → totale directe fabricagekosten €200',
            'Toeslag 25% op materiaal: 0,25 × €92 = €23',
            'Toeslag 25% op personeel: 0,25 × €108 = €27',
            'Toeslag 30% op totale directe fabricagekosten: 0,30 × €200 = €60',
          ],
          antwoord: 'Standaardfabricagekostprijs = 92 + 108 + 23 + 27 + 60 = €310',
        },
      ],
    },
    {
      titel: 'Onderdeel II — de vaste route: a1–a5 (fabricage)',
      uitleg:
        'De journaalposten volgen elk tentamen dezelfde route. Eerst de **fabricagekant** (rubriek 6/7):\n\n**a1 — Beginvoorraad onderhanden werk de fabricage "in".** Het onderhanden werk per 1 januari (gewaardeerd tegen standaard) breng je van de balans (710) naar de standaardrekeningen:\n610/611/612 debet, **Aan 710**. De toeslag (612) bereken je met de standaard toeslagpercentages over de standaard materiaal- en arbeidsbedragen.\n\n**a2 — Werkelijke indirecte fabricagekosten naar rubriek 5.** 520 Indirecte fabricagekosten debet, **Aan 499** (rubriek 4 blijft in stand!).\n\n**a3 — Toerekening (opslag) indirecte fabricagekosten.** De standaardtoeslag over de **werkelijke** directe kosten: 602 Toeslag indirecte fabricagekosten debet, **Aan 525** Opslag indirecte fabricagekosten.\n\n**a4 — Gereedgekomen producten.** Aantal gereed × standaardkostprijs naar de voorraad: 700 debet, **Aan 610/611/612** (elk: aantal × standaardcomponent).\n\n**a5 — Eindvoorraad onderhanden werk.** Het onderhanden werk per einde periode (tegen standaard, inclusief toeslag) van de fabricage terug naar de balans: 710 debet, **Aan 610/611/612**.',
      voorbeelden: [
        {
          titel: 'a1 t/m a5 voor de aquarium-casus (officiële uitwerking)',
          casus:
            'OHW 1/1: €460 glas + €540 arbeid. Werkelijke indirecte fabricagekosten €12.579. Werkelijk direct: €12.948 glas + €12.710 arbeid. 120 stuks gereed (standaardkostprijs €310 = 92+108+110). OHW 31/3: €644 glas + €756 arbeid.',
          stappen: [
            'a1: toeslag = 25%×460 + 25%×540 + 30%×(460+540) = 115 + 135 + 300 = €550. → 610 €460, 611 €540, 612 €550 / Aan 710 €1.550',
            'a2: 520 Indirecte fabricagekosten €12.579 / Aan 499 Overboekingsrekening €12.579',
            'a3: toeslag = 25%×12.948 + 25%×12.710 + 30%×(12.948+12.710) = 3.237 + 3.177,50 + 7.697,40 = €14.111,90. → 602 €14.111,90 / Aan 525 €14.111,90',
            'a4: 120 stuks → 610: 120×92 = €11.040; 611: 120×108 = €12.960; 612: 120×110 = €13.200. → 700 Voorraad gereed product €37.200 / Aan 610 €11.040, Aan 611 €12.960, Aan 612 €13.200',
            'a5: toeslag = 25%×644 + 25%×756 + 30%×(644+756) = 161 + 189 + 420 = €770. → 710 €2.170 / Aan 610 €644, Aan 611 €756, Aan 612 €770',
          ],
          antwoord: 'Let op de richting: a1 brengt OHW de fabricage in (Aan 710), a5 haalt het er weer uit (710 debet).',
        },
      ],
    },
    {
      titel: 'Onderdeel II — b1–b3 (verkoop) en c1–c4 (resultaten)',
      uitleg:
        '**b1 — De verkopen.** Twee boekingen tegelijk:\n1. Facturatie: 150 Debiteuren debet (incl. OB), **Aan 181 Te betalen OB** (21% van de omzet), **Aan 850 Opbrengst verkopen** (omzet excl. OB).\n2. Uitlevering tegen standaardkostprijs: 800 Fabricagekostprijs verkopen debet (verkochte aantallen × standaardkostprijs), **Aan 700 Voorraad gereed product**.\n\n**b2 — Werkelijke indirecte verkoopkosten naar rubriek 5.** 540 debet, **Aan 499**.\n\n**b3 — Toerekening (opslag) indirecte verkoopkosten.** Standaardtoeslag (bv. 10% van de omzet excl. OB): 815 Toeslag indirecte verkoopkosten debet, **Aan 545 Opslag indirecte verkoopkosten**.\n\nDan de **resultaten** (rubriek 9). Algemene regel: bereken het saldo van de betreffende rubriek, en boek een **voordelig (credit) saldo** weg door de **overboekingsrekening te debiteren** en de resultatenrekening in rubriek 9 te **crediteren** — bij een nadelig saldo precies andersom. Vermeld altijd voordelig/nadelig!\n\n**c1 — Verkoopresultaat** (rubriek 8): 850 − 800 − 810 − 815. Voordelig → 899 debet, Aan 950 Verkoopresultaat.\n**c2 — Fabricageresultaat** (rubriek 6): standaard (610+611+612, creditsaldi) − werkelijk (600+601+602, debetsaldi). Nadelig → 930 Fabricageresultaat debet, Aan 699.\n**c3 — Resultaat indirecte kosten** (rubriek 5): (525 − 520) + (545 − 540). Nadelig → 910 debet, Aan 599; voordelig → 599 debet, Aan 910.\n**c4 — Winst/verlies naar het eigen vermogen.** Tel álle resultaten in rubriek 9 op (inclusief 990 Incidentele resultaten uit de saldibalans!). Winst → 999 debet, Aan 042 Eigen vermogen. Verlies → 042 debet, Aan 999.',
      formules: [
        'Voordelig (credit)saldo wegboeken: …99 debet / Aan resultatenrekening rubriek 9',
        'Nadelig (debet)saldo wegboeken: resultatenrekening rubriek 9 debet / Aan …99',
        'c4: álle resultaten meenemen, ook 990 Incidentele resultaten uit de saldibalans',
      ],
      voorbeelden: [
        {
          titel: 'b1 t/m c4 voor de aquarium-casus (officiële uitwerking)',
          casus:
            '125 aquaria verkocht à €380 excl. 21% OB; standaardkostprijs €310. Werkelijke indirecte verkoopkosten €6.317; toeslag 10% van de omzet. Saldibalans: 810 Directe verkoopkosten €3.412 D; 990 Incidentele resultaten €340 C.',
          stappen: [
            'b1: omzet = 125×€380 = €47.500; OB = 21% = €9.975. → 150 Debiteuren €57.475 / Aan 181 €9.975, Aan 850 €47.500. Én: 800 Fabricagekostprijs verkopen 125×€310 = €38.750 / Aan 700 €38.750',
            'b2: 540 Indirecte verkoopkosten €6.317 / Aan 499 €6.317',
            'b3: 10% × €47.500 = €4.750. → 815 €4.750 / Aan 545 €4.750',
            'c1 (rubriek 8): 850 €47.500 C − 800 €38.750 D − 810 €3.412 D − 815 €4.750 D = €588 voordelig. → 899 €588 / Aan 950 Verkoopresultaat €588',
            'c2 (rubriek 6): standaard credit = 610 (11.040+644−460=11.224) + 611 (12.960+756−540=13.176) + 612 (13.200+770−550=13.420) = €37.820. Werkelijk debet = 12.948 + 12.710 + 14.111,90 = €39.769,90. Saldo = €1.949,90 nadelig. → 930 Fabricageresultaat €1.949,90 / Aan 699 €1.949,90',
            'c3 (rubriek 5): (525 €14.111,90 − 520 €12.579) + (545 €4.750 − 540 €6.317) = +€1.532,90 − €1.567 = €34,10 nadelig. → 910 Resultaat indirecte kosten €34,10 / Aan 599 €34,10',
            'c4: +€588 (verkoop) − €1.949,90 (fabricage) − €34,10 (indirect) + €340 (incidenteel, creditsaldo saldibalans) = €1.056 VERLIES. → 042 Eigen vermogen €1.056 / Aan 999 €1.056',
          ],
          antwoord: 'Eindcontrole: totaal journaalposten debet = credit = €178.530,90.',
        },
      ],
    },
    {
      titel: 'Onderdeel III — de kolommenbalans',
      uitleg:
        'De kolommenbalans is een groot schema met **vijf kolomparen** (steeds debet | credit):\n1. **Oorspronkelijke saldibalans** — de beginstand (gegeven op het invulformulier).\n2. **Voorafgaande journaalposten** — hier verwerk je al je journaalposten a1 t/m c4, met de **letter** in de kolom "nr". Op één rekening kunnen meerdere boekingen staan (de opgave reserveert daar extra ruimte voor — dat is een hint!).\n3. **Gewijzigde saldibalans** — per rekening: oorspronkelijk saldo + journaalposten, gesaldeerd naar één bedrag (debet óf credit).\n4. **Resultatenrekening** — alle kosten-, opbrengst- en resultaatrekeningen (rubriek 4, 5, 6, 8, 9 en de …99-rekeningen).\n5. **Balans** — alle bezittingen, schulden en het eigen vermogen (rubriek 0, 1, 3, 7).\n\n**Werkwijze:**\n- Verwerk de journaalposten rekening voor rekening; zet de letter erbij.\n- Saldeer naar de gewijzigde saldibalans en **tel alle kolommen op** — debet- en credittotalen moeten gelijk zijn (aquarium-casus: journaalposten €178.530,90; gewijzigde saldibalans €224.115,90; resultatenrekening €156.115,90; balans €68.000).\n- Verdeel elke regel daarna over resultatenrekening óf balans (nooit beide).\n- Doordat je via c4 de winst/het verlies al naar het eigen vermogen hebt geboekt, **sluiten resultatenrekening en balans allebei vanzelf** — gelijke totalen zijn je eindcontrole.\n\n> 💡 Door het in-stand-houden van de rubrieksaldi staan rekeningen als 600 én 610 met hun volle bedragen op de resultatenrekening; samen met de …99-rekeningen valt dat tegen elkaar weg. Laat je niet afschrikken door de grote totalen.',
    },
  ],
  vragen: [
    // ======================= I. KOSTPRIJS =======================
    open({
      id: 'bh-v1-kostprijs',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave I',
      difficulty: 'gemiddeld',
      stam: 'I. Bereken de standaardfabricagekostprijs van een aquarium. Laat alle componenten zien.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '€310 (92 + 108 + 23 + 27 + 60)',
      uitleg:
        'Materialen: 2,30 m² × €40 = €92. Arbeid: 1,35 uur × €80 = €108. Totale directe fabricagekosten = €200.\nToeslagen: 25% × €92 = €23; 25% × €108 = €27; 30% × €200 = €60.\nStandaardfabricagekostprijs = 92 + 108 + 23 + 27 + 60 = €310.\nLet op: de 10%-toeslag indirecte verkoopkosten hoort hier NIET bij (geen fabricagekosten).',
      hints: [
        'Kostprijs = standaard materiaal + standaard arbeid + de drie toeslagen indirecte fabricagekosten.',
        'De toeslag van 30% gaat over de tótale directe fabricagekosten (materiaal + arbeid).',
        'De verkoopkosten-toeslag (10%) blijft buiten de fabricagekostprijs.',
      ],
    }),
    // ======================= II. JOURNAALPOSTEN v1 =======================
    open({
      id: 'bh-v1-a1',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave a1',
      difficulty: 'lastig',
      stam: 'a1. Er was aan het begin van het kwartaal nog onderhanden werk. Maak de vereiste journaalpost met betrekking tot dit onderhanden werk (vergeet de indirecte toeslag niet). Vermeld rekeningnummer, rekeningnaam en "Aan".',
      context: AQUARIUM_CASUS,
      juistAntwoord: '610 €460, 611 €540, 612 €550 / Aan 710 €1.550',
      uitleg:
        'Het beginvoorraad-OHW gaat van de balans (710) de fabricage in, tegen standaard:\nToeslag 612 = 25%×€460 + 25%×€540 + 30%×(€460+€540) = 115 + 135 + 300 = €550.\n\n610 Standaard verbruik glas € 460\n611 Standaard directe personeelskosten € 540\n612 Standaard toeslag indirecte fabricageko’n € 550\n   Aan 710 Voorraad goederen in bewerking € 1.550',
      hints: [
        'Het OHW staat als bezit op 710; bij de start van het kwartaal breng je het de fabricage (rubriek 6, standaardrekeningen) in.',
        'Bereken de indirecte toeslag met de standaardpercentages over de standaard materiaal- en arbeidsbedragen.',
        'Debet: 610/611/612. Credit: Aan 710 (het totaal).',
      ],
    }),
    open({
      id: 'bh-v1-a2',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave a2',
      difficulty: 'gemiddeld',
      stam: 'a2. De boekingen voor de werkelijke indirecte fabricagekosten (€12.579) moeten nog worden gemaakt; de saldi in rubriek 4 wil je in stand houden. Maak de journaalpost.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '520 Indirecte fabricagekosten €12.579 / Aan 499 Overboekingsrekening €12.579',
      uitleg:
        'De werkelijke indirecte fabricagekosten gaan naar rubriek 5. Omdat rubriek 4 in stand blijft, crediteer je niet de kostenrekeningen zelf maar de overboekingsrekening:\n\n520 Indirecte fabricagekosten € 12.579\n   Aan 499 Overboekingsrekening € 12.579',
      hints: [
        '"Saldi in stand houden" = nooit de 4xx-rekeningen crediteren, maar de …99 van die rubriek.',
        'Debet de bestemmingsrekening in rubriek 5, Aan 499.',
      ],
    }),
    open({
      id: 'bh-v1-a3',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave a3',
      difficulty: 'lastig',
      stam: 'a3. Maak de journaalpost voor de toerekening van de indirecte fabricagekosten (de standaardtoeslag). Laat de berekening zien.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '602 Toeslag indirecte fabricagekosten €14.111,90 / Aan 525 Opslag indirecte fabricagekosten €14.111,90',
      uitleg:
        'De toeslag wordt berekend over de wérkelijke directe kosten:\n25% × €12.948 = €3.237\n25% × €12.710 = €3.177,50\n30% × (€12.948 + €12.710) = 30% × €25.658 = €7.697,40\nTotaal €14.111,90.\n\n602 Toeslag indirecte fabricagekosten € 14.111,90\n   Aan 525 Opslag indirecte fabricagekosten € 14.111,90',
      hints: [
        'De toeslag in rubriek 6 (602) wordt gedekt door de opslagrekening in rubriek 5 (525).',
        'Bereken de drie toeslagpercentages over de werkelijke directe materiaal- en arbeidskosten.',
      ],
    }),
    open({
      id: 'bh-v1-a4',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave a4',
      difficulty: 'lastig',
      stam: 'a4. Verwerk de gereedgekomen producten (120 aquaria) in de boekhouding. Laat per rekening de berekening zien.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '700 €37.200 / Aan 610 €11.040, Aan 611 €12.960, Aan 612 €13.200',
      uitleg:
        '120 stuks × standaardkostprijs €310 = €37.200 naar de voorraad gereed product, uitgesplitst per component:\n610: 120 × €92 = €11.040; 611: 120 × €108 = €12.960; 612: 120 × €110 = €13.200.\n\n700 Voorraad gereed product € 37.200\n   Aan 610 Standaard verbruik glas € 11.040\n   Aan 611 Standaard directe personeelskosten € 12.960\n   Aan 612 Standaard toeslag indirecte fabricageko’n € 13.200',
      hints: [
        'Gereed product verlaat de fabricage tegen standaardkostprijs (€310 per stuk).',
        'Splits de €310 in de componenten 92 / 108 / 110 en vermenigvuldig elk met 120.',
        'Debet 700; Aan 610/611/612.',
      ],
    }),
    open({
      id: 'bh-v1-a5',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave a5',
      difficulty: 'lastig',
      stam: 'a5. Verwerk het onderhanden werk per 31 maart in de boekhouding (vergeet de indirecte toeslag niet).',
      context: AQUARIUM_CASUS,
      juistAntwoord: '710 €2.170 / Aan 610 €644, Aan 611 €756, Aan 612 €770',
      uitleg:
        'Het eind-OHW gaat de fabricage uit, terug naar de balans (tegen standaard):\nToeslag = 25%×€644 + 25%×€756 + 30%×(€644+€756) = 161 + 189 + 420 = €770.\n\n710 Voorraad goederen in bewerking € 2.170\n   Aan 610 Standaard verbruik glas € 644\n   Aan 611 Standaard directe personeelskosten € 756\n   Aan 612 Standaard toeslag indirecte fabricageko’n € 770\n\n(Spiegelbeeld van a1.)',
      hints: [
        'Dit is het spiegelbeeld van a1: nu gaat het OHW de fabricage úit.',
        'Toeslag met dezelfde standaardpercentages over €644 en €756.',
      ],
    }),
    open({
      id: 'bh-v1-b1',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave b1',
      difficulty: 'berucht',
      stam: 'b1. Journaliseer de verkopen (125 aquaria, gefactureerd en afgeleverd). Denk aan de omzetbelasting én aan de uitlevering tegen standaardkostprijs.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '150 €57.475 / Aan 181 €9.975, Aan 850 €47.500 — én 800 €38.750 / Aan 700 €38.750',
      uitleg:
        'Twee boekingen:\n1) Facturatie: omzet = 125 × €380 = €47.500; OB = 21% × €47.500 = €9.975; debiteuren = €57.475.\n150 Debiteuren € 57.475\n   Aan 181 Te betalen OB € 9.975\n   Aan 850 Opbrengst verkopen € 47.500\n\n2) Uitlevering tegen standaardkostprijs: 125 × €310 = €38.750.\n800 Fabricagekostprijs verkopen € 38.750\n   Aan 700 Voorraad gereed product € 38.750',
      hints: [
        'De verkoop bestaat altijd uit twee journaalposten: de factuur (incl. OB) en de uitlevering uit de voorraad.',
        'OB = 21% van de omzet excl. OB; debiteuren = omzet + OB.',
        'Uitlevering: verkochte aantallen × standaardkostprijs, van 700 naar 800.',
      ],
    }),
    open({
      id: 'bh-v1-b2',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave b2',
      difficulty: 'gemiddeld',
      stam: 'b2. In rubriek 4 "slingeren" nog werkelijke indirecte verkoopkosten rond (€6.317), die je overboekt naar de juiste rubriek. Maak de journaalpost.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '540 Indirecte verkoopkosten €6.317 / Aan 499 Overboekingsrekening €6.317',
      uitleg:
        'Identiek patroon aan a2, maar nu voor de verkoopkant:\n\n540 Indirecte verkoopkosten € 6.317\n   Aan 499 Overboekingsrekening € 6.317',
      hints: ['Zelfde patroon als a2: bestemmingsrekening in rubriek 5 debet, Aan 499.'],
    }),
    open({
      id: 'bh-v1-b3',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave b3',
      difficulty: 'lastig',
      stam: 'b3. Belast de indirecte verkoopkosten door in de rubriek met betrekking tot de verkopen (de standaardtoeslag). Laat de berekening zien.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '815 Toeslag indirecte verkoopkosten €4.750 / Aan 545 Opslag indirecte verkoopkosten €4.750',
      uitleg:
        'Toeslag = 10% van de verkoopprijs (excl. OB) van de verkochte producten = 10% × 125 × €380 = 10% × €47.500 = €4.750.\n\n815 Toeslag indirecte verkoopkosten € 4.750\n   Aan 545 Opslag indirecte verkoopkosten € 4.750',
      hints: [
        'De toeslag is 10% van de omzet excl. OB.',
        'Rubriek 8 (815) debet, gedekt vanuit de opslagrekening in rubriek 5 (545).',
      ],
    }),
    open({
      id: 'bh-v1-c1',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave c1',
      difficulty: 'berucht',
      stam: 'c1. Bepaal het verkoopresultaat en boek het over naar de juiste rubriek. Laat de gedetailleerde berekening per rekening zien (rekeningnummer + bedrag) en vermeld of het saldo voor- of nadelig is.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '€588 voordelig → 899 €588 / Aan 950 Verkoopresultaat €588',
      uitleg:
        'Rubriek 8 salderen:\n850 Opbrengst verkopen € 47.500 credit\n800 Fabricagekostprijs verkopen € 38.750 debet\n810 Directe verkoopkosten € 3.412 debet (uit de saldibalans!)\n815 Toeslag indirecte verkoopkosten € 4.750 debet\nSaldo = 47.500 − 38.750 − 3.412 − 4.750 = €588 credit = VOORDELIG.\n\nVoordelig saldo wegboeken: overboekingsrekening debet, resultatenrekening credit:\n899 Overboekingsrekening € 588\n   Aan 950 Verkoopresultaat € 588',
      hints: [
        'Tel álle rekeningen van rubriek 8 op — vergeet 810 Directe verkoopkosten uit de saldibalans niet.',
        'Creditsaldo = voordelig.',
        'Voordelig: 899 debet, Aan 950. (Nadelig zou andersom zijn.)',
      ],
    }),
    open({
      id: 'bh-v1-c2',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave c2',
      difficulty: 'berucht',
      stam: 'c2. Bepaal het fabricageresultaat en boek het over naar de juiste rubriek. Laat de gedetailleerde berekening zien en vermeld voor- of nadelig.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '€1.949,90 nadelig → 930 Fabricageresultaat €1.949,90 / Aan 699 €1.949,90',
      uitleg:
        'Rubriek 6 salderen (na a1 t/m a5):\nWerkelijk (debet): 600 €12.948 + 601 €12.710 + 602 €14.111,90 = €39.769,90.\nStandaard (credit): 610 = 11.040 + 644 − 460 = €11.224; 611 = 12.960 + 756 − 540 = €13.176; 612 = 13.200 + 770 − 550 = €13.420. Samen €37.820.\nSaldo = 37.820 − 39.769,90 = −€1.949,90 = NADELIG (werkelijke kosten hoger dan standaard).\n\nNadelig saldo wegboeken: resultatenrekening debet, Aan overboekingsrekening:\n930 Fabricageresultaat € 1.949,90\n   Aan 699 Overboekingsrekening € 1.949,90',
      hints: [
        'Bepaal eerst de saldi van 610/611/612 ná a1, a4 en a5 (credit) en zet die tegenover 600/601/602 (debet).',
        'Werkelijk > standaard = nadelig.',
        'Nadelig: 930 debet, Aan 699.',
      ],
    }),
    open({
      id: 'bh-v1-c3',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave c3',
      difficulty: 'berucht',
      stam: 'c3. Bepaal het resultaat op indirecte kosten en boek het over naar de juiste rubriek. Laat de berekening zien en vermeld voor- of nadelig.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '€34,10 nadelig → 910 Resultaat indirecte kosten €34,10 / Aan 599 €34,10',
      uitleg:
        'Rubriek 5 salderen:\nFabricage: 525 Opslag €14.111,90 credit − 520 werkelijk €12.579 debet = +€1.532,90 (voordelig).\nVerkoop: 545 Opslag €4.750 credit − 540 werkelijk €6.317 debet = −€1.567 (nadelig).\nSaldo = 1.532,90 − 1.567 = −€34,10 = NADELIG.\n\n910 Resultaat indirecte kosten € 34,10\n   Aan 599 Overboekingsrekening € 34,10',
      hints: [
        'Vergelijk per soort: opslag (doorberekend, credit) vs. werkelijke indirecte kosten (debet).',
        'Tel beide verschillen op; het teken bepaalt voordelig/nadelig.',
        'Nadelig: 910 debet, Aan 599.',
      ],
    }),
    open({
      id: 'bh-v1-c4',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave c4',
      difficulty: 'berucht',
      stam: 'c4. Boek de winst of het verlies over naar het eigen vermogen. Let op dat álle resultaten worden meegenomen. Laat de berekening zien.',
      context: AQUARIUM_CASUS,
      juistAntwoord: '€1.056 verlies → 042 Eigen vermogen €1.056 / Aan 999 €1.056',
      uitleg:
        'Alle resultaten in rubriek 9:\n950 Verkoopresultaat +€588 (voordelig)\n930 Fabricageresultaat −€1.949,90 (nadelig)\n910 Resultaat indirecte kosten −€34,10 (nadelig)\n990 Incidentele resultaten +€340 (creditsaldo uit de saldibalans — vaak vergeten!)\nTotaal = 588 − 1.949,90 − 34,10 + 340 = −€1.056 = VERLIES.\n\nVerlies: het eigen vermogen neemt af → debet:\n042 Eigen vermogen € 1.056\n   Aan 999 Overboekingsrekening € 1.056',
      hints: [
        'Tel de uitkomsten van c1, c2 en c3 op — en vergeet 990 Incidentele resultaten uit de saldibalans niet.',
        'Verlies → eigen vermogen daalt → 042 debet, Aan 999. Winst zou andersom zijn.',
      ],
    }),
    // ======================= III. KOLOMMENBALANS v1 =======================
    open({
      id: 'bh-v1-kolom-ev',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave III',
      difficulty: 'lastig',
      stam: 'III. Wat is het saldo van 042 Eigen vermogen op de gewijzigde saldibalans (en op de eindbalans)? En wat zijn de saldi van 700 Voorraad gereed product en 710 Voorraad goederen in bewerking op de eindbalans?',
      context: AQUARIUM_CASUS,
      juistAntwoord: '042: €56.462 credit · 700: €1.550 debet · 710: €2.170 debet',
      uitleg:
        '042 Eigen vermogen: €57.518 credit − €1.056 (verlies, c4 debet) = €56.462 credit.\n700 Voorraad gereed product: €3.100 + €37.200 (a4) − €38.750 (b1) = €1.550 debet.\n710 Goederen in bewerking: €1.550 + €2.170 (a5) − €1.550 (a1) = €2.170 debet (= het eind-OHW).\nDeze drie rekeningen horen op de balans (rubriek 0 en 7).',
      hints: [
        'Gewijzigd saldo = oorspronkelijk saldo ± alle journaalposten op die rekening.',
        '042: alleen c4 raakt het eigen vermogen. 700: a4 erbij, b1 eraf. 710: a1 eraf, a5 erbij.',
      ],
    }),
    open({
      id: 'bh-v1-kolom-totalen',
      bronCategorie: 'formatief',
      bronLabel: 'Formatieve toets — open opgave III',
      difficulty: 'lastig',
      stam: 'III. Noem de controles waarmee je je kolommenbalans sluitend maakt, en geef de totalen van de aquarium-casus.',
      context: AQUARIUM_CASUS,
      juistAntwoord: 'Journaalposten €178.530,90 · Gewijzigde saldibalans €224.115,90 · Resultatenrekening €156.115,90 · Balans €68.000 (debet = credit per kolompaar)',
      uitleg:
        'Controles: (1) elk kolompaar moet debet = credit hebben; (2) elke regel van de gewijzigde saldibalans gaat naar óf de resultatenrekening óf de balans; (3) doordat de winst/het verlies via c4 al naar het eigen vermogen is geboekt, sluiten resultatenrekening en balans vanzelf.\nTotalen casus: voorafgaande journaalposten €178.530,90; gewijzigde saldibalans €224.115,90; resultatenrekening €156.115,90; balans €68.000.',
      hints: [
        'Debet- en credittotaal moeten per kolompaar gelijk zijn.',
        'Resultatenrekening: rubriek 4/5/6/8/9 + …99. Balans: rubriek 0/1/3/7.',
      ],
    }),
    // ======================= VARIANT-CASUS (v2) =======================
    open({
      id: 'bh-v2-kostprijs',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — I',
      difficulty: 'gemiddeld',
      stam: 'I. Bereken de standaardfabricagekostprijs van een vogelhuisje. Laat alle componenten zien.',
      context: VOGELHUIS_CASUS,
      juistAntwoord: '€87 (30 + 30 + 6 + 6 + 15)',
      uitleg:
        'Materialen: 1,50 m² × €20 = €30. Arbeid: 0,50 uur × €60 = €30. Totale directe fabricagekosten = €60.\nToeslagen: 20% × €30 = €6; 20% × €30 = €6; 25% × €60 = €15.\nStandaardfabricagekostprijs = 30 + 30 + 6 + 6 + 15 = €87.',
      hints: [
        'Zelfde opbouw als de aquarium-casus, andere percentages.',
        'De 8%-verkooptoeslag blijft buiten de fabricagekostprijs.',
      ],
    }),
    open({
      id: 'bh-v2-a1',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — a1',
      difficulty: 'lastig',
      stam: 'a1. Maak de journaalpost voor het onderhanden werk per 1 april (inclusief indirecte toeslag).',
      context: VOGELHUIS_CASUS,
      juistAntwoord: '610 €200, 611 €240, 612 €198 / Aan 710 €638',
      uitleg:
        'Toeslag = 20%×€200 + 20%×€240 + 25%×(€200+€240) = 40 + 48 + 110 = €198.\n\n610 Standaard verbruik hout € 200\n611 Standaard directe personeelskosten € 240\n612 Standaard toeslag indirecte fabricageko’n € 198\n   Aan 710 Voorraad goederen in bewerking € 638',
      hints: [
        'Zelfde patroon als de aquarium-a1: begin-OHW de fabricage in.',
        'Toeslag met 20%/20%/25% over de standaardbedragen.',
      ],
    }),
    open({
      id: 'bh-v2-a3',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — a3',
      difficulty: 'lastig',
      stam: 'a2+a3. Boek (1) de werkelijke indirecte fabricagekosten (€3.800) en (2) de toerekening van de indirecte fabricagekosten (standaardtoeslag over de werkelijke directe kosten).',
      context: VOGELHUIS_CASUS,
      juistAntwoord: 'a2: 520 €3.800 / Aan 499. a3: 602 €5.953,50 / Aan 525 €5.953,50',
      uitleg:
        'a2: 520 Indirecte fabricagekosten € 3.800 / Aan 499 Overboekingsrekening € 3.800.\n\na3: toeslag = 20%×€6.720 + 20%×€6.510 + 25%×(€6.720+€6.510) = 1.344 + 1.302 + 3.307,50 = €5.953,50.\n602 Toeslag indirecte fabricagekosten € 5.953,50\n   Aan 525 Opslag indirecte fabricagekosten € 5.953,50',
      hints: [
        'a2: rubriek 4 in stand houden → Aan 499.',
        'a3: toeslagpercentages over de wérkelijke directe kosten.',
      ],
    }),
    open({
      id: 'bh-v2-a4a5',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — a4/a5',
      difficulty: 'lastig',
      stam: 'a4+a5. Boek (1) de 200 gereedgekomen vogelhuisjes en (2) het onderhanden werk per 30 juni (inclusief toeslag).',
      context: VOGELHUIS_CASUS,
      juistAntwoord: 'a4: 700 €17.400 / Aan 610 €6.000, 611 €6.000, 612 €5.400. a5: 710 €986 / Aan 610 €320, 611 €360, 612 €306',
      uitleg:
        'a4: componenten per stuk 30/30/27 → 200 stuks: 610 €6.000, 611 €6.000, 612 €5.400; totaal 200×€87 = €17.400.\n700 Voorraad gereed product € 17.400\n   Aan 610 € 6.000, Aan 611 € 6.000, Aan 612 € 5.400\n\na5: toeslag = 20%×€320 + 20%×€360 + 25%×(€320+€360) = 64 + 72 + 170 = €306.\n710 Voorraad goederen in bewerking € 986\n   Aan 610 € 320, Aan 611 € 360, Aan 612 € 306',
      hints: [
        'a4: splits de €87 in 30 / 30 / 27 en vermenigvuldig met 200.',
        'a5: spiegelbeeld van a1 met de eindstanden.',
      ],
    }),
    open({
      id: 'bh-v2-b1',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — b1',
      difficulty: 'berucht',
      stam: 'b1. Journaliseer de verkopen (200 vogelhuisjes à €150 excl. 21% OB), inclusief de uitlevering tegen standaardkostprijs.',
      context: VOGELHUIS_CASUS,
      juistAntwoord: '150 €36.300 / Aan 181 €6.300, Aan 850 €30.000 — én 800 €17.400 / Aan 700 €17.400',
      uitleg:
        'Omzet = 200 × €150 = €30.000; OB = 21% = €6.300; debiteuren = €36.300.\n150 Debiteuren € 36.300\n   Aan 181 Te betalen OB € 6.300\n   Aan 850 Opbrengst verkopen € 30.000\n\nUitlevering: 200 × €87 = €17.400.\n800 Fabricagekostprijs verkopen € 17.400\n   Aan 700 Voorraad gereed product € 17.400',
      hints: [
        'Twee journaalposten: factuur (incl. OB) + uitlevering (standaardkostprijs).',
        'OB = 21% van €30.000.',
      ],
    }),
    open({
      id: 'bh-v2-b2b3',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — b2/b3',
      difficulty: 'lastig',
      stam: 'b2+b3. Boek (1) de werkelijke indirecte verkoopkosten (€2.350) en (2) de doorbelasting van de indirecte verkoopkosten (8% van de omzet excl. OB).',
      context: VOGELHUIS_CASUS,
      juistAntwoord: 'b2: 540 €2.350 / Aan 499. b3: 815 €2.400 / Aan 545 €2.400',
      uitleg:
        'b2: 540 Indirecte verkoopkosten € 2.350 / Aan 499 Overboekingsrekening € 2.350.\nb3: toeslag = 8% × €30.000 = €2.400.\n815 Toeslag indirecte verkoopkosten € 2.400\n   Aan 545 Opslag indirecte verkoopkosten € 2.400',
      hints: ['b2: zelfde patroon als a2.', 'b3: 8% van de omzet excl. OB.'],
    }),
    open({
      id: 'bh-v2-c1',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — c1',
      difficulty: 'berucht',
      stam: 'c1. Bepaal het verkoopresultaat (gedetailleerde berekening, voor- of nadelig) en boek het over.',
      context: VOGELHUIS_CASUS,
      juistAntwoord: '€400 voordelig → 899 €400 / Aan 950 Verkoopresultaat €400',
      uitleg:
        'Rubriek 8:\n850 Opbrengst verkopen € 30.000 credit\n800 Fabricagekostprijs verkopen € 17.400 debet\n810 Directe verkoopkosten € 9.800 debet (saldibalans!)\n815 Toeslag indirecte verkoopkosten € 2.400 debet\nSaldo = 30.000 − 17.400 − 9.800 − 2.400 = €400 credit = VOORDELIG.\n\n899 Overboekingsrekening € 400\n   Aan 950 Verkoopresultaat € 400',
      hints: ['Vergeet 810 uit de saldibalans niet.', 'Voordelig: 899 debet, Aan 950.'],
    }),
    open({
      id: 'bh-v2-c2',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — c2',
      difficulty: 'berucht',
      stam: 'c2. Bepaal het fabricageresultaat (gedetailleerde berekening, voor- of nadelig) en boek het over.',
      context: VOGELHUIS_CASUS,
      juistAntwoord: '€1.435,50 nadelig → 930 Fabricageresultaat €1.435,50 / Aan 699 €1.435,50',
      uitleg:
        'Werkelijk (debet): 600 €6.720 + 601 €6.510 + 602 €5.953,50 = €19.183,50.\nStandaard (credit): 610 = 6.000 + 320 − 200 = €6.120; 611 = 6.000 + 360 − 240 = €6.120; 612 = 5.400 + 306 − 198 = €5.508. Samen €17.748.\nSaldo = 17.748 − 19.183,50 = −€1.435,50 = NADELIG.\n\n930 Fabricageresultaat € 1.435,50\n   Aan 699 Overboekingsrekening € 1.435,50',
      hints: [
        'Saldi 610/611/612 ná a1/a4/a5 berekenen.',
        'Werkelijke kosten hoger dan standaard = nadelig → 930 debet, Aan 699.',
      ],
    }),
    open({
      id: 'bh-v2-c3c4',
      bronCategorie: 'zelfgemaakt',
      bronLabel: 'Oefencasus vogelhuisjes — c3/c4',
      difficulty: 'berucht',
      stam: 'c3+c4. Bepaal (1) het resultaat op indirecte kosten en boek het over, en (2) boek de winst of het verlies naar het eigen vermogen (alle resultaten meenemen!).',
      context: VOGELHUIS_CASUS,
      juistAntwoord: 'c3: €2.203,50 voordelig → 599 / Aan 910. c4: €1.318 winst → 999 €1.318 / Aan 042 €1.318',
      uitleg:
        'c3 (rubriek 5): fabricage 525 €5.953,50 − 520 €3.800 = +€2.153,50; verkoop 545 €2.400 − 540 €2.350 = +€50. Totaal +€2.203,50 = VOORDELIG.\n599 Overboekingsrekening € 2.203,50\n   Aan 910 Resultaat indirecte kosten € 2.203,50\n\nc4: +€400 (verkoop) − €1.435,50 (fabricage) + €2.203,50 (indirect) + €150 (990 incidenteel, credit) = +€1.318 = WINST.\n999 Overboekingsrekening € 1.318\n   Aan 042 Eigen vermogen € 1.318\n\n(Vergelijk met de aquarium-casus: daar was c3 nadelig en c4 een verlies — de richting van de boeking draait dan om!)',
      hints: [
        'c3 is hier voordelig → 599 debet, Aan 910 (andersom dan bij de aquaria).',
        'c4: winst → eigen vermogen stijgt → Aan 042.',
        'Vergeet 990 Incidentele resultaten (€150 credit) niet.',
      ],
    }),
    // ======================= ECHTE OPEN OPGAVE — MUSTANG HOOFCARE (11-6-2026) =======================
    open({
      id: 'mhc-kostprijs',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave (kostprijs)',
      difficulty: 'gemiddeld',
      stam: 'Toon de opbouw van de integralestandaardkostprijs per hoefijzer (€2,45).',
      context: MHC_CASUS,
      juistAntwoord: '€2,45 = €0,75 grondstof + €1,20 arbeid + €0,50 toeslag indirecte kosten',
      uitleg:
        'Grondstoffen: 1,5 kg × €0,50 = €0,75. Arbeid: 0,040 uur × €30,00 = €1,20. Toeslag indirecte fabricagekosten: 0,040 uur × €12,50 = €0,50.\nIntegralestandaardkostprijs = 0,75 + 1,20 + 0,50 = €2,45 per hoefijzer.',
      hints: [
        'Drie componenten: directe grondstof, directe arbeid, toeslag indirecte kosten (op basis van directe arbeidsuren).',
        'De toeslag = standaarduren per hoefijzer × het toeslagtarief per uur (€12,50).',
      ],
    }),
    open({
      id: 'mhc-a',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave a',
      difficulty: 'lastig',
      stam: 'a. Leg de geproduceerde (gereedgekomen) hoefijzers vast in het journaal, gewaardeerd tegen integralestandaardkostprijs. Vermeld rekeningnummer, naam en "Aan".',
      context: MHC_CASUS,
      juistAntwoord: '700 €196.000 / Aan 610 €60.000, Aan 611 €96.000, Aan 612 €40.000',
      uitleg:
        '80.000 gereedgekomen hoefijzers × €2,45 = €196.000 naar de voorraad gereed product, uitgesplitst per standaardcomponent:\n610: 80.000 × €0,75 = €60.000; 611: 80.000 × €1,20 = €96.000; 612: 80.000 × €0,50 = €40.000.\n\n700 Voorraad gereed product € 196.000\n   Aan 610 Standaard verbruik grondstoffen € 60.000\n   Aan 611 Standaard directe personeelskosten € 96.000\n   Aan 612 Standaard toeslag indir.fab.ko’n € 40.000',
      hints: [
        'Gereed product komt tegen STANDAARDkostprijs in de voorraad (700 debet).',
        'Splits de €2,45 in 0,75 / 1,20 / 0,50 en vermenigvuldig elk met 80.000.',
        'Crediteer de standaardrekeningen 610/611/612.',
      ],
    }),
    open({
      id: 'mhc-b1',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave b1',
      difficulty: 'lastig',
      stam: 'b1. Maak de journaalpost met rekening 800 (uitlevering van de verkochte hoefijzers tegen integralestandaardkostprijs).',
      context: MHC_CASUS,
      juistAntwoord: '800 €183.750 / Aan 700 €183.750',
      uitleg:
        'Verkocht/afgeleverd: 75.000 stuks × €2,45 = €183.750. De voorraad gereed product verlaat tegen standaardkostprijs:\n\n800 Fabricagekostprijs verkopen € 183.750\n   Aan 700 Voorraad gereed product € 183.750',
      hints: ['Uitlevering = verkochte aantallen × standaardkostprijs.', '800 debet, Aan 700.'],
    }),
    open({
      id: 'mhc-b2',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave b2',
      difficulty: 'lastig',
      stam: 'b2. Maak de journaalpost met rekening 840 (de facturatie van de verkopen). Houd rekening met de omzetbelasting (21%).',
      context: MHC_CASUS,
      juistAntwoord: '150 €235.950 / Aan 181 €40.950, Aan 840 €195.000',
      uitleg:
        'Omzet = 75.000 × €2,60 = €195.000. OB = 21% × €195.000 = €40.950. Debiteuren (incl. OB) = €235.950.\n\n150 Debiteuren € 235.950\n   Aan 181 Te betalen OB € 40.950\n   Aan 840 Opbrengst verkopen € 195.000',
      hints: ['Omzet excl. OB = 75.000 × €2,60.', 'OB = 21% van de omzet; debiteuren = omzet + OB.'],
    }),
    open({
      id: 'mhc-b3',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave b3',
      difficulty: 'berucht',
      stam: 'b3. Maak de journaalpost met rekening 899: bepaal het transactieresultaat (rubriek 8) en boek het over. Toon de berekening en vermeld voor-/nadelig.',
      context: MHC_CASUS,
      juistAntwoord: '€11.250 voordelig → 899 €11.250 / Aan 980 Verkoopresultaat €11.250',
      uitleg:
        'Rubriek 8 salderen: 840 Opbrengst verkopen €195.000 credit − 800 Fabricagekostprijs verkopen €183.750 debet = €11.250 voordelig (= het transactieresultaat = 75.000 × (€2,60 − €2,45)).\nVoordelig saldo wegboeken via de overboekingsrekening:\n\n899 Overboekingsrekening € 11.250\n   Aan 980 Verkoopresultaat € 11.250',
      hints: [
        'Transactieresultaat = omzet − fabricagekostprijs verkopen (beide al geboekt in rubriek 8).',
        'Ook = afzet × (verkoopprijs − standaardkostprijs) = 75.000 × €0,15.',
        'Voordelig: 899 debet, Aan 980.',
      ],
    }),
    open({
      id: 'mhc-d',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave d',
      difficulty: 'lastig',
      stam: 'd. Wat wordt bedoeld met de term "zuiver verkoopresultaat", en is die term van toepassing op het door u berekende transactieresultaat?',
      context: MHC_CASUS,
      juistAntwoord: 'Ja — het transactieresultaat ís het zuivere verkoopresultaat: verkopen tegen werkelijke prijs minus de STANDAARD­kostprijs, dus niet vertroebeld door fabricageverschillen.',
      uitleg:
        'Het "zuiver verkoopresultaat" is het resultaat dat uitsluitend aan de verkoopfunctie is toe te rekenen: de afzet gewaardeerd tegen de werkelijke verkoopprijs minus de INTEGRALESTANDAARDkostprijs. Doordat de kostprijs op standaard staat, zit er géén vertroebeling in door prijs-, efficiency- of bezettingsverschillen uit de fabricage. Het berekende transactieresultaat (€11.250) is precies dat — verkopen × (€2,60 − €2,45) — dus de term is van toepassing.',
      hints: [
        '"Zuiver" = niet vervuild door fabricage-(in)efficiency.',
        'Waardeer je de kostprijs op standaard, dan blijft alleen het verkoopeffect over.',
      ],
    }),
    open({
      id: 'mhc-e',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave e1/e2/e3',
      difficulty: 'berucht',
      stam: 'e. Bewaak de kwaliteit van de toerekening van indirecte kosten (rubriek 5). Maak drie journaalposten: e1 met rekening 560, e2 met rekening 565, e3 met rekening 599 (resultaat indirecte kosten).',
      context: MHC_CASUS,
      juistAntwoord: 'e1: 560 €37.390 / Aan 499. e2: 602 €38.000 / Aan 565 €38.000. e3: €610 voordelig → 599 €610 / Aan 950 €610',
      uitleg:
        'De enige indirecte fabricagekosten zijn de huurkosten (435) = €37.390.\n\ne1 — werkelijke indirecte fabricagekosten naar rubriek 5 (rubriek 4 in stand houden):\n560 Indirecte fabricagekosten € 37.390\n   Aan 499 Overboekingsrekening € 37.390\n\ne2 — toegerekende (standaard) indirecte kosten = standaardtarief × WERKELIJKE directe arbeidsuren = €12,50 × 3.040 = €38.000:\n602 Toeslag indirecte fabricagekosten € 38.000\n   Aan 565 Opslag indirecte fabricagekosten € 38.000\n\ne3 — resultaat indirecte kosten (rubriek 5): 565 €38.000 credit − 560 €37.390 debet = €610 voordelig:\n599 Overboekingsrekening € 610\n   Aan 950 Resultaat indirecte kosten € 610',
      hints: [
        'Werkelijke indirecte kosten = de huurkosten (€37.390); rubriek 4 in stand → Aan 499.',
        'Toegerekend = €12,50 per uur × werkelijke directe uren (3.040) = €38.000.',
        'Voordelig (toegerekend > werkelijk) → 599 debet, Aan 950.',
      ],
    }),
    open({
      id: 'mhc-f',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave f',
      difficulty: 'gemiddeld',
      stam: 'f. De indirecte kosten worden bij MHC toegerekend op basis van directe arbeidsuren, zonder causaal verband. Noem één methode uit het leerboek waarbij dat causale verband wél centraal staat.',
      context: MHC_CASUS,
      juistAntwoord: 'Activity-Based Costing (ABC)',
      uitleg:
        'Activity-Based Costing (ABC) rekent indirecte kosten toe via activiteiten en hun cost drivers, waarbij juist wél een oorzakelijk (causaal) verband wordt gelegd tussen de kostenveroorzaker en het product. Een opslag op directe arbeidsuren legt dat verband niet; ABC wel.',
      hints: ['Toerekening via activiteiten en cost drivers.', 'De methode met "drivers" en een oorzakelijk verband begint met A.'],
    }),
    open({
      id: 'mhc-g',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave g',
      difficulty: 'lastig',
      stam: 'g. Wat betekent het saldo tussen de rekeningen 601 en 611 (het "broertje-zusje") volgens de leerstof, en welke informatie geeft dat saldo bij MHC?',
      context: MHC_CASUS,
      juistAntwoord: 'Het totale verschil tussen werkelijke en standaard directe arbeidskosten = prijsverschil + efficiencyverschil op manuren (bij MHC €1.280 nadelig).',
      uitleg:
        '601 Directe personeelskosten = de WERKELIJKE directe arbeidskosten (€97.280); 611 Standaard directe personeelskosten = de STANDAARD arbeidskosten voor de werkelijke productie (€96.000). Het saldo = €1.280 nadelig en geeft het totale arbeidskostenverschil weer, dat is op te splitsen in een prijsverschil (PS−PW)×HW en een efficiencyverschil (SH−WH)×SP op de directe manuren.',
      hints: [
        '601 = werkelijk, 611 = standaard (voor de werkelijke productie).',
        'Het verschil is de som van prijs- en efficiencyverschil op de directe arbeid.',
      ],
    }),
    open({
      id: 'mhc-h',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave h',
      difficulty: 'berucht',
      stam: 'h. Boek alsnog de ontbrekende werkelijke kosten op de rekeningen 600 t/m 612 en laat rubriek 6 "glad" lopen met rekening 699 (begin bij h1). Toon het fabricageresultaat (voor-/nadelig).',
      context: MHC_CASUS,
      juistAntwoord: 'h1: 600 €61.440 / Aan 499. h2: 601 €97.280 / Aan 499. h3 (699): fabricageresultaat €720 nadelig → 960 €720 / Aan 699 €720',
      uitleg:
        'Rekening 602 is al geboekt (e2). Nog te boeken zijn de werkelijke directe kosten (rubriek 4 in stand → Aan 499):\nh1: 600 Verbruik grondstoffen € 61.440 / Aan 499 € 61.440\nh2: 601 Directe personeelskosten € 97.280 / Aan 499 € 97.280\n\nRubriek 6 staat nu op: debet 600 €61.440 + 601 €97.280 + 602 €38.000 = €196.720; credit 610 €60.000 + 611 €96.000 + 612 €40.000 = €196.000. Saldo = €720 NADELIG (werkelijk/toegerekend > standaard).\nGlad maken via 699 en het fabricageresultaat naar rubriek 9:\nh3: 960 Fabricageresultaat € 720\n   Aan 699 Overboekingsrekening € 720\n\nControle van het saldo: grondstof €1.440 nadelig + arbeid €1.280 nadelig − indirect (602 vs 612) €2.000 voordelig = €720 nadelig.',
      hints: [
        '600/601 komen uit de werkelijke kosten in rubriek 4 (410/430) → Aan 499; 602 is al geboekt in e2.',
        'Fabricageresultaat = totaal standaard (610+611+612) − totaal werkelijk/toegerekend (600+601+602).',
        'Nadelig → 960 debet, Aan 699 (zo wordt rubriek 6 sluitend).',
      ],
    }),
    open({
      id: 'mhc-i',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave i',
      difficulty: 'berucht',
      stam: 'i. Bepaal het perioderesultaat aan de hand van rubriek 9 en boek het over naar het eigen vermogen. Toon de berekening.',
      context: MHC_CASUS,
      juistAntwoord: '€10.000 winst → 999 €10.000 / Aan 040 Eigen vermogen €10.000',
      uitleg:
        'Alle resultaten in rubriek 9 optellen:\n980 Verkoopresultaat (transactieresultaat b3) + €11.250\n950 Resultaat indirecte kosten (e3) + €610\n960 Fabricageresultaat (h3) − €720\n995 Interestkosten (oorspronkelijke saldibalans, debet) − €1.140\nPerioderesultaat = 11.250 + 610 − 720 − 1.140 = €10.000 VOORDELIG (winst).\n\nWinst verhoogt het eigen vermogen; rubriek 9 sluiten tegen 999 en het saldo naar 040:\n999 Overboekingsrekening € 10.000\n   Aan 040 Eigen vermogen € 10.000\n\n(NB de opgave bevestigt dat u op een winst moet uitkomen.)',
      hints: [
        'Tel álle rubriek-9-rekeningen op: verkoopresultaat + resultaat indirecte kosten − fabricageresultaat − interestkosten.',
        'Vergeet de interestkosten (€1.140 debet) uit de oorspronkelijke saldibalans niet.',
        'Winst → eigen vermogen stijgt → Aan 040.',
      ],
    }),
    open({
      id: 'mhc-j',
      bronCategorie: 'tentamen-2026',
      bronLabel: 'Tentamen 11-6-2026 — open opgave j',
      difficulty: 'lastig',
      stam: 'j. Stel dat er aan het einde van de periode tóch onderhanden werk (goederen in bewerking) was, met terugwerkende kracht verwerkt en gewaardeerd tegen integralestandaardkostprijs. In hoeverre heeft dat gevolgen voor het perioderesultaat? Licht toe.',
      context: MHC_CASUS,
      juistAntwoord: 'In beginsel geen gevolgen: het is slechts een herrubricering van voorraadwaarde tegen dezelfde standaardnorm; het perioderesultaat verandert niet.',
      uitleg:
        'Bij waardering tegen integralestandaardkostprijs heeft het onderkennen van onderhanden werk in beginsel géén invloed op het perioderesultaat. Het onderhanden werk wordt slechts tegen dezelfde standaardnorm van de ene voorraadrekening naar een rekening "goederen in bewerking" geschoven. Het perioderesultaat wordt bepaald door de verkopen (afzet × (verkoopprijs − standaardkostprijs)) plus de fabricage- en indirecte-kostenverschillen, en die wijzigen niet door het herrubriceren van nog niet gereed product. Er verschuift alleen voorraadwaarde op de balans, geen resultaat.',
      hints: [
        'Standaardwaardering → onderhanden werk is alleen een andere voorraadrubriek tegen dezelfde norm.',
        'Het resultaat hangt aan de verkopen en de verschillen, niet aan de indeling van de voorraad.',
      ],
    }),
  ],
}
