const express = require('express');
const router = express.Router();
const { crearZonaMapa, obtenerZona, obtenerTodasZonas, eliminarZona } = require('../controllers/mapaController');

router.post('/mapa/new', crearZonaMapa);
router.get('/mapa/:latitud/:altitud/:longitud', obtenerZona);
router.get('/mapa/all', obtenerTodasZonas);
router.delete('/mapa/:latitud/:altitud/:longitud', eliminarZona);

module.exports = router;