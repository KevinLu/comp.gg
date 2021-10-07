const rankSummonerChampionMastery = require('./rankSummonerChampionMastery');

const championRankings = async (region, id) => {
  const rankingsMastery = await rankSummonerChampionMastery(region, id);
  return rankingsMastery;
}

module.exports = championRankings