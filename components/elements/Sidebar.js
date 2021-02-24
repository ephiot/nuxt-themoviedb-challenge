import styled from 'vue-styled-components'

const props = {
  flexBasis: String,
  fontSize: String,
  minHeight: String,
  height: String
}

const Sidebar = styled('div', props)`
  display: flex;
  flex-direction: column;
  flex-basis: ${props => props.flexBasis || '25%'};
  font-size: ${props => props.fontSize || '16px'};
  min-height: ${props => props.minHeight || '100vh'};
  height: ${props => props.height || 'auto'};
`

export default Sidebar
