import styled from 'vue-styled-components'

const props = {
  width: String,
  minWidth: String
}

const Button = styled('button', props)`
  display: flex;
  width: ${props => props.width || 'auto'};
  min-width: ${props => props.minWidth || '100px'};
  padding: .5em;
  border: none;
  border-radius: 3px;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1em;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #0d253f;
  text-shadow: -2px 2px 2px #0d253f;
  transition: background-color .2s linear;

  &:hover {
    background-color: #1b4775;
  }
`

export default Button
