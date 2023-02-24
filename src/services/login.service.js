const { User } = require('../models');
const httpException = require('../utils/http.exception');
const jwt = require('../utils/jwt.util');

const signIn = async (body) => {
  const { email } = body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw httpException(400, 'Invalid fields');

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwt.createToken(userWithoutPassword);

  return token;
};

const validateToken = (token) => {
  if (!token) throw httpException(401, 'Token not found');

  const user = jwt.validateToken(token);

  return user;
};

module.exports = {
  signIn,
  validateToken,
};
