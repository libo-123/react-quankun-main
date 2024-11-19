const path = require('path')
const CracoLessPlugin = require("craco-less");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" }, //主题颜色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
      chunks: 'all',
      name: false
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    }
  }
}


