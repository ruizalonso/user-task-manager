/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'

const useFetch = (endpoint) => {
  const [data, setData] = useState([])
  const token = Cookie.get('token')
  async function fetchData() {
    axios.defaults.headers.Authorization = `Bearer ${token}`
    const response = await axios.get(endpoint)
    setData(response.data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return data
}

export default useFetch
