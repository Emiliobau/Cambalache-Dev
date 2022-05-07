const express = require('express');

const router = express.Router();

const repositoriesControllers = require("../controllers/repositories")

router.post("/", repositoriesControllers.create);
router.get("/", repositoriesControllers.getAll);
router.get("/:id",repositoriesControllers.getByUserId );
router.put("/:id", repositoriesControllers.update);
router.delete("/:id", repositoriesControllers.remove)


module.exports = router;