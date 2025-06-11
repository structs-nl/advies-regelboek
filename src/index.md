---

theme: dashboard
title: Advies regelboek
toc: false
style: custom-style.css
---
# Advies regelboek

Dit advies regelboek een *proof-of-concept* (POC) analyse van enkele
inkomensondersteunende regelingen. Deze analyse is gemaakt in het
kader van een verkennend project voor BZK/DO in begin 2025. Het POC
kan fouten bevatten en de analyse is op dit moment nog niet
gevalideerd door vakinhoudelijk experts.

Deze conceptuele analyse is precies genoeg om als specificatie voor
een technische implementatie te dienen, zonder een aanname te doen
voor een bepaalde implementatierichting. Tegelijkertijd moet het ook
begrijpelijk zijn voor vakinhoudelijken, zodat de validatie van de
analyse laagdrempelig is. Ook andere disciplines, zoals grafisch
ontwerper, moeten met de conceptuele analyse uit de voeten kunnen. Een
groot voordeel van deze benadering is dat deze domeinspecifieke kennis
niet alleen in een technische implementatie terechtkomen. Deze
benadering komt de toetsbaarheid, aanpasbaarheid en herbruikbaarheid
ten goede.

Dat betekent niet dat het conceptuele model eenvoudig is. Een aantal
aspecten van de geanalyseerde regelingen zijn complex en dat blijft
zo. Wel kunnen we op het conceptuele model zoveel mogelijk helderheid
verschaffen over de analyse van de regelingen, zodat hier in gesprek
kan worden gegaan met verschillende vakinhoudelijken.

Wij hebben de analyse in een generiek gestructureerd tekstformaat
gemaakt. Dit maakt het bewerken en annoteren eenvoudig. De regels
bestaan uit definities en kunnen gepaard gaan met condties en
standaardwaarden. Deze zijn opgebouwd uit verwijzingen naar andere
definities, constanten en operatoren. Er kunnen verschillende
definitie / conditie combinaties zijn met dezelfde naam. Via deze weg
kunnen verschillende situaties ("cases") worden onderscheiden. Deze
manier van schrijven probeert zo leesbaar mogelijk te zijn en heeft
daarnaast generieke content beheer toepassingen in het achterhoofd. De
operatoren gebruiken we op een liberale wijze: de expressies kunnen op
verschillende manieren worden geschreven. **kleiner dan** of **<** is
beide valide. Wij zullen in een later stadium deze "syntax" uitvoerig
beschrijven.

De proefberekening laat zien dat de technische implementatie vanuit de
conceptuele analyse niet ingewikkeld is. Dit is niet bedoeld als een
voorstel voor een interface voor gebruikers, maar kan worden gebruikt
voor het testen van de gedefinieerde regels. Het lijkt zinnig om een
interpreter te schrijven die de definities direct uitleest.
