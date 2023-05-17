const { add, list } = require('../services/user')
const { httpErrors } = require('../../../utils/error.handle')

const addUser = async (req, res) => {
  try {
    const response = await add(req.body, res)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const listUser = async (_req, res) => {
  try {
    const response = await list()
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

module.exports = {
  addUser,
  listUser,
}
