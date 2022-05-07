const express = require('express');
const { required } = require('nodemon/lib/config');

const router = express.Router();

const authRoute = require('./auth');
const loginHistoryRoute = require("./loginHistory")
const repositoriesRoute = require("./repositories")
const usersRoute = require("./users")

router.use('/auth', authRoute);
router.use("/loginHistory", loginHistoryRoute)
router.use("/repository", repositoriesRoute)
router.use("/user", usersRoute)

module.exports = router