const express = require('express');
const router = express.Router();
const { crearZonaMapa } = require('../controllers/mapaController');

router.post('/mapa/new', crearZonaMapa);

module.exports = router;