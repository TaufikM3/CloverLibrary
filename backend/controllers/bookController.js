// controllers/bookController.js
const Book = require('../models/book');
const fs = require('fs');

class BookController {
    static async createBook(req, res) {
        const { title, author, publisher, publicationYear, category, synopsis } = req.body;
        const image = req.file ? req.file.filename : '';
        const userId = req.user.id;

        try {
            const newBook = new Book({
                title,
                author,
                publisher,
                publicationYear,
                category,
                synopsis,
                image,
                userId
            });
            await newBook.save();
            res.status(201).json({ message: 'Book created successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async getAllBooks(req, res) {
        try {
            const books = await Book.find({ userId: req.user.id });
            res.status(200).json(books);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async getBookById(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) throw new Error('Book not found');
            res.status(200).json(book);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }

    static async updateBook(req, res) {
        const { title, author, publisher, publicationYear, category, synopsis } = req.body;
        const image = req.file ? req.file.filename : req.body.old_image;

        if (req.file) {
            try {
                fs.unlinkSync("./uploads/" + req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const updatedBook = await Book.findByIdAndUpdate(
                req.params.id,
                { title, author, publisher, publicationYear, category, synopsis, image },
                { new: true }
            );
            if (!updatedBook) throw new Error('Book not found');
            res.status(200).json({ message: 'Book updated successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async deleteBook(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) throw new Error('Book not found');
            
            try {
                fs.unlinkSync("./uploads/" + book.image);
            } catch (err) {
                console.log(err);
            }

            res.status(200).json({ message: 'Book deleted successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

module.exports = BookController;
