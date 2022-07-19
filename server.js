const express = require("express"); // this will import express

const app = express();
require("./server/config/mongoose.config");

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // these 2 lines are needed to do any kind of post requests.

require("./server/routes/joke.routes")(app);

// server talks to routes, routes talks to controller, controller talks to models.
app.listen(port, () => console.log(`listening on port: ${port}`));
