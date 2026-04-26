'use strict';

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    options: {
        a: {
            type: String,
            required: true
        },
        b: {
            type: String,
            required: true
        },
        c: {
            type: String,
            required: true
        },
        d: {
            type: String,
            required: true
        }
    },
    correctAnswer: {
        type: String,
        enum: ['a', 'b', 'c', 'd'],
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;