// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Human Nature Lab at Yale',
  siteUrl: 'giving.humannaturelab.net',
  siteDescription: require('./data/projects.json').description,
  icon: {
    favicon: './assets/favicon.png'
  },
  templates: {
    Project: '/project/:title'
  },
  chainWebpack (config) {
    config.stats('verbose')
  },
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: 'data/projects/**/*.md',
      typeName: 'Project'
    }
  }, {
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  }, {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: false,
      shouldImport: true,
      // shouldTimeTravel: false,
      // shouldPurgeUnusedKeyframes: isProd,
    }
  }, {
    use: 'gridsome-plugin-typescript',
  }, {
    use: '@gridsome/plugin-sitemap',
    options: {
      '/project/*': {
        changefreq: 'weekly',
        priority: 0.5
      }
    }
  }],
  transformers: {
    remark: {
      grayMatter: {excerpt: true},
      plugins: [
        '@gridsome/remark-prismjs', 

        [require('./plugins/gridsome-remark-customize'), {
          selectors: {
            className: {
              h1: 'text-5xl mb-2 mt-6',
              h2: 'text-4xl mb-2 mt-6',
              h3: 'text-3xl mb-2 mt-5',
              h4: 'text-2xl mb-2 mt-4',
              h5: 'text-xl mb-2 mt-4',
              link: 'underline text-blue-500 hover:no-underline',
              linkReference: 'underline text-blue-500 hover:no-underline',
              paragraph: 'py-4'
            }
          }
        }]
      ]
    }
  }
}
