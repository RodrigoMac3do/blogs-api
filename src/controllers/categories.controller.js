const { categorySchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');
const service = require('../services');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(categorySchema, body);

  const category = await service.categories.create(body);

  res.status(201).json(category);
};

const findAll = async (_req, res) => {
  const categories = await service.categories.findAll();

  res.status(200).json(categories);
};

module.exports = {
  create,
  findAll,
};
