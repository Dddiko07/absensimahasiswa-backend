const express = require("express");
const cors = require("cors");
require("dotenv").config();

const absensiRoutes = require("./routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

// ⬅️ JANGAN pakai /api di sini
app.use("/absensi", absensiRoutes);

app.get("/", (req, res) => {
  res.send("API Absensi Mahasiswa berjalan 🚀");
});

module.exports = app;
