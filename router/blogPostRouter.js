const Router = require('express').Router();
const { createBlogPost } = require('../controllers/blogPostControllers');
const blogPostMiddleware = require('../middlewares/blogPostMidlewares');
const { validateJWT } = require('../middlewares/jwtValidation');

Router.post('/',
  validateJWT,
  blogPostMiddleware.titleVefiry,
  blogPostMiddleware.contentVerify,
  blogPostMiddleware.categoryIdsVefiry,
  createBlogPost);

module.exports = Router;