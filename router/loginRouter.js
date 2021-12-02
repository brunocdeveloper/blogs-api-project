const Router = require('express').Router();
const { loginVerify } = require('../controllers/loginControllers');
const { generateToken } = require('../middlewares/generateTokenLogin');
const loginMiddlewares = require('../middlewares/loginMiddlewares');

Router.post('/',
  loginMiddlewares.emailVerify,
  loginMiddlewares.passwordVerify,
  loginVerify,
  generateToken);

module.exports = Router;