const service = require('../services');
const { postSchema, postPutSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');
const { decode } = require('../utils/jwt.util');

const findAll = async (_req, res) => {
  const posts = await service.blogPosts.findAll();

  return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);

  const post = await service.blogPosts.findById(id);

  return res.status(200).json(post);
};

const findByTerm = async (req, res) => {
  const { q } = req.query;

  const posts = await service.blogPosts.findByTerm(q);

  res.status(200).json(posts);
};

const create = async (req, res) => {
  const { body } = req;
  const { categoryIds } = body;
  const { authorization } = req.headers;

  const { id } = await decode(authorization);

  await validateSchema(postSchema, body);

  await service.categories.findById(categoryIds);

  const newPost = await service.blogPosts.create({ userId: id, ...body });

  return res.status(201).json(newPost);
};

const update = async (req, res) => {
  const { body } = req;
  const id = Number(req.params.id);
  const { authorization } = req.headers;

  const token = decode(authorization);

  await validateSchema(postPutSchema, body);

  const updatedPost = await service.blogPosts.update(id, {
    userId: token.id,
    ...body,
  });

  res.status(200).json(updatedPost);
};

const remove = async (req, res) => {
  const id = Number(req.params.id);
  const { authorization } = req.headers;

  const token = await decode(authorization);

  await service.blogPosts.remove(id, { userId: token.id });

  return res.sendStatus(204);
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  create,
  update,
  remove,
};
