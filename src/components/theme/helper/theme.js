import styled, { createGlobalStyle, css } from "styled-components";
import { MaxWidth, Device } from "../index";
import { Colors } from "./colors";

export const InnerWrapper = styled.section`
  @media ${Device.mobile} {
    padding-left: 10px;
    padding-right: 10px;

    ${props =>
      props.mobile_x &&
      css`
        padding-left: 20px;
        padding-right: 20px;
      `};

    ${props =>
      props.mobile_slide &&
      css`
        padding-right: 0;
        padding-left: 10px;
      `};

    ${props =>
      props.no_padding &&
      css`
        padding: 0;
      `};
  }

  @media ${Device.tablet_only} {
    padding-left: 10px;
    padding-right: 10px; ///// Recheck this.. this overwrites the mobile style. Maybe add end value to below desktop

    ${props =>
      props.mobile_slide &&
      css`
        padding-right: 10px;
        padding-left: 10px;
      `};

    ${props =>
      props.mobile_x &&
      css`
        padding-left: 20px;
        padding-right: 20px;
      `};
  }

  @media ${Device.desktop} {
    ${MaxWidth};
    margin: 0 auto;
  }
`;

export const OuterWrapper = styled.section``;

export const ProductCardWrapper = styled.div`
  display: flex;
`;

export const ProductCard = styled.div``;

export const LinkTag = styled.span``;

export const Line = styled.div`
  display: none;
  margin: 20px 0 12px;
  height: 2px;
  border: solid 0.5px ${Colors.washed_navy_blue__20};
  opacity: 0.5;

  ${props =>
    props.mobile &&
    css`
      display: block;
    `};

  @media ${Device.tablet} {
    display: block;
  }
`;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    html {
        font-size: 62.5%;
        font-size-adjust: 100%;
        
        body {
            font-family: futura-pt, sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            color: ${Colors.washed_navy_blue};
            -webkit-font-smoothing: antialiased;
            
            a {
                cursor: pointer;
                color: ${Colors.washed_navy_blue};
                text-decoration: none;
                
                &:hover {}
            }
        }
    }
`;
