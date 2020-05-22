import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'igroot',
  logo: 'http://fe.baishancloud.com/image/page-logo.png',
  hash: true,
  base: '/bsy-components',
  outputPath: './dist',
  dynamicImport: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
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
});
