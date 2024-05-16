const router = require("express").Router();
router.use('/', require('./swagger'));

const myController = require("../controllers")

// router.get("/", myController.functionName);

router.get("/professional", myController.frontend);

router.get("/contacts", myController.mongo_getall);

router.get("/contacts/:id", myController.mongo_getsingle);

router.post("/contacts", myController.createContact);

router.put("/contacts/:id", myController.updateContact);

router.delete("/contacts/:id", myController.deleteContact);

module.exports = router;