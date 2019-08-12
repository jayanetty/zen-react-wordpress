import styled, { css } from "styled-components";
import { Colors, Device } from "../index";

export const Form = styled.form``;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  border: 1px solid ${Colors.washed_navy_blue__20};
  background-color: ${Colors.white};
  color: ${Colors.washed_navy_blue};
  outline: 0;
  font-weight: 500;
  //font-size: 1.4rem;
  padding: 12px;
  width: 100%;
  max-width: 360px;
  border-radius: 4px;

  &:focus {
    border-color: ${Colors.perrywinkle};
  }

  &::placeholder {
    color: ${Colors.washed_navy_blue__40};
  }

  @media ${Device.mobile} {
    width: 100%;
  }
`;

export const Label = styled.label`
  //font-size: 1.4rem;
  color: grey;
  font-weight: 500;
  margin-right: 20px;
`;

export const SelectCustom = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${Colors.grey__F6};
  height: 40px;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

// Start Button styling
export const Button = styled.button`
  background-color: ${Colors.washed_navy_blue};
  padding: 10px 15px;
  color: ${Colors.white};
  border: 0;
  border-radius: 4px;
  margin-top: 40px;
  cursor: pointer;

  @media ${Device.mobile} {
    width: 100%;
  }

  @media ${Device.tablet} {
    width: ${({ width }) => (width ? width : "")};
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.primary &&
    css`
      width: 100%;
      color: ${Colors.white};
      background-image: linear-gradient(
        287deg,
        ${Colors.medium_green},
        ${Colors.light_green}
      );
      border: 0;
      padding: 7px 0;
      transition: box-shadow 100ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0ms;

      &:hover,
      &:active {
        box-shadow: 0 10px 14px 0 rgba(75, 166, 98, 0.3);
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background-color: ${Colors.seafoam_blue};
      color: ${Colors.white};
      padding: 7px 0;
      border: 1px solid ${Colors.seafoam_blue};
    `};
`;

export const FormElementCard = styled.div`
  margin: 20px auto 40px;

  @media ${Device.tablet} {
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
    background-color: ${Colors.white};
    width: 410px;
    padding: 30px;
  }
`;
