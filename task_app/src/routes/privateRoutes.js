import { Navigate } from 'react-router-dom'
import ProviderAuth from '../hooks/useAuth'
import Cookie from 'js-cookie'

export default function PrivateRoute({ children }) {
  const { user } = ProviderAuth()
  if (!user || !Cookie.get('token')) {
    return <Navigate to={'/'} replace></Navigate>
  } else {
    return children
  }
}
