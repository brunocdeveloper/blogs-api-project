const Router = require('express').Router();
const { createBlogPost, getAllPosts } = require('../controllers/blogPostControllers');
const blogPostMiddleware = require('../middlewares/blogPostMidlewares');
const { validateJWT } = require('../middlewares/jwtValidation');

Router.post('/',
  validateJWT,
  blogPostMiddleware.titleVefiry,
  blogPostMiddleware.contentVerify,
  blogPostMiddleware.categoryIdsVefiry,
  createBlogPost);

Router.get('/', validateJWT, getAllPosts);

module.exports = Router;