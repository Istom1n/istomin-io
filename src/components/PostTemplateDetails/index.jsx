import React from 'react';
import Link from 'gatsby-link';
import format from 'date-fns/format';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const {subtitle, author} = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">Все статьи</Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) => (
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div
              className="post-single__body"
              dangerouslySetInnerHTML={{
              __html: post.html
            }}/>
            <div className="post-single__date">
              <em>Опубликовано {format(post.frontmatter.date, 'DD.MM.YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr/>
            <p className="post-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.twitter}`}
                target="_blank"
                rel="noopener noreferrer">
                <br/>
                <strong>
                  {author.name + ' on Twitter'}
                </strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
