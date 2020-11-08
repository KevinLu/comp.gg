const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  return res.status(200).json({success: true, msg: "NICE"});
});

router.get('/whatever', (req, res) => {
  return res.status(200).json({success: true, msg: "very cool api"});
});

module.exports = router;
