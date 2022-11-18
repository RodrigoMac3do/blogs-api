const { PostCategory } = require('../models');

const create = async (categories) => {
  const result = await PostCategory.bulkCreate(categories);

  return result;
};

module.exports = {
  create,
};
