/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {
  updateTask,
  addTask,
  getTaskById,
} from '../../../services/task.service'

export default function Task() {
  const navigate = useNavigate()
  const location = useLocation()
  const { edit } = location.state
  const { id } = useParams()
  const [form, setForm] = useState({
    name: '',
    description: '',
  })
  useEffect(() => {
    if (edit) {
      getTaskById(id).then((task) => setForm(task))
    }
  }, [edit])

  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      updateTask(id, form).then(() => {
        return navigate('/tasks')
      })
    } else {
      addTask(form).then(() => {
        return navigate('/tasks')
      })
    }
  }
  return (
    <div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="mb-5">
          <h4 className="text-3xl font-semibold tracking-tight sm:text-2xl">
            {edit ? 'Editar la tarea ' + form.name : 'Agrega una nueva tarea'}
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="form-control my-2">
            <label htmlFor="name" className="label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              required={true}
              placeholder="Lavar el auto"
              className="input input-bordered w-full"
              onChange={handleChange}
              value={form.name}
              autoComplete="off"
            />
          </div>
          <div className="form-control my-2">
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              type="text"
              name="description"
              rows={4}
              required={true}
              placeholder="..."
              className="textarea textarea-bordered w-full"
              onChange={handleChange}
              value={form.description}
              autoComplete="off"
            />
          </div>
        </div>
        <div className="mt-10">
          <button className="btn btn-primary btn-block">
            {edit ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  )
}
