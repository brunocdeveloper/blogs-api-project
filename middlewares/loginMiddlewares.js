/* // a função validateEmail é um regex consultado no stackoverflow
function validateEmail(email) {
  const validation = /\S+@\S+\.\S+/;
  return validation.test(email);
}
 */
const emailVerify = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) return res.status(400).json({ message: '"email" is required' });
  next();
};

const passwordVerify = (req, res, next) => {
  const { password } = req.body;
  
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }

  if (!password) return res.status(400).json({ message: '"password" is required' });

  next();
};

module.exports = { emailVerify, passwordVerify };

 // const user = await User.findOne({ where: { email } });
  // const token = jwt.sign(user.dataValues, SECRET, jwtConfig);