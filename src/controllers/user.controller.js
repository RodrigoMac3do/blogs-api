const service = require('../services');
const { userSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(userSchema, body);

  const token = await service.user.create(body);

  return res.status(201).json({ token });
};

module.exports = {
  create,
};
