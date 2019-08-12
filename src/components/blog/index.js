import React, { Component } from "react";
import styled from "styled-components";
import { getPosts } from "../wordpress/information";
import { Link } from "react-router-dom";

const blogUrl = `${getPosts}`;

class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch(blogUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
        console.log(data);
      })
      .catch(() => {
        alert("Failed to fetch Data");
      });
  }

  render() {
    let listPost = this.state.posts.map((post, index) => {
      return (
        <BlogPost key={index}>
          <Link to={`blog/` + post.slug}>
            <img
              alt={post.better_featured_image.alt_text}
              src={post.better_featured_image.source_url}
            />
            <h2>{post.title.rendered}</h2>
            <Contents
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </Link>
        </BlogPost>
      );
    });

    return <Container>{listPost}</Container>;
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  //flex-direction: column;
  //justify-content: center;
  grid-gap: 20px;
  padding: 20px 35px;

  img {
    width: 100%;
    max-width: 100%;
  }
`;

const BlogPost = styled.div`
  border: 1px solid #ececec;

  h2 {
    text-align: center;
  }
`;

const Contents = styled.span`
  padding: 0 30px;
  display: block;
`;

export default Blog;
