'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'posts_categories',
      {
        postId: {
          allowNull: false,
          field: 'post_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'blog_posts',
            key: 'id',
          },
          type: Sequelize.INTEGER,
        },
        categoryId: {
          allowNull: false,
          field: 'category_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
          type: Sequelize.INTEGER,
        },
      },
      {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  },
};
