import React, { Component } from "react";
import styled from "styled-components";
import { getPostSlugs } from "../wordpress/information";
import { H1 } from "../theme";

const projectsUrl = `${getPostSlugs}`;

class BlogDetails extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const postUrl = `${projectsUrl}${this.props.match.params.slug}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }

  render() {
    let listposts = this.state.posts.map((post, index) => {
      return (
        <CustomSectionWrapper inner key={index}>
          <H1>{post.title.rendered}</H1>
          <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </CustomSectionWrapper>
      );
    });

    return <div>{listposts}</div>;
  }
}

const CustomSectionWrapper = styled.div`
  figure {
    margin: 20px 0;
  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    padding: 0 30px;
  }
`;

export default BlogDetails;
