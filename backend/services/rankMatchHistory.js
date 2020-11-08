const getMatchHistory = require("./getMatchHistory");

const rankMatchHistory = async (region, accountId) => {
  const data = await getMatchHistory(region, accountId);
  const matchhistory = data.matches;
  let rankings = {};

  for (const match of matchhistory) {
    rankings[match.champion] = (rankings[match.champion]+1) || 1 ;
  }

  var items = Object.keys(rankings).map(function(key) {
    return [key, rankings[key]];
  });
  
  items.sort(function(first, second) {
    return parseInt(second[1]) - parseInt(first[1]);
  });

  return items;
}

module.exports = rankMatchHistory;