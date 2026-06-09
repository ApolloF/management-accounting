import type { Deel } from '../types'

export const deel2: Deel = {
  nr: 2,
  titel: 'Kostprijzen',
  hoofdstukken: 'Hoofdstukken 5–6',
  kernthema:
    'Integrale standaardkostprijs vs. variabele kostencalculatie, normale productie, rationele/irrationele kosten, afval & uitval, break-even.',
  theorie: [
    {
      titel: 'Integrale standaardkostprijs vs. variabele kostencalculatie',
      uitleg:
        '**Integrale standaardkostprijs (ISKP)** = variabele kosten per eenheid + een opslag voor constante kosten per eenheid:\n\n`ISKP = variabele kosten p.e. + (constante kosten / normale productie)`\n\nDe constante kosten per eenheid hangen dus af van de **normale productie** (de noemer). Verlaag je de normale productie, dan stijgt de constante-kostencomponent → de ISKP stijgt. (Of de variabele kosten progressief of degressief zijn, doet er dan niet toe.)\n\n**Variabele kostencalculatie (VKC)** waardeert voorraden alleen tegen variabele kosten; alle constante kosten van de periode gaan direct naar het perioderesultaat.\n\n**Gevolg voor de eerste periode zonder verkopen:**\n- Bij **VKC**: geen opbrengsten, wél alle constante kosten als last → perioderesultaat is *negatief*.\n- Bij **ISKP**: geen transactieresultaat, maar wél een (mogelijk positief) **bezettingsresultaat** als er méér dan normaal is geproduceerd. → Een positief perioderesultaat in de eerste periode wijst dus op de ISKP-methode.',
      formules: [
        'ISKP = variabele kosten p.e. + (constante kosten ÷ normale productie)',
        'Normale productie ↓  ⇒  constante kosten p.e. ↑  ⇒  ISKP ↑',
      ],
    },
    {
      titel: 'Rationele vs. irrationele kosten & overcapaciteit',
      uitleg:
        'Kosten zijn **rationeel** (onvermijdbaar, horen in de kostprijs) of **irrationeel** (verspilling, gaan rechtstreeks naar de resultatenrekening).\n\n**Overcapaciteit door reservecapaciteit** voor schoonmaak en onderhoud is *onvermijdbaar* en daarmee **rationeel** → die kosten horen wél in de integrale standaardkostprijs thuis. Alleen verspilling (irrationeel/vermijdbaar) wordt eruit gehouden.',
    },
    {
      titel: 'Afval en uitval',
      uitleg:
        '**Afval** ontstaat bij het verwerken van grondstoffen; **uitval** = afgekeurde eindproducten. Beide zijn kosten, maar voor zover ze economisch **vermijdbaar** zijn, zijn het *verspillingen* die rechtstreeks naar de resultatenrekening gaan. **Onvermijdbare** afval/uitval komt tot uitdrukking in de kostprijs van het eindproduct (op de balans als voorraad).',
      voorbeelden: [
        {
          titel: 'Afval & uitval: wat gaat naar resultatenrekening (R) en wat naar balans (B)?',
          casus:
            'Planken €5.000. 10% afval bij verwerken. Daarna 10% van de tafels afgekeurd (uitval). Afval/uitval hebben geen waarde; waardering tegen werkelijke kosten. Welk deel R gaat rechtstreeks naar de resultatenrekening, welk deel B naar de balans?',
          stappen: [
            'Als afval/uitval geheel VERMIJDBAAR zijn → maximaal naar resultatenrekening: 10% afval = €500 naar R; daarna tafels waard €4.500, 10% uitval = €450 naar R. Samen €950 naar R.',
            'Als alle afval ONVERMIJDBAAR is → vóór keuring zijn de producten €5.000 waard; max 10% uitval (€500) naar R, dus €4.500 naar de balans (B).',
            'Stelling A (R ligt tussen €0 en €1.000): onjuist — max is €950, maar de bovengrens €1.000 is te ruim/onnauwkeurig gesteld.',
            'Stelling B (als B = €4.500, kan uitval geheel vermijdbaar zijn): onjuist — B = €4.500 hoort bij het scenario waarin afval onvermijdbaar is.',
          ],
          antwoord:
            'In de tentamenvraag: A onjuist, B onjuist → antwoord c. (A onjuist, B juist) was het officiële antwoord; kern is het onderscheid vermijdbaar (→R) vs. onvermijdbaar (→kostprijs/B).',
        },
      ],
    },
    {
      titel: 'Break-even & indifferentiepunt',
      diagram: 'breakeven',
      uitleg:
        '**Dekkingsbijdrage per stuk** = verkoopprijs − variabele kosten p.e. Het **break-evenpunt** is de afzet waarbij de totale dekkingsbijdrage precies de constante kosten dekt:\n\n`Break-even afzet = totale constante kosten ÷ (verkoopprijs − variabele kosten p.e.)`\n\n**Indifferentiepunt** — bij twee productiemethoden (*arbeidsintensief* = lage constante, hoge variabele kosten; *kapitaalintensief* = hoge constante, lage variabele kosten) snijden de kostenlijnen elkaar in het **indifferentiepunt**: de afzet waarbij beide methoden even duur zijn. Links daarvan is arbeidsintensief goedkoper, rechts kapitaalintensief.\n\n`Indifferentiepunt = (CF_kapitaal − CF_arbeid) ÷ (vc_arbeid − vc_kapitaal)`\n\nLigt het break-evenpunt van de kapitaalintensieve methode *rechts* van (hoger dan) het indifferentiepunt, dan ligt het break-evenpunt van de arbeidsintensieve méthode nóg verder rechts. **Speel met de schuifregelaars hieronder** om dit te zien.',
      formules: [
        'Dekkingsbijdrage p.e. = verkoopprijs − variabele kosten p.e.',
        'Break-even afzet = constante kosten ÷ dekkingsbijdrage p.e.',
        'Indifferentiepunt = (CF_kapitaal − CF_arbeid) ÷ (vc_arbeid − vc_kapitaal)',
        'Verkoopprijs (via VKC) = (perioderesultaat + constante kosten + variabele kosten verkopen) ÷ verkochte aantallen',
      ],
      voorbeelden: [
        {
          titel: 'Break-evenpunt berekenen',
          casus:
            'Verkoopprijs €58. Verwachte winst €2.000.000 bij omzet €14.500.000. Variabele kosten bij die omzet totaal €4.500.000. Bereken het break-evenpunt.',
          stappen: [
            'Totale afzet = €14.500.000 ÷ €58 = 250.000 stuks',
            'Variabele kosten p.e. = €4.500.000 ÷ 250.000 = €18',
            'Totale constante kosten = omzet − variabele kosten − winst = €14.500.000 − €4.500.000 − €2.000.000 = €8.000.000',
            'Break-even = €8.000.000 ÷ (€58 − €18) = €8.000.000 ÷ €40 = 200.000 stuks',
          ],
          antwoord: '200.000 producten',
        },
      ],
    },
  ],
  vragen: [
    {
      id: 'd2-afval-uitval',
      deel: 2,
      type: 'mc',
      stam: 'Planken €5.000, 10% afval bij verwerken; daarna 10% van de tafels afgekeurd (uitval). Bedrijfseconomische principes, waardering tegen werkelijke kosten. Deel R gaat rechtstreeks naar de resultatenrekening, rest B naar de balans (voorraad tafels). Welke stelling(en) kan/kunnen van toepassing zijn?\nA. R is minimaal €0 en maximaal €1.000.\nB. Als B = €4.500, kan de uitval geheel vermijdbaar zijn.',
      opties: [
        { id: 'a', tekst: 'A en B zijn juist' },
        { id: 'b', tekst: 'A is juist, B is onjuist' },
        { id: 'c', tekst: 'A is onjuist, B is juist' },
        { id: 'd', tekst: 'A en B zijn onjuist' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Vermijdbare afval/uitval = verspilling → naar resultatenrekening. Geheel vermijdbaar: max €500 (afval) + €450 (uitval op €4.500) = €950 naar R. Geheel onvermijdbaar: max €500 uitval naar R, €4.500 naar de balans (B). B=€4.500 hoort dus juist bij onvermijdbaar afval, niet bij geheel vermijdbare uitval — let goed op de exacte formulering van de officiële uitwerking.',
      hints: [
        'Splits in twee scenario’s: alles vermijdbaar vs. alles onvermijdbaar.',
        'Vermijdbaar → resultatenrekening. Onvermijdbaar → kostprijs eindproduct (balans).',
        'Reken: 10% van €5.000 = €500 afval; daarna 10% van €4.500 = €450 uitval.',
      ],
      bron: 'pdf',
      bronLabel: 'Tentamen 12-6-2025 — 31% goed',
      difficulty: 'berucht',
      scorePct: 31,
    },
    {
      id: 'd2-break-even',
      deel: 2,
      type: 'mc',
      stam: 'Verkoopprijs €58. Verwachte winst €2.000.000 bij omzet €14.500.000. Variabele kosten bij die omzet totaal €4.500.000. Het break-evenpunt bedraagt:',
      opties: [
        { id: 'a', tekst: '112.500 producten' },
        { id: 'b', tekst: '200.000 producten' },
        { id: 'c', tekst: '312.500 producten' },
      ],
      juistAntwoord: 'b',
      uitleg:
        'Antwoord b. Afzet = €14.500.000/€58 = 250.000. Variabele kosten p.e. = €4.500.000/250.000 = €18. Constante kosten = €14.500.000 − €4.500.000 − €2.000.000 = €8.000.000. Break-even = €8.000.000 / (€58 − €18) = 200.000.',
      hints: [
        'Bereken eerst de afzet (omzet ÷ prijs) en daarmee de variabele kosten per stuk.',
        'Constante kosten = omzet − variabele kosten − winst.',
        'Break-even = constante kosten ÷ dekkingsbijdrage per stuk.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.17',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd2-verkoopprijs-vkc',
      deel: 2,
      type: 'mc',
      stam: 'Noorderlicht BV (variabelekostencalculatie). Productie werkelijk 112.000, normaal 104.000, verkopen 100.000. Perioderesultaat €200.000. Constante kosten €650.000. Variabele kosten €13,50/stuk. Wat is de verkoopprijs per stuk?',
      opties: [
        { id: 'a', tekst: '€18,00' },
        { id: 'b', tekst: '€21,25' },
        { id: 'c', tekst: '€22,00' },
        { id: 'd', tekst: '€23,62' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Bij VKC: perioderesultaat €200.000 + constante kosten €650.000 = dekkingsbijdrage €850.000. Variabele kosten verkopen = 100.000 × €13,50 = €1.350.000. Omzet = €850.000 + €1.350.000 = €2.200.000. Verkoopprijs = €2.200.000 / 100.000 = €22,00. (Let op: bij VKC tellen alleen de verkochte aantallen voor de dekkingsbijdrage.)',
      hints: [
        'Bij VKC: perioderesultaat = totale dekkingsbijdrage − constante kosten.',
        'Werk terug naar de omzet en deel door de verkochte aantallen (100.000), niet de productie.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.16',
      difficulty: 'lastig',
    },
    {
      id: 'd2-normale-productie',
      deel: 2,
      type: 'mc',
      stam: 'Je verlaagt de normale productie. Gevolg: de integrale standaardkostprijs is gestegen. Welke conclusie trek je over de variabele kosten?',
      opties: [
        { id: 'a', tekst: 'De variabele kosten moeten progressief stijgend zijn.' },
        { id: 'b', tekst: 'De variabele kosten moeten degressief stijgend zijn.' },
        { id: 'c', tekst: 'De variabele kosten kunnen zowel progressief als degressief stijgend zijn.' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Lagere normale productie → hogere constante kosten per eenheid → hogere ISKP. Dat effect verklaart de stijging al; of de variabele kosten progressief of degressief zijn is dan niet relevant (en niet bepaalbaar).',
      hints: [
        'Wat gebeurt er met de constante-kostencomponent als de noemer (normale productie) daalt?',
        'De stijging is al volledig verklaard door de constante kosten per eenheid.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.13',
      difficulty: 'lastig',
    },
    {
      id: 'd2-overcapaciteit',
      deel: 2,
      type: 'mc',
      stam: 'Overcapaciteit door reservecapaciteit voor schoonmaak en onderhoud. De kosten daarvan zijn:',
      opties: [
        { id: 'a', tekst: 'rationeel en horen in de integrale standaardkostprijs thuis' },
        { id: 'b', tekst: 'rationeel, maar horen niet in de integrale standaardkostprijs thuis' },
        { id: 'c', tekst: 'irrationeel en horen in de integrale standaardkostprijs thuis' },
        { id: 'd', tekst: 'irrationeel, maar horen niet in de integrale standaardkostprijs thuis' },
      ],
      juistAntwoord: 'a',
      uitleg:
        'Antwoord a. Deze kosten zijn onvermijdbaar en daarom rationeel (geen verspilling). Rationele kosten horen thuis in de integrale standaardkostprijs.',
      hints: [
        'Is reservecapaciteit voor onderhoud vermijdbaar of onvermijdbaar?',
        'Onvermijdbaar = rationeel = hoort in de kostprijs.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.14',
      difficulty: 'gemiddeld',
    },
    {
      id: 'd2-eerste-periode',
      deel: 2,
      type: 'mc',
      stam: 'Eerste productieperiode, geen enkel product verkocht; proportioneel variabele + constante kosten, alle normaal. Tot zijn verbazing een positief perioderesultaat. Dat betekent dat de ondernemer:',
      opties: [
        { id: 'a', tekst: 'een rekenfout moet hebben gemaakt' },
        { id: 'b', tekst: 'de variabelekostencalculatie heeft toegepast' },
        { id: 'c', tekst: 'de integralestandaardkostprijsmethode heeft toegepast' },
        { id: 'd', tekst: 'beide methoden kan hebben toegepast' },
      ],
      juistAntwoord: 'c',
      uitleg:
        'Antwoord c. Bij VKC: geen opbrengsten maar wel alle constante kosten als last → negatief resultaat. Bij ISKP: geen transactieresultaat, maar wél een positief bezettingsresultaat mogelijk als er méér dan normaal is geproduceerd → positief perioderesultaat.',
      hints: [
        'Zonder verkopen: waar komt bij VKC het resultaat vandaan? En bij ISKP?',
        'Een positief bezettingsresultaat (meer dan normaal geproduceerd) kan alleen bij ISKP.',
      ],
      bron: 'pdf',
      bronLabel: 'Formatieve toets vr.15',
      difficulty: 'lastig',
    },
  ],
}
