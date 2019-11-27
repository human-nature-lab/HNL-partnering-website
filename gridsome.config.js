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
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
}
