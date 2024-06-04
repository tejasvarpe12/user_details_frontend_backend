const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/users', async (req, res) => {
    const { name, email, age } = req.body;
    const user = new User({ name, email, age });
    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
