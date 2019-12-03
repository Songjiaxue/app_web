const path = require('path');
const {
  override,
  addLessLoader,
  addDecoratorsLegacy,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');
const AntdThemeConfig = require('./antd-theme-config.json');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: AntdThemeConfig,
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@util': path.resolve(__dirname, 'src/util'),
  }),
);
