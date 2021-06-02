module.exports = {
  siteMetadata: {
    title: "New Portfolio",
      menuLinks:[
        {
          name:'Home',
          link: '/',
        },
        {
          name:'About',
          link: '/about'
        }
      ]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
};
