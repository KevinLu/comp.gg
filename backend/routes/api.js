const express = require('express');
const router = express.Router();
const Axios = require('axios');
const generateRiotAPIUrl = require('../services/generateRiotAPIUrl');
const getSummonerData = require('../services/getSummonerData');
const getChampionMasteries = require('../services/getChampionMasteries');
const getMatchHistory = require('../services/getMatchHistory');
const rankSummonerChampionMastery = require('../services/rankSummonerChampionMastery');
const rankMatchHistory = require('../services/rankMatchHistory');
const championRankings = require('../services/championRankings');
const champIdToName = require('../services/champIdToName');
const findChampions = require('../services/findChampions');

router.get('/', (req, res) => {
  return res.status(200).json({success: true, msg: "NICE"});
});

router.get('/riot', async (req, res) => {
  try {
    const url = generateRiotAPIUrl(req.query.region, req.query.summonerName);
    const response = await Axios.get(url);
    if (response.data.summonerLevel > 100) {
      return res.status(200).json({success: true, data: "you are big mon"});
    } else {
      return res.status(200).json({success: true, data: "you are trash"});
    }
  } catch (error) {
    return res.status(200).json({success: false, data: "bruh doesnt exist"});
  }
});

router.get('/testingChampName', async (req, res) => {
  const name = await champIdToName(req.query.champId);
  return res.status(200).json({success: true, data: name});
});

router.post('/championList', async (req, res) => {
  try {
    const summoners = req.body.summoners;
    let ret = [];
    for (const summoner in summoners) {
      const summonerData = await getSummonerData(req.body.region, summoners[summoner]);
      const accountId = summonerData.accountId;
      const id = summonerData.id;
      let playerRole;
      if (summoner == "topSummoner") {
        playerRole = "Top";
      } else if (summoner == "jungleSummoner") {
        playerRole = "Jungle";
      } else if (summoner == "midSummoner") {
        playerRole = "Middle";
      } else if (summoner == "BottomSummoner") {
        playerRole = "Bottom";
      } else {
        playerRole = "Support";
      }
      const data = await findChampions(req.body.region, id, accountId, 1, 1, req.body.myPlaystyle, playerRole);
      ret.push(data);
    }
    return res.status(200).json({success: true, data: ret});
  } catch (error) {
    return res.status(200).json({success: false, data: "error"});
  }
});

router.get('/championIcon', async (req, res) => {
  try {
    const iconURL = "http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/" + req.query.championName + ".png";
    return res.status(200).json({success: true, data: iconURL});
  } catch (error) {
    return res.status(200).json({success: false, data: "Summoner name does not exist."});
  }
});

router.get('/summonerIcon', async (req, res) => {
  const url = generateRiotAPIUrl(req.query.region, req.query.summonerName);
  try {
    const response = await Axios.get(url);
    const iconId = response.data.profileIconId;
    const iconURL = "http://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/" + iconId + ".png";
    return res.status(200).json({success: true, data: iconURL});
  } catch (error) {
    return res.status(200).json({success: false, data: "Summoner name does not exist."});
  }
});

module.exports = router;