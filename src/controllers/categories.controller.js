const { categorySchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');
const service = require('../services');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(categorySchema, body);

  const category = await service.categories.create(body);

  return res.status(201).json(category);
};

module.exports = {
  create,
};
