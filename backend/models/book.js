// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    publicationYear: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);
