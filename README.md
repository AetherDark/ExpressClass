# API para Gestión de Zonas Geográficas

API RESTful construida con Express.js, Sequelize ORM y MySQL para la gestión de zonas geográficas con coordenadas e información de ubicación.

## Requisitos Previos

- Node.js (v18 o superior)
- MySQL Server (v8.0 recomendado)
- npm (Gestor de Paquetes de Node)

## Guía de Instalación

### 1. Configuración de la Base de Datos

1. Instala MySQL Server si aún no lo tienes
2. Crea una nueva base de datos:
```bash
mysql -u root -p
```
```sql
CREATE DATABASE ExamenU2;
```

### 2. Configuración del Proyecto

1. Clona el repositorio e instala las dependencias:
```bash
git clone [URL_DEL_REPOSITORIO]
cd Express
npm install
```

2. Configura la conexión a la base de datos:
   - Abre `config/config.json`
   - Actualiza la configuración de desarrollo:
```json
{
  "development": {
    "username": "root",
    "password": "tu_contraseña",
    "database": "ExamenU2",
    "host": "localhost",
    "dialect": "mysql",
    "port": "3306"
  }
}
```

3. Ejecuta las migraciones de la base de datos:
```bash
npx sequelize-cli db:migrate
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El servidor se iniciará en `http://localhost:2025`

## Estructura de la Base de Datos

### Tabla: ExamenU2APIs

| Columna   | Tipo    | Descripción                    |
|-----------|---------|--------------------------------|
| id        | INTEGER | Clave Primaria, Auto-increment |
| latitud   | FLOAT   | Coordenada de latitud         |
| longitud  | FLOAT   | Coordenada de longitud        |
| altitud   | FLOAT   | Altitud en metros             |
| nombre    | TEXT    | Nombre de la ubicación        |
| direccion | STRING  | Dirección de la ubicación     |
| createdAt | DATE    | Fecha de creación del registro|
| updatedAt | DATE    | Fecha de última actualización |

## Endpoints de la API

### Crear Nueva Zona
- **POST** `/api/mapa/new`
- **Content-Type:** `application/json`
- **Cuerpo de la Petición:**
```json
{
  "latitud": 19.4326,
  "longitud": -99.1332,
  "altitud": 2240,
  "nombre": "CDMX",
  "direccion": "Zócalo"
}
```
- **Respuesta:** Devuelve el objeto de la zona creada con estado 201

### Obtener Zona por Coordenadas
- **GET** `/api/mapa/:latitud/:altitud/:longitud`
- **Ejemplo:** `/api/mapa/19.4326/2240/-99.1332`
- **Respuesta:** Devuelve el objeto de la zona si se encuentra, 404 si no existe

### Obtener Todas las Zonas
- **GET** `/api/mapa/all`
- **Respuesta:** Devuelve un array con todas las zonas registradas

### Eliminar Zona
- **DELETE** `/api/mapa/:latitud/:altitud/:longitud`
- **Ejemplo:** `/api/mapa/19.4326/2240/-99.1332`
- **Respuesta:** Devuelve mensaje de éxito si se elimina, 404 si no existe

## Migraciones

El proyecto incluye dos migraciones principales:

1. **Migración Inicial (20250309200324-create-examen-u-2-api.js)**
   - Crea la tabla ExamenU2APIs
   - Establece la estructura básica con campos de coordenadas y ubicación

2. **Migración de Timestamps (20250309202926-add-createdAt-updatedAt-to-examenu2api.js)**
   - Añade las columnas createdAt y updatedAt
   - Implementa la gestión automática de timestamps

Para gestionar las migraciones:
- Ejecutar migraciones: `npx sequelize-cli db:migrate`
- Deshacer última migración: `npx sequelize-cli db:migrate:undo`
- Deshacer todas las migraciones: `npx sequelize-cli db:migrate:undo:all`

## Manejo de Errores

La API implementa un manejo adecuado de errores:
- 400: Solicitud Incorrecta (entrada inválida)
- 404: No Encontrado
- 500: Error Interno del Servidor

## Desarrollo

Para ejecutar en modo desarrollo con recarga automática:
```bash
npm run dev
```

Para producción:
```bash
npm start
```
```