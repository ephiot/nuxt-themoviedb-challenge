<template>
  <li class="item">
    <MovieListItemCol>
      <img :src="poster" :title="movie.title">
    </MovieListItemCol>
    <MovieListItemCol flex-basis="60%">
      <p>
        <span class="title">Título:</span> {{ movie.title }}
      </p>
      <p>
        <span class="title">Título Original:</span> {{ movie.original_title }}
      </p>
      <p>
        <span class="title">Idioma:</span> {{ movie.original_language }}
      </p>
      <p>
        <span class="title">Nota:</span> {{ movie.vote_average * 100 }}/100
      </p>
      <p>
        <span class="title">Sinópse:</span>
        <br>
        <span class="overview">{{ movie.overview }}</span>
      </p>
    </MovieListItemCol>
    <!-- <MovieListItemCol flex-basis="40%">
      <p>Sinópse:<br><span class='overview'>{{ movie.overview }}</span></p>
    </MovieListItemCol> -->
  </li>
</template>

<script>
import MovieListItemCol from '@/components/elements/MovieListItemCol'

export default {
  components: {
    MovieListItemCol
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    poster: {
      type: String,
      default: ''
    }
  }
}
</script>
