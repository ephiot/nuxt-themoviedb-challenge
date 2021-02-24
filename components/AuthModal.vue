<template>
  <Modal ref="modal" :close-callback="close">
    <template #header>
      Autenticação Necessária
    </template>
    <template #main>
      Clique no link abaixo para autenticar-se no TheMovieDB.<br>
      <a :href="link">{{ link }}</a>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'

const callbackUrl = process.env.apiHost + '/approved'

export default {
  components: {
    Modal
  },
  props: {
    requestToken: {
      type: String,
      default: ''
    }
  },
  computed: {
    link () {
      return `https://www.themoviedb.org/authenticate/${this.requestToken}?redirect_to=${callbackUrl}`
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
