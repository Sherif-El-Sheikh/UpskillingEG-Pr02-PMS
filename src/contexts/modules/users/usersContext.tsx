/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useContext } from 'react'
import { usersReducer, initialState } from './usersReducer'

// creating the context
const UsersContext = createContext({})

// creating the provider
const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState)

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  )
}
export default UsersProvider

// custom hook to use the context
export const useUsersContext = () => {
  const context = useContext(UsersContext) as {
    state: typeof initialState
    dispatch: React.Dispatch<any>
  }
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider')
  }

  return context
}
