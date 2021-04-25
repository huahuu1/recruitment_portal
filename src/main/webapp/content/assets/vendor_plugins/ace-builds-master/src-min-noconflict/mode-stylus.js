ace.define('ace/mode/css_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules'], function (e, t, n) {
  'use strict';
  var r = e('../lib/oop'),
    i = e('../lib/lang'),
    s = e('./text_highlight_rules').TextHighlightRules,
    o = (t.supportType = 'align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|min-height|min-width|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index'),
    u = (t.supportFunction = 'rgb|rgba|url|attr|counter|counters'),
    a = (t.supportConstant = 'absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero'),
    f = (t.supportConstantColor = 'aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen'),
    l = (t.supportConstantFonts = 'arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace'),
    c = (t.numRe = '\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))'),
    h = (t.pseudoElements = '(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b'),
    p = (t.pseudoClasses = '(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b'),
    d = function () {
      var e = this.createKeywordMapper({ 'support.function': u, 'support.constant': a, 'support.type': o, 'support.constant.color': f, 'support.constant.fonts': l }, 'text', !0);
      (this.$rules = {
        start: [{ include: ['strings', 'url', 'comments'] }, { token: 'paren.lparen', regex: '\\{', next: 'ruleset' }, { token: 'paren.rparen', regex: '\\}' }, { token: 'string', regex: '@', next: 'media' }, { token: 'keyword', regex: '#[a-z0-9-_]+' }, { token: 'keyword', regex: '%' }, { token: 'variable', regex: '\\.[a-z0-9-_]+' }, { token: 'string', regex: ':[a-z0-9-_]+' }, { token: 'constant.numeric', regex: c }, { token: 'constant', regex: '[a-z0-9-_]+' }, { caseInsensitive: !0 }],
        media: [{ include: ['strings', 'url', 'comments'] }, { token: 'paren.lparen', regex: '\\{', next: 'start' }, { token: 'paren.rparen', regex: '\\}', next: 'start' }, { token: 'string', regex: ';', next: 'start' }, { token: 'keyword', regex: '(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)' }],
        comments: [{ token: 'comment', regex: '\\/\\*', push: [{ token: 'comment', regex: '\\*\\/', next: 'pop' }, { defaultToken: 'comment' }] }],
        ruleset: [{ regex: '-(webkit|ms|moz|o)-', token: 'text' }, { token: 'paren.rparen', regex: '\\}', next: 'start' }, { include: ['strings', 'url', 'comments'] }, { token: ['constant.numeric', 'keyword'], regex: '(' + c + ')(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)' }, { token: 'constant.numeric', regex: c }, { token: 'constant.numeric', regex: '#[a-f0-9]{6}' }, { token: 'constant.numeric', regex: '#[a-f0-9]{3}' }, { token: ['punctuation', 'entity.other.attribute-name.pseudo-element.css'], regex: h }, { token: ['punctuation', 'entity.other.attribute-name.pseudo-class.css'], regex: p }, { include: 'url' }, { token: e, regex: '\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*' }, { caseInsensitive: !0 }],
        url: [{ token: 'support.function', regex: '(?:url(:?-prefix)?|domain|regexp)\\(', push: [{ token: 'support.function', regex: '\\)', next: 'pop' }, { defaultToken: 'string' }] }],
        strings: [
          { token: 'string.start', regex: "'", push: [{ token: 'string.end', regex: "'|$", next: 'pop' }, { include: 'escapes' }, { token: 'constant.language.escape', regex: /\\$/, consumeLineEnd: !0 }, { defaultToken: 'string' }] },
          { token: 'string.start', regex: '"', push: [{ token: 'string.end', regex: '"|$', next: 'pop' }, { include: 'escapes' }, { token: 'constant.language.escape', regex: /\\$/, consumeLineEnd: !0 }, { defaultToken: 'string' }] },
        ],
        escapes: [{ token: 'constant.language.escape', regex: /\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/ }],
      }),
        this.normalizeRules();
    };
  r.inherits(d, s), (t.CssHighlightRules = d);
}),
  ace.define('ace/mode/stylus_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules', 'ace/mode/css_highlight_rules'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules,
      s = e('./css_highlight_rules'),
      o = function () {
        var e = this.createKeywordMapper({ 'support.type': s.supportType, 'support.function': s.supportFunction, 'support.constant': s.supportConstant, 'support.constant.color': s.supportConstantColor, 'support.constant.fonts': s.supportConstantFonts }, 'text', !0);
        this.$rules = {
          start: [
            { token: 'comment', regex: /\/\/.*$/ },
            { token: 'comment', regex: /\/\*/, next: 'comment' },
            { token: ['entity.name.function.stylus', 'text'], regex: '^([-a-zA-Z_][-\\w]*)?(\\()' },
            { token: ['entity.other.attribute-name.class.stylus'], regex: '\\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*' },
            { token: ['entity.language.stylus'], regex: '^ *&' },
            { token: ['variable.language.stylus'], regex: '(arguments)' },
            { token: ['keyword.stylus'], regex: '@[-\\w]+' },
            { token: ['punctuation', 'entity.other.attribute-name.pseudo-element.css'], regex: s.pseudoElements },
            { token: ['punctuation', 'entity.other.attribute-name.pseudo-class.css'], regex: s.pseudoClasses },
            { token: ['entity.name.tag.stylus'], regex: '(?:\\b)(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(?:h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)(?:\\b)' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{6}' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{3}' },
            { token: ['punctuation.definition.entity.stylus', 'entity.other.attribute-name.id.stylus'], regex: '(#)([a-zA-Z][a-zA-Z0-9_-]*)' },
            { token: 'meta.vendor-prefix.stylus', regex: '-webkit-|-moz\\-|-ms-|-o-' },
            { token: 'keyword.control.stylus', regex: '(?:!important|for|in|return|true|false|null|if|else|unless|return)\\b' },
            { token: 'keyword.operator.stylus', regex: '!|~|\\+|-|(?:\\*)?\\*|\\/|%|(?:\\.)\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!=' },
            { token: 'keyword.operator.stylus', regex: '(?:in|is(?:nt)?|not)\\b' },
            { token: 'string', regex: "'(?=.)", next: 'qstring' },
            { token: 'string', regex: '"(?=.)', next: 'qqstring' },
            { token: 'constant.numeric', regex: s.numRe },
            { token: 'keyword', regex: '(?:ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)\\b' },
            { token: e, regex: '\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*' },
          ],
          comment: [{ token: 'comment', regex: '\\*\\/', next: 'start' }, { defaultToken: 'comment' }],
          qqstring: [
            { token: 'string', regex: '[^"\\\\]+' },
            { token: 'string', regex: '\\\\$', next: 'qqstring' },
            { token: 'string', regex: '"|$', next: 'start' },
          ],
          qstring: [
            { token: 'string', regex: "[^'\\\\]+" },
            { token: 'string', regex: '\\\\$', next: 'qstring' },
            { token: 'string', regex: "'|$", next: 'start' },
          ],
        };
      };
    r.inherits(o, i), (t.StylusHighlightRules = o);
  }),
  ace.define('ace/mode/folding/coffee', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/folding/fold_mode', 'ace/range'], function (e, t, n) {
    'use strict';
    var r = e('../../lib/oop'),
      i = e('./fold_mode').FoldMode,
      s = e('../../range').Range,
      o = (t.FoldMode = function () {});
    r.inherits(o, i),
      function () {
        (this.getFoldWidgetRange = function (e, t, n) {
          var r = this.indentationBlock(e, n);
          if (r) return r;
          var i = /\S/,
            o = e.getLine(n),
            u = o.search(i);
          if (u == -1 || o[u] != '#') return;
          var a = o.length,
            f = e.getLength(),
            l = n,
            c = n;
          while (++n < f) {
            o = e.getLine(n);
            var h = o.search(i);
            if (h == -1) continue;
            if (o[h] != '#') break;
            c = n;
          }
          if (c > l) {
            var p = e.getLine(c).length;
            return new s(l, a, c, p);
          }
        }),
          (this.getFoldWidget = function (e, t, n) {
            var r = e.getLine(n),
              i = r.search(/\S/),
              s = e.getLine(n + 1),
              o = e.getLine(n - 1),
              u = o.search(/\S/),
              a = s.search(/\S/);
            if (i == -1) return (e.foldWidgets[n - 1] = u != -1 && u < a ? 'start' : ''), '';
            if (u == -1) {
              if (i == a && r[i] == '#' && s[i] == '#') return (e.foldWidgets[n - 1] = ''), (e.foldWidgets[n + 1] = ''), 'start';
            } else if (u == i && r[i] == '#' && o[i] == '#' && e.getLine(n - 2).search(/\S/) == -1) return (e.foldWidgets[n - 1] = 'start'), (e.foldWidgets[n + 1] = ''), '';
            return u != -1 && u < i ? (e.foldWidgets[n - 1] = 'start') : (e.foldWidgets[n - 1] = ''), i < a ? 'start' : '';
          });
      }.call(o.prototype);
  }),
  ace.define('ace/mode/stylus', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/stylus_highlight_rules', 'ace/mode/folding/coffee'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text').Mode,
      s = e('./stylus_highlight_rules').StylusHighlightRules,
      o = e('./folding/coffee').FoldMode,
      u = function () {
        (this.HighlightRules = s), (this.foldingRules = new o()), (this.$behaviour = this.$defaultBehaviour);
      };
    r.inherits(u, i),
      function () {
        (this.lineCommentStart = '//'), (this.blockComment = { start: '/*', end: '*/' }), (this.$id = 'ace/mode/stylus');
      }.call(u.prototype),
      (t.Mode = u);
  });
