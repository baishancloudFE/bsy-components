(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14, 13],
  {
    'K+nK': function (e, n) {
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = a;
    },
    gypW: function (e, n, a) {
      'use strict';
      a.r(n);
      a('g9YV');
      var t = a('wCAj'),
        l = (a('14J3'), a('BMrR')),
        r = (a('+L6B'), a('2/Rp')),
        c = a('q1tI'),
        d = a.n(c),
        m = a('/7QA'),
        s = [
          { title: '\u59d3\u540d', dataIndex: 'name', key: 'name' },
          { title: '\u5e74\u9f84', dataIndex: 'age', key: 'age' },
          { title: '\u4f4f\u5740', dataIndex: 'address', key: 'address' },
        ],
        o = [
          {
            name: '\u80e1\u5f66\u658c',
            age: 32,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
          {
            name: '\u80e1\u5f66\u7956',
            age: 42,
            address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',
          },
        ],
        u = { name: '\u540d\u5b57', age: '\u5e74\u9f84', address: '\u5730\u5740' },
        i = () => {
          var e = () => {
              m['b'].open({
                filename: '\u6d4b\u8bd5\u4e0b\u8f7ddemo',
                rules: u,
                data: o,
                screening: !1,
              });
            },
            n = (e) => {
              console.log(e);
            };
          return d.a.createElement(
            'div',
            null,
            d.a.createElement(
              l['a'],
              { justify: 'end', style: { marginBottom: 8 } },
              d.a.createElement(m['e'], { rules: u, onFinish: n }),
              d.a.createElement(
                r['a'],
                { type: 'primary', onClick: e, style: { marginLeft: 12 } },
                '\u70b9\u51fb\u4e0b\u8f7d',
              ),
            ),
            d.a.createElement(t['a'], { dataSource: o, columns: s }),
          );
        };
      n['default'] = i;
    },
    v5wL: function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('0Owb'),
        l = a('q1tI'),
        r = a.n(l),
        c = (a('B2uJ'), a('+su7'), a('qOys'), a('5Yjd')),
        d = a.n(c),
        m = r.a.memo(function () {
          var e = a('K+nK'),
            n = e(a('q1tI')),
            t = e(a('gypW')),
            l = function () {
              return n['default'].createElement(t['default'], null);
            };
          return n['default'].createElement(l);
        });
      n['default'] = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h1',
              { id: 'importexcel' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#importexcel' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ImportExcel',
            ),
            r.a.createElement('p', null, '\u5bfc\u5165 excel \u6587\u4ef6'),
            r.a.createElement(
              'h3',
              { id: 'examples' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#examples' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Examples',
            ),
          ),
          r.a.createElement(
            d.a,
            Object(t['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { ImportExcel, ExportExcel } from 'bsy-components';\nimport { Button, Row, Table } from 'antd';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: '\u5e74\u9f84',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: '\u4f4f\u5740',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\nconst data = [\n  {\n    name: '\u80e1\u5f66\u658c',\n    age: 32,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n  {\n    name: '\u80e1\u5f66\u7956',\n    age: 42,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n];\n\nconst rules = {\n  name: '\u540d\u5b57',\n  age: '\u5e74\u9f84',\n  address: '\u5730\u5740',\n};\n\nconst Demo = () => {\n  const download = () => {\n    ExportExcel.open({\n      filename: '\u6d4b\u8bd5\u4e0b\u8f7ddemo',\n      rules,\n      data,\n      screening: false,\n    });\n  };\n\n  const onFinish = (data) => {\n    console.log(data);\n  };\n\n  return (\n    <div>\n      <Row justify=\"end\" style={{ marginBottom: 8 }}>\n        <ImportExcel rules={rules} onFinish={onFinish} />\n        <Button type=\"primary\" onClick={download} style={{ marginLeft: 12 }}>\n          \u70b9\u51fb\u4e0b\u8f7d\n        </Button>\n      </Row>\n      <Table dataSource={data} columns={columns} />\n    </div>\n  );\n};\n\nexport default Demo;\n",
                },
              },
              {
                path: '/_demos/index-2',
                dependencies: { antd: '4.4.1', 'bsy-components': '0.7.1' },
                files: {},
              },
            ),
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u53c2\u6570' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53c2\u6570' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53c2\u6570',
            ),
            r.a.createElement(
              'p',
              null,
              '*\u6ce8\uff1a\u53ef\u9009\u62e9\u95ed\u5408\u6807\u7b7e\u6216\u81ea\u5b9a\u4e49 children,\u540c antd \u4e2d\u7684 Upload',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u53c2\u6570'),
                  r.a.createElement('th', null, '\u662f\u5426\u5fc5\u586b'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'rules'),
                  r.a.createElement('td', null, '\u5fc5\u586b'),
                  r.a.createElement(
                    'td',
                    null,
                    'data \u7684 key \u503c\u5bf9\u5e94\u7684\u4e2d\u6587\u540d\u79f0\u63cf\u8ff0',
                  ),
                  r.a.createElement('td', null, '{', '[key:string]: any', '}'),
                  r.a.createElement('td', null, '{}'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onFinish'),
                  r.a.createElement('td', null, '\u5fc5\u586b'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5bfc\u5165\u6587\u4ef6\u540e\u4f9d\u636e rules \u8f6c\u6362\u7684\u6570\u636e',
                  ),
                  r.a.createElement('td', null, '(data: any[]) => void'),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
