const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = new mongoose.Schema({
  userEmail: String,
  userPhoto: String,
  userName: String,
})

module.exports = mongoose.model('User', userSchema);
