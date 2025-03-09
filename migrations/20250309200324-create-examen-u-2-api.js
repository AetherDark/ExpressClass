'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ExamenU2APIs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitud: {
        type: Sequelize.FLOAT
      },
      longitud: {
        type: Sequelize.FLOAT
      },
      altitud: {
        type: Sequelize.FLOAT
      },
      nombre: {
        type: Sequelize.TEXT
      },
      direccion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ExamenU2APIs');
  }
};