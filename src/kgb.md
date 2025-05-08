---
theme: dashboard
title: Kindgebonden budget
toc: true
style: custom-style.css

---

# Kindgebonden budget

<dl>
	<dt>Geldigheidsdatum</dt>
	<dd>1 januari 2025</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&z=2025-01-01&g=2025-01-01"> Wet op het kindgebonden budget</a></dd>	
</dl>


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

<dl>
	<dt>Naam</dt>
	<dd>AWIR partner</dd>
	<dt>Type</dt>
	<dd>ja / nee</dd>
    <dt>Geldigheidsdatum</dt>
	<dd>1 januari 2025</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=2&artikel=3&z=2025-01-01&g=2025-01-01">Artikel 3 Algemene wet inkomensafhankelijke regelingen</a></dd>	
</dl>


## Dezelfde partner tijdens berekeningsjaar

<dl>
	<dt>Naam</dt>
	<dd>dezelfde partner tijdens berekeningsjaar</dd>
	<dt>Type</dt>
	<dd>ja / nee</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01">
	Artikel 1, vierde lid van de  Wet op het kindgebonden budget</a></dd>	
</dl>

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
nog aan.  </div>

<dl>
	<dt>Naam</dt>
	<dd>Leeftijden kinderen</dd>
	<dt>Type</dt>
	<dd>Lijst met leeftijden</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">
	Artikel 2, eerste lid van de  Wet op het kindgebonden budget; <br/>
	Artikel 2, tiende lid van de  Wet op het kindgebonden budget</a></dd>	
</dl>



## Toetsingsinkomen

Het inkomen van de aanvrager. In het geval van een toeslagpartner gaat het om het gezamenlijk inkomen van partner en aanvrager.

**TODO: volgt dit uit de definitie van kgb of van awir? In het eerste geval: een apart toetsingsinkomen voor de partner introduceren**

<dl>
	<dt>Naam</dt>
	<dd>Toetsingsinkomen</dd>
	<dt>Type</dt>
	<dd>Bedrag</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0018472&hoofdstuk=1&paragraaf=3&artikel=8&z=2025-01-01&g=2025-01-01">Artikel 8 Algemene wet inkomensafhankelijke regelingen</a></dd>
</dl>


## Rendementsgrondslag

De rendementsgrondslag (het vermogen) is de waarde van de bezittingen
verminderd met de waarde van de schulden, zoals gedefinierd in de Wet
op de inkomstenbelasting. Daarbij mag de aftrekpost op groene
investeringen echter niet mee worden genomen.

<dl>
	<dt>Naam</dt>
	<dd>rendemengsgrondslag</dd>
	<dt>Type</dt>
	<dd>Bedrag</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01">
	Artikel 1, vierde lid van de Wet op het kindgebonden budget</a><br/>
	<a href="https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.1&artikel=5.3&z=2025-03-15&g=2025-03-15">
	Artikel 5.3 Wet inkomstenbelasting 2001</a>
	<br/>
	<a href="https://wetten.overheid.nl/jci1.3:c:BWBR0011353&hoofdstuk=5&afdeling=5.3&artikel=5.13&z=2025-03-15&g=2025-03-15">
	Artikel 5.13 Wet inkomstenbelasting 2001</a>
	</dd>
</dl>

# Definities

De definities met afhankelijkheden van invoergegevens en/of andere definities.


## KGB hoogte

<dl>
	<dt>Naam</dt>
	<dd>KGB hoogte</dd>
	<dt>Definitie</dt>
	<dd>
		(<span class="operator">De som van</span> <a href="#kgb-per-kind">KGB per kind</a> <span class="operator">voor</span> <a href="#leeftijden-kinderen">leeftijden kinderen</a>
		<br/><span class="operator">plus</span> <a href="#kgb-toevoeging-geen-partner">KGB toevoeging geen partner</a>)<br/>
		<span class="operator">min</span>
		7,1 <span class="operator">procent van</span> <a href="#toetsingsinkomen">toetsingsinkomen</a> 	<span class="operator">min</span> <a href="#toetsingsinkomen">drempelinkomen</a>
	</dd>
	<dt>Voorwaarde</dt>
	<dd>
		<a href="#awir-partner">AWIR partner</a>  <span class="operator">is onwaar</span>
		<br/><span class="operator">en</span><br/>
		<a href="#toetsingsinkomen">toetsingsinkomen</a> <span class="operator"> groter dan</span> <a href="drempelinkomen">drempelinkomen</a>
        <br/><span class="operator">en</span><br/>
		<a href="#rendementsgrondslag">rendementsgrondslag</a> <span class="operator">kleiner dan</span> <a href="#rendementsgrondslag-norm">rendementsgrondslag-norm</a>
	</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">Artikel 2, zevende lid van de  Wet op het kindgebonden budget</a></dd>
	<dt>Brontekst</dt>
	<dd><i>Bij een toetsingsinkomen van de ouder die geen partner heeft, van meer dan het drempelinkomen wordt de som van de bedragen waarop recht bestaat op grond van het tweede, vierde, vijfde en zesde lid verminderd met 7,10% van het verschil tussen het toetsingsinkomen en het drempelinkomen.</i></dd>
	
