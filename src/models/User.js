const User = (sequelize, DataType) => {
  const user = sequelize.define(
    'User',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      displayName: {
        allowNull: false,
        field: 'display_name',
        type: DataType.STRING,
      },
      email: {
        allowNull: false,
        type: DataType.STRING,
      },
      password: {
        allowNull: false,
        type: DataType.STRING,
      },
      image: {
        type: DataType.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return user;
};

module.exports = User;
