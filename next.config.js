const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})
const mdxConfig = {
  pageExtensions: ['js', 'jsx', 'mdx']
}

const debug = process.env.NODE_ENV !== 'production'
const routeConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  //assetPrefix: '',
  assetPrefix: !debug ? '/calvinchengx.github.io' : '',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
}

module.exports = withPlugins([[withMDX, mdxConfig]], routeConfig)
