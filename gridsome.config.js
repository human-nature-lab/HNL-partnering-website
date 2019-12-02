// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Human Nature Lab at Yale',
  siteDescription: '',
  icons: {
    favicon: './static/favicon.ico'
  },
  templates: {
    Project: '/project/:title'
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
      id: ''
    }
  }, {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: true,
      shouldImport: true,
      shouldTimeTravel: true,
      shouldPurgeUnusedKeyframes: true,
    }
  }, {
    use: 'gridsome-plugin-typescript',
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
              paragraph: 'py-4'
            }
          }
        }]
      ]
    }
  }
}
