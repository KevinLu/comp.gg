const championRankings = require('./championRankings');
const champIdToName = require('./champIdToName');

const ENGAGE_CHAMPIONS = {
  'Top': ["Vladimir", "Ryze", "Sion", "Teemo", "Chogath", "DrMundo",	"Cassiopeia", "Heimerdinger", "Nasus", "Gragas",
          "Mordekaiser",	"Akali", "Kennen", "Volibear", "Gnar", "Sylas",	"Neeko", "Singed", "Karma",	"Malphite",
          "Maokai", "Rumble", "Poppy", "Shen", "Lulu", "Ornn", "Wukong",	"Sett"],
  'Jungle': ["Nunu","Amumu","Rammus","Trundle","JarvanIV","Skarner","Poppy","Gragas","Shen","Volibear","Sejuani",
             "Zac","Ivern","Sett","Olaf","XinZhao","Warwick","Twitch","Shaco","Elise","Wukong","LeeSin","Rengar",
             "RekSai","Fiddlesticks","Morgana","Evelynn","Karthus","Nidalee","Taliyah","Ekko","Sylas","Lillia"],
  'Middle': ["Tristana","Tryndamere","Irelia","Nocturne","Renekton","Garen","Talon","Graves","Jayce","Diana","Yasuo",
             "Camille","Lucian","Zed","Yone","Sett","Annie","LeBlanc","Vladimir","Kassadin","Swain","Katarina",
             "Rumble", "Pantheon","Akali","Kennen","Fizz","Zoe","Taliyah","Ekko","Qiyana","Sylas","Pyke","Galio",
             "TwistedFate", "Morgana","Zilean","Karma","Malphite","Lux","Xerath","Ahri","Lulu","Lissandra","Syndra",
             "AurelionSol", "Velkoz","Neeko"],
  'Bottom': ["Ashe","Veigar","Swain","Heimerdinger","Ezreal","Varus","Syndra","Senna","Twitch","Vayne","Karthus",
             "Cassiopeia","KogMaw","Tristana","Draven","Kaisa","Jinx","Lucian","Kalista","Xayah","Sivir",
             "MissFortune","Caitlyn","Ziggs","Yasuo","Jhin","Aphelios"],
  'Support': ["Maokai","Poppy","Pantheon","Shen","Senna","Pyke","Sett","Galio","Alistar","Blitzcrank","Leona",
              "Nautilus","Braum","TahmKench","Thresh"]
}

const DISENGAGE_CHAMPIONS = {
  'Top': ["Singed","Karma","Malphite","Maokai","Rumble","Poppy","Shen","Lulu","Ornn"],
  'Jungle': ["Nunu","Amumu","Rammus","Trundle","JarvanIV","Skarner","Poppy","Gragas","Shen","Volibear","Sejuani","Zac",
            "Ivern","Sett"],
  'Middle': ["Kayle","Ryze","Karthus","Chogath","Anivia","Corki","Veigar","Orianna","Cassiopeia","Heimerdinger","Malzahar",
          "Viktor","Ziggs","Azir","Galio","TwistedFate","Morgana","Zilean","Karma","Malphite","Lux","Xerath","Ahri",
          "Lulu","Lissandra","Syndra","AurelionSol","Velkoz","Neeko"],
  'Bottom': ["Ashe","Veigar","Swain","Heimerdinger","Ezreal","Varus","Syndra","Senna","Tristana","Draven","Kaisa",
            "Jinx","Lucian","Kalista","Xayah"],
  'Support': ["Soraka","Morgana","Zilean","Sona","Janna","Karma","Taric","Lux","Lulu","Nami","Yuumi","Bard","Rakan"]
}

const POKE_AND_SIEGE_CHAMPIONS = {

  'Top' : ["Vladimir", "Ryze", "Sion", "Teemo", "Chogath","DrMundo", "Cassiopeia", "Heimerdinger", "Nasus", "Gragas",
           "Mordekaiser", "Akali", "Kennen", "Volibear", "Gnar", "Sylas", "Neeko", "Singed", "Karma", "Malphite",
           "Maokai", "Rumble", "Poppy", "Shen", "Lulu", "Ornn", "Jayce"],

  'Jungle' : ["Fiddlesticks", "Morgana", "Evelynn", "Karthus", "Nidalee", "Taliyah","Ekko","Sylas","Lillia"],

  'Middle' : ["Kayle", "Ryze", "Karthus", "Chogath", "Anivia", "Corki", "Veigar", "Orianna", "Cassiopeia",
              "Heimerdinger", "Malzahar","Viktor","Ziggs","Azir"],

  'Bottom' : ["Ashe", "Veigar", "Swain", "Heimerdinger", "Ezreal", "Varus", "Syndra", "Senna", "Sivir",
              "MissFortune", "Caitlyn", "Ziggs", "Yasuo", "Jhin", 'Aphelios'],

  'Support' : ["Shaco", "Veigar", "Swain", "Brand", "Gragas", "Xerath", "Zyra", "Velkoz", "Neeko", "Soraka",
               "Morgana", "Zilean", "Sona", "Janna", "Karma", "Taric", "Lux", "Lulu", "Nami", "Yuumi", "Bard", "Rakan"]

}

