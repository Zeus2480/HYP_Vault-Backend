const express = require("express");
const {InfoController} =require('../../controllers')
const adminRoutes = require("./admin-routes");

const router = express.Router();

router.use("/admin", adminRoutes);
router.get("/info", InfoController.info);

module.exports = router;
