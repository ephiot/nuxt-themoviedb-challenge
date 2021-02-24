<template>
  <Container flex-direction="column">
    <Title>{{ title }}</Title>
    <TextLine justify-content="center">
      Redirecionando para o app em {{ countdown }}...
    </TextLine>
    <TextLine justify-content="center">
      <NuxtLink to="/">
        clique aqui caso não tenha paciência
      </NuxtLink>
    </TextLine>
  </Container>
</template>

<script>
import Auth from '@/services/Auth'

import Container from '@/components/elements/Container'
import TextLine from '@/components/elements/TextLine'
import Title from '@/components/elements/Title'
import { mapActions } from 'vuex'

export default {
  components: {
    Container,
    TextLine,
    Title
  },
  data: () => {
    return {
      approved: 0,
      countdown: 5,
      counter: null
    }
  },
  computed: {
    title () {
      switch (this.approved) {
        case 1:
          return 'Autenticação concluída com sucesso ;)!'
        case -1:
          return 'Acesso negado ;.;'
        default:
          return 'Um momento...'
      }
    }
  },
  created () {
    const approved = this.$route.query.approved === 'true'
    const requestToken = this.$route.query.request_token
    if (approved) {
      return this.getSessionId(requestToken)
    }
    this.approved = -1
    this.setCounter()
  },
  methods: {
    getSessionId (requestToken) {
      Auth.getSessionId(requestToken)
        .then((sessionId) => {
          this.doLogin(requestToken, sessionId)
          this.approved = 1
          this.setCounter()
        })
        .catch((err) => {
          console.error(err)
          this.approved = -1
          this.setCounter()
        })
    },
    setCounter () {
      if (this.countdown < 1) {
        clearInterval(this.counter)
        return this.redirect()
      }
      if (this.counter) {
        return
      }
      this.counter = setInterval(() => {
        this.countdown--
        this.setCounter()
      }, 1000)
    },
    redirect () {
      const route = (this.approved > 0) ? { path: '/' } : { path: '/login' }
      this.$router.push(route)
    },
    ...mapActions({
      doLogin: 'auth/login'
    })
  }
}
</script>
