const db = require("../config/db");

exports.getAll = async () => {
  const result = await db.query("SELECT * FROM absensi ORDER BY id DESC");
  return result.rows;
};

exports.create = async (data) => {
  const { nama, nim, tanggal, status } = data;
  await db.query(
    "INSERT INTO absensi (nama, nim, tanggal, status) VALUES ($1, $2, $3, $4)",
    [nama, nim, tanggal, status]
  );
};

exports.update = async (id, data) => {
  const { nama, nim, tanggal, status } = data;
  await db.query(
    "UPDATE absensi SET nama=$1, nim=$2, tanggal=$3, status=$4 WHERE id=$5",
    [nama, nim, tanggal, status, id]
  );
};

exports.delete = async (id) => {
  await db.query("DELETE FROM absensi WHERE id=$1", [id]);
};
