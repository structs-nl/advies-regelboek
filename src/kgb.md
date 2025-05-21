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

De ZT maakt gebruik van het partnerbegrip uit de Algemene wet
inkomensafhankelijke regelingen. Voor de ZT beschouwen wij dit als
een gegeven.

Het AWIR partnerbegrip is gebaseerd op het parnerbegrip uit de belastingwet ([Artikel 5a Algemene wet inzake rijksbelastingen](https://wetten.overheid.nl/jci1.3:c:BWBR0002320&hoofdstuk=I&artikel=5a&z=2025-01-01&g=2025-01-01)). Gehuwden, geregistreerd partners en mensen met een samenlevingscontract die op hetzelfde adres wonen vallen onder het belastingwet partnerbegrip. Een deel van het jaar belastingwet partner zijn betekent het hele jaar belastingwet partner zijn. Het AWIR partnerbegrip is breder en omvat onder andere: mensen die op hetzelfde adres ingeschreven staan en samen een kind hebben, of samen een pensioenregeling hebben, of samen een woning hebben, of het vorige jaar ook partner waren. Onderhuurders, au-pais en vluchtelingen uit oekraine die ingeschreven staan op hetzelfde adres worden niet als partner gezien. Gehuwden / geregistreerd partners die niet op hetzelfde adres wonen worden wel als partner voor de AWIR gezien.

<div class="note">

Dienst Toeslagen heeft een aparte <a
href="https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/toeslagpartner">tool</a>
voor het vaststellen van het partnerbegrip. Boven de tool worden enkele uitzonderingen tekstueel toegelicht die niet in de tool zijn meegenomen.

Voor een integrale proefberekening is deze tool niet afdoende. Andere regelingen gebruiken andere partnerbegrippen. De IIT van Amsterdam gebruikt bijvoorbeeld het begrip gezamenlijk huishouden, een begrip met veel overlap met het awir partnerbegrip. Wij hebben in de huidige versie nog geen analyse gemaakt van deze condities. Dat zou wel de eerstvolgende stap kunnen zijn.

</div>

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
bepalen van de hoogte van het vermogen.
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

Het relevante inkomen van de aanvrager, zoals gedefinieerd in de
Algemene wet inkomensafhankelijke regelingen. Het toetsingsinkomen is
gebaseerd op het inkomensgegeven uit
[Artikel 21, onderdeel e van de Algemene wet inzake rijksbelastingen](https://wetten.overheid.nl/jci1.3:c:BWBR0002320&hoofdstuk=IVA&artikel=21&z=2025-01-01&g=2025-01-01).
Dit inkomensgegeven is het belastbare loon in het geval er geen aangifte
inkomstenbelating wordt gedaan. Als er wel aangifte wordt gedaan, dan
is het inkomensgegeven het verzamelinkomen, zoals gedefinieerd in
[Artikel 2.18 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=2&afdeling=2.5&artikel=2.18&z=2025-01-01&g=2025-01-01).


Buitenlands inkomen dat niet in Nederland wordt belast wordt ook in aanmerking genomen voor het toetsingsinkomen
[Artikel 8, tweede lid, van de Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)

<div class="warning">

Bij de proefberekening van Dienst Toeslagen is een *tool* opgenomen
voor het vaststellen van het toetsingsinkomen. Hier wordt met een
flink aantal vragen een schatting gemaakt van het
inkomensgegeven. Niet belast buitenlands inkomen wordt hier **niet**
in uitgevraagd. Ook met de vele vragen die worden gesteld is de tool
een toenadering van het inkomensgegeven: veel relevante
aftrekposten. Inkomen uit box 2 of 3 (aanmerkelijk belang of vermogen)
worden ook niet uitgevraagd.

In de huidie versie van onze analyse beschouwen we het inkomensgegeven
als een "gegeven".  Het lijkt wel relevant om het inkomensgegeven en
het daarop gebaseerde toetsingsinkomen verder te specificeren, onder
andere voor mensen met meerdere banen, kleine ondernemers, ect.

</div>

Naam
: Toetsingsinkomen

Type
: Bedrag

Bron
: [Artikel 8 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)


## Toetsingsinkomen partner

Het toetsingsinkomen partner wordt op dezelfde wijze vastgesteld als
het toetsingsinkomen. Bij het berekenen van de hoogte van de
zorgtoeslag wordt ook dit bedrag meegenomen in de berekening. Alle
opmerkingen die relevant zijn voor het toetsingsinkomen zijn ook voor
het toetsingsinkomen partner van toepassing.

<div class="warning">

In lid 3 en 4 van artikel 8 wordt de mogelijkheid gegeven om het inkomen van de partner of medebewoner na beeindiging van het partner- of medebewonerschap niet mee te tellen voor het toetsingsinkomen als dit tot verlaging van het toetsingsinkomen van minimaal 10% zorgt. Dit op verzoek van de belanghebbende. Dit wordt niet meegenomen in de proefberekening van Dienst Toeslagen.

</div>


Naam
: Toetsingsinkomen partner

Type
: Bedrag

Bron
: [Artikel 8 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)


## Rendementsgrondslag

De rendementsgrondslag (het vermogen) is de waarde van de bezittingen
verminderd met de waarde van de schulden, zoals gedefinierd in de Wet
op de inkomstenbelasting. Daarbij mag de aftrekpost op groene
investeringen echter niet mee worden genomen.


xNaam
: rendementsgrondslag

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