</dl>

<dl>
	<dt>Naam</dt>
	<dd>KGB hoogte</dd>
	<dt>Definitie</dt>
	<dd>
		<span class="operator">De som van</span> <a href="#kgb-per-kind">KGB per kind</a> <span class="operator">voor</span> <a href="#leeftijden-kinderen">leeftijden kinderen</a>
		<br/><span class="operator">plus</span> <a href="#kgb-toevoeging-geen-partner">KGB toevoeging geen partner</a>
	</dd>
	<dt>Voorwaarde</dt>
	<dd>
		<a href="#awir-partner">AWIR partner</a>  <span class="operator">is onwaar</span>
		<br/><span class="operator">en</span><br/>
		<a href="#toetsingsinkomen">toetsingsinkomen</a> <span class="operator"> kleiner of gelijk aan</span> <a href="drempelinkomen">drempelinkomen</a>
		<br/><span class="operator">en</span><br/>
		<a href="#rendementsgrondslag">rendementsgrondslag</a> <span class="operator">kleiner dan</span> <a href="#rendementsgrondslag-norm">rendementsgrondslag-norm</a>
	</dd>
</dl>


<div class="note">

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, zevende lid.
Het tweede, vierde, vijfde en zesde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
</div>



<dl>
	<dt>Naam</dt>
	<dd>KGB hoogte</dd>
	<dt>Definitie</dt>
	<dd>
		<span class="operator">De som van</span> <a href="#kgb-per-kind">KGB per kind</a> <span class="operator">voor</span> <a href="#leeftijden-kinderen">leeftijden kinderen</a>
	    <br/><span class="operator">min</span>
		7,1 <span class="operator">procent van</span> <a href="#toetsingsinkomen">toetsingsinkomen</a> <br/><span class="operator">min</span> <a href="drempelinkomen">drempelinkomen</a> <span class="operator">plus</span> 9139 </a>
	</dd>
	<dt>Voorwaarde</dt>
	<dd>
        <a href="#awir-partner">AWIR partner</a>  <span class="operator">is waar</span>
		<br/><span class="operator">en</span><br/>
		<a href="#toetsingsinkomen">toetsingsinkomen</a> <span class="operator"> groter dan</span> (<a href="drempelinkomen">drempelinkomen</a> <span class="operator">plus</span> 9139 )
		<br/><span class="operator">en</span><br/>
		<a href="#rendementsgrondslag">rendementsgrondslag</a> <span class="operator">kleiner dan</span> <a href="#rendementsgrondslag-norm">rendementsgrondslag-norm</a>
	</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">Artikel 2, achtste lid van de  Wet op het kindgebonden budget</a></dd>
	<dt>Brontekst</dt>
	<dd><i>Bij een gezamenlijk toetsingsinkomen van de ouder en zijn partner van meer dan het met € 9.139,00 verhoogde drempelinkomen wordt de som van de bedragen waarop recht bestaat op grond van het tweede, vierde en vijfde lid verminderd met 7,10% van het verschil tussen het gezamenlijk toetsingsinkomen en het met € 9.139,00 verhoogde drempelinkomen</i></dd>
</dl>



<dl>
	<dt>Naam</dt>
	<dd>KGB hoogte</dd>
	<dt>Definitie</dt>
	<dd>
		<span class="operator">De som van</span> <a href="#kgb-per-kind">KGB per kind</a> <span class="operator">voor</span> <a href="#leeftijden-kinderen">leeftijden kinderen</a>
	</dd>
	<dt>Voorwaarde</dt>
	<dd>
        <a href="#awir-partner">AWIR partner</a>  <span class="operator">is waar</span>
		<br/><span class="operator">en</span><br/>
		<a href="#toetsingsinkomen">toetsingsinkomen</a> <span class="operator"> kleiner of gelijk aan</span> (<a href="drempelinkomen">drempelinkomen</a> <span class="operator">plus</span> 9139 )
		<br/><span class="operator">en</span><br/>
		<a href="#rendementsgrondslag">rendementsgrondslag</a> <span class="operator">kleiner dan</span> <a href="#rendementsgrondslag-norm">rendementsgrondslag-norm</a>
	</dd>
</dl>

<div class="note">

De conditie op het drempelinkomen volgt niet lettelijk uit de tekst,
maar is de complementering van de definitie in Artikel 2, achtste lid.
Het tweede, vierde en vijfde lid zijn van toepassing zonder conditie
op het drempelinkomen. De conditie op het drempelinkomen voegen we toe
om de condities niet-overlappend te maken. Gebruikt de wetgever hier
een vorm van default redeneren, waarbij de meer specifieke regel de
generiekere overschrijft?
</div>

<dl>
	<dt>Naam</dt>
	<dd>KGB hoogte</dd>
	<dt>Standaardwaarde</dt>
	<dd>0</dd>
</dl>



## KGB per kind

