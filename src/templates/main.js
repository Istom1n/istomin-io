import React from 'react';
import Layout from '../layouts';
import Sidebar from '../components/Sidebar';
import TagTemplateDetails from '../components/TagTemplateDetails';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

class MainTemplate extends React.Component {
  render() {
    const {name} = this.props.pathContext;
    const title = `Все записи тега ${name} - ${data.site.siteMetadata.title}`;

    return (
      <Layout title={title}>
        <Sidebar/> {children()}
      </Layout>
    );
  }
}

export default MainTemplate;

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