import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

const Http = axios.create({
  baseURL: process.env.baseURL,
  https: config
})

export default Http
