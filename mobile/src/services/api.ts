import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://172.9.9.5:4444'
})