import PropTypes from "prop-types";
import React from "react";

import { ThemeContext } from "../layouts";
import Blog from "../components/Blog";
import Seo from "../components/Seo";

class IndexPage extends React.Component {
  render() {
    const {
      data: {
        posts: { edges: posts = [] },
        site: {
          siteMetadata: { facebook }
        }
      }
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => <Blog posts={posts} theme={theme} />}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const guery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts/[0-9]+.*--/" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            category
            author
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpSizes_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;

//hero-background
