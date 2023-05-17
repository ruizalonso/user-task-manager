import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import { ArrowUpLeftIcon } from '@heroicons/react/24/outline'
import Cookie from 'js-cookie'

export default function Header() {
  const { user, logout } = useAuth()
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-ghost normal-case text-xl">Tareas</button>
      </div>
      <div className="flex-none">
        {user && Cookie.get('token') && (
          <button className="btn btn-square btn-ghost" onClick={() => logout()}>
            <ArrowUpLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
