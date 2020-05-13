import XLSX from 'xlsx';

export type Rule = { [key: string]: any };

function download(rules: Rule, data: Array<Rule>, fileName: string) {
  const newData = data.map((item) => {
    return Object.keys(item).reduce((res: Rule, key) => {
      if (key in rules) {
        const value = String(rules[key]);
        res[value] = item[key];
      }
      return res;
    }, {});
  });
  const sheet = XLSX.utils.json_to_sheet(newData);
  const ws = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(ws, sheet, 'sheet1');

  // 将workbook转化为blob对象
  const wbout = XLSX.write(ws, {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table
    type: 'binary',
  });

  // 将字符串转ArrayBuffer
  const buffer = () => {
    const buf = new ArrayBuffer(wbout.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== wbout.length; ++i)
      view[i] = wbout.charCodeAt(i) & 0xff;
    return buf;
  };

  // 创建a标签并模拟鼠标点击事件
  const a = document.createElement('a');
  a.href = URL.createObjectURL(
    new Blob([buffer()], {
      type: 'application/octet-stream',
    }),
  );
  a.download = `${fileName || 'Excel表格'}.xlsx`;
  a.dispatchEvent(new MouseEvent('click'));
}

export default download;
