const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For creating JWT tokens

const OwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash the password before saving
OwnerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
OwnerSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to generate JWT token
OwnerSchema.methods.generateAuthToken = function() {
  return jwt.sign({ _id: this._id, name: this.name, email: this.email }, 'your_jwt_secret', { expiresIn: '1h' });
};

module.exports = mongoose.model('Owner', OwnerSchema);
