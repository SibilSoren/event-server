//importing models
const fetchEventModel = require("../models/fetchEvents");

const getEventController = (req, res) => {
  console.log("Running");
  fetchEventModel.getEvent((getEventCallback) => {
    if (getEventCallback.status == 1) {
      res.status(200).json({ events: getEventCallback.data });
    } else {
      res.send("Error");
    }
  });
};

module.exports = getEventController;
