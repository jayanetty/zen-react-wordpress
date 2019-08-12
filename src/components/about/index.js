import React, { Component } from "react";
import styled from "styled-components";
import { getPages } from "../wordpress/information";

const blogUrl = `${getPages}/12`;

class About extends Component {
  state = {
    pageTitle: "",
    pageContent: ""
  };

  componentDidMount() {
    let postUrl = `${blogUrl}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          pageTitle: data.title.rendered,
          pageContent: data.content.rendered
        });
      });
  }

  render() {
    return (
      <Container>
        <h1>{this.state.pageTitle}</h1>
        <span dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 35px;
`;

export default About;
