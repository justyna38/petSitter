const mongoose = require('mongoose');

const chienSchema = new mongoose.Schema({
  nom: String,
  maitre: String
});

module.exports = mongoose.model('Chien', chienSchema, 'chien');