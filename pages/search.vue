<template>
  <Row justify-content="flex-start">
    <movie-modal ref="modal" :movie="currentMovie" :poster="currentPoster" :backdrop="currentBackdrop" />
    <Sidebar flex-basis="20%">
      <TextLine>Busca de Filmes</TextLine>
      <MovieSearchBlock>
        <label for="search_field">Por nome:</label>
        <Input id="search_field" v-model="query" type="text" />
        <Button @click="search">
          Buscar
        </Button>
      </MovieSearchBlock>
    </Sidebar>
    <Sidebar flex-basis="80%">
      <MovieList>
        <MovieListItem v-for="movie in list" :key="movie.id" :movie="movie" :poster="getPoster(movie)" @show-details="showDetails" />
      </MovieList>
      <Row>
        <Button @click="nextPage">
          Carregar mais
        </Button>
      </Row>
    </Sidebar>
  </Row>
</template>

<script>
import Button from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import MovieList from '@/components/elements/MovieList'
import MovieSearchBlock from '@/components/elements/MovieSearchBlock'
import Row from '@/components/elements/Row'
import Sidebar from '@/components/elements/Sidebar'
import TextLine from '@/components/elements/TextLine'

import PopularMovies from '@/services/PopularMovies'
import SearchMovies from '@/services/SearchMovies'

export default {
  components: {
    Button,
    Input,
    MovieList,
    MovieSearchBlock,
    Row,
    Sidebar,
    TextLine
  },
  layout: 'app',
  middleware: 'authenticated',
  data: () => {
    return {
      query: '',
      list: [],
      page: 1,
      lastPage: 1,
      region: '',
      currentMovie: {},
      currentPoster: '',
      currentBackdrop: ''
    }
  },
  methods: {
    search () {
      this.page = 1
      this.list = []
      this.paginate()
    },
    paginate () {
      SearchMovies.search(this.query, this.page).then((response) => {
        this.list = this.list.concat(response.results)
        this.lastPage = response.total_pages
      })
    },
    getPoster (movie) {
      return PopularMovies.getImagePath(movie.poster_path)
    },
    getBackdrop (movie) {
      return PopularMovies.getImagePath(movie.backdrop_path)
    },
    nextPage () {
      if (this.page >= this.lastPage) {
        return
      }
      this.page++
      this.paginate()
    },
    showDetails (movie) {
      this.currentMovie = movie
      this.currentPoster = this.getPoster(movie)
      this.currentBackdrop = this.getBackdrop(movie)
      this.$refs.modal.show()
    }
  }
}
</script>