const PICK_CHAMPIONS = {
  'Top': ["Olaf","Urgot","Warwick","Renekton","Wukong","Vayne","Pantheon","Garen","Riven","Rengar","Fiora","Darius",
          "Camille","Kled","Aatrox","Sett","Singed","Karma","Malphite","Maokai","Rumble","Poppy","Shen","Lulu","Ornn",
          "Vladimir","Ryze","Sion","Teemo","Chogath","DrMundo","Cassiopeia","Heimerdinger","Nasus","Gragas",
          "Mordekaiser","Akali","Kennen","Volibear","Gnar","Sylas","Neeko"],
  'Jungle': ["Olaf","XinZhao","Warwick","Twitch","Shaco","Elise","Wukong","LeeSin","Rengar","Kindred","RekSai","Nunu",
             "Amumu","Rammus","Trundle","JarvanIV","Skarner","Poppy","Gragas","Shen","Volibear","Sejuani","Zac",
             "Ivern","Sett","Jax","DrMundo","Nocturne","Udyr","Shyvana","Graves","Hecarim","Khazix","Kayn","Vi",
             "Fiddlesticks","Morgana","Evelynn","Karthus","Nidalee","Taliyah","Ekko","Sylas","Lillia"],
  'Middle': ["Tristana","Tryndamere","Irelia","Nocturne","Renekton","Garen","Talon","Graves","Jayce","Diana","Yasuo",
             "Camille","Lucian","Zed","Yone","Sett","Annie","LeBlanc","Vladimir","Kassadin","Swain","Katarina",
             "Rumble","Gragas","Pantheon","Akali","Kennen","Fizz","Zoe","Taliyah","Ekko","Qiyana","Sylas","Pyke",
             "Galio","TwistedFate","Morgana","Zilean","Karma","Malphite","Lux","Xerath","Ahri","Lulu","Lissandra",
             "Syndra","AurelionSol","Velkoz","Neeko"],
  'Bottom': ["Ashe","Veigar","Swain","Heimerdinger","Ezreal","Varus","Syndra","Senna","Tristana","Draven","Kaisa",
             "Jinx","Lucian","Kalista","Xayah"],
  'Support': ["Maokai","Poppy","Pantheon","Shen","Senna","Pyke","Sett","Galio","Alistar","Blitzcrank","Leona",
              "Nautilus","Braum","TahmKench","Thresh"]
}

const SPLITPUSH_CHAMPIONS = {

  'Top' : ["Kayle", "Tryndamere", "Jax", "Irelia", "Gangplank", "Udyr", "Yorick", "Jayce", "Quinn", "Yasuo",
           "Lucian", "Illaoi", "Yone", "Olaf", "Urgot", "Warwick", "Renekton", "Wukong", "Vayne", "Pantheon",
           "Garen", "Riven", "Rengar", "Fiora", "Darius", "Camille", "Kled", "Aatrox", "Sett"],

  'Jungle' : ["Nunu", "Amumu", "Rammus", "Trundle", "JarvanIV", "Skarner", "Poppy", "Gragas", "Shen", "Volibear",
              "Sejuani", "Zac", "Ivern", "Sett", "Olaf", "XinZhao", "Warwick", "Twitch", "Shaco", "Elise", "Wukong",
              "LeeSin", "Rengar", "Kindred", "RekSai"],

  'Middle' : ["Tristana", "Tryndamere", "Irelia", "Nocturne", "Renekton", "Garen", "Talon", "Graves", "Jayce",
              "Diana", "Yasuo", "Camille", "Lucian", "Zed", "Yone", "Sett", "Kayle", "Ryze", "Karthus", "Chogath",
              "Anivia", "Corki", "Veigar", "Orianna", "Cassiopeia", "Heimerdinger", "Malzahar", "Viktor", "Ziggs",
              "Azir", "Annie", "LeBlanc", "Vladimir", "Kassadin", "Swain", "Katarina", "Rumble", "Gragas",  "Pantheon",
              "Akali", "Kennen", "Fizz", "Zoe", "Taliyah", "Ekko", "Qiyana", "Sylas", "Pyke", "TwistedFate"],

  'Bottom' : ["Ashe", "Veigar", "Swain", "Heimerdinger", "Ezreal", "Varus", "Syndra", "Senna", "Tristana", "Draven",
              "Kaisa", "Jinx", "Lucian", "Kalista", "Xayah", "Sivir", "MissFortune", "Caitlyn", "Ziggs", "Yasuo",
              "Jhin", "Aphelios"],

  'Support' : ["Galio", "Alistar", "Blitzcrank", "Leona", "Nautilus", "Braum", "TahmKench", "Thresh", "Soraka",
               "Morgana", "Zilean", "Sona", "Janna", "Karma", "Taric", "Lux", "Lulu", 'Nami', "Yuumi", "Bard",
               "Rakan", "Maokai", "Poppy", "Pantheon", "Shen", "Senna", "Pyke", "Sett"]

}

const findChampions = async (region, id, championType, playerRole) => {
  let data;
  if (championType ==  "ENGAGE") {
    data = ENGAGE_CHAMPIONS;
  } else if (championType ==  "DISENGAGE") {
    data = DISENGAGE_CHAMPIONS;
  } else if (championType ==  "PICK") {
    data = PICK_CHAMPIONS;
  } else if (championType ==  "POKE_AND_SIEGE") {
    data = POKE_AND_SIEGE_CHAMPIONS;
  } else if (championType ==  "SPLITPUSH") {
    data = SPLITPUSH_CHAMPIONS;
  } else {
    return "error";
  }

  let playerChampions = await championRankings(region, id);
  let championsFound = 0;
  let champs = [];
  while(championsFound < 3) {
    for (champIdAndRating of playerChampions) {
      let champName = await champIdToName(String(champIdAndRating[0]));
      if (data[playerRole].includes(champName) && championsFound < 3) {
        championsFound += 1;
        champs.push(champName);
        playerChampions.pop(champIdAndRating);
        continue;
      }

      if (playerChampions.indexOf(champIdAndRating) == playerChampions.length - 1) {
        return champs;
      }
    }
  }
}

module.exports = findChampions