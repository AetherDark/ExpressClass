const { ExamenU2API } = require('../../models'); // Importa desde models/index.js

const crearZonaMapa = async (req, res) => {
  try {
    const { latitud, longitud, altitud, nombre, direccion } = req.body;

    if (!latitud || !longitud || !altitud || !nombre || !direccion) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const nuevaZona = await ExamenU2API.create({
      latitud,
      longitud,
      altitud,
      nombre,
      direccion
    });

    res.status(201).json(nuevaZona);
  } catch (error) {
    console.error('Error al crear la zona:', error);
    res.status(500).json({ error: 'Error interno' });
  }
};

module.exports = { crearZonaMapa };