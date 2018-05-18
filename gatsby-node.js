const _ = require('lodash');
const path = require('path');
const lost = require('lost');
const slash = require('slash');
// const createPaginatedPages = require('gatsby-paginate');
// createPaginatedPages();

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const article = path.resolve('./src/templates/article.js');
    const main = path.resolve('./src/templates/main.js');

    graphql(`
    {
      allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { draft: { ne: true } } },
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              layout
              category
            }
          }
        }
      }
    }
  `).then((result) => {
      if (result.errors) {
        reject(result.errors);
      }

      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        if (_.get(edge, 'node.frontmatter.layout') === 'page') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(main),
            context: {
              slug: edge.node.fields.slug
            }
          });

        } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(article),
            context: {
              slug: edge.node.fields.slug
            }
          });

          let tags = [];
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }

          tags = _.uniq(tags);

          _.each(tags, (tag) => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;
            createPage({path: tagPath, component: main, context: {
                name: tag, type: 'tag'
              }});
          });

          let categories = [];
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category);
          }

          categories = _.uniq(categories);
          _.each(categories, (category) => {
            const categoryPath = `/categories/${_.kebabCase(category)}/`;
            createPage({path: categoryPath, component: main, context: {
                name: category, type: 'category'
              }});
          });
        }
      });

      resolve();
    });
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath
      .dir
      .split('---')[1]}/`;
    createNodeField({node, name: 'slug', value: slug});
  } else if (node.internal.type === 'MarkdownRemark' && typeof node.slug === 'undefined') {
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path;
    }
    createNodeField({node, name: 'slug', value: slug});

    if (node.frontmatter.tags) {
      const tagSlugs = node
        .frontmatter
        .tags
        .map(tag => `/tags/${_.kebabCase(tag)}/`);
      createNodeField({node, name: 'tagSlugs', value: tagSlugs});
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({node, name: 'categorySlug', value: categorySlug});
    }
  }
};

exports.modifyWebpackConfig = ({config}) => {
  config.merge({
    postcss: [lost()]
  });
};