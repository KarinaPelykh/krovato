import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://krovato-backend.onrender.com/api'
})
