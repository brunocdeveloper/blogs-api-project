require('dotenv').config();
const jwt = require('jsonwebtoken');
const { registerUser } = require('../services/userServices');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await registerUser({ displayName, email, password, image });
  const token = jwt.sign(user.dataValues, SECRET, jwtConfig);
  return res.status(201).json({ token });
};

module.exports = { createUser };