import {createGlobalStyle} from 'styled-components';
import reset from 'reset-styles';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body{
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;