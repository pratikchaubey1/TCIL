const BannedSupplier = require("../Models/BannedSupplier");

// ADD
const addBannedSupplier = async (req, res) => {
  try {
    const {
      supplierName,
      supplierAddress,
      bannedDate,
      bannedBy,
      banningPeriod,
      remarks,
    } = req.body;

    const bannedDateObj = bannedDate ? new Date(bannedDate) : new Date();

    const banEndDate = new Date(bannedDateObj);
    banEndDate.setDate(banEndDate.getDate() + Number(banningPeriod));

    const data = await BannedSupplier.create({
      supplierName,
      supplierAddress,
      bannedDate: bannedDateObj,
      bannedBy,
      banningPeriod: Number(banningPeriod),
      banEndDate,
      remarks,
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// GET
const getBannedSuppliers = async (req, res) => {
  try {
    const today = new Date();
    await BannedSupplier.deleteMany({ banEndDate: { $lt: today } });

    const data = await BannedSupplier.find().sort({ bannedDate: -1 });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE / UNBAN
const unbanSupplier = async (req, res) => {
  try {
    await BannedSupplier.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(404).json({ message: "Supplier not found" });
  }
};

module.exports = {
  addBannedSupplier,
  getBannedSuppliers,
  unbanSupplier,
};
