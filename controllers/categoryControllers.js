const { registerCategory } = require('../services/categoryServices');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await registerCategory({ name });
  
  return res.status(201).json(category);
};

module.exports = { createCategory };
