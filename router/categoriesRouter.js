const Router = require('express').Router();
const { createCategory } = require('../controllers/categoryControllers');
const { categoryVefiry } = require('../middlewares/categoryMiddleware');
const { validateJWT } = require('../middlewares/jwtValidation');

Router.post('/', validateJWT, categoryVefiry, createCategory);

module.exports = Router;