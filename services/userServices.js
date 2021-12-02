const { User } = require('../models');

const registerUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

module.exports = { registerUser };
