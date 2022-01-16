const express = require("express");
const route = express.Router();
const getEventController = require("../controller/getEventController");
route.get("/", getEventController);

module.exports = route;
