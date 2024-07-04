const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



class API {
    // Method to register a new user
    static async register(req, res) {
        const { username, password } = req.body;
        try {
            const user = new User({ username, password });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Method to login a user
    static async login(req, res) {
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) throw new Error('User not found');

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw new Error('Invalid credentials');

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    // Method to logout a user
    static async logout(req, res) {
        // Since we're using JWT, logging out can be handled on the client-side by removing the token
        res.status(200).json({ message: 'User logged out successfully' });
    }
}

module.exports = API;
