const kue = require("../model/kueEmbedded");

module.exports = {
  getKue: async (req, res) => {
    try {
      const result = await kue.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  insert: async (req, res) => {
    const data = new kue({
      kode: req.body.kode,
      nama: req.body.nama,
      harga: req.body.harga,
      expired: req.body.expired,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ massage: error.massage });
    }
  },

  insertToping: async (req, res) => {
    const kode = req.params.kode;
    console.log(kode);
    try {
      await kue.updateOne(
        { kode: kode },
        {
          $push: {
            //mamasukan nilai kedalam array
            toping: {
              kdTp: String,
              ukuran: String,
            },
          },
        }
      );
      res.send("toping telah disimpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
  getTopingByKode: async (req, res) => {
    const kode = req.params.kode;
    try {
      const result = await kue.findOne({ kode: kode }, { _id: 0, toping: 1 });
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getKueByKode: async (req, res) => {
    const kode = req.params.kode;
    try {
      const result = await kue.find().where("kode").equals(kode);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    const filter = { kode: req.params.kode };
    const updateData = {
      nama: req.body.nama,
      harga: req.body.harga,
      expired: req.body.expired,
    };
    try {
      let result = await kue.updateOne(filter, updateData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ massage: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { kode: req.params.kode };
    try {
      await kue.deleteOne(filter);
      res.send("data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
