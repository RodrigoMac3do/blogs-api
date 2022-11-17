'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        displayName: {
          allowNull: false,
          field: 'display_name',
          type: Sequelize.STRING,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
      },
      {
        timestamps: false,
        underscored: true,
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
