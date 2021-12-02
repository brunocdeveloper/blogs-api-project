const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = async (req, res) => {
  try {
    const { user } = req;
    const token = jwt.sign(user.dataValues, SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
  return res.status(200).json({ message: 'Erro na função generateToken' });
};

module.exports = { generateToken };