import React, { Component } from "react";
import styled from "styled-components";
import { getPages } from "../../wordpress/information";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    pages: []
  };

  componentDidMount() {
    fetch(getPages)
      .then(data => data.json())
      .then(data => {
        this.setState({
          pages: data
        });
      });
  }

  render() {
    let listPage = this.state.pages.map((page, index) => {
      return (
        <div key={index}>
          <Link to={"/" + page.title.rendered}>{page.title.rendered}</Link>
        </div>
      );
    });

    return (
      <Container>
        {listPage}
        <Logo>Zen: React + WordPress</Logo>
      </Container>
    );
  }
}

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  align-items: center;
  height: 60px;
  width: 100vw;
  background-color: #3a3a3a;
  color: #fff;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Logo = styled.div`
  color: #3a3a3a;
  font-size: 2rem;
  background-color: #fff;
`;

export default Header;
