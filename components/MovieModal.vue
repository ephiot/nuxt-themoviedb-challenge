<template>
  <Modal ref="modal" :close-callback="close">
    <template #header>
      {{ movie.title }}
    </template>
    <template #main>
      <MovieModalBanner :backdrop="backdrop">
        <img :src="poster" :title="movie.title">
        <div class="content">
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
            <span class="title">Nota:</span> {{ movie.vote_average * 10 }}/100
          </p>
          <p>
            <span class="title">Sinópse:</span>
            <br>
            {{ movie.overview }}
          </p>
        </div>
      </MovieModalBanner>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'
import MovieModalBanner from '@/components/elements/MovieModalBanner'

export default {
  components: {
    Modal,
    MovieModalBanner
  },
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    poster: {
      type: String,
      default: ''
    },
    backdrop: {
      type: String,
      default: ''
    }
  },
  methods: {
    show () {
      this.$refs.modal.show()
    },
    close () {
      this.$refs.modal.close()
    }
  }
}
</script>
