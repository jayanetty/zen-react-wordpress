import React, { Component } from "react";
import styled from "styled-components";
import { getPages, getCategories } from "../wordpress/information";
import { Link } from "react-router-dom";
import { H1, ButtonWrapper, Button } from "../theme";
// import Progress from "../shared/progress";

class Blog extends Component {
  state = {
    pages: [],
    posts: []
  };

  componentDidMount() {
    fetch(getPages)
      .then(data => data.json())
      .then(data => {
        this.setState({
          pages: data
        });
      })
      .catch(() => {
        alert("Failed to fetch Pages. Please recheck the file Information.js");
      });

    fetch(getCategories)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
      })
      .catch(() => {
        alert("Failed to fetch Posts. Please recheck the file Information.js");
      });
  }

  render() {
    let listPost = this.state.posts.map((post, index) => {
      return (
        <option key={index}>
          {post.id} | {post.name}
        </option>
      );
    });

    let listPage = this.state.pages.map((page, index) => {
      return (
        <tr key={index}>
          <td>{page.id}</td>
          <td>{page.title.rendered}</td>
          <td>{page.slug}</td>
          <td>
            <select>{listPost}</select>
          </td>
          <td>
            <input type={"checkbox"} />
          </td>
        </tr>
      );
    });

    let showPosts = this.state.posts.map((post, index) => {
      return (
        <tr key={index}>
          <td>{post.id}</td>
          <td>{post.name}</td>
        </tr>
      );
    });

    return (
      <Container>
        <H1>Add Pages</H1>
        {/*<Progress />*/}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Domain</th>
              <th>Post Category ID</th>
              <th>Show in menu</th>
            </tr>
          </thead>
          <tbody>{listPage}</tbody>
        </table>

        <H1>View Posts</H1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{showPosts}</tbody>
        </table>

        <ButtonWrapper>
          <Link to={"/Home"}>
            <Button type={"submit"}>Build your Site</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  overflow: scroll;
  padding: 0 40px;

  table {
    //border: 1px solid #ececec;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;

    th,
    td {
      border: 1px solid #ececec;
      border-collapse: collapse;
      padding: 10px;
      text-align: center;
    }

    th {
      background: #ececec;
      font-weight: 300;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }
`;

export default Blog;
