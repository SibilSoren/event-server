const Event = require("../db/eventSchema");

const insertEventData = async (data, callback) => {
  console.log(data);
  const events = new Event({
    eventTitle: data.eventName,
    eventRegistrationLink: data.eventRegistrationLink,
    aboutEvent: data.aboutEvent,
  });

  events.save((err) => {
    if (err) {
      callback({
        status: 0,
        message: "Error Saving Data",
        errorMessage: "",
      });
    } else {
      callback({
        status: 1,
        message: "Data saved Successfully",
        errorMessage: "",
      });
    }
  });
  //   const event = Event.find();
  //   console.log(event);
};

module.exports = insertEventData;
