const mongoose = require('mongoose');

// Define Trip Schema
const tripSchema = new mongoose.Schema({
    destination: String,
    price: Number,
    date: String,
    accommodations: String,
    activities: String
});

const TripModel = mongoose.model('Trip', tripSchema);

module.exports = TripModel;
