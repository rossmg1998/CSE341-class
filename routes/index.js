const router = require("express").Router();

const myController = require("../controllers")

// router.get("/", myController.functionName);

router.get("/professional", myController.frontend);

router.get("/", myController.mongo_getall);

router.get("/:id", myController.mongo_getsingle);

module.exports = router;