const express = require("express");
const cors = require("cors");
require("dotenv").config();

const absensiRoutes = require("./routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE API
app.use("/api/absensi", absensiRoutes);

// OPTIONAL: test endpoint
app.get("/", (req, res) => {
  res.send("API Absensi Mahasiswa berjalan 🚀");
});

module.exports = app;
