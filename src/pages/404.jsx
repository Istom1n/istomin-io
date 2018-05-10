import React from 'react';
import Sidebar from '../components/Sidebar';

class NotFoundRoute extends React.Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Три цифры, две из которых равны и сумма их всех равно 8</h1>
              <div className="page__body">
                <p>Как вы тут очутились, я вообще не знаю, идите <a href="/">на главную</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFoundRoute;

export const pageQuery = graphql`
  query NotFoundQuery {
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
