(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [18],
  {
    Raqu: function (e, a, l) {
      'use strict';
      l.r(a);
      l('y8nQ');
      var n = l('Vl3Y'),
        t = l('q1tI'),
        u = l.n(t),
        i = l('/7QA'),
        o = n['a'].Item,
        s = [
          { label: '\u5b87\u667a\u6ce2\u4f50\u52a9', value: 'zuozhu' },
          { label: '\u5b87\u667a\u6ce2\u9f2c', value: 'you' },
          { label: '\u5b87\u667a\u6ce2\u6b62\u6c34', value: 'zhishui' },
        ],
        m = () =>
          u.a.createElement(
            n['a'],
            { initialValues: { single: 'zuozhu', multiple: ['you', 'zhishui'] } },
            u.a.createElement(
              o,
              { label: '\u5355\u9009\u6807\u7b7e', name: 'single' },
              u.a.createElement(i['g'], { mode: 'single', options: s }),
            ),
            u.a.createElement(
              o,
              { label: '\u591a\u9009\u6807\u7b7e', name: 'multiple' },
              u.a.createElement(i['g'], { options: s }),
            ),
          );
      a['default'] = m;
    },
  },
]);
