import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  marginBottom: String
}

const TextLine = styled('p', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: auto;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  margin-bottom: ${props => props.marginBottom || '1em'};
`

export default TextLine
