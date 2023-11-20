const express = require("express");
const router = express.Router();
const mathController = require("../controllers/mathController");

router.get("/addition", mathController.addition);
router.get("/factorial/:number", mathController.factorial);
router.get("/fibonacci/:count", mathController.fibonacci);

module.exports = router;
