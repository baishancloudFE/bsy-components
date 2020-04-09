export default {
  title: 'igroot',
  logo: 'http://fe.baishancloud.com/image/page-logo.png',
  hash: true,
  // base: '/show',
  publicPath: './',
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
