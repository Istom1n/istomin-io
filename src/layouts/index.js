import React from "react";
import Helmet from "react-helmet";
import Avatar from "../../static/images/avatar.jpg";
import FaviconIco from "../../static/favicon/favicon.ico";
import AppleIcon from "../../static/favicon/apple-touch-icon.png";
import Fav32 from "../../static/favicon/favicon-32x32.png";
import Fav16 from "../../static/favicon/favicon-16x16.png";
import SafariTab from "../../static/favicon/safari-pinned-tab.svg";
import Sidebar from "../components/Sidebar";
import "./index.scss";

class Template extends React.Component {
  render() {
    const title = "Istomin's Blog";
    const {location, children} = this.props;
    let isSidebarShow = location.pathname === '/';

    const SiteManifest = "../../static/favicon/site.webmanifest";

    return (
      <div>
        <Helmet key="app-head" defaultTitle="Istomin's Blog">
          <meta charset="utf-8"/>

          <title>{title}</title>

          <meta name="description" content="Everything that seems interesting to me"/>

          <meta itemprop="name" content={title}/>
          <meta itemprop="description" content="Everything that seems interesting to me"/>
          <meta itemprop="image" content={Avatar}/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content={title}/>
          <meta
            name="twitter:description"
            content="Everything that seems interesting to me"/>
          <meta name="twitter:site" content="https://twitter.com/istom1n"/>
          <meta name="twitter:image:src" content={Avatar}/>

          <meta name="og:title" content={title}/>
          <meta name="og:description" content={title}/>
          <meta name="og:image" content={Avatar}/>
          <meta name="og:locale" content="ru"/>
          <meta name="og:type" content="website"/>

          <link rel="icon" type="image/x-icon" href={FaviconIco}/>
          <link rel="apple-touch-icon" sizes="120x120" href={AppleIcon}/>
          <link rel="icon" type="image/png" sizes="32x32" href={Fav32}/>
          <link rel="icon" type="image/png" sizes="16x16" href={Fav16}/>
          <link rel="manifest" href={SiteManifest}/>
          <link rel="mask-icon" href={SafariTab} color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#00aba9"/>
          <meta name="theme-color" content="#ffffff"/>
        </Helmet>
        <Sidebar {...this.props}/>
        <div className="layout">{children()}</div>
      </div>
    );
  }
}

export default Template;

export const query = graphql `
  query IndexQuery {
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
