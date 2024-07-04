// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');

// Multer middleware
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

let upload = multer({
    storage: storage,
}).single("image");

// Routes for book management
router.post('/', authMiddleware, upload, bookController.createBook);
router.get('/', authMiddleware, bookController.getAllBooks);
router.get('/:id', authMiddleware, bookController.getBookById);
router.put('/:id', authMiddleware, upload, bookController.updateBook);
router.delete('/:id', authMiddleware, bookController.deleteBook);

module.exports = router;
