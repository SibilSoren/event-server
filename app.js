const express = require("express");
const dontev = require("dotenv");
const createEvent = require("./routes/createEvents");
const updateEvent = require("./routes/updateEvent");
const getEvent = require("./routes/getEvents");
const deleteEvent = require("./routes/deleteEvent");
const { urlencoded } = require("express");
dontev.config();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;
app.use("/createEvent", createEvent);
app.use("/updateEvent", updateEvent);
app.use("/getEvent", getEvent);
app.use("/deleteEvent", deleteEvent);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
