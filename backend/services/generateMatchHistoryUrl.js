const key = require('../config/key');

// A function that generates the Riot API url for champion masteries
const generateMatchHistoryUrl = (region, id) => {
  let regions = new Map();
  regions.set('NA', 'NA1');
  regions.set('KR', 'KR');
  regions.set('EUW', 'EUW1');
  regions.set('EUN', 'EUN1');
  regions.set('OCE', 'OC1');
  regions.set('TUR', 'TR1');
  regions.set('LAN', 'LA1');
  regions.set('LAS', 'LA2');
  
  return `https://${regions.get(region)}.api.riotgames.com/lol/match/v4/matchlists/by-account/${id}?queue=400&queue=420&queue=440&queue=700&beginTime=1577836800000&api_key=${key.riotAPI}`;
}

module.exports = generateMatchHistoryUrl