const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user-model', 
    required: true,
    unique: true
  },

  expertise: {
    type: Array,
    default: []
  },
  gitHub:{
    type: String,
    required: true
  },
  linkDin:{
    type: String,
    required: true
  },
  webSite:{
    type: String,
  },
  desription: {
    type:  String,
    default: ""
  },
  bestProject: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('mentormodel', mentorSchema);
