const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
    email: { type: String, required: true },
    answers: { type: [String], required: true },
    score: { type: Number, required: true },
    completionTime: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Participant', participantSchema);