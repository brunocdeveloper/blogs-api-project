const { PostsCategories, BlogPosts, User, Categories } = require('../models');
const { registerBlogposts } = require('../services/blogPosts');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { dataValues: { id } } = await registerBlogposts({ title, content, categoryIds });
  const { user } = req;
  const userId = user.id;

  await categoryIds.forEach((categoryId) => PostsCategories.create({ postId: id, categoryId }));

  return res.status(201).json({
    id,
    userId,
    title,
    content,
  });
};

const getAllPosts = async (req, res) => {
  const allBlogs = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Categories, as: 'categories' },
    ],
  });
  
  if (!allBlogs) return res.status(401).json({ message: 'Não encontramos as postagens' });

  return res.status(200).json(allBlogs);
};

module.exports = { createBlogPost, getAllPosts };
