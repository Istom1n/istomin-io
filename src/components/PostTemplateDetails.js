import React from 'react';
import Link from 'gatsby-link';
import {format} from 'date-fns'
import styled from 'styled-components';

class PostTemplateDetails extends React.Component {
    render() {
        const {subtitle, author} = this.props.data.site.siteMetadata;
        const post = this.props.data.markdownRemark;
        const tags = post.fields.tagSlugs;

        return (
            <Wrapper>
                <Link className="post-single__home-button" to="/">Все статьи</Link>
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
                        <hr/>
                        <p className="post-single__footer-text">
                            {subtitle}
                            <a
                                href={`https://twitter.com/${author.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer">
                                <br/>
                                <strong>{author.name}</strong>
                                on Twitter
                            </a>
                        </p>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

export default PostTemplateDetails;

const Wrapper = styled.section `
.post-single {
    &__inner {
        max-width: $layout-post-single-max-width;
        padding: 0 15px;
        margin: 0 auto;
    }
    &__title {
        font-size: $typographic-base-font-size * 2;
        max-width: $layout-post-single-width;
        margin-left: auto;
        margin-right: auto;
        font-weight: 600;
        text-align: center;
        @include line-height(1.65);
        @include margin-top(1);
        @include margin-bottom(0);
    }
    &__body {
        & figure {
            @include margin-bottom(1);
            & blockquote {
                font-style: italic;
                text-align: center;
                margin-top: 0;
                @include padding(1, 0);
                & p {
                    max-width: $layout-post-single-width;
                    font-size: $typographic-base-font-size * 1.6817;
                    margin-top: 0;
                    @include margin-bottom(1);
                    @include line-height(1.5);
                }
            }
        }
        & a {
            text-decoration: underline;
        }
        & .gatsby-highlight {
            max-width: $layout-post-single-width;
            margin-left: 15px;
            margin-right: 15px;
            @include margin-bottom(1);
        }
        & :not(div) {
            max-width: $layout-post-single-width;
            margin-left: auto;
            margin-right: auto;
        }
    }
    &__footer {
        max-width: $layout-post-single-width;
        margin-left: 15px;
        margin-right: 15px;
        @include line-height(1);
        @include margin-top(1);
        @include margin-bottom(2);
        &-text {
            & a {
                text-decoration: underline;
            }
        }
    }
    &__date {
        max-width: $layout-post-single-width;
        margin-left: auto;
        margin-right: auto;
    }
    &__tags {
        @include margin-bottom(.5);
        &-list {
            list-style: none;
            margin: 0 -5px;
            padding: 0;
            &-item {
                display: inline-block;
                margin: 10px 5px;
                &-link {
                    background: $color-gray-bg;
                    text-decoration: none;
                    border: 0;
                    border-radius: 3px;
                    color: lighten($color-base, 20%);
                    line-height: $typographic-base-line-height;
                    padding: 8px 16px;
                    &:hover,
                    &:focus {
                        color: $color-base;
                        background: darken($color-gray-bg, 5%);
                        border: 0;
                    }
                }
            }
        }
    }
    &__home-button {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 90px;
        font-size: $typographic-base-font-size;
        padding: 0 16px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: lighten($color-base, 20%);
        background: $color-gray-bg;
        font-weight: 400;
        border-radius: 3px;
        @include margin-top(1);
        &:hover,
        &:focus {
            color: $color-base;
            background: darken($color-gray-bg, 5%);
            border: 0;
        }
    }
}

@include breakpoint-sm {
    .post-single {
        &__footer {
            margin-left: auto;
            margin-right: auto;
        }
        &__body {
            & .gatsby-highlight {
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
}

@include breakpoint-md {
    .post-single {
        &__inner {
            padding: 0;
        }
        &__title {
            font-size: $typographic-base-font-size * 3;
            @include line-height(2.25);
            @include margin-top(2.25);
            @include margin-bottom(1.5);
        }
        &__body {
            font-size: $typographic-base-font-size * 1.125;
            @include line-height(1.125);
            @include margin-bottom(1.125);
            & p {
                font-size: $typographic-base-font-size * 1.125;
                @include line-height(1.125);
                @include margin-bottom(1.125);
            }
        }
        &__home-button {
            position: fixed;
            max-width: auto;
            margin: 0;
            top: 30px;
            left: 30px;
        }
    }
}
`