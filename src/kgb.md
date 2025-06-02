---
theme: dashboard
title: Kindgebonden budget
toc: true
style: custom-style.css

---

```js
import {depDiagram} from "./dep-diagram.js"
```
	
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

::: caution
De analyse van het kindgebondenbudget is **nog niet** gevalideerd door vakinhoudelijk experts.
:::

# Definitie diagram

Onderstaand diagram geeft de namen van de definties en de
afhankelijkheden van andere definities weer. De namen linken naar de
relevante secties in het document.

```js

depDiagram()

```

# Invoergegevens

De volgende gegevens zijn nodig voor het berekenen van de hoogte van het KGB:
	
## AWIR partner

De ZT maakt gebruik van het partnerbegrip uit de Algemene wet
inkomensafhankelijke regelingen. Voor de ZT beschouwen wij dit als
een gegeven.

Het AWIR partnerbegrip is gebaseerd op het parnerbegrip uit de
belastingwet ([Artikel 5a Algemene wet inzake rijksbelastingen](https://wetten.overheid.nl/jci1.3:c:BWBR0002320&hoofdstuk=I&artikel=5a&z=2025-01-01&g=2025-01-01)).
Gehuwden, geregistreerd partners en mensen met een samenlevingscontract die op
hetzelfde adres wonen vallen onder het belastingwet partnerbegrip. Het
AWIR partnerbegrip is breder en omvat onder andere:

- Mensen die op hetzelfde adres ingeschreven staan en 
  - samen een kind hebben,
  - of samen een pensioenregeling hebben,
  - of samen een woning hebben, 
  - of het vorige jaar ook partner waren.
- Gehuwden / geregistreerd partners die niet op hetzelfde adres wonen
- Onderhuurders, au-pais en vluchtelingen uit oekraine die ingeschreven staan op hetzelfde adres worden niet als partner gezien. 

:::note
Dienst Toeslagen heeft een aparte [tool](https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/toeslagpartner)
voor het vaststellen van het partnerbegrip. Boven de tool worden enkele uitzonderingen tekstueel toegelicht die niet in de tool zijn meegenomen.

Voor een integrale proefberekening is deze tool niet afdoende. De IIT
van Amsterdam gebruikt bijvoorbeeld het begrip gezamenlijk huishouden,
een begrip met veel overlap met het awir partnerbegrip. Dat vraagt om
een analyse van deze verschillende begrippen om met zo weinig mogelijk
vragen tot een zo goed mogelijk advies te komen.
:::

## Dezelfde partner tijdens berekeningsjaar

Naam
: **dezelfde partner tijdens berekeningsjaar**

Type
: ja / nee

Bron
: [Artikel 1, vierde lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)

::: warning
In de proefberekening van Dienst Toeslagen wordt **niet** gevraagd of
de aanvrager het hele berekeningsjaar dezelfde partner heeft voor het
bepalen van de hoogte van het vermogen.
:::

## Leeftijden kinderen met kinderbijslag

Het KGB is van toepassing voor kinderen voor wie kinderbijslag wordt ontvangen.

::: warning

Alleen de ouder die kinderbijslag voor het kind
ontvangt heeft recht op KGB. Dit is relevant voor gescheiden ouders.
:::

::: note

Wij maken voor de berekening nu gebruik van
leeftijden, waarbij we veronderstellen dat de aanvragende ouder
kinderbijslag ontvangt. Dit moet expliciet worden uitgevraagd.  De
berekening moet worden gedaan op geboortedatums: er is recht op KGB na
de maand na geboorte tot en met de maand van 18 worden.
:::

Naam
: **Leeftijden kinderen met kinderbijslag**

Type
: lijst met getallen

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


Buitenlands inkomen dat niet in Nederland wordt belast wordt ook in
aanmerking genomen voor het toetsingsinkomen [Artikel 8, tweede lid,
van de Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)

::: warning

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

:::

Naam
: **Toetsingsinkomen**

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

:::warning

In lid 3 en 4 van artikel 8 wordt de mogelijkheid gegeven om het
inkomen van de partner of medebewoner na beeindiging van het partner-
of medebewonerschap niet mee te tellen voor het toetsingsinkomen als
dit tot verlaging van het toetsingsinkomen van minimaal 10% zorgt. Dit
op verzoek van de belanghebbende. Dit wordt niet meegenomen in de
proefberekening van Dienst Toeslagen.

:::

Naam
: **Toetsingsinkomen partner**

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
: **rendementsgrondslag**

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
: **KGB hoogte**

Definitie
: (::De som van:: [KGB per kind](#kgb-per-kind) ::voor:: [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag) \
  ::plus:: [KGB toevoeging geen partner](#kgb-toevoeging-geen-partner)) \
  ::min::
  (7,1 ::procent van:: ([toetsingsinkomen](#toetsingsinkomen) ::min:: [drempelinkomen](#drempelinkomen)))

Voorwaarde
: [AWIR partner](#awir-partner) ::is onwaar:: \
  ::en:: \
  [toetsingsinkomen](#toetsingsinkomen) ::groter dan:: [drempelinkomen](#drempelinkomen) \
  ::en:: \
  [rendementsgrondslag](#rendementsgrondslag) ::kleiner dan:: [rendementsgrondslag-norm](#rendementsgrondslag-norm)

Bron
: [Artikel 2, zevende lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

Brontekst
: *Bij een toetsingsinkomen van de ouder die geen partner heeft, van
  meer dan het drempelinkomen wordt de som van de bedragen waarop
  recht bestaat op grond van het tweede, vierde, vijfde en zesde lid
  verminderd met 7,10% van het verschil tussen het toetsingsinkomen en
  het drempelinkomen.*

&nbsp;

Naam
: **KGB hoogte**

Definitie
: ::De som van:: [KGB per kind](#kgb-per-kind) ::voor:: [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)\
  ::plus::  [KGB toevoeging geen partner](#kgb-toevoeging-geen-partner)

Voorwaarde
: [AWIR partner](#awir-partner) ::is onwaar:: \
  ::en:: \
  [toetsingsinkomen](#toetsingsinkomen) ::kleiner of gelijk aan:: [drempelinkomen](#drempelinkomen) \
  ::en:: \
  [rendementsgrondslag](#rendementsgrondslag) ::kleiner dan:: [rendementsgrondslag-norm](#rendementsgrondslag-norm)

:::note

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, zevende lid.
Het tweede, vierde, vijfde en zesde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
:::

Naam
: **KGB hoogte**

Definitie
: ::De som van:: [KGB per kind](#kgb-per-kind) ::voor:: [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag) \
  ::min::
  7,1 ::procent van:: \
  ([toetsingsinkomen](#toetsingsinkomen) ::min:: ([drempelinkomen](#drempelinkomen) ::plus:: 9139 ))


Voorwaarde
: [AWIR partner](#awir-partner) ::is waar:: \
  ::en:: \
  [toetsingsinkomen](#toetsingsinkomen) ::groter dan:: ([drempelinkomen](#drempelinkomen) ::plus:: 9139 ) \
  ::en:: \
  [rendementsgrondslag](#rendementsgrondslag) ::kleiner dan:: [rendementsgrondslag-norm](#rendementsgrondslag-norm)
		

Bron
: [Artikel 2, achtste lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

Brontekst
: *Bij een gezamenlijk toetsingsinkomen van de ouder en zijn partner
  van meer dan het met € 9.139,00 verhoogde drempelinkomen wordt de
  som van de bedragen waarop recht bestaat op grond van het tweede,
  vierde en vijfde lid verminderd met 7,10% van het verschil tussen
  het gezamenlijk toetsingsinkomen en het met € 9.139,00 verhoogde
  drempelinkomen*

&nbsp;


Naam
: **KGB hoogte**

Definitie
: ::De som van:: [KGB per kind](#kgb-per-kind) ::voor:: [leeftijden kinderen met kinderbijslag](#leeftijden-kinderen-met-kinderbijslag)

Voorwaarde
: [AWIR partner](#awir-partner) ::is waar:: \
  ::en:: \
   [toetsingsinkomen](#toetsingsinkomen) ::kleiner of gelijk aan:: ([drempelinkomen](#drempelinkomen) ::plus:: 9139 ) \
  ::en:: \
  [rendementsgrondslag](#rendementsgrondslag) ::kleiner dan:: [rendementsgrondslag-norm](#rendementsgrondslag-norm)
  
  
:::note

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, achtste lid.
Het tweede, vierde en vijfde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
:::

Naam
: **KGB hoogte**

Standaardwaarde
: 0

## KGB per kind

Naam
: **KGB per kind**

Definitie
: 	[KGB basis](#kgb-basis) ::plus:: [KGB leeftijdafhankelijk](#kgb-leeftijdafhankelijk)

## KGB basis

Naam
: **KGB basis**

Definitie
: 2511

Voorwaarde
: [leeftijd](#leeftijd) ::kleiner dan:: 18

Standaardwaarde
: 0

Bron
: [Artikel 2, tweede lid van de  Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

## KGB leeftijdafhankelijk

Naam
: **KGB leeftijdafhankelijk**

Definitie
: 703

Voorwaarde
: [leeftijd](#leeftijd) ::groter of gelijk aan:: 12 \
  ::en:: \
  [leeftijd](#leeftijd) ::kleiner dan:: 16

Bron
: [Artikel 2, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: **KGB leeftijdafhankelijk**

Definitie
: 936

Voorwaarde
: [leeftijd](#leeftijd) ::groter of gelijk aan:: 16 \
  ::en::\
  [leeftijd](#leeftijd) ::kleiner of gelijk aan:: 17

Bron
: [Artikel 2, vijfde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: **KGB leeftijdafhankelijk**

Standaardwaarde
: 0

## KGB toevoeging geen partner

Naam
: **KGB toevoeging geen partner**

Definitie
: 3389

Voorwaarde
: [AWIR partner](#awir-partner) ::is niet waar::

Standaardwaarde
: 0

Bron
: [Artikel 2, zesde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01)

## Rendementsgrondslag norm

Naam
: **rendementsgrondslag-norm**

Definitie
: 141896

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is niet waar::

Bron
: [Artikel 1, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)

&nbsp;

Naam
: **rendementsgrondslag-norm**

Definitie
: 179429

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is waar::

Bron
: [Artikel 1, vierde lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)


## Drempelinkomen

Naam
: **drempelinkomen**

Definitie
: 108 ::procent van:: 12 ::maal:: [minimumloon per maand](#minimumloon-per-maand)

Bron
: [Artikel 1, eerste lid van de Wet op het kindgebonden budget](https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01)


## Minimumloon per maand

Naam
: **minimumloon per maand**

Definitie
: 2191,80

Geldigheidsdatum
: 1 januari 2025

Bron
: [Artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag](https://wetten.overheid.nl/jci1.3:c:BWBR0002638&hoofdstuk=II&artikel=8&z=2025-01-01&g=2025-01-01)
