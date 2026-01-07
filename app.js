const express = require("express");
const cors = require("cors");
require("dotenv").config();

const absensiRoutes = require("./routes/absensi");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", absensiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
