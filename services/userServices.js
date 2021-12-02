const { User } = require('../models');

const registerUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

const getAllUsers = async () => {
  const user = await User.findAll();
  return user;
};

const listUserById = async (id) => {
  try {
    const user = await User.findOne({ where: { id } });
    const { dataValues } = user;
    delete dataValues.password;
    return dataValues;
  } catch (err) {
    return null;
  }
};

module.exports = { registerUser, getAllUsers, listUserById };
