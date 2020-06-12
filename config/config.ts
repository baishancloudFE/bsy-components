import { defineConfig } from 'dumi';

const ASSET_PATH = process.env.NODE_ENV === 'development' ? '/' : '/bsy-components/';

const LOGO_PATH =
  process.env.NODE_ENV === 'development'
    ? '/logo.png'
    : 'https://baishancloudfe.github.io/bsy-components/logo.png';

export default defineConfig({
  title: 'igroot',
  logo: LOGO_PATH,
  hash: true,
  base: ASSET_PATH,
  outputPath: './dist',
  publicPath: ASSET_PATH,
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
