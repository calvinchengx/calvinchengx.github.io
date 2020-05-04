const withPlugins = require('next-compose-plugins')

// next
const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  // exportPathMap: function () {
  //   return {
  //     '/': { page: '/' }
  //   }
  // },
  assetPrefix: !debug ? '' : ''
  // webpack: (config, { dev }) => {
  //   // Perform customizations to webpack config
  //   // console.log('webpack');
  //   // console.log(config.module.rules, dev);
  //   config.module.rules = config.module.rules.map((rule) => {
  //     if (rule.loader === 'babel-loader') {
  //       rule.options.cacheDirectory = false
  //     }
  //     return rule
  //   })
  //   // Important: return the modified config
  //   return config
  // }
}

// mdx
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})

module.exports = withPlugins([withMDX], nextConfig)
