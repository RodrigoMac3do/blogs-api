const { User } = require('../models');
const httpException = require('../utils/http.exception');
const { createToken } = require('../utils/jwt.util');

const create = async (body) => {
  const { displayName, email, password, image } = body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) throw httpException(409, 'User already registered');

  const { dataValues } = await User.create({
    displayName,
    email,
    password,
    image,
  });

  const { password: _, ...userWithoutPassword } = dataValues;

  return createToken(userWithoutPassword);
};

const findAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const findById = async (id) => {
  const [user] = await User.findAll({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) throw httpException(404, 'User does not exist');

  return user;
};

const remove = async (token) => {
  const { id } = await findById(token.id);

  await User.destroy({
    where: { id },
  });
};

module.exports = {
  create,
  findAll,
  findById,
  remove,
};
