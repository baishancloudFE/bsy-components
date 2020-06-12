import { defineConfig } from 'dumi';

const ASSET_PATH = process.env.NODE_ENV === 'development' ? '/' : '/components/';

const LOGO_PATH =
  process.env.NODE_ENV === 'development'
    ? '/logo.png'
    : 'http://fe.baishancloud.com/components/logo.png';

export default defineConfig({
  title: 'igroot',
  logo: LOGO_PATH,
  hash: true,
  publicPath: './',
  history: {
    type: 'hash',
  },
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  dynamicImport: {},
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
