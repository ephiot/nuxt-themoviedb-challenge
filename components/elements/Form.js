import styled from 'vue-styled-components'

const props = {
  width: String,
  height: String,
  paddingTop: String,
  paddingBottom: String,
  paddingLeft: String,
  paddingRight: String,
  flexWrap: String,
  alignSelf: String
}

const Form = styled('form', props)`
  display: flex;
  width: ${props => props.width || '60%'};
  height: ${props => props.height || 'auto'};
  flex-direction: column;
  color: #333;
  border: solid 2px #333;
  border-radius: 3px;
  box-sizing: border-box;
  padding-top: ${props => props.paddingTop || '5px'};
  padding-bottom: ${props => props.paddingBottom || '5px'};
  padding-left: ${props => props.paddingLeft || '5px'};
  padding-right: ${props => props.paddingRight || '5px'};
  align-self: ${props => props.alignSelf || 'center'};
  justify-content: center;

  p {
    text-align: center;
  }

  img.tmdb {
    display: flex;
    height: 3em;
    width: auto;
  }
`

export default Form
