(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [11],
  {
    AuYs: function (e, t, a) {
      'use strict';
      a.r(t);
      a('+L6B');
      var n = a('2/Rp'),
        l = (a('y8nQ'), a('Vl3Y')),
        r = a('tJVT'),
        i = a('q1tI'),
        p = a.n(i),
        o = a('/7QA'),
        s = () => {
          var e = l['a'].useForm(),
            t = Object(r['a'])(e, 1),
            a = t[0],
            i = (e) => {
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
          return p.a.createElement(
            l['a'],
            { form: a, onFinish: i },
            p.a.createElement(o['d'], {
              name: 'users',
              columns: s,
              template: { name: '\u6740\u9a6c\u7279', age: 91, address: 'xm' },
            }),
            p.a.createElement(n['a'], { htmlType: 'submit', type: 'primary' }, '\u63d0\u4ea4'),
          );
        };
      t['default'] = s;
    },
  },
]);
