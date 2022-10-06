const express = require('express');
const router = express.Router();

const { goHome} = require('../controllers/goHome');

// Setup "index" routes
router.get('/', goHome);



module.exports = router;