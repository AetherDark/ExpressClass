markdown
Copy

# Modelos y Migraciones

Guía para gestionar modelos y migraciones con Sequelize CLI.

## Comandos Básicos

### Crear un Modelo
Genera un modelo y su migración:
```bash
npx sequelize-cli model:generate --name NombreModelo --attributes campo1:tipo,campo2:tipo

Ejemplo:
bash
Copy

npx sequelize-cli model:generate --name ExamenU2API --attributes latitud:float,longitud:float,altitud:float,nombre:text,direccion:string

Ejecutar Migraciones

Aplica todas las migraciones pendientes:
bash
Copy

npx sequelize-cli db:migrate

Revertir Migración

Deshace la última migración:
bash
Copy

npx sequelize-cli db:migrate:undo

Estructura de un Modelo
javascript
Copy

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamenU2API extends Model {
    static associate(models) {}
  }
  ExamenU2API.init({
    // Campos aquí
  }, {
    sequelize,
    modelName: 'ExamenU2API',
  });
  return ExamenU2API;
};

Notas

    createdAt y updatedAt: Sequelize añade estas columnas automáticamente. Si no las necesitas, agrega timestamps: false en la configuración del modelo.

    Sincronización: Usa sequelize.sync() en app.js para asegurar que los modelos coincidan con la base de datos.

Copy


---

### **¿Cómo Usarlos?**
1. Coloca el primer `README.md` en la **raíz del proyecto**.
2. Coloca el segundo `README.md` dentro de la carpeta `models/`.
