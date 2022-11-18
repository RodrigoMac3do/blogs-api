const auth = require('./auth.route');
const user = require('./user.route');
const categories = require('./categories.route');
const blogPosts = require('./blogPosts.route');

module.exports = {
  auth,
  user,
  categories,
  blogPosts,
};
