# MA BDK — Tentamenvoorbereiding

Interactieve oefenapp voor het tentamen **Management Accounting BDK** (EBP026A05, Rijksuniversiteit Groningen).

De stof is opgesplitst in de 7 officiële delen, met de zwaarste delen eerst en een geschat
percentage van het tentaamengewicht per deel. Per deel leer je eerst de **theorie en
rekenvoorbeelden**, en toets je jezelf daarna met **echte oude tentamenvragen** (met hints en
volledige uitleg). Hintgebruik en scores worden onthouden; aan het eind krijg je advies op welk
deel je je het eerst moet richten.

## Functies
- 7 delen, gesorteerd op geschat tentamengewicht (datagedreven uit het aantal echte vragen per deel).
- Theorie + uitklapbare, stap-voor-stap uitgewerkte rekenvoorbeelden.
- Oefenvragen met **hint-knoppen** (oplopende hints); hintgebruik wordt onthouden.
- Voortgang opgeslagen in de browser (`localStorage`).
- Difficulty-labels o.b.v. de werkelijke slagingsscores van oude tentamenvragen.
- Toggle om naast de echte vragen ook **zelfgemaakte extra oefenvragen** te tonen.
- Resultatenscherm met een concreet **"focus eerst op"-advies**.

## Lokaal draaien (development)
```bash
cd app
npm install
npm run dev
```
Open de URL die Vite toont (standaard http://localhost:5173).

## Productie / web (Docker)
Vanuit de repo-root:
```bash
docker compose up -d --build
```
De app draait dan op **http://localhost:8080** (nginx serveert de gebouwde statische app, met
SPA-fallback zodat herladen geen 404 geeft). Stoppen: `docker compose down`.

Wil je hem op een server op het web ontsluiten, zet dan een reverse proxy (bijv. Caddy/Traefik/nginx)
vóór poort 8080 met TLS.

## Structuur
```
compose.yaml            # docker compose (poort 8080)
app/
  Dockerfile            # multi-stage: node build -> nginx
  nginx.conf            # SPA-fallback
  src/
    content/            # theorie + vragen per deel (deel1..7) + zelfgemaakt
    components/         # Dashboard, Theorie, Quiz, Resultaten, ui/ (design-system)
    hooks/useProgress   # voortgang in localStorage
    lib/stats           # focus-advies berekening
    styles/tokens.css   # design tokens
```

## Let op
- De bron-PDF's en samenvattingen van de cursus worden **niet** meegeleverd in deze repo
  (privé/auteursrechtelijk lesmateriaal — zie `.gitignore`). De app bevat alleen getranscribeerde
  oefenvragen en theorie.
- De %-gewichten per deel zijn een **schatting**; er bestaat geen officiële verdeling.
