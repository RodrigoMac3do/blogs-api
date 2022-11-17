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

module.exports = {
  findUser,
};
