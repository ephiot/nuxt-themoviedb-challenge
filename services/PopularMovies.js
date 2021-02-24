import Http from '@/services/Http'

const API_KEY = process.env.apiKEY
const API_URL = '/movie/popular'

class PopularMovies {
  getList (reqPage, reqRegion) {
    const page = reqPage || 1
    const region = reqRegion || ''

    const options = {
      params: {
        api_key: API_KEY,
        page,
        lang: 'pt-BR',
        region
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

  getImagePath (path) {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${path}`
  }
}

export default new PopularMovies()
