const express = require("express");
const cors = require("cors");
require("dotenv").config({ slient: true });
const userAuth = require("../middleware/userAuth");

const { errorHandler } = require("../utils/helper");

const defaultRouter = require("./default");
const adminRouter = require("../admin");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: process.env.MODE === "production" ? process.env.CLIENT_URL : "*",
    })
  );
  app.use(errorHandler(userAuth));

  app.use("/", defaultRouter);
  app.use("/admin", adminRouter);
};
