const { Categories } = require('../models');

const registerCategory = async ({ name }) => {
  const category = await Categories.create({ name });
  const { dataValues } = category;
  return dataValues;
};

module.exports = { registerCategory };
