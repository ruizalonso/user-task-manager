const Model = require('../models/user')
const { httpErrors } = require('../../../utils/error.handle')
const { encrypt } = require('../../../utils/bcrypt.handle')

const addUser = async (user, res) => {
  const { email, password, name } = user
  const checkIs = await Model.findOne({ email })
  if (checkIs) return httpErrors(res, 400, 'This email is already in use')
  const passHash = await encrypt(password)
  const registerNewUser = await Model.create({
    name,
    email,
    password: passHash,
  })
  return registerNewUser
}
const listUser = async () => {
  const users = await Model.find({})
  return users
}

module.exports = {
  add: addUser,
  list: listUser,
}
