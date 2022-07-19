const mongoose = require("mongoose");

// here we define the columns of the book database
// this creates a empty table
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Description is Required"],
      minLength: [2, "Description must be at least 2 characters long"],
      maxLength: [100, "Description must be less than 30 characters long"],
    },
    punchline: {
      type: String,
      required: [true, "Punchline  is Required"],
      minLength: [2, "Punchline must be at least 2 characters long"],
      maxLength: [100, "Punchline must be less than 30 characters long"],
    },
  },
  { timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke; // now other files can import and work with it
