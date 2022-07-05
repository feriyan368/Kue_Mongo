const mongoose = require("mongoose");

const kueEmbeddedSchema = new mongoose.Schema({
  kode: {
    required: true,
    type: String,
  },
  nama: {
    required: true,
    type: String,
  },
  harga: {
    required: true,
    type: String,
  },
  expired: {
    required: true,
    type: String,
  },
  toping: [
    {
      kdTp: String,
      ukuran: String,
    },
  ],
});

module.exports = mongoose.model("Kue", kueEmbeddedSchema, "Kue");
