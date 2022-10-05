const express = require('express');
const router = express.Router();

const { findAllApparels, showNewView, deleteOneApparel, updateOneApparel, createNewApparel, showEditView, clearData, seedData, showOneApparel, displayBuyPage, boughtApparel } = require('../controllers/apparel');

// Setup "index" routes
router.get('/', findAllApparels);

// Setup "new" route
router.get('/new', showNewView);

// Confirmation
router.get('/:id/confirmation', displayBuyPage)

// Update after Confirmation
router.put('/:id/confirmation', boughtApparel)

// Setup "destroy" route
router.delete('/:id', deleteOneApparel);

// Setup "update" route
router.put('/:id', updateOneApparel);

// Setup "create" route
router.post('/', createNewApparel);

// Setup "edit" route
router.get('/:id/edit', showEditView);

// Setup "clear" route
router.get('/clear', clearData);

// Setup "seed" route
router.get('/seed', seedData);

// Setup "show" route
router.get('/:id', showOneApparel)


module.exports = router;