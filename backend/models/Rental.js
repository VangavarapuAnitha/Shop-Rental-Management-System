const mongoose = require('mongoose');

const RentalSchema = new mongoose.Schema({
  shop: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
  tenantName: { type: String, required: true },
  rentalDate: { type: Date, required: true },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model('Rental', RentalSchema);
