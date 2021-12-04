const { BlogPosts } = require('../models');

const registerBlogposts = async ({ title, content, categoryIds }) => {
  const blogs = await BlogPosts.create({ title, content, categoryIds });
  return blogs;
};

/* const getAllposts = async () => {
  const allblogs = 
} */

module.exports = { registerBlogposts };
