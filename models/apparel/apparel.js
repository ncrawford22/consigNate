// Load mongoose
const mongoose = require('mongoose');

// Add a shortcut to Schema
const Schema = mongoose.Schema;

// Create our Schema
const apparelSchema = new Schema({
    brand: { type: String, required: true},
    name: { type: String, required: true},
    imageUrl: { type: String },
    price: {type: Number},
    itemInStock: {type: Boolean},
    numItemInstock: {type: Number},
    sizeAvailable: {type: String},
    itemDetails: {type: String}
});

// Create a Model from our Schema
const Apparel = mongoose.model('Apparel', apparelSchema);

// Export our Model

module.exports = Apparel;