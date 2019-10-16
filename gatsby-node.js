//const webpack = require("webpack");
const _ = require("lodash");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const Promise = require("bluebird");

const { createFilePath } = require(`gatsby-source-filesystem`);

const { paginate } = require("gatsby-awesome-pagination");
const { createLinkedPages } = require("gatsby-pagination");

const config = require("./content/meta/config");

// Advanced blog system in Gatsby
// https://medium.com/significa/advanced-blog-system-in-gatsby-16e0cd6b85ad

exports.onCreateNode = ({ node, getNode, actions }) => {
  // https://www.gatsbyjs.org/tutorial/part-seven/
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = ~slug.indexOf("--") ? slug.indexOf("--") : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source === "pages") {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? "/" : ""}${slug.substring(shortSlugStart)}`
      });
    } else if (source === "posts") {
      createNodeField({
        node,
        name: `slug`,
        // value: `${slug.replace("--", "/")}`
        value: path.basename(slug).replace("--", "/")
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? path.basename(slug.substring(1, separtorIndex)) : ""
    });
    createNodeField({
      node,
      name: `source`,
      value: source
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const indexTemplate = path.resolve("./src/templates/IndexTemplate.js");
    const postTemplate = path.resolve("./src/templates/PostTemplate.js");
    const pageTemplate = path.resolve("./src/templates/PageTemplate.js");
    const categoryTemplate = path.resolve("./src/templates/CategoryTemplate.js");

    // Do not create draft post files in production.
    let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";
    console.log(`Using environment config: '${activeEnv}'`);
    let filters = `filter: { fields: { slug: { ne: null } } }`;
    if (activeEnv === "production") filters = `filter: { fields: { slug: { ne: null } , prefix: { ne: null } } }`;

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              ` + filters + `
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    category
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Getting an external link warning when using Link with createPages
        // https://github.com/gatsbyjs/gatsby/issues/11243

        const items = result.data.allMarkdownRemark.edges;

        // Create category list
        const categorySet = new Set();
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { category }
            }
          } = edge;

          if (category) {
            category.forEach(item => categorySet.add(item));
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category
            }
          });
        });

        // Create index page
        const posts = items.filter(item => item.node.fields.source === "posts");
        paginate({
          createPage, // The Gatsby `createPage` function
          items: posts, // An array of objects
          itemsPerPage: config.sitePaginationLimit, // How many items you want per page
          pathPrefix: "/", // Creates pages like `/blog`, `/blog/2`, etc
          component: indexTemplate // Just like `createPage()`
        });

        // Create posts
        createLinkedPages({
          createPage,
          edges: posts,
          component: postTemplate,
          edgeParser: edge => ({
            path: edge.node.fields.slug,
            context: {
              slug: edge.node.fields.slug
            }
          }),
          circular: false
        });

        // and pages.
        const pages = items.filter(item => item.node.fields.source === "pages");
        pages.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  switch (stage) {
    case `build-javascript`:
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./report/treemap.html",
            openAnalyzer: true,
            logLevel: "error",
            defaultSizes: "gzip"
          })
        ]
      });
  }
};
