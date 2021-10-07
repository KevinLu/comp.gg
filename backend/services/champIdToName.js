const Axios = require('axios');

const champIdToName = async (champId) => {
  const response = await Axios.get('http://ddragon.leagueoflegends.com/cdn/11.20.1/data/en_US/champion.json');
  const champData = response.data.data;
  
  for (const key in champData) {
    if (champId == champData[key]['key']) {
      if (champData[key]['id'] == "MonkeyKing") {
        return "Wukong"
      }
      return champData[key]['id']
    }
  }
  return "error";
}

module.exports = champIdToName