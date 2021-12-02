const { User } = require('../models');

const loginVerify = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  
  req.user = user;

  next();
};

module.exports = { loginVerify };
