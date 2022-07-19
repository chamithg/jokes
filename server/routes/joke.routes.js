// need to import controllers here
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  app.get("/api/Jokes", JokeController.showAllJokes);
  app.get("/api/Jokes/random", JokeController.showRandomJoke);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.get("/api/Jokes/:id", JokeController.showJokeById);
  app.put("/api/Jokes/update/:id", JokeController.updateJokeById);
  app.delete("/api/Jokes/delete/:id", JokeController.DeleteJokeById);
};
