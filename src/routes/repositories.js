const express = require('express');
const router = express.Router();
const repositoriesControllers = require("../controllers/repositories")
const authMiddleware = require("../middlewares/auth")

router.post("/",authMiddleware.isAuth, repositoriesControllers.create);
router.get("/",authMiddleware.isAuth, repositoriesControllers.getAll);
router.get("/:id",authMiddleware.isOwnUser, repositoriesControllers.getByUserId );
router.put("/:id",authMiddleware.isOwnUser, repositoriesControllers.update);
router.delete("/:id",authMiddleware.isOwnUser, repositoriesControllers.remove)


module.exports = router;