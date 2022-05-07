const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users");
const authMiddleware = require("../middlewares/auth")


router.get('/',authMiddleware.isAuth, usersController.getAll);
router.put('/:id',authMiddleware.isOwnUser, usersController.update );
router.delete('/:id',authMiddleware.isOwnUser, usersController.remove);


module.exports = router;