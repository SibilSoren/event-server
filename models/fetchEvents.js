const Event = require("../db/eventSchema");

module.exports = class fetchEvents {
  static async getEvent(callback) {
    console.log("GET EVENT RUNNING");
    try {
      const eventList = await Event.find();
      //   console.log(eventList);
      if (eventList) {
        callback({
          status: 1,
          data: eventList,
          message: "Events fetched successfully from DB",
          errorMessage: "",
        });
      } else {
        callback({
          status: 0,
          message: "No data found",
          errorMessage: "No dat found",
        });
      }
    } catch (error) {
      console.log(error.message);
      callback({
        status: 0,
        message: "Error fetchind data from DB",
        errorMessage: error.message,
      });
    }
  }
};
