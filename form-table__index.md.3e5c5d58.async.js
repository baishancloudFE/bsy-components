(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [12, 10, 11],
  {
    AuYs: function (e, n, t) {
      'use strict';
      t.r(n);
      t('+L6B');
      var a = t('2/Rp'),
        l = (t('y8nQ'), t('Vl3Y')),
        r = t('tJVT'),
        m = t('q1tI'),
        c = t.n(m),
        o = t('/7QA'),
        s = () => {
          var e = l['a'].useForm(),
            n = Object(r['a'])(e, 1),
            t = n[0],
            m = (e) => {
              console.log(e);
            },
            s = [
              {
                dataIndex: 'name',
                title: '\u59d3\u540d',
                width: 120,
                align: 'center',
                type: 'input',
                props: { autoComplete: 'off' },
                required: !0,
              },
              {
                dataIndex: 'age',
                title: '\u5e74\u9f84',
                width: 100,
                align: 'center',
                type: 'number',
                props: { min: 0, max: 100 },
              },
              {
                dataIndex: 'address',
                title: '\u4f4f\u5740',
                width: 120,
                align: 'center',
                type: 'select',
                props: { showSearch: !0, allowClear: !0 },
                options: [
                  { label: '\u5317\u4eac', value: 'bj' },
                  { label: '\u676d\u5dde', value: 'hz' },
                  { label: '\u53a6\u95e8', value: 'xm' },
                ],
              },
              {
                dataIndex: 'time',
                title: '\u751f\u6548\u65f6\u95f4',
                width: 120,
                align: 'center',
                type: 'date',
                props: { format: 'YYYY/MM/DD' },
              },
            ];
          return c.a.createElement(
            l['a'],
            { form: t, onFinish: m },
            c.a.createElement(o['d'], {
              name: 'users',
              columns: s,
              template: { name: '\u6740\u9a6c\u7279', age: 91, address: 'xm' },
            }),
            c.a.createElement(a['a'], { htmlType: 'submit', type: 'primary' }, '\u63d0\u4ea4'),
          );
        };
      n['default'] = s;
    },
    'K+nK': function (e, n) {
      function t(e) {
        return e && e.__esModule ? e : { default: e };
      }
      e.exports = t;
    },
    'V7/v': function (e, n, t) {
      'use strict';
      t.r(n);
      t('+L6B');
      var a = t('2/Rp'),
        l = (t('y8nQ'), t('Vl3Y')),
        r = t('tJVT'),
        m = t('q1tI'),
        c = t.n(m),
        o = t('/7QA'),
        s = () => {
          var e = l['a'].useForm(),
            n = Object(r['a'])(e, 1),
            t = n[0],
            m = (e) => {
              console.log(e);
            },
            s = [
              {
                dataIndex: 'name',
                title: '\u59d3\u540d',
                width: 120,
                align: 'center',
                type: 'text',
              },
              {
                dataIndex: 'age',
                title: '\u5e74\u9f84',
                width: 100,
                align: 'center',
                type: 'number',
                props: { min: 0, max: 100 },
              },
              {
                dataIndex: 'address',
                title: '\u4f4f\u5740',
                width: 120,
                align: 'center',
                type: 'select',
                props: { showSearch: !0, allowClear: !0, onChange: (e, n) => console.log(e, n) },
                options: [
                  { label: '\u5317\u4eac', value: 'bj' },
                  { label: '\u676d\u5dde', value: 'hz' },
                  { label: '\u53a6\u95e8', value: 'xm' },
                ],
              },
            ];
          return c.a.createElement(
            l['a'],
            {
              form: t,
              onFinish: m,
              initialValues: {
                users: [
                  { name: '\u80e1\u5f66\u658c', age: 32, address: 'bj' },
                  { name: '\u80e1\u5f66\u7956', age: 42, address: 'hz' },
                ],
              },
            },
            c.a.createElement(o['d'], { name: 'users', columns: s, dynamic: !1 }),
            c.a.createElement(a['a'], { htmlType: 'submit', type: 'primary' }, '\u63d0\u4ea4'),
          );
        };
      n['default'] = s;
    },
    joGK: function (e, n, t) {
      'use strict';
      t.r(n);
      var a = t('0Owb'),
        l = t('q1tI'),
        r = t.n(l),
        m = (t('B2uJ'), t('+su7'), t('qOys')),
        c = t.n(m),
        o = t('5Yjd'),
        s = t.n(o),
        i = r.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('AuYs')),
            l = function () {
              return n['default'].createElement(a['default'], null);
            };
          return n['default'].createElement(l);
        }),
        u = r.a.memo(function () {
          var e = t('K+nK'),
            n = e(t('q1tI')),
            a = e(t('V7/v')),
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
              { id: 'formtable' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#formtable' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'FormTable',
            ),
            r.a.createElement(
              'p',
              null,
              '\u52a8\u6001\u8868\u683c\u7c7b\u578b\u7684\u8868\u5355\u9879',
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
            s.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Form } from 'antd';\nimport { FormTable } from 'bsy-components';\n\nconst Demo = () => {\n  const [form] = Form.useForm();\n\n  const onFinish = (values) => {\n    console.log(values);\n  };\n\n  const columns = [\n    {\n      dataIndex: 'name',\n      title: '\u59d3\u540d',\n      width: 120,\n      align: 'center',\n      type: 'input',\n      props: {\n        autoComplete: 'off',\n      },\n      required: true,\n    },\n    {\n      dataIndex: 'age',\n      title: '\u5e74\u9f84',\n      width: 100,\n      align: 'center',\n      type: 'number',\n      props: {\n        min: 0,\n        max: 100,\n      },\n    },\n\n    {\n      dataIndex: 'address',\n      title: '\u4f4f\u5740',\n      width: 120,\n      align: 'center',\n      type: 'select',\n      props: {\n        showSearch: true,\n        allowClear: true,\n      },\n      options: [\n        { label: '\u5317\u4eac', value: 'bj' },\n        { label: '\u676d\u5dde', value: 'hz' },\n        { label: '\u53a6\u95e8', value: 'xm' },\n      ],\n    },\n    {\n      dataIndex: 'time',\n      title: '\u751f\u6548\u65f6\u95f4',\n      width: 120,\n      align: 'center',\n      type: 'date',\n      props: {\n        format: 'YYYY/MM/DD',\n      },\n    },\n  ];\n\n  return (\n    <Form form={form} onFinish={onFinish}>\n      <FormTable\n        name=\"users\"\n        columns={columns}\n        template={{\n          name: '\u6740\u9a6c\u7279',\n          age: 91,\n          address: 'xm',\n        }}\n      />\n\n      <Button htmlType=\"submit\" type=\"primary\">\n        \u63d0\u4ea4\n      </Button>\n    </Form>\n  );\n};\n\nexport default Demo;\n",
                },
              },
              {
                path: '/_demos/index-1',
                title: '\u57fa\u672c\u7528\u6cd5',
                dependencies: { antd: '4.4.1', 'bsy-components': '0.7.1' },
                files: {},
              },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement('div', { className: 'markdown' }),
          r.a.createElement(
            s.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Button, Form } from 'antd';\nimport { FormTable } from 'bsy-components';\n\nconst Demo = () => {\n  const [form] = Form.useForm();\n\n  const onFinish = (values) => {\n    console.log(values);\n  };\n\n  const columns = [\n    {\n      dataIndex: 'name',\n      title: '\u59d3\u540d',\n      width: 120,\n      align: 'center',\n      type: 'text',\n    },\n    {\n      dataIndex: 'age',\n      title: '\u5e74\u9f84',\n      width: 100,\n      align: 'center',\n      type: 'number',\n      props: {\n        min: 0,\n        max: 100,\n      },\n    },\n\n    {\n      dataIndex: 'address',\n      title: '\u4f4f\u5740',\n      width: 120,\n      align: 'center',\n      type: 'select',\n      props: {\n        showSearch: true,\n        allowClear: true,\n        onChange: (value, index) => console.log(value, index),\n      },\n      options: [\n        { label: '\u5317\u4eac', value: 'bj' },\n        { label: '\u676d\u5dde', value: 'hz' },\n        { label: '\u53a6\u95e8', value: 'xm' },\n      ],\n    },\n  ];\n\n  return (\n    <Form\n      form={form}\n      onFinish={onFinish}\n      initialValues={{\n        users: [\n          { name: '\u80e1\u5f66\u658c', age: 32, address: 'bj' },\n          { name: '\u80e1\u5f66\u7956', age: 42, address: 'hz' },\n        ],\n      }}\n    >\n      <FormTable name=\"users\" columns={columns} dynamic={false} />\n\n      <Button htmlType=\"submit\" type=\"primary\">\n        \u63d0\u4ea4\n      </Button>\n    </Form>\n  );\n};\n\nexport default Demo;\n",
                },
              },
              {
                path: '/_demos/demo2',
                title: '\u5173\u95ed\u52a8\u6001\u5c5e\u6027',
                desc:
                  '<div class="markdown"><p>\u5f53\u4f7f\u7528onChange\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u5728\u57fa\u7840\u7684value\u53c2\u6570\u4e0a\u589e\u52a0index\u53c2\u6570(\u5f53\u524d\u884c\u7d22\u5f15)</p></div>',
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
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', { align: 'center' }, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'name'),
                  r.a.createElement('td', null, '\u8868\u5355\u9879 name'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'columns'),
                  r.a.createElement('td', null, '\u5217\u914d\u7f6e'),
                  r.a.createElement('td', null, 'Columns[]'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'dynamic'),
                  r.a.createElement('td', null, '\u662f\u5426\u52a8\u6001\u589e\u5220'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', { align: 'center' }, 'true'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'template'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6dfb\u52a0\u65b9\u6cd5 add \u4f20\u9012\u7684\u53c2\u6570',
                  ),
                  r.a.createElement('td', null, 'any'),
                  r.a.createElement('td', { align: 'center' }, '{}'),
                ),
              ),
            ),
            r.a.createElement(
              'h3',
              { id: 'columns' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#columns' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Columns',
            ),
            r.a.createElement(c.a, {
              code:
                "interface Columns {\n  type: 'text' | 'input' | 'number' | 'date' | 'select';\n  required?: boolean;\n  props?: { [key: string]: any } | any;\n  options?: Array<{ label: React.ReactText; value: string | number }>;\n}\n",
              lang: 'typescript',
            }),
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
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', { align: 'center' }, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'type'),
                  r.a.createElement('td', null, 'ComponentType'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'required'),
                  r.a.createElement('td', null, '\u662f\u5426\u5fc5\u586b'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'props'),
                  r.a.createElement('td', null, '\u4f20\u9012\u7ed9\u63a7\u4ef6\u7684 props'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'options'),
                  r.a.createElement('td', null, '\u4e0b\u62c9\u5217\u8868\u7684\u503c\u7ec4\u5408'),
                  r.a.createElement('td', { align: 'center' }, '-'),
                ),
              ),
            ),
            r.a.createElement(
              'p',
              null,
              '\u5176\u4f59\u914d\u7f6e\u4e0e antd \u7684 columns \u914d\u7f6e\u76f8\u540c',
            ),
            r.a.createElement(
              'h3',
              { id: '\u76ee\u524d\u652f\u6301\u7684\u63a7\u4ef6\u7c7b\u578b' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u76ee\u524d\u652f\u6301\u7684\u63a7\u4ef6\u7c7b\u578b',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u76ee\u524d\u652f\u6301\u7684\u63a7\u4ef6\u7c7b\u578b',
            ),
            r.a.createElement(c.a, {
              code:
                'interface ComponentType {\n  text: TextFormItem;\n  input: Input;\n  number: InputNumber;\n  date: DatePicker;\n  select: Select;\n}\n',
              lang: 'typescript',
            }),
          ),
        );
      };
    },
  },
]);
