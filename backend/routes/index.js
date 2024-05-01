const router = require("express").Router();

const myController = require("../controllers")

router.get("/", myController.functionName);

router.get("/professional", myController.frontend);

module.exports = router;