import axios from 'axios'
import Cookie from 'js-cookie'

const API_TASK_URL = process.env.REACT_APP_API_TASK_URL
const config = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
}
const token = Cookie.get('token')
axios.defaults.headers.Authorization = `Bearer ${token}`
const addTask = async (body) => {
  const response = await axios.post(API_TASK_URL, body, config)
  return response.data
}
const getTaskById = async (id) => {
  const response = await axios.get(API_TASK_URL + '/' + id)
  return response.data
}
const deleteTask = async (id) => {
  const response = await axios.delete(API_TASK_URL + '/' + id)
  return response.data
}

const updateTask = async (id, body) => {
  const response = await axios.put(API_TASK_URL + '/' + id, body, config)
  return response.data
}

export { addTask, deleteTask, updateTask, getTaskById }
