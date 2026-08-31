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
        "image": "images/Shoarma_wok.png",
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
        "image": "images/Venkel_pasta.png",
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
    },
    {
        "id": 6,
        "title": "Bastillakip",
        "description": "Een Marokkaans taartje van filodeeg gevuld met gestoofd kippenvlees, rozijnen, ingelegde citroen en een laag zoete amandelvulling. Zoet en hartig in één gerecht.",
        "categories": [
            "Hoofdgerecht",
            "Marokkaans",
            "Kip"
        ],
        "prepTime": "30 min",
        "cookTime": "1 uur 30 min",
        "servings": 8,
        "image": "images/bastillakip.jpg",
        "ingredients": [
            "Voor de vulling:",
            "½ bos koriander (15g) – fijngehakt",
            "½ bos bladpeterselie (15g) – fijngehakt",
            "1 kg kippendijen, zonder bot",
            "750 g uienringen",
            "1 el zonnebloemolie",
            "3 el gemberpoeder",
            "1 el kaneelpoeder",
            "zout, peper",
            "5 dl kippenbouillon",
            "1 ingelegde citroen",
            "100 g rozijnen",
            "6 eieren",
            "Voor de notenvulling:",
            "100 g gebakken amandelen",
            "70 g suiker",
            "1 el oranjebloesemwater",
            "Verder nodig:",
            "50 g roomboter",
            "50 ml zonnebloemolie",
            "1 pak filodeeg, ontdooid",
            "poedersuiker en kaneel naar smaak"
        ],
        "instructions": [
            "Oven voorverwarmen op 200°C.",
            "Verhit de zonnebloemolie in je grootste pan. Bak de uienringen op laag vuur goudbruin. Als die grotendeels geslonken zijn gaat de kip erbij; bak die goudbruin mee aan (reken op een minuut of tien). Bestrooi met gemberpoeder, kaneel, zout en peper en bak een minuutje mee. Kippenbouillon erbij, als ook de koriander en peterselie. Deksel op de pan en een uurtje op zacht vuur laten stoven.",
            "Haal de kippendijen uit de bouillon, zet apart en verhoog het vuur. Laat de bouillon tot de helft inkoken (circa 10-15 minuten). Snijd de schil van de ingelegde citroen in flinterdunne reepjes en voeg, samen met de rozijnen, toe aan de bouillon. Bind de saus door één voor één de eieren erbij te doen en goed te roeren. Laat de saus nog een minuut of 3 doorkoken en daarna helemaal afkoelen. Snijd de kippendijen in dunne reepjes en doe ze bij de saus. (Dit deel kun je ook de dag van tevoren voorbereiden!)",
            "Notenvulling: gebruik je hele amandelen, rooster die even en maal ze fijn met de suiker. Of meng gemalen amandelen met de suiker en het oranjebloesemwater. Zet apart.",
            "Smelt de boter en meng met de olie. Smeer een vel filodeeg in met het mengsel en leg er een vel filodeeg bovenop. Smeer ook dat in en schep in het midden de notenvulling, maar laat de randen vrij. Op de notenvulling gaat weer een ingesmeerde laag filodeeg, en daar bovenop het afgekoelde kippenmengsel.",
            "Vouw de zijkanten van het deeg naar binnen en smeer ze in met het boter/oliemengsel. Draai de bastilla om en leg hem met de gevouwen kant naar beneden op een met bakpapier beklede bakplaat. Bak goudbruin in de oven op 200°C. Bestrooi na het bakken naar smaak met poedersuiker en kaneel."
        ]
    },
    {
        "id": 7,
        "title": "Pici with Anchovy & Breadcrumb",
        "description": "Een Nederlands restaurantgerecht: handgerolde pici pasta met knapperige ansjovis, knoflook, chili en zuurdesem broodkruimels, afgemaakt met pecorino. Lactosevrij. Bereiding ±15 min (exclusief het maken van de pici).",
        "categories": [
            "Hoofdgerecht",
            "Pasta",
            "Italiaans"
        ],
        "prepTime": "15 min",
        "cookTime": "15 min",
        "servings": 2,
        "image": "images/pici-with-anchovy-breadcrumb.jpg",
        "ingredients": [
            "2 porties gekookte pici pasta (zie apart pici recept)",
            "125 ml extra vergine olijfolie",
            "2 teentjes knoflook, geperst",
            "8 ansjovisfilets, uitgelekt (verdubbeld per handgeschreven notitie op kaart)",
            "1 tl chilivlokken",
            "50 g verse zuurdesem broodkruimels",
            "30 g pecorino, fijn geraspt, naar smaak"
        ],
        "instructions": [
            "Maak de pici volgens het aparte pici recept.",
            "Verhit 125 ml extra vergine olijfolie in een grote, diepe koekenpan op middelhoog vuur. Bak de geperste knoflook en ansjovisfilets 4–5 minuten totdat de knoflook lichtgoud en zacht is en de ansjovis is opgelost in de olie.",
            "Voeg de chilivlokken en verse zuurdesem broodkruimels toe aan de pan. Roerbak circa 5 minuten tot knapperig en diep goudbruin.",
            "Breng ondertussen een grote pan gezouten water aan de kook (1 tl zout per liter water). Kook de pici 3–4 minuten (afhankelijk van dikte) tot al dente. De pici mag iets stevig zijn, maar mag niet naar meel smaken.",
            "Giet de pasta af, laat kort uitlekken en schep door het ansjovis-knoflookmengsel. Bestrooi met pecorino en serveer direct."
        ]
    },
    {
        "id": 8,
        "title": "Vegan linzenstoof met aubergine",
        "description": "Een romige vegan stoofschotel met gebakken aubergine, rode ui, zongedroogde tomaten, linzen, cannellini bonen en olijven. Vol van smaak en zonder vlees op tafel binnen 50 minuten.",
        "categories": [
            "Hoofdgerecht",
            "Vegetarisch",
            "Vegan",
            "Stoofschotel"
        ],
        "prepTime": "15 min",
        "cookTime": "35 min",
        "servings": 4,
        "image": "images/vegan-linzenstoof-met-aubergine.svg",
        "ingredients": [
            "3 aubergines",
            "2 takjes rozemarijn",
            "3 rode uien",
            "10 zongedroogde tomaten",
            "4 el olijfolie",
            "2 el gedroogde oregano",
            "3 el balsamicoazijn",
            "2 blikken pomodorini tomaatjes (tomaatjes uit blik van 400 g per stuk)",
            "200 g linzen, uit blik",
            "175 g cannellini bonen, uit blik",
            "30 g groene olijven zonder pit",
            "Peper en zout"
        ],
        "instructions": [
            "Snijd de aubergines in de lengte in dikke plakken van ca. 1 centimeter dik en daarna in repen van ca. 1 centimeter dik. Ris de naaldjes van de rozemarijntakjes en hak ze fijn. Haal de schil van de uien en snijd in parten. Hak de zongedroogde tomaatjes in stukjes.",
            "Verhit een scheutje olijfolie (2 eetlepels) in een stoofpan. Bak de auberginerepen in ongeveer 3 minuten op hoog vuur rondom bruin, bestrooi ze met oregano en bak ze nog 1 minuut. Haal ze uit de pan en leg ze op een bord. (Misschien moet je dit in 2-3 fasen doen omdat je pan te klein is om alles in 1x te doen)",
            "Verhit opnieuw 2 eetlepels olijfolie in de stoofpan, zet het vuur lager en bak de ui samen met de rozemarijn 2-3 minuten rondom bruin. Doe de aubergines terug in de pan en schep de balsamicoazijn erdoorheen. Roer de tomaten uit blik en stukjes zongedroogde erdoorheen, breng op smaak met peper en zout en laat 20 minuten met het deksel op de pan op middelhoog vuur stoven. Roer af en toe door. Haal de laatste 5 minuten het deksel van de pan zodat de stoof iets inkookt.",
            "Giet en spoel de linzen en cannellini bonen af in een vergiet. Laat ze goed uitlekken. Roer ze samen met de olijven door de stoof en warm ze 3-4 minuten mee. Verdeel de linzenstoof over de borden en serveer meteen.",
            "Tip: lekker met knapperig gebakken brood, zoals ciabatta, of met rijst. Gebruik de olie van de zongedroogde tomaten om de aubergines en ui in te bakken voor extra smaak."
        ]
    }
];