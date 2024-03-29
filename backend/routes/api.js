const express = require('express');
const router = express();
const Axios = require('axios');
const generateRiotAPIUrl = require('../services/generateRiotAPIUrl');
const getSummonerData = require('../services/getSummonerData');
const getChampionMasteries = require('../services/getChampionMasteries');
const rankSummonerChampionMastery = require('../services/rankSummonerChampionMastery');
const championRankings = require('../services/championRankings');
const champIdToName = require('../services/champIdToName');
const findChampions = require('../services/findChampions');
const { json } = require('express');

router.get('/', function (req, res) {
  return res.status(200).json({success: true, msg: "NICE"});
});

router.get('/riot', async function (req, res) {
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

router.get('/testingChampName', async function (req, res) {
  const name = await champIdToName(req.query.champId);
  return res.status(200).json({success: true, data: name});
});

router.post('/championList', async function (req, res) {
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
      } else if (summoner == "botSummoner") {
        playerRole = "Bottom";
      } else {
        playerRole = "Support";
      }
      console.log(playerRole);
      const data = await findChampions(req.body.region, id, req.body.myPlaystyle, playerRole);
      console.log(data);
      ret.push(data);
    }
    
    let real = [];
    for (let i = 0; i < 3; i++) {
      let item = [];
      for (let j = 0; j < 5; j++) {
        item.push(ret[j][i]);
      }
      real.push(item);
    }

    return res.status(200).json({success: true, data: real, old: ret});
  } catch (error) {
    return res.status(200).json({success: false, data: "request error"});
  }
});

router.get('/championIcon', async function (req, res) {
  try {
    let iconURL = "http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/" + req.query.championName + ".png";
    if (req.query.championName === "Wukong") {
      iconURL = "http://ddragon.leagueoflegends.com/cdn/11.20.1/img/champion/MonkeyKing.png"
    }
    return res.status(200).json({success: true, data: iconURL});
  } catch (error) {
    return res.status(200).json({success: false, data: "Summoner name does not exist."});
  }
});

router.get('/summonerIcon', async function (req, res) {
  const url = generateRiotAPIUrl(req.query.region, req.query.summonerName);
  try {
    const response = await Axios.get(url);
    const iconId = response.data.profileIconId;
    const iconURL = "http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/" + iconId + ".png";
    return res.status(200).json({success: true, data: iconURL});
  } catch (error) {
    return res.status(200).json({success: false, data: "Summoner name does not exist."});
  }
});

module.exports = router;