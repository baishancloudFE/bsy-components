(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    XOGA: function (e, n, a) {
      'use strict';
      a.r(n);
      a('5NDa');
      var t = a('5rEg'),
        r = a('tJVT'),
        c = (a('y8nQ'), a('Vl3Y')),
        o = a('q1tI'),
        l = a.n(o),
        u = a('/7QA'),
        s = c['a'].Item,
        i = () => {
          var e = c['a'].useForm(),
            n = Object(r['a'])(e, 1),
            a = n[0],
            o = (e) => {
              console.log(e);
            },
            i = () => {
              for (var e = [], n = 0; n < 10; n++)
                e.push(
                  l.a.createElement(
                    s,
                    { label: 'input-'.concat(n), name: 'input-'.concat(n) },
                    l.a.createElement(t['a'], null),
                  ),
                );
              return e;
            };
          return l.a.createElement(u['c'], { form: a, onFinish: o }, i());
        };
      n['default'] = i;
    },
  },
]);
