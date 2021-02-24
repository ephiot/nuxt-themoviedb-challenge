import Http from '@/services/Http'

const API_KEY = process.env.apiKEY
const API_TOKEN_URL = '/authentication/token/new?api_key=' + API_KEY
const API_SESSION_URL = '/authentication/session/new?api_key=' + API_KEY

class Auth {
  getRequestToken () {
    return Http.get(API_TOKEN_URL).then((response) => {
      if (response.data.request_token) {
        return response.data.request_token
      }
      return response.data
    })
  }

  getSessionId (requestToken) {
    return Http.post(API_SESSION_URL, { request_token: requestToken }).then((response) => {
      if (response.data.session_id) {
        return response.data.session_id
      }
      return response.data
    })
  }
}

export default new Auth()
