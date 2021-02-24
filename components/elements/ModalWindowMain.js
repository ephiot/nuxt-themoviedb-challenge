import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  marginBottom: String
}

const ModalWindowMain = styled('main', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: auto;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  flex-grow: 2;
  flex-direction: column;
`

export default ModalWindowMain
