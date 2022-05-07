const express = require('express');
const router = express.Router();
const usersController = require("../controllers/users")


router.get('/', usersController.getAll);
router.put('/:id', usersController.update );
router.delete('/:id', usersController.remove);


module.exports = router;