const router = require("express").Router();

const myController = require("../controllers")

// router.get("/", myController.functionName);

router.get("/professional", myController.frontend);

router.get("/", myController.mongo_getall);

router.get("/:id", myController.mongo_getsingle);

router.post("/", myController.createContact);

router.put("/:id", myController.updateContact);

router.delete("/:id", myController.deleteContact);

module.exports = router;