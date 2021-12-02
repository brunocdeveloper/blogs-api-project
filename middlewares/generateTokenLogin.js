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
  } catch (e) {
    console.log(e);
  }
  return res.status(200).json({ message: 'Erro na função generateToken' });
};

module.exports = { generateToken };