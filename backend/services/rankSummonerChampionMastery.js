const getChampMasteries = require("./getChampionMasteries.js");

const rankSummonerChampionMastery = async (region, id) => {
  const data = await getChampMasteries(region, id);
  let rankings = {};

  for (const champ of data){
    rankings[champ.championId] = champ.championPoints;
  }

  var items = Object.keys(rankings).map(function(key) {
    return [key, rankings[key]];
  });
  
  items.sort(function(first, second) {
    return parseInt(second[1]) - parseInt(first[1]);
  });

  return items;
}

module.exports = rankSummonerChampionMastery