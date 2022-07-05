require("dotenv").config({ silent: true });
const { GTError, errorCodes } = require("../utils/error");

const isLogin = (req, res, next) => {
  if (!req.user) throw new GTError(errorCodes.NOT_LOGGED_IN);
  next();
};

module.exports = isLogin;
