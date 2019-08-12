import React, { Component } from "react";
import styled, { css } from "styled-components";

class Progress extends Component {
  constructor() {
    super();
    this.state = {
      activeCount: ""
    };
  }

  /* Rendering the setup progress. Not in use atm!!! */
  render() {
    return (
      <ProgressWrapper>
        <ProgressCount>1</ProgressCount>
        <ProgressCount>2</ProgressCount>
      </ProgressWrapper>
    );
  }
}

const ProgressWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const ProgressCount = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  color: #fff;
  border-radius: 50%;

  ${props =>
    props.active &&
    css`
      background-color: blue;
    `};
`;

export default Progress;
