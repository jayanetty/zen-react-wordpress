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
  /* componentDidMount() is used to load data from the defined Url through REST API in this case */
  componentDidMount() {
    const postUrl = `${projectsUrl}${this.props.match.params.slug}`;
    fetch(postUrl)
      .then(data => data.json())
      .then(data => {
        /* Retrieved data is set to posts as an object to call upon request under rendering */
        this.setState({
          posts: data
        });
      });
  }

  /* The data is retrieved from the state.posts and rendered. .map will expand the array object */
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
