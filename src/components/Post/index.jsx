import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import format from 'date-fns/format';
import './style.scss';

class Post extends React.Component {
  render() {
    const {title, date, category, description, cover} = this.props.data.node.frontmatter;
    const {slug, categorySlug} = this.props.data.node.fields;
    const {sizes} = this.props.data.node.frontmatter.cover.childImageSharp;

    return (
      <div className="post">
        <div className="post__meta">
          <time className="post__meta-time" dateTime={format(date, 'DD.MM.YYYY')}>
            {format(date, 'DD.MM.YYYY')}
          </time>
          <span className="post__meta-divider"/>
          <span className="post__meta-category" key={categorySlug}>
            <Link to={categorySlug} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <Link to={slug}>
          <Img sizes={sizes}/>
        </Link>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>Читать далее...</Link>
      </div>
    );
  }
}

export default Post;
