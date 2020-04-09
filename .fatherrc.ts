export default {
  entry: 'src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'asd',
    minFile: false,
  },
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
    [
      'import',
      { libraryName: '@umijs/hooks', libraryDirectory: 'es' },
      'umi-hooks',
    ],
  ],
};
