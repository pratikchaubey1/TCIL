const express = require("express");
const router = express.Router();

const {
  addBannedSupplier,
  getBannedSuppliers,
  unbanSupplier,
} = require("../Controllers/bannedController"); 

router.get("/test", (req, res) => {
  res.send("Banned Supplier API Running");
});

router.post("/", addBannedSupplier);
router.get("/", getBannedSuppliers);
router.delete("/:id", unbanSupplier);

module.exports = router;
