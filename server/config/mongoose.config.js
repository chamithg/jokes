const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:rootroot@clustermern.fqrxx7d.mongodb.net/jokes_db?retryWrites=true&w=majority",
    //after root: we need to add the password for the cluster
    // after net/ and before ? we need to add a name for the data base.
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );
