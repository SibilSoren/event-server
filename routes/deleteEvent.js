const express = require("express");
const route = express.Router();

route.delete("/", (req, res) => {
  res.post("Endpoint working Delete");
});

module.exports = route;
