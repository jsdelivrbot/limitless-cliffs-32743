// User.js
var mongoose = require('mongoose');
var CarSchema = new mongoose.Schema({
  make: String,
  model: String,
  zero_to_sixty: String,
  year: String
});
mongoose.model('Car', CarSchema);

module.exports = mongoose.model('Car');
