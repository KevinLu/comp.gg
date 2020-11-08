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

router.get('/', (req, res) => {
  return res.status(200).json({success: true, msg: "NICE"});
});

router.get('/riot', async (req, res) => {
  const url = generateRiotAPIUrl(req.query.region, req.query.summonerName);
  const response = await Axios.get(url);
  
  if (response.data.summonerLevel > 100) {
    return res.status(200).json({success: true, data: "you are big mon"});
  } else {
    return res.status(200).json({success: true, data: "you are trash"});
  }
});

router.get('/testing', async (req, res) => {
  const summonerData = await getSummonerData(req.query.region, req.query.summonerName);
  const accountId = summonerData.accountId;
  const id = summonerData.id;
  const data = await championRankings(req.query.region, id, accountId);
  console.log(data);
  return res.status(200).json({success: true, data: data});
});

router.get('/summonerIcon', async (req, res) => {
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