console.log("jokes.route.js");

const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.post("/api/jokes/new", JokesController.createNewJoke);
  app.get("/api/jokes/", JokesController.AllJokes);
  app.get("/api/jokes/:id", JokesController.SingleJoke);
  app.put("/api/jokes/update/:_id", JokesController.updateJoke);
  app.delete("/api/jokes/delete/:_id", JokesController.deleteJoke);
};
