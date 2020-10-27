'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
        // '/': {
        //     target: ``,
        //     changeOrigin: true,
        // },
    // },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "~@/styles/index.scss";
        @import "./index.scss";
        `
      },
    }
  },
  configureWebpack: {
    name: 'vue-antd',
    resolve: {
      alias: {
        '@': resolve('src'),
        'com': resolve('src/components'),
        'store': resolve('src/store'),
        'router': resolve('src/router'),
      }
    }
  }
}
