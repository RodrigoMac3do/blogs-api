const service = require('../services');
const { postSchema } = require('../services/validations/schema');
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

module.exports = {
  findAll,
  findById,
  create,
};
