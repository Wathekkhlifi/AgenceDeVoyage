
const express = require('express');
const bcrypt = require('bcrypt');
const Client = require('../models/Client');

const router = express.Router();


router.post('/register', async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        let client = await Client.findOne({ email });
        if (client) {
            return res.status(400).json({ message: 'Client already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        client = new Client({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        await client.save();
        res.status(201).json({ message: 'Client registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
