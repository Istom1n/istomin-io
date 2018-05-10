import React from 'react';
import Helmet from 'react-helmet';
import Avatar from '../assets/images/avatar.jpg'
import FaviconIco from '../assets/favicon/favicon.ico'
import AppleIcon from '../assets/favicon/apple-touch-icon.png'
import Fav32 from '../assets/favicon/favicon-32x32.png'
import Fav16 from '../assets/favicon/favicon-16x16.png'
import SafariTab from '../assets/favicon/safari-pinned-tab.svg'
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {

    const { title: t, children } = this.props;

    return (
        <Helmet
          key="app-head"
          defaultTitle="Istomin's Blog">

          <meta charset="utf-8" />

          <title>{t} | Istomin's Blog</title>

          <meta name="description" content="Everything that seems interesting to me" />
          <meta name="image" content={Avatar} />

          <meta itemprop="name" content={t} />
          <meta itemprop="description" content="Everything that seems interesting to me" />
          <meta itemprop="image" content={Avatar} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={t} />
          <meta name="twitter:description" content="Everything that seems interesting to me" />
          <meta name="twitter:site" content="https://twitter.com/istom1n" />
          <meta name="twitter:image:src" content={Avatar} />

          <meta name="og:title" content={t} />
          <meta name="og:description" content={t} />
          <meta name="og:image" content={Avatar} />
          <meta name="og:locale" content="ru" />
          <meta name="og:type" content="website" />

          <link rel="icon" type="image/x-icon" href={FaviconIco} />
          <link rel="apple-touch-icon" sizes="120x120" href={AppleIcon} />
          <link rel="icon" type="image/png" sizes="32x32" href={Fav32} />
          <link rel="icon" type="image/png" sizes="16x16" href={Fav16} />
          {/* <link rel="manifest" href={SiteManifest}/> */}
          <link rel="mask-icon" href={SafariTab} color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>,
        <div className="layout">
          {children}
        </div>
    );
  }
}

export default Layout;