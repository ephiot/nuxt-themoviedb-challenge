<template>
  <Modal ref="modal" :close-callback="close">
    <template #header>
      Autenticação Necessária
    </template>
    <template #main>
      Clique no link abaixo para autenticar-se no TheMovieDB.
      <br><br>
      <Button @click="goToTMDB">
        Autenticar-se no TheMovieDB
      </Button>
      <br>
      <Button @click="getSessionId">
        Iniciar sessão
      </Button>
      <div v-if="error" class="error">
        <br>
        <p>Houve um erro durante a autenticação, por favor tente novamente.</p>
      </div>
    </template>
  </Modal>
</template>

<script>
import Auth from '@/services/Auth'
import Button from '@/components/elements/Button'
import Modal from '@/components/Modal'

const callbackUrl = process.env.apiHost + '/approved'

export default {
  components: {
    Button,
    Modal
  },
  props: {
    requestToken: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      error: false
    }
  },
  computed: {
    link () {
      return `https://www.themoviedb.org/authenticate/${this.requestToken}`
    },
    linkWithRedirect () {
      return `${this.link}?redirect_to=${callbackUrl}`
    }
  },
  methods: {
    show () {
      this.error = false
      this.$refs.modal.show()
    },
    close () {
      this.$refs.modal.close()
    },
    goToTMDB () {
      this.error = false
      window.open(this.link, '_blank')
    },
    getSessionId () {
      const requestToken = this.requestToken
      Auth.getSessionId(requestToken)
        .then((sessionId) => {
          this.$storage.setUniversal('requestToken', requestToken)
          this.$storage.setUniversal('sessionId', sessionId)
          this.$router.push({ path: '/' })
        })
        .catch((err) => {
          console.error(err)
          this.error = true
        })
    }
  }
}
</script>
