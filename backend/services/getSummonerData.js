const Axios = require('axios');
const generateRiotAPIUrl = require('../services/generateRiotAPIUrl');

// A function that fetches the Riot API url for summoner name
const getSummonerData = async (region, summonerName) => {
  const url = generateRiotAPIUrl(region, summonerName);
  const response = await Axios.get(url);
  
  return response.data;
}

module.exports = getSummonerData