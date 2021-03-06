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
    ContentfulNews: "/news/:title",
    // ContentfulLifeScience: "/lifescience/:title",
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind, autoprefixer],
      },
    },
  },
};
