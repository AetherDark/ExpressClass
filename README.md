markdown
Copy

# API para Gestión de Zonas Geográficas

API para crear y gestionar zonas geográficas con Express, Sequelize y MySQL.

## Requisitos Previos
- Node.js v18+
- MySQL instalado y configurado.
- npm o yarn.

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd nombre-del-repositorio

    Instalar dependencias:
    bash
    Copy

    npm install

    Configurar la base de datos:

        Crea una base de datos en MySQL llamada ExamenU2.

        Actualiza config/config.json con tus credenciales de MySQL:
        json
        Copy

        {
          "development": {
            "username": "root",
            "password": "tu_contraseña",
            "database": "ExamenU2",
            "host": "localhost",
            "dialect": "mysql"
          }
        }

    Ejecutar migraciones:
    bash
    Copy

    npx sequelize-cli db:migrate

    Iniciar el servidor:
    bash
    Copy

    npm run dev

Uso
Endpoints

    POST /api/mapa/new: Crear una nueva zona.
    bash
    Copy

    curl -X POST http://localhost:2025/api/mapa/new \
    -H "Content-Type: application/json" \
    -d '{
      "latitud": 19.4326,
      "longitud": -99.1332,
      "altitud": 2240,
      "nombre": "CDMX",
      "direccion": "Zócalo"
    }'

    GET /api/mapa/:latitud/:altitud/:longitud**: Obtener una zona por sus coordenadas.
    bash
    curl http://localhost:2025/api/mapa/19.4326/2240/-99.1332

    GET /api/mapa/all**: Obtener todas las zonas registradas.
    bash
    curl http://localhost:2025/api/mapa/all

    DELETE /api/mapa/:latitud/:altitud/:longitud**: Eliminar una zona por sus coordenadas.
    bash
    curl -X DELETE http://localhost:2025/api/mapa/19.4326/2240/-99.1332

Estructura del Proyecto
Copy

├── src/
│   ├── controllers/
│   ├── routes/
│   ├── app.js
│   └── db.js
├── models/
├── migrations/
├── config/
└── .sequelizerc