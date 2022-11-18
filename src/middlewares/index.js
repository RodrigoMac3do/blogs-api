const httpError = require('./http.error.middleware');
const auth = require('./auth.middleware');

module.exports = {
  httpError,
  auth,
};