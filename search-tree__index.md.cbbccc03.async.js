(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [17, 16],
  {
    '9XQv': function (e, t, n) {
      'use strict';
      n.r(t);
      var l = n('q1tI'),
        a = n.n(l),
        r = n('/7QA'),
        c = [
          { key: 'global', title: 'global', children: [] },
          {
            key: 'dx',
            title: '\u7535\u4fe1',
            children: [
              { key: 'dx-huadong', title: '\u7535\u4fe1-\u534e\u4e1c' },
              { key: 'dx-xian', title: '\u7535\u4fe1-\u897f\u5b89' },
              { key: 'dx-huanan', title: '\u7535\u4fe1-\u534e\u5357' },
            ],
          },
          {
            key: 'lt',
            title: '\u8054\u901a',
            children: [
              { key: 'lt-huadong', title: '\u8054\u901a-\u534e\u4e1c' },
              { key: 'lt-xian', title: '\u8054\u901a-\u897f\u5b89' },
              { key: 'lt-huanan', title: '\u8054\u901a-\u534e\u5357' },
            ],
          },
        ],
        d = () => {
          var e = (e, t, n) => {
            console.log(e, t, n);
          };
          return a.a.createElement(r['f'], {
            placeholder: '\u8f93\u5165\u8282\u70b9\u540d\u79f0',
            checkable: !0,
            dataSource: c,
            onCheck: e,
          });
        };
      t['default'] = d;
    },
    'K+nK': function (e, t) {
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = n;
    },
    ef05: function (e, t, n) {
      'use strict';
      n.r(t);
      var l = n('0Owb'),
        a = n('q1tI'),
        r = n.n(a),
        c = (n('B2uJ'), n('+su7'), n('qOys'), n('5Yjd')),
        d = n.n(c),
        u = r.a.memo(function () {
          var e = n('K+nK'),
            t = e(n('q1tI')),
            l = e(n('9XQv')),
            a = function () {
              return t['default'].createElement(l['default'], null);
            };
          return t['default'].createElement(a);
        });
      t['default'] = function () {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h1',
              { id: 'searchtree' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#searchtree' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'SearchTree',
            ),
            r.a.createElement(
              'p',
              null,
              '\u5f53\u5b50\u8282\u70b9\u5185\u5bb9\u8f83\u591a\u9700\u8981\u641c\u7d22\u5e76\u9ad8\u4eae\u5c55\u793a\u65f6\uff0c\u4f7f\u7528\u641c\u7d22\u6811\u53ef\u5feb\u901f\u627e\u5230\u76ee\u6807\u8282\u70b9\u3002',
            ),
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
            Object(l['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { SearchTree } from 'bsy-components';\n\nconst data = [\n  {\n    key: 'global',\n    title: 'global',\n    children: [],\n  },\n  {\n    key: 'dx',\n    title: '\u7535\u4fe1',\n    children: [\n      {\n        key: 'dx-huadong',\n        title: '\u7535\u4fe1-\u534e\u4e1c',\n      },\n      {\n        key: 'dx-xian',\n        title: '\u7535\u4fe1-\u897f\u5b89',\n      },\n      {\n        key: 'dx-huanan',\n        title: '\u7535\u4fe1-\u534e\u5357',\n      },\n    ],\n  },\n  {\n    key: 'lt',\n    title: '\u8054\u901a',\n    children: [\n      {\n        key: 'lt-huadong',\n        title: '\u8054\u901a-\u534e\u4e1c',\n      },\n      {\n        key: 'lt-xian',\n        title: '\u8054\u901a-\u897f\u5b89',\n      },\n      {\n        key: 'lt-huanan',\n        title: '\u8054\u901a-\u534e\u5357',\n      },\n    ],\n  },\n];\n\nconst Index = () => {\n  const onCheck = (keys, key, checked) => {\n    console.log(keys, key, checked);\n  };\n\n  return (\n    <SearchTree placeholder=\"\u8f93\u5165\u8282\u70b9\u540d\u79f0\" checkable={true} dataSource={data} onCheck={onCheck} />\n  );\n};\n\nexport default Index;\n",
                },
              },
              { path: '/_demos/index-3', dependencies: { 'bsy-components': '0.7.1' }, files: {} },
            ),
            r.a.createElement(u, null),
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
                  r.a.createElement('td', null, 'dataSource'),
                  r.a.createElement('td', null, '\u5fc5\u586b'),
                  r.a.createElement('td', null, '\u6570\u636e\u6e90'),
                  r.a.createElement(
                    'td',
                    null,
                    'array\\<',
                    '{',
                    'key, title, children, [disabled, selectable]',
                    '}',
                    '>',
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'placeholder'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement('td', null, '\u641c\u7d22\u6846\u63d0\u793a\u7684\u6587\u672c'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '"Search"'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'parentCheckedAble'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement('td', null, '\u7236\u8282\u70b9\u662f\u5426\u53ef\u9009\u62e9'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'parentNodeHide'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8fc7\u6ee4\u8282\u70b9\u65f6\u7236\u8282\u70b9\u662f\u5426\u9690\u85cf',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'childNodeHide'),
                  r.a.createElement('td', null, '\u975e\u5fc5\u586b'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u8fc7\u6ee4\u8282\u70b9\u65f6\u5b50\u8282\u70b9\u662f\u5426\u9690\u85cf',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'true'),
                ),
              ),
            ),
            r.a.createElement(
              'p',
              null,
              '\u5176\u4ed6\u53c2\u6570\u4e0e antd \u7684 Tree \u7ec4\u4ef6\u4e00\u81f4',
              r.a.createElement(
                'a',
                {
                  href: 'https://ant.design/components/tree-cn/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'Tree',
                r.a.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    'aria-hidden': !0,
                    x: '0px',
                    y: '0px',
                    viewBox: '0 0 100 100',
                    width: '15',
                    height: '15',
                    className: '__dumi-default-external-link-icon',
                  },
                  r.a.createElement('path', {
                    fill: 'currentColor',
                    d:
                      'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z',
                  }),
                  r.a.createElement('polygon', {
                    fill: 'currentColor',
                    points:
                      '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9',
                  }),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
