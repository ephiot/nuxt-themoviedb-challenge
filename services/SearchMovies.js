import Http from '@/services/Http'

const API_KEY = process.env.apiKEY
const API_URL = '/search/movie'

class SearchMovies {
  search (query, reqPage) {
    const page = reqPage || 1

    const options = {
      params: {
        api_key: API_KEY,
        page,
        lang: 'pt-BR',
        query
      }
    }

    return Http.get(API_URL, options)
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        return err
      })
  }
}

export default new SearchMovies()
