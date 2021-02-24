import styled from 'vue-styled-components'

const props = {
  flexBasis: String
}

const MovieListItemCol = styled('div', props)`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => props.flexBasis || '30%'};
  box-sizing: border-box;
  padding: 5px;
  font-size: .8em;

  img {
    display: flex;
    width: 100%;
    height: auto;
  }

  p {
    margin-bottom: 5px;

    span.title {
      font-weight: bold;
    }

    span.overview {
      font-size: .8em;
      text-align: justify;
    }
  }
`

export default MovieListItemCol
