const auth = require('./auth.controller');
const user = require('./user.controller');
const categories = require('./categories.controller');
const blogPosts = require('./blogPosts.controller');

module.exports = {
  auth,
  user,
  categories,
  blogPosts,
};
