const Axios = require('axios');
const generateMatchHistoryUrl = require('./generateMatchHistoryUrl');

// A function that generates the Riot API url for match histories
const getMatchHistory = async (region, accountId) => {
  const url = generateMatchHistoryUrl(region, accountId);
  const response = await Axios.get(url);
  
  return response.data;
}

module.exports = getMatchHistory