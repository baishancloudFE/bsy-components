const ASSET_PATH = process.env.NODE_ENV === 'development' ? '/' : './';

export default {
  title: 'igroot',
  logo: 'http://fe.baishancloud.com/image/page-logo.png',
  hash: true,
  base: '/components',
  publicPath: ASSET_PATH,
  menus: {
    '/': [
      {
        title: '轻松上手',
      },
      {
        title: '数据录入',
        children: ['entry/select-tags'],
      },
      {
        title: '数据展示',
        children: ['show/search-tree'],
      },
      {
        title: '其他组件',
        children: ['other/with-login'],
      },
    ],
  },
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
