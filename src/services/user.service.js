const { User } = require('../models');
const httpException = require('../utils/http.exception');
const { createToken } = require('../utils/jwt.util');

const findUser = async (body) => {
  const { email, password } = body;

  const user = await User.findOne({
    where: {
      password,
      email,
    },
  });

  if (!user) throw httpException(400, 'Invalid fields');

  const token = createToken(user);

  return token;
};

const create = async (body) => {
  const { displayName, email, password, image } = body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user) throw httpException(409, 'User already registered');

  const newUser = await User.create({ displayName, email, password, image });

  const token = createToken(newUser);

  return token;
};

module.exports = {
  findUser,
  create,
};
