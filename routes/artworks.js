// routes/artworks.js
const express = require('express');
const router = express.Router();
const Artwork = require('../models/Artwork');

// CRUD routes
router.get('/', async (req, res) => {
    try {
        const artworks = await Artwork.find();
        res.json(artworks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;
