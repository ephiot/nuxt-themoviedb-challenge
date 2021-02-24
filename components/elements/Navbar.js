import styled from 'vue-styled-components'

const props = {
  fontSize: String,
  height: String,
  marginBottom: String,
  backgroundColor: String,
  backgroundColorOnHover: String,
  color: String,
  itemMinWidth: String
}

const Navbar = styled('nav', props)`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  width: 100vw;
  font-size: ${props => props.fontSize || '16px'};
  height: ${props => props.height || '4em'};
  margin-bottom: ${props => props.marginBottom || '10px'};
  background-color: ${props => props.backgroundColor || '#0d253f'};
  color: ${props => props.backgroundColor || 'white'};

  ul {
    display: flex;
    flex-direction: row;
    height: ${props => props.width || '4em'};
    width: auto;
    padding: 0px;
    margin: 0px;
    list-style: none;

    li {
      display: flex;
      flex: 1;
      flex-wrap: nowrap;
      height: inherit;
      // min-width: ${props => props.itemMinWidth || '6em'};
      // width: auto !important;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: ${props => props.backgroundColor || '#0d253f'};
      text-shadow: -2px 2px 2px ${props => props.backgroundColor || '#0d253f'};
      transition: background-color .2s linear;
      // box-sizing: border-box;
      // padding: 0px 1em;

      &:hover {
        background-color: ${props => props.backgroundColorOnHover || '#1b4775'};
      }

      a {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: white;
        white-space: nowrap;
        padding: 0px 1em;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export default Navbar
