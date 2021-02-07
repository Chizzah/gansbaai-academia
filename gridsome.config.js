// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

require("dotenv").config();
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  siteName: "Gansbaai Academia",
  siteUrl: "https://www.gansbaai-academia.co.za",
  plugins: [
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        exclude: ["/exclude-me"],
        config: {},
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",

      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false,
      },
    },
    {
      use: "@gridsome/source-contentful",
      options: {
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        space: process.env.CONTENTFUL_SPACE,
        host: "cdn.contentful.com",
        typeName: "Contentful",
      },
    },
  ],
  templates: {
    // ContentfulArticle: '/articles/:slug'
    ContentfulLifeScience: "/lifescience/:title",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, autoprefixer],
      },
    },
  },
};
