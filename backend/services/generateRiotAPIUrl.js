const key = require('../config/key');

// A function that generates the Riot API url for summoner name
const generateRiotAPIUrl = (region, summonerName) => {
  let regions = new Map();
  regions.set('NA', 'NA1');
  regions.set('KR', 'KR');
  regions.set('EUW', 'EUW1');
  regions.set('EUN', 'EUN1');
  regions.set('OCE', 'OC1');
  regions.set('TUR', 'TR1');
  regions.set('LAN', 'LA1');
  regions.set('LAS', 'LA2');
  
  return encodeURI(`https://${regions.get(region)}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key.riotAPI}`);
}

module.exports = generateRiotAPIUrl