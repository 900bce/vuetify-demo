const path = require('path');
const pathResolve = (...pathName) => path.resolve(__dirname, ...pathName);

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'Views': pathResolve('src', 'views'),
        'Components': pathResolve('src', 'components')
      }
    },
  }
}