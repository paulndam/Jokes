//mongoose will still need to be required here
console.log("jokes.model.js");
const mongoose = require("mongoose");

//making new schema instance of our jokes

const JokesSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "setup line is required"],
      minlength: [3, "setup gotta be at least 3 characters"],
    },
    punchline: {
      type: String,
      required: [true, "punchline line is required"],
      minlength: [3, "setup gotta be at least 3 characters"],
    },
  },
  { timestamps: true }
);

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;
