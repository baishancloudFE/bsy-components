export default {
  title: 'igroot',
  logo: 'http://fe.baishancloud.com/image/page-logo.png',
  hash: true,
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};
