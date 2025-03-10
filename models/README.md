# Guía de Modelos y Migraciones con Sequelize

Esta guía explica cómo trabajar con modelos y migraciones usando Sequelize CLI en el proyecto.

## Gestión de Modelos

### Crear un Nuevo Modelo
Para crear un nuevo modelo y su migración correspondiente, usa el siguiente comando:

```bash
npx sequelize-cli model:generate --name NombreModelo --attributes campo1:tipo,campo2:tipo
```

#### Tipos de Datos Disponibles
- `string`: Para textos cortos
- `text`: Para textos largos
- `integer`: Números enteros
- `float`: Números decimales
- `boolean`: Valores true/false
- `date`: Fechas
- `dateonly`: Solo fecha sin hora

#### Ejemplo Práctico
```bash
npx sequelize-cli model:generate --name ExamenU2API --attributes latitud:float,longitud:float,altitud:float,nombre:text,direccion:string
```

Este comando creará:
1. Un archivo de modelo en `/models/examenu2api.js`
2. Un archivo de migración en `/migrations/[timestamp]-create-examen-u2-api.js`

## Gestión de Migraciones

### Ejecutar Migraciones
Para aplicar todas las migraciones pendientes:
```bash
npx sequelize-cli db:migrate
```

### Gestionar Migraciones
- **Deshacer última migración:**
  ```bash
  npx sequelize-cli db:migrate:undo
  ```
- **Deshacer todas las migraciones:**
  ```bash
  npx sequelize-cli db:migrate:undo:all
  ```
- **Ver estado de migraciones:**
  ```bash
  npx sequelize-cli db:migrate:status
  ```

## Estructura de un Modelo

### Ejemplo Básico
```javascript
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ExamenU2API extends Model {
    static associate(models) {
      // Define aquí las relaciones entre modelos
    }
  }
  
  ExamenU2API.init({
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT,
    altitud: DataTypes.FLOAT,
    nombre: DataTypes.TEXT,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExamenU2API',
  });
  
  return ExamenU2API;
};
```

## Configuraciones Adicionales

### Timestamps Automáticos
Por defecto, Sequelize añade automáticamente:
- `createdAt`: Fecha de creación
- `updatedAt`: Fecha de última actualización

Para desactivarlos, añade en la configuración del modelo:
```javascript
{
  timestamps: false
}
```

### Sincronización con la Base de Datos
En `app.js`, el método `sequelize.sync()` asegura que los modelos coincidan con la base de datos:
```javascript
sequelize.sync() // Sincronización normal
sequelize.sync({ force: true }) // ¡CUIDADO! Recrea las tablas
```

## Buenas Prácticas

1. **Nombres de Modelos:**
   - Usar PascalCase para el nombre del modelo
   - Usar singular (Usuario en lugar de Usuarios)

2. **Migraciones:**
   - Revisar el archivo de migración antes de ejecutarlo
   - Mantener las migraciones versionadas en el control de código

3. **Campos:**
   - Definir tipos de datos apropiados
   - Establecer restricciones necesarias (unique, allowNull, etc.)