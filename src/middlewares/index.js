const httpErrorMiddleware = require('./http.error.middleware');
const auth = require('./auth.middleware');

module.exports = {
  httpErrorMiddleware,
  auth,
};