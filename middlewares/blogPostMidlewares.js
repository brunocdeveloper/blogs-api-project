const { Categories } = require('../models');

const titleVefiry = (req, res, next) => {
  const { title } = req.body;

  if (!title) return res.status(400).json({ message: '"title" is required' });

  next();
};

const contentVerify = (req, res, next) => {
  const { content } = req.body;

  if (!content) return res.status(400).json({ message: '"content" is required' });

  next();
};

const categoryIdsVefiry = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds || categoryIds === '') {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  const allCategories = await Categories.findAll();
  const categories = allCategories.map(({ dataValues: { id } }) => id);
  const verifyCategories = categoryIds.every((cate) => categories.includes(cate));
  if (!verifyCategories) return res.status(400).json({ message: '"categoryIds" not found' });

  next();
};

module.exports = { titleVefiry, contentVerify, categoryIdsVefiry };
