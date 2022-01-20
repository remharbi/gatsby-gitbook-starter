const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://github.com/remharbi',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://remdoc.gatsbyjs.io/',
    title:
      "<a href='/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
      '/mendix',
    ],
    collapsedNav: [
      '/cheatsheets',
      '/codeblock', // add trailing slash if enabled above
      '/gatsbyjs',
      '/mendix',
      '/helpfultools'

    ],
    links: [{ text: 'Github', link: 'https://github.com/remharbi' }],
    frontline: false,
    ignoreIndex: true,
    title: "",
  },
  siteMetadata: {
    title: 'Rem Knowledge Base',
    description: 'Rem Documentation built with mdx.',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'src/components/images/android-chrome-512x512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#8b6dfd',
      theme_color: '#8b6dfd',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/components/images/android-chrome-512x512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
