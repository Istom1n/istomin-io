module.exports = {
    siteMetadata: {
        url: `https://istomin.io`,
        siteUrl: `https://istomin.io`,
        title: `Istomin's Blog`,
        description: `Everything that seems interesting to me`,
        subtitle: `Simplex sigillum veri.`,
        copyright: `© Ivan Istomin. 2018`,
        menu: [
            {
                label: `Статьи`,
                path: `/`
            }, {
                label: `Обо мне`,
                path: `/about/`
            }, {
                label: `Связаться со мной`,
                path: `/contact/`
            }
        ],
        author: {
            name: `Ivan Istomin`,
            email: `ivan@istomin.im`,
            telegram: `Ivan_Istomin`,
            twitter: `istom1n`,
            github: `Ivan-Istomin`,
            rss: `/feed.xml`,
            json: `/feed.json`,
            vk: `istom1nher0`
        }
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`
            }
        }, {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 960
                        }
                    }, {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`
                        }
                    },
                    `gatsby-remark-katex`,
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`
                ]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`roboto:400,400i,500,700`]
            }
        }, {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: (`
            {
                site {
                siteMetadata {
                    url
                }
                }
                allSitePage(
                filter: {
                    path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
                }) {
                    edges {
                    node {
                        path
                    }
                    }
                }
            }`),
                output: `/sitemap.xml`,
                serialize: ({site, allSitePage}) => allSitePage
                    .edges
                    .map(edge => ({
                        url: site.siteMetadata.url + edge.node.path,
                        changefreq: `daily`,
                        priority: 0.7
                    }))
            }
        }, {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: `https://istomin.io`,
                sitemap: `https://istomin.io/sitemap.xml`,
                policy: [
                    {
                        userAgent: `*`,
                        allow: `/`
                    }
                ]
            }
        }, {
            resolve: `gatsby-plugin-yandex-metrika`,
            options: {
                trackingId: 48754313,
                webvisor: true,
                trackHash: true
            }
        }, {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
                feeds: [
                    {
                        serialize: ({
                            query: {
                                site,
                                allMarkdownRemark
                            }
                        }) => {
                            return allMarkdownRemark
                                .edges
                                .map(edge => {
                                    return Object.assign({}, edge.node.frontmatter, {
                                        description: edge.node.excerpt,
                                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                        custom_elements: [
                                            {
                                                "content:encoded": edge.node.html
                                            }
                                        ]
                                    });
                                });
                        },
                        query: `
                {
                  allMarkdownRemark(
                    limit: 1000,
                    sort: { order: DESC, fields: [frontmatter___date] },
                    filter: {frontmatter: { draft: { ne: true } }}
                  ) {
                    edges {
                      node {
                        excerpt
                        html
                        fields { slug }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                }
              `,
                        output: "/rss.xml"
                    }
                ]
            }
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-postcss-sass`,
        `gatsby-plugin-styled-components`
    ]
}