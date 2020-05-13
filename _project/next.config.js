const withPlugins = require('next-compose-plugins')
const withOffline = require('next-offline')

const withOfflineConfig = {
  workboxOpts: {
    swDest: 'calvinchengx.github.io/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: '/calvinchengx.github.io/service-worker.js',
          destination: '/_next/static/service-worker.js'
        }
      ]
    }
  }
}

// next
const debug = process.env.NODE_ENV !== 'production'
const nextConfig = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: !debug ? '' : '',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
    return config
  }
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
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/
// })({
//   pageExtensions: ['js', 'jsx', 'md', 'mdx']
// })

// module.exports = withPlugins([withMDX], nextConfig)
module.exports = withPlugins([[withOffline, withOfflineConfig]], nextConfig)
