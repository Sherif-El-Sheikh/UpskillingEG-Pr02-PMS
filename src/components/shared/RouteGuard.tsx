import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/global/AuthContext'

const RouteGuard = ({ children }: { children: React.ReactNode }) => {
  const { loggedIn } = useAuthContext()
  return loggedIn ? children : <Navigate to={'/login'} replace />
}

export default RouteGuard
