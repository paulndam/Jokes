//setting up Mongoose connection and DB

const mongoose = require("mongoose");

module.exports = (DB_name) => {
  mongoose
    .connect("mongodb://localhost/JokesDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`connection established with ${DB_name}`))
    .catch((err) => console.log("error error, DB not connected"));
};
