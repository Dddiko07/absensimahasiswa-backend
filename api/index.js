const express = require("express");
const cors = require("cors");

const absensiRoutes = require("../routes/absensi");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", absensiRoutes);

module.exports = app;
