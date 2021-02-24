import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  marginTop: String,
  marginBottom: String,
  flexWrap: String,
  backgroundColor: String
}

const Row = styled('footer', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: auto;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-top: ${props => props.marginTop || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
  background-color: ${props => props.backgroundColor || '#0d253f'};
  box-sizing: border-box;
  padding: 1em 0px;

  img.tmdb {
    display: flex;
    height: 3em;
    width: auto;
  }
`

export default Row
