console.log("jokes.controller.js");

//importing my jokes.model from model and setting it into our controller

const Jokes = require("../models/jokes.model");

//creating new jokes here
module.exports.createNewJoke = (req, res) => {
  Jokes.create(req.body)
    .then((newjokecreated) => res.json({ jokes: newjokecreated }))
    .catch((err) =>
      res.json({ message: "something is wrong", error: err.message })
    );
};

//getting all our jokes here as well
module.exports.AllJokes = (req, res) => {
  Jokes.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) =>
      res.json({ message: "something is wrong", error: err.message })
    );
};

// getting a single joke
module.exports.SingleJoke = (req, res) => {
  Jokes.findOne({ _id: req.params.id })
    .then((onesinglejoke) => res.json({ jokes: onesinglejoke }))
    .catch((err) =>
      res.json({ message: "something is wrong", error: err.message })
    );
};

//to update

module.exports.updateJoke = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((updateJoke) => res.json({ jokes: updateJoke }))
    .catch((err) =>
      res.json({ message: "something went wrong", error: err.message })
    );
};

module.exports.deleteJoke = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then((deletejoke) => res.json({ jokes: deletejoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
