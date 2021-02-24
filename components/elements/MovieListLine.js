import styled from 'vue-styled-components'

const props = {}

const MovieList = styled('ul', props)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 5px;

  li {
    display: flex;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    background-color: #eee;
    margin-bottom: 5px;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: #90cea1;
    }
  }
`

export default MovieList
