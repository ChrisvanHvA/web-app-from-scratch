# Web Apps From Scratch 

## Documentatie - Chris Gabriel III
### CMD J3 500849088


# Debriefing 

Voor dit vak hadden we de opdracht gekregen om een interactieve animatie in CSS te bouwen, zonder gebruik te maken van JS.
het project moet interessant, semantisch en leerzaam zijn, want het doel is dat je aan het einde van de opdracht iets geleerd
hebt wat je eerst nog niet kon in CSS. 

Zelf heb ik niet super veel ervaring met coderen, alhoewel ik de basics begrijp heb ik me nog niet eerder verdiept in iets
specifieks.

### Om deze reden zijn er wel een aantal dingen waar ik graag wil oefenen:
-CSS has selectors
-Keyframe animaties
-3D transforms



# Week 1 - Kennismakings visite kaartjes

In de eerste week moesten we gaan werken aan een visitekaartje die helpt om jezelf te introduceren aan je medestudenten. de bedoeling was dat je informatie uit een api ging ophalen en dat verwerkte in het visitekaartje, helaas was mij dat niet zo goed gelukt in de tijdsperiode die we hadden dus was mijn focus meer gezet op CSS design.
![kaart schetjes](https://user-images.githubusercontent.com/90341211/224329642-b73504d5-84eb-40a2-8630-9c2878f36bc2.png)

check [mijn visitekaartje hier!](https://chrisvanhva.github.io/visitekaartje/)

Na dat we de visitekaartjes hadden gemaakt waren we in groepjes ingedeelte om een Squad page te designen waarin alle visitekaartjes gepresenteerd konden worden, na aardig wat brainstorming en een aardige hoeveelheid code met mijn groepje te maken werd deze opdracht helaas een beetje geschrapt, maar het gaf me wel een voorproefje met hoe het zal zijn om tijdens deze minor in groepjes te werken.

# Week 2 - Uitleg en eerste versie

## Debriefing - Single page app
De opdracht die we hebben gekregen voor dit vak is het maken van een applicatie die bestaat uit 1 pagina, de pagina moet informatie fetchen uit een API en moet aan een aantal criteria voldoen
- 1 Je moet het baseren op een van de User stories die geleverd wordt.
- 2 laad informatie uit een API in.
- 3 Verwerk informatie uit user testing.
- 4 Voeg routes toe en refactor code in meerdere bestanden.

### mijn gekozen user story: 
"As a student Digital Design, I want to look at inspiring web design quotes, to get some fresh energy when I'm down while working on crazy deadlines. FDND Web Design Quotes API"

Helaas was de gekozen API van FDND een beetje kapot, dus heb ik zelf rondgekeken voor een andere API, uiteindelijk heb ik gekozen voor een API die katten feitjes ophaalt, mijn eigen userstory is:
"As a student, I would like to see interesting cat quotes to entertain me whilst im procrastinating."
![Sketches WAFS](https://user-images.githubusercontent.com/90341211/224301194-37daf0fc-c66c-46ed-adbf-347baf046829.png)

Ik begon met een aantal designs te maken die op een interessante manier de quote kon laten zien, uiteindelijk ben ik gegaan voor een computer die dit op het scherm laat zien na de druk van een knop.
Daarna ben ik gaan schetsen digitaal om een design te krijgen waar ik verder mee kon.
![sketch](https://user-images.githubusercontent.com/90341211/224301555-94358b0f-4c96-4210-bf90-b89523e076a6.png)

# Week 3 - Itereren en routing

In deze week heb ik de tekening voor de achtergrond afgemaakt, ook ben ik verder gegaan met de api te verbinden, na het werkende te krijgen ben ik meer extra functies gaan toevoegen:

Zo kan je nu het licht uit doen.
![lightsoff](https://user-images.githubusercontent.com/90341211/224301316-b9fada5c-ae53-43c0-ae73-470de14fdb15.png)
(door deze te drukken veranderd de BG layer naar eentje zonder schaduw en word de opacity aangepast)

Je kan op de camera klikken.
![image](https://user-images.githubusercontent.com/90341211/224301409-4db2d6aa-2f9f-4aa7-b7d7-f4c254315d11.png)
(deze past de tekst aan van de fact screen om een symbol image te maken)

Je kan op de postit klikken.
![postit](https://user-images.githubusercontent.com/90341211/224301630-8ced4a90-18c8-4c80-a9f9-53ae73b53e0f.png)
(dit past de tekst aan die in de postit staat en reset het na een paar seconden)

Je kan de PC uitzetten.
![image](https://user-images.githubusercontent.com/90341211/224301729-fdebc5c4-ab32-4cbd-a434-8bee626bf0db.png)
(met deze functie komt er een laag voor de screen die het scherm blokkeerd en alle functies verstopt)


En tot slot kan je de API switchen door op de joke of facts knop te klikken
![joke and fact button](https://user-images.githubusercontent.com/90341211/224301891-428158f5-37a3-440b-a3f6-182a4f0bc465.png)
(deze past de hash aan naar de joke of fact page, en roept daardoor de andere API aan met de knop)



# Week 4 - Afronding en beoordelignsgesprek

In de laatste week ben ik bezig geweest met het uitwerken van het project en het aanpassen van de responsiveness, ik merkte dat hij op veel schermen raar reageerde dus heb ik hem met viewheight en % gestyled zodat het allemaal beter mee reageerd.
ook heb ik met hulp van mijn medestudenten de functie kunnen toevoegen om de jokes te filteren, hij haalt nu 1 joke op uit een arrayy van 10 en displayed deze wanneer je op een post it klikt, 

# Reflectie

Ik ben erg tevreden met wat ik deze periode gedaan hebt, ik heb goed kunnen oefenen met technieken die ik nooit of nauwelijks gebruikt hebt hiervoor, mijn motivatie lag daarom ook redelijk hoog en de mogelijkheid om een makkelijke userstory te kiezen gaf me ook veel vrijheid in de uitvoering.
als ik meer tijd zou hebben had ik meer willen spelen met het ontwikkelen van een OS binnen het beeldscherm en een moeilijkere API willen kiezen.
zelf had ik heel vaak moeite met het toepassen van een API omdat ik een cors error kreeg, maar later overhoorde ik van een gesprek met een andere student dat dit een foutje was die je alleen krijgt als je uit je files een api call probeerd te maken.



-Chris Gabriel III 09.03.2023
