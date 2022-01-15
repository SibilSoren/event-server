const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventRegistrationLink: {
    type: String,
    required: true,
  },
  aboutEvent: {
    type: String,
    required: true,
  },
});

// console.log(eventSchema);

module.exports = mongoose.model("EventsList", eventSchema);
