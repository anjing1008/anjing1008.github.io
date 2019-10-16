import { FaTag } from "react-icons/fa/";
import PropTypes from "prop-types";
import React from "react";
import { graphql, Link } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article/";
import Headline from "../components/Article/Headline";
import List from "../components/List";
import Seo from "../components/Seo";

// Remove global Styles
// https://github.com/ant-design/ant-design/issues/9363
// import { Tag } from "antd";
// import 'antd/lib/tag/style/index.css';

const CategoryPage = props => {
  const {
    data: {
      posts: { edges: posts },
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  // Create category list
  const categories = {};
  posts.forEach(edge => {
    const {
      node: {
        frontmatter: { category }
      }
    } = edge;

    if (category) {
      category.forEach(element => {
        if (!categories[element]) {
          categories[element] = [];
        }
        categories[element].push(edge);
      });
    }
  });

  const categoryList = [];

  for (const key of Object.keys(categories)) {
    categoryList.push([key, categories[key]]);
  }

  categoryList.sort();

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Posts by categories" theme={theme} />
            </header>
            {categoryList.map(item => (
              <section key={item[0]}>
                <h2>
                  <FaTag /> <Link to={`/category/${item[0]}`}>{item[0]}</Link>
                </h2>
                <List edges={item[1]} theme={theme} />
              </section>
            ))}
            {/*language=LESS*/}
            <style jsx>{`
              h2 {
                margin: 0 0 0.5em;
              }
              h2 :global(svg) {
                height: 0.8em;
                fill: ${theme.color.brand.primary};
              }
            `}</style>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

CategoryPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default CategoryPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PostsQuery {
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
                  fluid(maxWidth: 800, maxHeight: 360) {
                    ...GatsbyImageSharpFluid_withWebp
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
