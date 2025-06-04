---
theme: dashboard
title: Individuele inkomenstoeslag
toc: true
style: custom-style.css
---
# Individuele inkomenstoeslag Amsterdam

Geldigheidsdatum
: 1 januari 2021

Bron
: [Verordening Individuele Inkomenstoeslag Participatiewet Amsterdam  2021](https://lokaleregelgeving.overheid.nl/CVDR460812/3)

&nbsp;

Geldigheidsdatum
: 15 april 2021

Bron
: [Beleidsregels Individuele Inkomenstoeslag Amsterdam 2021](https://lokaleregelgeving.overheid.nl/CVDR656509/2)

In dit document beschrijven de we de definities voor de Individuele
Inkomenstoeslag (IIT) van de gemeente Amsterdam. Deze regelingen volgen uit
de publieke taak voor de gemeente zoals vastgesteld in
[Artikel 36 van de Participatiewet](https://wetten.overheid.nl/jci1.3:c:BWBR0015703&hoofdstuk=4&paragraaf=4.1&artikel=36&z=2025-02-04&g=2025-02-04).

Met deze definities en de benodigde invoergegevens kan een berekening
worden gemaakt van een **mogelijk recht** en de **hoogte** van het IIT voor inwoners van Amsterdam.

<div class="caution">
De analyse van de IIT is <strong>nog niet</strong> gevalideerd door vakinhoudelijk experts.
</div>

In de Participatiewet geeft de wetgever het college de mogelijkheid om
een individuele inkomenstoeslag te verlenen, gezien de omstandigheden van de persoon.
Hierbij moet in ieder geval aan de volgende voorwaarden worden voldaan:

- ouder dan 12, jonger dan de pensioengerechtigde leeftijd
- langdurig laag inkomen
- geen in aanmerking te nemen vermogen (art 34)
- geen uitzicht op inkomensverbetering
- er in de afgelopen 12 maanden geen IIT is verleend

In de verordening en de beleidsregel van Amsterdam wordt verdere invulling gegeven aan de beleidsruimte en deze voorwaarden.
x
&nbsp;

# Invoergegevens

De volgende gegevens zijn nodig voor het berekenen van de hoogte van de IIT:

## Zicht op inkomstenverbetering

In artikel 4 en 5 van de beleidsregel worden de voorwaarden genoemd
wanneer er in ieder geval geen / wel uitzicht op inkomstenverbetering
is. Het *in ieder geval* suggereert een open norm waar van af zou
kunnen worden geweken. Wij zien dit gegeven nu als een enkele
vraag. Het volledig opnemen van de vragen lijkt wel voor de hand
liggend.

<div class="note">
In deze vraag nemen we ook het zicht op inkomensverbetering van een mogelijke
partner mee. Dit kan uit worden gesplitsts.
</div>

Naam
: Zicht op inkomstenverbetering

Type
: Ja / Nee

Bron
: [Artikel 4 en 5 van de Beleidsregels Individuele Inkomenstoeslag Amsterdam 2021](https://lokaleregelgeving.overheid.nl/CVDR656509/2)

## Leeftijd

Naam
: Leeftijd

Type
: Positief geheel getal

## Vermogen

Het vermogen (bezittingen min schulden) voor de aanvrager en eventuele partner.

<div class="note">
Wat wel en niet onder vermogen valt heeft overlap met de rendementsgrondslag van de Toeslagen. Dit dient verder te worden gespecificeerd.
</div>

Naam
: Vermogen

Type
: Bedrag

Bron
: [Artikel 34 Participatiewet](https://wetten.overheid.nl/BWBR0015703/2025-02-04/#Hoofdstuk3_Paragraaf3.4_Artikel34)



## Leeftijd partner

Naam
: Leeftijd partner

Type
: Positief geheel getal


## Woonplaats

Naam
: Woonplaats

Type
: String

Bron
: [Artikel 3, lid 2 van de Verordening Individuele Inkomenstoeslag Participatiewet Amsterdam  2021](https://lokaleregelgeving.overheid.nl/CVDR460812/3)


## Partner

Voor het college van Amsterdam is het begrip "partner" gelijk aan het
hebben van een gezamenlijk huishouden. Dit is een open norm waar in
ieder geval de volgende situaties onder vallen:

- Getrouwd of geregistreerd partner
- Samenlevingscontract
- gescheiden, maar op hetzelfde adres

Het begrip gezamenlijke huishouding uit de IAOW wordt ook gebruik 
voor de definitie van het laag inkomen. Daar wordt met echtgenoot
ook gezamenlijk huishouden bedoeld.

Wij gaan er vanuit dat de gemeente Amsterdam 1 begrip van het
gezamenlijk huishouden hanteert en dat de beleidsregel met de open
norm prevaleert.

Naam
: Partner

Type
: Ja / Nee

Bron
: [Artikel 1, lid 1, onderdeel d van de Beleidsregels Individuele Inkomenstoeslag Amsterdam 2021](https://lokaleregelgeving.overheid.nl/CVDR656509/2)

Bron
: [Artikel 3 Wet inkomensvoorziening oudere en gedeeltelijk arbeidsongeschikte werkloze werknemers](https://wetten.overheid.nl/jci1.3:c:BWBR0004044&hoofdstuk=I&artikel=3&z=2025-01-01&g=2025-01-01)

## Woningdeler

Naam
: Woningdeler

Type
: Ja / Nee

Deelt u de woning met meerderjarige mensen met wie u geen gezamenlijk
huishouden vormt? Deze vraag is relevant voor het vaststellen van de
norm voor het lage inomen. Dit is onze interpretatie van het hebben
van een hoofdverblijf met meerderjarigen, in combinatie met het brede
begrip echtgenoot.

Bron
: [Regeling vaststelling grondslagen IOAW](https://wetten.overheid.nl/BWBR0007762/2025-01-01/0)

Bron
: [Artikel 3 Wet inkomensvoorziening oudere en gedeeltelijk arbeidsongeschikte werkloze werknemers](https://wetten.overheid.nl/jci1.3:c:BWBR0004044&hoofdstuk=I&artikel=3&z=2025-01-01&g=2025-01-01)


## Inkomensgegeven 2024

Naam
: Inkomensgegeven 2024

Type
: Bedrag

Het langdurig laag inkomen wordt in de verordening vastgesteld over de
referteperiode van de afgelopen drie jaar. Voor het toepassen van de
norm van het laag inkomen zijn dus de inkomensgegevens van de
afgelopen drie jaar nodig.

Wij interpreteren het "fiscaal gezinsinkomenen" (Artikel 1, onderdeel
e) het inkomensgegeven zoals gedefinieerd in de belastingwet
is, ook op basis van de beschrijving op de
[website van de Gemeente Amsterdam](https://www.amsterdam.nl/werk-en-inkomen/regelingen-bij-laag-inkomen-pak-je-kans/wat-is-een-laag-inkomen-en-weinig/#majrlh061hf8zzuq764).

<div class="note">
Dit kan veralgemeniseerd worden. Dit lijkt niet de beste manier om de inkomensgegevens uit te vragen
</div>

Bron
: [Artikel 1, onderdeel c, d en e van de verordening Individuele Inkomenstoeslag Participatiewet Amsterdam 2021](http://lokaleregelgeving.overheid.nl/CVDR460812/3)\
  [Artikel 4, lid 1 van de verordening Individuele Inkomenstoeslag Participatiewet Amsterdam 2021](http://lokaleregelgeving.overheid.nl/CVDR460812/3)\
  [Artikel 21, onderdeel e van de Algemene wet inzake rijksbelastingen](https://wetten.overheid.nl/BWBR0002320/2025-01-01/#HoofdstukIVA_Artikel21)
  
    
## Inkomensgegeven 2023

Naam
: Inkomensgegeven 2023

Type
: Bedrag
      
## Inkomensgegeven 2022

Naam
: Inkomensgegeven 2022

Type
: Bedrag

## Inkomensgegeven partner 2024

Naam
: Inkomensgegeven partner 2024

Type
: Bedrag

De bronnen en interpretatie van het inkomengegeven hierboven zijn ook
hier van toepassing.  Het inkomen van de partner telt mee. Zoals
hierboven beschreven: partner geven we weer als gezamenlijk
huishouden.

<div class="warning"> Als er niet tijdens de gehele referteperiode een
gezamenlijke huishouding wordt gevoerd, dan geeft het college een
redelijke invulling op het vermogen, inkomen en het zicht op
inkomensverbetering. Deze redelijke invulling nemen wij op dit moment
niet mee, omdat deze op dit moment ons niet bekend is. Het is wel van
belang dit nog mee te nemen.  </div>

Bron
: [Artikel 2 van de Beleidsregels Individuele Inkomenstoeslag Amsterdam 2021](https://lokaleregelgeving.overheid.nl/CVDR656509/2)


## Inkomensgegeven partner 2023

Naam
: Inkomensgegeven partner 2023

Type
: Bedrag

## Inkomensgegeven partner 2022

Naam
: Inkomensgegeven partner 2022

Type
: Bedrag

# Definities

&nbsp;

## Hoogte IIT

Naam
: Hoogte IIT

Definitie
: [IIT bedrag](#iit-bedrag)

Voorwaarde
: [Woonplaats](#woonplaats) is "Amsterdam" \
  en \
  [Zicht op inkomstenverbetering](#zicht-op-inkomstenverbetering) is onwaar \
  en \
  [Vermogen](#vermogen) kleiner dan [Vermogensgrens](#vermogensgrens) \
  en \
  [Leeftijd](#leeftijd) groter of gelijk aan 21 \
  en \
  [Leeftijd](#leeftijd) kleiner dan [AOW leeftijd](#aow-leeftijd) \
  en \
  ([Partner](#partner) is onwaar of [Leeftijd partner](#leeftijd-partner) groter of gelijk aan 21) \
  en \
  ([Partner](#partner) is onwaar of [Leeftijd partner](#leeftijd-partner) kleiner dan [AOW leeftijd](#aow-leeftijd)) \
  en \
  [Inkomensgegeven 2024](#inkomensgegeven-2024) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen) \
  en \
  [Inkomensgegeven 2023](#inkomensgegeven-2023) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen) \
  en \
  [Inkomensgegeven 2022](#inkomensgegeven-2023) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen) \
  en \
  ([Partner](#partner) is onwaar of [Inkomensgegeven partner 2024](#inkomensgegeven-partner-2024) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen)) \
  en \
  ([Partner](#partner) is onwaar of [Inkomensgegeven partner 2023](#inkomensgegeven-partner-2023) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen)) \
  en \
  ([Partner](#partner) is onwaar of [Inkomensgegeven partner 2022](#inkomensgegeven-partner-2023) kleiner dan of gelijk aan [Norm laag inkomen](#norm-laag-inkomen))

Standaardwaarde
: 0

## Norm laag inkomen

Naam
: Norm laag inkomen

Definitie
: 120 procent van [IAOW norm](#iaow-norm)

Bron
: [Artikel 1, onderdeel c van de verordening Individuele Inkomenstoeslag Participatiewet Amsterdam 2021](http://lokaleregelgeving.overheid.nl/CVDR460812/3)

## IAOW norm

Naam
: IAOW norm

Definitie
: 1.697,32

Voorwaarde
: [Partner](#partner) is onwaar \
  en \
  [Woningdeler](#woningdeler) is onwaar
  
&nbsp;

Naam
: IAOW norm

Definitie
: 2.194,30

Voorwaarde
: [Partner](#partner) is waar

&nbsp;

Naam
: IAOW norm

Definitie
: 1097,15

Voorwaarde
: [Partner](#partner) is onwaar \
  en \
  [Woningdeler](#woningdeler) is waar

&nbsp;

Bron
: [Artikel 1 van Regeling vaststelling grondslagen IOAW](https://wetten.overheid.nl/BWBR0007762/2025-01-01/0)


## IIT bedrag

Naam
: IIT bedrag

Definitie
: 85

Voorwaarde
: [Partner](#partner) is onwaar

&nbsp;

Naam
: IIT bedrag

Definitie
: 170

Voorwaarde
: [Partner](#partner) is waar

&nbsp;

Bron
: [Artikel 5 van de verordening Individuele Inkomenstoeslag Participatiewet Amsterdam 2021](http://lokaleregelgeving.overheid.nl/CVDR460812/3)


### AOW leeftijd

Naam
: AOW leeftijd

Definitie
: 67

Geldigheidsdatum
: 1 januari 2024

Bron
: [Artikel 7a Algemene Ouderdomswet](https://wetten.overheid.nl/jci1.3:c:BWBR0002221&hoofdstuk=III&paragraaf=1&artikel=7a&z=2024-01-01&g=2024-01-01)

### Vermogensgrens

Naam
: Vermogensgrens

Definitie
: 7700

Voorwaarde
: [Partner](#partner) is onwaar

&nbsp;

Naam
: Vermogensgrens

Definitie
: 15540

Voorwaarde
: [Partner](#partner) is waar

&nbsp;

Bron
: [Artikel 34 lid 3 van de Participatiewet](https://wetten.overheid.nl/jci1.3:c:BWBR0015703&hoofdstuk=3&paragraaf=3.4&artikel=34&z=2025-02-04&g=2025-02-04)
