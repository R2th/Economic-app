const express = require("express");
const adminRouter = express.Router();
const { errorHandler } = require("../../utils/helper");
const isAdmin = require("../../middlewares/isAdmin");

const { adminLogin, getAdminAuth } = require("./auth");

const { getShops, createShop, updateShop, deleteShop } = require("./shop");

const {
  getOrders,
  updateOrder,
  deleteOrder,
  updateOrderProduct,
} = require("./order");

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./product");

// const {
//   getPromotions,
//   updatePromotion,
//   createPromotion,
//   deletePromotion,
// } = require("./promotion");

adminRouter.post("/auth", [adminLogin.validate], errorHandler(adminLogin));

adminRouter.use(errorHandler(isAdmin));

adminRouter.get("/auth", errorHandler(getAdminAuth));

adminRouter.get("/order", errorHandler(getOrders));

adminRouter.put("/order", errorHandler(updateOrder));

adminRouter.put("/order/product", errorHandler(updateOrderProduct));

adminRouter.delete("/order", errorHandler(deleteOrder));

adminRouter.get("/shop", errorHandler(getShops));

adminRouter.post("/shop", [createShop.validate], errorHandler(createShop));

adminRouter.put("/shop", [updateShop.validate], errorHandler(updateShop));

adminRouter.delete("/shop", [deleteShop.validate], errorHandler(deleteShop));

adminRouter.get("/product", errorHandler(getProducts));

adminRouter.post(
  "/product",
  [createProduct.validate],
  errorHandler(createProduct)
);

adminRouter.put(
  "/product",
  [updateProduct.validate],
  errorHandler(updateProduct)
);

adminRouter.delete(
  "/product",
  [deleteProduct.validate],
  errorHandler(deleteProduct)
);

// adminRouter.get("/promotion", errorHandler(getPromotions));

// adminRouter.post(
//   "/promotion",
//   [createPromotion.validate],
//   errorHandler(createPromotion)
// );

// adminRouter.put(
//   "/promotion",
//   [updatePromotion.validate],
//   errorHandler(updatePromotion)
// );

// adminRouter.delete(
//   "/promotion",
//   [deletePromotion.validate],
//   errorHandler(deletePromotion)
// );

module.exports = adminRouter;
