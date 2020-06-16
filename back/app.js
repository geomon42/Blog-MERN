const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");
const app = express();

const PORT = 5000;

//Connection to MongoDB
mongoose.set('useCreateIndex', true)
mongoose.connect(
  "mongodb://geomon42:0919223313jeric@cluster0-shard-00-00-plw50.mongodb.net:27017,cluster0-shard-00-01-plw50.mongodb.net:27017,cluster0-shard-00-02-plw50.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useNewUrlParser: true,  useUnifiedTopology: true },
  (err, res) => {
    if (err) throw err;

    console.log("Database online");
  }
);
mongoose.connection.on("connected", () => {
  console.log("connected to MongoDB");
});
mongoose.connection.on("error", (error) => {
  console.log("Error: " + error);
});

//Models Import

require("./models/post");
require("./models/category");
require("./models/comment");

app.use(express.json());

//Router import
app.use(require("./routes/post"));
app.use(require("./routes/category"));
app.use(require("./routes/comment"));

//PORT
app.listen(PORT, () => {
  console.log("Server is Stared at " + PORT);
});
