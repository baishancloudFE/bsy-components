import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'igroot',
  logo: './logo.png',
  hash: true,
  publicPath: './',
  history: {
    type: 'hash',
  },
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
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
