// import model in the controller.

const Joke = require("../models/joke.model");

module.exports.showAllJokes = (req, res) => {
  Joke.find()
    .then((foundJokes) => {
      res.json({ results: foundJokes });
    })
    .catch((err) => {
      res.json({ message: "No Jokes to be found!", error: err });
    });
};
module.exports.showJokeById = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((foundJoke) => {
      res.json({ results: foundJoke });
    })
    .catch((err) => {
      res.json({ message: "No Jokes found for that id!", error: err });
    });
};
module.exports.showRandomJoke = (req, res) => {
  Joke.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count);
    Joke.findOne()
      .skip(random)
      .then((foundJoke) => {
        res.json({ results: foundJoke });
      })
      .catch((err) => {
        res.json({ message: "No Jokes found for that id!", error: err });
      });
  });
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => {
      res.json({ results: newJoke });
    })
    .catch((err) => {
      res.json({ message: "couldnt create a new joke!", error: err });
    });
};

module.exports.updateJokeById = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ results: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Joke cant be updated!", error: err });
    });
};

module.exports.DeleteJokeById = (req, res) => {
  Joke.remove({ _id: req.params.id })
    .then((removedJoke) => {
      res.json({ message: "this joke is to be removed", results: removedJoke });
    })
    .catch((err) => {
      res.json({ message: "Joke cant be removed!", error: err });
    });
};
