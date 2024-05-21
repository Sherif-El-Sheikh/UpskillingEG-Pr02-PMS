/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUsersContext } from './usersContext'
import { apiProtected } from '../../../utils/api'
import { toast } from 'react-toastify'

const useUsersOperations = () => {
  // Acessing Dispatch from the context
  const { dispatch } = useUsersContext()

  // CRUD operations
  // 1 Get all users
  const getAllUsers = async (
    pageNumber?: number,
    pageSize?: number,
    userName?: string,
    email?: string,
    country?: string,
    groups?: string
  ) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const response = await apiProtected.get('/Users', {
        params: { pageNumber, pageSize, userName, email, country, groups },
      })
      dispatch({ type: 'GET_USERS_SUCCESS', payload: response.data })
    } catch (error: any) {
      dispatch({ type: 'SET_LOADING', payload: false })
      toast.error(`Error fetching users - ${error.response.data.message}`)
    }
  }

  // 2. Toggle user active status
  const toggleUserActiveStatus = async (userId: number) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true })
      const response = await apiProtected.put(`/Users/${userId}`)
      const message = response.data.isActivated ? 'activated' : 'deactivated'
      const userName = response.data.userName
      toast.success(`User : ${userName} is ${message} successfully`)
      dispatch({ type: 'SET_LOADING', payload: false })
    } catch (error: any) {
      dispatch({ type: 'SET_LOADING', payload: false })
      toast.error(
        `Error toggling user active status - ${error.response.data.message}`
      )
    }
  }

  // Setting the filter and pagination
  const setUserNameFilter = (userNameFilter: string) => {
    dispatch({ type: 'SET_USERNAME_FILTER', payload: userNameFilter })
  }

  const setEmailFilter = (emailFilter: string) => {
    dispatch({ type: 'SET_EMAIL_FILTER', payload: emailFilter })
  }

  const setCountryFilter = (countryFilter: string) => {
    dispatch({ type: 'SET_COUNTRY_FILTER', payload: countryFilter })
  }

  const setGroupsFilter = (groupsFilter: string) => {
    dispatch({ type: 'SET_GROUPS_FILTER', payload: groupsFilter })
  }

  const setPagination = (pageNumber: string, pageSize: string) => {
    dispatch({ type: 'SET_PAGINATION', payload: { pageNumber, pageSize } })
  }

  return {
    getAllUsers,
    toggleUserActiveStatus,
    setUserNameFilter,
    setEmailFilter,
    setCountryFilter,
    setGroupsFilter,
    setPagination,
  }
}

export default useUsersOperations