const express = require('express')
const {
  addTask,
  listTask,
  updateTask,
  deleteTask,
  getTaksById
} = require('../controllers/task')
const router = express.Router()

router.get('/', listTask)
router.get('/:id', getTaksById)
router.post('/', addTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
