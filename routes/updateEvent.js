const express = require("express");
const route = express.Router();

route.patch("/", (req, res) => {
  res.send("Endpoint working UPdate");
});

module.exports = route;
