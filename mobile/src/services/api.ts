import axios from 'axios'

export const globalUrl = 'http://192.168.0.117:4444'

//run ipconfig on terminal and use ipv4

export const API = axios.create({
  baseURL: globalUrl
})