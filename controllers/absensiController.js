const Absensi = require("../models/absensiModel");

exports.getAbsensi = async (req, res) => {
  try {
    const data = await Absensi.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAbsensi = async (req, res) => {
  try {
    await Absensi.create(req.body);
    res.json({ message: "Data absensi ditambahkan" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAbsensi = async (req, res) => {
  try {
    await Absensi.update(req.params.id, req.body);
    res.json({ message: "Data absensi diupdate" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAbsensi = async (req, res) => {
  try {
    await Absensi.delete(req.params.id);
    res.json({ message: "Data absensi dihapus" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
