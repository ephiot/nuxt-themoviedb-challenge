import styled from 'vue-styled-components'

const props = {}

const MovieSearchBlock = styled('div', props)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: solid 2px #333;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 5px;

  input {
    margin-bottom: 1em;
  }
`

export default MovieSearchBlock
