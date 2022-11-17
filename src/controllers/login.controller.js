const service = require('../services');
const { loginSchema } = require('../services/validations/schema');
const validateSchema = require('../services/validations/validationSchema');

const verify = async (req, res) => {
  const { body } = req;

  await validateSchema(loginSchema, body);

  const token = await service.user.findUser(body);

  return res.status(200).json({ token });
};

module.exports = {
  verify,
};
