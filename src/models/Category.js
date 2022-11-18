const Category = (sequelize, DataType) => {
  const category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataType.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return category;
};

module.exports = Category;
