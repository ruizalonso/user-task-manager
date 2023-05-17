const { add, list, update, removeTaks, getById } = require('../services/tasks')
const { httpErrors } = require('../../../utils/error.handle')

const addTask = async (req, res) => {
  const { body } = req
  body.user = req.user.id
  try {
    const response = await add(body)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}
const listTask = async (req, res) => {
  const { id } = req.user
  try {
    const response = await list(id)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const getTaksById = async (req, res) => {
  const { params } = req
  const { id } = params
  try {
    const response = await getById(id)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}
const updateTask = async (req, res) => {
  const { params, body } = req
  body.user = req.user.id
  const { id } = params
  try {
    const response = await update(id, body)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

const deleteTask = async (req, res) => {
  const { params } = req
  const { id } = params
  try {
    const response = await removeTaks(id)
    res.send(response)
  } catch (e) {
    httpErrors(res, 400)
  }
}

module.exports = {
  addTask,
  listTask,
  updateTask,
  deleteTask,
  getTaksById,
}
