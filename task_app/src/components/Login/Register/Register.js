/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { addUser } from '../../../services/user.service'
import { useNavigate } from 'react-router-dom'
import useNotification from '../../../hooks/useNotify'

export default function Register() {
  const form = useRef(null)
  const navigate = useNavigate()
  const [notification, showNotification] = useNotification()

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get('email'),
      name: formData.get('name'),
      password: formData.get('password'),
    }
    console.log(data)
    addUser(data)
      .then(() => {
        showNotification({
          variant: 'success',
          message: 'Ya puedes iniciar sesión!',
        })
        return navigate('/')
      })
      .catch((err) => {
        showNotification({
          variant: 'error',
          message: err.response.data.message || 'Erorr de registro',
        })
      })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight">
          Registrate
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre</label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                autoComplete="off"
                required={true}
                placeholder="Your name"
                className="block w-full input input-bordered"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                autoComplete="off"
                required={true}
                placeholder="mail@mail.com"
                className="block w-full input input-bordered"
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
                autoComplete="off"
                required={true}
                placeholder="********"
                className="block w-full input input-bordered"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-block">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
