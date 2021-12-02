const Router = require('express').Router();
const { createUser, getUsers } = require('../controllers/userControllers');
const { validateJWT } = require('../middlewares/jwtValidation');
const userMiddleware = require('../middlewares/userMiddlewares');

Router.post('/',
 userMiddleware.displayNameVerify,
 userMiddleware.emailVerify,
 userMiddleware.passwordVerify,
 createUser);

Router.get('/', validateJWT, getUsers);

module.exports = Router;
