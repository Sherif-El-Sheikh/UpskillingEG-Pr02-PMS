import axios from 'axios'

const baseURL = 'https://upskilling-egypt.com:3003/api/v1'
const staticURL = 'https://upskilling-egypt.com:3003'

// axios instance without token
const apiPublic = axios.create({
  baseURL,
})

// axios instance with token
const apiProtected = axios.create({
  baseURL,
})
// Add a request interceptor to add token to the request headers every time a request is made
apiProtected.interceptors.request.use((config) => {
  const token = `Bearer ${localStorage.getItem('token')}`
  config.headers.Authorization = token

  return config
})

// export the axios instances
export { apiPublic, apiProtected, baseURL, staticURL }
