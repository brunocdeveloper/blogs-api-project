const { registerCategory, listCategory } = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await registerCategory({ name });

  return res.status(201).json(category);
};

const getAllCategories = async (req, res) => {
  const allCategories = await listCategory();
  const categories = allCategories.map(({ dataValues }) => dataValues);
  return res.status(200).json(categories);
};

module.exports = { createCategory, getAllCategories };
