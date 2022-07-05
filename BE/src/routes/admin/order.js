const { body, validationResult } = require("express-validator");
const {
  PAYMENT_MOMO,
  PAYMENT_BANK,
  PAYMENT_CASH,
} = require("../../utils/consts");
const { statusCode } = require("../../utils");
const { GTError, errorCodes } = require("../../utils/error");
const { successMap } = require("../../utils/success");

const {
  getOrders,
  updateOrder,
  deleteOrder,
  editOrderProduct,
  updateOrderProduct,
} = require("../../controllers/order");

exports.getOrders = async (req, res) => {
  const data = await getOrders(true);

  return res.status(statusCode.SUCCESS).json({
    code: 0,
    msg: successMap.GET_ORDER_SUCCESSFUL,
    data,
  });
};

exports.updateOrder = async (req, res) => {
  const data = await updateOrder(req.body.order);

  return res.status(statusCode.SUCCESS).json({
    msg: successMap.UPDATE_ORDER_SUCCESSFUL,
    code: 0,
    data,
  });
};

exports.deleteOrder = async (req, res) => {
  await deleteOrder(req.query.id);

  return res.status(statusCode.SUCCESS).json({
    msg: successMap.DELETE_ORDER_SUCCESSFUL,
    code: 0,
    data: {},
  });
};

exports.updateOrderProduct = async (req, res) => {
  // TODO: Add validator for status, date
  const orderProductPayload = req.body.orderProduct;
  const { id, date, order } = orderProductPayload;

  const data = await updateOrderProduct(
    { id, date, order },
    orderProductPayload
  );

  return res.status(statusCode.SUCCESS).json({
    msg: successMap.UPDATE_ORDER_DISH_SUCCESSFUL,
    code: 0,
    data,
  });
};
