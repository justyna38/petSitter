const mongoose = require('mongoose');

const petSitterSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  city: { type: String },
  petsAcceptes: {
    dogs: { type: Boolean },
    cats: { type: Boolean },
    hamster: { type: Boolean }
  },
  description: { type: String },
  age: { type: String },
});

const UserOwner = mongoose.model('petSitter', petSitterSchema, 'userPetSitter');

module.exports = UserOwner;