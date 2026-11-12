
const PesananLaundry = require('../models/pesananLaundryModel');

exports.create = async (req, res) => {
  try {
    const pesanan = await PesananLaundry.create(req.body);
    res.status(201).json(pesanan);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        message: 'noNota sudah digunakan'
      });
    }

    res.status(400).json({
      message: err.message
    });
  }
};


exports.getAll = async (req, res) => {
  try {
    const filter = {};

    if (req.query.layanan) {
      filter.layanan = req.query.layanan;
    }

    const sortOrder = Number(req.query.sort) === 1 ? 1 : -1;

    const pesanan = await PesananLaundry.find(filter)
      .sort({ noNota: sortOrder });

    res.status(200).json(pesanan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getById = async (req, res) => {
  try {
    const pesanan = await PesananLaundry.findById(req.params.id)
      .populate('outletId', 'kode nama');

    if (!pesanan) {
      return res.status(404).json({
        message: 'Pesanan laundry tidak ditemukan'
      });
    }

    res.status(200).json(pesanan);
  } catch (err) {
    res.status(400).json({
      message: err.message
    });
  }
};
