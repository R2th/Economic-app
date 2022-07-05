const errorCodes = {
  // 1xxx - Field error
  MISSING_REQUIRED_FIELDS: 1000,

  // 2xxx - Data error
  SHOP_NOT_FOUND: 2000,
  SHOP_EXISTED: 2001,
  ORDER_NOT_FOUND: 2002,
  DISTANCE_NOT_FOUND: 2003,
  USER_NOT_FOUND: 2004,
  PRODUCT_EXISTED: 2005,
  PRODUCT_NOT_FOUND: 2006,
  ADDRESS_NOT_FOUND: 2006,
  PROMOTION_NOT_FOUND: 2007,
  PROMOTION_EXPIRED: 2008,
  ORDER_PRODUCT_NOT_FOUND: 2011,
  PROMOTION_NOT_APPLICABLE: 2012,
  PARSING_PROMOTION_ERROR: 2013,
  ADDRESS_EXISTED: 2014,

  // 3xxx - User input error
  INVALID_USERNAME_OR_PASSWORD: 3000,
  INVALID_SHOP_DATA: 3001,
  NOT_ALLOWED: 3002,
  INVALID_ORDER_DATA: 3003,
  INVALID_COORDINATE: 3004,
  INVALID_DISTANCE_DATA: 3005,
  NOT_LOGGED_IN: 3006,
  INVALID_TOKEN: 3007,
  INVALID_PRODUCT_DATA: 3008,
  INVALID_ADDRESS_DATA: 3009,
  INVALID_PROMOTION_DATA: 3010,

  // 4xxx - System error
  SERVER_ERROR: 4000,
  CREATE_SHOP_ERROR: 4001,
  UPDATE_SHOP_ERROR: 4002,
  DELETE_SHOP_ERROR: 4003,
  GET_PRODUCTES_ERROR: 4004,
  PAYMENT_METHOD_NOT_SUPPORTED: 4005,
  ORDER_METHOD_NOT_SUPPORTED: 4006,
  CREATE_ORDER_ERROR: 4007,
  GET_ORDER_ERROR: 4008,
  GET_DISTANCE_ERROR: 4009,
  GET_GEOCODE_ERROR: 4010,
  CREATE_DISTANCE_ERROR: 4011,
  UPDATE_ORDER_ERROR: 4012,
  DELETE_ORDER_ERROR: 4012,
  UPDATE_USER_ERROR: 4013,
  GET_SHOP_ERROR: 4014,
  CREATE_PRODUCT_ERROR: 4015,
  UPDATE_PRODUCT_ERROR: 4016,
  DELETE_PRODUCT_ERROR: 4017,
  UPDATE_ORDER_PRODUCT_ERROR: 4018,
  GET_ORDER_PRODUCT_ERROR: 4019,
  GET_USER_ERROR: 4020,
  GET_ADDRESS_ERROR: 4021,
  CREATE_ADDRESS_ERROR: 4022,
  UPDATE_ADDRESS_ERROR: 4023,
  DELETE_ADDRESS_ERROR: 4024,
  DELETE_DISTANCE_ERROR: 4025,
  GET_PROMOTION_ERROR: 4026,
  CREATE_PROMOTION_ERROR: 4027,
  UPDATE_PROMOTION_ERROR: 4028,
  DELETE_PROMOTION_ERROR: 4029,
  DELETE_ORDER_PRODUCT_ERROR: 4034,
};

let errorMap = {};
errorMap[errorCodes.MISSING_REQUIRED_FIELDS] = "Thông tin không đầy đủ";

errorMap[errorCodes.SHOP_NOT_FOUND] = "Không tìm thấy SHOP";
errorMap[errorCodes.SHOP_EXISTED] = "Tên SHOP đã tồn tại";
errorMap[errorCodes.ORDER_NOT_FOUND] = "Không tìm thấy order";
errorMap[errorCodes.DISTANCE_NOT_FOUND] = "Không tìm thấy khoảng cách đã lưu";
errorMap[errorCodes.USER_NOT_FOUND] = "Không tìm thấy tài khoản";
errorMap[errorCodes.PRODUCT_EXISTED] = "Tên món ăn đã tồn tại";
errorMap[errorCodes.PRODUCT_NOT_FOUND] = "Không tìm thấy món ăn";
errorMap[errorCodes.ADDRESS_NOT_FOUND] = "Không tìm thấy địa chỉ";
errorMap[errorCodes.PROMOTION_NOT_FOUND] = "Không tìm thấy khuyến mãi";
errorMap[errorCodes.PROMOTION_EXPIRED] =
  "Khuyến mãi đã hết hạn hoặc đã dùng quá số lần cho phép";
errorMap[errorCodes.ORDER_PRODUCT_NOT_FOUND] =
  "Không tìm thấy món ăn của order";
errorMap[errorCodes.PROMOTION_NOT_APPLICABLE] =
  "Mã khuyến mãi không áp dụng được cho đơn hàng này";
errorMap[errorCodes.PARSING_PROMOTION_ERROR] = "Dữ liệu mã khuyến mãi bị lỗi";
errorMap[errorCodes.ADDRESS_EXISTED] = "Tên địa chỉ đã tồn tại";

errorMap[errorCodes.INVALID_USERNAME_OR_PASSWORD] =
  "Tên đăng nhập hoặc mật khẩu không đúng";
