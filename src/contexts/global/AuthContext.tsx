/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

export type AuthContextType = {
  userData: Record<string, any>
  loggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  logOut: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

//

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const getTokenData = () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        return { decodedToken, isLoggedIn: true }
      } catch (error) {
        console.error('Token decoding failed', error)
      }
    }
    return { decodedToken: {}, isLoggedIn: false }
  }

  const [userData, setUserData] = useState(getTokenData().decodedToken)
  const [loggedIn, setIsLoggedIn] = useState(getTokenData().isLoggedIn)

  const logOut = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setUserData({})
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        loggedIn,
        logOut,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthProvider
