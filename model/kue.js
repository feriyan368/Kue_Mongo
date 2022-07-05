const mongoose = require("mongoose");

const kueSchema = new mongoose.Schema({
  kode: {
    require: true,
    type: String,
  },
  nama: String,
  harga: String,
  expired: String,
});

module.exports = mongoose.model("Kue", kueSchema);
