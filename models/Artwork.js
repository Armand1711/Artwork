// models/Artwork.js
const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model('Artwork', artworkSchema);
