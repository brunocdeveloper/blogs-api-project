const { User } = require('../models');

const displayNameVerify = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

// a função validateEmail é um regex consultado no stackoverflow
function validateEmail(email) {
  const validation = /\S+@\S+\.\S+/;
  return validation.test(email);
}

const emailVerify = async (req, res, next) => {
  const { email } = req.body;
  const isValid = validateEmail(email);
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
  } catch (err) {
    console.log(err);
  }

  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (!isValid) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const passwordVerify = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (password === '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  
  if (password.length !== 6 || password === '') {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = { displayNameVerify, emailVerify, passwordVerify };