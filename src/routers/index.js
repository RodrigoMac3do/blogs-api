const login = require('./login.route');
const user = require('./user.route');
const categories = require('./categories.route');
const blogPosts = require('./blogPosts.route');

module.exports = {
  login,
  user,
  categories,
  blogPosts,
};
