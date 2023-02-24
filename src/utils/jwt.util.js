require('dotenv/config');
const jwt = require('jsonwebtoken');
const httpException = require('./http.exception');

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (error) {
    throw httpException(401, 'Expired or invalid token');
  }
};

const decode = (token) => {
  const data = jwt.decode(token);

  return data;
};

module.exports = {
  createToken,
  validateToken,
  decode,
};
