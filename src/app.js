const express = require('express');
const app = express();
const sequelize = require('./db');
const mapaRoutes = require('./routes/mapaRoutes');
const PORT = process.env.PORT || 2025;

app.use(express.json());
app.use('/api', mapaRoutes);

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error al sincronizar:', err));