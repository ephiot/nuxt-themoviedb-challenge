import styled from 'vue-styled-components'

const props = {}

const ModalWindow = styled('div', props)`
  display: flex;
  flex-direction: column;
  min-width: 50vw;
  width: auto !important;
  max-width: 80vw;
  min-height: 20vh;
  height: auto !important;
  position: relative;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  align-items: stretch;
`

export default ModalWindow
