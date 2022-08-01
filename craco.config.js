const CracoLessPlugin = require('craco-less');
const path = require('path');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#333' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    devtool: 'source-map',
    devServer: {
      // proxy: {
      //   '/': {
      //     target: 'https://netease-cloud-music-api-zeta-sand.vercel.app',
      //     changeOrigin: true
      //   }
      // }
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components')
    }
  }
};
