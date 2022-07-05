const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { statusCode } = require("../../utils");
const { GTError, errorCodes } = require("../../utils/error");
const { successMap } = require("../../utils/success");
require("dotenv").config({ silent: true });

exports.adminLogin = async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    const errors = validate.array({ onlyFirstError: true });
    throw new GTError(errorCodes.INVALID_ORDER_DATA, errors);
  }

  const { username, password } = req.body;

  const data = this.adminLogin.handler(username, password);

  return res.status(statusCode.SUCCESS).json({
    msg: successMap.LOGIN_SUCCESSFUL,
    code: 0,
    data,
  });
};

exports.adminLogin.validate = [
  body("username")
    .exists()
    .withMessage("is required")
    .trim()
    .notEmpty()
    .withMessage("must not be empty"),

  body("password")
    .exists()
    .withMessage("is required")
    .trim()
    .notEmpty()
    .withMessage("must not be empty"),
];

/**
 * Login for admin
 * @param {String} username
 * @param {String} password
 * @returns {Object} data with access token
 */

exports.adminLogin.handler = (username, password) => {
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return {
      access_token: jwt.sign(
        {
          username: username,
          role: "admin",
        },
        process.env.JWT_SECRET
      ),
      user: {
        role: "admin",
      },
    };
  } else {
    throw new GTError(errorCodes.INVALID_USERNAME_OR_PASSWORD);
  }
};

exports.getAdminAuth = async (req, res) => {
  const { user } = req;
  delete user.username;
  return res.status(statusCode.SUCCESS).json({
    msg: successMap.GET_AUTH_SUCCESSFUL,
    code: 0,
    data: {
      user,
    },
  });
};
