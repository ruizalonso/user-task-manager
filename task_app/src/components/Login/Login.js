/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import useNotification from '../../hooks/useNotify'

export default function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const [notification, showNotification] = useNotification()

  const auth = useAuth()

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    auth
      .signIn(email, password)
      .then((data) => {
        showNotification({
          variant: 'success',
          message: 'Bienvenido!',
        })
        return navigate('/tasks')
      })
      .catch((err) => {
        showNotification({
          variant: 'error',
          message: err.response.data.message || 'Erorr de autenticación',
        })
      })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight">
          Inicia sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                required={true}
                placeholder="mail@mail.com"
                className="block w-full input input-bordered"
                ref={emailRef}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                required={true}
                placeholder="********"
                className="block w-full input input-bordered"
                ref={passwordRef}
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm">
          ¿No estás registrado?{' '}
          <Link to="/register" className="font-semibold leading-6">
            Registrate
          </Link>
        </p>
      </div>
    </div>
  )
}
