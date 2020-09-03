(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [15],
  {
    fBv9: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('q1tI'),
        l = n.n(a),
        r = (n('B2uJ'), n('+su7'), n('qOys')),
        c = n.n(r);
      n('5Yjd');
      t['default'] = function () {
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h1',
              { id: 'loginprovider' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#loginprovider' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'LoginProvider',
            ),
            l.a.createElement(
              'p',
              null,
              '\u7528\u4e8e\u5185\u90e8\u63a5\u5165\u5355\u70b9 SSO \u767b\u5f55',
            ),
            l.a.createElement(
              'h3',
              { id: 'examples' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#examples' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Examples',
            ),
            l.a.createElement(c.a, {
              code:
                "import React from 'react';\nimport { LoginProvider } from 'bsy-components';\n\nconst Demo = ({ children }) => {\n  // do something...\n  return (\n    <LoginProvider open={false} domain=\"https://www.xxx.com\">\n      {children}\n    </LoginProvider>\n  );\n};\n\nexport default Demo;\n",
              lang: 'js',
            }),
            l.a.createElement(
              'h3',
              { id: '\u53c2\u6570' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53c2\u6570' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53c2\u6570',
            ),
            l.a.createElement(
              'table',
              null,
              l.a.createElement(
                'thead',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('th', { align: 'left' }, '\u53c2\u6570'),
                  l.a.createElement('th', { align: 'left' }, '\u8bf4\u660e'),
                  l.a.createElement('th', { align: 'left' }, '\u7c7b\u578b'),
                  l.a.createElement('th', { align: 'left' }, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              l.a.createElement(
                'tbody',
                null,
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'open?'),
                  l.a.createElement(
                    'td',
                    { align: 'left' },
                    '\u662f\u5426\u5f00\u542f SSO \u767b\u5f55',
                  ),
                  l.a.createElement('td', { align: 'left' }, 'boolean'),
                  l.a.createElement('td', { align: 'left' }, 'true'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'domain!'),
                  l.a.createElement(
                    'td',
                    { align: 'left' },
                    'SSO \u5e73\u53f0\u914d\u7f6e\u7684\u4e3b\u57df\u540d',
                  ),
                  l.a.createElement('td', { align: 'left' }, 'string'),
                  l.a.createElement('td', { align: 'left' }, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'config'),
                  l.a.createElement(
                    'td',
                    { align: 'left' },
                    'SSO \u5bf9\u5e94\u7684\u56db\u4e2a\u63a5\u53e3\u5730\u5740',
                  ),
                  l.a.createElement('td', { align: 'left' }, 'Config'),
                  l.a.createElement('td', { align: 'left' }, '\u521d\u59cb SSO \u914d\u7f6e'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'loading?'),
                  l.a.createElement('td', { align: 'left' }, 'Loading \u7ec4\u4ef6'),
                  l.a.createElement('td', { align: 'left' }, 'React.ReactNode'),
                  l.a.createElement('td', { align: 'left' }, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'clearFields?'),
                  l.a.createElement(
                    'td',
                    { align: 'left' },
                    '\u81ea\u5b9a\u4e49\u9000\u51fa\u767b\u5f55\u6e05\u9664\u7684\u5b57\u6bb5',
                  ),
                  l.a.createElement('td', { align: 'left' }, 'React.ReactNode'),
                  l.a.createElement('td', { align: 'left' }, '-'),
                ),
                l.a.createElement(
                  'tr',
                  null,
                  l.a.createElement('td', { align: 'left' }, 'onError?'),
                  l.a.createElement(
                    'td',
                    { align: 'left' },
                    '\u767b\u5f55\u6216\u6821\u9a8c\u51fa\u73b0\u9519\u8bef\u4e8b\u4ef6',
                  ),
                  l.a.createElement('td', { align: 'left' }, 'function'),
                  l.a.createElement('td', { align: 'left' }, 'notification'),
                ),
              ),
            ),
            l.a.createElement(
              'h3',
              { id: 'config' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#config' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Config',
            ),
            l.a.createElement('p', null, '\u9ed8\u8ba4\u503c\u4e3a\u5982\u4e0b'),
            l.a.createElement(c.a, {
              code:
                '{\n  "view": "/account/user/view",\n  "login": "/account/user/login",\n  "logout": "/account/user/logout",\n  "validate": "/account/token/validate"\n}\n',
              lang: 'json',
            }),
            l.a.createElement(c.a, {
              code:
                'interface LoginConfig {\n  view: string;\n  login: string;\n  logout: string;\n  validate: string;\n}\n',
              lang: 'typescript',
            }),
            l.a.createElement(
              'h3',
              { id: 'onerror' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#onerror' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'onError',
            ),
            l.a.createElement(
              'p',
              null,
              'onError \u9ed8\u8ba4\u5904\u7406\u51fd\u6570\u5982\u4e0b\uff1a',
            ),
            l.a.createElement(c.a, {
              code:
                'function onError(msg: string, desc: string) {\n  notification.error({\n    message: msg,\n    description: desc,\n    duration: 1,\n    onClose: () => {\n      LoginProvider.logout();\n    },\n  });\n}\n',
              lang: 'javascript',
            }),
            l.a.createElement(
              'p',
              null,
              '\u53ef\u901a\u8fc7\u914d\u7f6e\u4e3a false \u53d6\u6d88\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u6216\u81ea\u5b9a\u4e49\u5904\u7406\u51fd\u6570',
            ),
            l.a.createElement(
              'p',
              null,
              'msg \u6709\u4e24\u79cd\u5185\u5bb9\uff0c\u5206\u522b\u662f\uff1a"\u767b\u5f55\u5931\u8d25" | "\u6821\u9a8c token \u5931\u8d25"',
            ),
            l.a.createElement('p', null, 'desc \u4e3a\u9519\u8bef\u8be6\u7ec6\u5185\u5bb9'),
            l.a.createElement(
              'h3',
              { id: '\u8bf4\u660e' },
              l.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u8bf4\u660e' },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u8bf4\u660e',
            ),
            l.a.createElement(
              'ol',
              null,
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'p',
                  null,
                  '\u67e5\u8be2 localStorage \u4e2d\u662f\u5426\u5b58\u5728 token \u53c2\u6570',
                ),
                l.a.createElement(
                  'ul',
                  null,
                  l.a.createElement(
                    'li',
                    null,
                    '\u82e5\u5b58\u5728\uff0c\u5219\u6821\u9a8c token \u662f\u5426\u5408\u6cd5',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    '\u82e5\u4e0d\u5b58\u5728\uff0c\u5219\u8df3\u8f6c\u81f3\u767b\u5f55\u9875\u9762',
                  ),
                ),
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'p',
                  null,
                  '\u82e5 view \u6216 validate \u63a5\u53e3\u8fd4\u56de\u5f02\u5e38\uff0c\u5219\u8df3\u8f6c\u81f3\u9000\u51fa\u767b\u5f55',
                ),
              ),
              l.a.createElement(
                'li',
                null,
                l.a.createElement(
                  'p',
                  null,
                  '\u9ed8\u8ba4\u767b\u5f55\u540e\u5728 localStorage \u5b58\u50a8 SSO \u8fd4\u56de\u7684\u7528\u6237\u6570\u636e\u5982\u4e0b',
                ),
              ),
            ),
            l.a.createElement(c.a, {
              code:
                '{\n  "token": "jwt token",\n  "menu": "SSO\u8fd4\u56de\u7684\u83dc\u5355\u4fe1\u606f\uff0c\u6570\u7ec4\u683c\u5f0f\uff0c\u9700\u8981JSON.parse\u89e3\u6784",\n  "current_user": "\u5f53\u524d\u767b\u5f55\u7528\u6237\uff0c\u5bf9\u8c61\u683c\u5f0f\uff0c\u5305\u542b cname ename uid"\n}\n',
              lang: 'json',
            }),
          ),
        );
      };
    },
  },
]);
