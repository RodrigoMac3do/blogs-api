const { Category } = require('../models');
const { PostCategory } = require('../models');
const httpException = require('../utils/http.exception');

const createCategories = async (categories) => {
  const result = await PostCategory.bulkCreate(categories);

  return result;
};

const create = async (body) => {
  const { name } = body;

  const findCategory = await Category.findOne({ where: { name } });

  if (findCategory !== null) {
    throw httpException(422, 'Categoria já existente');
  }

  const category = await Category.create({ name });

  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const findById = async (ids) => {
  const categories = await Promise.all(ids.map((id) => Category.findByPk(id)));

  const category = categories.some((elem) => elem === null);

  if (category === true) {
    throw httpException(400, 'one or more "categoryIds" not found');
  }

  return categories;
};

module.exports = {
  createCategories,
  create,
  findAll,
  findById,
};
