const express = require("express");
const route = express.Router();
const createEventController = require("../controller/createEventController");

route.post("/", createEventController);

module.exports = route;
