import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Menu from './Menu';
import Links from './Links';
import profilePic from '../assets/images/avatar.jpg';



class Sidebar extends React.Component {
  render() {
    const title = this.props.site.siteMetadata.title;
    const {author, subtitle, copyright, menu} = this.props.site.siteMetadata;
    let isHomePage = true;

    const Wrapper = styled.section `
      @import "../assets/scss/variables";
      @import "../assets/scss/mixins";

      .sidebar {
          width: 100%;
          &__inner {
              position: relative;
              padding: 25px 20px 0;
          }
          &__author {
              &-photo {
                  display: inline-block;
                  margin-bottom: 0;
                  border-radius: 50%;
                  background-clip: padding-box;
              }
              &-title {
                  font-size: $typographic-base-font-size * 1.125;
                  font-weight: 500;
                  @include line-height(1.125);
                  @include margin(.5, 0, .5, 0);
                  &-link {
                      color: $color-base;
                      &:hover,
                      &:focus {
                          color: $color-base;
                      }
                  }
              }
              &-subtitle {
                  color: $color-gray;
                  @include line-height(1);
                  @include margin-bottom(1);
              }
          }
          &__copyright {
              color: lighten($color-gray, 18%);
              font-size: $typographic-small-font-size;
          }
      }

      @include breakpoint-sm {
          .sidebar {
              lost-column: 5/12;
              &__inner {
                  padding: 30px 20px 0;
                  &:after {
                      background: $color-gray-border;
                      background: linear-gradient(to bottom, $color-gray-border 0%, $color-gray-border 48%, $color-white 100%);
                      position: absolute;
                      content: "";
                      width: 1px;
                      height: 540px;
                      top: 30px;
                      right: -10px;
                      bottom: 0;
                  }
              }
          }
      }

      @include breakpoint-md {
          .sidebar {
              lost-column: 1/3;
              &__inner {
                  padding: 40px;
              }
          }
      }
      `;

    return (
      <Wrapper>
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            <div>
              <Link to="/">
                <img
                  src={profilePic}
                  className="sidebar__author-photo"
                  width="75"
                  height="75"
                  alt={author.name}/>
              </Link>
              {isHomePage
                ? (
                  <h1 className="sidebar__author-title">
                    <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
                  </h1>
                )
                : <h2 className="sidebar__author-title">
                  <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
                </h2>
              }
              <p className="sidebar__author-subtitle">{subtitle}</p>
            </div>
          </div>
          <div>
            <Menu data={menu}/>
            <Links data={author}/>
            <p className="sidebar__copyright">
              {copyright}
            </p>
          </div>
        </div>
      </div>
      </Wrapper>
    );
  }
}

export default Sidebar;

export const pageQuery = graphql `
  query SidebarQuery {
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
  }
`;

