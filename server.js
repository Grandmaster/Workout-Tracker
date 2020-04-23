const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Starting the app
app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
