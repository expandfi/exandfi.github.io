const express = require("express");
const bodyParser = require("body-parser");
const path = require ("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 2002;
const db = mongoose.connection;

// Define middleware here
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("public/assets"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://AContreras-DB:N2lokf03gbAkoB3o@clusteref.qz57d.mongodb.net/Expandfi?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
db.on("error", function() {
    console.log("mongoose connection error");
});
db.once("open", function() {
    console.log("mongoose connected successfully")
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
