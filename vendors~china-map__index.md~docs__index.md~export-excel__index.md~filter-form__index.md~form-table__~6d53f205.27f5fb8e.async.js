(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '+su7': function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a(r('q1tI'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = s(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      r('KCaj');
      var l = function (e) {
        var t = e.children,
          r = i(e, ['children']);
        return n.default.createElement('span', o({ className: '__dumi-default-badge' }, r), t);
      };
      t.default = l;
    },
    '1CDa': function (e, t, r) {},
    '3Mpw': function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Prism', function () {
          return o;
        }),
        r.d(t, 'defaultProps', function () {
          return c;
        });
      var n = (function () {
        var e = 0,
          t = {
            util: {
              encode: function (e) {
                return e instanceof r
                  ? new r(e.type, t.util.encode(e.content), e.alias)
                  : 'Array' === t.util.type(e)
                  ? e.map(t.util.encode)
                  : e
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
              },
              objId: function (t) {
                return t['__id'] || Object.defineProperty(t, '__id', { value: ++e }), t['__id'];
              },
              clone: function (e, r) {
                var n = t.util.type(e);
                switch (((r = r || {}), n)) {
                  case 'Object':
                    if (r[t.util.objId(e)]) return r[t.util.objId(e)];
                    var a = {};
                    for (var o in ((r[t.util.objId(e)] = a), e))
                      e.hasOwnProperty(o) && (a[o] = t.util.clone(e[o], r));
                    return a;
                  case 'Array':
                    if (r[t.util.objId(e)]) return r[t.util.objId(e)];
                    a = [];
                    return (
                      (r[t.util.objId(e)] = a),
                      e.forEach(function (e, n) {
                        a[n] = t.util.clone(e, r);
                      }),
                      a
                    );
                }
                return e;
              },
            },
            languages: {
              extend: function (e, r) {
                var n = t.util.clone(t.languages[e]);
                for (var a in r) n[a] = r[a];
                return n;
              },
              insertBefore: function (e, r, n, a) {
                a = a || t.languages;
                var o = a[e];
                if (2 == arguments.length) {
                  for (var i in ((n = arguments[1]), n)) n.hasOwnProperty(i) && (o[i] = n[i]);
                  return o;
                }
                var s = {};
                for (var l in o)
                  if (o.hasOwnProperty(l)) {
                    if (l == r) for (var i in n) n.hasOwnProperty(i) && (s[i] = n[i]);
                    s[l] = o[l];
                  }
                return (
                  t.languages.DFS(t.languages, function (t, r) {
                    r === a[e] && t != e && (this[t] = s);
                  }),
                  (a[e] = s)
                );
              },
              DFS: function (e, r, n, a) {
                for (var o in ((a = a || {}), e))
                  e.hasOwnProperty(o) &&
                    (r.call(e, o, e[o], n || o),
                    'Object' !== t.util.type(e[o]) || a[t.util.objId(e[o])]
                      ? 'Array' !== t.util.type(e[o]) ||
                        a[t.util.objId(e[o])] ||
                        ((a[t.util.objId(e[o])] = !0), t.languages.DFS(e[o], r, o, a))
                      : ((a[t.util.objId(e[o])] = !0), t.languages.DFS(e[o], r, null, a)));
              },
            },
            plugins: {},
            highlight: function (e, n, a) {
              var o = { code: e, grammar: n, language: a };
              return (
                (o.tokens = t.tokenize(o.code, o.grammar)),
                r.stringify(t.util.encode(o.tokens), o.language)
              );
            },
            matchGrammar: function (e, r, n, a, o, i, s) {
              var l = t.Token;
              for (var c in n)
                if (n.hasOwnProperty(c) && n[c]) {
                  if (c == s) return;
                  var u = n[c];
                  u = 'Array' === t.util.type(u) ? u : [u];
                  for (var p = 0; p < u.length; ++p) {
                    var d = u[p],
                      f = d.inside,
                      g = !!d.lookbehind,
                      m = !!d.greedy,
                      b = 0,
                      h = d.alias;
                    if (m && !d.pattern.global) {
                      var y = d.pattern.toString().match(/[imuy]*$/)[0];
                      d.pattern = RegExp(d.pattern.source, y + 'g');
                    }
                    d = d.pattern || d;
                    for (var v = a, w = o; v < r.length; w += r[v].length, ++v) {
                      var E = r[v];
                      if (r.length > e.length) return;
                      if (!(E instanceof l)) {
                        if (m && v != r.length - 1) {
                          d.lastIndex = w;
                          var k = d.exec(e);
                          if (!k) break;
                          for (
                            var S = k.index + (g ? k[1].length : 0),
                              A = k.index + k[0].length,
                              O = v,
                              x = w,
                              T = r.length;
                            O < T && (x < A || (!r[O].type && !r[O - 1].greedy));
                            ++O
                          )
                            (x += r[O].length), S >= x && (++v, (w = x));
                          if (r[v] instanceof l) continue;
                          (_ = O - v), (E = e.slice(w, x)), (k.index -= w);
                        } else {
                          d.lastIndex = 0;
                          k = d.exec(E);
                          var _ = 1;
                        }
                        if (k) {
                          g && (b = k[1] ? k[1].length : 0);
                          (S = k.index + b), (k = k[0].slice(b)), (A = S + k.length);
                          var N = E.slice(0, S),
                            I = E.slice(A),
                            R = [v, _];
                          N && (++v, (w += N.length), R.push(N));
                          var L = new l(c, f ? t.tokenize(k, f) : k, h, k, m);
                          if (
                            (R.push(L),
                            I && R.push(I),
                            Array.prototype.splice.apply(r, R),
                            1 != _ && t.matchGrammar(e, r, n, v, w, !0, c),
                            i)
                          )
                            break;
                        } else if (i) break;
                      }
                    }
                  }
                }
            },
            hooks: { add: function () {} },
            tokenize: function (e, r, n) {
              var a = [e],
                o = r.rest;
              if (o) {
                for (var i in o) r[i] = o[i];
                delete r.rest;
              }
              return t.matchGrammar(e, a, r, 0, 0, !1), a;
            },
          },
          r = (t.Token = function (e, t, r, n, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = r),
              (this.length = 0 | (n || '').length),
              (this.greedy = !!a);
          });
        return (
          (r.stringify = function (e, n, a) {
            if ('string' == typeof e) return e;
            if ('Array' === t.util.type(e))
              return e
                .map(function (t) {
                  return r.stringify(t, n, e);
                })
                .join('');
            var o = {
              type: e.type,
              content: r.stringify(e.content, n, a),
              tag: 'span',
              classes: ['token', e.type],
              attributes: {},
              language: n,
              parent: a,
            };
            if (e.alias) {
              var i = 'Array' === t.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(o.classes, i);
            }
            var s = Object.keys(o.attributes)
              .map(function (e) {
                return e + '="' + (o.attributes[e] || '').replace(/"/g, '&quot;') + '"';
              })
              .join(' ');
            return (
              '<' +
              o.tag +
              ' class="' +
              o.classes.join(' ') +
              '"' +
              (s ? ' ' + s : '') +
              '>' +
              o.content +
              '</' +
              o.tag +
              '>'
            );
          }),
          t
        );
      })();
      (n.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/i,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
              inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] },
            },
            punctuation: /\/?>/,
            'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
          },
        },
        entity: /&#?[\da-z]{1,8};/i,
      }),
        (n.languages.markup['tag'].inside['attr-value'].inside['entity'] =
          n.languages.markup['entity']),
        n.hooks.add('wrap', function (e) {
          'entity' === e.type && (e.attributes['title'] = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(n.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var r = {};
            (r['language-' + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: n.languages[t],
            }),
              (r['cdata'] = /^<!\[CDATA\[|\]\]>$/i);
            var a = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } };
            a['language-' + t] = { pattern: /[\s\S]+/, inside: n.languages[t] };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  e,
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              n.languages.insertBefore('markup', 'cdata', o);
          },
        }),
        (n.languages.xml = n.languages.extend('markup', {})),
        (n.languages.html = n.languages.markup),
        (n.languages.mathml = n.languages.markup),
        (n.languages.svg = n.languages.markup),
        (function (e) {
          var t =
              '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
            r = {
              environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp('(\\{)' + t),
                      lookbehind: !0,
                      alias: 'constant',
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            'function-name': [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: 'function',
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
            ],
            'for-or-select': {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: 'variable',
              lookbehind: !0,
            },
            'assign-left': {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
                  lookbehind: !0,
                  alias: 'constant',
                },
              },
              alias: 'variable',
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
              },
              {
                pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
                greedy: !0,
                inside: r,
              },
            ],
            environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
            variable: r.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: 'class-name',
            },
            boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 },
            'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
            operator: {
              pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
          };
          for (
            var n = [
                'comment',
                'function-name',
                'for-or-select',
                'assign-left',
                'string',
                'environment',
                'function',
                'keyword',
                'builtin',
                'boolean',
                'file-descriptor',
                'operator',
                'punctuation',
                'number',
              ],
              a = r.variable[1].inside,
              o = 0;
            o < n.length;
            o++
          )
            a[n[o]] = e.languages.bash[n[o]];
          e.languages.shell = e.languages.bash;
        })(n),
        (n.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (n.languages.c = n.languages.extend('clike', {
          'class-name': { pattern: /(\b(?:enum|struct)\s+)\w+/, lookbehind: !0 },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
          number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i,
        })),
        n.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            alias: 'property',
            inside: {
              string: { pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/, lookbehind: !0 },
              directive: {
                pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: 'keyword',
              },
            },
          },
          constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete n.languages.c['boolean'],
        (n.languages.cpp = n.languages.extend('c', {
          'class-name': { pattern: /(\b(?:class|enum|struct)\s+)\w+/, lookbehind: !0 },
          keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
          number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
            greedy: !0,
          },
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:true|false)\b/,
        })),
        n.languages.insertBefore('cpp', 'string', {
          'raw-string': {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: 'string',
            greedy: !0,
          },
        }),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /@[\w-]+/ } },
            url: {
              pattern: RegExp('url\\((?:' + t.source + '|[^\n\r()]*)\\)', 'i'),
              inside: { function: /^url/i, punctuation: /^\(|\)$/ },
            },
            selector: RegExp('[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)'),
            string: { pattern: t, greedy: !0 },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css['atrule'].inside.rest = e.languages.css);
          var r = e.languages.markup;
          r &&
            (r.tag.addInlined('style', 'css'),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                'style-attr': {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    'attr-name': { pattern: /^\s*style/i, inside: r.tag.inside },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    'attr-value': { pattern: /.+/i, inside: e.languages.css },
                  },
                  alias: 'language-css',
                },
              },
              r.tag,
            ));
        })(n),
        (n.languages.css.selector = {
          pattern: n.languages.css.selector,
          inside: {
            'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
            'pseudo-class': /:[-\w]+/,
            class: /\.[-:.\w]+/,
            id: /#[-:.\w]+/,
            attribute: {
              pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
              greedy: !0,
              inside: {
                punctuation: /^\[|\]$/,
                'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' },
                namespace: {
                  pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
                  lookbehind: !0,
                  inside: { punctuation: /\|$/ },
                },
                attribute: { pattern: /^(\s*)[-\w\xA0-\uFFFF]+/, lookbehind: !0 },
                value: [
                  /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
                  { pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 },
                ],
                operator: /[|~*^$]?=/,
              },
            },
            'n-th': [
              {
                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                lookbehind: !0,
                inside: { number: /[\dn]+/, operator: /[+-]/ },
              },
              { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
            ],
            punctuation: /[()]/,
          },
        }),
        n.languages.insertBefore('css', 'property', {
          variable: {
            pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
            lookbehind: !0,
          },
        }),
        n.languages.insertBefore('css', 'function', {
          operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
          hexcode: /#[\da-f]{3,8}/i,
          entity: /\\[\da-f]{1,8}/i,
          unit: { pattern: /(\d)(?:%|[a-z]+)/, lookbehind: !0 },
          number: /-?[\d.]+/,
        }),
        (n.languages.javascript = n.languages.extend('clike', {
          'class-name': [
            n.languages.clike['class-name'],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
        })),
        (n.languages.javascript[
          'class-name'
        ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        n.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0,
          },
          'function-variable': {
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
              lookbehind: !0,
              inside: n.languages.javascript,
            },
            {
              pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
              inside: n.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: n.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: n.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        n.languages.insertBefore('javascript', 'string', {
          'template-string': {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\${|}$/, alias: 'punctuation' },
                  rest: n.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        n.languages.markup && n.languages.markup.tag.addInlined('script', 'javascript'),
        (n.languages.js = n.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside[
              'attr-value'
            ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              {
                spread: {
                  pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, 'attr-value': /\w+/ },
                },
              },
              e.languages.jsx.tag,
            ),
            e.languages.insertBefore(
              'inside',
              'attr-value',
              {
                script: {
                  pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
                  inside: {
                    'script-punctuation': { pattern: /^=(?={)/, alias: 'punctuation' },
                    rest: e.languages.jsx,
                  },
                  alias: 'language-javascript',
                },
              },
              e.languages.jsx.tag,
            );
          var r = function (e) {
              return e
                ? 'string' === typeof e
                  ? e
                  : 'string' === typeof e.content
                  ? e.content
                  : e.content.map(r).join('')
                : '';
            },
            n = function (t) {
              for (var a = [], o = 0; o < t.length; o++) {
                var i = t[o],
                  s = !1;
                if (
                  ('string' !== typeof i &&
                    ('tag' === i.type && i.content[0] && 'tag' === i.content[0].type
                      ? '</' === i.content[0].content[0].content
                        ? a.length > 0 &&
                          a[a.length - 1].tagName === r(i.content[0].content[1]) &&
                          a.pop()
                        : '/>' === i.content[i.content.length - 1].content ||
                          a.push({ tagName: r(i.content[0].content[1]), openedBraces: 0 })
                      : a.length > 0 && 'punctuation' === i.type && '{' === i.content
                      ? a[a.length - 1].openedBraces++
                      : a.length > 0 &&
                        a[a.length - 1].openedBraces > 0 &&
                        'punctuation' === i.type &&
                        '}' === i.content
                      ? a[a.length - 1].openedBraces--
                      : (s = !0)),
                  (s || 'string' === typeof i) &&
                    a.length > 0 &&
                    0 === a[a.length - 1].openedBraces)
                ) {
                  var l = r(i);
                  o < t.length - 1 &&
                    ('string' === typeof t[o + 1] || 'plain-text' === t[o + 1].type) &&
                    ((l += r(t[o + 1])), t.splice(o + 1, 1)),
                    o > 0 &&
                      ('string' === typeof t[o - 1] || 'plain-text' === t[o - 1].type) &&
                      ((l = r(t[o - 1]) + l), t.splice(o - 1, 1), o--),
                    (t[o] = new e.Token('plain-text', l, null, l));
                }
                i.content && 'string' !== typeof i.content && n(i.content);
              }
            };
          e.hooks.add('after-tokenize', function (e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || n(e.tokens);
          });
        })(n),
        (function (e) {
          var t = (e.languages.javadoclike = {
            parameter: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
              lookbehind: !0,
            },
            punctuation: /[{}]/,
          });
          function r(t, r) {
            var n = 'doc-comment',
              a = e.languages[t];
            if (a) {
              var o = a[n];
              if (!o) {
                var i = {};
                (i[n] = { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, alias: 'comment' }),
                  (a = e.languages.insertBefore(t, 'comment', i)),
                  (o = a[n]);
              }
              if ((o instanceof RegExp && (o = a[n] = { pattern: o }), Array.isArray(o)))
                for (var s = 0, l = o.length; s < l; s++)
                  o[s] instanceof RegExp && (o[s] = { pattern: o[s] }), r(o[s]);
              else r(o);
            }
          }
          function n(e, t) {
            'string' === typeof e && (e = [e]),
              e.forEach(function (e) {
                r(e, function (e) {
                  e.inside || (e.inside = {}), (e.inside.rest = t);
                });
              });
          }
          Object.defineProperty(t, 'addSupport', { value: n }),
            t.addSupport(['java', 'javascript', 'php'], t);
        })(n),
        (function (e) {
          var t = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,
            r = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
          (e.languages.java = e.languages.extend('clike', {
            'class-name': [r, /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
            keyword: t,
            function: [e.languages.clike.function, { pattern: /(\:\:)[a-z_]\w*/, lookbehind: !0 }],
            number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
            operator: {
              pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore('java', 'class-name', {
              annotation: { alias: 'punctuation', pattern: /(^|[^.])@\w+/, lookbehind: !0 },
              namespace: {
                pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
                lookbehind: !0,
                inside: { punctuation: /\./ },
              },
              generics: {
                pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
                inside: {
                  'class-name': r,
                  keyword: t,
                  punctuation: /[<>(),.:]/,
                  operator: /[?&|]/,
                },
              },
            });
        })(n),
        (function (e) {
          function t(e, t) {
            return '___' + e.toUpperCase() + t + '___';
          }
          Object.defineProperties((e.languages['markup-templating'] = {}), {
            buildPlaceholders: {
              value: function (r, n, a, o) {
                if (r.language === n) {
                  var i = (r.tokenStack = []);
                  (r.code = r.code.replace(a, function (e) {
                    if ('function' === typeof o && !o(e)) return e;
                    var a,
                      s = i.length;
                    while (-1 !== r.code.indexOf((a = t(n, s)))) ++s;
                    return (i[s] = e), a;
                  })),
                    (r.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (r, n) {
                if (r.language === n && r.tokenStack) {
                  r.grammar = e.languages[n];
                  var a = 0,
                    o = Object.keys(r.tokenStack);
                  i(r.tokens);
                }
                function i(s) {
                  for (var l = 0; l < s.length; l++) {
                    if (a >= o.length) break;
                    var c = s[l];
                    if ('string' === typeof c || (c.content && 'string' === typeof c.content)) {
                      var u = o[a],
                        p = r.tokenStack[u],
                        d = 'string' === typeof c ? c : c.content,
                        f = t(n, u),
                        g = d.indexOf(f);
                      if (g > -1) {
                        ++a;
                        var m = d.substring(0, g),
                          b = new e.Token(n, e.tokenize(p, r.grammar), 'language-' + n, p),
                          h = d.substring(g + f.length),
                          y = [];
                        m && y.push.apply(y, i([m])),
                          y.push(b),
                          h && y.push.apply(y, i([h])),
                          'string' === typeof c
                            ? s.splice.apply(s, [l, 1].concat(y))
                            : (c.content = y);
                      }
                    } else c.content && i(c.content);
                  }
                  return s;
                }
              },
            },
          });
        })(n),
        (function (e) {
          (e.languages.php = e.languages.extend('clike', {
            keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
            boolean: { pattern: /\b(?:false|true)\b/i, alias: 'constant' },
            constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
            comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
          })),
            e.languages.insertBefore('php', 'string', {
              'shell-comment': { pattern: /(^|[^\\])#.*/, lookbehind: !0, alias: 'comment' },
            }),
            e.languages.insertBefore('php', 'comment', {
              delimiter: { pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i, alias: 'important' },
            }),
            e.languages.insertBefore('php', 'keyword', {
              variable: /\$+(?:\w+\b|(?={))/i,
              package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: { punctuation: /\\/ },
              },
            }),
            e.languages.insertBefore('php', 'operator', {
              property: { pattern: /(->)[\w]+/, lookbehind: !0 },
            });
          var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: { rest: e.languages.php },
          };
          e.languages.insertBefore('php', 'string', {
            'nowdoc-string': {
              pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
              greedy: !0,
              alias: 'string',
              inside: {
                delimiter: {
                  pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                  alias: 'symbol',
                  inside: { punctuation: /^<<<'?|[';]$/ },
                },
              },
            },
            'heredoc-string': {
              pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
              greedy: !0,
              alias: 'string',
              inside: {
                delimiter: {
                  pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                  alias: 'symbol',
                  inside: { punctuation: /^<<<"?|[";]$/ },
                },
                interpolation: t,
              },
            },
            'single-quoted-string': {
              pattern: /'(?:\\[\s\S]|[^\\'])*'/,
              greedy: !0,
              alias: 'string',
            },
            'double-quoted-string': {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              alias: 'string',
              inside: { interpolation: t },
            },
          }),
            delete e.languages.php['string'],
            e.hooks.add('before-tokenize', function (t) {
              if (/<\?/.test(t.code)) {
                var r = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi;
                e.languages['markup-templating'].buildPlaceholders(t, 'php', r);
              }
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'php');
            });
        })(n),
        (function (e) {
          var t = e.languages.javascript,
            r = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source,
            n = '(@(?:param|arg|argument|property)\\s+(?:' + r + '\\s+)?)';
          (e.languages.jsdoc = e.languages.extend('javadoclike', {
            parameter: {
              pattern: RegExp(n + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          })),
            e.languages.insertBefore('jsdoc', 'keyword', {
              'optional-parameter': {
                pattern: RegExp(n + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
                lookbehind: !0,
                inside: {
                  parameter: {
                    pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
                    lookbehind: !0,
                    inside: { punctuation: /\./ },
                  },
                  code: {
                    pattern: /(=)[\s\S]*(?=\]$)/,
                    lookbehind: !0,
                    inside: t,
                    alias: 'language-javascript',
                  },
                  punctuation: /[=[\]]/,
                },
              },
              'class-name': [
                {
                  pattern: RegExp('(@[a-z]+\\s+)' + r),
                  lookbehind: !0,
                  inside: { punctuation: /[.,:?=<>|{}()[\]]/ },
                },
                {
                  pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
              ],
              example: {
                pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                  code: {
                    pattern: /^(\s*(?:\*\s*)?).+$/m,
                    lookbehind: !0,
                    inside: t,
                    alias: 'language-javascript',
                  },
                },
              },
            }),
            e.languages.javadoclike.addSupport('javascript', e.languages.jsdoc);
        })(n),
        (n.languages.actionscript = n.languages.extend('javascript', {
          keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (n.languages.actionscript['class-name'].alias = 'function'),
        n.languages.markup &&
          n.languages.insertBefore('actionscript', 'string', {
            xml: {
              pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: { rest: n.languages.markup },
            },
          }),
        (function (e) {
          var t = /#(?!\{).+/,
            r = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: r } },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: r },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  rest: e.languages.javascript,
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: 'string',
                  inside: { interpolation: r },
                },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(n),
        (function (e) {
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp(
                '(\\.\\s*)' + e.languages.javascript['function-variable'].pattern.source,
              ),
              lookbehind: !0,
              alias: ['function-variable', 'method', 'function', 'property-access'],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp('(\\.\\s*)' + e.languages.javascript['function'].source),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.javascript['keyword'].unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' },
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': {
                pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                lookbehind: !0,
              },
              'maybe-class-name': {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var t = [
                'function',
                'function-variable',
                'method',
                'method-variable',
                'property-access',
              ],
              r = 0;
            r < t.length;
            r++
          ) {
            var n = t[r],
              a = e.languages.javascript[n];
            'RegExp' === e.util.type(a) && (a = e.languages.javascript[n] = { pattern: a });
            var o = a.inside || {};
            (a.inside = o), (o['maybe-class-name'] = /^[A-Z][\s\S]*/);
          }
        })(n),
        (function (e) {
          (e.languages.flow = e.languages.extend('javascript', {})),
            e.languages.insertBefore('flow', 'keyword', {
              type: [
                {
                  pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
                  alias: 'tag',
                },
              ],
            }),
            (e.languages.flow[
              'function-variable'
            ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i),
            delete e.languages.flow['parameter'],
            e.languages.insertBefore('flow', 'operator', {
              'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
            }),
            Array.isArray(e.languages.flow.keyword) ||
              (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              { pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/, lookbehind: !0 },
              {
                pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
                lookbehind: !0,
              },
            );
        })(n),
        (n.languages.n4js = n.languages.extend('javascript', {
          keyword: /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
        })),
        n.languages.insertBefore('n4js', 'constant', {
          annotation: { pattern: /@+\w+/, alias: 'operator' },
        }),
        (n.languages.n4jsd = n.languages.n4js),
        (n.languages.typescript = n.languages.extend('javascript', {
          keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
          builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
        })),
        (n.languages.ts = n.languages.typescript),
        (function (e) {
          var t = e.languages.javascript['template-string'],
            r = t.pattern.source,
            n = t.inside['interpolation'],
            a = n.inside['interpolation-punctuation'],
            o = n.pattern.source;
          function i(t, n) {
            if (e.languages[t])
              return {
                pattern: RegExp('((?:' + n + ')\\s*)' + r),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                  'embedded-code': { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function s(e, t) {
            return '___' + t.toUpperCase() + '_' + e + '___';
          }
          function l(t, r, n) {
            var a = { code: t, grammar: r, language: n };
            return (
              e.hooks.run('before-tokenize', a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run('after-tokenize', a),
              a.tokens
            );
          }
          function c(t) {
            var r = {};
            r['interpolation-punctuation'] = a;
            var o = e.tokenize(t, r);
            if (3 === o.length) {
              var i = [1, 1];
              i.push.apply(i, l(o[1], e.languages.javascript, 'javascript')), o.splice.apply(o, i);
            }
            return new e.Token('interpolation', o, n.alias, t);
          }
          function u(t, r, n) {
            var a = e.tokenize(t, { interpolation: { pattern: RegExp(o), lookbehind: !0 } }),
              i = 0,
              u = {},
              p = a
                .map(function (e) {
                  if ('string' === typeof e) return e;
                  var r,
                    a = e.content;
                  while (-1 !== t.indexOf((r = s(i++, n))));
                  return (u[r] = a), r;
                })
                .join(''),
              d = l(p, r, n),
              f = Object.keys(u);
            function g(e) {
              for (var t = 0; t < e.length; t++) {
                if (i >= f.length) return;
                var r = e[t];
                if ('string' === typeof r || 'string' === typeof r.content) {
                  var n = f[i],
                    a = 'string' === typeof r ? r : r.content,
                    o = a.indexOf(n);
                  if (-1 !== o) {
                    ++i;
                    var s = a.substring(0, o),
                      l = c(u[n]),
                      p = a.substring(o + n.length),
                      d = [];
                    if ((s && d.push(s), d.push(l), p)) {
                      var m = [p];
                      g(m), d.push.apply(d, m);
                    }
                    'string' === typeof r
                      ? (e.splice.apply(e, [t, 1].concat(d)), (t += d.length - 1))
                      : (r.content = d);
                  }
                } else {
                  var b = r.content;
                  Array.isArray(b) ? g(b) : g([b]);
                }
              }
            }
            return (i = 0), g(d), new e.Token(n, d, 'language-' + n, t);
          }
          e.languages.javascript['template-string'] = [
            i(
              'css',
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source,
            ),
            i('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i('svg', /\bsvg/.source),
            i('markdown', /\b(?:md|markdown)/.source),
            i('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            t,
          ].filter(Boolean);
          var p = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
          function d(e) {
            return 'string' === typeof e ? e : Array.isArray(e) ? e.map(d).join('') : d(e.content);
          }
          e.hooks.add('after-tokenize', function (t) {
            function r(t) {
              for (var n = 0, a = t.length; n < a; n++) {
                var o = t[n];
                if ('string' !== typeof o) {
                  var i = o.content;
                  if (Array.isArray(i))
                    if ('template-string' === o.type) {
                      var s = i[1];
                      if (3 === i.length && 'string' !== typeof s && 'embedded-code' === s.type) {
                        var l = d(s),
                          c = s.alias,
                          p = Array.isArray(c) ? c[0] : c,
                          f = e.languages[p];
                        if (!f) continue;
                        i[1] = u(l, f, p);
                      }
                    } else r(i);
                  else 'string' !== typeof i && r([i]);
                }
              }
            }
            t.language in p && r(t.tokens);
          });
        })(n),
        (n.languages.graphql = {
          comment: /#.*/,
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': {
            pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: 'function',
          },
          keyword: /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
          operator: /[!=|]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
          function r(e, r) {
            return (
              (e = e.replace(/<inner>/g, t)),
              r && (e = e + '|' + e.replace(/_/g, '\\*')),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var n = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            a = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, n),
            o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
          (e.languages.markdown = e.languages.extend('markup', {})),
            e.languages.insertBefore('markdown', 'prolog', {
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
              table: {
                pattern: RegExp('^' + a + o + '(?:' + a + ')*', 'm'),
                inside: {
                  'table-data-rows': {
                    pattern: RegExp('^(' + a + o + ')(?:' + a + ')*$'),
                    lookbehind: !0,
                    inside: {
                      'table-data': { pattern: RegExp(n), inside: e.languages.markdown },
                      punctuation: /\|/,
                    },
                  },
                  'table-line': {
                    pattern: RegExp('^(' + a + ')' + o + '$'),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  'table-header-row': {
                    pattern: RegExp('^' + a + '$'),
                    inside: {
                      'table-header': {
                        pattern: RegExp(n),
                        alias: 'important',
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
                  lookbehind: !0,
                  alias: 'keyword',
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    'code-block': {
                      pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
                      lookbehind: !0,
                    },
                    'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: 'important',
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#+.+/m,
                  lookbehind: !0,
                  alias: 'important',
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: 'punctuation',
              },
              'url-reference': {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: 'url',
              },
              bold: {
                pattern: r(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: r(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, !0),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: r(/(~~?)(?:(?!~)<inner>)+?\2/.source, !1),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: r(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
                    .source,
                  !1,
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                  content: { pattern: /(^!?\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                  string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
                },
              },
            }),
            ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
              ['url', 'bold', 'italic', 'strike'].forEach(function (r) {
                t !== r &&
                  (e.languages.markdown[t].inside.content.inside[r] = e.languages.markdown[r]);
              });
            }),
            e.hooks.add('after-tokenize', function (e) {
              function t(e) {
                if (e && 'string' !== typeof e)
                  for (var r = 0, n = e.length; r < n; r++) {
                    var a = e[r];
                    if ('code' === a.type) {
                      var o = a.content[1],
                        i = a.content[3];
                      if (
                        o &&
                        i &&
                        'code-language' === o.type &&
                        'code-block' === i.type &&
                        'string' === typeof o.content
                      ) {
                        var s = 'language-' + o.content.trim().split(/\s+/)[0].toLowerCase();
                        i.alias
                          ? 'string' === typeof i.alias
                            ? (i.alias = [i.alias, s])
                            : i.alias.push(s)
                          : (i.alias = [s]);
                      }
                    } else t(a.content);
                  }
              }
              ('markdown' !== e.language && 'md' !== e.language) || t(e.tokens);
            }),
            e.hooks.add('wrap', function (t) {
              if ('code-block' === t.type) {
                for (var r = '', n = 0, a = t.classes.length; n < a; n++) {
                  var o = t.classes[n],
                    i = /language-(.+)/.exec(o);
                  if (i) {
                    r = i[1];
                    break;
                  }
                }
                var s = e.languages[r];
                if (s) {
                  var l = t.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
                  t.content = e.highlight(l, s, r);
                } else if (r && 'none' !== r && e.plugins.autoloader) {
                  var c = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random());
                  (t.attributes['id'] = c),
                    e.plugins.autoloader.loadLanguages(r, function () {
                      var t = document.getElementById(c);
                      t && (t.innerHTML = e.highlight(t.textContent, e.languages[r], r));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(n),
        (function (e) {
          e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m] };
          var t = {
            'deleted-sign': '-',
            'deleted-arrow': '<',
            'inserted-sign': '+',
            'inserted-arrow': '>',
            unchanged: ' ',
            diff: '!',
          };
          Object.keys(t).forEach(function (r) {
            var n = t[r],
              a = [];
            /^\w+$/.test(r) || a.push(/\w+/.exec(r)[0]),
              'diff' === r && a.push('bold'),
              (e.languages.diff[r] = {
                pattern: RegExp('^(?:[' + n + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
                alias: a,
              });
          }),
            Object.defineProperty(e.languages.diff, 'PREFIXES', { value: t });
        })(n),
        (n.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
          coord: /^@@.*@@$/m,
          commit_sha1: /^commit \w{40}$/m,
        }),
        (n.languages.go = n.languages.extend('clike', {
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          string: { pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
        })),
        delete n.languages.go['class-name'],
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: 'punctuation' },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
              lookbehind: !0,
              alias: 'keyword',
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add('before-tokenize', function (t) {
              var r = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
              e.languages['markup-templating'].buildPlaceholders(t, 'handlebars', r);
            }),
            e.hooks.add('after-tokenize', function (t) {
              e.languages['markup-templating'].tokenizePlaceholders(t, 'handlebars');
            });
        })(n),
        (n.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
          number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (n.languages.less = n.languages.extend('css', {
          comment: [/\/\*[\s\S]*?\*\//, { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 }],
          atrule: {
            pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        n.languages.insertBefore('less', 'property', {
          variable: [{ pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } }, /@@?[\w-]+/],
          'mixin-usage': {
            pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
            lookbehind: !0,
            alias: 'function',
          },
        }),
        (n.languages.makefile = {
          comment: { pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/, lookbehind: !0 },
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (n.languages.objectivec = n.languages.extend('c', {
          keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete n.languages.objectivec['class-name'],
        (n.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i, greedy: !0 },
          ],
          number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
          type: { pattern: /\B['`]\w*/, alias: 'variable' },
          directive: { pattern: /\B#\w+/, alias: 'function' },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
          punctuation: /[(){}\[\]|_.,:;]/,
        }),
        (n.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          'string-interpolation': {
            pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  'format-spec': { pattern: /(:)[^:(){}]+(?=}$)/, lookbehind: !0 },
                  'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
            greedy: !0,
            alias: 'string',
          },
          string: { pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
          function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/i,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (n.languages.python['string-interpolation'].inside['interpolation'].inside.rest =
          n.languages.python),
        (n.languages.py = n.languages.python),
        (n.languages.reason = n.languages.extend('clike', {
          comment: { pattern: /(^|[^\\])\/\*[\s\S]*?\*\//, lookbehind: !0 },
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
          'class-name': /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        n.languages.insertBefore('reason', 'class-name', {
          character: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: 'string',
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: 'variable' },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete n.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend('css', {
            comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 },
          })),
            e.languages.insertBefore('sass', 'atrule', {
              'atrule-line': {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            r = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore('sass', 'property', {
            'variable-line': {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: r },
            },
            'property-line': {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
              inside: {
                property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }],
                punctuation: /:/,
                variable: t,
                operator: r,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore('sass', 'punctuation', {
              selector: {
                pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(n),
        (n.languages.scss = n.languages.extend('css', {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
          atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: 'important' },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        n.languages.insertBefore('scss', 'atrule', {
          keyword: [
            /@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        n.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
        n.languages.insertBefore('scss', 'function', {
          placeholder: { pattern: /%[-\w]+/, alias: 'selector' },
          statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
          operator: { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/, lookbehind: !0 },
        }),
        (n.languages.scss['atrule'].inside.rest = n.languages.scss),
        (n.languages.sql = {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
          variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = {
            url: /url\((["']?).*?\1\)/i,
            string: { pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/, greedy: !0 },
            interpolation: null,
            func: null,
            important: /\B!(?:important|optional)\b/i,
            keyword: {
              pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
              lookbehind: !0,
            },
            hexcode: /#[\da-f]{3,6}/i,
            number: /\b\d+(?:\.\d+)?%?/,
            boolean: /\b(?:true|false)\b/,
            operator: [
              /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
            ],
            punctuation: /[{}()\[\];:,]/,
          };
          (t['interpolation'] = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: 'variable',
            inside: { delimiter: { pattern: /^{|}$/, alias: 'punctuation' }, rest: t },
          }),
            (t['func'] = { pattern: /[\w-]+\([^)]*\).*/, inside: { function: /^[^(]+/, rest: t } }),
            (e.languages.stylus = {
              comment: { pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
              'atrule-declaration': {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: t },
              },
              'variable-declaration': {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: t },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: t },
              },
              'property-declaration': {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: { pattern: /^[^\s:]+/, inside: { interpolation: t.interpolation } },
                  rest: t,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: { interpolation: t.interpolation, punctuation: /[{},]/ },
              },
              func: t.func,
              string: t.string,
              interpolation: t.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(n);
      var a = n.util.clone(n.languages.typescript);
      (n.languages.tsx = n.languages.extend('jsx', a)),
        (n.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (n.languages.yaml = {
          scalar: {
            pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
            lookbehind: !0,
            alias: 'string',
          },
          comment: /#.*/,
          key: {
            pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
            lookbehind: !0,
            alias: 'atrule',
          },
          directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
          datetime: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
            lookbehind: !0,
            alias: 'number',
          },
          boolean: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important',
          },
          null: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
            alias: 'important',
          },
          string: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
            lookbehind: !0,
            greedy: !0,
          },
          number: {
            pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
            lookbehind: !0,
          },
          tag: /![^\s]+/,
          important: /[&*][\w]+/,
          punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
        }),
        (n.languages.yml = n.languages.yaml);
      var o = n,
        i = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            {
              types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'],
              style: { color: '#6c6783' },
            },
            { types: ['namespace'], style: { opacity: 0.7 } },
            { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        s = i,
        l = r('q1tI'),
        c = { Prism: o, theme: s };
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function p() {
        return (
          (p =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          p.apply(this, arguments)
        );
      }
      var d = /\r\n|\r|\n/,
        f = function (e) {
          0 === e.length
            ? e.push({ types: ['plain'], content: '', empty: !0 })
            : 1 === e.length && '' === e[0].content && (e[0].empty = !0);
        },
        g = function (e, t) {
          var r = e.length;
          return r > 0 && e[r - 1] === t ? e : e.concat(t);
        },
        m = function (e) {
          var t = [[]],
            r = [e],
            n = [0],
            a = [e.length],
            o = 0,
            i = 0,
            s = [],
            l = [s];
          while (i > -1) {
            while ((o = n[i]++) < a[i]) {
              var c = void 0,
                u = t[i],
                p = r[i],
                m = p[o];
              if (
                ('string' === typeof m
                  ? ((u = i > 0 ? u : ['plain']), (c = m))
                  : ((u = g(u, m.type)), m.alias && (u = g(u, m.alias)), (c = m.content)),
                'string' === typeof c)
              ) {
                var b = c.split(d),
                  h = b.length;
                s.push({ types: u, content: b[0] });
                for (var y = 1; y < h; y++)
                  f(s), l.push((s = [])), s.push({ types: u, content: b[y] });
              } else i++, t.push(u), r.push(c), n.push(0), a.push(c.length);
            }
            i--, t.pop(), r.pop(), n.pop(), a.pop();
          }
          return f(s), l;
        },
        b = function (e, t) {
          var r = e.plain,
            n = Object.create(null),
            a = e.styles.reduce(function (e, r) {
              var n = r.languages,
                a = r.style;
              return (
                (n && !n.includes(t)) ||
                  r.types.forEach(function (t) {
                    var r = p({}, e[t], a);
                    e[t] = r;
                  }),
                e
              );
            }, n);
          return (a.root = r), (a.plain = p({}, r, { backgroundColor: null })), a;
        };
      function h(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && -1 === t.indexOf(n) && (r[n] = e[n]);
        return r;
      }
      var y = (function (e) {
        function t() {
          var t = this,
            r = [],
            n = arguments.length;
          while (n--) r[n] = arguments[n];
          e.apply(this, r),
            u(this, 'getThemeDict', function (e) {
              if (
                void 0 !== t.themeDict &&
                e.theme === t.prevTheme &&
                e.language === t.prevLanguage
              )
                return t.themeDict;
              (t.prevTheme = e.theme), (t.prevLanguage = e.language);
              var r = e.theme ? b(e.theme, e.language) : void 0;
              return (t.themeDict = r);
            }),
            u(this, 'getLineProps', function (e) {
              var r = e.key,
                n = e.className,
                a = e.style,
                o = h(e, ['key', 'className', 'style', 'line']),
                i = o,
                s = p({}, i, { className: 'token-line', style: void 0, key: void 0 }),
                l = t.getThemeDict(t.props);
              return (
                void 0 !== l && (s.style = l.plain),
                void 0 !== a && (s.style = void 0 !== s.style ? p({}, s.style, a) : a),
                void 0 !== r && (s.key = r),
                n && (s.className += ' ' + n),
                s
              );
            }),
            u(this, 'getStyleForToken', function (e) {
              var r = e.types,
                n = e.empty,
                a = r.length,
                o = t.getThemeDict(t.props);
              if (void 0 !== o) {
                if (1 === a && 'plain' === r[0]) return n ? { display: 'inline-block' } : void 0;
                if (1 === a && !n) return o[r[0]];
                var i = n ? { display: 'inline-block' } : {},
                  s = r.map(function (e) {
                    return o[e];
                  });
                return Object.assign.apply(Object, [i].concat(s));
              }
            }),
            u(this, 'getTokenProps', function (e) {
              var r = e.key,
                n = e.className,
                a = e.style,
                o = e.token,
                i = h(e, ['key', 'className', 'style', 'token']),
                s = i,
                l = p({}, s, {
                  className: 'token ' + o.types.join(' '),
                  children: o.content,
                  style: t.getStyleForToken(o),
                  key: void 0,
                });
              return (
                void 0 !== a && (l.style = void 0 !== l.style ? p({}, l.style, a) : a),
                void 0 !== r && (l.key = r),
                n && (l.className += ' ' + n),
                l
              );
            });
        }
        return (
          e && (t.__proto__ = e),
          (t.prototype = Object.create(e && e.prototype)),
          (t.prototype.constructor = t),
          (t.prototype.render = function () {
            var e = this.props,
              t = e.Prism,
              r = e.language,
              n = e.code,
              a = e.children,
              o = this.getThemeDict(this.props),
              i = t.languages[r],
              s = void 0 !== i ? t.tokenize(n, i, r) : [n],
              l = m(s);
            return a({
              tokens: l,
              className: 'prism-code language-' + r,
              style: void 0 !== o ? o.root : {},
              getLineProps: this.getLineProps,
              getTokenProps: this.getTokenProps,
            });
          }),
          t
        );
      })(l['Component']);
      t['default'] = y;
    },
    '5Yjd': function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = d(r('q1tI')),
        a = u(r('ns0B')),
        o = u(r('7XYx')),
        i = u(r('qOys')),
        s = d(r('R2QN')),
        l = u(r('YXCA')),
        c = u(r('Eucq'));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function p() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function d(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== f(e) && 'function' !== typeof e)) return { default: e };
        var t = p();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : (r[a] = e[a]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      function f(e) {
        return (
          (f =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          f(e)
        );
      }
      function g() {
        return (
          (g =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          g.apply(this, arguments)
        );
      }
      function m(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = b(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function b(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                v(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function v(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function w(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function E(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function k(e, t, r) {
        return t && E(e.prototype, t), r && E(e, r), e;
      }
      function S(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && A(e, t);
      }
      function A(e, t) {
        return (
          (A =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          A(e, t)
        );
      }
      function O(e) {
        return function () {
          var t,
            r = N(e);
          if (_()) {
            var n = N(this).constructor;
            t = Reflect.construct(r, arguments, n);
          } else t = r.apply(this, arguments);
          return x(this, t);
        };
      }
      function x(e, t) {
        return !t || ('object' !== f(t) && 'function' !== typeof t) ? T(e) : t;
      }
      function T(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function _() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function N(e) {
        return (
          (N = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          N(e)
        );
      }
      r('nw8D');
      var I = (function (e) {
          S(r, e);
          var t = O(r);
          function r() {
            var e;
            w(this, r);
            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
            return (
              (e = t.call.apply(t, [this].concat(o))),
              (e.state = {
                showSource: !1,
                sourceType: '',
                CSBData: '',
                showRiddle: !1,
                currentFile: '',
              }),
              (e.initCSBData = function () {
                var t,
                  r = e.props,
                  n = r.source,
                  o = r.desc,
                  i = void 0 === o ? '' : o,
                  l = r.title,
                  c = r.dependencies,
                  u = r.files,
                  p = Boolean(n.tsx),
                  d = p ? 'tsx' : 'jsx',
                  f = {
                    files: y(
                      ((t = {
                        'index.html': { content: '<div style="margin: 16px;" id="root"></div>' },
                      }),
                      v(t, 'demo.'.concat(d), { content: n.tsx || n.jsx }),
                      v(t, 'index.'.concat(d), {
                        content: "import React from 'react';\nimport ReactDOM from 'react-dom';\n"
                          .concat(
                            c.antd ? "import 'antd/dist/antd.css';" : '',
                            "\nimport App from './demo';\n\n",
                          )
                          .concat(s.issueLink),
                      }),
                      t),
                      u,
                    ),
                    deps: y({}, c, { react: '^16.8.0' }),
                    devDependencies: p ? { typescript: '^3.8.0' } : {},
                    desc: (0, a.default)(i),
                    template: 'create-react-app'.concat(p ? '-typescript' : ''),
                    fileName: 'demo.'.concat(d),
                  };
                e.setState({ CSBData: (0, s.default)(f, { name: l || 'dumi-demo' }).parameters });
              }),
              (e.getSafeEntryCode = function () {
                var t = e.props,
                  r = t.source,
                  n = t.files,
                  a = r.tsx || r.jsx;
                return (
                  Object.keys(n).forEach(function (e) {
                    var t = n[e];
                    a.replace(t.path, './'.concat(e));
                  }),
                  a
                );
              }),
              (e.convertRiddleJS = function (t) {
                var r = e.props.dependencies,
                  n = t;
                return (
                  (n = n
                    .replace('export default', 'const DumiDemo =')
                    .concat('\nReactDOM.render(<DumiDemo />, mountNode);')),
                  (n = n.replace(/(from ')((?:@[^/'"]+)?[^/'"]+)/g, function (e, t, n) {
                    var a = ''.concat(t).concat(n);
                    return r[n] && (a += '@'.concat(r[n])), a;
                  })),
                  n
                );
              }),
              e
            );
          }
          return (
            k(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.source,
                    n = t.defaultShowCode,
                    a = void 0 !== n && n;
                  this.initCSBData(),
                    this.setState({ sourceType: r.tsx ? 'tsx' : 'jsx', showSource: a });
                  var o = document.createElement('img');
                  setTimeout(function () {
                    o.src = '';
                  }, 200),
                    (o.onload = function () {
                      e.setState({ showRiddle: !0 });
                    }),
                    (o.src =
                      'https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png');
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    r = this,
                    a = this.props,
                    s = a.children,
                    l = a.source,
                    u = a.title,
                    p = a.desc,
                    d = a.inline,
                    f = a.transform,
                    b = a.background,
                    h = a.compact,
                    y = a.path,
                    v = a.dependencies,
                    w = a.files,
                    E = m(a, [
                      'children',
                      'source',
                      'title',
                      'desc',
                      'inline',
                      'transform',
                      'background',
                      'compact',
                      'path',
                      'dependencies',
                      'files',
                    ]),
                    k = this.state,
                    S = k.showSource,
                    A = k.sourceType,
                    O = k.showRiddle,
                    x = k.currentFile,
                    T = l[A],
                    _ = Boolean(Object.keys(w).length),
                    N = x ? x.match(/\.(\w+)$/)[1] : A;
                  return d
                    ? s
                    : n.default.createElement(
                        'div',
                        g({}, E, {
                          className: ['__dumi-default-previewer', E.className].join(' '),
                        }),
                        n.default.createElement(
                          'div',
                          {
                            className: '__dumi-default-previewer-demo',
                            style: {
                              transform: f ? 'translate(0, 0)' : void 0,
                              padding: h ? '0' : void 0,
                              background: b,
                            },
                          },
                          s,
                        ),
                        n.default.createElement('div', {
                          className: '__dumi-default-previewer-desc',
                          title: u,
                          dangerouslySetInnerHTML: { __html: p },
                        }),
                        n.default.createElement(
                          'div',
                          { className: '__dumi-default-previewer-actions' },
                          !_ &&
                            n.default.createElement(
                              n.default.Fragment,
                              null,
                              n.default.createElement(
                                c.default,
                                {
                                  type: this.props.source.tsx ? 'tsx' : 'jsx',
                                  base64: this.state.CSBData,
                                },
                                n.default.createElement('button', {
                                  className: '__dumi-default-icon',
                                  role: 'codesandbox',
                                  type: 'submit',
                                }),
                              ),
                              O &&
                                n.default.createElement(
                                  'form',
                                  {
                                    action: '//riddle.alibaba-inc.com/riddles/define',
                                    method: 'POST',
                                    target: '_blank',
                                    style: { display: 'flex' },
                                  },
                                  n.default.createElement('button', {
                                    className: '__dumi-default-icon',
                                    role: 'riddle',
                                    type: 'submit',
                                  }),
                                  n.default.createElement('input', {
                                    type: 'hidden',
                                    name: 'data',
                                    value: JSON.stringify({
                                      title: u,
                                      js: this.convertRiddleJS(T),
                                      css: v.antd
                                        ? "@import 'antd".concat(
                                            '@'.concat(v.antd),
                                            "/dist/antd.css';",
                                          )
                                        : '',
                                    }),
                                  }),
                                ),
                            ),
                          y &&
                            n.default.createElement(
                              'a',
                              { target: '_blank', rel: 'noopener noreferrer', href: y },
                              n.default.createElement('button', {
                                className: '__dumi-default-icon',
                                role: 'open-demo',
                                type: 'button',
                              }),
                            ),
                          n.default.createElement('span', null),
                          n.default.createElement(o.default, {
                            text: (null === (e = w[x]) || void 0 === e ? void 0 : e.content) || T,
                          }),
                          l.tsx &&
                            S &&
                            !_ &&
                            n.default.createElement('button', {
                              className: '__dumi-default-icon',
                              role: 'change-'.concat(A),
                              type: 'button',
                              onClick: function () {
                                return r.setState({ sourceType: 'tsx' === A ? 'jsx' : 'tsx' });
                              },
                            }),
                          n.default.createElement('button', {
                            className: '__dumi-default-icon',
                            role: 'source',
                            type: 'button',
                            onClick: function () {
                              return r.setState({ showSource: !S });
                            },
                          }),
                        ),
                        S &&
                          n.default.createElement(
                            'div',
                            { className: '__dumi-default-previewer-source-wrapper' },
                            _ &&
                              n.default.createElement(
                                'ul',
                                { className: '__dumi-default-previewer-source-tab' },
                                n.default.createElement(
                                  'li',
                                  { className: x ? '' : 'active' },
                                  n.default.createElement(
                                    'button',
                                    {
                                      type: 'button',
                                      onClick: function () {
                                        return r.setState({ currentFile: '' });
                                      },
                                    },
                                    'index.',
                                    A,
                                  ),
                                ),
                                Object.keys(w).map(function (e) {
                                  return n.default.createElement(
                                    'li',
                                    { className: x === e ? 'active' : '', key: e },
                                    n.default.createElement(
                                      'button',
                                      {
                                        type: 'button',
                                        onClick: function () {
                                          return r.setState({ currentFile: e });
                                        },
                                      },
                                      e,
                                    ),
                                  );
                                }),
                              ),
                            n.default.createElement(
                              'div',
                              { className: '__dumi-default-previewer-source' },
                              n.default.createElement(i.default, {
                                code:
                                  (null === (t = w[x]) || void 0 === t ? void 0 : t.content) || T,
                                lang: N,
                                showCopy: !1,
                              }),
                            ),
                          ),
                      );
                },
              },
            ]),
            r
          );
        })(n.Component),
        R = (0, l.default)(I);
      t.default = R;
    },
    '6xEa': function (e, t, r) {
      var n,
        a = (function () {
          var e = String.fromCharCode,
            t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            n = {};
          function a(e, t) {
            if (!n[e]) {
              n[e] = {};
              for (var r = 0; r < e.length; r++) n[e][e.charAt(r)] = r;
            }
            return n[e][t];
          }
          var o = {
            compressToBase64: function (e) {
              if (null == e) return '';
              var r = o._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (r.length % 4) {
                default:
                case 0:
                  return r;
                case 1:
                  return r + '===';
                case 2:
                  return r + '==';
                case 3:
                  return r + '=';
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : o._decompress(e.length, 32, function (r) {
                    return a(t, e.charAt(r));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ''
                : o._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : o._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = o.compress(e), r = new Uint8Array(2 * t.length), n = 0, a = t.length;
                n < a;
                n++
              ) {
                var i = t.charCodeAt(n);
                (r[2 * n] = i >>> 8), (r[2 * n + 1] = i % 256);
              }
              return r;
            },
            decompressFromUint8Array: function (t) {
              if (null === t || void 0 === t) return o.decompress(t);
              for (var r = new Array(t.length / 2), n = 0, a = r.length; n < a; n++)
                r[n] = 256 * t[2 * n] + t[2 * n + 1];
              var i = [];
              return (
                r.forEach(function (t) {
                  i.push(e(t));
                }),
                o.decompress(i.join(''))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : o._compress(e, 6, function (e) {
                    return r.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : ((e = e.replace(/ /g, '+')),
                  o._decompress(e.length, 32, function (t) {
                    return a(r, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return o._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, r) {
              if (null == e) return '';
              var n,
                a,
                o,
                i = {},
                s = {},
                l = '',
                c = '',
                u = '',
                p = 2,
                d = 3,
                f = 2,
                g = [],
                m = 0,
                b = 0;
              for (o = 0; o < e.length; o += 1)
                if (
                  ((l = e.charAt(o)),
                  Object.prototype.hasOwnProperty.call(i, l) || ((i[l] = d++), (s[l] = !0)),
                  (c = u + l),
                  Object.prototype.hasOwnProperty.call(i, c))
                )
                  u = c;
                else {
                  if (Object.prototype.hasOwnProperty.call(s, u)) {
                    if (u.charCodeAt(0) < 256) {
                      for (n = 0; n < f; n++)
                        (m <<= 1), b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++;
                      for (a = u.charCodeAt(0), n = 0; n < 8; n++)
                        (m = (m << 1) | (1 & a)),
                          b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                          (a >>= 1);
                    } else {
                      for (a = 1, n = 0; n < f; n++)
                        (m = (m << 1) | a),
                          b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                          (a = 0);
                      for (a = u.charCodeAt(0), n = 0; n < 16; n++)
                        (m = (m << 1) | (1 & a)),
                          b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                          (a >>= 1);
                    }
                    p--, 0 == p && ((p = Math.pow(2, f)), f++), delete s[u];
                  } else
                    for (a = i[u], n = 0; n < f; n++)
                      (m = (m << 1) | (1 & a)),
                        b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                        (a >>= 1);
                  p--, 0 == p && ((p = Math.pow(2, f)), f++), (i[c] = d++), (u = String(l));
                }
              if ('' !== u) {
                if (Object.prototype.hasOwnProperty.call(s, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (n = 0; n < f; n++)
                      (m <<= 1), b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++;
                    for (a = u.charCodeAt(0), n = 0; n < 8; n++)
                      (m = (m << 1) | (1 & a)),
                        b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                        (a >>= 1);
                  } else {
                    for (a = 1, n = 0; n < f; n++)
                      (m = (m << 1) | a),
                        b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                        (a = 0);
                    for (a = u.charCodeAt(0), n = 0; n < 16; n++)
                      (m = (m << 1) | (1 & a)),
                        b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                        (a >>= 1);
                  }
                  p--, 0 == p && ((p = Math.pow(2, f)), f++), delete s[u];
                } else
                  for (a = i[u], n = 0; n < f; n++)
                    (m = (m << 1) | (1 & a)),
                      b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                      (a >>= 1);
                p--, 0 == p && ((p = Math.pow(2, f)), f++);
              }
              for (a = 2, n = 0; n < f; n++)
                (m = (m << 1) | (1 & a)),
                  b == t - 1 ? ((b = 0), g.push(r(m)), (m = 0)) : b++,
                  (a >>= 1);
              while (1) {
                if (((m <<= 1), b == t - 1)) {
                  g.push(r(m));
                  break;
                }
                b++;
              }
              return g.join('');
            },
            decompress: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : o._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, r, n) {
              var a,
                o,
                i,
                s,
                l,
                c,
                u,
                p = [],
                d = 4,
                f = 4,
                g = 3,
                m = '',
                b = [],
                h = { val: n(0), position: r, index: 1 };
              for (a = 0; a < 3; a += 1) p[a] = a;
              (i = 0), (l = Math.pow(2, 2)), (c = 1);
              while (c != l)
                (s = h.val & h.position),
                  (h.position >>= 1),
                  0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                  (i |= (s > 0 ? 1 : 0) * c),
                  (c <<= 1);
              switch (i) {
                case 0:
                  (i = 0), (l = Math.pow(2, 8)), (c = 1);
                  while (c != l)
                    (s = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = e(i);
                  break;
                case 1:
                  (i = 0), (l = Math.pow(2, 16)), (c = 1);
                  while (c != l)
                    (s = h.val & h.position),
                      (h.position >>= 1),
                      0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = e(i);
                  break;
                case 2:
                  return '';
              }
              (p[3] = u), (o = u), b.push(u);
              while (1) {
                if (h.index > t) return '';
                (i = 0), (l = Math.pow(2, g)), (c = 1);
                while (c != l)
                  (s = h.val & h.position),
                    (h.position >>= 1),
                    0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                    (i |= (s > 0 ? 1 : 0) * c),
                    (c <<= 1);
                switch ((u = i)) {
                  case 0:
                    (i = 0), (l = Math.pow(2, 8)), (c = 1);
                    while (c != l)
                      (s = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (p[f++] = e(i)), (u = f - 1), d--;
                    break;
                  case 1:
                    (i = 0), (l = Math.pow(2, 16)), (c = 1);
                    while (c != l)
                      (s = h.val & h.position),
                        (h.position >>= 1),
                        0 == h.position && ((h.position = r), (h.val = n(h.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (p[f++] = e(i)), (u = f - 1), d--;
                    break;
                  case 2:
                    return b.join('');
                }
                if ((0 == d && ((d = Math.pow(2, g)), g++), p[u])) m = p[u];
                else {
                  if (u !== f) return null;
                  m = o + o.charAt(0);
                }
                b.push(m),
                  (p[f++] = o + m.charAt(0)),
                  d--,
                  (o = m),
                  0 == d && ((d = Math.pow(2, g)), g++);
              }
            },
          };
          return o;
        })();
      (n = function () {
        return a;
      }.call(t, r, t, e)),
        void 0 === n || (e.exports = n);
    },
    '7XYx': function (e, t, r) {
      'use strict';
      function n(e) {
        return (
          (n =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          n(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = l(r('q1tI')),
        o = i(r('Vou3'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== n(e) && 'function' !== typeof e)) return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      function c(e, t) {
        return g(e) || f(e, t) || p(e, t) || u();
      }
      function u() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function p(e, t) {
        if (e) {
          if ('string' === typeof e) return d(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(r)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? d(e, t)
              : void 0
          );
        }
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
              if ((r.push(i.value), t && r.length === t)) break;
          } catch (l) {
            (a = !0), (o = l);
          } finally {
            try {
              n || null == s['return'] || s['return']();
            } finally {
              if (a) throw o;
            }
          }
          return r;
        }
      }
      function g(e) {
        if (Array.isArray(e)) return e;
      }
      r('1CDa');
      var m = function (e) {
        var t = e.text,
          r = e.className,
          n = e.style,
          i = (0, a.useState)(),
          s = c(i, 2),
          l = s[0],
          u = s[1];
        return a.default.createElement(o.default, {
          'button-className': '__dumi-default-icon __dumi-default-btn-copy '.concat(r || ''),
          'button-style': n,
          'button-data-status': l ? 'copied' : 'copy',
          'data-clipboard-text': t,
          onSuccess: function () {
            u(function (e) {
              return (
                clearTimeout(e),
                setTimeout(function () {
                  u(null);
                }, 2e3)
              );
            });
          },
        });
      };
      t.default = m;
    },
    B2uJ: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a(r('q1tI'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = s(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function s(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      r('mYBK');
      var l = function (e) {
        var t = e.children,
          r = i(e, ['children']);
        return n.default.createElement('div', o({ className: '__dumi-default-alert' }, r), t);
      };
      t.default = l;
    },
    Eucq: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a(r('q1tI'));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var o = function (e) {
        var t = e.type,
          r = e.base64,
          a = e.children;
        return n.default.createElement(
          'form',
          {
            style: { display: 'flex' },
            method: 'POST',
            action: 'https://codesandbox.io/api/v1/sandboxes/define?query=module=/demo.'.concat(t),
            target: '_blank',
          },
          a,
          n.default.createElement('input', { type: 'hidden', value: r, name: 'parameters' }),
        );
      };
      t.default = o;
    },
    'F//3': function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = [
          ['Aacute', [193]],
          ['aacute', [225]],
          ['Abreve', [258]],
          ['abreve', [259]],
          ['ac', [8766]],
          ['acd', [8767]],
          ['acE', [8766, 819]],
          ['Acirc', [194]],
          ['acirc', [226]],
          ['acute', [180]],
          ['Acy', [1040]],
          ['acy', [1072]],
          ['AElig', [198]],
          ['aelig', [230]],
          ['af', [8289]],
          ['Afr', [120068]],
          ['afr', [120094]],
          ['Agrave', [192]],
          ['agrave', [224]],
          ['alefsym', [8501]],
          ['aleph', [8501]],
          ['Alpha', [913]],
          ['alpha', [945]],
          ['Amacr', [256]],
          ['amacr', [257]],
          ['amalg', [10815]],
          ['amp', [38]],
          ['AMP', [38]],
          ['andand', [10837]],
          ['And', [10835]],
          ['and', [8743]],
          ['andd', [10844]],
          ['andslope', [10840]],
          ['andv', [10842]],
          ['ang', [8736]],
          ['ange', [10660]],
          ['angle', [8736]],
          ['angmsdaa', [10664]],
          ['angmsdab', [10665]],
          ['angmsdac', [10666]],
          ['angmsdad', [10667]],
          ['angmsdae', [10668]],
          ['angmsdaf', [10669]],
          ['angmsdag', [10670]],
          ['angmsdah', [10671]],
          ['angmsd', [8737]],
          ['angrt', [8735]],
          ['angrtvb', [8894]],
          ['angrtvbd', [10653]],
          ['angsph', [8738]],
          ['angst', [197]],
          ['angzarr', [9084]],
          ['Aogon', [260]],
          ['aogon', [261]],
          ['Aopf', [120120]],
          ['aopf', [120146]],
          ['apacir', [10863]],
          ['ap', [8776]],
          ['apE', [10864]],
          ['ape', [8778]],
          ['apid', [8779]],
          ['apos', [39]],
          ['ApplyFunction', [8289]],
          ['approx', [8776]],
          ['approxeq', [8778]],
          ['Aring', [197]],
          ['aring', [229]],
          ['Ascr', [119964]],
          ['ascr', [119990]],
          ['Assign', [8788]],
          ['ast', [42]],
          ['asymp', [8776]],
          ['asympeq', [8781]],
          ['Atilde', [195]],
          ['atilde', [227]],
          ['Auml', [196]],
          ['auml', [228]],
          ['awconint', [8755]],
          ['awint', [10769]],
          ['backcong', [8780]],
          ['backepsilon', [1014]],
          ['backprime', [8245]],
          ['backsim', [8765]],
          ['backsimeq', [8909]],
          ['Backslash', [8726]],
          ['Barv', [10983]],
          ['barvee', [8893]],
          ['barwed', [8965]],
          ['Barwed', [8966]],
          ['barwedge', [8965]],
          ['bbrk', [9141]],
          ['bbrktbrk', [9142]],
          ['bcong', [8780]],
          ['Bcy', [1041]],
          ['bcy', [1073]],
          ['bdquo', [8222]],
          ['becaus', [8757]],
          ['because', [8757]],
          ['Because', [8757]],
          ['bemptyv', [10672]],
          ['bepsi', [1014]],
          ['bernou', [8492]],
          ['Bernoullis', [8492]],
          ['Beta', [914]],
          ['beta', [946]],
          ['beth', [8502]],
          ['between', [8812]],
          ['Bfr', [120069]],
          ['bfr', [120095]],
          ['bigcap', [8898]],
          ['bigcirc', [9711]],
          ['bigcup', [8899]],
          ['bigodot', [10752]],
          ['bigoplus', [10753]],
          ['bigotimes', [10754]],
          ['bigsqcup', [10758]],
          ['bigstar', [9733]],
          ['bigtriangledown', [9661]],
          ['bigtriangleup', [9651]],
          ['biguplus', [10756]],
          ['bigvee', [8897]],
          ['bigwedge', [8896]],
          ['bkarow', [10509]],
          ['blacklozenge', [10731]],
          ['blacksquare', [9642]],
          ['blacktriangle', [9652]],
          ['blacktriangledown', [9662]],
          ['blacktriangleleft', [9666]],
          ['blacktriangleright', [9656]],
          ['blank', [9251]],
          ['blk12', [9618]],
          ['blk14', [9617]],
          ['blk34', [9619]],
          ['block', [9608]],
          ['bne', [61, 8421]],
          ['bnequiv', [8801, 8421]],
          ['bNot', [10989]],
          ['bnot', [8976]],
          ['Bopf', [120121]],
          ['bopf', [120147]],
          ['bot', [8869]],
          ['bottom', [8869]],
          ['bowtie', [8904]],
          ['boxbox', [10697]],
          ['boxdl', [9488]],
          ['boxdL', [9557]],
          ['boxDl', [9558]],
          ['boxDL', [9559]],
          ['boxdr', [9484]],
          ['boxdR', [9554]],
          ['boxDr', [9555]],
          ['boxDR', [9556]],
          ['boxh', [9472]],
          ['boxH', [9552]],
          ['boxhd', [9516]],
          ['boxHd', [9572]],
          ['boxhD', [9573]],
          ['boxHD', [9574]],
          ['boxhu', [9524]],
          ['boxHu', [9575]],
          ['boxhU', [9576]],
          ['boxHU', [9577]],
          ['boxminus', [8863]],
          ['boxplus', [8862]],
          ['boxtimes', [8864]],
          ['boxul', [9496]],
          ['boxuL', [9563]],
          ['boxUl', [9564]],
          ['boxUL', [9565]],
          ['boxur', [9492]],
          ['boxuR', [9560]],
          ['boxUr', [9561]],
          ['boxUR', [9562]],
          ['boxv', [9474]],
          ['boxV', [9553]],
          ['boxvh', [9532]],
          ['boxvH', [9578]],
          ['boxVh', [9579]],
          ['boxVH', [9580]],
          ['boxvl', [9508]],
          ['boxvL', [9569]],
          ['boxVl', [9570]],
          ['boxVL', [9571]],
          ['boxvr', [9500]],
          ['boxvR', [9566]],
          ['boxVr', [9567]],
          ['boxVR', [9568]],
          ['bprime', [8245]],
          ['breve', [728]],
          ['Breve', [728]],
          ['brvbar', [166]],
          ['bscr', [119991]],
          ['Bscr', [8492]],
          ['bsemi', [8271]],
          ['bsim', [8765]],
          ['bsime', [8909]],
          ['bsolb', [10693]],
          ['bsol', [92]],
          ['bsolhsub', [10184]],
          ['bull', [8226]],
          ['bullet', [8226]],
          ['bump', [8782]],
          ['bumpE', [10926]],
          ['bumpe', [8783]],
          ['Bumpeq', [8782]],
          ['bumpeq', [8783]],
          ['Cacute', [262]],
          ['cacute', [263]],
          ['capand', [10820]],
          ['capbrcup', [10825]],
          ['capcap', [10827]],
          ['cap', [8745]],
          ['Cap', [8914]],
          ['capcup', [10823]],
          ['capdot', [10816]],
          ['CapitalDifferentialD', [8517]],
          ['caps', [8745, 65024]],
          ['caret', [8257]],
          ['caron', [711]],
          ['Cayleys', [8493]],
          ['ccaps', [10829]],
          ['Ccaron', [268]],
          ['ccaron', [269]],
          ['Ccedil', [199]],
          ['ccedil', [231]],
          ['Ccirc', [264]],
          ['ccirc', [265]],
          ['Cconint', [8752]],
          ['ccups', [10828]],
          ['ccupssm', [10832]],
          ['Cdot', [266]],
          ['cdot', [267]],
          ['cedil', [184]],
          ['Cedilla', [184]],
          ['cemptyv', [10674]],
          ['cent', [162]],
          ['centerdot', [183]],
          ['CenterDot', [183]],
          ['cfr', [120096]],
          ['Cfr', [8493]],
          ['CHcy', [1063]],
          ['chcy', [1095]],
          ['check', [10003]],
          ['checkmark', [10003]],
          ['Chi', [935]],
          ['chi', [967]],
          ['circ', [710]],
          ['circeq', [8791]],
          ['circlearrowleft', [8634]],
          ['circlearrowright', [8635]],
          ['circledast', [8859]],
          ['circledcirc', [8858]],
          ['circleddash', [8861]],
          ['CircleDot', [8857]],
          ['circledR', [174]],
          ['circledS', [9416]],
          ['CircleMinus', [8854]],
          ['CirclePlus', [8853]],
          ['CircleTimes', [8855]],
          ['cir', [9675]],
          ['cirE', [10691]],
          ['cire', [8791]],
          ['cirfnint', [10768]],
          ['cirmid', [10991]],
          ['cirscir', [10690]],
          ['ClockwiseContourIntegral', [8754]],
          ['clubs', [9827]],
          ['clubsuit', [9827]],
          ['colon', [58]],
          ['Colon', [8759]],
          ['Colone', [10868]],
          ['colone', [8788]],
          ['coloneq', [8788]],
          ['comma', [44]],
          ['commat', [64]],
          ['comp', [8705]],
          ['compfn', [8728]],
          ['complement', [8705]],
          ['complexes', [8450]],
          ['cong', [8773]],
          ['congdot', [10861]],
          ['Congruent', [8801]],
          ['conint', [8750]],
          ['Conint', [8751]],
          ['ContourIntegral', [8750]],
          ['copf', [120148]],
          ['Copf', [8450]],
          ['coprod', [8720]],
          ['Coproduct', [8720]],
          ['copy', [169]],
          ['COPY', [169]],
          ['copysr', [8471]],
          ['CounterClockwiseContourIntegral', [8755]],
          ['crarr', [8629]],
          ['cross', [10007]],
          ['Cross', [10799]],
          ['Cscr', [119966]],
          ['cscr', [119992]],
          ['csub', [10959]],
          ['csube', [10961]],
          ['csup', [10960]],
          ['csupe', [10962]],
          ['ctdot', [8943]],
          ['cudarrl', [10552]],
          ['cudarrr', [10549]],
          ['cuepr', [8926]],
          ['cuesc', [8927]],
          ['cularr', [8630]],
          ['cularrp', [10557]],
          ['cupbrcap', [10824]],
          ['cupcap', [10822]],
          ['CupCap', [8781]],
          ['cup', [8746]],
          ['Cup', [8915]],
          ['cupcup', [10826]],
          ['cupdot', [8845]],
          ['cupor', [10821]],
          ['cups', [8746, 65024]],
          ['curarr', [8631]],
          ['curarrm', [10556]],
          ['curlyeqprec', [8926]],
          ['curlyeqsucc', [8927]],
          ['curlyvee', [8910]],
          ['curlywedge', [8911]],
          ['curren', [164]],
          ['curvearrowleft', [8630]],
          ['curvearrowright', [8631]],
          ['cuvee', [8910]],
          ['cuwed', [8911]],
          ['cwconint', [8754]],
          ['cwint', [8753]],
          ['cylcty', [9005]],
          ['dagger', [8224]],
          ['Dagger', [8225]],
          ['daleth', [8504]],
          ['darr', [8595]],
          ['Darr', [8609]],
          ['dArr', [8659]],
          ['dash', [8208]],
          ['Dashv', [10980]],
          ['dashv', [8867]],
          ['dbkarow', [10511]],
          ['dblac', [733]],
          ['Dcaron', [270]],
          ['dcaron', [271]],
          ['Dcy', [1044]],
          ['dcy', [1076]],
          ['ddagger', [8225]],
          ['ddarr', [8650]],
          ['DD', [8517]],
          ['dd', [8518]],
          ['DDotrahd', [10513]],
          ['ddotseq', [10871]],
          ['deg', [176]],
          ['Del', [8711]],
          ['Delta', [916]],
          ['delta', [948]],
          ['demptyv', [10673]],
          ['dfisht', [10623]],
          ['Dfr', [120071]],
          ['dfr', [120097]],
          ['dHar', [10597]],
          ['dharl', [8643]],
          ['dharr', [8642]],
          ['DiacriticalAcute', [180]],
          ['DiacriticalDot', [729]],
          ['DiacriticalDoubleAcute', [733]],
          ['DiacriticalGrave', [96]],
          ['DiacriticalTilde', [732]],
          ['diam', [8900]],
          ['diamond', [8900]],
          ['Diamond', [8900]],
          ['diamondsuit', [9830]],
          ['diams', [9830]],
          ['die', [168]],
          ['DifferentialD', [8518]],
          ['digamma', [989]],
          ['disin', [8946]],
          ['div', [247]],
          ['divide', [247]],
          ['divideontimes', [8903]],
          ['divonx', [8903]],
          ['DJcy', [1026]],
          ['djcy', [1106]],
          ['dlcorn', [8990]],
          ['dlcrop', [8973]],
          ['dollar', [36]],
          ['Dopf', [120123]],
          ['dopf', [120149]],
          ['Dot', [168]],
          ['dot', [729]],
          ['DotDot', [8412]],
          ['doteq', [8784]],
          ['doteqdot', [8785]],
          ['DotEqual', [8784]],
          ['dotminus', [8760]],
          ['dotplus', [8724]],
          ['dotsquare', [8865]],
          ['doublebarwedge', [8966]],
          ['DoubleContourIntegral', [8751]],
          ['DoubleDot', [168]],
          ['DoubleDownArrow', [8659]],
          ['DoubleLeftArrow', [8656]],
          ['DoubleLeftRightArrow', [8660]],
          ['DoubleLeftTee', [10980]],
          ['DoubleLongLeftArrow', [10232]],
          ['DoubleLongLeftRightArrow', [10234]],
          ['DoubleLongRightArrow', [10233]],
          ['DoubleRightArrow', [8658]],
          ['DoubleRightTee', [8872]],
          ['DoubleUpArrow', [8657]],
          ['DoubleUpDownArrow', [8661]],
          ['DoubleVerticalBar', [8741]],
          ['DownArrowBar', [10515]],
          ['downarrow', [8595]],
          ['DownArrow', [8595]],
          ['Downarrow', [8659]],
          ['DownArrowUpArrow', [8693]],
          ['DownBreve', [785]],
          ['downdownarrows', [8650]],
          ['downharpoonleft', [8643]],
          ['downharpoonright', [8642]],
          ['DownLeftRightVector', [10576]],
          ['DownLeftTeeVector', [10590]],
          ['DownLeftVectorBar', [10582]],
          ['DownLeftVector', [8637]],
          ['DownRightTeeVector', [10591]],
          ['DownRightVectorBar', [10583]],
          ['DownRightVector', [8641]],
          ['DownTeeArrow', [8615]],
          ['DownTee', [8868]],
          ['drbkarow', [10512]],
          ['drcorn', [8991]],
          ['drcrop', [8972]],
          ['Dscr', [119967]],
          ['dscr', [119993]],
          ['DScy', [1029]],
          ['dscy', [1109]],
          ['dsol', [10742]],
          ['Dstrok', [272]],
          ['dstrok', [273]],
          ['dtdot', [8945]],
          ['dtri', [9663]],
          ['dtrif', [9662]],
          ['duarr', [8693]],
          ['duhar', [10607]],
          ['dwangle', [10662]],
          ['DZcy', [1039]],
          ['dzcy', [1119]],
          ['dzigrarr', [10239]],
          ['Eacute', [201]],
          ['eacute', [233]],
          ['easter', [10862]],
          ['Ecaron', [282]],
          ['ecaron', [283]],
          ['Ecirc', [202]],
          ['ecirc', [234]],
          ['ecir', [8790]],
          ['ecolon', [8789]],
          ['Ecy', [1069]],
          ['ecy', [1101]],
          ['eDDot', [10871]],
          ['Edot', [278]],
          ['edot', [279]],
          ['eDot', [8785]],
          ['ee', [8519]],
          ['efDot', [8786]],
          ['Efr', [120072]],
          ['efr', [120098]],
          ['eg', [10906]],
          ['Egrave', [200]],
          ['egrave', [232]],
          ['egs', [10902]],
          ['egsdot', [10904]],
          ['el', [10905]],
          ['Element', [8712]],
          ['elinters', [9191]],
          ['ell', [8467]],
          ['els', [10901]],
          ['elsdot', [10903]],
          ['Emacr', [274]],
          ['emacr', [275]],
          ['empty', [8709]],
          ['emptyset', [8709]],
          ['EmptySmallSquare', [9723]],
          ['emptyv', [8709]],
          ['EmptyVerySmallSquare', [9643]],
          ['emsp13', [8196]],
          ['emsp14', [8197]],
          ['emsp', [8195]],
          ['ENG', [330]],
          ['eng', [331]],
          ['ensp', [8194]],
          ['Eogon', [280]],
          ['eogon', [281]],
          ['Eopf', [120124]],
          ['eopf', [120150]],
          ['epar', [8917]],
          ['eparsl', [10723]],
          ['eplus', [10865]],
          ['epsi', [949]],
          ['Epsilon', [917]],
          ['epsilon', [949]],
          ['epsiv', [1013]],
          ['eqcirc', [8790]],
          ['eqcolon', [8789]],
          ['eqsim', [8770]],
          ['eqslantgtr', [10902]],
          ['eqslantless', [10901]],
          ['Equal', [10869]],
          ['equals', [61]],
          ['EqualTilde', [8770]],
          ['equest', [8799]],
          ['Equilibrium', [8652]],
          ['equiv', [8801]],
          ['equivDD', [10872]],
          ['eqvparsl', [10725]],
          ['erarr', [10609]],
          ['erDot', [8787]],
          ['escr', [8495]],
          ['Escr', [8496]],
          ['esdot', [8784]],
          ['Esim', [10867]],
          ['esim', [8770]],
          ['Eta', [919]],
          ['eta', [951]],
          ['ETH', [208]],
          ['eth', [240]],
          ['Euml', [203]],
          ['euml', [235]],
          ['euro', [8364]],
          ['excl', [33]],
          ['exist', [8707]],
          ['Exists', [8707]],
          ['expectation', [8496]],
          ['exponentiale', [8519]],
          ['ExponentialE', [8519]],
          ['fallingdotseq', [8786]],
          ['Fcy', [1060]],
          ['fcy', [1092]],
          ['female', [9792]],
          ['ffilig', [64259]],
          ['fflig', [64256]],
          ['ffllig', [64260]],
          ['Ffr', [120073]],
          ['ffr', [120099]],
          ['filig', [64257]],
          ['FilledSmallSquare', [9724]],
          ['FilledVerySmallSquare', [9642]],
          ['fjlig', [102, 106]],
          ['flat', [9837]],
          ['fllig', [64258]],
          ['fltns', [9649]],
          ['fnof', [402]],
          ['Fopf', [120125]],
          ['fopf', [120151]],
          ['forall', [8704]],
          ['ForAll', [8704]],
          ['fork', [8916]],
          ['forkv', [10969]],
          ['Fouriertrf', [8497]],
          ['fpartint', [10765]],
          ['frac12', [189]],
          ['frac13', [8531]],
          ['frac14', [188]],
          ['frac15', [8533]],
          ['frac16', [8537]],
          ['frac18', [8539]],
          ['frac23', [8532]],
          ['frac25', [8534]],
          ['frac34', [190]],
          ['frac35', [8535]],
          ['frac38', [8540]],
          ['frac45', [8536]],
          ['frac56', [8538]],
          ['frac58', [8541]],
          ['frac78', [8542]],
          ['frasl', [8260]],
          ['frown', [8994]],
          ['fscr', [119995]],
          ['Fscr', [8497]],
          ['gacute', [501]],
          ['Gamma', [915]],
          ['gamma', [947]],
          ['Gammad', [988]],
          ['gammad', [989]],
          ['gap', [10886]],
          ['Gbreve', [286]],
          ['gbreve', [287]],
          ['Gcedil', [290]],
          ['Gcirc', [284]],
          ['gcirc', [285]],
          ['Gcy', [1043]],
          ['gcy', [1075]],
          ['Gdot', [288]],
          ['gdot', [289]],
          ['ge', [8805]],
          ['gE', [8807]],
          ['gEl', [10892]],
          ['gel', [8923]],
          ['geq', [8805]],
          ['geqq', [8807]],
          ['geqslant', [10878]],
          ['gescc', [10921]],
          ['ges', [10878]],
          ['gesdot', [10880]],
          ['gesdoto', [10882]],
          ['gesdotol', [10884]],
          ['gesl', [8923, 65024]],
          ['gesles', [10900]],
          ['Gfr', [120074]],
          ['gfr', [120100]],
          ['gg', [8811]],
          ['Gg', [8921]],
          ['ggg', [8921]],
          ['gimel', [8503]],
          ['GJcy', [1027]],
          ['gjcy', [1107]],
          ['gla', [10917]],
          ['gl', [8823]],
          ['glE', [10898]],
          ['glj', [10916]],
          ['gnap', [10890]],
          ['gnapprox', [10890]],
          ['gne', [10888]],
          ['gnE', [8809]],
          ['gneq', [10888]],
          ['gneqq', [8809]],
          ['gnsim', [8935]],
          ['Gopf', [120126]],
          ['gopf', [120152]],
          ['grave', [96]],
          ['GreaterEqual', [8805]],
          ['GreaterEqualLess', [8923]],
          ['GreaterFullEqual', [8807]],
          ['GreaterGreater', [10914]],
          ['GreaterLess', [8823]],
          ['GreaterSlantEqual', [10878]],
          ['GreaterTilde', [8819]],
          ['Gscr', [119970]],
          ['gscr', [8458]],
          ['gsim', [8819]],
          ['gsime', [10894]],
          ['gsiml', [10896]],
          ['gtcc', [10919]],
          ['gtcir', [10874]],
          ['gt', [62]],
          ['GT', [62]],
          ['Gt', [8811]],
          ['gtdot', [8919]],
          ['gtlPar', [10645]],
          ['gtquest', [10876]],
          ['gtrapprox', [10886]],
          ['gtrarr', [10616]],
          ['gtrdot', [8919]],
          ['gtreqless', [8923]],
          ['gtreqqless', [10892]],
          ['gtrless', [8823]],
          ['gtrsim', [8819]],
          ['gvertneqq', [8809, 65024]],
          ['gvnE', [8809, 65024]],
          ['Hacek', [711]],
          ['hairsp', [8202]],
          ['half', [189]],
          ['hamilt', [8459]],
          ['HARDcy', [1066]],
          ['hardcy', [1098]],
          ['harrcir', [10568]],
          ['harr', [8596]],
          ['hArr', [8660]],
          ['harrw', [8621]],
          ['Hat', [94]],
          ['hbar', [8463]],
          ['Hcirc', [292]],
          ['hcirc', [293]],
          ['hearts', [9829]],
          ['heartsuit', [9829]],
          ['hellip', [8230]],
          ['hercon', [8889]],
          ['hfr', [120101]],
          ['Hfr', [8460]],
          ['HilbertSpace', [8459]],
          ['hksearow', [10533]],
          ['hkswarow', [10534]],
          ['hoarr', [8703]],
          ['homtht', [8763]],
          ['hookleftarrow', [8617]],
          ['hookrightarrow', [8618]],
          ['hopf', [120153]],
          ['Hopf', [8461]],
          ['horbar', [8213]],
          ['HorizontalLine', [9472]],
          ['hscr', [119997]],
          ['Hscr', [8459]],
          ['hslash', [8463]],
          ['Hstrok', [294]],
          ['hstrok', [295]],
          ['HumpDownHump', [8782]],
          ['HumpEqual', [8783]],
          ['hybull', [8259]],
          ['hyphen', [8208]],
          ['Iacute', [205]],
          ['iacute', [237]],
          ['ic', [8291]],
          ['Icirc', [206]],
          ['icirc', [238]],
          ['Icy', [1048]],
          ['icy', [1080]],
          ['Idot', [304]],
          ['IEcy', [1045]],
          ['iecy', [1077]],
          ['iexcl', [161]],
          ['iff', [8660]],
          ['ifr', [120102]],
          ['Ifr', [8465]],
          ['Igrave', [204]],
          ['igrave', [236]],
          ['ii', [8520]],
          ['iiiint', [10764]],
          ['iiint', [8749]],
          ['iinfin', [10716]],
          ['iiota', [8489]],
          ['IJlig', [306]],
          ['ijlig', [307]],
          ['Imacr', [298]],
          ['imacr', [299]],
          ['image', [8465]],
          ['ImaginaryI', [8520]],
          ['imagline', [8464]],
          ['imagpart', [8465]],
          ['imath', [305]],
          ['Im', [8465]],
          ['imof', [8887]],
          ['imped', [437]],
          ['Implies', [8658]],
          ['incare', [8453]],
          ['in', [8712]],
          ['infin', [8734]],
          ['infintie', [10717]],
          ['inodot', [305]],
          ['intcal', [8890]],
          ['int', [8747]],
          ['Int', [8748]],
          ['integers', [8484]],
          ['Integral', [8747]],
          ['intercal', [8890]],
          ['Intersection', [8898]],
          ['intlarhk', [10775]],
          ['intprod', [10812]],
          ['InvisibleComma', [8291]],
          ['InvisibleTimes', [8290]],
          ['IOcy', [1025]],
          ['iocy', [1105]],
          ['Iogon', [302]],
          ['iogon', [303]],
          ['Iopf', [120128]],
          ['iopf', [120154]],
          ['Iota', [921]],
          ['iota', [953]],
          ['iprod', [10812]],
          ['iquest', [191]],
          ['iscr', [119998]],
          ['Iscr', [8464]],
          ['isin', [8712]],
          ['isindot', [8949]],
          ['isinE', [8953]],
          ['isins', [8948]],
          ['isinsv', [8947]],
          ['isinv', [8712]],
          ['it', [8290]],
          ['Itilde', [296]],
          ['itilde', [297]],
          ['Iukcy', [1030]],
          ['iukcy', [1110]],
          ['Iuml', [207]],
          ['iuml', [239]],
          ['Jcirc', [308]],
          ['jcirc', [309]],
          ['Jcy', [1049]],
          ['jcy', [1081]],
          ['Jfr', [120077]],
          ['jfr', [120103]],
          ['jmath', [567]],
          ['Jopf', [120129]],
          ['jopf', [120155]],
          ['Jscr', [119973]],
          ['jscr', [119999]],
          ['Jsercy', [1032]],
          ['jsercy', [1112]],
          ['Jukcy', [1028]],
          ['jukcy', [1108]],
          ['Kappa', [922]],
          ['kappa', [954]],
          ['kappav', [1008]],
          ['Kcedil', [310]],
          ['kcedil', [311]],
          ['Kcy', [1050]],
          ['kcy', [1082]],
          ['Kfr', [120078]],
          ['kfr', [120104]],
          ['kgreen', [312]],
          ['KHcy', [1061]],
          ['khcy', [1093]],
          ['KJcy', [1036]],
          ['kjcy', [1116]],
          ['Kopf', [120130]],
          ['kopf', [120156]],
          ['Kscr', [119974]],
          ['kscr', [12e4]],
          ['lAarr', [8666]],
          ['Lacute', [313]],
          ['lacute', [314]],
          ['laemptyv', [10676]],
          ['lagran', [8466]],
          ['Lambda', [923]],
          ['lambda', [955]],
          ['lang', [10216]],
          ['Lang', [10218]],
          ['langd', [10641]],
          ['langle', [10216]],
          ['lap', [10885]],
          ['Laplacetrf', [8466]],
          ['laquo', [171]],
          ['larrb', [8676]],
          ['larrbfs', [10527]],
          ['larr', [8592]],
          ['Larr', [8606]],
          ['lArr', [8656]],
          ['larrfs', [10525]],
          ['larrhk', [8617]],
          ['larrlp', [8619]],
          ['larrpl', [10553]],
          ['larrsim', [10611]],
          ['larrtl', [8610]],
          ['latail', [10521]],
          ['lAtail', [10523]],
          ['lat', [10923]],
          ['late', [10925]],
          ['lates', [10925, 65024]],
          ['lbarr', [10508]],
          ['lBarr', [10510]],
          ['lbbrk', [10098]],
          ['lbrace', [123]],
          ['lbrack', [91]],
          ['lbrke', [10635]],
          ['lbrksld', [10639]],
          ['lbrkslu', [10637]],
          ['Lcaron', [317]],
          ['lcaron', [318]],
          ['Lcedil', [315]],
          ['lcedil', [316]],
          ['lceil', [8968]],
          ['lcub', [123]],
          ['Lcy', [1051]],
          ['lcy', [1083]],
          ['ldca', [10550]],
          ['ldquo', [8220]],
          ['ldquor', [8222]],
          ['ldrdhar', [10599]],
          ['ldrushar', [10571]],
          ['ldsh', [8626]],
          ['le', [8804]],
          ['lE', [8806]],
          ['LeftAngleBracket', [10216]],
          ['LeftArrowBar', [8676]],
          ['leftarrow', [8592]],
          ['LeftArrow', [8592]],
          ['Leftarrow', [8656]],
          ['LeftArrowRightArrow', [8646]],
          ['leftarrowtail', [8610]],
          ['LeftCeiling', [8968]],
          ['LeftDoubleBracket', [10214]],
          ['LeftDownTeeVector', [10593]],
          ['LeftDownVectorBar', [10585]],
          ['LeftDownVector', [8643]],
          ['LeftFloor', [8970]],
          ['leftharpoondown', [8637]],
          ['leftharpoonup', [8636]],
          ['leftleftarrows', [8647]],
          ['leftrightarrow', [8596]],
          ['LeftRightArrow', [8596]],
          ['Leftrightarrow', [8660]],
          ['leftrightarrows', [8646]],
          ['leftrightharpoons', [8651]],
          ['leftrightsquigarrow', [8621]],
          ['LeftRightVector', [10574]],
          ['LeftTeeArrow', [8612]],
          ['LeftTee', [8867]],
          ['LeftTeeVector', [10586]],
          ['leftthreetimes', [8907]],
          ['LeftTriangleBar', [10703]],
          ['LeftTriangle', [8882]],
          ['LeftTriangleEqual', [8884]],
          ['LeftUpDownVector', [10577]],
          ['LeftUpTeeVector', [10592]],
          ['LeftUpVectorBar', [10584]],
          ['LeftUpVector', [8639]],
          ['LeftVectorBar', [10578]],
          ['LeftVector', [8636]],
          ['lEg', [10891]],
          ['leg', [8922]],
          ['leq', [8804]],
          ['leqq', [8806]],
          ['leqslant', [10877]],
          ['lescc', [10920]],
          ['les', [10877]],
          ['lesdot', [10879]],
          ['lesdoto', [10881]],
          ['lesdotor', [10883]],
          ['lesg', [8922, 65024]],
          ['lesges', [10899]],
          ['lessapprox', [10885]],
          ['lessdot', [8918]],
          ['lesseqgtr', [8922]],
          ['lesseqqgtr', [10891]],
          ['LessEqualGreater', [8922]],
          ['LessFullEqual', [8806]],
          ['LessGreater', [8822]],
          ['lessgtr', [8822]],
          ['LessLess', [10913]],
          ['lesssim', [8818]],
          ['LessSlantEqual', [10877]],
          ['LessTilde', [8818]],
          ['lfisht', [10620]],
          ['lfloor', [8970]],
          ['Lfr', [120079]],
          ['lfr', [120105]],
          ['lg', [8822]],
          ['lgE', [10897]],
          ['lHar', [10594]],
          ['lhard', [8637]],
          ['lharu', [8636]],
          ['lharul', [10602]],
          ['lhblk', [9604]],
          ['LJcy', [1033]],
          ['ljcy', [1113]],
          ['llarr', [8647]],
          ['ll', [8810]],
          ['Ll', [8920]],
          ['llcorner', [8990]],
          ['Lleftarrow', [8666]],
          ['llhard', [10603]],
          ['lltri', [9722]],
          ['Lmidot', [319]],
          ['lmidot', [320]],
          ['lmoustache', [9136]],
          ['lmoust', [9136]],
          ['lnap', [10889]],
          ['lnapprox', [10889]],
          ['lne', [10887]],
          ['lnE', [8808]],
          ['lneq', [10887]],
          ['lneqq', [8808]],
          ['lnsim', [8934]],
          ['loang', [10220]],
          ['loarr', [8701]],
          ['lobrk', [10214]],
          ['longleftarrow', [10229]],
          ['LongLeftArrow', [10229]],
          ['Longleftarrow', [10232]],
          ['longleftrightarrow', [10231]],
          ['LongLeftRightArrow', [10231]],
          ['Longleftrightarrow', [10234]],
          ['longmapsto', [10236]],
          ['longrightarrow', [10230]],
          ['LongRightArrow', [10230]],
          ['Longrightarrow', [10233]],
          ['looparrowleft', [8619]],
          ['looparrowright', [8620]],
          ['lopar', [10629]],
          ['Lopf', [120131]],
          ['lopf', [120157]],
          ['loplus', [10797]],
          ['lotimes', [10804]],
          ['lowast', [8727]],
          ['lowbar', [95]],
          ['LowerLeftArrow', [8601]],
          ['LowerRightArrow', [8600]],
          ['loz', [9674]],
          ['lozenge', [9674]],
          ['lozf', [10731]],
          ['lpar', [40]],
          ['lparlt', [10643]],
          ['lrarr', [8646]],
          ['lrcorner', [8991]],
          ['lrhar', [8651]],
          ['lrhard', [10605]],
          ['lrm', [8206]],
          ['lrtri', [8895]],
          ['lsaquo', [8249]],
          ['lscr', [120001]],
          ['Lscr', [8466]],
          ['lsh', [8624]],
          ['Lsh', [8624]],
          ['lsim', [8818]],
          ['lsime', [10893]],
          ['lsimg', [10895]],
          ['lsqb', [91]],
          ['lsquo', [8216]],
          ['lsquor', [8218]],
          ['Lstrok', [321]],
          ['lstrok', [322]],
          ['ltcc', [10918]],
          ['ltcir', [10873]],
          ['lt', [60]],
          ['LT', [60]],
          ['Lt', [8810]],
          ['ltdot', [8918]],
          ['lthree', [8907]],
          ['ltimes', [8905]],
          ['ltlarr', [10614]],
          ['ltquest', [10875]],
          ['ltri', [9667]],
          ['ltrie', [8884]],
          ['ltrif', [9666]],
          ['ltrPar', [10646]],
          ['lurdshar', [10570]],
          ['luruhar', [10598]],
          ['lvertneqq', [8808, 65024]],
          ['lvnE', [8808, 65024]],
          ['macr', [175]],
          ['male', [9794]],
          ['malt', [10016]],
          ['maltese', [10016]],
          ['Map', [10501]],
          ['map', [8614]],
          ['mapsto', [8614]],
          ['mapstodown', [8615]],
          ['mapstoleft', [8612]],
          ['mapstoup', [8613]],
          ['marker', [9646]],
          ['mcomma', [10793]],
          ['Mcy', [1052]],
          ['mcy', [1084]],
          ['mdash', [8212]],
          ['mDDot', [8762]],
          ['measuredangle', [8737]],
          ['MediumSpace', [8287]],
          ['Mellintrf', [8499]],
          ['Mfr', [120080]],
          ['mfr', [120106]],
          ['mho', [8487]],
          ['micro', [181]],
          ['midast', [42]],
          ['midcir', [10992]],
          ['mid', [8739]],
          ['middot', [183]],
          ['minusb', [8863]],
          ['minus', [8722]],
          ['minusd', [8760]],
          ['minusdu', [10794]],
          ['MinusPlus', [8723]],
          ['mlcp', [10971]],
          ['mldr', [8230]],
          ['mnplus', [8723]],
          ['models', [8871]],
          ['Mopf', [120132]],
          ['mopf', [120158]],
          ['mp', [8723]],
          ['mscr', [120002]],
          ['Mscr', [8499]],
          ['mstpos', [8766]],
          ['Mu', [924]],
          ['mu', [956]],
          ['multimap', [8888]],
          ['mumap', [8888]],
          ['nabla', [8711]],
          ['Nacute', [323]],
          ['nacute', [324]],
          ['nang', [8736, 8402]],
          ['nap', [8777]],
          ['napE', [10864, 824]],
          ['napid', [8779, 824]],
          ['napos', [329]],
          ['napprox', [8777]],
          ['natural', [9838]],
          ['naturals', [8469]],
          ['natur', [9838]],
          ['nbsp', [160]],
          ['nbump', [8782, 824]],
          ['nbumpe', [8783, 824]],
          ['ncap', [10819]],
          ['Ncaron', [327]],
          ['ncaron', [328]],
          ['Ncedil', [325]],
          ['ncedil', [326]],
          ['ncong', [8775]],
          ['ncongdot', [10861, 824]],
          ['ncup', [10818]],
          ['Ncy', [1053]],
          ['ncy', [1085]],
          ['ndash', [8211]],
          ['nearhk', [10532]],
          ['nearr', [8599]],
          ['neArr', [8663]],
          ['nearrow', [8599]],
          ['ne', [8800]],
          ['nedot', [8784, 824]],
          ['NegativeMediumSpace', [8203]],
          ['NegativeThickSpace', [8203]],
          ['NegativeThinSpace', [8203]],
          ['NegativeVeryThinSpace', [8203]],
          ['nequiv', [8802]],
          ['nesear', [10536]],
          ['nesim', [8770, 824]],
          ['NestedGreaterGreater', [8811]],
          ['NestedLessLess', [8810]],
          ['nexist', [8708]],
          ['nexists', [8708]],
          ['Nfr', [120081]],
          ['nfr', [120107]],
          ['ngE', [8807, 824]],
          ['nge', [8817]],
          ['ngeq', [8817]],
          ['ngeqq', [8807, 824]],
          ['ngeqslant', [10878, 824]],
          ['nges', [10878, 824]],
          ['nGg', [8921, 824]],
          ['ngsim', [8821]],
          ['nGt', [8811, 8402]],
          ['ngt', [8815]],
          ['ngtr', [8815]],
          ['nGtv', [8811, 824]],
          ['nharr', [8622]],
          ['nhArr', [8654]],
          ['nhpar', [10994]],
          ['ni', [8715]],
          ['nis', [8956]],
          ['nisd', [8954]],
          ['niv', [8715]],
          ['NJcy', [1034]],
          ['njcy', [1114]],
          ['nlarr', [8602]],
          ['nlArr', [8653]],
          ['nldr', [8229]],
          ['nlE', [8806, 824]],
          ['nle', [8816]],
          ['nleftarrow', [8602]],
          ['nLeftarrow', [8653]],
          ['nleftrightarrow', [8622]],
          ['nLeftrightarrow', [8654]],
          ['nleq', [8816]],
          ['nleqq', [8806, 824]],
          ['nleqslant', [10877, 824]],
          ['nles', [10877, 824]],
          ['nless', [8814]],
          ['nLl', [8920, 824]],
          ['nlsim', [8820]],
          ['nLt', [8810, 8402]],
          ['nlt', [8814]],
          ['nltri', [8938]],
          ['nltrie', [8940]],
          ['nLtv', [8810, 824]],
          ['nmid', [8740]],
          ['NoBreak', [8288]],
          ['NonBreakingSpace', [160]],
          ['nopf', [120159]],
          ['Nopf', [8469]],
          ['Not', [10988]],
          ['not', [172]],
          ['NotCongruent', [8802]],
          ['NotCupCap', [8813]],
          ['NotDoubleVerticalBar', [8742]],
          ['NotElement', [8713]],
          ['NotEqual', [8800]],
          ['NotEqualTilde', [8770, 824]],
          ['NotExists', [8708]],
          ['NotGreater', [8815]],
          ['NotGreaterEqual', [8817]],
          ['NotGreaterFullEqual', [8807, 824]],
          ['NotGreaterGreater', [8811, 824]],
          ['NotGreaterLess', [8825]],
          ['NotGreaterSlantEqual', [10878, 824]],
          ['NotGreaterTilde', [8821]],
          ['NotHumpDownHump', [8782, 824]],
          ['NotHumpEqual', [8783, 824]],
          ['notin', [8713]],
          ['notindot', [8949, 824]],
          ['notinE', [8953, 824]],
          ['notinva', [8713]],
          ['notinvb', [8951]],
          ['notinvc', [8950]],
          ['NotLeftTriangleBar', [10703, 824]],
          ['NotLeftTriangle', [8938]],
          ['NotLeftTriangleEqual', [8940]],
          ['NotLess', [8814]],
          ['NotLessEqual', [8816]],
          ['NotLessGreater', [8824]],
          ['NotLessLess', [8810, 824]],
          ['NotLessSlantEqual', [10877, 824]],
          ['NotLessTilde', [8820]],
          ['NotNestedGreaterGreater', [10914, 824]],
          ['NotNestedLessLess', [10913, 824]],
          ['notni', [8716]],
          ['notniva', [8716]],
          ['notnivb', [8958]],
          ['notnivc', [8957]],
          ['NotPrecedes', [8832]],
          ['NotPrecedesEqual', [10927, 824]],
          ['NotPrecedesSlantEqual', [8928]],
          ['NotReverseElement', [8716]],
          ['NotRightTriangleBar', [10704, 824]],
          ['NotRightTriangle', [8939]],
          ['NotRightTriangleEqual', [8941]],
          ['NotSquareSubset', [8847, 824]],
          ['NotSquareSubsetEqual', [8930]],
          ['NotSquareSuperset', [8848, 824]],
          ['NotSquareSupersetEqual', [8931]],
          ['NotSubset', [8834, 8402]],
          ['NotSubsetEqual', [8840]],
          ['NotSucceeds', [8833]],
          ['NotSucceedsEqual', [10928, 824]],
          ['NotSucceedsSlantEqual', [8929]],
          ['NotSucceedsTilde', [8831, 824]],
          ['NotSuperset', [8835, 8402]],
          ['NotSupersetEqual', [8841]],
          ['NotTilde', [8769]],
          ['NotTildeEqual', [8772]],
          ['NotTildeFullEqual', [8775]],
          ['NotTildeTilde', [8777]],
          ['NotVerticalBar', [8740]],
          ['nparallel', [8742]],
          ['npar', [8742]],
          ['nparsl', [11005, 8421]],
          ['npart', [8706, 824]],
          ['npolint', [10772]],
          ['npr', [8832]],
          ['nprcue', [8928]],
          ['nprec', [8832]],
          ['npreceq', [10927, 824]],
          ['npre', [10927, 824]],
          ['nrarrc', [10547, 824]],
          ['nrarr', [8603]],
          ['nrArr', [8655]],
          ['nrarrw', [8605, 824]],
          ['nrightarrow', [8603]],
          ['nRightarrow', [8655]],
          ['nrtri', [8939]],
          ['nrtrie', [8941]],
          ['nsc', [8833]],
          ['nsccue', [8929]],
          ['nsce', [10928, 824]],
          ['Nscr', [119977]],
          ['nscr', [120003]],
          ['nshortmid', [8740]],
          ['nshortparallel', [8742]],
          ['nsim', [8769]],
          ['nsime', [8772]],
          ['nsimeq', [8772]],
          ['nsmid', [8740]],
          ['nspar', [8742]],
          ['nsqsube', [8930]],
          ['nsqsupe', [8931]],
          ['nsub', [8836]],
          ['nsubE', [10949, 824]],
          ['nsube', [8840]],
          ['nsubset', [8834, 8402]],
          ['nsubseteq', [8840]],
          ['nsubseteqq', [10949, 824]],
          ['nsucc', [8833]],
          ['nsucceq', [10928, 824]],
          ['nsup', [8837]],
          ['nsupE', [10950, 824]],
          ['nsupe', [8841]],
          ['nsupset', [8835, 8402]],
          ['nsupseteq', [8841]],
          ['nsupseteqq', [10950, 824]],
          ['ntgl', [8825]],
          ['Ntilde', [209]],
          ['ntilde', [241]],
          ['ntlg', [8824]],
          ['ntriangleleft', [8938]],
          ['ntrianglelefteq', [8940]],
          ['ntriangleright', [8939]],
          ['ntrianglerighteq', [8941]],
          ['Nu', [925]],
          ['nu', [957]],
          ['num', [35]],
          ['numero', [8470]],
          ['numsp', [8199]],
          ['nvap', [8781, 8402]],
          ['nvdash', [8876]],
          ['nvDash', [8877]],
          ['nVdash', [8878]],
          ['nVDash', [8879]],
          ['nvge', [8805, 8402]],
          ['nvgt', [62, 8402]],
          ['nvHarr', [10500]],
          ['nvinfin', [10718]],
          ['nvlArr', [10498]],
          ['nvle', [8804, 8402]],
          ['nvlt', [60, 8402]],
          ['nvltrie', [8884, 8402]],
          ['nvrArr', [10499]],
          ['nvrtrie', [8885, 8402]],
          ['nvsim', [8764, 8402]],
          ['nwarhk', [10531]],
          ['nwarr', [8598]],
          ['nwArr', [8662]],
          ['nwarrow', [8598]],
          ['nwnear', [10535]],
          ['Oacute', [211]],
          ['oacute', [243]],
          ['oast', [8859]],
          ['Ocirc', [212]],
          ['ocirc', [244]],
          ['ocir', [8858]],
          ['Ocy', [1054]],
          ['ocy', [1086]],
          ['odash', [8861]],
          ['Odblac', [336]],
          ['odblac', [337]],
          ['odiv', [10808]],
          ['odot', [8857]],
          ['odsold', [10684]],
          ['OElig', [338]],
          ['oelig', [339]],
          ['ofcir', [10687]],
          ['Ofr', [120082]],
          ['ofr', [120108]],
          ['ogon', [731]],
          ['Ograve', [210]],
          ['ograve', [242]],
          ['ogt', [10689]],
          ['ohbar', [10677]],
          ['ohm', [937]],
          ['oint', [8750]],
          ['olarr', [8634]],
          ['olcir', [10686]],
          ['olcross', [10683]],
          ['oline', [8254]],
          ['olt', [10688]],
          ['Omacr', [332]],
          ['omacr', [333]],
          ['Omega', [937]],
          ['omega', [969]],
          ['Omicron', [927]],
          ['omicron', [959]],
          ['omid', [10678]],
          ['ominus', [8854]],
          ['Oopf', [120134]],
          ['oopf', [120160]],
          ['opar', [10679]],
          ['OpenCurlyDoubleQuote', [8220]],
          ['OpenCurlyQuote', [8216]],
          ['operp', [10681]],
          ['oplus', [8853]],
          ['orarr', [8635]],
          ['Or', [10836]],
          ['or', [8744]],
          ['ord', [10845]],
          ['order', [8500]],
          ['orderof', [8500]],
          ['ordf', [170]],
          ['ordm', [186]],
          ['origof', [8886]],
          ['oror', [10838]],
          ['orslope', [10839]],
          ['orv', [10843]],
          ['oS', [9416]],
          ['Oscr', [119978]],
          ['oscr', [8500]],
          ['Oslash', [216]],
          ['oslash', [248]],
          ['osol', [8856]],
          ['Otilde', [213]],
          ['otilde', [245]],
          ['otimesas', [10806]],
          ['Otimes', [10807]],
          ['otimes', [8855]],
          ['Ouml', [214]],
          ['ouml', [246]],
          ['ovbar', [9021]],
          ['OverBar', [8254]],
          ['OverBrace', [9182]],
          ['OverBracket', [9140]],
          ['OverParenthesis', [9180]],
          ['para', [182]],
          ['parallel', [8741]],
          ['par', [8741]],
          ['parsim', [10995]],
          ['parsl', [11005]],
          ['part', [8706]],
          ['PartialD', [8706]],
          ['Pcy', [1055]],
          ['pcy', [1087]],
          ['percnt', [37]],
          ['period', [46]],
          ['permil', [8240]],
          ['perp', [8869]],
          ['pertenk', [8241]],
          ['Pfr', [120083]],
          ['pfr', [120109]],
          ['Phi', [934]],
          ['phi', [966]],
          ['phiv', [981]],
          ['phmmat', [8499]],
          ['phone', [9742]],
          ['Pi', [928]],
          ['pi', [960]],
          ['pitchfork', [8916]],
          ['piv', [982]],
          ['planck', [8463]],
          ['planckh', [8462]],
          ['plankv', [8463]],
          ['plusacir', [10787]],
          ['plusb', [8862]],
          ['pluscir', [10786]],
          ['plus', [43]],
          ['plusdo', [8724]],
          ['plusdu', [10789]],
          ['pluse', [10866]],
          ['PlusMinus', [177]],
          ['plusmn', [177]],
          ['plussim', [10790]],
          ['plustwo', [10791]],
          ['pm', [177]],
          ['Poincareplane', [8460]],
          ['pointint', [10773]],
          ['popf', [120161]],
          ['Popf', [8473]],
          ['pound', [163]],
          ['prap', [10935]],
          ['Pr', [10939]],
          ['pr', [8826]],
          ['prcue', [8828]],
          ['precapprox', [10935]],
          ['prec', [8826]],
          ['preccurlyeq', [8828]],
          ['Precedes', [8826]],
          ['PrecedesEqual', [10927]],
          ['PrecedesSlantEqual', [8828]],
          ['PrecedesTilde', [8830]],
          ['preceq', [10927]],
          ['precnapprox', [10937]],
          ['precneqq', [10933]],
          ['precnsim', [8936]],
          ['pre', [10927]],
          ['prE', [10931]],
          ['precsim', [8830]],
          ['prime', [8242]],
          ['Prime', [8243]],
          ['primes', [8473]],
          ['prnap', [10937]],
          ['prnE', [10933]],
          ['prnsim', [8936]],
          ['prod', [8719]],
          ['Product', [8719]],
          ['profalar', [9006]],
          ['profline', [8978]],
          ['profsurf', [8979]],
          ['prop', [8733]],
          ['Proportional', [8733]],
          ['Proportion', [8759]],
          ['propto', [8733]],
          ['prsim', [8830]],
          ['prurel', [8880]],
          ['Pscr', [119979]],
          ['pscr', [120005]],
          ['Psi', [936]],
          ['psi', [968]],
          ['puncsp', [8200]],
          ['Qfr', [120084]],
          ['qfr', [120110]],
          ['qint', [10764]],
          ['qopf', [120162]],
          ['Qopf', [8474]],
          ['qprime', [8279]],
          ['Qscr', [119980]],
          ['qscr', [120006]],
          ['quaternions', [8461]],
          ['quatint', [10774]],
          ['quest', [63]],
          ['questeq', [8799]],
          ['quot', [34]],
          ['QUOT', [34]],
          ['rAarr', [8667]],
          ['race', [8765, 817]],
          ['Racute', [340]],
          ['racute', [341]],
          ['radic', [8730]],
          ['raemptyv', [10675]],
          ['rang', [10217]],
          ['Rang', [10219]],
          ['rangd', [10642]],
          ['range', [10661]],
          ['rangle', [10217]],
          ['raquo', [187]],
          ['rarrap', [10613]],
          ['rarrb', [8677]],
          ['rarrbfs', [10528]],
          ['rarrc', [10547]],
          ['rarr', [8594]],
          ['Rarr', [8608]],
          ['rArr', [8658]],
          ['rarrfs', [10526]],
          ['rarrhk', [8618]],
          ['rarrlp', [8620]],
          ['rarrpl', [10565]],
          ['rarrsim', [10612]],
          ['Rarrtl', [10518]],
          ['rarrtl', [8611]],
          ['rarrw', [8605]],
          ['ratail', [10522]],
          ['rAtail', [10524]],
          ['ratio', [8758]],
          ['rationals', [8474]],
          ['rbarr', [10509]],
          ['rBarr', [10511]],
          ['RBarr', [10512]],
          ['rbbrk', [10099]],
          ['rbrace', [125]],
          ['rbrack', [93]],
          ['rbrke', [10636]],
          ['rbrksld', [10638]],
          ['rbrkslu', [10640]],
          ['Rcaron', [344]],
          ['rcaron', [345]],
          ['Rcedil', [342]],
          ['rcedil', [343]],
          ['rceil', [8969]],
          ['rcub', [125]],
          ['Rcy', [1056]],
          ['rcy', [1088]],
          ['rdca', [10551]],
          ['rdldhar', [10601]],
          ['rdquo', [8221]],
          ['rdquor', [8221]],
          ['CloseCurlyDoubleQuote', [8221]],
          ['rdsh', [8627]],
          ['real', [8476]],
          ['realine', [8475]],
          ['realpart', [8476]],
          ['reals', [8477]],
          ['Re', [8476]],
          ['rect', [9645]],
          ['reg', [174]],
          ['REG', [174]],
          ['ReverseElement', [8715]],
          ['ReverseEquilibrium', [8651]],
          ['ReverseUpEquilibrium', [10607]],
          ['rfisht', [10621]],
          ['rfloor', [8971]],
          ['rfr', [120111]],
          ['Rfr', [8476]],
          ['rHar', [10596]],
          ['rhard', [8641]],
          ['rharu', [8640]],
          ['rharul', [10604]],
          ['Rho', [929]],
          ['rho', [961]],
          ['rhov', [1009]],
          ['RightAngleBracket', [10217]],
          ['RightArrowBar', [8677]],
          ['rightarrow', [8594]],
          ['RightArrow', [8594]],
          ['Rightarrow', [8658]],
          ['RightArrowLeftArrow', [8644]],
          ['rightarrowtail', [8611]],
          ['RightCeiling', [8969]],
          ['RightDoubleBracket', [10215]],
          ['RightDownTeeVector', [10589]],
          ['RightDownVectorBar', [10581]],
          ['RightDownVector', [8642]],
          ['RightFloor', [8971]],
          ['rightharpoondown', [8641]],
          ['rightharpoonup', [8640]],
          ['rightleftarrows', [8644]],
          ['rightleftharpoons', [8652]],
          ['rightrightarrows', [8649]],
          ['rightsquigarrow', [8605]],
          ['RightTeeArrow', [8614]],
          ['RightTee', [8866]],
          ['RightTeeVector', [10587]],
          ['rightthreetimes', [8908]],
          ['RightTriangleBar', [10704]],
          ['RightTriangle', [8883]],
          ['RightTriangleEqual', [8885]],
          ['RightUpDownVector', [10575]],
          ['RightUpTeeVector', [10588]],
          ['RightUpVectorBar', [10580]],
          ['RightUpVector', [8638]],
          ['RightVectorBar', [10579]],
          ['RightVector', [8640]],
          ['ring', [730]],
          ['risingdotseq', [8787]],
          ['rlarr', [8644]],
          ['rlhar', [8652]],
          ['rlm', [8207]],
          ['rmoustache', [9137]],
          ['rmoust', [9137]],
          ['rnmid', [10990]],
          ['roang', [10221]],
          ['roarr', [8702]],
          ['robrk', [10215]],
          ['ropar', [10630]],
          ['ropf', [120163]],
          ['Ropf', [8477]],
          ['roplus', [10798]],
          ['rotimes', [10805]],
          ['RoundImplies', [10608]],
          ['rpar', [41]],
          ['rpargt', [10644]],
          ['rppolint', [10770]],
          ['rrarr', [8649]],
          ['Rrightarrow', [8667]],
          ['rsaquo', [8250]],
          ['rscr', [120007]],
          ['Rscr', [8475]],
          ['rsh', [8625]],
          ['Rsh', [8625]],
          ['rsqb', [93]],
          ['rsquo', [8217]],
          ['rsquor', [8217]],
          ['CloseCurlyQuote', [8217]],
          ['rthree', [8908]],
          ['rtimes', [8906]],
          ['rtri', [9657]],
          ['rtrie', [8885]],
          ['rtrif', [9656]],
          ['rtriltri', [10702]],
          ['RuleDelayed', [10740]],
          ['ruluhar', [10600]],
          ['rx', [8478]],
          ['Sacute', [346]],
          ['sacute', [347]],
          ['sbquo', [8218]],
          ['scap', [10936]],
          ['Scaron', [352]],
          ['scaron', [353]],
          ['Sc', [10940]],
          ['sc', [8827]],
          ['sccue', [8829]],
          ['sce', [10928]],
          ['scE', [10932]],
          ['Scedil', [350]],
          ['scedil', [351]],
          ['Scirc', [348]],
          ['scirc', [349]],
          ['scnap', [10938]],
          ['scnE', [10934]],
          ['scnsim', [8937]],
          ['scpolint', [10771]],
          ['scsim', [8831]],
          ['Scy', [1057]],
          ['scy', [1089]],
          ['sdotb', [8865]],
          ['sdot', [8901]],
          ['sdote', [10854]],
          ['searhk', [10533]],
          ['searr', [8600]],
          ['seArr', [8664]],
          ['searrow', [8600]],
          ['sect', [167]],
          ['semi', [59]],
          ['seswar', [10537]],
          ['setminus', [8726]],
          ['setmn', [8726]],
          ['sext', [10038]],
          ['Sfr', [120086]],
          ['sfr', [120112]],
          ['sfrown', [8994]],
          ['sharp', [9839]],
          ['SHCHcy', [1065]],
          ['shchcy', [1097]],
          ['SHcy', [1064]],
          ['shcy', [1096]],
          ['ShortDownArrow', [8595]],
          ['ShortLeftArrow', [8592]],
          ['shortmid', [8739]],
          ['shortparallel', [8741]],
          ['ShortRightArrow', [8594]],
          ['ShortUpArrow', [8593]],
          ['shy', [173]],
          ['Sigma', [931]],
          ['sigma', [963]],
          ['sigmaf', [962]],
          ['sigmav', [962]],
          ['sim', [8764]],
          ['simdot', [10858]],
          ['sime', [8771]],
          ['simeq', [8771]],
          ['simg', [10910]],
          ['simgE', [10912]],
          ['siml', [10909]],
          ['simlE', [10911]],
          ['simne', [8774]],
          ['simplus', [10788]],
          ['simrarr', [10610]],
          ['slarr', [8592]],
          ['SmallCircle', [8728]],
          ['smallsetminus', [8726]],
          ['smashp', [10803]],
          ['smeparsl', [10724]],
          ['smid', [8739]],
          ['smile', [8995]],
          ['smt', [10922]],
          ['smte', [10924]],
          ['smtes', [10924, 65024]],
          ['SOFTcy', [1068]],
          ['softcy', [1100]],
          ['solbar', [9023]],
          ['solb', [10692]],
          ['sol', [47]],
          ['Sopf', [120138]],
          ['sopf', [120164]],
          ['spades', [9824]],
          ['spadesuit', [9824]],
          ['spar', [8741]],
          ['sqcap', [8851]],
          ['sqcaps', [8851, 65024]],
          ['sqcup', [8852]],
          ['sqcups', [8852, 65024]],
          ['Sqrt', [8730]],
          ['sqsub', [8847]],
          ['sqsube', [8849]],
          ['sqsubset', [8847]],
          ['sqsubseteq', [8849]],
          ['sqsup', [8848]],
          ['sqsupe', [8850]],
          ['sqsupset', [8848]],
          ['sqsupseteq', [8850]],
          ['square', [9633]],
          ['Square', [9633]],
          ['SquareIntersection', [8851]],
          ['SquareSubset', [8847]],
          ['SquareSubsetEqual', [8849]],
          ['SquareSuperset', [8848]],
          ['SquareSupersetEqual', [8850]],
          ['SquareUnion', [8852]],
          ['squarf', [9642]],
          ['squ', [9633]],
          ['squf', [9642]],
          ['srarr', [8594]],
          ['Sscr', [119982]],
          ['sscr', [120008]],
          ['ssetmn', [8726]],
          ['ssmile', [8995]],
          ['sstarf', [8902]],
          ['Star', [8902]],
          ['star', [9734]],
          ['starf', [9733]],
          ['straightepsilon', [1013]],
          ['straightphi', [981]],
          ['strns', [175]],
          ['sub', [8834]],
          ['Sub', [8912]],
          ['subdot', [10941]],
          ['subE', [10949]],
          ['sube', [8838]],
          ['subedot', [10947]],
          ['submult', [10945]],
          ['subnE', [10955]],
          ['subne', [8842]],
          ['subplus', [10943]],
          ['subrarr', [10617]],
          ['subset', [8834]],
          ['Subset', [8912]],
          ['subseteq', [8838]],
          ['subseteqq', [10949]],
          ['SubsetEqual', [8838]],
          ['subsetneq', [8842]],
          ['subsetneqq', [10955]],
          ['subsim', [10951]],
          ['subsub', [10965]],
          ['subsup', [10963]],
          ['succapprox', [10936]],
          ['succ', [8827]],
          ['succcurlyeq', [8829]],
          ['Succeeds', [8827]],
          ['SucceedsEqual', [10928]],
          ['SucceedsSlantEqual', [8829]],
          ['SucceedsTilde', [8831]],
          ['succeq', [10928]],
          ['succnapprox', [10938]],
          ['succneqq', [10934]],
          ['succnsim', [8937]],
          ['succsim', [8831]],
          ['SuchThat', [8715]],
          ['sum', [8721]],
          ['Sum', [8721]],
          ['sung', [9834]],
          ['sup1', [185]],
          ['sup2', [178]],
          ['sup3', [179]],
          ['sup', [8835]],
          ['Sup', [8913]],
          ['supdot', [10942]],
          ['supdsub', [10968]],
          ['supE', [10950]],
          ['supe', [8839]],
          ['supedot', [10948]],
          ['Superset', [8835]],
          ['SupersetEqual', [8839]],
          ['suphsol', [10185]],
          ['suphsub', [10967]],
          ['suplarr', [10619]],
          ['supmult', [10946]],
          ['supnE', [10956]],
          ['supne', [8843]],
          ['supplus', [10944]],
          ['supset', [8835]],
          ['Supset', [8913]],
          ['supseteq', [8839]],
          ['supseteqq', [10950]],
          ['supsetneq', [8843]],
          ['supsetneqq', [10956]],
          ['supsim', [10952]],
          ['supsub', [10964]],
          ['supsup', [10966]],
          ['swarhk', [10534]],
          ['swarr', [8601]],
          ['swArr', [8665]],
          ['swarrow', [8601]],
          ['swnwar', [10538]],
          ['szlig', [223]],
          ['Tab', [9]],
          ['target', [8982]],
          ['Tau', [932]],
          ['tau', [964]],
          ['tbrk', [9140]],
          ['Tcaron', [356]],
          ['tcaron', [357]],
          ['Tcedil', [354]],
          ['tcedil', [355]],
          ['Tcy', [1058]],
          ['tcy', [1090]],
          ['tdot', [8411]],
          ['telrec', [8981]],
          ['Tfr', [120087]],
          ['tfr', [120113]],
          ['there4', [8756]],
          ['therefore', [8756]],
          ['Therefore', [8756]],
          ['Theta', [920]],
          ['theta', [952]],
          ['thetasym', [977]],
          ['thetav', [977]],
          ['thickapprox', [8776]],
          ['thicksim', [8764]],
          ['ThickSpace', [8287, 8202]],
          ['ThinSpace', [8201]],
          ['thinsp', [8201]],
          ['thkap', [8776]],
          ['thksim', [8764]],
          ['THORN', [222]],
          ['thorn', [254]],
          ['tilde', [732]],
          ['Tilde', [8764]],
          ['TildeEqual', [8771]],
          ['TildeFullEqual', [8773]],
          ['TildeTilde', [8776]],
          ['timesbar', [10801]],
          ['timesb', [8864]],
          ['times', [215]],
          ['timesd', [10800]],
          ['tint', [8749]],
          ['toea', [10536]],
          ['topbot', [9014]],
          ['topcir', [10993]],
          ['top', [8868]],
          ['Topf', [120139]],
          ['topf', [120165]],
          ['topfork', [10970]],
          ['tosa', [10537]],
          ['tprime', [8244]],
          ['trade', [8482]],
          ['TRADE', [8482]],
          ['triangle', [9653]],
          ['triangledown', [9663]],
          ['triangleleft', [9667]],
          ['trianglelefteq', [8884]],
          ['triangleq', [8796]],
          ['triangleright', [9657]],
          ['trianglerighteq', [8885]],
          ['tridot', [9708]],
          ['trie', [8796]],
          ['triminus', [10810]],
          ['TripleDot', [8411]],
          ['triplus', [10809]],
          ['trisb', [10701]],
          ['tritime', [10811]],
          ['trpezium', [9186]],
          ['Tscr', [119983]],
          ['tscr', [120009]],
          ['TScy', [1062]],
          ['tscy', [1094]],
          ['TSHcy', [1035]],
          ['tshcy', [1115]],
          ['Tstrok', [358]],
          ['tstrok', [359]],
          ['twixt', [8812]],
          ['twoheadleftarrow', [8606]],
          ['twoheadrightarrow', [8608]],
          ['Uacute', [218]],
          ['uacute', [250]],
          ['uarr', [8593]],
          ['Uarr', [8607]],
          ['uArr', [8657]],
          ['Uarrocir', [10569]],
          ['Ubrcy', [1038]],
          ['ubrcy', [1118]],
          ['Ubreve', [364]],
          ['ubreve', [365]],
          ['Ucirc', [219]],
          ['ucirc', [251]],
          ['Ucy', [1059]],
          ['ucy', [1091]],
          ['udarr', [8645]],
          ['Udblac', [368]],
          ['udblac', [369]],
          ['udhar', [10606]],
          ['ufisht', [10622]],
          ['Ufr', [120088]],
          ['ufr', [120114]],
          ['Ugrave', [217]],
          ['ugrave', [249]],
          ['uHar', [10595]],
          ['uharl', [8639]],
          ['uharr', [8638]],
          ['uhblk', [9600]],
          ['ulcorn', [8988]],
          ['ulcorner', [8988]],
          ['ulcrop', [8975]],
          ['ultri', [9720]],
          ['Umacr', [362]],
          ['umacr', [363]],
          ['uml', [168]],
          ['UnderBar', [95]],
          ['UnderBrace', [9183]],
          ['UnderBracket', [9141]],
          ['UnderParenthesis', [9181]],
          ['Union', [8899]],
          ['UnionPlus', [8846]],
          ['Uogon', [370]],
          ['uogon', [371]],
          ['Uopf', [120140]],
          ['uopf', [120166]],
          ['UpArrowBar', [10514]],
          ['uparrow', [8593]],
          ['UpArrow', [8593]],
          ['Uparrow', [8657]],
          ['UpArrowDownArrow', [8645]],
          ['updownarrow', [8597]],
          ['UpDownArrow', [8597]],
          ['Updownarrow', [8661]],
          ['UpEquilibrium', [10606]],
          ['upharpoonleft', [8639]],
          ['upharpoonright', [8638]],
          ['uplus', [8846]],
          ['UpperLeftArrow', [8598]],
          ['UpperRightArrow', [8599]],
          ['upsi', [965]],
          ['Upsi', [978]],
          ['upsih', [978]],
          ['Upsilon', [933]],
          ['upsilon', [965]],
          ['UpTeeArrow', [8613]],
          ['UpTee', [8869]],
          ['upuparrows', [8648]],
          ['urcorn', [8989]],
          ['urcorner', [8989]],
          ['urcrop', [8974]],
          ['Uring', [366]],
          ['uring', [367]],
          ['urtri', [9721]],
          ['Uscr', [119984]],
          ['uscr', [120010]],
          ['utdot', [8944]],
          ['Utilde', [360]],
          ['utilde', [361]],
          ['utri', [9653]],
          ['utrif', [9652]],
          ['uuarr', [8648]],
          ['Uuml', [220]],
          ['uuml', [252]],
          ['uwangle', [10663]],
          ['vangrt', [10652]],
          ['varepsilon', [1013]],
          ['varkappa', [1008]],
          ['varnothing', [8709]],
          ['varphi', [981]],
          ['varpi', [982]],
          ['varpropto', [8733]],
          ['varr', [8597]],
          ['vArr', [8661]],
          ['varrho', [1009]],
          ['varsigma', [962]],
          ['varsubsetneq', [8842, 65024]],
          ['varsubsetneqq', [10955, 65024]],
          ['varsupsetneq', [8843, 65024]],
          ['varsupsetneqq', [10956, 65024]],
          ['vartheta', [977]],
          ['vartriangleleft', [8882]],
          ['vartriangleright', [8883]],
          ['vBar', [10984]],
          ['Vbar', [10987]],
          ['vBarv', [10985]],
          ['Vcy', [1042]],
          ['vcy', [1074]],
          ['vdash', [8866]],
          ['vDash', [8872]],
          ['Vdash', [8873]],
          ['VDash', [8875]],
          ['Vdashl', [10982]],
          ['veebar', [8891]],
          ['vee', [8744]],
          ['Vee', [8897]],
          ['veeeq', [8794]],
          ['vellip', [8942]],
          ['verbar', [124]],
          ['Verbar', [8214]],
          ['vert', [124]],
          ['Vert', [8214]],
          ['VerticalBar', [8739]],
          ['VerticalLine', [124]],
          ['VerticalSeparator', [10072]],
          ['VerticalTilde', [8768]],
          ['VeryThinSpace', [8202]],
          ['Vfr', [120089]],
          ['vfr', [120115]],
          ['vltri', [8882]],
          ['vnsub', [8834, 8402]],
          ['vnsup', [8835, 8402]],
          ['Vopf', [120141]],
          ['vopf', [120167]],
          ['vprop', [8733]],
          ['vrtri', [8883]],
          ['Vscr', [119985]],
          ['vscr', [120011]],
          ['vsubnE', [10955, 65024]],
          ['vsubne', [8842, 65024]],
          ['vsupnE', [10956, 65024]],
          ['vsupne', [8843, 65024]],
          ['Vvdash', [8874]],
          ['vzigzag', [10650]],
          ['Wcirc', [372]],
          ['wcirc', [373]],
          ['wedbar', [10847]],
          ['wedge', [8743]],
          ['Wedge', [8896]],
          ['wedgeq', [8793]],
          ['weierp', [8472]],
          ['Wfr', [120090]],
          ['wfr', [120116]],
          ['Wopf', [120142]],
          ['wopf', [120168]],
          ['wp', [8472]],
          ['wr', [8768]],
          ['wreath', [8768]],
          ['Wscr', [119986]],
          ['wscr', [120012]],
          ['xcap', [8898]],
          ['xcirc', [9711]],
          ['xcup', [8899]],
          ['xdtri', [9661]],
          ['Xfr', [120091]],
          ['xfr', [120117]],
          ['xharr', [10231]],
          ['xhArr', [10234]],
          ['Xi', [926]],
          ['xi', [958]],
          ['xlarr', [10229]],
          ['xlArr', [10232]],
          ['xmap', [10236]],
          ['xnis', [8955]],
          ['xodot', [10752]],
          ['Xopf', [120143]],
          ['xopf', [120169]],
          ['xoplus', [10753]],
          ['xotime', [10754]],
          ['xrarr', [10230]],
          ['xrArr', [10233]],
          ['Xscr', [119987]],
          ['xscr', [120013]],
          ['xsqcup', [10758]],
          ['xuplus', [10756]],
          ['xutri', [9651]],
          ['xvee', [8897]],
          ['xwedge', [8896]],
          ['Yacute', [221]],
          ['yacute', [253]],
          ['YAcy', [1071]],
          ['yacy', [1103]],
          ['Ycirc', [374]],
          ['ycirc', [375]],
          ['Ycy', [1067]],
          ['ycy', [1099]],
          ['yen', [165]],
          ['Yfr', [120092]],
          ['yfr', [120118]],
          ['YIcy', [1031]],
          ['yicy', [1111]],
          ['Yopf', [120144]],
          ['yopf', [120170]],
          ['Yscr', [119988]],
          ['yscr', [120014]],
          ['YUcy', [1070]],
          ['yucy', [1102]],
          ['yuml', [255]],
          ['Yuml', [376]],
          ['Zacute', [377]],
          ['zacute', [378]],
          ['Zcaron', [381]],
          ['zcaron', [382]],
          ['Zcy', [1047]],
          ['zcy', [1079]],
          ['Zdot', [379]],
          ['zdot', [380]],
          ['zeetrf', [8488]],
          ['ZeroWidthSpace', [8203]],
          ['Zeta', [918]],
          ['zeta', [950]],
          ['zfr', [120119]],
          ['Zfr', [8488]],
          ['ZHcy', [1046]],
          ['zhcy', [1078]],
          ['zigrarr', [8669]],
          ['zopf', [120171]],
          ['Zopf', [8484]],
          ['Zscr', [119989]],
          ['zscr', [120015]],
          ['zwj', [8205]],
          ['zwnj', [8204]],
        ],
        a = {},
        o = {};
      s(a, o);
      var i = (function () {
        function e() {}
        return (
          (e.prototype.decode = function (e) {
            return e && e.length
              ? e.replace(/&(#?[\w\d]+);?/g, function (e, t) {
                  var r;
                  if ('#' === t.charAt(0)) {
                    var n =
                      'x' === t.charAt(1)
                        ? parseInt(t.substr(2).toLowerCase(), 16)
                        : parseInt(t.substr(1));
                    isNaN(n) || n < -32768 || n > 65535 || (r = String.fromCharCode(n));
                  } else r = a[t];
                  return r || e;
                })
              : '';
          }),
          (e.decode = function (t) {
            return new e().decode(t);
          }),
          (e.prototype.encode = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = o[e.charCodeAt(n)];
              if (a) {
                var i = a[e.charCodeAt(n + 1)];
                if ((i ? n++ : (i = a['']), i)) {
                  (r += '&' + i + ';'), n++;
                  continue;
                }
              }
              (r += e.charAt(n)), n++;
            }
            return r;
          }),
          (e.encode = function (t) {
            return new e().encode(t);
          }),
          (e.prototype.encodeNonUTF = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = e.charCodeAt(n),
                i = o[a];
              if (i) {
                var s = i[e.charCodeAt(n + 1)];
                if ((s ? n++ : (s = i['']), s)) {
                  (r += '&' + s + ';'), n++;
                  continue;
                }
              }
              (r += a < 32 || a > 126 ? '&#' + a + ';' : e.charAt(n)), n++;
            }
            return r;
          }),
          (e.encodeNonUTF = function (t) {
            return new e().encodeNonUTF(t);
          }),
          (e.prototype.encodeNonASCII = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = e.charCodeAt(n);
              a <= 255 ? (r += e[n++]) : ((r += '&#' + a + ';'), n++);
            }
            return r;
          }),
          (e.encodeNonASCII = function (t) {
            return new e().encodeNonASCII(t);
          }),
          e
        );
      })();
      function s(e, t) {
        var r = n.length;
        while (r--) {
          var a = n[r],
            o = a[0],
            i = a[1],
            s = i[0],
            l = s < 32 || s > 126 || 62 === s || 60 === s || 38 === s || 34 === s || 39 === s,
            c = void 0;
          if ((l && (c = t[s] = t[s] || {}), i[1])) {
            var u = i[1];
            (e[o] = String.fromCharCode(s) + String.fromCharCode(u)), l && (c[u] = o);
          } else (e[o] = String.fromCharCode(s)), l && (c[''] = o);
        }
      }
      t.Html5Entities = i;
    },
    HwU6: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = [
          'apos',
          'nbsp',
          'iexcl',
          'cent',
          'pound',
          'curren',
          'yen',
          'brvbar',
          'sect',
          'uml',
          'copy',
          'ordf',
          'laquo',
          'not',
          'shy',
          'reg',
          'macr',
          'deg',
          'plusmn',
          'sup2',
          'sup3',
          'acute',
          'micro',
          'para',
          'middot',
          'cedil',
          'sup1',
          'ordm',
          'raquo',
          'frac14',
          'frac12',
          'frac34',
          'iquest',
          'Agrave',
          'Aacute',
          'Acirc',
          'Atilde',
          'Auml',
          'Aring',
          'Aelig',
          'Ccedil',
          'Egrave',
          'Eacute',
          'Ecirc',
          'Euml',
          'Igrave',
          'Iacute',
          'Icirc',
          'Iuml',
          'ETH',
          'Ntilde',
          'Ograve',
          'Oacute',
          'Ocirc',
          'Otilde',
          'Ouml',
          'times',
          'Oslash',
          'Ugrave',
          'Uacute',
          'Ucirc',
          'Uuml',
          'Yacute',
          'THORN',
          'szlig',
          'agrave',
          'aacute',
          'acirc',
          'atilde',
          'auml',
          'aring',
          'aelig',
          'ccedil',
          'egrave',
          'eacute',
          'ecirc',
          'euml',
          'igrave',
          'iacute',
          'icirc',
          'iuml',
          'eth',
          'ntilde',
          'ograve',
          'oacute',
          'ocirc',
          'otilde',
          'ouml',
          'divide',
          'oslash',
          'ugrave',
          'uacute',
          'ucirc',
          'uuml',
          'yacute',
          'thorn',
          'yuml',
          'quot',
          'amp',
          'lt',
          'gt',
          'OElig',
          'oelig',
          'Scaron',
          'scaron',
          'Yuml',
          'circ',
          'tilde',
          'ensp',
          'emsp',
          'thinsp',
          'zwnj',
          'zwj',
          'lrm',
          'rlm',
          'ndash',
          'mdash',
          'lsquo',
          'rsquo',
          'sbquo',
          'ldquo',
          'rdquo',
          'bdquo',
          'dagger',
          'Dagger',
          'permil',
          'lsaquo',
          'rsaquo',
          'euro',
          'fnof',
          'Alpha',
          'Beta',
          'Gamma',
          'Delta',
          'Epsilon',
          'Zeta',
          'Eta',
          'Theta',
          'Iota',
          'Kappa',
          'Lambda',
          'Mu',
          'Nu',
          'Xi',
          'Omicron',
          'Pi',
          'Rho',
          'Sigma',
          'Tau',
          'Upsilon',
          'Phi',
          'Chi',
          'Psi',
          'Omega',
          'alpha',
          'beta',
          'gamma',
          'delta',
          'epsilon',
          'zeta',
          'eta',
          'theta',
          'iota',
          'kappa',
          'lambda',
          'mu',
          'nu',
          'xi',
          'omicron',
          'pi',
          'rho',
          'sigmaf',
          'sigma',
          'tau',
          'upsilon',
          'phi',
          'chi',
          'psi',
          'omega',
          'thetasym',
          'upsih',
          'piv',
          'bull',
          'hellip',
          'prime',
          'Prime',
          'oline',
          'frasl',
          'weierp',
          'image',
          'real',
          'trade',
          'alefsym',
          'larr',
          'uarr',
          'rarr',
          'darr',
          'harr',
          'crarr',
          'lArr',
          'uArr',
          'rArr',
          'dArr',
          'hArr',
          'forall',
          'part',
          'exist',
          'empty',
          'nabla',
          'isin',
          'notin',
          'ni',
          'prod',
          'sum',
          'minus',
          'lowast',
          'radic',
          'prop',
          'infin',
          'ang',
          'and',
          'or',
          'cap',
          'cup',
          'int',
          'there4',
          'sim',
          'cong',
          'asymp',
          'ne',
          'equiv',
          'le',
          'ge',
          'sub',
          'sup',
          'nsub',
          'sube',
          'supe',
          'oplus',
          'otimes',
          'perp',
          'sdot',
          'lceil',
          'rceil',
          'lfloor',
          'rfloor',
          'lang',
          'rang',
          'loz',
          'spades',
          'clubs',
          'hearts',
          'diams',
        ],
        a = [
          39,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          174,
          175,
          176,
          177,
          178,
          179,
          180,
          181,
          182,
          183,
          184,
          185,
          186,
          187,
          188,
          189,
          190,
          191,
          192,
          193,
          194,
          195,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          210,
          211,
          212,
          213,
          214,
          215,
          216,
          217,
          218,
          219,
          220,
          221,
          222,
          223,
          224,
          225,
          226,
          227,
          228,
          229,
          230,
          231,
          232,
          233,
          234,
          235,
          236,
          237,
          238,
          239,
          240,
          241,
          242,
          243,
          244,
          245,
          246,
          247,
          248,
          249,
          250,
          251,
          252,
          253,
          254,
          255,
          34,
          38,
          60,
          62,
          338,
          339,
          352,
          353,
          376,
          710,
          732,
          8194,
          8195,
          8201,
          8204,
          8205,
          8206,
          8207,
          8211,
          8212,
          8216,
          8217,
          8218,
          8220,
          8221,
          8222,
          8224,
          8225,
          8240,
          8249,
          8250,
          8364,
          402,
          913,
          914,
          915,
          916,
          917,
          918,
          919,
          920,
          921,
          922,
          923,
          924,
          925,
          926,
          927,
          928,
          929,
          931,
          932,
          933,
          934,
          935,
          936,
          937,
          945,
          946,
          947,
          948,
          949,
          950,
          951,
          952,
          953,
          954,
          955,
          956,
          957,
          958,
          959,
          960,
          961,
          962,
          963,
          964,
          965,
          966,
          967,
          968,
          969,
          977,
          978,
          982,
          8226,
          8230,
          8242,
          8243,
          8254,
          8260,
          8472,
          8465,
          8476,
          8482,
          8501,
          8592,
          8593,
          8594,
          8595,
          8596,
          8629,
          8656,
          8657,
          8658,
          8659,
          8660,
          8704,
          8706,
          8707,
          8709,
          8711,
          8712,
          8713,
          8715,
          8719,
          8721,
          8722,
          8727,
          8730,
          8733,
          8734,
          8736,
          8743,
          8744,
          8745,
          8746,
          8747,
          8756,
          8764,
          8773,
          8776,
          8800,
          8801,
          8804,
          8805,
          8834,
          8835,
          8836,
          8838,
          8839,
          8853,
          8855,
          8869,
          8901,
          8968,
          8969,
          8970,
          8971,
          9001,
          9002,
          9674,
          9824,
          9827,
          9829,
          9830,
        ],
        o = {},
        i = {};
      (function () {
        var e = 0,
          t = n.length;
        while (e < t) {
          var r = n[e],
            s = a[e];
          (o[r] = String.fromCharCode(s)), (i[s] = r), e++;
        }
      })();
      var s = (function () {
        function e() {}
        return (
          (e.prototype.decode = function (e) {
            return e && e.length
              ? e.replace(/&(#?[\w\d]+);?/g, function (e, t) {
                  var r;
                  if ('#' === t.charAt(0)) {
                    var n =
                      'x' === t.charAt(1).toLowerCase()
                        ? parseInt(t.substr(2), 16)
                        : parseInt(t.substr(1));
                    isNaN(n) || n < -32768 || n > 65535 || (r = String.fromCharCode(n));
                  } else r = o[t];
                  return r || e;
                })
              : '';
          }),
          (e.decode = function (t) {
            return new e().decode(t);
          }),
          (e.prototype.encode = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = i[e.charCodeAt(n)];
              (r += a ? '&' + a + ';' : e.charAt(n)), n++;
            }
            return r;
          }),
          (e.encode = function (t) {
            return new e().encode(t);
          }),
          (e.prototype.encodeNonUTF = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = e.charCodeAt(n),
                o = i[a];
              (r += o ? '&' + o + ';' : a < 32 || a > 126 ? '&#' + a + ';' : e.charAt(n)), n++;
            }
            return r;
          }),
          (e.encodeNonUTF = function (t) {
            return new e().encodeNonUTF(t);
          }),
          (e.prototype.encodeNonASCII = function (e) {
            if (!e || !e.length) return '';
            var t = e.length,
              r = '',
              n = 0;
            while (n < t) {
              var a = e.charCodeAt(n);
              a <= 255 ? (r += e[n++]) : ((r += '&#' + a + ';'), n++);
            }
            return r;
          }),
          (e.encodeNonASCII = function (t) {
            return new e().encodeNonASCII(t);
          }),
          e
        );
      })();
      t.Html4Entities = s;
    },
    JMDn: function (e, t, r) {},
    KCaj: function (e, t, r) {},
    R2QN: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = t.issueLink = void 0);
      var n = o(r('eVs5')),
        a = r('swKd');
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                l(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function l(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      const c = (e) => {
          e.react || e['react-dom']
            ? e.react
              ? e['react-dom'] || (e['react-dom'] = e.react)
              : (e.react = e['react-dom'])
            : ((e.react = 'latest'), (e['react-dom'] = 'latest'));
        },
        u =
          "/** This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\nReactDOM.render(\n  <App />,\n  document.getElementById('root')\n);";
      t.issueLink = u;
      var p = ({ files: e, deps: t, devDependencies: r, desc: o }, i) => {
        i || (i = {});
        const l = i,
          u = l.extraFiles,
          p = l.extraDependencies,
          d = l.name,
          f = l.template,
          g = void 0 === f ? 'create-react-app' : f;
        let m = i,
          b = m.main;
        const h = s({}, t, {}, p);
        (b = b || 'create-react-app-typescript' !== g ? 'index.js' : 'index.tsx'), c(h);
        const y = s(
            {},
            e,
            {
              'package.json': { content: (0, a.newpkgJSON)(h, d, b, r || {}, o) },
              'sandbox.config.json': { content: JSON.stringify({ template: g }) },
            },
            u,
          ),
          v = (0, n.default)({ files: y });
        return { files: y, dependencies: h, parameters: v };
      };
      t.default = p;
    },
    UClF: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = {
          '&lt': '<',
          '&gt': '>',
          '&quot': '"',
          '&apos': "'",
          '&amp': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&quot;': '"',
          '&apos;': "'",
          '&amp;': '&',
        },
        a = { 60: 'lt', 62: 'gt', 34: 'quot', 39: 'apos', 38: 'amp' },
        o = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;', '&': '&amp;' },
        i = (function () {
          function e() {}
          return (
            (e.prototype.encode = function (e) {
              return e && e.length
                ? e.replace(/[<>"'&]/g, function (e) {
                    return o[e];
                  })
                : '';
            }),
            (e.encode = function (t) {
              return new e().encode(t);
            }),
            (e.prototype.decode = function (e) {
              return e && e.length
                ? e.replace(/&#?[0-9a-zA-Z]+;?/g, function (e) {
                    if ('#' === e.charAt(1)) {
                      var t =
                        'x' === e.charAt(2).toLowerCase()
                          ? parseInt(e.substr(3), 16)
                          : parseInt(e.substr(2));
                      return isNaN(t) || t < -32768 || t > 65535 ? '' : String.fromCharCode(t);
                    }
                    return n[e] || e;
                  })
                : '';
            }),
            (e.decode = function (t) {
              return new e().decode(t);
            }),
            (e.prototype.encodeNonUTF = function (e) {
              if (!e || !e.length) return '';
              var t = e.length,
                r = '',
                n = 0;
              while (n < t) {
                var o = e.charCodeAt(n),
                  i = a[o];
                i
                  ? ((r += '&' + i + ';'), n++)
                  : ((r += o < 32 || o > 126 ? '&#' + o + ';' : e.charAt(n)), n++);
              }
              return r;
            }),
            (e.encodeNonUTF = function (t) {
              return new e().encodeNonUTF(t);
            }),
            (e.prototype.encodeNonASCII = function (e) {
              if (!e || !e.length) return '';
              var t = e.length,
                r = '',
                n = 0;
              while (n < t) {
                var a = e.charCodeAt(n);
                a <= 255 ? (r += e[n++]) : ((r += '&#' + a + ';'), n++);
              }
              return r;
            }),
            (e.encodeNonASCII = function (t) {
              return new e().encodeNonASCII(t);
            }),
            e
          );
        })();
      t.XmlEntities = i;
    },
    Vou3: function (e, t, r) {
      (function (t, n) {
        e.exports = n(r('sxGJ'), r('17x9'), r('q1tI'), r('i8i4'));
      })(0, function (e, t, r, n) {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var a = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var a in e)
                  r.d(
                    n,
                    a,
                    function (t) {
                      return e[t];
                    }.bind(null, a),
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e['default'];
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, 'a', t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ''),
            r((r.s = './index.js'))
          );
        })({
          './index.js': function (e, t, r) {
            'use strict';
            r.r(t);
            var n = r('react'),
              a = r.n(n),
              o = r('react-dom'),
              i = r.n(o),
              s = r('prop-types'),
              l = r.n(s);
            function c(e) {
              return (
                (c =
                  'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          'function' === typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? 'symbol'
                          : typeof e;
                      }),
                c(e)
              );
            }
            function u(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                  n = Object.keys(r);
                'function' === typeof Object.getOwnPropertySymbols &&
                  (n = n.concat(
                    Object.getOwnPropertySymbols(r).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    }),
                  )),
                  n.forEach(function (t) {
                    v(e, t, r[t]);
                  });
              }
              return e;
            }
            function p(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function d(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            function f(e, t, r) {
              return t && d(e.prototype, t), r && d(e, r), e;
            }
            function g(e, t) {
              return !t || ('object' !== c(t) && 'function' !== typeof t) ? m(e) : t;
            }
            function m(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            }
            function b(e) {
              return (
                (b = Object.setPrototypeOf
                  ? Object.getPrototypeOf
                  : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                    }),
                b(e)
              );
            }
            function h(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function');
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && y(e, t);
            }
            function y(e, t) {
              return (
                (y =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
                y(e, t)
              );
            }
            function v(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            var w = (function (e) {
              function t() {
                return p(this, t), g(this, b(t).apply(this, arguments));
              }
              return (
                h(t, e),
                f(t, [
                  {
                    key: 'propsWith',
                    value: function (e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = {};
                      return (
                        Object.keys(this.props).forEach(function (n) {
                          if (-1 !== n.search(e)) {
                            var a = t ? n.replace(e, '') : n;
                            r[a] = this.props[n];
                          }
                        }, this),
                        r
                      );
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function () {
                      this.clipboard && this.clipboard.destroy();
                    },
                  },
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props.options || this.propsWith(/^option-/, !0),
                        t = i.a.findDOMNode(this.element);
                      if (t) {
                        var n = r('clipboard');
                        this.clipboard = new n(t, e);
                        var a = this.propsWith(/^on/, !0);
                        Object.keys(a).forEach(function (e) {
                          this.clipboard.on(e.toLowerCase(), this.props['on' + e]);
                        }, this);
                      }
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e = this,
                        t = u(
                          {
                            title: this.props.title || '',
                            type: this.getType(),
                            className: this.props.className || '',
                            style: this.props.style || {},
                            ref: function (t) {
                              return (e.element = t);
                            },
                            onClick: this.props.onClick,
                          },
                          this.propsWith(/^data-/),
                          this.propsWith(/^button-/, !0),
                        ),
                        n = r('clipboard');
                      return this.props.isVisibleWhenUnsupported || n.isSupported()
                        ? a.a.createElement(this.getComponent(), t, this.props.children)
                        : null;
                    },
                  },
                  {
                    key: 'getType',
                    value: function () {
                      return 'button' === this.getComponent() || 'input' === this.getComponent()
                        ? this.props.type || 'button'
                        : void 0;
                    },
                  },
                  {
                    key: 'getComponent',
                    value: function () {
                      return this.props.component || 'button';
                    },
                  },
                ]),
                t
              );
            })(a.a.Component);
            v(w, 'propTypes', {
              options: function (e, t, r) {
                var n = e[t];
                if ((n && 'object' !== c(n)) || Array.isArray(n))
                  return new Error(
                    "Invalid props '".concat(t, "' supplied to '").concat(r, "'. ") +
                      "'".concat(t, "' is not an object."),
                  );
                if (void 0 !== e['option-text']) {
                  var a = e['option-text'];
                  if ('function' !== typeof a)
                    return new Error(
                      "Invalid props 'option-text' supplied to '".concat(r, "'. ") +
                        "'option-text' is not a function.",
                    );
                }
              },
              title: l.a.string,
              type: l.a.string,
              className: l.a.string,
              style: l.a.object,
              component: l.a.any,
              children: l.a.any,
            }),
              v(w, 'defaultProps', { isVisibleWhenUnsupported: !0, onClick: function () {} }),
              (t['default'] = w);
          },
          clipboard: function (t, r) {
            t.exports = e;
          },
          'prop-types': function (e, r) {
            e.exports = t;
          },
          react: function (e, t) {
            e.exports = r;
          },
          'react-dom': function (e, t) {
            e.exports = n;
          },
        });
      });
    },
    YXCA: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = o(r('q1tI')),
        a = o(r('+t3K'));
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        return p(e) || u(e, t) || l(e, t) || s();
      }
      function s() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function l(e, t) {
        if (e) {
          if ('string' === typeof e) return c(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(r)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? c(e, t)
              : void 0
          );
        }
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function u(e, t) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e)) {
          var r = [],
            n = !0,
            a = !1,
            o = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
              if ((r.push(i.value), t && r.length === t)) break;
          } catch (l) {
            (a = !0), (o = l);
          } finally {
            try {
              n || null == s['return'] || s['return']();
            } finally {
              if (a) throw o;
            }
          }
          return r;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      function d(e) {
        return (e.match(/^(.+)\.([^.]+)$/) || []).slice(1);
      }
      var f = function (e) {
        return function (t) {
          return n.default.createElement(a.default.Consumer, null, function (r) {
            var a = r.locale,
              o = {};
            return (
              a
                ? Object.keys(t).forEach(function (e) {
                    var r = d(e),
                      n = i(r, 2),
                      s = n[0],
                      l = n[1];
                    (l && l !== a) || (o[s || e] = t[e]);
                  })
                : (o = t),
              n.default.createElement(e, o)
            );
          });
        };
      };
      t.default = f;
    },
    eVs5: function (e, t, r) {
      'use strict';
      function n() {
        const e = a(r('6xEa'));
        return (
          (n = function () {
            return e;
          }),
          e
        );
      }
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function o(e) {
        return n()
          .default.compressToBase64(e)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      }
      function i(e) {
        return o(JSON.stringify(e));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var s = i;
      t.default = s;
    },
    mYBK: function (e, t, r) {},
    ns0B: function (e, t, r) {
      var n = r('wr9r').AllHtmlEntities,
        a = new n();
      function o(e) {
        return a.decode(
          e
            .split(/<[^>]+>/)
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return e.length > 0;
            })
            .join(' '),
        );
      }
      e.exports = o;
    },
    nw8D: function (e, t, r) {},
    qOys: function (e, t, r) {
      'use strict';
      function n(e) {
        return (
          (n =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          n(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = c(r('q1tI')),
        o = l(r('3Mpw')),
        i = c(r('7XYx'));
      function s() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || ('object' !== n(e) && 'function' !== typeof e)) return { default: e };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = a ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(r, o, i) : (r[o] = e[o]);
          }
        return (r.default = e), t && t.set(e, r), r;
      }
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      r('JMDn');
      var p = function (e) {
        var t = e.code,
          r = e.lang,
          n = e.showCopy,
          s = void 0 === n || n;
        return a.default.createElement(
          'div',
          { className: '__dumi-default-code-block' },
          a.default.createElement(
            o.default,
            u({}, o.defaultProps, { code: t, language: r, theme: void 0 }),
            function (e) {
              var r = e.className,
                n = e.style,
                o = e.tokens,
                l = e.getLineProps,
                c = e.getTokenProps;
              return a.default.createElement(
                'pre',
                { className: r, style: n },
                s &&
                  a.default.createElement(i.default, {
                    className: '__dumi-default-code-block-copy-btn',
                    text: t,
                  }),
                o.map(function (e, t) {
                  return a.default.createElement(
                    'div',
                    l({ line: e, key: t }),
                    e.map(function (e, t) {
                      return a.default.createElement('span', c({ token: e, key: t }));
                    }),
                  );
                }),
              );
            },
          ),
        );
      };
      t.default = p;
    },
    swKd: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.newpkgJSON = void 0);
      const n = (
        e = {},
        t = 'dumi-example',
        r = 'index.js',
        n = {},
        a = 'An auto generated demo by dumi',
      ) =>
        `{\n  "name": "${t}",\n  "version": "0.0.0",\n  "description": "${a}",\n  "main": "${r}",\n  "dependencies": {\n    ${Object.keys(
          e,
        )
          .map((t) => `"${t}": "${e[t]}"`)
          .join(',\n    ')}\n  },\n  "devDependencies": {\n    ${Object.keys(n)
          .map((e) => `"${e}": "${n[e]}"`)
          .join(',\n    ')}\n  }\n}`;
      t.newpkgJSON = n;
    },
    sxGJ: function (e, t, r) {
      (function (t, r) {
        e.exports = r();
      })(0, function () {
        return (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var a = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
              'undefined' !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var a in e)
                  r.d(
                    n,
                    a,
                    function (t) {
                      return e[t];
                    }.bind(null, a),
                  );
              return n;
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e['default'];
                    }
                  : function () {
                      return e;
                    };
              return r.d(t, 'a', t), t;
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ''),
            r((r.s = 6))
          );
        })([
          function (e, t) {
            function r(e) {
              var t;
              if ('SELECT' === e.nodeName) e.focus(), (t = e.value);
              else if ('INPUT' === e.nodeName || 'TEXTAREA' === e.nodeName) {
                var r = e.hasAttribute('readonly');
                r || e.setAttribute('readonly', ''),
                  e.select(),
                  e.setSelectionRange(0, e.value.length),
                  r || e.removeAttribute('readonly'),
                  (t = e.value);
              } else {
                e.hasAttribute('contenteditable') && e.focus();
                var n = window.getSelection(),
                  a = document.createRange();
                a.selectNodeContents(e), n.removeAllRanges(), n.addRange(a), (t = n.toString());
              }
              return t;
            }
            e.exports = r;
          },
          function (e, t) {
            function r() {}
            (r.prototype = {
              on: function (e, t, r) {
                var n = this.e || (this.e = {});
                return (n[e] || (n[e] = [])).push({ fn: t, ctx: r }), this;
              },
              once: function (e, t, r) {
                var n = this;
                function a() {
                  n.off(e, a), t.apply(r, arguments);
                }
                return (a._ = t), this.on(e, a, r);
              },
              emit: function (e) {
                var t = [].slice.call(arguments, 1),
                  r = ((this.e || (this.e = {}))[e] || []).slice(),
                  n = 0,
                  a = r.length;
                for (n; n < a; n++) r[n].fn.apply(r[n].ctx, t);
                return this;
              },
              off: function (e, t) {
                var r = this.e || (this.e = {}),
                  n = r[e],
                  a = [];
                if (n && t)
                  for (var o = 0, i = n.length; o < i; o++)
                    n[o].fn !== t && n[o].fn._ !== t && a.push(n[o]);
                return a.length ? (r[e] = a) : delete r[e], this;
              },
            }),
              (e.exports = r),
              (e.exports.TinyEmitter = r);
          },
          function (e, t, r) {
            var n = r(3),
              a = r(4);
            function o(e, t, r) {
              if (!e && !t && !r) throw new Error('Missing required arguments');
              if (!n.string(t)) throw new TypeError('Second argument must be a String');
              if (!n.fn(r)) throw new TypeError('Third argument must be a Function');
              if (n.node(e)) return i(e, t, r);
              if (n.nodeList(e)) return s(e, t, r);
              if (n.string(e)) return l(e, t, r);
              throw new TypeError(
                'First argument must be a String, HTMLElement, HTMLCollection, or NodeList',
              );
            }
            function i(e, t, r) {
              return (
                e.addEventListener(t, r),
                {
                  destroy: function () {
                    e.removeEventListener(t, r);
                  },
                }
              );
            }
            function s(e, t, r) {
              return (
                Array.prototype.forEach.call(e, function (e) {
                  e.addEventListener(t, r);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                      e.removeEventListener(t, r);
                    });
                  },
                }
              );
            }
            function l(e, t, r) {
              return a(document.body, e, t, r);
            }
            e.exports = o;
          },
          function (e, t) {
            (t.node = function (e) {
              return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
            }),
              (t.nodeList = function (e) {
                var r = Object.prototype.toString.call(e);
                return (
                  void 0 !== e &&
                  ('[object NodeList]' === r || '[object HTMLCollection]' === r) &&
                  'length' in e &&
                  (0 === e.length || t.node(e[0]))
                );
              }),
              (t.string = function (e) {
                return 'string' === typeof e || e instanceof String;
              }),
              (t.fn = function (e) {
                var t = Object.prototype.toString.call(e);
                return '[object Function]' === t;
              });
          },
          function (e, t, r) {
            var n = r(5);
            function a(e, t, r, n, a) {
              var o = i.apply(this, arguments);
              return (
                e.addEventListener(r, o, a),
                {
                  destroy: function () {
                    e.removeEventListener(r, o, a);
                  },
                }
              );
            }
            function o(e, t, r, n, o) {
              return 'function' === typeof e.addEventListener
                ? a.apply(null, arguments)
                : 'function' === typeof r
                ? a.bind(null, document).apply(null, arguments)
                : ('string' === typeof e && (e = document.querySelectorAll(e)),
                  Array.prototype.map.call(e, function (e) {
                    return a(e, t, r, n, o);
                  }));
            }
            function i(e, t, r, a) {
              return function (r) {
                (r.delegateTarget = n(r.target, t)), r.delegateTarget && a.call(e, r);
              };
            }
            e.exports = o;
          },
          function (e, t) {
            var r = 9;
            if ('undefined' !== typeof Element && !Element.prototype.matches) {
              var n = Element.prototype;
              n.matches =
                n.matchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                n.oMatchesSelector ||
                n.webkitMatchesSelector;
            }
            function a(e, t) {
              while (e && e.nodeType !== r) {
                if ('function' === typeof e.matches && e.matches(t)) return e;
                e = e.parentNode;
              }
            }
            e.exports = a;
          },
          function (e, t, r) {
            'use strict';
            r.r(t);
            var n = r(0),
              a = r.n(n),
              o =
                'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              i = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })();
            function s(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            var l = (function () {
                function e(t) {
                  s(this, e), this.resolveOptions(t), this.initSelection();
                }
                return (
                  i(e, [
                    {
                      key: 'resolveOptions',
                      value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (this.action = e.action),
                          (this.container = e.container),
                          (this.emitter = e.emitter),
                          (this.target = e.target),
                          (this.text = e.text),
                          (this.trigger = e.trigger),
                          (this.selectedText = '');
                      },
                    },
                    {
                      key: 'initSelection',
                      value: function () {
                        this.text ? this.selectFake() : this.target && this.selectTarget();
                      },
                    },
                    {
                      key: 'selectFake',
                      value: function () {
                        var e = this,
                          t = 'rtl' == document.documentElement.getAttribute('dir');
                        this.removeFake(),
                          (this.fakeHandlerCallback = function () {
                            return e.removeFake();
                          }),
                          (this.fakeHandler =
                            this.container.addEventListener('click', this.fakeHandlerCallback) ||
                            !0),
                          (this.fakeElem = document.createElement('textarea')),
                          (this.fakeElem.style.fontSize = '12pt'),
                          (this.fakeElem.style.border = '0'),
                          (this.fakeElem.style.padding = '0'),
                          (this.fakeElem.style.margin = '0'),
                          (this.fakeElem.style.position = 'absolute'),
                          (this.fakeElem.style[t ? 'right' : 'left'] = '-9999px');
                        var r = window.pageYOffset || document.documentElement.scrollTop;
                        (this.fakeElem.style.top = r + 'px'),
                          this.fakeElem.setAttribute('readonly', ''),
                          (this.fakeElem.value = this.text),
                          this.container.appendChild(this.fakeElem),
                          (this.selectedText = a()(this.fakeElem)),
                          this.copyText();
                      },
                    },
                    {
                      key: 'removeFake',
                      value: function () {
                        this.fakeHandler &&
                          (this.container.removeEventListener('click', this.fakeHandlerCallback),
                          (this.fakeHandler = null),
                          (this.fakeHandlerCallback = null)),
                          this.fakeElem &&
                            (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                      },
                    },
                    {
                      key: 'selectTarget',
                      value: function () {
                        (this.selectedText = a()(this.target)), this.copyText();
                      },
                    },
                    {
                      key: 'copyText',
                      value: function () {
                        var e = void 0;
                        try {
                          e = document.execCommand(this.action);
                        } catch (t) {
                          e = !1;
                        }
                        this.handleResult(e);
                      },
                    },
                    {
                      key: 'handleResult',
                      value: function (e) {
                        this.emitter.emit(e ? 'success' : 'error', {
                          action: this.action,
                          text: this.selectedText,
                          trigger: this.trigger,
                          clearSelection: this.clearSelection.bind(this),
                        });
                      },
                    },
                    {
                      key: 'clearSelection',
                      value: function () {
                        this.trigger && this.trigger.focus(),
                          document.activeElement.blur(),
                          window.getSelection().removeAllRanges();
                      },
                    },
                    {
                      key: 'destroy',
                      value: function () {
                        this.removeFake();
                      },
                    },
                    {
                      key: 'action',
                      set: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'copy';
                        if (((this._action = e), 'copy' !== this._action && 'cut' !== this._action))
                          throw new Error('Invalid "action" value, use either "copy" or "cut"');
                      },
                      get: function () {
                        return this._action;
                      },
                    },
                    {
                      key: 'target',
                      set: function (e) {
                        if (void 0 !== e) {
                          if (
                            !e ||
                            'object' !== ('undefined' === typeof e ? 'undefined' : o(e)) ||
                            1 !== e.nodeType
                          )
                            throw new Error('Invalid "target" value, use a valid Element');
                          if ('copy' === this.action && e.hasAttribute('disabled'))
                            throw new Error(
                              'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute',
                            );
                          if (
                            'cut' === this.action &&
                            (e.hasAttribute('readonly') || e.hasAttribute('disabled'))
                          )
                            throw new Error(
                              'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes',
                            );
                          this._target = e;
                        }
                      },
                      get: function () {
                        return this._target;
                      },
                    },
                  ]),
                  e
                );
              })(),
              c = l,
              u = r(1),
              p = r.n(u),
              d = r(2),
              f = r.n(d),
              g =
                'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        'function' === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? 'symbol'
                        : typeof e;
                    },
              m = (function () {
                function e(e, t) {
                  for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                      (n.configurable = !0),
                      'value' in n && (n.writable = !0),
                      Object.defineProperty(e, n.key, n);
                  }
                }
                return function (t, r, n) {
                  return r && e(t.prototype, r), n && e(t, n), t;
                };
              })();
            function b(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            }
            function h(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t;
            }
            function y(e, t) {
              if ('function' !== typeof t && null !== t)
                throw new TypeError(
                  'Super expression must either be null or a function, not ' + typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            var v = (function (e) {
              function t(e, r) {
                b(this, t);
                var n = h(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return n.resolveOptions(r), n.listenClick(e), n;
              }
              return (
                y(t, e),
                m(
                  t,
                  [
                    {
                      key: 'resolveOptions',
                      value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (this.action =
                          'function' === typeof e.action ? e.action : this.defaultAction),
                          (this.target =
                            'function' === typeof e.target ? e.target : this.defaultTarget),
                          (this.text = 'function' === typeof e.text ? e.text : this.defaultText),
                          (this.container =
                            'object' === g(e.container) ? e.container : document.body);
                      },
                    },
                    {
                      key: 'listenClick',
                      value: function (e) {
                        var t = this;
                        this.listener = f()(e, 'click', function (e) {
                          return t.onClick(e);
                        });
                      },
                    },
                    {
                      key: 'onClick',
                      value: function (e) {
                        var t = e.delegateTarget || e.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null),
                          (this.clipboardAction = new c({
                            action: this.action(t),
                            target: this.target(t),
                            text: this.text(t),
                            container: this.container,
                            trigger: t,
                            emitter: this,
                          }));
                      },
                    },
                    {
                      key: 'defaultAction',
                      value: function (e) {
                        return w('action', e);
                      },
                    },
                    {
                      key: 'defaultTarget',
                      value: function (e) {
                        var t = w('target', e);
                        if (t) return document.querySelector(t);
                      },
                    },
                    {
                      key: 'defaultText',
                      value: function (e) {
                        return w('text', e);
                      },
                    },
                    {
                      key: 'destroy',
                      value: function () {
                        this.listener.destroy(),
                          this.clipboardAction &&
                            (this.clipboardAction.destroy(), (this.clipboardAction = null));
                      },
                    },
                  ],
                  [
                    {
                      key: 'isSupported',
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : ['copy', 'cut'],
                          t = 'string' === typeof e ? [e] : e,
                          r = !!document.queryCommandSupported;
                        return (
                          t.forEach(function (e) {
                            r = r && !!document.queryCommandSupported(e);
                          }),
                          r
                        );
                      },
                    },
                  ],
                ),
                t
              );
            })(p.a);
            function w(e, t) {
              var r = 'data-clipboard-' + e;
              if (t.hasAttribute(r)) return t.getAttribute(r);
            }
            t['default'] = v;
          },
        ])['default'];
      });
    },
    wr9r: function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r('UClF');
      t.XmlEntities = n.XmlEntities;
      var a = r('HwU6');
      t.Html4Entities = a.Html4Entities;
      var o = r('F//3');
      (t.Html5Entities = o.Html5Entities), (t.AllHtmlEntities = o.Html5Entities);
    },
  },
]);
