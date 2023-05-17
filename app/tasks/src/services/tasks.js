const Model = require('../models/task')

const addTask = async (task) => {
  const taskAdded = await Model.create(task)
  return taskAdded
}
const updateTask = async (_id, task) => {
  const taskUpdated = await Model.findOneAndUpdate({ _id }, task, {
    new: true,
  })
  return taskUpdated
}
const getById = async (_id) => {
  const task = await Model.findOne({ _id })
  return task
}
const listTask = async (id) => {
  const tasks = await Model.find({ user: id })
  return tasks
}
const deleteTask = async (_id) => {
  const taskDeleted = await Model.findOneAndRemove({ _id })
  return taskDeleted
}

module.exports = {
  add: addTask,
  list: listTask,
  update: updateTask,
  removeTaks: deleteTask,
  getById
}
