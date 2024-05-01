const router = require("express").Router();

const myController = require("../controllers")

router.get("/", myController.functionName);

module.exports = router;