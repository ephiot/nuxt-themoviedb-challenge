<template>
  <Container flex-direction="column" align-items="flex-start" justify-content="flex-start">
    <Navbar>
      <Content>
        <ul>
          <li>
            <NuxtLink to="/">
              Filmes Populares
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/search">
              Buscar Filmes
            </NuxtLink>
          </li>
          <li>
            <a @click="logout">Sair</a>
          </li>
        </ul>
      </Content>
    </Navbar>
    <Content>
      <Nuxt />
    </Content>
    <Footer margin-top="1em">
      <img class="tmdb" src="~/static/tmdb.svg" title="Powered by TheMovieDB">
    </Footer>
  </Container>
</template>

<script>
import Container from '@/components/elements/Container'
import Content from '@/components/elements/Content'
import Footer from '@/components/elements/Footer'
import Navbar from '@/components/elements/Navbar'

import { mapActions } from 'vuex'

export default {
  components: {
    Container,
    Content,
    Footer,
    Navbar
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
