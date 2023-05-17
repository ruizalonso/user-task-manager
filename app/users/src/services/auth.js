const { verified } = require('../../../utils/bcrypt.handle')
const { httpErrors } = require('../../../utils/error.handle')
const { generateToken } = require('../utils/jwt.handle')
const Model = require('../models/user')

const loginUser = async ({ email, password }, res) => {
  const checkIs = await Model.findOne({ email })
  if (!checkIs) return httpErrors(res, 404, 'User not found')

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash)

  if (!isCorrect) return httpErrors(res, 404, 'Incorrect password')

  const token = generateToken(checkIs._id)

  const { name, _id } = checkIs
  const data = {
    token,
    _id,
    name,
  }
  return data
}

module.exports = { loginUser }
