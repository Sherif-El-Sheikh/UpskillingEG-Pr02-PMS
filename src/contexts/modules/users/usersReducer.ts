// Types
import { Employee, Manager, Action } from '../../../types/interfaces'


interface State {
  users: Employee[] | Manager[]
  currentUser: Employee | Manager | object
  loading: boolean
  pageNumber: number
  pageSize: number
  userNameFilter: string
  emailFilter: string
  countryFilter: string
  groupsFilter: string
  totalNumberOfRecords: number
  totalNumberOfPages: number
}

// initial state
export const initialState: State = {
  users: [],
  currentUser: {},
  loading: false,
  pageNumber: 1,
  pageSize: 10,
  userNameFilter: '',
  emailFilter: '',
  countryFilter: '',
  groupsFilter: '',
  totalNumberOfRecords: 0,
  totalNumberOfPages: 0,
}

// Reducer function
export function usersReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }

    // CRUD operations
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload.data,
        totalNumberOfRecords: action.payload.totalNumberOfRecords,
        totalNumberOfPages: action.payload.totalNumberOfPages,
        loading: false,
      }

    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
      }

    // Filter and Pagination operations
    case 'SET_USERNAME_FILTER':
      return { ...state, userNameFilter: action.payload }

    case 'SET_EMAIL_FILTER':
      return { ...state, emailFilter: action.payload }

    case 'SET_COUNTRY_FILTER':
      return { ...state, countryFilter: action.payload }

    case 'SET_GROUPS_FILTER':
      return { ...state, groupsFilter: action.payload }

    case 'SET_PAGINATION':
      return {
        ...state,
        pageNumber: action.payload.pageNumber,
        pageSize: action.payload.pageSize,
      }

    default:
      return state
  }
}