const path = require('path')
const CracoLessPlugin = require("craco-less");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    // compress: true,
    host: '0.0.0.0',
    port: 4000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    liveReload: false,
    proxy: {
      '/prod': {
        // target: 'http://nest.test.liboscrg.com/', 
        target: 'http://nest.liboscrg.com/', 
        // pathRewrite: { '^/api': '' }, // 路径重写
        changeOrigin: true,//默认情况下，代理时会保留主机头的来源，可以将 changeOrigin 设置为 true 以覆盖此行为。
        secure: false //接受在 HTTPS 上运行且证书无效的后端服务器
      }
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


