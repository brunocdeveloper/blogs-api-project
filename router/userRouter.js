const Router = require('express').Router();
const { createUser, getUsers, getUserById } = require('../controllers/userControllers');
const { validateJWT } = require('../middlewares/jwtValidation');
const userMiddleware = require('../middlewares/userMiddlewares');

Router.post('/',
 userMiddleware.displayNameVerify,
 userMiddleware.emailVerify,
 userMiddleware.passwordVerify,
 createUser);

Router.get('/', validateJWT, getUsers);

Router.get('/:id', validateJWT, getUserById);

module.exports = Router;
