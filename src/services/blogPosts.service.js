const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const httpException = require('../utils/http.exception');
const postCategories = require('./postCategories.service');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    where: { id },
  });

  if (!post) throw httpException(404, 'Post does not exist');

  return post;
};

const findByTerm = async (q) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  
  if (!q) {
    return findAll();
  }

  return posts;
};

const create = async ({ categoryIds, ...body }) => {
  const { dataValues } = await BlogPost.create(body);

  const { id, title, content, userId, updated, published } = dataValues;

  const categories = await Promise.all(
    categoryIds.map((categoryId) => ({
      categoryId,
      postId: id,
    })),
  );

  await postCategories.create(categories);

  return {
    id,
    title,
    content,
    userId,
    updated,
    published,
  };
};

const update = async (id, body) => {
  const { userId } = await findById(id);

  if (body.userId !== userId) {
    throw httpException(401, 'Unauthorized user');
  }

  await BlogPost.update({ ...body }, { where: { id } });

  const result = await findById(id);

  return result;
};

const remove = async (id, token) => {
  const { userId } = await findById(id);

  if (token.userId !== userId) {
    throw httpException(401, 'Unauthorized user');
  }

  await BlogPost.destroy({
    where: { id },
  });
};

module.exports = {
  findAll,
  findById,
  findByTerm,
  create,
  update,
  remove,
};
