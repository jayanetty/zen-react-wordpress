import { createGlobalStyle } from "styled-components";

export { MaxWidth, Theme } from "./helper/variables";
export { Device } from "./helper/mixins";
export {
  OuterWrapper,
  InnerWrapper,
  GlobalStyle,
  LinkTag,
  Line
} from "./helper/theme";
export { Row, Column } from "./helper/grids";
export { Colors } from "./helper/colors";
export { H1, H2, H3, H4, H5 } from "./helper/typography";
export {
  Form,
  Input,
  Button,
  SelectCustom,
  InputWrapper,
  FormElementCard,
  Label,
  ButtonWrapper
} from "./helper/forms";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    
    body {
      margin: 0;
      padding: 0;
      font-family: 'Quicksand', sans-serif;
      font-size: 1.6rem;
      line-height: 2.9rem;
      font-weight: 400;
      overflow: hidden;
      
      h2 {
        //text-align: center;
        margin: 0;
        padding: 30px 0;
      }
      
      p {
        margin: 0 0 20px 0;
      }
      
      a {
        text-decoration: none;
        color: inherit;
      }
      
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
