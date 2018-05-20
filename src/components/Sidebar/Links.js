import React from 'react';
import styled from 'styled-components';
import '../../styles/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {

  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email
    };

    return (
      <Wrapper>
        <div className="links">
          <ul className="links__list">
            <li className="links__list-item">
              <a href={`https://www.twitter.com/${links.twitter}`} target="_blank">
                <i className="icon-twitter"/>
              </a>
            </li>
            <li className="links__list-item">
              <a href={`https://www.github.com/${links.github}`} target="_blank">
                <i className="icon-github"/>
              </a>
            </li>
            <li className="links__list-item">
              <a href={`https://www.vk.com/${links.vk}`} target="_blank">
                <i className="icon-vkontakte"/>
              </a>
            </li>
          </ul>
          <ul className="links__list">
            <li className="links__list-item">
              <a href={`mailto:${links.email}`}>
                <i className="icon-mail"/>
              </a>
            </li>
            <li className="links__list-item">
              <a href={`https://t.me/${links.telegram}`}>
                <i className="icon-paper-plane"/>
              </a>
            </li>
          </ul>
          <ul className="links__list">
            <li className="links__list-item">
              <a href={links.rss}>
                <i className="icon-rss"/>
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    );
  };
}

export default Links;

const Wrapper = styled.section `
.links {
    @include margin-bottom(1);
    &__list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 10px -3px;
        &-item {
            padding: 0;
            margin: 0 3px;
            height: 24px;
            width: 24px;
            line-height: 24px;
            border-radius: 3px;
            text-align: center;
            background: $color-gray-bg;
            & a {
                border: 0;
                & i {
                    font-size: 14px;
                    color: lighten($color-base, 20%);
                }
                &:hover,
                &:focus {
                    & i {
                        color: $color-base;
                    }
                }
            }
        }
    }
}
`;