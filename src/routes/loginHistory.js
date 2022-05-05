const express = require('express');

const router = express.Router();

const loginHistoryControllers = require("../controllers/loginHistory")

router.get('/', loginHistoryControllers.getAll);
router.get("/:id", loginHistoryControllers.getByUserId)


module.exports = router;




