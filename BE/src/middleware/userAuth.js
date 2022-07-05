const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { GTError, errorCodes } = require("../utils/error");
require("dotenv").config({ silent: true });

const userAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length === 0) return next();

  let decoded = {};

  try {
    decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET);
  } catch (err) {
    console.error(err);
    throw new GTError(errorCodes.INVALID_TOKEN);
  }

  if (Date.now() >= decoded.exp * 1000) {
    // Expired token
    throw new GTError(errorCodes.INVALID_TOKEN);
  }

  if (decoded.role === "user") {
    const { username, email } = decoded;
    if (!username || !email) {
      throw new GTError(errorCodes.INVALID_TOKEN);
    }
    try {
      req.user = await User.findOne({ where: { username, email } });
    } catch (err) {
      console.error(err);
      throw new GTError(errorCodes.INVALID_TOKEN);
    }
  } else {
    req.user = decoded;
  }

  next();
};

module.exports = userAuth;
