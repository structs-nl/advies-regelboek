---
theme: dashboard
title: Kindgebonden budget
toc: true
style: custom-style.css

---
	
# Kindgebonden budget

Geldigheidsdatum
: 1 januari 2025

Bron
: [Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&z=2025-01-01&g=2025-01-01)


In dit document beschrijven we de definities van het kindgebonden
budget (KGB). Dit is een regeling van het ministerie van Sociale Zaken
en Werkgelegenheid. Dienst Toeslagen (ministerie van financieen) is
belast met de uitvoering van de regeling.

Met deze definities en de benodigde invoergegevens kan een berekening
worden gemaakt van een **mogelijk recht** en de **hoogte** van het
KGB.

<div class="caution">
De analyse van het kindgebondenbudget is <strong>nog niet</strong> gevalideerd door vakinhoudelijk experts.
</div>

&nbsp;

# Invoergegevens

De volgende gegevens zijn nodig voor het berekenen van de hoogte van het KGB:

## AWIR partner

Het KGB maakt gebruik van het partnerbegrip uit de Algemene wet
inkomensafhankelijke regelingen. Voor het KGB beschouwen wij dit als
een gegeven.

<div class="note">

Dienst Toeslagen heeft een aparte <a
href="https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/toeslagpartner">tool</a>
voor het vaststellen van het partnerbegrip.  Het is mogelijk om de
condities van dit partnerbegrip expliciet te maken in een aparte
sectie.

</div>

Naam
: AWIR partner

Type
: ja / nee

Geldigheidsdatum
: 1 januari 202

Bron
: [Artikel 3 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=2&artikel=3&z=2025-01-01&g=2025-01-01)


## Dezelfde partner tijdens berekeningsjaar

Naam
: dezelfde partner tijdens berekeningsjaar

Type
: ja / nee

Bron
: [Artikel 1, vierde lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)


<div class="warning">

In de proefberekening van Dienst Toeslagen wordt **niet** gevraagd of
de aanvrager het hele berekeningsjaar dezelfde partner heeft voor het
bepalen van de hoogte van het vermogen. Moeten wij deze fijnmazigheid
meenemen?

</div>


## Leeftijden kinderen met kinderbijslag


Het KGB is van toepassing voor kinderen voor wie kinderbijslag wordt ontvangen.

<div class="warning"> Alleen de ouder die kinderbijslag voor het kind
ontvangt heeft recht op KGB. Dit is relevant voor gescheiden ouders.
</div>

<div class="note"> Wij maken voor de berekening nu gebruik van
leeftijden, waarbij we veronderstellen dat de aanvragende ouder
kinderbijslag ontvangt. Dit moet expliciet worden uitgevraagd.  De
berekening moet worden gedaan op geboortedatums: er is recht op KGB na
de maand na geboorte tot en met de maand van 18 worden. Dit passen we
nog aan. </div>


Naam
: Leeftijden kinderen

Type
: lijst met getallen (leeftijden)

Bron
: [Artikel 2, eerste lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)\
  [Artikel 2, tiende lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)


## Toetsingsinkomen

Het inkomen van de aanvrager. In het geval van een toeslagpartner gaat het om het gezamenlijk inkomen van partner en aanvrager.

**TODO: volgt dit uit de definitie van kgb of van awir? In het eerste geval: een apart toetsingsinkomen voor de partner introduceren**

Naam
: Toetsingsinkomen

Type
: Bedrag

Bron
: [Artikel 8 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)


## Rendementsgrondslag

De rendementsgrondslag (het vermogen) is de waarde van de bezittingen
verminderd met de waarde van de schulden, zoals gedefinierd in de Wet
op de inkomstenbelasting. Daarbij mag de aftrekpost op groene
investeringen echter niet mee worden genomen.


Naam
: rendemengsgrondslag

Type
: Bedrag

