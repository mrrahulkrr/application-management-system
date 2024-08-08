const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  candidateName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  applicationDate: { type: Date, default: Date.now },
  status: { type: String, default: 'new' },
  resume: { type: String },
  coverLetter: { type: String },
  history: [
    {
      status: String,
      updatedAt: { type: Date, default: Date.now },
    },
  ],
});

module.exports = mongoose.model('Application', applicationSchema);
