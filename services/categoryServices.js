const { Categories } = require('../models');

const registerCategory = async ({ name }) => {
  const category = await Categories.create({ name });
  const { dataValues } = category;
  return dataValues;
};

const listCategory = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = { registerCategory, listCategory };
