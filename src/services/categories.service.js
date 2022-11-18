const { Category } = require('../models');

const create = async (body) => {
  const { name } = body;

  const category = await Category.create({ name });

  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  create,
  findAll,
};
