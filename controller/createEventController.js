//importing models
const insertEventDataModel = require("../models/insertEventDataModel");

const createEventController = (req, res) => {
  console.log(req.body);
  insertEventDataModel(req.body, (insertCallback) => {
    if (insertCallback.status == 1) {
      res.send("Ok");
    } else {
      res.send("Error");
    }
  });
};

module.exports = createEventController;
