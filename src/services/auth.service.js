const { User } = require('../models');
const httpException = require('../utils/http.exception');
const { createToken } = require('../utils/jwt.util');

const findUser = async (body) => {
  const { email } = body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw httpException(400, 'Invalid fields');

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = createToken(userWithoutPassword);

  return token;
};

module.exports = {
  findUser,
};
