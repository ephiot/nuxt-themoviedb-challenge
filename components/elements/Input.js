import styled from 'vue-styled-components'

const props = {
  width: String
}

const Input = styled('input', props)`
  display: flex;
  width: ${props => props.width || '100%'};
  padding: 5px;
  border-radius: 3px;
  border: solid 2px #333;
  text-align: left;
  color: #333;
  height: 3em;
  line-height: 3em;
  margin-bottom: 1em;
  margin-top: 5px;
`

export default Input
