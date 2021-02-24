import styled from 'vue-styled-components'

const props = {
  backdrop: String
}

const MovieModalBanner = styled('div', props)`
  display: flex;
  width: 100%;
  min-height: 10em;
  height: auto;
  background-image: url(${props => props.backdrop || ''});
  background-size: 100% auto;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  padding: 1em;

  &::after {
    content: '';
    background-color: white;
    opacity: .75;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: 1;
  }

  img {
    display: flex;
    flex-basis: 25%;
    max-height: 250px;
    height: auto;
    z-index: 2;
  }

  .content {
    display: flex;
    flex-basis: 75%;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 3em;
    z-index: 2;

    p {
      margin-bottom: 1em;

      span.title {
        font-weight: bold;
      }
    }
  }
`

export default MovieModalBanner
