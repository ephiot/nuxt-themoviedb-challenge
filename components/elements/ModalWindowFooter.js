import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  marginBottom: String
}

const ModalWindowFooter = styled('footer', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: 2em;
  line-height: 2em;
  flex-basis: 2em;
  align-items: ${props => props.alignItems || 'stretch'};
  justify-content: ${props => props.justifyContent || 'center'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  align-self: flex-end;
`

export default ModalWindowFooter
