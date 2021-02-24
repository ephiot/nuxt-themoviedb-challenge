import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  marginBottom: String,
  flexWrap: String
}

const Row = styled('div', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: auto;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  flex-wrap: ${props => props.flexWrap || 'no-wrap'};
`

export default Row
