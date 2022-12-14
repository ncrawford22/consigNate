const express = require('express');
const router = express.Router();

const { findAllShoes, showNewView, deleteOneShoe, updateOneShoe, createNewShoe, showEditView, clearData, seedData, showOneShoePair, displayBuyPage, boughtShoe } = require('../controllers/shoes');

// Setup "index" routes
router.get('/', findAllShoes);

// Setup "new" route
router.get('/new', showNewView);

// Confirmation
router.get('/:id/confirmation', displayBuyPage)

// Update after Confirmation
router.put('/:id/confirmation', boughtShoe)

// Setup "destroy" route
router.delete('/:id', deleteOneShoe);

// Setup "update" route
router.put('/:id', updateOneShoe);

// Setup "create" route
router.post('/', createNewShoe);

// Setup "edit" route
router.get('/:id/edit', showEditView);

// Setup "clear" route
router.get('/clear', clearData);

// Setup "seed" route
router.get('/seed', seedData);

// Setup "show" route
router.get('/:id', showOneShoePair)


module.exports = router;