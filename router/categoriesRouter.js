const Router = require('express').Router();
const { createCategory, getAllCategories } = require('../controllers/categoryControllers');
const { categoryVefiry } = require('../middlewares/categoryMiddleware');
const { validateJWT } = require('../middlewares/jwtValidation');

Router.post('/',
  validateJWT,
  categoryVefiry,
  createCategory);

Router.get('/',
  validateJWT,
  getAllCategories);

module.exports = Router;