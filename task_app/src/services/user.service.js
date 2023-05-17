import axios from 'axios'

const API_USER_URL = process.env.REACT_APP_API_USER_URL
const config = {
  headers: {
    accept: '*/*',
    'Content-Type': 'application/json',
  },
}

const addUser = async (body) => {
  const response = await axios.post(API_USER_URL + '/register', body, config)
  return response.data
}
// const getTaskById = async (id) => {
//   const response = await axios.get(API_TASK_URL + '/' + id)
//   return response.data
// }

export { addUser }
