import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  minHeight: String,
  paddingTop: String,
  paddingBottom: String,
  paddingLeft: String,
  paddingRight: String,
  flexDirection: String
}

const Content = styled('div', props)`
  display: flex;
  justify-content:  ${props => props.justifyContent || 'flex-start'};
  min-height:  ${props => props.minHeight || '100%'};
  width: ${props => props.width || '100%'};
  box-sizing: border-box;
  padding-top: ${props => props.paddingTop || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  padding-left: ${props => props.paddingLeft || '15%'};
  padding-right: ${props => props.paddingRight || '15%'};
  flex-direction: ${props => props.flexDirection || 'row'};

  @media all and (max-width: 1400px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`

export default Content
