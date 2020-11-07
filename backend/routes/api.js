const express = require('express');
const router = express.Router();
const Axios = require('axios');
const generateRiotAPIUrl = require('../services/generateRiotAPIUrl');

router.get('/', (req, res) => {
  return res.status(200).json({success: true, msg: "NICE"});
});

router.get('/riot', async (req, res) => {
  const url = generateRiotAPIUrl(req.query.region, req.query.summonerName);
  const response = await Axios.get(url);
  
  if (response.data.summonerLevel > 100) {
    console.log("good");
    return res.status(200).json({success: true, data: "you are big mon"});
  } else {
    return res.status(200).json({success: true, data: "you are trash"});
  }
  
});

module.exports = router;
