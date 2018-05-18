import React from 'react';
import Helmet from 'react-helmet';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';

export default({data}) => {
  const items = [];
  const {title, subtitle} = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;
  posts.forEach((post) => {
    items.push(<Post data={post} key={post.node.fields.slug}/>);
  });

  return (
    <div className="layout">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={subtitle}/>
      </Helmet>
      <Sidebar {...data}/>
      <div className="content">
        <div className="content__inner">
          {items}
        </div>
      </div>
    </div>
  );
}

export const query = graphql `
  query LayoutQuery {
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
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
