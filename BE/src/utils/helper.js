const {
  USAGE_PERIOD_DAY,
  USAGE_PERIOD_WEEK,
  USAGE_PERIOD_MONTH,
  USAGE_PERIOD_YEAR,
  USAGE_PERIOD_ONCE,
} = require("./consts");
const { GTError, errorCodes } = require("./error");
const { statusCode } = require("./index");

/**
 * Convert Vietnamese names to english name
 *
 * Shout out to https://gist.github.com/hu2di/e80d99051529dbaa7252922baafd40e3 for great work <3
 * @param {String} name
 */

exports.convertViToEn = (name) => {
  return (
    name
      .toLowerCase()
      .trim()
      .replace(/ /g, "")
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
      .replace(/ì|í|ị|ỉ|ĩ/g, "i")
      .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
      .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
      .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
      .replace(/đ/g, "d")
      // Some system encode vietnamese combining accent as individual utf-8 characters
      .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "") // Huyền sắc hỏi ngã nặng
      .replace(/\u02C6|\u0306|\u031B/g, "")
  ); // Â, Ê, Ă, Ơ, Ư
};

/**
 * Calculate shipping price based on distance
 * @param {Number} distance
 * @returns
 */

exports.calculateShipPrice = (distance) => {
  if (distance < 8000) {
    return 10000;
  }
  return 10000 + Math.ceil((distance - 8000) / 5000) * 5000;
};

/**
 * Shuffles array. Thanks Durstenfeld!!!
 * @param {Object[]} array
 */

exports.shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
/**
 * Shuffles array. Thanks Durstenfeld!!!
 * @param {Object[]} array
 */

exports.shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

/**
 * Handles callback and responds errors if any
 * @param {Callback} handler
 * @returns
 */

exports.errorHandler = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (err) {
      console.error("Dafuq bro?", err.msg, err.code);
      let errData = {};
      try {
        JSON.stringify(err.data);
        errData = err.data;
      } catch (e) {
        // Do nothing
      }
      if (err instanceof GTError) {
        return res.status(statusCode.BAD_REQUEST).json({
          code: err.code,
          msg: err.msg,
          data: errData,
        });
      } else {
        const error = new GTError(errorCodes.SERVER_ERROR);
        return res.status(statusCode.INTERNAL_ERROR).json({
          code: error.code,
          msg: error.msg,
          data: errData,
        });
      }
    }
  };
};

const timestampsInPeriod = {
  [USAGE_PERIOD_DAY]: 3600000 * 24,
  [USAGE_PERIOD_WEEK]: 3600000 * 24 * 7,
  [USAGE_PERIOD_MONTH]: 3600000 * 24 * 30,
  [USAGE_PERIOD_YEAR]: 3600000 * 24 * 365,
};

exports.getPrevDate = (period) => {
  let curDate = new Date();
  if (period === USAGE_PERIOD_ONCE) {
    return new Date(0);
  } else {
    return new Date(curDate.getTime() - timestampsInPeriod[period]);
  }
};

exports.filterFalsyAttributes = (obj) =>
  Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
