const service = require('../services');
const { userSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');
const { decode } = require('../utils/jwt.util');

const create = async (req, res) => {
  const { body } = req;

  await validateSchema(userSchema, body);

  const token = await service.user.create(body);

  res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const users = await service.user.findAll();

  res.status(200).json(users);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);

  const user = await service.user.findById(id);

  res.status(200).json(user);
};

const remove = async (req, res) => {
  const { authorization } = req.headers;

  const token = await decode(authorization);

  await service.user.remove(token);

  res.sendStatus(204);
};

module.exports = {
  create,
  findAll,
  findById,
  remove,
};
