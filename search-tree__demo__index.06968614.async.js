(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    '9XQv': function (e, t, l) {
      'use strict';
      l.r(t);
      var n = l('q1tI'),
        a = l.n(n),
        i = l('/7QA'),
        o = [
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
        c = () => {
          var e = (e, t, l) => {
            console.log(e, t, l);
          };
          return a.a.createElement(i['f'], {
            placeholder: '\u8f93\u5165\u8282\u70b9\u540d\u79f0',
            checkable: !0,
            dataSource: o,
            onCheck: e,
          });
        };
      t['default'] = c;
    },
  },
]);
