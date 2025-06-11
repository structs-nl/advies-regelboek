---
theme: dashboard
title: Zorgtoeslag
toc: true
style: custom-style.css
---

```js
import {depDiagram} from "./dep-diagram.js"
```

# Zorgtoeslag

Geldigheidsdatum
: 1 januari 2025

Bron
: [Wet op de zorgtoeslag](https://wetten.overheid.nl/jci1.3:c:BWBR0018451&z=2025-01-01&g=2025-01-01)

In dit document beschrijven we de definities van de zorgtoeslag
(ZT). Dit is een regeling van het ministerie van Volksgezondheid,
Welzijn en Sport. Dienst Toeslagen (ministerie van financieen) is
belast met de uitvoering van de regeling.

Met deze definities en de benodigde invoergegevens kan een berekening
worden gemaakt van een **mogelijk recht** en de **hoogte** van de ZT.

::: caution
De analyse van de zorgtoeslag is **nog
niet** gevalideerd door vakinhoudelijk experts.
:::

# Definitie diagram

Onderstaand diagram geeft de namen van de definties en de
afhankelijkheden van andere definities weer. De namen linken naar de
relevante secties in het document.


```js

depDiagram()

```

# Invoergegevens

De volgende gegevens zijn nodig voor het berekenen van de hoogte van de ZT:

## Zorgverzekering

Type
: ja / nee

Bron
: [Artikel 1, eerste lid, onderdeel c  van de wet op de zorgtoeslag](https://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&z=2025-01-01&g=2025-01-01)
	
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
- Onderhuurders, au-pais en vluchtelingen uit oekraine die ingeschreven staan op hetzelfde adres worden niet als partner gezien. 
	
::: note
Dienst Toeslagen heeft een aparte [tool](https://www.belastingdienst.nl/wps/wcm/connect/nl/toeslagen/content/toeslagpartner)
voor het vaststellen van het partnerbegrip. Boven de tool worden enkele uitzonderingen tekstueel toegelicht die niet in de tool zijn meegenomen.

Voor een integrale proefberekening is deze tool niet afdoende. Andere regelingen gebruiken andere partnerbegrippen. De IIT van Amsterdam gebruikt bijvoorbeeld het begrip gezamenlijk huishouden, een begrip met veel overlap met het awir partnerbegrip. Wij hebben in de huidige versie nog geen analyse gemaakt van deze condities.
:::

Naam
: **AWIR partner**

Type
: ja / nee

Geldigheidsdatum
: 1 januari 20225

Bron
: [Artikel 3 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=2&artikel=3&z=2025-01-01&g=2025-01-01)


## Partner heeft zorgverzekering

Naam
: **Partner heeft zorgverzekering**

Type
: ja / nee

Voorwaarde
: [AWIR partner](#awir-partner) ::is waar::

Bron
: [Artikel 2, vierde lid van de wet op de zorgtoeslag](https://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&z=2025-01-01&g=2025-01-01)

## Dezelfde partner tijdens berekeningsjaar

Naam
: **Dezelfde partner tijdens berekeningsjaar**

Type
: ja / nee

Voorwaarde
: [AWIR partner](#awir-partner) ::is waar::

Bron
: [Artikel 3 eerste lid Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)

::: warning
In de proefberekening van Dienst Toeslagen wordt **niet** gevraagd of
de aanvrager het hele berekeningsjaar dezelfde partner heeft voor het
bepalen van de hoogte van het vermogen.
:::

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
Bij de proefberekening van Dienst Toeslagen is een *tool*
opgenomen voor het vaststellen van het toetsingsinkomen. Hier wordt
met een flink aantal vragen een schatting gemaakt van het
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

::: warning
In lid 3 en 4 van artikel 8 wordt de mogelijkheid gegeven
om het inkomen van de partner of medebewoner na beeindiging van het
partner- of medebewonerschap niet mee te tellen voor het
toetsingsinkomen als dit tot verlaging van het toetsingsinkomen van
minimaal 10% zorgt. Dit op verzoek van de belanghebbende. Dit wordt
niet meegenomen in de proefberekening van Dienst Toeslagen.
:::

Naam
: **Toetsingsinkomen partner**

Type
: Bedrag

Voorwaarde
: [AWIR partner](#awir-partner) ::is waar::

Bron
: [Artikel 8 Algemene wet inkomensafhankelijke regelingen](https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01)

## Rendementsgrondslag

De rendementsgrondslag (het vermogen) is de waarde van de bezittingen
verminderd met de waarde van de schulden, zoals gedefinierd in de Wet
op de inkomstenbelasting. Daarbij mag de aftrekpost op groene
investeringen echter niet mee worden genomen. Deze vraag stellen wij
nu niet expliciet. zoals in de proefberekening van Dienst Toeslagen.

Naam
: **Rendementsgrondslag**

Type
: Bedrag

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)\
  [Artikel 5.3 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.1&artikel=5.3&z=2025-03-15&g=2025-03-15)\
  [Artikel 5.13 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.3&artikel=5.13&z=2025-03-15&g=2025-03-15)
  
  
## Rendementsgrondslag partner

De rendementsgrondslag (het vermogen) is de waarde van de bezittingen
verminderd met de waarde van de schulden, zoals gedefinierd in de Wet
op de inkomstenbelasting. Daarbij mag de aftrekpost op groene
investeringen echter niet mee worden genomen. Deze vraag stellen wij
nu niet expliciet. zoals in de proefberekening van Dienst Toeslagen.

Naam
: **Rendementsgrondslag partner**

Type
: Bedrag

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)\
  [Artikel 5.3 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.1&artikel=5.3&z=2025-03-15&g=2025-03-15)\
  [Artikel 5.13 Wet inkomstenbelasting 2001](https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.3&artikel=5.13&z=2025-03-15&g=2025-03-15)


# Definities

De definities met afhankelijkheden van invoergegevens en/of andere definities.

## ZT hoogte

Naam
: **ZT hoogte**

Definitie
: [standaardpremie](#standaardpremie) ::min:: [normpremie](#normpremie)

Voorwaarde

: [zorgverzekering](#zorgverzekering) ::is waar:: \
  ::en:: \
  [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is onwaar:: \
  ::en:: \
  [normpremie](#normpremie) ::kleiner dan:: [standaardpremie](#standaardpremie) \
  ::en:: \
  [rendementsgrondslag som](#rendementsgrondslag-som)  ::kleiner dan:: [rendementsgrondslag norm](#rendementsgrondslag-norm)
  
Bron
: [Artikel 2, eerste lid, van de Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&lid=1)

Brontekst
: *Indien de normpremie voor een verzekerde in het berekeningsjaar
  minder bedraagt dan de standaardpremie in dat jaar, heeft de
  verzekerde aanspraak op een zorgtoeslag ter grootte van dat
  verschil.*

&nbsp;

Naam
: **ZT hoogte**

Definitie
:  (2 ::maal:: [standaardpremie](#standaardpremie)) ::min:: [normpremie](#normpremie)

Voorwaarde

: [zorgverzekering](#zorgverzekering) ::is waar:: \
  ::en:: \
  [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is waar:: \
  ::en:: \
  [normpremie](#normpremie) ::kleiner dan:: (2 ::maal:: [standaardpremie](#standaardpremie)) \
  ::en:: \
  [rendementsgrondslag som](#rendementsgrondslag-som) ::kleiner dan:: [rendementsgrondslag norm](#rendementsgrondslag-norm)
  
Bron
: [Artikel 2, eerste lid, van de Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&lid=1)  
  

Brontekst
: *Indien de normpremie voor een verzekerde in het berekeningsjaar
  minder bedraagt dan de standaardpremie in dat jaar, heeft de
  verzekerde aanspraak op een zorgtoeslag ter grootte van dat
  verschil. Voor een verzekerde met een partner wordt daarbij tweemaal
  de standaardpremie in aanmerking genomen; in dat geval worden de
  verzekerde en zijn partner voor de toepassing van deze wet geacht
  gezamenlijk één aanspraak te hebben.*

&nbsp;

Naam
: **ZT hoogte**

Standaardwaarde
: 0

## ZT Hoogte per maand

Naam
: **ZT Hoogte per maand**

Definitie
: [ZT Hoogte](#zt-hoogte) / 12


## Normpremie

Naam
: **Normpremie**

Definitie
: 4.273 ::procent van:: [drempelinkomen](#drempelinkomen) \
  ::plus:: \
  13,7 ::procent van:: [toetsingsinkomen boven drempelinkomen](#toetsingsinkomen-boven-drempelinkomen) 

Voorwaarde
: [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is waar::

Bron
: [Artikel 2, derde lid, van de Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&lid=3)

Brontekst
: *De percentages worden voor verzekerden met een partner vastgesteld
  op 4,273% van het drempelinkomen, vermeerderd met 13,700% van het
  toetsingsinkomen voor zover dat boven het drempelinkomen uitgaat[..]*
  
&nbsp;

Naam
: **Normpremie**

Definitie
: 1,896 ::procent van:: [drempelinkomen](#drempelinkomen) \
  ::plus:: \
  13,7 ::procent van:: [toetsingsinkomen boven drempelinkomen](#toetsingsinkomen-boven-drempelinkomen)
  
Voorwaarde
: [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is onwaar::

Bron
: [Artikel 2, derde lid, van de Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&lid=3)

Brontekst
: *[..]voor een verzekerde zonder partner op 1,896% van het
  drempelinkomen, vermeerderd met 13,700% van het toetsingsinkomen
  voor zover dat boven het drempelinkomen uitgaat*
  
## Toetsingsinkomen boven drempelinkomen

Naam
: **Toetsingsinkomen boven drempelinkomen**

Definitie
: [toetsingsinkomen](#toetsingsinkomen) ::min:: [drempelinkomen](#drempelinkomen)

Voorwaarde
: [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is onwaar:: \
  ::en:: \
  [toetsingsinkomen](#toetsingsinkomen) ::groter dan:: [drempelinkomen](#drempelinkomen)


&nbsp;

Naam
: **Toetsingsinkomen boven drempelinkomen**

Definitie
: ([toetsingsinkomen](#toetsingsinkomen) ::plus:: [toetsingsinkomen partner](#toetsingsinkomen-partner)) ::min:: [drempelinkomen](#drempelinkomen)

Voorwaarde
: [partner heeft zorgverzekering](#partner-heeft-zorgverzekering) ::is waar:: \
  ::en:: \
  ([toetsingsinkomen](#toetsingsinkomen) ::plus:: [toetsingsinkomen partner](#toetsingsinkomen-partner)) ::groter dan:: [drempelinkomen](#drempelinkomen)

&nbsp;

Standaardwaarde
: 0

Bron
: [Artikel 2, derde lid, van de Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=2&lid=3)

Brontekst
: *[..]voor zover dat boven het drempelinkomen uitgaat*
  

## Standaardpremie

Naam
: **Standaardpremie**

Definitie
: 2112

Geldigheidsdatum
: 1 januari 2025

Bron
: [Artikel 1 Regeling vaststelling standaardpremie en bestuursrechtelijke premies 2025](https://wetten.overheid.nl/jci1.3:c:BWBR0050536&artikel=1&z=2025-01-01&g=2025-01-01)



## Rendementsgrondslag som

Naam
: **Rendementsgrondslag som**

Definitie
: [rendementsgrondslag](#rendementsgrondslag)

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is niet waar::

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)

&nbsp;

Naam
: **Rendementsgrondslag som**

Definitie
: [rendementsgrondslag](#rendementsgrondslag) ::plus::  [rendementsgrondslag partner](#rendementsgrondslag-partner)

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is waar::

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)




## Rendementsgrondslag norm

Naam
: **Rendementsgrondslag norm**

Definitie
: 141896

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is niet waar::

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)

&nbsp;

Naam
: **Rendementsgrondslag norm**

Definitie
: 179429

Voorwaarde
: [dezelfde partner tijdens berekeningsjaar](#dezelfde-partner-tijdens-berekeningsjaar) ::is waar::

Bron
: [Artikel 3 Wet op de zorgtoeslag](http://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=3&lid=1)


## Drempelinkomen

Naam
: **Drempelinkomen**

Definitie
: 108 ::procent van:: 12 ::maal:: [minimumloon per maand](#minimumloon-per-maand)

Bron
: [Artikel 1, eerste lid, onderdeel f van de Wet op de zorgtoeslag](https://wetten.overheid.nl/jci1.3:c:BWBR0018451&artikel=1&z=2025-01-01&g=2025-01-01)

## Minimumloon per maand

Naam
: **Minimumloon per maand**

Definitie
: 2191,80

Geldigheidsdatum
: 1 januari 2025

Bron
: [Artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag](https://wetten.overheid.nl/jci1.3:c:BWBR0002638&hoofdstuk=II&artikel=8&z=2025-01-01&g=2025-01-01)
