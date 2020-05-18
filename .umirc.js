const ASSET_PATH = process.env.NODE_ENV === 'development' ? '/' : './';

export default {
  title: 'igroot',
  logo: 'http://fe.baishancloud.com/image/page-logo.png',
  hash: true,
  base: '/components',
  publicPath: ASSET_PATH,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
