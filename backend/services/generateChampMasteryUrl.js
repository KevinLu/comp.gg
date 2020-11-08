const key = require('../config/key');

// A function that generates the Riot API url for champion masteries
const generateChampMasteryUrl = (region, id) => {
  let regions = new Map();
  regions.set('NA', 'NA1');
  regions.set('KR', 'KR');
  regions.set('EUW', 'EUW1');
  regions.set('EUN', 'EUN1');
  regions.set('OCE', 'OC1');
  regions.set('TUR', 'TR1');
  regions.set('LAN', 'LA1');
  regions.set('LAS', 'LA2');

  return `https://${regions.get(region)}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${key.riotAPI}`;
}

module.exports = generateChampMasteryUrl