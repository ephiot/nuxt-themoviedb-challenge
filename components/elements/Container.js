import styled from 'vue-styled-components'

const props = {
  width: String,
  alignItems: String,
  justifyContent: String,
  minHeight: String,
  paddingTop: String,
  paddingBottom: String,
  flexDirection: String
}

const Container = styled('div', props)`
  display: flex;
  justify-content:  ${props => props.justifyContent || 'center'};
  align-items:  ${props => props.alignItems || 'stretch'};
  min-height:  ${props => props.minHeight || '100vh'};
  width: ${props => props.width || '100vw'};
  box-sizing: border-box;
  padding-top: ${props => props.paddingTop || '0px'};
  padding-bottom: ${props => props.paddingBottom || '0px'};
  flex-direction: ${props => props.flexDirection || 'row'};
`

export default Container
