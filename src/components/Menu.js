import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Nav = styled.nav `
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.menu {
    @include margin-bottom(1);
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        &-item {
            padding: 0;
            margin: 10px 0;
            &-link {
                font-size: $typographic-base-font-size;
                color: $typographic-base-font-color;
                font-weight: 400;
                border: 0;
                &:hover,
                &:focus {
                    color: $color-primary;
                    border-bottom: 1px solid $color-primary;
                }
                &--active {
                    color: $color-base;
                    border-bottom: 1px solid $color-base;
                }
            }
        }
    }
}
`

class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          {this.props.data.map(item => (
            <li className="menu__list-item" key={item.path}>
              <Link
                exact
                to={item.path}
                className="menu__list-item-link"
                activeClassName="menu__list-item-link menu__list-item-link--active">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Menu;

