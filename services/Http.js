import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain'
  }
}

const Http = axios.create({
  baseURL: process.env.baseURL,
  https: config
})

export default Http
