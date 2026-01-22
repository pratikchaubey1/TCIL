const mongoose = require("mongoose");

const bannedSupplierSchema = new mongoose.Schema(
  {
    supplierName: { type: String, required: true },
    supplierAddress: { type: String, required: true },
    bannedDate: { type: Date, required: true },
    bannedBy: { type: String, required: true },
    banningPeriod: { type: Number, required: true },
    banEndDate: { type: Date, required: true },
    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BannedSupplier", bannedSupplierSchema);
