const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Endpoint working Read");
});

module.exports = route;
