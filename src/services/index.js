const user = require('./user.service');
const auth = require('./auth.service');
const categories = require('./categories.service');
const blogPosts = require('./blogPosts.service');

module.exports = {
  user,
  auth,
  categories,
  blogPosts,
};
