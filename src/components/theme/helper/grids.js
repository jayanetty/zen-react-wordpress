import styled, { css } from "styled-components";
import { Device } from "./mixins";
import { Theme } from "./variables";

export const Row = styled.div`
  ${props =>
    props.flex &&
    css`
      display: flex;
      align-items: ${align => (align ? align : "")};
      justify-content: ${justify => (justify ? justify : "")};
      flex-direction: ${direction => (direction ? direction : "")};

      @media ${Device.tablet} {
        align-items: ${alignM => (alignM ? alignM : "")};
        justify-content: ${justifyM => (justifyM ? justifyM : "")};
        flex-direction: ${directionMb => (directionMb ? directionMb : "")};
      }
    `};

  ${props =>
    props.grid &&
    css`
      grid-gap: ${({ gap }) => (gap ? gap : `${Theme.grid__gap_m}`)};
      grid-template-columns: ${({ columns }) => (columns ? columns : "")};
      grid-template-rows: ${({ rows }) => (rows ? rows : "")};

      @media ${Device.tablet} {
        grid-template-columns: ${({ colM }) => (colM ? colM : "")};
        grid-template-rows: ${({ rowM }) => (rowM ? rowM : "")};
      }

      @media ${Device.desktop} {
        grid-template-columns: ${({ colL }) => (colL ? colL : "")};
        grid-template-rows: ${({ rowL }) => (rowL ? rowL : "")};
      }
    `};

  height: ${({ height }) => (height ? height : "")};
`;

export const Column = styled.div``;
