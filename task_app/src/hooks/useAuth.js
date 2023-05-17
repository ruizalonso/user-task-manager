import { useState, useContext, createContext } from 'react'
import Cookie from 'js-cookie'
import axios from 'axios'

const API_USER_URL = process.env.REACT_APP_API_USER_URL

const AuthContext = createContext()

export function ProviderAuth({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState({})

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      API_USER_URL + '/login',
      { email, password },
      options
    )
    const { token } = data
    if (token) {
      Cookie.set('token', token, { expires: 8 })
      axios.defaults.headers.Authorization = `Bearer ${token}`
      setUser(data)
    }
  }

  const logout = () => {
    console.log('llega')
    Cookie.remove('token')
    setUser(null)
    delete axios.defaults.headers.Authorization
    return window.location.href = '/'
  }

  return {
    user,
    signIn,
    logout,
  }
}

export default useAuth
