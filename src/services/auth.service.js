const { User } = require('../models');
const httpException = require('../utils/http.exception');
const jwtUtil = require('../utils/jwt.util');

const findUser = async (body) => {
  const { email } = body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw httpException(400, 'Invalid fields');

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const validateToken = (token) => {
  if (!token) {
      const e = new Error('Token not found');
      e.status = 401;
      throw e;
  }

  const user = jwtUtil.validateToken(token);

  return user;
};

module.exports = {
  findUser,
  validateToken,
};
