const login = require('./login.service');
const user = require('./user.service');
const categories = require('./categories.service');
const blogPosts = require('./blogPosts.service');

module.exports = {
  user,
  login,
  categories,
  blogPosts,
};
