const express = require("express");
const route = express.Router();

route.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = route;
