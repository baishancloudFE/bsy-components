export default {
  entry: 'src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@umijs/hooks',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
      'umi-hooks',
    ],
  ],
};
