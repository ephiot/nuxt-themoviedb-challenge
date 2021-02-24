import styled from 'vue-styled-components'

const props = {
  width: String,
  height: String,
  lineHeight: String,
  justifyContent: String
}

const FormTitle = styled('h1', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '2em'};
  line-height: ${props => props.lineHeight || '2em'};
  justify-content: ${props => props.justifyContent || 'center'};
`

export default FormTitle
