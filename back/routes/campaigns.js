const express = require('express');
const router = express.Router();

const campaignsCtrl = require('../controllers/campaigns');

router.get('/', campaignsCtrl.getAllcampaigns);
router.get('/:id', campaignsCtrl.getOnecampaigns);
router.post('/order', campaignsCtrl.ordercampaigns);

module.exports = router;