<dl>
	<dt>Naam</dt>
	<dd>KGB per kind</dd>
	<dt>Definitie</dt>
	<dd>
	<a href="#kgb-basis">KGB basis</a>
	<span class="operator">plus</span>
	<a href="#kgb-leeftijdafhankelijk">KGB leeftijdafhankelijk</a>
	</dd>	
</dl>


## KGB basis

<dl>
	<dt>Naam</dt>
	<dd>KGB basis</dd>
	<dt>Definitie</dt>
	<dd>2511</dd>
	<dt>Voorwaarde</dt>
	<dd>leeftijd <span class="operator">kleiner dan</span> 18</dd>
	<dt>Standaardwaarde</dt>
	<dd>0</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">
	Artikel 2, tweede lid van de  Wet op het kindgebonden budget</a>
	</dd>	
</dl>

<div class="note">
Het is onduidelijk waarom art 2, tweede lid is opgesplitst in onderdeel a en b: voor ieder kind is her hetzelfde basisbedrag
</div>

## KGB leeftijdafhankelijk


<dl>
	<dt>Naam</dt>
	<dd>KGB leeftijdafhankelijk</dd>
	<dt>Definitie</dt>
	<dd>703</dd>
	<dt>Voorwaarde</dt>
	<dd>leeftijd <span class="operator">groter of gelijk aan</span> 12 <br/> <span class="operator">en</span><br/> leeftijd <span class="operator">kleiner of gelijk aan</span> 15</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">
	Artikel 2, vierde lid van de  Wet op het kindgebonden budget</a></dd>	
</dl>

<dl>
	<dt>Naam</dt>
	<dd>KGB leeftijdafhankelijk</dd>
	<dt>Definitie</dt>
	<dd>936</dd>
	<dt>Voorwaarde</dt>
	<dd>leeftijd <span class="operator">groter of gelijk aan</span> 16 <span class="operator"><br/>en<br/></span> leeftijd <span class="operator">kleiner of gelijk aan</span> 17</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">
	Artikel 2, vijfde lid van de Wet op het kindgebonden budget</a></dd>	
</dl>


<dl>
	<dt>Naam</dt>
	<dd>KGB leeftijdafhankelijk</dd>
	<dt>Standaardwaarde</dt>
	<dd>0</dd>
</dl>

## KGB toevoeging geen partner

<dl>
	<dt>Naam</dt>
	<dd>KGB toevoeging geen partner</dd>
	<dt>Definitie</dt>
	<dd>3389</dd>
	<dt>Voorwaarde</dt>
	<dd>partner <span class="operator">is niet waar</span></dd>
	<dt>Standaardwaarde</dt>
	<dd>0</dd>
	<dt>Bron</dt>
    <dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=2&z=2025-01-01&g=2025-01-01">
	Artikel 2, zesde lid van de Wet op het kindgebonden budget</a></dd>	
</dl>


## Rendementsgrondslag norm


<dl>
	<dt>Naam</dt>
	<dd>rendementsgrondslag-norm</dd>
	<dt>Definitie</dt>
	<dd>141896</dd>
	<dt>Voorwaarde</dt>
	<dd><a href="#dezelfde-partner-tijdens-berekeningsjaar">dezelfde partner tijdens berekeningsjaar</a> <span class="operator">is niet waar</span></dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01">
	Artikel 1, vierde lid van de Wet op het kindgebonden budget</a></dd>	
</dl>

<dl>
	<dt>Naam</dt>
	<dd>rendementsgrondslag-norm</dd>
	<dt>Definitie</dt>
	<dd>179429</dd>
	<dt>Voorwaarde</dt>
	<dd><a href="#dezelfde-partner-tijdens-berekeningsjaar">dezelfde partner tijdens berekeningsjaar</a> <span class="operator">is waar</span></dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01">
	Artikel 1, vierde lid van de Wet op het kindgebonden budget</a></dd>	
</dl>
	
## Drempelinkomen

<dl>
	<dt>Naam</dt>
	<dd>drempelinkomen</dd>
	<dt>Definitie</dt>
	<dd>108 <span class="operator">procent </span> van 12 <span class="operator">maal</span> <a href="#minimumloon-per-maand">minimumloon-per-maand</a></dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0022751&artikel=1&z=2025-01-01&g=2025-01-01">
	Artikel 1, eerste lid van de Wet op het kindgebonden budget</a></dd>	
</dl>

## Minimumloon per maand

<dl>
	<dt>Naam</dt>
	<dd>minimumloon-per-maand</dd>
	<dt>Definitie</dt>
	<dd>2191,80</dd>
	<dt>Geldigheidsdatum</dt>
	<dd>1 januari 2025</dd>
	<dt>Bron</dt>
	<dd><a href="https://wetten.overheid.nl/jci1.3:c:BWBR0002638&hoofdstuk=II&artikel=8&z=2025-01-01&g=2025-01-01">
	Artikel 8, eerste lid, onderdeel b, van de Wet minimumloon en minimumvakantiebijslag</a></dd>	
</dl>

