const router = require("express").Router();
router.use('/', require('./swagger'));

const myController = require("../controllers")
const validation = require('../middleware/validate');

// router.get("/", myController.functionName);

router.get("/professional", myController.frontend);

router.get("/contacts", myController.mongo_getall);

router.get("/contacts/:id", myController.mongo_getsingle);

router.post("/contacts", validation.saveContact, myController.createContact);

router.put("/contacts/:id", validation.saveContact, myController.updateContact);

router.delete("/contacts/:id", myController.deleteContact);

module.exports = router;