errorMap[errorCodes.INVALID_SHOP_DATA] = "Thông tin SHOP không hợp lệ";
errorMap[errorCodes.NOT_ALLOWED] = "Bạn không có quyền truy cập";
errorMap[errorCodes.INVALID_ORDER_DATA] = "Thông tin order không hợp lệ";
errorMap[errorCodes.INVALID_COORDINATE] = "Tọa độ không hợp lệ";
errorMap[errorCodes.INVALID_DISTANCE_DATA] = "Dữ liệu vị trí không hợp lệ";
errorMap[errorCodes.NOT_LOGGED_IN] = "Bạn chưa đăng nhập";
errorMap[errorCodes.INVALID_TOKEN] =
  "Phiên đăng nhập không hợp lệ, xin hãy tải lại trang";
errorMap[errorCodes.INVALID_PRODUCT_DATA] = "Thông tin món ăn không hợp lệ";
errorMap[errorCodes.INVALID_ADDRESS_DATA] = "Thông tin địa chỉ không hợp lệ";
errorMap[errorCodes.INVALID_PROMOTION_DATA] =
  "Thông tin mã khuyến mãi không hợp lệ";

errorMap[errorCodes.SERVER_ERROR] = "Lỗi hệ thống";
errorMap[errorCodes.GET_SHOP_ERROR] = "Lỗi khi tìm SHOP, hãy thử lại sau";
errorMap[errorCodes.CREATE_SHOP_ERROR] = "Lỗi khi tạo SHOP, hãy thử lại sau";
errorMap[errorCodes.UPDATE_SHOP_ERROR] =
  "Lỗi khi cập nhật SHOP, hãy thử lại sau";
errorMap[errorCodes.DELETE_SHOP_ERROR] = "Lỗi khi xóa SHOP, hãy thử lại sau";
errorMap[errorCodes.GET_PRODUCTES_ERROR] =
  "Lỗi khi tìm món ăn, hãy thử lại sau";
errorMap[errorCodes.PAYMENT_METHOD_NOT_SUPPORTED] =
  "Chưa hỗ trợ phương thức thanh toán này, bạn thử cách khác nhé";
errorMap[errorCodes.ORDER_METHOD_NOT_SUPPORTED] =
  "Chưa hỗ trợ phương thức đặt món này, bạn thử cách khác nhé";
errorMap[errorCodes.CREATE_ORDER_ERROR] =
  "Lỗi khi tạo đơn hàng, hãy thử lại sau";
errorMap[errorCodes.GET_ORDER_ERROR] = "Lỗi khi tìm đơn hàng, hãy thử lại sau";
errorMap[errorCodes.UPDATE_ORDER_ERROR] =
  "Lỗi khi cập nhật đơn hàng, hãy thử lại sau";
errorMap[errorCodes.DELETE_ORDER_ERROR] =
  "Lỗi khi xóa đơn hàng, hãy thử lại sau";
errorMap[errorCodes.GET_GEOCODE_ERROR] = "Lỗi khi tính tọa độ, hãy thử lại sau";
errorMap[errorCodes.GET_DISTANCE_ERROR] =
  "Lỗi khi tính khoảng cách, hãy thử lại sau";
errorMap[errorCodes.CREATE_DISTANCE_ERROR] =
  "Lỗi khi lưu lại khoảng cách, hãy thử lại sau";
errorMap[errorCodes.DELETE_DISTANCE_ERROR] =
  "Lỗi khi xóa khoảng cách, hãy thử lại sau";
errorMap[errorCodes.UPDATE_USER_ERROR] =
  "Lỗi cập nhật thông tin tài khoản, hãy thử lại sau";
errorMap[errorCodes.CREATE_PRODUCT_ERROR] =
  "Lỗi khi tạo món ăn, hãy thử lại sau";
errorMap[errorCodes.UPDATE_PRODUCT_ERROR] =
  "Lỗi khi cập nhật món ăn, hãy thử lại sau";
errorMap[errorCodes.DELETE_PRODUCT_ERROR] =
  "Lỗi khi xóa món ăn, hãy thử lại sau";
errorMap[errorCodes.GET_ORDER_PRODUCT_ERROR] =
  "Lỗi khi tìm món ăn trong đơn hàng, hãy thử lại sau";
errorMap[errorCodes.UPDATE_ORDER_PRODUCT_ERROR] =
  "Lỗi khi cập nhật món ăn trong đơn hàng, hãy thử lại sau";
errorMap[errorCodes.GET_USER_ERROR] =
  "Lỗi khi tìm thông tin người dùng, hãy thử lại sau";
errorMap[errorCodes.GET_ADDRESS_ERROR] = "Lỗi khi tìm địa chỉ, hãy thử lại sau";
errorMap[errorCodes.CREATE_ADDRESS_ERROR] =
  "Lỗi khi tạo địa chỉ, hãy thử lại sau";
errorMap[errorCodes.UPDATE_ADDRESS_ERROR] =
  "Lỗi khi cập nhật địa chỉ, hãy thử lại sau";
errorMap[errorCodes.DELETE_ADDRESS_ERROR] =
  "Lỗi khi xóa địa chỉ, hãy thử lại sau";
errorMap[errorCodes.GET_PROMOTION_ERROR] =
  "Lỗi khi tìm khuyến mãi, hãy thử lại sau";
errorMap[errorCodes.CREATE_PROMOTION_ERROR] =
  "Lỗi khi tạo khuyến mãi, hãy thử lại sau";
errorMap[errorCodes.UPDATE_PROMOTION_ERROR] =
  "Lỗi khi cập nhật khuyến mãi, hãy thử lại sau";
errorMap[errorCodes.DELETE_PROMOTION_ERROR] =
  "Lỗi khi xóa khuyến mãi, hãy thử lại sau";

class GTError extends Error {
  constructor(errorCode, data = {}) {
    super(errorMap[errorCode]);
    this.code = errorCode;
    this.msg = errorMap[errorCode];
    this.data = data;
  }
}

module.exports = {
  GTError,
  errorCodes,
  errorMap,
};
