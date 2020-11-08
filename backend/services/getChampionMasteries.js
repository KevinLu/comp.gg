const Axios = require('axios');
const generateChampMasteryUrl = require('./generateChampMasteryUrl');

// A function that generates the Riot API url for champion masteries
const getChampionMasteries = async (region, id) => {
  const url = generateChampMasteryUrl(region, id);
  const response = await Axios.get(url);
  
  return response.data;
}

module.exports = getChampionMasteries