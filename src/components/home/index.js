import React, { Component } from "react";
import styled from "styled-components";
import { getPages } from "../wordpress/information";
import AddToHomescreen from "react-add-to-homescreen";

const blogUrl = `${getPages}/2`;

class Home extends Component {
  state = {
    // pageTitle: "",
    pageContent: ""
  };

  componentDidMount() {
    let postUrl = `${blogUrl}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          // pageTitle: data.title.rendered,
          pageContent: data.content.rendered
        });
        console.log(data);
      });
  }

  handleAddToHomescreenClick = () => {
    alert("adsa");
  };

  render() {
    return (
      <Container>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <span dangerouslySetInnerHTML={{ __html: this.state.pageContent }} />
        <AddToHomescreen
          onAddToHomescreenClick={this.handleAddToHomescreenClick}
        />
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

export default Home;
