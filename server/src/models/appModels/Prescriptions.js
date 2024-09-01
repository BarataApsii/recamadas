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

  patients: { type: mongoose.Schema.ObjectId, ref: 'Patients', autopopulate: true },

  lenstype: {
    type: String,
    required: true,
  },

  frametype: {
    type: String,
    required: true,
  },
  spherepower: {
    type: String,
    required: true,
    trim: true,
  },
  cylinderpower: {
    type: String,
    required: true,
  },
  axis: {
    type: String,
    required: true,
  },
  prism: {
    type: String,
    required: true,
  },
  pd: {
    type: String,
    required: true,
  },
  add: {
    type: String,
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
});

schema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Prescriptions', schema);
