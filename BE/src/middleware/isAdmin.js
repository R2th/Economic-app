require("dotenv").config({ silent: true });
const { GTError, errorCodes } = require("../utils/error");

const isAdmin = (req, res, next) => {
  if (
    !req.user ||
    req.user.role !== "admin" ||
    req.user.username !== process.env.ADMIN_USERNAME
  )
    throw new GTError(errorCodes.NOT_ALLOWED);
  next();
};

module.exports = isAdmin;
