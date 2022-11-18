const { Category } = require('../models');

const create = async (body) => {
  const { name } = body;

  const category = await Category.create({ name });

  return category;
};

module.exports = {
  create,
};
