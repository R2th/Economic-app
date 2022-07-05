exports.GENDERS = {
  male: "MALE",
  female: "FEMALE",
  other: "OTHER",
};

exports.PAYMENT_CASH = "cash";
exports.PAYMENT_MOMO = "momo";
exports.PAYMENT_BANK = "bank";

exports.USAGE_PERIOD_DAY = "day";
exports.USAGE_PERIOD_WEEK = "week";
exports.USAGE_PERIOD_MONTH = "month";
exports.USAGE_PERIOD_YEAR = "year";

exports.STATUS_FINISHED = "finished";
exports.STATUS_CANCELLED = "cancelled";

exports.matchMethod = new RegExp(
  "^(" + exports.methods.map((m) => `(${m.id})`).join("|") + ")$",
  "g"
);
exports.matchPayment = new RegExp(
  "^(" +
    [exports.PAYMENT_MOMO, exports.PAYMENT_BANK, exports.PAYMENT_CASH]
      .map((p) => `(${p})`)
      .join("|") +
    ")$",
  "g"
);
