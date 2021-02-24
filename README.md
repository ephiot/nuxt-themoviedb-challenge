# Nuxt TheMovieDB Challenge

This project is a VueJS + NuxtJS (Universal mode) App to consume TheMovieDB API.

## What it does ?

This App actually:
- Authenticate with you TheMovieDB account
- Show the popular movies
- Search for movies by title
- See movie details

## What is cool about it ?

This App use:
- Styled Components
- Vuex to manage authentication
- The logic was extracted to services classes
- Flex based styles

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# use Ngrok to expose the app publically, copy the https generated URL to 
# your API URL on TheMovieDB profile config:
# https://www.themoviedb.org/settings/api/details
ngrok http 3000
```
