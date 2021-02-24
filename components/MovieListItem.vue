<template>
  <li class="item" @click="showDetails">
    <img :src="poster" :title="movie.title">
    <p>
      <span class="title">Título:</span><br>
      {{ movie.title }}
    </p>
    <p>
      <span class="title">Nota:</span><br>
      {{ movie.vote_average * 10 }}/100
    </p>
    <p>
      <span class="title">Lançamento:</span><br>
      {{ movie.release_date }}
    </p>
  </li>
</template>

<script>
// import MovieListItemCol from '@/components/elements/MovieListItemCol'

export default {
  // components: {
  //   MovieListItemCol
  // },
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    poster: {
      type: String,
      default: ''
    }
  },
  methods: {
    showDetails () {
      this.$emit('show-details', this.movie, this.poster)
    }
  }
}
</script>
