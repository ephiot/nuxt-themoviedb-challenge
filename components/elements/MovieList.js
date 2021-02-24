import styled from 'vue-styled-components'

const props = {}

const MovieList = styled('ul', props)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 5px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    flex-basis: 24%;
    height: auto;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 5px;
    background-color: #eaeaea;
    margin-bottom: 5px;
    color: #333;
    cursor: pointer;
    margin-right: 5px;

    img {
      display: flex;
      width: 100%;
      height: auto;
    }

    p {
      font-size: .8em;
      margin-bottom: 5px;
  
      span.title {
        font-weight: bold;
      }
    }

    &:hover {
      background-color: #90cea1;
    }
  }
`

export default MovieList
