const httpException = require('../utils/http.exception');
const jwt = require('../utils/jwt.util');

const auth = async (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw httpException(401, 'Token not found');

  jwt.validateToken(authorization);

  next();
};

module.exports = auth;
