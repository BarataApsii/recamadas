const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },

  firstname: {
    type: String,
    trim: true,
    required: true,
  },

  lastname: {
    type: String,
    trim: true,
    required: true,
  },

  phone: {
    type: Number,
    trim: true,
    required: true,
  },

  address: {
    type: String,
    trim: true,
    required: true,
  },

  gender: String,

  birthday: Date,

  position: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
});

schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Employees', schema);
