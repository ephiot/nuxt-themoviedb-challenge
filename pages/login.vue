<template>
  <Container>
    <auth-modal ref="modal" :request-token="requestToken" />
    <Row align-items="center">
      <Form padding-left="10px" padding-right="10px" padding-top="10px">
        <img class="tmdb" src="~/static/tmdb.svg" title="Powered by TheMovieDB">
        <FormTitle>Autentique-se no TheMovieDB</FormTitle>
        <p>Para poder acessar o app você precisa se autenticar<br>no TheMovieDB e autorizar este app.</p>
        <br>
        <Row margin-bottom=".5em">
          <Button type="button" @click="callLogin">
            Clique aqui, é rapidinho ;)!
          </Button>
        </Row>
      </Form>
    </Row>
  </Container>
</template>

<script>
import Button from '@/components/elements/Button'
import Container from '@/components/elements/Container'
import Form from '@/components/elements/Form'
import FormTitle from '@/components/elements/FormTitle'
import Row from '@/components/elements/Row'

import Auth from '@/services/Auth'

export default {
  components: {
    Button,
    Container,
    Form,
    FormTitle,
    Row
  },
  data: () => {
    return {
      requestToken: null
    }
  },
  methods: {
    callLogin () {
      Auth.getRequestToken().then((token) => {
        this.requestToken = token
        this.$refs.modal.show()
      })
    }
  }
}
</script>
