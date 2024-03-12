const express = require("express");
const router = express.Router();

//Controllers
const { AdminController } = require("../../controllers");

router.post("/login", AdminController.login);

module.exports = router;
