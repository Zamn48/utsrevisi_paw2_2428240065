
const mongoose = require('mongoose');

const pesananLaundrySchema = new mongoose.Schema({
  noNota: {
    type: String,
    required: [true, 'noNota wajib diisi'],
    unique: true,
    trim: true
  },
  namaPelanggan: {
    type: String,
    required: [true, 'namaPelanggan wajib diisi'],
    trim: true
  },
  beratKg: {
    type: Number,
    required: [true, 'beratKg wajib diisi'],
    min: [1, 'beratKg minimal 1 kg']
  },
  layanan: {
    type: String,
    required: [true, 'layanan wajib diisi'],
    trim: true
  },
  pengambilan: {
    alamat: { type: String, trim: true },
    jam: { type: String, trim: true }
  },
  outletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Outlet',
    required: [true, 'outletId wajib diisi']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PesananLaundry', pesananLaundrySchema);
