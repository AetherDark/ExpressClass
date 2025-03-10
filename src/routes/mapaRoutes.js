const express = require('express');
const router = express.Router();
const { crearZonaMapa, obtenerZona } = require('../controllers/mapaController');

router.post('/mapa/new', crearZonaMapa);
router.get('/mapa/:latitud/:altitud/:longitud', obtenerZona);

module.exports = router;