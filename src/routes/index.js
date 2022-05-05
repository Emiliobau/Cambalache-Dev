const express = require('express');

const router = express.Router();

const authRoute = require('./auth');
const loginHistoryRoute = require("./loginHistory")

router.use('/auth', authRoute);
router.use("/loginHistory", loginHistoryRoute)


module.exports = router