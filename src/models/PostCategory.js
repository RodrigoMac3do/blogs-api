const PostCategory = (sequelize, DataType) => {
  const postCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true
      },
      categoryId: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
  
    postCategory.associate = ({ BlogPost, Category }) => {
      BlogPost.belongsToMany(Category, {
        as: 'categories',
        through: postCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
  
      Category.belongsToMany(BlogPost, {
        as: 'posts',
        through: postCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
  

  return postCategory;
};

module.exports = PostCategory;
