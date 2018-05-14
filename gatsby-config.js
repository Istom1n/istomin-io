module.exports = {
    siteMetadata: {
        url: `https://istomin.io`,
        siteUrl: `https://istomin.io`,
        title: `Istomin's Blog`,
        description: `Everything that seems interesting to me`,
        subtitle: `Simplex sigillum veri.`,
        copyright: `© Ivan Istomin. 2018`,
        menu: [{
                label: `Статьи`,
                path: `/`,
            },
            {
                label: `Обо мне`,
                path: `/about/`,
            },
            {
                label: `Связаться со мной`,
                path: `/contact/`,
            },
        ],
        author: {
            name: `Ivan Istomin`,
            email: `ivan@istomin.im`,
            telegram: `Ivan_Istomin`,
            twitter: `istom1n`,
            github: `Ivan-Istomin`,
            rss: `/feed.xml`,
            json: `/feed.json`,
            vk: `istom1nher0`,
        },
    },
    plugins: [{
        resolve: 'gatsby-plugin-feed-generator',
        options: {
            generator: `GatsbyJS`,
            rss: true, // Set to false to stop rss generation
            json: true, // Set to false to stop json feed generation
            siteQuery: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    author
                  }
                }
              }
            `,
            // The plugin requires frontmatter of date, path(or slug/url), and title at minimum
            feedQuery: `
                {
                  allMarkdownRemark(
                    sort: {order: DESC, fields: [frontmatter___date]}, 
                    limit: 100, 
                    
                    ) {
                    edges {
                      node {
                        html
                        frontmatter {
                          date
                          path
                          title
                        }
                      }
                    }
                  }
                }
                `
        }
    }],
    plugins: [{
        resolve: `gatsby-plugin-robots-txt`,
        options: {
            host: `https://istomin.io`,
            sitemap: `https://istomin.io/sitemap.xml`,
            policy: [{
                userAgent: `*`,
                allow: `/`
            }]
        }
    }],
    // plugins: [{
    //     resolve: `gatsby-plugin-yandex-metrika`,
    //     options: {
    //         trackingId: 48754313,
    //         webvisor: true,
    //         trackHash: true,
    //         version: 2,
    //     },
    // }],
    plugins: [{
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 960,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
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
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`roboto:400,400i,500,700`],
            },
        },
        {
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
                serialize: ({
                        site,
                        allSitePage,
                    }) =>
                    allSitePage.edges.map(edge => ({
                        url: site.siteMetadata.url + edge.node.path,
                        changefreq: `daily`,
                        priority: 0.7,
                    })),
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss-sass`,
        `gatsby-plugin-robots-txt`,
        // {
        //     resolve: `gatsby-plugin-nprogress`,
        //     options: {
        //         // Setting a color is optional.
        //         color: `tomato`,
        //         // Disable the loading spinner.
        //         showSpinner: true,
        //     },
        // },

    ]
}