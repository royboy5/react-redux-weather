// Include this file if you are developing the API as well

import axios from 'axios'

const API_SERVER = {
  LOCAL: {
    BASE_URL: 'http://localhost:9000',
    API_CLIENT_KEY: 'api-key'
  },
  STAGING: {
    BASE_URL: 'https://api.herokuapp.com/',
    API_CLIENT_KEY: 'api-key'
  }
}

const API_SERVER_SELECTED = process.env.NODE_ENV !== 'production'
    ? 'LOCAL' : 'STAGING'

console.info('Axios using baseUrl', API_SERVER[API_SERVER_SELECTED].BASE_URL, process.env.NODE_ENV)

const host = API_SERVER[API_SERVER_SELECTED].BASE_URL

export const createAxiosInstance = () => axios.create({
  baseURL: host,
  timeout: 1000,
  headers: {
    'api_client': API_SERVER[API_SERVER_SELECTED].API_CLIENT_KEY
  }
})

// export const authHeaders = () => {
//     return { headers: { 'Authorization': `Bearer ${store.state.user.token}` } }
// }
