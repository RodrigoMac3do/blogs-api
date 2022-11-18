const service = require('../services');
const { userSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(userSchema, body);

  const token = await service.user.create(body);

  return res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const users = await service.user.findAll();

  return res.status(200).json(users);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);

  const user = await service.user.findById(id);

  return res.status(200).json(user);
};

module.exports = {
  create,
  findAll,
  findById,
};
