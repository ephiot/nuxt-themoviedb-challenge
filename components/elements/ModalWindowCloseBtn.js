import styled from 'vue-styled-components'

const props = {
  label: String,
  minWidth: String,
  width: String,
  minHeight: String,
  height: String,
  borderRadius: String,
  align: String
}

const alignType = (type) => {
  return (type === 'left')
    ? `
      transform: translateX(100%);
      margin-right: 100%;
      margin-left: 0px;
    `
    : `
      transform: translateX(-100%);
      margin-right: 0px;
      margin-left: 100%;
    `
}

const ModalWindowCloseBtn = styled('button', props)`
  all: unset;

  position: absolute;
  display: flex;
  min-width: ${props => props.minWidth || '1em'};
  width: ${props => props.width || 'auto !important'};
  min-height: ${props => props.minHeight || '1em'};
  height: ${props => props.height || 'auto !important'};
  border-radius: ${props => props.borderRadius || '1em'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: .6em;
  color: #AAA;
  text-shadow: -1px 1px 1px #666;
  background-color: transparent;
  ${props => alignType(props.align || 'right')}
  transition: color .2s linear, text-shadow .2s linear;

  &:hover {
    color: #333;
    text-shadow: -1px 1px 3px #000;
  }
`

export default ModalWindowCloseBtn
