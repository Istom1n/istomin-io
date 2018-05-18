import React from 'react';
import Layout from '../layouts'
import PostTemplateDetails from '../components/PostTemplateDetails';
import PageTemplateDetails from '../components/PageTemplateDetails';

import "katex/dist/katex.min.css"

export default({data}) => {

  const {title, subtitle} = this.props.data.site.siteMetadata;
  const post = this.props.data.markdownRemark;
  const {title: postTitle, description: postDescription} = post.frontmatter;
  const description = postDescription !== null
    ? postDescription
    : subtitle;

  return (
    <Layout title={postTitle}>
      <PostTemplateDetails {...this.props}/>
    </Layout>
  );

}

export const pageQuery = graphql `
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`;
