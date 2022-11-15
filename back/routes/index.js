const express = require("express");
const router = express.Router();
const donation = require("../controllers/donation.controller.js");

router.post("/donation", donation.createDonation);
router.get("/donation", donation.index);
router.get("/donation/amount/:sport", donation.getInfoDonation);

module.exports = router