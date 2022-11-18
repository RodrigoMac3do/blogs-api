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

  const newUser = await User.create({ displayName, email, password, image });

  const { password: _, ...userWithoutPassword } = newUser.dataValues;

  const token = createToken(userWithoutPassword);

  return token;
};

module.exports = {
  create,
};
