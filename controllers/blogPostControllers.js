const { PostsCategories } = require('../models');
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

module.exports = { createBlogPost };
