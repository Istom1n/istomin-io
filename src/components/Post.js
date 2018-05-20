import React from 'react';
import Link from 'gatsby-link';
import {format} from 'date-fns'
import styled from 'styled-components';

class Post extends React.Component {
    render() {
        const {title, date, category, description, cover} = this.props.data.node.frontmatter;
        const {slug, categorySlug} = this.props.data.node.fields;

        return (
            <Wrapper>
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
                    <img src={cover}/>
                    <p className="post__description">{description}</p>
                    <Link className="post__readmore" to={slug}>Читать далее...</Link>
                </div>
            </Wrapper>
        );
    }
}

export default Post;

const Wrapper = styled.section `
.post {
    @include margin-bottom(1.25);
    &:last-child {
        @include margin-bottom(.5);
    }
    &__title {
        font-size: $typographic-base-font-size * 1.6875;
        @include line-height(1.5);
        @include margin-top(0);
        @include margin-bottom(.5);
        &-link {
            color: $color-base;
            &:hover,
            &:focus {
                color: $color-base;
                border-bottom: 1px solid $color-base;
            }
        }
    }
    &__description {
        font-size: $typographic-base-font-size;
        @include line-height(1);
        @include margin-bottom(.75);
    }
    &__meta {
        &-time {
            font-size: $typographic-small-font-size;
            color: $color-base;
            font-weight: 500;
            text-transform: uppercase;
        }
        &-divider {
            margin: 0 5px;
        }
        &-category {
            &-link {
                font-size: $typographic-small-font-size;
                color: $color-secondary;
                font-weight: 500;
                text-transform: uppercase;
                &:hover,
                &:focus {
                    color: $color-primary;
                }
            }
        }
    }
    &__readmore {
        font-size: $typographic-base-font-size;
        color: $color-primary;
        &:hover,
        &:focus {
            color: $color-primary;
            border-bottom: 1px solid $color-primary;
        }
    }
}`;