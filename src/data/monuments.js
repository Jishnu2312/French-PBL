/**
 * 10 Monuments majeurs du patrimoine français (Hors Paris, 10 villes distinctes)
 * With authentic high-res interior photography, mountain/landscape context, 3D relief camera angles,
 * and natural multi-view photographic galleries.
 */

export const EARTH_GLOBAL_VIEW = {
  name: {
    en: "Global Earth View",
    fr: "Vue orbitale terrestre"
  },
  longitude: 2.2137,
  latitude: 46.2276,
  height: 11500000,
  heading: 0,
  pitch: -90,
  roll: 0
};

export const FRANCE_MACRO_VIEW = {
  name: {
    en: "National Overview (France)",
    fr: "Vue générale (France)"
  },
  longitude: 2.3000,
  latitude: 46.5000,
  height: 1350000,
  heading: 0,
  pitch: -85,
  roll: 0
};

export const MONUMENTS = [
  {
    id: "mont-saint-michel",
    name: {
      fr: "Abbaye du Mont-Saint-Michel",
      en: "Mont-Saint-Michel Abbey"
    },
    city: "Le Mont-Saint-Michel",
    department: {
      fr: "Manche, Normandie",
      en: "Manche, Normandy"
    },
    latitude: 48.636014,
    longitude: -1.511457,
    elevation: 80,
    camera: {
      range: 480,
      heading: 35,
      pitch: -28
    },
    cameraLandscape: {
      range: 2200,
      heading: 350,
      pitch: -12
    },
    era: {
      fr: "VIIIe – XVIe siècle",
      en: "8th – 16th century"
    },
    description: {
      fr: "Prouesse architecturale du Moyen Âge, cette abbaye bénédictine s'élève sur un îlot rocheux ceinturé par les plus puissantes marées d'Europe.",
      en: "A masterpiece of medieval architecture, this Benedictine abbey stands atop a rocky tidal island subject to some of Europe's strongest tides."
    },
    historicalNote: {
      fr: "Inscrite au patrimoine mondial de l'UNESCO dès 1979, la forteresse abbatiale demeura imprenable face aux assauts anglais durant la guerre de Cent Ans.",
      en: "Inscribed on the UNESCO World Heritage List in 1979, the abbey fortress withstood all English sieges throughout the Hundred Years' War."
    },
    interior: {
      image: "/images/monuments/mont-saint-michel-interior.jpg",
      title: {
        fr: "Le Cloître suspendu & La Merveille",
        en: "The Suspended Cloister & The Merveille"
      },
      highlight: {
        fr: "Véritable jardin suspendu entre ciel et mer, le cloître du XIIIe siècle présente une double rangée de colonnettes en quinconce de calcaire anglais, offrant un silence absolu au sommet de la falaise.",
        en: "A garden suspended between sea and sky, this 13th-century cloister features staggered double colonnettes carved from English limestone, designed as a contemplative haven atop the sea cliff."
      }
    },
    landscape: {
      image: "/images/monuments/mont-saint-michel-landscape.jpg",
      title: {
        fr: "La Baie, Marées & Grèves de Normandie",
        en: "The Tidal Bay & Maritime Horizon"
      },
      mountains: {
        fr: "Bordée par les falaises côtières de Champeaux et les bancs de sables mouvants, la baie connaît un marnage exceptionnel atteignant 14 mètres, transformant le rocher en île deux fois par jour.",
        en: "Flanked by the Champeaux coastal cliffs and vast quicksand flats, the bay experiences extreme 14-meter tides that isolate the rock into an island twice daily."
      }
    },
    gallery: [
      {
        src: "/images/monuments/mont-saint-michel-aerial.jpg",
        title: { fr: "Vue Aérienne & Marée Haute", en: "Aerial View & High Tide" },
        caption: {
          fr: "Panorama aérien révélant l'insularité complète de l'abbaye ceinturée par les eaux de la baie.",
          en: "Aerial panorama revealing the complete insularity of the abbey surrounded by tidal waters."
        },
        tag: { fr: "Aérien", en: "Aerial" }
      },
      {
        src: "/images/monuments/mont-saint-michel-facade.jpg",
        title: { fr: "La Merveille & Façade Gothique", en: "The Merveille & Gothic Facade" },
        caption: {
          fr: "Contreforts vertigineux de l'abbaye culminant à plus de 80 mètres au-dessus du niveau de la mer.",
          en: "Dizzying buttresses of the abbey towering more than 80 meters above sea level."
        },
        tag: { fr: "Architecture", en: "Architecture" }
      },
      {
        src: "/images/monuments/mont-saint-michel-interior.jpg",
        title: { fr: "Le Cloître Suspendu", en: "The Suspended Cloister" },
        caption: {
          fr: "Double colonnade en quinconce de calcaire anglais taillée au XIIIe siècle.",
          en: "Staggered double colonnade carved in English Caen limestone in the 13th century."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/mont-saint-michel-village.jpg",
        title: { fr: "Grand-Rue & Village Médiéval", en: "Grand-Rue & Medieval Village" },
        caption: {
          fr: "Ruelle médiévale pavée bordée de maisons séculaires montant vers les remparts abbatiaux.",
          en: "Cobbled medieval street lined with historic merchant houses ascending to the ramparts."
        },
        tag: { fr: "Village", en: "Village" }
      },
      {
        src: "/images/monuments/mont-saint-michel-landscape.jpg",
        title: { fr: "Les Grèves & la Baie Sauvage", en: "Tidal Flats & Wild Bay" },
        caption: {
          fr: "Étendue d'estran et de sables mouvants soumise au plus grand marnage d'Europe continentale.",
          en: "Vast expanse of tidal flats and quicksands subject to Europe's strongest tidal range."
        },
        tag: { fr: "Paysage", en: "Landscape" }
      }
    ]
  },
  {
    id: "palais-des-papes",
    name: {
      fr: "Palais des Papes",
      en: "Palace of the Popes"
    },
    city: "Avignon",
    department: {
      fr: "Vaucluse, Provence-Alpes-Côte d'Azur",
      en: "Vaucluse, Provence-Alpes-Côte d'Azur"
    },
    latitude: 43.950712,
    longitude: 4.807511,
    elevation: 35,
    camera: {
      range: 420,
      heading: 45,
      pitch: -28
    },
    cameraLandscape: {
      range: 2100,
      heading: 65,
      pitch: -11
    },
    era: {
      fr: "XIVe siècle (1335 – 1352)",
      en: "14th century (1335 – 1352)"
    },
    description: {
      fr: "Plus imposante construction gothique du Moyen Âge occidental, forteresse et résidence souveraine de la papauté en Avignon.",
      en: "The largest Gothic palace of the Western Middle Ages, serving as sovereign fortress and residence for the Avignon Papacy."
    },
    historicalNote: {
      fr: "Édifié en moins de vingt ans sous les pontificats de Benoît XII et Clément VI, l'ensemble abrita six conclaves pontificaux majeurs.",
      en: "Built in under two decades under Popes Benedict XII and Clement VI, the palace hosted six major papal conclaves."
    },
    interior: {
      image: "/images/monuments/palais-des-papes-interior.jpg",
      title: {
        fr: "Le Grand Tinel & Chambre du Cerf",
        en: "The Grand Tinel & Stag Chamber"
      },
      highlight: {
        fr: "Immense salle de banquet papal de 48 mètres de long couverte d'une voûte en berceau brisé lambrissée, et la Chambre du Cerf ornée de somptueuses fresques profanes de scènes de chasse de 1343 peintes par Matteo Giovanetti.",
        en: "Monumental 48-meter papal banquet hall with an inverted timber keel vault, complemented by the Stag Chamber featuring secular hunting frescoes painted in 1343 by Matteo Giovanetti."
      }
    },
    landscape: {
      image: "/images/monuments/palais-des-papes-landscape.jpg",
      title: {
        fr: "Le Rhône, Rocher des Doms & Mont Ventoux",
        en: "The Rhône River, Doms Rock & Mont Ventoux"
      },
      mountains: {
        fr: "Bâti sur l'escarpement rocheux calcaire des Doms dominant le fleuve Rhône, avec au levant la silhouette majestueuse du Mont Ventoux (1 912 m) et les dentelles de Montmirail.",
        en: "Erected upon the limestone Doms bluff commanding the Rhône river, framed on the eastern horizon by Mont Ventoux (1,912 m) and the jagged Dentelles de Montmirail range."
      }
    },
    gallery: [
      {
        src: "/images/monuments/palais-des-papes-facade.jpg",
        title: { fr: "Façade Papale & Place du Palais", en: "Papal Facade & Palace Square" },
        caption: {
          fr: "Tours fortifiées et mâchicoulis massifs de la façade ouest dominant la grande place d'Avignon.",
          en: "Fortified watchtowers and massive machicolations of the western facade commanding the main square."
        },
        tag: { fr: "Façade", en: "Facade" }
      },
      {
        src: "/images/monuments/palais-des-papes-courtyard.jpg",
        title: { fr: "Cour d'Honneur du Palais", en: "Courtyard of Honor" },
        caption: {
          fr: "Cour centrale du palais pontifical, théâtre emblématique des représentations du Festival d'Avignon.",
          en: "Central courtyard of the papal fortress, world-famous stage of the annual Avignon Theatre Festival."
        },
        tag: { fr: "Cour", en: "Courtyard" }
      },
      {
        src: "/images/monuments/palais-des-papes-interior.jpg",
        title: { fr: "Le Grand Tinel & Voûte Lambrissée", en: "Grand Tinel & Timber Vault" },
        caption: {
          fr: "Salle d'apparat des banquets souverains des papes longue de 48 mètres avec sa charpente en carène.",
          en: "Grand banquet and sovereign ceremonial hall spanning 48 meters with its inverted hull timber roof."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/palais-des-papes-bridge.jpg",
        title: { fr: "Pont Saint-Bénézet sur le Rhône", en: "Saint-Bénézet Bridge on the Rhône" },
        caption: {
          fr: "Célèbre pont roman du XIIe siècle s'avançant dans les eaux tumultueuses du Rhône.",
          en: "Legendary 12th-century Romanesque bridge reaching across the fast-flowing waters of the Rhône."
        },
        tag: { fr: "Lieu proche", en: "Nearby Landmark" }
      },
      {
        src: "/images/monuments/palais-des-papes-landscape.jpg",
        title: { fr: "Le Rhône & Rocher des Doms", en: "The Rhône & Doms Bluff" },
        caption: {
          fr: "Perspective fluviale depuis l'île de la Barthelasse avec le piton calcaire des Doms.",
          en: "River perspective from Barthelasse Island showing the limestone citadel rock and palace silhouette."
        },
        tag: { fr: "Paysage", en: "Landscape" }
      }
    ]
  },
  {
    id: "cite-carcassonne",
    name: {
      fr: "Cité de Carcassonne",
      en: "Cité of Carcassonne"
    },
    city: "Carcassonne",
    department: {
      fr: "Aude, Occitanie",
      en: "Aude, Occitanie"
    },
    latitude: 43.206972,
    longitude: 2.363045,
    elevation: 148,
    camera: {
      range: 580,
      heading: 65,
      pitch: -30
    },
    cameraLandscape: {
      range: 2400,
      heading: 10,
      pitch: -12
    },
    era: {
      fr: "Antiquité tardive – XIVe siècle",
      en: "Late Antiquity – 14th century"
    },
    description: {
      fr: "Ensemble fortifié d'une ampleur exceptionnelle, ceinturé de trois kilomètres de doubles remparts et de cinquante-deux tours dominant la vallée de l'Aude.",
      en: "An exceptionally preserved fortified ensemble enclosed by 3 kilometers of double ramparts and 52 watchtowers overlooking the Aude valley."
    },
    historicalNote: {
      fr: "Menacée de démolition au XIXe siècle, la cité fut sauvée et restaurée sous la direction de l'architecte Eugène Viollet-le-Duc.",
      en: "Slated for demolition in the 19th century, the citadel was preserved and comprehensively restored under architect Eugène Viollet-le-Duc."
    },
    interior: {
      image: "/images/monuments/cite-carcassonne-interior.jpg",
      title: {
        fr: "Cour du Château Comtal & Vitraux de Saint-Nazaire",
        en: "Château Comtal Courtyard & Saint-Nazaire Stained Glass"
      },
      highlight: {
        fr: "La cour d'honneur du château féodal avec ses mâchicoulis, et la basilique Saint-Nazaire ornée de chefs-d'œuvre de vitraux des XIIIe et XIVe siècles, dont le grand Arbre de Jessé aux bleus étincelants.",
        en: "The feudal castle inner ward flanked by hoardings, alongside the Saint-Nazaire Basilica housing world-renowned 13th-century stained-glass masterpieces including the luminous Tree of Jesse."
      }
    },
    landscape: {
      image: "/images/monuments/cite-carcassonne-landscape.jpg",
      title: {
        fr: "La Montagne Noire & Contreforts des Pyrénées",
        en: "The Montagne Noire & Pyrenean Foothills"
      },
      mountains: {
        fr: "Perchée sur un éperon dominant la vallée de l'Aude, la Cité s'inscrit dans un corridor stratégique adossé au nord à la Montagne Noire et au sud à la barrière blanche des Pyrénées.",
        en: "Perched on a strategic promontory between the Montagne Noire granite massif to the north and the snow-capped Pyrenean cordillera to the south."
      }
    },
    gallery: [
      {
        src: "/images/monuments/cite-carcassonne-landscape.jpg",
        title: { fr: "Vue Aérienne des Doubles Remparts", en: "Aerial View of Double Walls" },
        caption: {
          fr: "Système défensif concentrique de 3 kilomètres avec ses toitures coniques d'ardoises restaurées.",
          en: "Concentric 3-kilometer defensive system with restored slate conical turret roofs."
        },
        tag: { fr: "Aérien", en: "Aerial" }
      },
      {
        src: "/images/monuments/cite-carcassonne-gate.jpg",
        title: { fr: "Porte Narbonnaise & Pont-Levis", en: "Narbonne Gate & Drawbridge" },
        caption: {
          fr: "Entrée monumentale fortifiée encadrée par deux puissantes tours en étrave à bossages.",
          en: "Monumental fortified gatehouse flanked by twin bow-fronted ashlar masonry towers."
        },
        tag: { fr: "Architecture", en: "Architecture" }
      },
      {
        src: "/images/monuments/cite-carcassonne-chateau.jpg",
        title: { fr: "Château Comtal Féodal", en: "Count's Feudal Castle" },
        caption: {
          fr: "Forteresse intérieure du XIIe siècle ceinturée de fossés secs et de courtines crénelées.",
          en: "12th-century inner stronghold protected by deep dry moats and crenellated curtain walls."
        },
        tag: { fr: "Château", en: "Castle" }
      },
      {
        src: "/images/monuments/cite-carcassonne-interior.jpg",
        title: { fr: "Cour d'Honneur & Vitraux Saint-Nazaire", en: "Courtyard & Saint-Nazaire" },
        caption: {
          fr: "Vitraux gothiques étincelants et cour d'honneur seigneuriale du château des comtes de Trencavel.",
          en: "Radiant gothic stained glass windows and feudal courtyard of the Trencavel counts."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/cite-carcassonne-ramparts.jpg",
        title: { fr: "Les Lices & 52 Tours de Garde", en: "Outer Wards & 52 Watchtowers" },
        caption: {
          fr: "Espace des lices entre la double enceinte médiévale surplombant les plaines de l'Aude.",
          en: "The historic lists between the inner and outer defensive walls overlooking the Aude valley."
        },
        tag: { fr: "Remparts", en: "Ramparts" }
      }
    ]
  },
  {
    id: "pont-du-gard",
    name: {
      fr: "Pont du Gard",
      en: "Pont du Gard"
    },
    city: "Vers-Pont-du-Gard",
    department: {
      fr: "Gard, Occitanie",
      en: "Gard, Occitanie"
    },
    latitude: 43.947565,
    longitude: 4.534960,
    elevation: 50,
    camera: {
      range: 430,
      heading: 130,
      pitch: -25
    },
    cameraLandscape: {
      range: 1600,
      heading: 240,
      pitch: -13
    },
    era: {
      fr: "Ier siècle après J.-C. (vers 40–60)",
      en: "1st century AD (c. 40–60 AD)"
    },
    description: {
      fr: "Ouvrage d'art antique à trois étages d'arches culminant à 48,8 mètres, franchissant le lit du Gardon pour alimenter Nîmes en eau.",
      en: "Ancient Roman three-tiered aqueduct bridge standing 48.8 meters high, crossing the Gardon gorge to supply water to Nîmes."
    },
    historicalNote: {
      fr: "Construit en pierre de calcaire coquillier sans mortier, il assurait un débit quotidien moyen de 35 000 à 40 000 m³ d'eau courante.",
      en: "Erected without mortar from shelly limestone blocks, the conduit carried 35,000 to 40,000 cubic meters of fresh water per day."
    },
    interior: {
      image: "/images/monuments/pont-du-gard-interior.jpg",
      title: {
        fr: "Le Specus : Conduit d'Eau Romain Antique",
        en: "The Specus: Ancient Roman Water Conduit"
      },
      highlight: {
        fr: "À l'étage supérieur (3e niveau), le canal intérieur couvert (specus) de 1,80 m de haut et 1,20 m de large conserve son étanchéité en mortier de tuileau rouge (opus signinum) et les concrétions calcaires romaines millénaires.",
        en: "Inside the topmost 3rd tier, the covered water conduit (specus) measures 1.80m tall, preserving Roman waterproof red tile mortar (opus signinum) and thick antique mineral concretions."
      }
    },
    landscape: {
      image: "/images/monuments/pont-du-gard-landscape.jpg",
      title: {
        fr: "Les Gorges du Gardon & le Massif Méditerranéen",
        en: "The Gardon Gorges & Mediterranean Canyon"
      },
      mountains: {
        fr: "Enjambant la brèche spectaculaire creusée par le Gardon au milieu d'un plateau de garrigues rocheuses arides, d'oliviers centenaires et de falaises calcaires vertigineuses.",
        en: "Spanning a dramatic limestone canyon carved by the river Gardon amidst rugged Mediterranean scrubland, centenarian olive groves, and vertical cliffs."
      }
    },
    gallery: [
      {
        src: "/images/monuments/pont-du-gard-arches.jpg",
        title: { fr: "Les Trois Étages d'Arches Antiques", en: "Three Tiers of Roman Arches" },
        caption: {
          fr: "Chef-d'œuvre de stéréotomie romaine construit en blocs calcaires pesant jusqu'à six tonnes posés sans mortier.",
          en: "Masterpiece of Roman stereotomy built without mortar from shelly limestone blocks weighing up to six tons."
        },
        tag: { fr: "Architecture", en: "Architecture" }
      },
      {
        src: "/images/monuments/pont-du-gard-river.jpg",
        title: { fr: "Reflet sur le Gardon", en: "Gardon River Reflection" },
        caption: {
          fr: "Perspective au ras de l'eau turquoise du Gardon reflétant la symétrie grandiose des arches romaines.",
          en: "Water-level perspective across the turquoise Gardon river reflecting the grandeur of Roman arches."
        },
        tag: { fr: "Rivière", en: "River" }
      },
      {
        src: "/images/monuments/pont-du-gard-interior.jpg",
        title: { fr: "Le Specus (Conduit Intérieur)", en: "The Specus (Roman Conduit)" },
        caption: {
          fr: "Conduit supérieur antique enduit d'opus signinum rouge acheminant l'eau par gravité vers Nîmes.",
          en: "Upper conduit sealed with red Roman waterproof mortar carrying spring water toward Nîmes."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/pont-du-gard-sunset.jpg",
        title: { fr: "Crépuscule Doré sur l'Aqueduc", en: "Golden Hour Sunset on Aqueduct" },
        caption: {
          fr: "Lumière crépusculaire embrasant la pierre ocre-dorée du calcaire coquillier de Vers.",
          en: "Golden Mediterranean twilight illuminating the honey-colored Vers limestone arches."
        },
        tag: { fr: "Ambiance", en: "Atmosphere" }
      },
      {
        src: "/images/monuments/pont-du-gard-landscape.jpg",
        title: { fr: "Les Gorges du Gardon & la Garrigue", en: "Gardon Gorges & Garrigue" },
        caption: {
          fr: "Cadre naturel sauvage et classé des falaises calcaires et sentiers de garrigue méditerranéenne.",
          en: "Pristine protected canyon framed by limestone cliffs and fragrant Mediterranean garrigue."
        },
        tag: { fr: "Nature", en: "Nature" }
      }
    ]
  },
  {
    id: "cathedrale-strasbourg",
    name: {
      fr: "Cathédrale Notre-Dame de Strasbourg",
      en: "Strasbourg Cathedral"
    },
    city: "Strasbourg",
    department: {
      fr: "Bas-Rhin, Grand Est",
      en: "Bas-Rhin, Grand Est"
    },
    latitude: 48.581845,
    longitude: 7.750915,
    elevation: 142,
    camera: {
      range: 460,
      heading: 20,
      pitch: -28
    },
    cameraLandscape: {
      range: 2600,
      heading: 265,
      pitch: -12
    },
    era: {
      fr: "1176 – 1439",
      en: "1176 – 1439"
    },
    description: {
      fr: "Sommet du gothique rhénan taillé en grès rose des Vosges, réputé pour sa façade ciselée comme une dentelle et son horloge astronomique.",
      en: "Pinnacle of Rhenish Gothic carved from pink Vosges sandstone, renowned for its delicate lace-like façade and astronomical clock."
    },
    historicalNote: {
      fr: "Avec sa flèche unique culminant à 142 mètres, elle constitua le plus haut édifice de la chrétienté et du monde de 1647 à 1874.",
      en: "With its single 142-meter spire, it was the tallest architectural structure in the world from 1647 to 1874."
    },
    interior: {
      image: "/images/monuments/cathedrale-strasbourg-interior.jpg",
      title: {
        fr: "L'Horloge Astronomique & le Pilier des Anges",
        en: "The Astronomical Clock & Pillar of Angels"
      },
      highlight: {
        fr: "Chef-d'œuvre mécanique de la Renaissance conçu en 1574 par des mathématiciens et orfèvres suisses, doté d'automates sonnant à midi et d'un comput ecclésiastique perpétuel, dressé devant le grandiose Pilier du Jugement Dernier.",
        en: "Renaissance mechanical marvel constructed in 1574 featuring moving automata depicting the ages of man and apostles at solar noon, standing before the sculpted Last Judgment Pillar."
      }
    },
    landscape: {
      image: "/images/monuments/cathedrale-strasbourg-landscape.jpg",
      title: {
        fr: "Les Crêtes des Vosges & la Plaine d'Alsace",
        en: "The Vosges Mountain Crests & Alsatian Plain"
      },
      mountains: {
        fr: "Érigée au centre de la plaine du Rhin, la cathédrale est bordée à l'ouest par la chaîne bleutée des Vosges (point culminant au Grand Ballon à 1 424 m) et à l'est par la Forêt-Noire.",
        en: "Dominating the Rhine river basin, framed to the west by the blue crests of the Vosges Mountain range (Grand Ballon 1,424 m) and eastward by the Black Forest."
      }
    },
    gallery: [
      {
        src: "/images/monuments/cathedrale-strasbourg-facade.jpg",
        title: { fr: "Dentelle de Grès Rose des Vosges", en: "Pink Sandstone Lace Facade" },
        caption: {
          fr: "Façade occidentale ciselée comme de l'orfèvrerie avec ses milliers de figures sculptées et sa grande rose.",
          en: "Western facade sculpted like fine lacework with thousands of relief figures and giant rose window."
        },
        tag: { fr: "Façade", en: "Facade" }
      },
      {
        src: "/images/monuments/cathedrale-strasbourg-interior.jpg",
        title: { fr: "Horloge Astronomique & Pilier des Anges", en: "Astronomical Clock & Pillar" },
        caption: {
          fr: "Mécanisme Renaissance de 1574 animant les automates des apôtres devant le Pilier du Jugement.",
          en: "1574 Renaissance mechanical marvel animating apostolic figures before the Last Judgment column."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/cathedrale-strasbourg-petitefrance.jpg",
        title: { fr: "Canaux de la Petite France", en: "Petite France Canals View" },
        caption: {
          fr: "Perspective sur la flèche gothique s'élevant au-dessus des maisons à colombages des tanneurs.",
          en: "Distant view of the cathedral spire soaring above half-timbered tanner houses along the Ill river."
        },
        tag: { fr: "Quartier", en: "Historic District" }
      },
      {
        src: "/images/monuments/cathedrale-strasbourg-landscape.jpg",
        title: { fr: "Vue depuis le Barrage Vauban", en: "View from Vauban Dam" },
        caption: {
          fr: "Vue panoramique embrassant les Ponts Couverts, les tours médiévales et la silhouette de la cathédrale.",
          en: "Panoramic view taking in the Ponts Couverts, medieval towers, and the towering cathedral silhouette."
        },
        tag: { fr: "Panorama", en: "Panorama" }
      },
      {
        src: "/images/monuments/cathedrale-strasbourg-facade.jpg",
        title: { fr: "La Flèche Gothique de 142 Mètres", en: "The 142m Gothic Spire" },
        caption: {
          fr: "Plus haute structure humaine du monde pendant plus de deux siècles (1647 à 1874).",
          en: "Tallest architectural construction in the world for more than two centuries (1647 to 1874)."
        },
        tag: { fr: "Flèche", en: "Spire" }
      }
    ]
  },
  {
    id: "cathedrale-rouen",
    name: {
      fr: "Cathédrale Notre-Dame de Rouen",
      en: "Rouen Cathedral"
    },
    city: "Rouen",
    department: {
      fr: "Seine-Maritime, Normandie",
      en: "Seine-Maritime, Normandy"
    },
    latitude: 49.440239,
    longitude: 1.094833,
    elevation: 25,
    camera: {
      range: 440,
      heading: 30,
      pitch: -28
    },
    cameraLandscape: {
      range: 2200,
      heading: 120,
      pitch: -13
    },
    era: {
      fr: "XIIe – XVIe siècle",
      en: "12th – 16th century"
    },
    description: {
      fr: "Cathédrale d'un gothique flamboyant éclatant, couronnée par une flèche en fonte de 151 mètres qui domine la boucle de la Seine.",
      en: "Flamboyant Gothic cathedral crowned by a 151-meter cast-iron spire dominating the lower Seine river valley."
    },
    historicalNote: {
      fr: "Claude Monet y consacra sa célèbre série de plus de trente toiles; la crypte abrite le reliquaire renfermant le cœur de Richard Cœur de Lion.",
      en: "Subject of Claude Monet's famous series of over 30 paintings; the crypt preserves the heart of King Richard the Lionheart."
    },
    interior: {
      image: "/images/monuments/cathedrale-rouen-interior.jpg",
      title: {
        fr: "Le Chœur Gothique & Cœur de Richard Cœur de Lion",
        en: "The Gothic Choir & Heart of Richard the Lionheart"
      },
      highlight: {
        fr: "Élévation vertigineuse à 28 mètres sous voûte, le chœur du XIIIe siècle conserve les gisants sculptés des ducs de Normandie et le tombeau solennel renfermant le cœur embaumé du roi d'Angleterre Richard Ier.",
        en: "Soaring 28-meter choir containing the sculpted effigies of the Norman Dukes and the historic tomb housing the embalmed heart of King Richard the Lionheart."
      }
    },
    landscape: {
      image: "/images/monuments/cathedrale-rouen-landscape.jpg",
      title: {
        fr: "La Côte Sainte-Catherine & les Falaises de la Seine",
        en: "Sainte-Catherine Hill & the Chalk River Cliffs"
      },
      mountains: {
        fr: "Nichée dans un méandre encaissé de la Seine, la cathédrale est surplombée par la haute falaise de craie de la colline Sainte-Catherine (140 m), d'où Monet et Turner peignirent la ville.",
        en: "Cradled within an entrenched meander of the Seine valley, bordered by the steep 140-meter white chalk promontory of Sainte-Catherine painted by Monet and Turner."
      }
    },
    gallery: [
      {
        src: "/images/monuments/cathedrale-rouen-facade.jpg",
        title: { fr: "Portail Occidental & Série de Monet", en: "West Portal & Monet Series" },
        caption: {
          fr: "Façade de dentelle flamboyante peinte par Claude Monet à différentes heures du jour.",
          en: "Flamboyant gothic portal studied by Monet across more than 30 Impressionist canvases."
        },
        tag: { fr: "Façade", en: "Facade" }
      },
      {
        src: "/images/monuments/cathedrale-rouen-spire.jpg",
        title: { fr: "Flèche de Fonte (151 m) & Tour de Beurre", en: "Cast-Iron Spire (151m) & Butter Tower" },
        caption: {
          fr: "Plus haute flèche de France culminant à 151 mètres au-dessus des toits normands.",
          en: "Tallest cathedral spire in France soaring 151 meters above the historic roofs of Rouen."
        },
        tag: { fr: "Flèche", en: "Spire" }
      },
      {
        src: "/images/monuments/cathedrale-rouen-interior.jpg",
        title: { fr: "Chœur Gothique & Gisants des Ducs", en: "Gothic Choir & Norman Tombs" },
        caption: {
          fr: "Vaisseau du XIIIe siècle abritant la sépulture et le cœur de Richard Cœur de Lion.",
          en: "13th-century vaulted choir preserving the sculpted tomb of King Richard the Lionheart."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/cathedrale-rouen-streets.jpg",
        title: { fr: "Rues Pavées Médiévales & Gros-Horloge", en: "Cobbled Streets & Gros-Horloge" },
        caption: {
          fr: "Perspective depuis les ruelles médiévales bordées de maisons à encorbellement.",
          en: "Charming perspective from Rouen's timber-framed medieval pedestrian streets."
        },
        tag: { fr: "Quartier", en: "Old Town" }
      },
      {
        src: "/images/monuments/cathedrale-rouen-landscape.jpg",
        title: { fr: "Panorama depuis la Colline Sainte-Catherine", en: "Sainte-Catherine Hill Panorama" },
        caption: {
          fr: "Vue d'ensemble sur la boucle de la Seine et les flèches de la ville aux cent clochers.",
          en: "Iconic overlook of the Seine river loop and the spires of the 'city of a hundred steeples'."
        },
        tag: { fr: "Panorama", en: "Panorama" }
      }
    ]
  },
  {
    id: "notre-dame-de-la-garde",
    name: {
      fr: "Basilique Notre-Dame de la Garde",
      en: "Notre-Dame de la Garde Basilica"
    },
    city: "Marseille",
    department: {
      fr: "Bouches-du-Rhône, Provence-Alpes-Côte d'Azur",
      en: "Bouches-du-Rhône, Provence-Alpes-Côte d'Azur"
    },
    latitude: 43.284112,
    longitude: 5.371302,
    elevation: 154,
    camera: {
      range: 520,
      heading: 330,
      pitch: -25
    },
    cameraLandscape: {
      range: 2500,
      heading: 165,
      pitch: -11
    },
    era: {
      fr: "1853 – 1864 (Consécration en 1864)",
      en: "1853 – 1864 (Consecrated 1864)"
    },
    description: {
      fr: "Basilique romano-byzantine érigée sur un piton calcaire à 149 mètres d'altitude, veillant traditionnellement sur les navigateurs et la cité phocéenne.",
      en: "Romano-Byzantine basilica erected on a 149-meter limestone outcrop, historically watching over mariners and the Mediterranean port."
    },
    historicalNote: {
      fr: "Surmontée d'un campanile portant une statue monumentale de la Vierge à l'Enfant dorée à la feuille, haute de 11,2 mètres.",
      en: "Topped with a bell tower bearing an 11.2-meter gilded bronze statue of the Virgin and Child, visible far out to sea."
    },
    interior: {
      image: "/images/monuments/notre-dame-de-la-garde-interior.jpg",
      title: {
        fr: "Mosaïques Byzantines d'Or & Ex-Votos Maritimes",
        en: "Byzantine Gold Mosaics & Marine Ex-Votos"
      },
      highlight: {
        fr: "Somptueux dômes recouverts de plus de 12 millions de tesselles d'or et d'émail vénitien, accompagnés de centaines de maquettes de bateaux suspendues sous les voûtes et de tableaux ex-voto de marins rescapés de tempêtes.",
        en: "Breathtaking cupolas adorned with over 12 million Venetian gold and colored glass mosaic tiles, enriched with hundreds of model ships suspended from the nave by grateful mariners."
      }
    },
    landscape: {
      image: "/images/monuments/notre-dame-de-la-garde-landscape.jpg",
      title: {
        fr: "Le Massif des Calanques & la Mer Méditerranée",
        en: "The Calanques Mountain Massif & Mediterranean"
      },
      mountains: {
        fr: "Perchée sur le plus haut rocher de Marseille, la basilique offre une vue panoramique sur les falaises blanches vertigineuses du Massif des Calanques (Mont Puget 563 m) et les îles du Frioul.",
        en: "Perched high on a limestone pinnacle, commanding a 360° panorama over the towering white sea cliffs of the Calanques National Park (Mont Puget 563 m) and the Frioul archipelago."
      }
    },
    gallery: [
      {
        src: "/images/monuments/notre-dame-de-la-garde-facade.jpg",
        title: { fr: "Campanile & Vierge Dorée à l'Enfant", en: "Bell Tower & Gilded Virgin" },
        caption: {
          fr: "Statue monumentale de la Bonne Mère de 11 mètres dorée à la feuille veillant sur la Méditerranée.",
          en: "11-meter gilded statue of the Bonne Mère looking out across the Mediterranean waters."
        },
        tag: { fr: "Architecture", en: "Architecture" }
      },
      {
        src: "/images/monuments/notre-dame-de-la-garde-vieuxport.jpg",
        title: { fr: "Surplombant le Vieux-Port", en: "Overlooking the Old Port" },
        caption: {
          fr: "Panorama spectaculaire plongeant sur les quais du Vieux-Port et le Fort Saint-Jean.",
          en: "Spectacular commanding view over Marseille's 2,600-year-old Old Port and harbor fortresses."
        },
        tag: { fr: "Vue Urbaine", en: "Harbor View" }
      },
      {
        src: "/images/monuments/notre-dame-de-la-garde-interior.jpg",
        title: { fr: "Mosaïques d'Or & Maquettes Ex-Voto", en: "Gold Mosaics & Ship Models" },
        caption: {
          fr: "Douze millions de tesselles d'or vénitien et maquettes de navires suspendues par les marins rescapés.",
          en: "Twelve million Venetian gold tesserae and model ships suspended by grateful surviving mariners."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/notre-dame-de-la-garde-sunset.jpg",
        title: { fr: "Coucher de Soleil sur les Îles du Frioul", en: "Sunset over Frioul Islands" },
        caption: {
          fr: "Crépuscule méditerranéen flamboyant embrasant le Château d'If et l'archipel du Frioul.",
          en: "Vibrant Mediterranean sunset setting the Château d'If and offshore islands ablaze with gold."
        },
        tag: { fr: "Crépuscule", en: "Sunset" }
      },
      {
        src: "/images/monuments/notre-dame-de-la-garde-landscape.jpg",
        title: { fr: "Massif des Calanques & Falaise Maritime", en: "Calanques Cliffs & Open Sea" },
        caption: {
          fr: "Piton calcaire escarpé s'élevant à 149 mètres face aux criques blanches et à la grande bleue.",
          en: "Steep limestone peak rising 149 meters above sea level opposite the white fjord cliffs."
        },
        tag: { fr: "Paysage", en: "Landscape" }
      }
    ]
  },
  {
    id: "arenes-arles",
    name: {
      fr: "Amphithéâtre romain d'Arles",
      en: "Roman Amphitheatre of Arles"
    },
    city: "Arles",
    department: {
      fr: "Bouches-du-Rhône, Provence-Alpes-Côte d'Azur",
      en: "Bouches-du-Rhône, Provence-Alpes-Côte d'Azur"
    },
    latitude: 43.677845,
    longitude: 4.630985,
    elevation: 20,
    camera: {
      range: 420,
      heading: 140,
      pitch: -30
    },
    cameraLandscape: {
      range: 1800,
      heading: 50,
      pitch: -13
    },
    era: {
      fr: "Vers 90 après J.-C. (Époque flavienne)",
      en: "c. 90 AD (Flavian Dynasty)"
    },
    description: {
      fr: "Arène romaine monumentale à deux niveaux de soixante arcades chacun, édifiée selon les principes architecturaux du Colisée de Rome.",
      en: "Monumental Roman amphitheatre featuring two tiers of 60 arcades each, modeled after Rome's Colosseum."
    },
    historicalNote: {
      fr: "Au Moyen Âge, l'amphithéâtre fut transformé en cité fortifiée fermée intégrant plus de deux cents habitations et quatre tours défensives.",
      en: "During the Middle Ages, the arena was transformed into a self-contained walled citadel with over 200 residences and 4 defense towers."
    },
    interior: {
      image: "/images/monuments/arenes-arles-interior.jpg",
      title: {
        fr: "La Piste Antique & les Gradins de la Cavea",
        en: "The Ancient Arena Floor & Cavea Tiers"
      },
      highlight: {
        fr: "Amphithéâtre elliptique de 136 mètres sur 107 mètres pouvant accueillir jusqu'à 21 000 spectateurs répartis sur trente-quatre rangs de gradins superposés, équipé d'un ingénieux réseau de vomitoires et de galeries concentriques voûtées.",
        en: "Elliptical 136m by 107m amphitheatre accommodating up to 21,000 spectators across 34 stone tiers, served by an advanced network of barrel-vaulted vomitoria and circular corridors."
      }
    },
    landscape: {
      image: "/images/monuments/arenes-arles-landscape.jpg",
      title: {
        fr: "Le Massif des Alpilles & la Plaine de Crau",
        en: "The Alpilles Massif & Crau Plain"
      },
      mountains: {
        fr: "Bordée à l'ouest par le cours du Rhône et à l'est par la crête calcaire blanche déchiquetée des Alpilles (point culminant aux Opies à 498 m), célébrée par Van Gogh.",
        en: "Bordered westward by the wide Rhône river and to the east by the jagged white limestone crests of the Alpilles range celebrated by Van Gogh."
      }
    },
    gallery: [
      {
        src: "/images/monuments/arenes-arles-aerial.jpg",
        title: { fr: "Vue Aérienne de l'Amphithéâtre", en: "Aerial View of the Roman Arena" },
        caption: {
          fr: "Colosse elliptique romain parfaitement intégré dans le tissu urbain préservé d'Arles.",
          en: "Colossal Roman elliptical arena seamlessly woven into the historic urban fabric of Arles."
        },
        tag: { fr: "Aérien", en: "Aerial" }
      },
      {
        src: "/images/monuments/arenes-arles-facade.jpg",
        title: { fr: "Arcades Antiques en Calcaire de Fontvieille", en: "Roman Arches in Fontvieille Stone" },
        caption: {
          fr: "Deux étages de soixante arcades d'ordre dorique et corinthien taillées au Ier siècle.",
          en: "Two tiers of 60 Doric and Corinthian arches carved from hard local limestone in the 1st century."
        },
        tag: { fr: "Architecture", en: "Architecture" }
      },
      {
        src: "/images/monuments/arenes-arles-interior.jpg",
        title: { fr: "La Piste Centrale & la Cavea", en: "Arena Floor & Ancient Cavea" },
        caption: {
          fr: "Gradins antiques restaurés accueillant encore corridas traditionnelles et festivals d'été.",
          en: "Restored Roman stone tiers continuing to host summer spectacles and Provençal festivities."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/arenes-arles-evening.jpg",
        title: { fr: "Illumination Crépusculaire Romaine", en: "Roman Evening Illumination" },
        caption: {
          fr: "Lumière crépusculaire révélant les tours médiévales et les arcades bimillénaires.",
          en: "Nocturnal lighting accentuating the medieval watchtowers built atop the Roman arcades."
        },
        tag: { fr: "Nocturne", en: "Night" }
      },
      {
        src: "/images/monuments/arenes-arles-landscape.jpg",
        title: { fr: "Perspective sur les Toits & les Alpilles", en: "Rooftops & Alpilles Mountains" },
        caption: {
          fr: "Vue d'horizon s'ouvrant sur les collines calcaires provençales peintes par Vincent van Gogh.",
          en: "Horizon view looking towards the rugged limestone Alpilles hills painted by Van Gogh."
        },
        tag: { fr: "Paysage", en: "Landscape" }
      }
    ]
  },
  {
    id: "place-stanislas",
    name: {
      fr: "Place Stanislas",
      en: "Place Stanislas"
    },
    city: "Nancy",
    department: {
      fr: "Meurthe-et-Moselle, Grand Est",
      en: "Meurthe-et-Moselle, Grand Est"
    },
    latitude: 48.693582,
    longitude: 6.183244,
    elevation: 215,
    camera: {
      range: 380,
      heading: 0,
      pitch: -32
    },
    cameraLandscape: {
      range: 2300,
      heading: 270,
      pitch: -12
    },
    era: {
      fr: "1751 – 1755 (XVIIIe siècle classique)",
      en: "1751 – 1755 (18th century Classical)"
    },
    description: {
      fr: "Joyau de l'urbanisme des Lumières, ensemble architectural d'une rare élégance combinant pavillons classiques et grilles dorées à la feuille.",
      en: "Crown jewel of Enlightenment urban design, uniting monumental classical pavilions and gilded wrought-iron gates."
    },
    historicalNote: {
      fr: "Commandée par Stanislas Leszczynski, roi déchu de Pologne devenu duc de Lorraine, pour honorer son gendre le roi Louis XV de France.",
      en: "Commissioned by Stanislas Leszczynski, exiled King of Poland and Duke of Lorraine, to honor his son-in-law Louis XV of France."
    },
    interior: {
      image: "/images/monuments/place-stanislas-interior.jpg",
      title: {
        fr: "Le Grand Salon Carré de l'Hôtel de Ville",
        en: "The Grand Salon of Nancy City Hall"
      },
      highlight: {
        fr: "Somptueux salon d'apparat du XVIIIe siècle orné de lambris sculptés, de lustres monumentaux en cristal de Baccarat et d'immenses verrières en plein cintre donnant une vue plongeante directe sur l'ensemble de la Place Stanislas.",
        en: "Sumptuous 18th-century ceremonial salon featuring hand-carved woodwork, monumental Baccarat crystal chandeliers, and arched windows surveying Place Stanislas."
      }
    },
    landscape: {
      image: "/images/monuments/place-stanislas-landscape.jpg",
      title: {
        fr: "Le Plateau de Haye & les Collines de Lorraine",
        en: "The Haye Forested Plateau & Lorraine Hills"
      },
      mountains: {
        fr: "Encadrée par la vallée verdoyante de la Meurthe et le vaste plateau calcaire boisé de la forêt de Haye qui couronne l'horizon lorrain.",
        en: "Nestled within the green Meurthe river basin, framed by the forested limestone cuesta and wooded hills of the Haye plateau."
      }
    },
    gallery: [
      {
        src: "/images/monuments/place-stanislas-fountain.jpg",
        title: { fr: "Fontaine de Neptune & d'Amphitrite", en: "Neptune & Amphitrite Fountain" },
        caption: {
          fr: "Chef-d'œuvre de plomb sculpté de Guibal niché sous les grilles royales en fer forgé.",
          en: "Baroque lead sculpture by Guibal sheltered beneath Lamour's monumental gilded ironwork."
        },
        tag: { fr: "Fontaine", en: "Fountain" }
      },
      {
        src: "/images/monuments/place-stanislas-gates.jpg",
        title: { fr: "Grilles Dorées à la Feuille de Jean Lamour", en: "Gilded Gates of Jean Lamour" },
        caption: {
          fr: "Dentelle de fer forgé rocaille rehaussée d'or fin marquant les angles de la place royale.",
          en: "Exquisite Rococo wrought-iron screens accented in pure gold leaf guarding the plaza corners."
        },
        tag: { fr: "Ferronnerie", en: "Ironwork" }
      },
      {
        src: "/images/monuments/place-stanislas-interior.jpg",
        title: { fr: "Grand Salon de l'Hôtel de Ville", en: "City Hall Grand Reception Room" },
        caption: {
          fr: "Salon ducal orné de lustres de Baccarat et de boiseries dorées surplombant la place.",
          en: "Ducal ceremonial salon with crystal chandeliers and gilded paneling directly overlooking the square."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/place-stanislas-night.jpg",
        title: { fr: "Perspective Nocturne & Pavage Royal", en: "Nocturnal Illumination & Paving" },
        caption: {
          fr: "Illumination dorée mettant en valeur la symétrie parfaite des façades classiques d'Héré.",
          en: "Warm golden floodlighting illuminating the harmonious classical proportions designed by Héré."
        },
        tag: { fr: "Nocturne", en: "Night" }
      },
      {
        src: "/images/monuments/place-stanislas-landscape.jpg",
        title: { fr: "L'Ensemble Ducal & le Parc de la Pépinière", en: "Ducal Complex & Pépinière Park" },
        caption: {
          fr: "Axe royal majestueux reliant la place Stanislas à l'arc Héré et à la place de la Carrière.",
          en: "Grand ceremonial axis linking Place Stanislas to the Arc Héré and the historic ducal gardens."
        },
        tag: { fr: "Urbanisme", en: "Urban Design" }
      }
    ]
  },
  {
    id: "cathedrale-reims",
    name: {
      fr: "Cathédrale Notre-Dame de Reims",
      en: "Reims Cathedral"
    },
    city: "Reims",
    department: {
      fr: "Marne, Grand Est",
      en: "Marne, Grand Est"
    },
    latitude: 49.253712,
    longitude: 4.034045,
    elevation: 88,
    camera: {
      range: 450,
      heading: 75,
      pitch: -28
    },
    cameraLandscape: {
      range: 2200,
      heading: 190,
      pitch: -12
    },
    era: {
      fr: "1211 – 1275",
      en: "1211 – 1275"
    },
    description: {
      fr: "Chef-d'œuvre du gothique classique réputé pour sa statuaire remarquable, dont la célèbre figure de l'Ange au Sourire ornant le portail occidental.",
      en: "Masterpiece of High Gothic architecture distinguished by extensive statuary, including the famous Smiling Angel on the west portal."
    },
    historicalNote: {
      fr: "Haut lieu de l'histoire monarchique française : trente-trois souverains légitimes y furent sacrés, de Louis VIII en 1223 à Charles X en 1825.",
      en: "Sanctuary of French royal coronations: thirty-three monarchs were crowned within its nave between 1223 and 1825."
    },
    interior: {
      image: "/images/monuments/cathedrale-reims-interior.jpg",
      title: {
        fr: "La Nef du Sacre & Vitraux de Marc Chagall",
        en: "The Coronation Nave & Marc Chagall Stained Glass"
      },
      highlight: {
        fr: "La nef majestueuse de 138 mètres où les rois de France recevaient l'onction sacrée, illuminée par les somptueux vitraux contemporains bleu cobalt créés par Marc Chagall en 1974 dans la chapelle axiale.",
        en: "The solemn 138-meter nave where 33 French monarchs were anointed with holy oil, crowned by Marc Chagall's radiant cobalt blue stained-glass windows in the central axial chapel."
      }
    },
    landscape: {
      image: "/images/monuments/cathedrale-reims-landscape.jpg",
      title: {
        fr: "Le Parc Naturel de la Montagne de Reims",
        en: "The Montagne de Reims Natural Park"
      },
      mountains: {
        fr: "Dominée au sud par le relief boisé et les coteaux escarpés de la Montagne de Reims (286 m), couverte des plus prestigieux vignobles de Champagne et des célèbres Faux de Verzy.",
        en: "Framed to the south by the prominent wooded plateau and terraced slopes of the Montagne de Reims (286 m), blanketed in Grand Cru Champagne vineyards."
      }
    },
    gallery: [
      {
        src: "/images/monuments/cathedrale-reims-facade.jpg",
        title: { fr: "Façade Royale & Portails Sculptés", en: "Royal West Facade & Portals" },
        caption: {
          fr: "Plus de 2 300 statues ciselées ornent la façade gothique, sommet de la sculpture médiévale.",
          en: "Over 2,300 sculpted figures grace the West facade, representing the pinnacle of medieval stonecraft."
        },
        tag: { fr: "Façade", en: "Facade" }
      },
      {
        src: "/images/monuments/cathedrale-reims-angel.jpg",
        title: { fr: "L'Ange au Sourire Emblématique", en: "The Smiling Angel of Reims" },
        caption: {
          fr: "Statue du XIIIe siècle devenue symbole universel de paix et de grâce artistique médiévale.",
          en: "13th-century smiling angel statue revered worldwide as an emblem of medieval artistic grace."
        },
        tag: { fr: "Sculpture", en: "Sculpture" }
      },
      {
        src: "/images/monuments/cathedrale-reims-rose.jpg",
        title: { fr: "Grande Rose Occidentale & Vitraux", en: "Great West Rose Window" },
        caption: {
          fr: "Rose gothique de douze mètres de diamètre dédiée à la Dormition et au Couronnement de la Vierge.",
          en: "12-meter diameter Gothic rose window depicting the Dormition and Coronation of the Virgin."
        },
        tag: { fr: "Vitraux", en: "Stained Glass" }
      },
      {
        src: "/images/monuments/cathedrale-reims-interior.jpg",
        title: { fr: "Nef des Sacres Royaux & Vitraux Chagall", en: "Coronation Nave & Chagall Windows" },
        caption: {
          fr: "Nef où furent sacrés trente-trois rois de France illuminée par les bleus de Marc Chagall.",
          en: "Solemn nave where 33 French kings were crowned, bathed in cobalt light from Chagall's windows."
        },
        tag: { fr: "Intérieur", en: "Interior" }
      },
      {
        src: "/images/monuments/cathedrale-reims-landscape.jpg",
        title: { fr: "Vignobles de la Montagne de Reims", en: "Montagne de Reims Vineyards" },
        caption: {
          fr: "Coteaux champenois classés à l'UNESCO ceinturant la cathédrale des sacres de France.",
          en: "UNESCO-listed Champagne hillside vineyards providing a picturesque backdrop to the coronation city."
        },
        tag: { fr: "Vignobles", en: "Vineyards" }
      }
    ]
  }
];

export const UI_TRANSLATIONS = {
  fr: {
    institution: "Patrimoine Architectural Français",
    title: "Monuments de France",
    subtitle: "Visualisation cartographique 3D des grands édifices historiques en région.",
    selectLabel: "Sélectionner un édifice",
    counterPrefix: "Édifice",
    btnPrev: "‹ Précédent",
    btnNext: "Suivant ›",
    btnOrbit: "Rotation 360°",
    btnStopOrbit: "Arrêter l'orbite",
    mapLayerLabel: "Fond Cartographique",
    layerSatellite: "Satellite",
    layerHybrid: "Hybride",
    layerStreet: "Plan Urbain",
    viewModeGlobe: "Aérien 3D",
    viewModeGallery: "Galerie Réelle",
    viewModeInterior: "Intérieur & Trésors",
    viewModeLandscape: "Montagnes & Relief",
    galleryHeading: "Galerie Photographique & Vues Naturelles",
    gallerySub: "5 photographies authentiques haute résolution de l'édifice et de son environnement.",
    lightboxZoom: "Cliquer pour agrandir en plein écran",
    lightboxClose: "Fermer",
    lightboxPrev: "Photo précédente",
    lightboxNext: "Photo suivante",
    photoCounter: "Photo",
    of: "sur",
    periodLabel: "Époque",
    historicalContext: "Notice Historique",
    coordinatesHeading: "Coordonnées WGS84",
    latLabel: "Latitude",
    lonLabel: "Longitude",
    altLabel: "Élévation",
    stationaryStatus: "Stationnaire :",
    flightStatus: "Déplacement caméra :",
    earthOrbitStage: "Orbite terrestre",
    franceStage: "Vue générale France",
    navHeader: "Commandes de Navigation",
    navPan: "Rotation & Déplacement",
    navTilt: "Orbite & Inclinaison 3D",
    navZoom: "Zoom avant / arrière",
    keyPan: "Clic gauche + glisser",
    keyTilt: "Clic milieu ou Ctrl + glisser",
    keyZoom: "Molette de la souris",
    interiorBadge: "CHEF-D'ŒUVRE & INTÉRIEUR",
    landscapeBadge: "CADRE NATUREL & RELIEF",
    btnTiltHorizon: "Vue Horizon & Montagnes"
  },
  en: {
    institution: "French Architectural Heritage",
    title: "Monuments of France",
    subtitle: "3D geospatial survey of major historical landmarks across French regions.",
    selectLabel: "Select Landmark",
    counterPrefix: "Landmark",
    btnPrev: "‹ Previous",
    btnNext: "Next ›",
    btnOrbit: "360° Orbit",
    btnStopOrbit: "Stop Orbit",
    mapLayerLabel: "Cartographic Basemap",
    layerSatellite: "Satellite",
    layerHybrid: "Hybrid",
    layerStreet: "Urban Map",
    viewModeGlobe: "3D Aerial",
    viewModeGallery: "Photo Gallery",
    viewModeInterior: "Interior & Treasures",
    viewModeLandscape: "Mountains & Landscape",
    galleryHeading: "Photographic Gallery & Natural Views",
    gallerySub: "5 authentic high-resolution photographs of the monument and its surroundings.",
    lightboxZoom: "Click to expand in fullscreen",
    lightboxClose: "Close",
    lightboxPrev: "Previous photo",
    lightboxNext: "Next photo",
    photoCounter: "Photo",
    of: "of",
    periodLabel: "Period",
    historicalContext: "Historical Context",
    coordinatesHeading: "WGS84 Coordinates",
    latLabel: "Latitude",
    lonLabel: "Longitude",
    altLabel: "Elevation",
    stationaryStatus: "Stationary:",
    flightStatus: "Camera motion:",
    earthOrbitStage: "Earth Orbit Overview",
    franceStage: "National Overview (France)",
    navHeader: "Navigation Controls",
    navPan: "Rotate & Pan View",
    navTilt: "3D Orbit & Tilt",
    navZoom: "Zoom In / Out",
    keyPan: "Left Click + Drag",
    keyTilt: "Middle Click or Ctrl + Drag",
    keyZoom: "Mouse Wheel",
    interiorBadge: "INTERIOR MASTERPIECE",
    landscapeBadge: "NATURAL SETTING & MOUNTAINS",
    btnTiltHorizon: "Horizon & Mountain View"
  }
};
