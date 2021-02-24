import styled from 'vue-styled-components'

const props = {}

const ModalBackground = styled('div', props)`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.25);
`

export default ModalBackground
