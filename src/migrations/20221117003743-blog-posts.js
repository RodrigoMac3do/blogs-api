'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'blog_posts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        content: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        userId: {
          field: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'users',
            key: 'id',
          },
          type: Sequelize.INTEGER,
        },
        published: {
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
        updated: {
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
        timestamps: false,
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  },
};
