const express = require('express');
const router = express.Router();
const loginHistoryControllers = require("../controllers/loginHistory");
const authMiddleware = require("../middlewares/auth");

router.get('/',authMiddleware.isAuth, loginHistoryControllers.getAll);
router.get("/:id",authMiddleware.isOwnUser, loginHistoryControllers.getByUserId)


module.exports = router;




