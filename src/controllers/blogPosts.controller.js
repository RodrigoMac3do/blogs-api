const service = require('../services');

const findAll = async (_req, res) => {
  const posts = await service.blogPosts.findAll();

  return res.status(200).json(posts);
};

const findById = async (req, res) => {
  const id = Number(req.params.id);

  const post = await service.blogPosts.findById(id);

  return res.status(200).json(post);
};

module.exports = {
  findAll,
  findById,
};
