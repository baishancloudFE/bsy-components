(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4, 3],
  {
    'K+nK': function (e, n) {
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = a;
    },
    oXp2: function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('0Owb'),
        l = a('q1tI'),
        m = a.n(l),
        r = (a('B2uJ'), a('+su7'), a('qOys')),
        c = a.n(r),
        u = a('5Yjd'),
        i = a.n(u),
        o = m.a.memo(function () {
          var e = a('K+nK'),
            n = e(a('q1tI')),
            t = e(a('t81u')),
            l = function () {
              return n['default'].createElement(t['default'], null);
            };
          return n['default'].createElement(l);
        });
      n['default'] = function () {
        return m.a.createElement(
          m.a.Fragment,
          null,
          m.a.createElement(
            'div',
            { className: 'markdown' },
            m.a.createElement(
              'h1',
              { id: 'chinamap' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#chinamap' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ChinaMap',
            ),
            m.a.createElement('p', null, '\u4e2d\u56fd\u7701\u4efd\u5730\u56fe'),
            m.a.createElement(
              'h3',
              { id: 'example' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#example' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Example',
            ),
          ),
          m.a.createElement(
            i.a,
            Object(t['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { ChinaMap } from 'bsy-components';\n\nconst data = [\n  {\n    name: '\u5317\u4eac',\n  },\n  {\n    name: '\u5929\u6d25',\n  },\n  {\n    name: '\u6cb3\u5317',\n  },\n  {\n    name: '\u5c71\u897f',\n  },\n  {\n    name: '\u5185\u8499\u53e4',\n  },\n  {\n    name: '\u8fbd\u5b81',\n  },\n  {\n    name: '\u5409\u6797',\n  },\n  {\n    name: '\u9ed1\u9f99\u6c5f',\n  },\n  {\n    name: '\u4e0a\u6d77',\n  },\n  {\n    name: '\u6c5f\u82cf',\n  },\n  {\n    name: '\u6d59\u6c5f',\n  },\n  {\n    name: '\u5b89\u5fbd',\n  },\n  {\n    name: '\u798f\u5efa',\n  },\n  {\n    name: '\u6c5f\u897f',\n  },\n  {\n    name: '\u5c71\u4e1c',\n  },\n  {\n    name: '\u6cb3\u5357',\n  },\n  {\n    name: '\u6e56\u5317',\n  },\n  {\n    name: '\u6e56\u5357',\n  },\n  {\n    name: '\u5e7f\u4e1c',\n  },\n  {\n    name: '\u5e7f\u897f',\n  },\n  {\n    name: '\u6d77\u5357',\n  },\n  {\n    name: '\u91cd\u5e86',\n  },\n  {\n    name: '\u56db\u5ddd',\n  },\n  {\n    name: '\u8d35\u5dde',\n  },\n  {\n    name: '\u4e91\u5357',\n  },\n  {\n    name: '\u897f\u85cf',\n  },\n  {\n    name: '\u9655\u897f',\n  },\n  {\n    name: '\u7518\u8083',\n  },\n  {\n    name: '\u9752\u6d77',\n  },\n  {\n    name: '\u5b81\u590f',\n  },\n  {\n    name: '\u65b0\u7586',\n  },\n  {\n    name: '\u53f0\u6e7e',\n  },\n  {\n    name: '\u9999\u6e2f',\n  },\n  {\n    name: '\u6fb3\u95e8',\n  },\n];\n\nconst Demo = () => {\n  return <ChinaMap data={data.map((item) => ({ ...item, value: Math.random() * 100 }))} />;\n};\n\nexport default Demo;\n",
                },
              },
              { path: '/_demos/demo', dependencies: { 'bsy-components': '0.7.1' }, files: {} },
            ),
            m.a.createElement(o, null),
          ),
          m.a.createElement(
            'div',
            { className: 'markdown' },
            m.a.createElement(
              'h3',
              { id: '\u53c2\u6570' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53c2\u6570' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53c2\u6570',
            ),
            m.a.createElement(
              'table',
              null,
              m.a.createElement(
                'thead',
                null,
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('th', null, '\u53c2\u6570'),
                  m.a.createElement('th', null, '\u662f\u5426\u5fc5\u586b'),
                  m.a.createElement('th', null, '\u8bf4\u660e'),
                  m.a.createElement('th', null, '\u7c7b\u578b'),
                  m.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              m.a.createElement(
                'tbody',
                null,
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('td', null, 'width'),
                  m.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  m.a.createElement('td', null, '\u5bbd\u5ea6'),
                  m.a.createElement('td', null, '(string'),
                  m.a.createElement('td', null, 'number)'),
                ),
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('td', null, 'height'),
                  m.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  m.a.createElement('td', null, '\u9ad8\u5ea6'),
                  m.a.createElement('td', null, '(string'),
                  m.a.createElement('td', null, 'number)'),
                ),
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('td', null, 'interactive'),
                  m.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  m.a.createElement('td', null, '\u9f20\u6807\u7b49\u4ea4\u4e92'),
                  m.a.createElement('td', null, 'boolean'),
                  m.a.createElement('td', null, 'false'),
                ),
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('td', null, 'colors'),
                  m.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  m.a.createElement('td', null, '\u989c\u8272'),
                  m.a.createElement('td', null, 'ColorOptions'),
                  m.a.createElement('td', null, '-'),
                ),
                m.a.createElement(
                  'tr',
                  null,
                  m.a.createElement('td', null, 'data'),
                  m.a.createElement('td', null, '\u5fc5\u586b'),
                  m.a.createElement('td', null, '\u6570\u636e\u6e90'),
                  m.a.createElement('td', null, 'DataSource'),
                  m.a.createElement('td', null, '-'),
                ),
              ),
            ),
            m.a.createElement(
              'h5',
              { id: 'coloroptions' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#coloroptions' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'ColorOptions',
            ),
            m.a.createElement(c.a, {
              code:
                'type ColorOptions = {\n  background: string; // \u80cc\u666f\u8272\n  active: string; // \u9f20\u6807hover\u989c\u8272\n  line: string; // \u533a\u57df\u8fb9\u6846\u7ebf\u6761\u989c\u8272\n  label: string; // \u6587\u5b57\u989c\u8272\n  values: string[]; // \u533a\u57df\u80cc\u666f\u8272\u6620\u5c04\u533a\u95f4\n};\n',
              lang: 'typescript',
            }),
            m.a.createElement('hr', null),
            m.a.createElement(
              'h5',
              { id: 'datasource' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#datasource' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'DataSource',
            ),
            m.a.createElement(c.a, {
              code:
                "type DataSource = Array<{\n  name: string;\n  value: number;\n}>;\n\nconst data: DataSource = [\n  { name: '\u5317\u4eac', value: 120 },\n  { name: '\u5929\u6d25', value: 82 },\n];\n",
              lang: 'typescript',
            }),
            m.a.createElement(
              'h3',
              { id: '\u5176\u4ed6' },
              m.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u5176\u4ed6' },
                m.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u5176\u4ed6',
            ),
            m.a.createElement(
              'ol',
              null,
              m.a.createElement(
                'li',
                null,
                '\u4f9d\u8d56',
                m.a.createElement('code', null, '@antv/l7-react'),
                '\u5305\u4f53\u79ef\u8f83\u5927\uff0c\u53ef\u9009\u62e9\u914d\u7f6e cdn \u6216 dll \u65b9\u5f0f\u5f15\u5165\u51cf\u5c11\u6784\u5efa\u65f6\u95f4\u548c\u4f53\u79ef',
              ),
            ),
          ),
        );
      };
    },
    t81u: function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('k1fw'),
        l = a('q1tI'),
        m = a.n(l),
        r = a('/7QA'),
        c = [
          { name: '\u5317\u4eac' },
          { name: '\u5929\u6d25' },
          { name: '\u6cb3\u5317' },
          { name: '\u5c71\u897f' },
          { name: '\u5185\u8499\u53e4' },
          { name: '\u8fbd\u5b81' },
          { name: '\u5409\u6797' },
          { name: '\u9ed1\u9f99\u6c5f' },
          { name: '\u4e0a\u6d77' },
          { name: '\u6c5f\u82cf' },
          { name: '\u6d59\u6c5f' },
          { name: '\u5b89\u5fbd' },
          { name: '\u798f\u5efa' },
          { name: '\u6c5f\u897f' },
          { name: '\u5c71\u4e1c' },
          { name: '\u6cb3\u5357' },
          { name: '\u6e56\u5317' },
          { name: '\u6e56\u5357' },
          { name: '\u5e7f\u4e1c' },
          { name: '\u5e7f\u897f' },
          { name: '\u6d77\u5357' },
          { name: '\u91cd\u5e86' },
          { name: '\u56db\u5ddd' },
          { name: '\u8d35\u5dde' },
          { name: '\u4e91\u5357' },
          { name: '\u897f\u85cf' },
          { name: '\u9655\u897f' },
          { name: '\u7518\u8083' },
          { name: '\u9752\u6d77' },
          { name: '\u5b81\u590f' },
          { name: '\u65b0\u7586' },
          { name: '\u53f0\u6e7e' },
          { name: '\u9999\u6e2f' },
          { name: '\u6fb3\u95e8' },
        ],
        u = () =>
          m.a.createElement(r['a'], {
            data: c.map((e) =>
              Object(t['a'])(Object(t['a'])({}, e), {}, { value: 100 * Math.random() }),
            ),
          });
      n['default'] = u;
    },
  },
]);
