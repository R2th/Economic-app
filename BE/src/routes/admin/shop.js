const { body, validationResult } = require("express-validator");
const {
  getShops,
  createShop,
  updateShop,
  deleteShop,
} = require("../../controllers/shop");
const { statusCode } = require("../../utils");
const { successMap } = require("../../utils/success");
const { GTError, errorCodes } = require("../../utils/error");

exports.getShops = async (req, res) => {
  const data = await getShops({}, true);

  return res.status(statusCode.SUCCESS).json({
    code: 0,
    msg: successMap.GET_SHOP_SUCCESSFUL,
    data,
  });
};

exports.createShop = async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    const errors = validate.array({ onlyFirstError: true });
    throw new GTError(errorCodes.INVALID_SHOP_DATA, errors);
  }

  const data = await createShop(req.body);

  return res.status(statusCode.SUCCESS).json({
    code: 0,
    msg: successMap.CREATE_SHOP_SUCCESSFUL,
    data,
  });
};

exports.createShop.validate = [
  body("name")
    .exists()
    .trim()
    .withMessage("is required")

    .notEmpty()
    .withMessage("cannot be blank"),

  body("desc")
    .exists()
    .trim()
    .withMessage("is required")

    .notEmpty()
    .withMessage("cannot be blank")

    .isLength({ max: 500 })
    .withMessage("must be at most 500 characters long"),

  body("products")
    .exists()
    .withMessage("is required")

    .isArray()
    .withMessage("must be array"),

  body("link")
    .exists()
    .trim()
    .withMessage("is required")

    .notEmpty()
    .withMessage("cannot be blank"),
];

exports.updateShop = async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    const errors = validate.array({ onlyFirstError: true });
    throw new GTError(errorCodes.INVALID_SHOP_DATA, errors);
  }

  const data = await updateShop(req.body);

  return res.status(statusCode.SUCCESS).json({
    code: 0,
    msg: successMap.UPDATE_SHOP_SUCCESSFUL,
    data,
  });
};

exports.updateShop.validate = [
  body("id")
    .exists()
    .trim()
    .withMessage("is required")

    .notEmpty()
    .withMessage("cannot be blank"),
];

exports.deleteShop = async (req, res) => {
  const validate = validationResult(req);
  if (!validate.isEmpty()) {
    const errors = validate.array({ onlyFirstError: true });
    throw new GTError(errorCodes.INVALID_SHOP_DATA, errors);
  }

  await deleteShop(req.query.id);

  return res.status(statusCode.SUCCESS).json({
    code: 0,
    msg: successMap.DELETE_SHOP_SUCCESSFUL,
    data: {},
  });
};

exports.deleteShop.validate = [
  body("id")
    .exists()
    .withMessage("is required")

    .isInt()
    .withMessage("is number"),
];
