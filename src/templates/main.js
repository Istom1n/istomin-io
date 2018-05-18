import React from 'react';
import Layout from '../layouts';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

export default({children, data}) => {

    const {name} = this.props.pathContext;

    return (
        <Layout title={`Все записи тега "${tag}" - ${data.site.siteMetadata.title}`}>
            <Sidebar/> {Children()}
        </Layout>
    );

}

export const pageQuery = graphql `
  query pathContext($name: String, $type: String) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { tags: { in: [$name] }, layout: { eq: $type }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;
