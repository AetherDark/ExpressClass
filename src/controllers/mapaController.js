const { ExamenU2API } = require('../../models');

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

const obtenerZona = async (req, res) => {
  try {
    const { latitud, altitud, longitud } = req.params;

    if (isNaN(latitud) || isNaN(altitud) || isNaN(longitud)) {
      return res.status(400).json({ error: "Las coordenadas deben ser números válidos" });
    }

    const zona = await ExamenU2API.findOne({
      where: {
        latitud: parseFloat(latitud),
        altitud: parseFloat(altitud),
        longitud: parseFloat(longitud)
      }
    });

    if (!zona) {
      return res.status(404).json({ error: "Zona no encontrada" });
    }

    res.status(200).json(zona);
  } catch (error) {
    console.error('Error al obtener la zona:', error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { crearZonaMapa, obtenerZona };