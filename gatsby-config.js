module.exports = {
  siteMetadata: {
    title: 'Daniel Vernon - Designer',
    subtitle: `Test`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'url-loader',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
    	resolve: 'gatsby-source-contentful',
    	options: {
    	  spaceId: '09cgtthspm3i',
    	  accessToken: '24532af728cdd34eb6ae361ac9a20f73ac02574124d600dcc5f6be722aba52bb'
    	}
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
          baseUrl: "danielvernon.com",
          protocol: "http",
          hostingWPCOM: false,
          useACF: true,
          verboseOutput: true
      }
    }
  ],
};
