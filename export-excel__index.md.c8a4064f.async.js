(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7, 6],
  {
    '35uL': function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        l = t('q1tI'),
        r = t.n(l),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        m = t.n(c),
        u = r.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('Sfby')),
            l = function () {
              return n['default'].createElement(a['default'], null);
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
              { id: 'exportexcel' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#exportexcel' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ExportExcel',
            ),
            r.a.createElement('p', null, '\u5bfc\u51fa excel \u6587\u4ef6'),
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
            m.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button } from 'antd';\nimport { ExportExcel } from 'bsy-components';\n\nconst data = [\n  {\n    name: '\u80e1\u5f66\u658c',\n    age: 32,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n  {\n    name: '\u80e1\u5f66\u7956',\n    age: 42,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n];\n\nconst rules = {\n  name: '\u540d\u5b57',\n  age: '\u5e74\u9f84',\n  address: '\u5730\u5740',\n};\n\nconst Demo = () => {\n  const download = () => {\n    ExportExcel.open({\n      filename: '\u6d4b\u8bd5\u4e0b\u8f7ddemo',\n      rules,\n      data,\n      screening: true,\n    });\n  };\n\n  return (\n    <Button type=\"primary\" onClick={download}>\n      \u70b9\u51fb\u4e0b\u8f7d\n    </Button>\n  );\n};\n\nexport default Demo;\n",
                },
              },
              {
                path: '/_demos/index',
                dependencies: { antd: '4.4.1', 'bsy-components': '0.7.1' },
                files: {},
              },
            ),
            r.a.createElement(u, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: 'open-\u65b9\u6cd5\u53c2\u6570' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#open-\u65b9\u6cd5\u53c2\u6570' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'open \u65b9\u6cd5\u53c2\u6570',
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
                  r.a.createElement('td', null, 'data'),
                  r.a.createElement('td', null, '\u5fc5\u586b'),
                  r.a.createElement('td', null, '\u6570\u636e\u6e90'),
                  r.a.createElement('td', null, 'array<', '{', '[key:string]:any', '}', '>'),
                  r.a.createElement('td', null, '[]'),
                ),
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
                  r.a.createElement('td', null, '{', '[key:string]:any', '}'),
                  r.a.createElement('td', null, '{}'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'filename'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement('td', null, '\u6587\u4ef6\u540d\u79f0'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '"excel \u8868\u683c"'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'screening'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u9700\u8981\u7b5b\u9009(\u503c\u4e3a false \u65f6\u76f4\u63a5\u4e0b\u8f7d excel)',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'true'),
                ),
              ),
            ),
          ),
        );
      };
    },
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t;
    },
    Sfby: function (e, n, t) {
      'use strict';
      t.r(n);
      t('+L6B');
      var a = t('2/Rp'),
        l = t('q1tI'),
        r = t.n(l),
        c = t('/7QA'),
        m = [
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
        d = () => {
          var e = () => {
            c['b'].open({
              filename: '\u6d4b\u8bd5\u4e0b\u8f7ddemo',
              rules: u,
              data: m,
              screening: !0,
            });
          };
          return r.a.createElement(
            a['a'],
            { type: 'primary', onClick: e },
            '\u70b9\u51fb\u4e0b\u8f7d',
          );
        };
      n['default'] = d;
    },
  },
]);
