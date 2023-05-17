import React from 'react'
import {
  PencilSquareIcon,
  TrashIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'
import useFetch from '../../../hooks/useFetch'
import { Link } from 'react-router-dom'
import { deleteTask } from '../../../services/task.service'

export default function TaskList() {
  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      window.location.reload()
    })
  }
  const tasks = useFetch('http://localhost:3002/api/tasks')
  return (
    <>
      <div className="flex items-center justify-center my-5">
        <Link
          className="btn btn-primary btn-circle"
          to={`/task/new`}
          state={{ edit: false }}
        >
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
      {tasks.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Tarea</th>
                <th>Descripción</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(({ _id: id, name, description }, i) => (
                <tr className="hover" key={id}>
                  <th>{i + 1}</th>
                  <td>{name}</td>
                  <td>{description}</td>
                  <td>
                    <Link
                      className="btn btn-sm btn-outline m-1"
                      to={`/task/${id}`}
                      state={{ edit: true }}
                    >
                      <PencilSquareIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </Link>
                    <button
                      className="btn btn-sm btn-accent btn-outline m-1"
                      onClick={() => handleDelete(id)}
                    >
                      <TrashIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {tasks.length <= 0 && (
        <div className="text-center">
          <h4>Aun no has agregado tareas</h4>
        </div>
      )}
    </>
  )
}
