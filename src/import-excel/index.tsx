import React, { useCallback, useMemo } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import XLSX from 'xlsx';
import { RcFile } from 'antd/lib/upload/interface';

interface ImportExcelProps {
  rules: { [key: string]: string };
  onFinish: (data: any[]) => void;
}

const ImportExcel: React.FC<ImportExcelProps> = ({
  children,
  rules,
  onFinish,
}) => {
  const translate = useCallback(
    (data) => {
      const reversal = new Map();

      Object.keys(rules).forEach((key) => {
        if (!reversal.has(rules[key])) {
          reversal.set(rules[key], key);
        }
      });

      const head = data.shift();
      const relation: Array<{ key: string; index: number }> = [];

      head.forEach((item: string, index: number) => {
        if (reversal.has(item)) {
          relation.push({ key: reversal.get(item), index });
        }
      });

      const result: any[] = [];
      data.forEach((arr: Array<string | number>) => {
        const row: { [key: string]: any } = {};
        relation.forEach(({ key, index }) => {
          row[key] = arr[index];
        });
        result.push(row);
      });
      message.success('导入数据成功！');
      return result;
    },
    [rules],
  );

  const beforeUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      // @ts-ignore
      const { result } = e.target;
      const workbook = XLSX.read(result, {
        type: 'binary',
      });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (jsonArray.length > 0) {
        onFinish(translate(jsonArray));
      }
    };
    reader.readAsBinaryString(file);
    return false;
  };

  const childrenRender = useMemo(() => {
    if (children != null) {
      return children;
    }
    return (
      <Button>
        <UploadOutlined /> 导入Excel
      </Button>
    );
  }, [children]);

  return (
    <Upload
      accept=".xls,.xlsx,application/vnd.ms-excel"
      beforeUpload={beforeUpload}
      showUploadList={false}
    >
      {childrenRender}
    </Upload>
  );
};

export default ImportExcel;
