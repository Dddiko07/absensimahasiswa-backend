const express = require("express");
const cors = require("cors");

const absensiRoutes = require("../routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

// ⬅️ ROUTE UTAMA
app.use("/", absensiRoutes);

// ⬅️ EXPORT APP (WAJIB)
module.exports = app;
