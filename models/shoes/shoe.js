// Load mongoose
const mongoose = require('mongoose');

// Add a shortcut to Schema
const Schema = mongoose.Schema;

// Create our Schema
const shoeSchema = new Schema({
    imageUrl: { type: String },
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
const Shoe = mongoose.model('Shoe', shoeSchema);

// Export our Model

module.exports = Shoe;