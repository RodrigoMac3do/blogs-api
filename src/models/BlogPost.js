const BlogPost = (sequelize, DataType) => {
  const blogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataType.STRING,
        allowNull: false,
      },
      content: {
        type: DataType.STRING,
        allowNull: false,
      },
      userId: {
        type: DataType.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      published: {
        type: DataType.DATE,
        defaultValue: DataType.NOW,
      },
      updated: {
        type: DataType.DATE,
        defaultValue: DataType.NOW,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  blogPost.associate = ({ User }) => {
    blogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPost;
