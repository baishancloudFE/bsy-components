const path = require('path');
const klawSync = require('klaw-sync');
const fs = require('fs');

const filesRegex = /.d.ts$/;

const declarePaths = klawSync(path.resolve(__dirname, '../dist'), {
  nodir: true,
}).filter(pathItem => filesRegex.test(pathItem.path));

declarePaths.forEach(pathItem => {
  const esPath = pathItem.path.replace('/dist', '/es');
  const libPath = pathItem.path.replace('/dist', '/lib');
  fs.copyFileSync(pathItem.path, esPath);
  fs.copyFileSync(pathItem.path, libPath);
});

console.log('.d.ts 文件拷贝成功！');
