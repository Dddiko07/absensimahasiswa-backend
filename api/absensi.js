const express = require("express");
const cors = require("cors");

const absensiRoutes = require("../routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

// ⬇️ penting: route root karena sudah di /api/absensi
app.use("/", absensiRoutes);

module.exports = app;
