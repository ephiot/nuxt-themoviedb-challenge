<template>
  <Row justify-content="flex-start">
    <movie-modal ref="modal" :movie="currentMovie" :poster="currentPoster" :backdrop="currentBackdrop" />
    <Sidebar flex-basis="20%">
      <TextLine>Filmes Populares</TextLine>
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
import MovieList from '@/components/elements/MovieList'
import Row from '@/components/elements/Row'
import Sidebar from '@/components/elements/Sidebar'
import TextLine from '@/components/elements/TextLine'

import PopularMovies from '@/services/PopularMovies'

export default {
  components: {
    Button,
    MovieList,
    Row,
    Sidebar,
    TextLine
  },
  layout: 'app',
  data: () => {
    return {
      list: [],
      page: 1,
      lastPage: 1,
      region: '',
      currentMovie: {},
      currentPoster: '',
      currentBackdrop: ''
    }
  },
  created () {
    this.paginate()
  },
  methods: {
    paginate () {
      PopularMovies.getList(this.page, this.region).then((response) => {
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
