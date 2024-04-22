const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
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
    type: String,
    trim: true,
    required: true,
  },

  position: {
    type: String,
    trim: true,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
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

module.exports = mongoose.model('Employee', employeeSchema);
