// Recipe data - ADD YOUR RECIPES HERE
const recipes = [
    {
        "id": 1,
        "title": "Chack",
        "description": "Een Hippo classic met blauwe kaas. Gehakt en groenten in een uitgehold stokbrood met romige blauwe kaassaus.",
        "categories": [
            "Hoofdgerecht",
            "Gehakt"
        ],
        "prepTime": "20 min",
        "cookTime": "30 min",
        "servings": 4,
        "image": "images/Chack.png",
        "ingredients": [
            "2 stokbroden",
            "600 gram gehakt",
            "2 courgettes",
            "2 stronken broccoli",
            "400 gram champignons",
            "4 uien",
            "4 tenen knoflook",
            "200 gram blauwe kaas",
            "125 gram crème fraîche",
            "Peper, zout en chilipoedr naar smaak"
        ],
        "instructions": [
            "Snij alle groenten, ui en knoflook fijn.",
            "Zet een koekenpan op het vuur en giet er wat olie in.",
            "Fruit de ui en knoflook goed voordat je het gehakt gaar bakt.",
            "Als het gehakt klaar is, gooi je alle groenten erbij.",
            "Als de groenten zacht gebakken zijn, voeg je de blauwe kaas en de crème fraîche toe.",
            "Breng het gerecht op smaak met peper, zout en eventueel andere kruiden.",
            "Bij het serveren: hol een half stokbrood uit, stop de vulling erin en smullen maar!"
        ]
    },
    {
        "id": 2,
        "title": "Shoarma wok",
        "description": "Een heel snel en makkelijk Aziatisch gerecht met shoarma, noedels en verse groenten.",
        "categories": [
            "Aziatisch",
            "Snel",
            "Makkelijk",
            "Hoofdgerecht"
        ],
        "prepTime": "0 min",
        "cookTime": "25 min",
        "servings": 4,
        "image": "images/Shoarma wok.png",
        "ingredients": [
            "800 gram voorgesneden Chinese groenten",
            "600 gram shoarma reepjes",
            "400 gram noedels",
            "1 chilipeper",
            "Ketjap en sojasaus naar smaak"
        ],
        "instructions": [
            "Verhit een wok met wat olie en zet een pan met water op voor de noedels.",
            "Gooi de shoarma in de wok en bak goed aan.",
            "Wacht totdat de shoarma gaar is en gooi de voorgesneden groenten en de chilipeper erbij.",
            "Als het water kookt, kunnen de noedels in de pan.",
            "Breng de shoarma en groenten op smaak met ketjap en sojasaus.",
            "Wacht totdat de noedels en groenten goed gaar zijn en doe alles bij elkaar. Smullen!"
        ]
    },
    {
        "id": 3,
        "title": "Venkel pasta",
        "description": "Een romige venkel pasta met Italiaans gekruide braadworst, champignons en crème fraîche.",
        "categories": [
            "Hoofdgerecht",
            "Pasta",
            "Italiaans"
        ],
        "prepTime": "20 min",
        "cookTime": "35 min",
        "servings": 8,
        "image": "images/Venkel pasta.png",
        "ingredients": [
            "1 kg Italiaans gekruide braadworst",
            "1.2 kg venkel",
            "600 gram champignons",
            "4 middelgrote uien",
            "6 tenen knoflook",
            "200 gram crème fraîche",
            "1 kg fusilli"
        ],
        "instructions": [
            "Snij de venkel, champignons, ui en knoflook in middelgrote stukken.",
            "Haal het velletje van de braadworst, zodat je gehakt overhoudt.",
            "Verwarm een grote pan op het vuur met een beetje olie.",
            "Vul een tweede pan met water voor de pasta en zet ook op het vuur.",
            "Voeg zout toe aan het pastawater. Als het water kookt, kan de pasta erin.",
            "Fruit de ui en knoflook gaar voordat je het worstgehakt in de pan doet.",
            "Breek de worst in kleinere stukken met een spatel.",
            "Als de worst klaar is, voeg je de venkel en champignons toe.",
            "Bak totdat de venkel wat zachter is geworden.",
            "Voeg de crème fraîche en een schep pastawater toe en roer goed door.",
            "Giet de pasta af en meng door het gerecht.",
            "Breng op smaak met zout en peper, en smullen maar!"
        ]
    },
    {
        "title": "Oosterse stoofschotel",
        "description": "Een rijke en smaakvolle Oosterse stoofschotel met mals rundvlees, kokosmelk, rode curry en diverse groenten, perfect voor een voedzame maaltijd.",
        "categories": [
            "Hoofdgerecht",
            "Stoofschotel",
            "Oosters",
            "Rundvlees"
        ],
        "prepTime": "25 min",
        "cookTime": "2 uur",
        "servings": 4,
        "ingredients": [
            "Ongeveer 200 à 250 gram stoofvlees per persoon (rund- of sukadelappen) in stukjes",
            "2 uien, grof gesneden",
            "4 teentjes knoflook, fijngehakt",
            "1 duim verse gember, geraspt",
            "6 eieren",
            "2 boemboe rode curry of rendang (te koop van AH)",
            "1 grote zak Chinese groenten (eventueel aan te vullen met winterpeen of boontjes)",
            "2 el zonnebloem- of rijstolie",
            "1 rode peper",
            "2 blikken kokosmelk (400 gram)",
            "Twee rundvlees-bouillonblokjes",
            "Eventueel extra knoflookpoeder, zout en peper",
            "Voor afwerking eventueel verse koriander of bosui",
            "(Thaise) rijst (voor serveren)"
        ],
        "instructions": [
            "Hak de knoflook, peper en gember fijn (kan met blender)",
            "Bak het mengsel in een koekenpan, samen met de ui",
            "Verhit daarnaast olie in een stoofpan en bak het vlees rondom bruin (hoog vuur)",
            "Is het vlees voldoende aangebakken, doe het mengsel uit de koekenpan bij het vlees",
            "Laat even gezamenlijk doorbakken (matig vuur)",
            "Voeg de boemboe toe en bak dit gedurende 5 minuten mee",
            "Doe de bouillonblokjes erbij en voeg vervolgens de kokosmelk toe",
            "Het vlees mag (net) niet boven het vocht uitkomen; doe er zo nodig wat water bij",
            "Kookt het, zet het vuur laag, doe het deksel op de pan en laat het (minimaal) 2 uur stoven",
            "Kook 6 eieren (hard), schil deze en gooi deze ook in de stoofschotel",
            "Voeg na een uur de groeten erbij",
            "Proef tijdens het stoven of er nog smaak bij moet (kruiden, peper, zout of extra boemboe)",
            "Serveren met (Thaise) rijst"
        ],
        "image": "images/Oosterse stoofschotel.png",
        "id": 4
    },
    {
        "title": "Parel couscous met courgette",
        "description": "Een fris en kleurrijk gerecht met parelcouscous, courgette, peultjes, zongedroogde tomaten, olijven en witte kaasblokjes, op smaak gebracht met munt en rodewijnazijn.",
        "categories": [
            "Hoofdgerecht",
            "Vegetarisch",
            "Couscous",
            "Mediterraan"
        ],
        "prepTime": "15 min",
        "cookTime": "12 min",
        "servings": 4,
        "ingredients": [
            "2 l kraanwater",
            "200 g parel couscous",
            "70 g tomatenpuree",
            "200 g verse peultjes",
            "2 courgette",
            "295 g zongedroogde tomaten in pot",
            "15 g verse munt",
            "2 el rodewijnazijn",
            "165 g groene olijven met knoflook",
            "2 el (olijf)olie",
            "200 g witte kaasblokjes met zongedroogde tomaat"
        ],
        "instructions": [
            "Breng het water aan de kook. Voeg de couscous, tomatenpuree en eventueel zout toe en kook in 12 min. gaar. Giet af en laat uitlekken. Doe in een ruime kom. Kook ondertussen de peultjes 4 min. en giet af. Rasp ondertussen de courgettes grof in de keukenmachine of met een rasp. Laat de tomaten uitlekken en halveer. Snijd de muntblaadjes fijn.",
            "Roer de couscous los met een vork en voeg de courgette, munt en azijn toe. Meng de peultjes, olijven en de olie door de couscous. Laat de kaasblokjes uitlekken en schep er voorzichtig door. Breng op smaak met peper."
        ],
        "image": "images/Parel couscous met courgette.png",
        "id": 5
    }
];