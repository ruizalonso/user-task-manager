const { loginUser } = require('../services/auth')
const { httpErrors } = require('../../../utils/error.handle')

const userLogin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) httpErrors(res, 422)
  const response = await loginUser({ email, password }, res)
  res.send(response)
}

module.exports = { userLogin }
