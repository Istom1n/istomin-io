import React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';

class PageTemplateDetails extends React.Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">{data.markdownRemark.frontmatter.title}</h1>
              <div
                className="page__body"
                dangerouslySetInnerHTML={{
                __html: page.html
              }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageTemplateDetails;

const Div = styled.div `
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.page {
    @include margin-bottom(2);
    &__title {
        font-size: $typographic-base-font-size * 2.5;
        font-weight: 500;
        @include line-height(2);
        @include margin-top(0);
        @include margin-bottom(1.45);
    }
    &__body {
        font-size: $typographic-base-font-size;
        @include line-height(1);
        @include margin(0, 0, 1);
    }
}
`