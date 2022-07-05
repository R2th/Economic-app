const successMap = {
  GET_DISTANCE_SUCCESSFUL: "Lấy khoảng cách thành công!",

  GET_SHOP_SUCCESSFUL: "Tìm shop thành công!",
  CREATE_SHOP_SUCCESSFUL: "Tạo shop thành công!",
  UPDATE_SHOP_SUCCESSFUL: "Cập nhật thông tin shop thành công!",
  DELETE_SHOP_SUCCESSFUL: "Xóa shop thành công!",

  GET_ORDER_SUCCESSFUL: "Tìm order thành công!",
  CREATE_ORDER_SUCCESSFUL: "Đặt món thành công!",
  UPDATE_ORDER_SUCCESSFUL: "Cập nhật đơn hàng thành công!",
  DELETE_ORDER_SUCCESSFUL: "Xóa đơn hàng thành công!",
  UPDATE_ORDER_PRODUCT_SUCCESSFUL: "Cập nhật món ăn trong đơn hàng thành công!",

  GET_AUTH_SUCCESSFUL: "Lấy thông tin đăng nhập thành công!",
  LOGIN_SUCCESSFUL: "Đăng nhập thành công!",
  SIGNUP_SUCCESSFUL: "Đăng ký thành công!",
  UPDATE_USER_SUCCESSFUL: "Cập nhật tài khoản thành công!",

  GET_SHIP_PRICE_SUCCESS: "Lấy phí ship thành công!",

  GET_ADDRESS_SUCCESSFUL: "Lấy địa chỉ thành công!",
  CREATE_ADDRESS_SUCCESSFUL: "Tạo địa chỉ thành công!",
  UPDATE_ADDRESS_SUCCESSFUL: "Cập nhật địa chỉ thành công!",
  DELETE_ADDRESS_SUCCESSFUL: "Xóa địa chỉ thành công!",

  GET_PRODUCT_SUCCESSFUL: "Tìm món ăn thành công!",
  CREATE_PRODUCT_SUCCESSFUL: "Tạo món ăn thành công!",
  UPDATE_PRODUCT_SUCCESSFUL: "Cập nhật món ăn thành công!",
  DELETE_PRODUCT_SUCCESSFUL: "Xóa món ăn thành công!",

  GET_PROMOTION_SUCCESSFUL: "Lấy mã khuyến mãi thành công!",
  CREATE_PROMOTION_SUCCESSFUL: "Tạo mã khuyến mãi thành công!",
  UPDATE_PROMOTION_SUCCESSFUL: "Cập nhật mã khuyến mãi thành công!",
  DELETE_PROMOTION_SUCCESSFUL: "Xóa mã khuyến mãi thành công!",
  APPLY_PROMOTION_SUCCESSFUL: "Áp dụng mã khuyến mãi thành công!",
};

class GTSuccess {
  constructor(msg, data = {}) {
    this.code = 0;
    this.msg = msg;
    this.data = data;
  }

  toJSON() {
    return {
      code: this.code,
      msg: this.msg,
      data: this.data,
    };
  }
}

module.exports = {
  GTSuccess,
  successMap,
};