Bron
: [Artikel 1, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)\
  [Artikel 5.3 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.1&artikel=5.3&z=2025-03-15&g=2025-03-15)\
  [Artikel 5.13 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.3&artikel=5.13&z=2025-03-15&g=2025-03-15)


# Definities

De definities met afhankelijkheden van invoergegevens en/of andere definities.

## KGB hoogte


Naam
: KGB hoogte

Definitie
: (<span class="operator">De som van</span> [KGB per kind](#kgb-per-kind) <span class="operator">voor</span> [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)
  <br/><span class="operator">plus</span> [KGB toevoeging geen partner](#kgb-toevoeging-geen-partner))<br/>
  <span class="operator">min</span>
  7,1 <span class="operator">procent van</span> [toetsingsinkomen](#toetsingsinkomen) <span class="operator">min</span> [drempelinkomen](#drempelinkomen)


Voorwaarde
: [AWIR partner](#awir-partner) <span class="operator">is onwaar</span>
  <br/><span class="operator">en</span><br/>
  [toetsingsinkomen](#toetsingsinkomen) <span class="operator"> groter dan</span> [drempelinkomen](#drempelinkomen)
  <br/><span class="operator">en</span><br/>
  [rendementsgrondslag](#rendementsgrondslag) <span class="operator">kleiner dan</span> [rendementsgrondslag-norm](#rendementsgrondslag-norm)

Bron
: [Artikel 2, zevende lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

Brontekst
: <i>Bij een toetsingsinkomen van de ouder die geen partner heeft, van meer dan het drempelinkomen wordt de som van de bedragen waarop recht bestaat op grond van het tweede, vierde, vijfde en zesde lid verminderd met 7,10% van het verschil tussen het toetsingsinkomen en het drempelinkomen.</i>

&nbsp;

Naam
: KGB hoogte

Definitie
: <span class="operator">De som van</span> [KGB per kind](#kgb-per-kind) <span class="operator">voor</span> [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)
  <br/><span class="operator">plus</span>  [KGB toevoeging geen partner](#kgb-toevoeging-geen-partner)

Voorwaarde
: [AWIR partner](#awir-partner) <span class="operator">is onwaar</span>
  <br/><span class="operator">en</span><br/>
  [toetsingsinkomen](#toetsingsinkomen) <span class="operator"> kleiner of gelijk aan</span> [drempelinkomen](#drempelinkomen)
  <br/><span class="operator">en</span><br/>
  [rendementsgrondslag](#rendementsgrondslag) <span class="operator">kleiner dan</span> [rendementsgrondslag-norm](#rendementsgrondslag-norm)

<div class="note">

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, zevende lid.
Het tweede, vierde, vijfde en zesde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
</div>

Naam
: KGB hoogte

Definitie
: <span class="operator">De som van</span> [KGB per kind](#kgb-per-kind) <span class="operator">voor</span> [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)
  <br/><span class="operator">min</span>
  7,1 <span class="operator">procent van</span> [toetsingsinkomen](#toetsingsinkomen) <br/><span class="operator">min</span> [drempelinkomen](#drempelinkomen)<span class="operator">plus</span> 9139 </a>


Voorwaarde
: [AWIR partner](#awir-partner) <span class="operator">is waar</span>
  <br/><span class="operator">en</span><br/>
  [toetsingsinkomen](#toetsingsinkomen) <span class="operator"> groter dan</span> ([drempelinkomen](#drempelinkomen) <span class="operator">plus</span> 9139 )
  <br/><span class="operator">en</span><br/>
  [rendementsgrondslag](#rendementsgrondslag) <span class="operator">kleiner dan</span> [rendementsgrondslag-norm](#rendementsgrondslag-norm)
		

Bron
: [Artikel 2, achtste lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

Brontekst
: <i>Bij een gezamenlijk toetsingsinkomen van de ouder en zijn partner van meer dan het met € 9.139,00 verhoogde drempelinkomen wordt de som van de bedragen waarop recht bestaat op grond van het tweede, vierde en vijfde lid verminderd met 7,10% van het verschil tussen het gezamenlijk toetsingsinkomen en het met € 9.139,00 verhoogde drempelinkomen</i>

&nbsp;


Naam
: KGB hoogte

Definitie
: <span class="operator">De som van</span> [KGB per kind](#kgb-per-kind) <span class="operator">voor</span> [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)

Voorwaarde
: [AWIR partner](#awir-partner) <span class="operator">is waar</span>
  <br/><span class="operator">en</span><br/>
   [toetsingsinkomen](#toetsingsinkomen) <span class="operator"> kleiner of gelijk aan</span> ([drempelinkomen](#drempelinkomen) <span class="operator">plus</span> 9139 )
  <br/><span class="operator">en</span><br/>
  [rendementsgrondslag](#rendementsgrondslag) <span class="operator">kleiner dan</span> [rendementsgrondslag-norm](#rendementsgrondslag-norm)
  
  
<div class="note">

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, achtste lid.
Het tweede, vierde en vijfde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
</div>

Naam
: KGB hoogte

Standaardwaarde
: 0

## KGB per kind

Naam
: KGB per kind

Definitie
: 	[KGB basis](#kgb-basis) <span class="operator">plus</span> [KGB leeftijdafhankelijk](#kgb-leeftijdafhankelijk)

## KGB basis

Naam
: KGB basis

Definitie
: 2511

Voorwaarde
: [leeftijd](#leeftijd) <span class="operator">kleiner dan</span> 18

Standaardwaarde
: 0

Bron
: [Artikel 2, tweede lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

<div class="note">
Het is onduidelijk waarom art 2, tweede lid is opgesplitst in onderdeel a en b: voor ieder kind is her hetzelfde basisbedrag
</div>

## KGB leeftijdafhankelijk

Naam
: KGB leeftijdafhankelijk

Definitie
: 703

Voorwaarde
: [leeftijd](#leeftijd) <span class="operator">groter of gelijk aan</span> 12 <span class="operator"><br/>en<br/></span> [leeftijd](#leeftijd) <span class="operator">kleiner dan</span> 16

Bron
: [Artikel 2, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: KGB leeftijdafhankelijk

Definitie
: 936

Voorwaarde
: [leeftijd](#leeftijd) <span class="operator">groter of gelijk aan</span> 16 <span class="operator"><br/>en<br/></span> [leeftijd](#leeftijd) <span class="operator">kleiner of gelijk aan</span> 17

Bron
: [Artikel 2, vijfde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: KGB leeftijdafhankelijk

Standaardwaarde
: 0


## KGB toevoeging geen partner

Naam
: KGB toevoeging geen partner

Definitie
: 3389

Voorwaarde
: [AWIR partner](#awir-partner) <span class="operator">is niet waar</span>

Standaardwaarde
: 0

Bron
: [Artikel 2, zesde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)


## Rendementsgrondslag norm

Naam
: rendementsgrondslag-norm

Definitie
: 141896

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) <span class="operator">is niet waar</span>

Bron
: [Artikel 1, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: rendementsgrondslag-norm

Definitie
: 179429

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) <span class="operator">is waar</span>

Bron
: [Artikel 1, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)


## Drempelinkomen

Naam
: drempelinkomen

Definitie
: 108 <span class="operator">procent </span> van 12 <span class="operator">maal</span> [minimumloon per maand](#minimumloon-per-maand)

Bron
: [Artikel 1, eerste lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)


## Minimumloon per maand

Naam
: minimumloon per maand

Definitie
: 2191,80

Geldigheidsdatum
: 1 januari 2025

Bron
: [Artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag](https://wetten.overheid.nl/jci1.3:c:BWBR0002638&hoofdstuk=II&artikel=8&z=2025-01-01&g=2025-01-01)
