const Router = require('express').Router();
const { createUser } = require('../controllers/userControllers');
const userMiddleware = require('../middlewares/userMiddlewares');

Router.post('/',
 userMiddleware.displayNameVerify,
 userMiddleware.emailVerify,
 userMiddleware.passwordVerify,
 createUser);

module.exports = Router;
