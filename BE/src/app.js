const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

module.exports = app;
