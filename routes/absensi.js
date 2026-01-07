const express = require("express");
const router = express.Router();

const {
  getAbsensi,
  createAbsensi
} = require("../controllers/absensiController");

router.get("/", getAbsensi);
router.post("/", createAbsensi);

module.exports = router;
