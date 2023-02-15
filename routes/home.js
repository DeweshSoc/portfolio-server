const express = require("express");
const router = express.Router();

// import controller
const homeController = require("../controllers/home");
router.get("/",homeController.getHome);
router.post("/msg",homeController.postMsg);

module.exports = router;
