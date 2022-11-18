const service = require('../services');

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;

  const user = service.auth.validateToken(authorization);

  req.user = user;

  next();
};

module.exports = { validateToken };
