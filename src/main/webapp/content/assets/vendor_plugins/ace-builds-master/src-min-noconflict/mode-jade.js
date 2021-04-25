ace.define('ace/mode/doc_comment_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function (e, t, n) {
  'use strict';
  var r = e('../lib/oop'),
    i = e('./text_highlight_rules').TextHighlightRules,
    s = function () {
      this.$rules = { start: [{ token: 'comment.doc.tag', regex: '@[\\w\\d_]+' }, s.getTagRule(), { defaultToken: 'comment.doc', caseInsensitive: !0 }] };
    };
  r.inherits(s, i),
    (s.getTagRule = function (e) {
      return { token: 'comment.doc.tag.storage.type', regex: '\\b(?:TODO|FIXME|XXX|HACK)\\b' };
    }),
    (s.getStartRule = function (e) {
      return { token: 'comment.doc', regex: '\\/\\*(?=\\*)', next: e };
    }),
    (s.getEndRule = function (e) {
      return { token: 'comment.doc', regex: '\\*\\/', next: e };
    }),
    (t.DocCommentHighlightRules = s);
}),
  ace.define('ace/mode/javascript_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/doc_comment_highlight_rules', 'ace/mode/text_highlight_rules'], function (e, t, n) {
    'use strict';
    function a() {
      var e = o.replace('\\d', '\\d\\-'),
        t = {
          onMatch: function (e, t, n) {
            var r = e.charAt(1) == '/' ? 2 : 1;
            if (r == 1) t != this.nextState ? n.unshift(this.next, this.nextState, 0) : n.unshift(this.next), n[2]++;
            else if (r == 2 && t == this.nextState) {
              n[1]--;
              if (!n[1] || n[1] < 0) n.shift(), n.shift();
            }
            return [
              { type: 'meta.tag.punctuation.' + (r == 1 ? '' : 'end-') + 'tag-open.xml', value: e.slice(0, r) },
              { type: 'meta.tag.tag-name.xml', value: e.substr(r) },
            ];
          },
          regex: '</?' + e + '',
          next: 'jsxAttributes',
          nextState: 'jsx',
        };
      this.$rules.start.unshift(t);
      var n = { regex: '{', token: 'paren.quasi.start', push: 'start' };
      (this.$rules.jsx = [n, t, { include: 'reference' }, { defaultToken: 'string' }]),
        (this.$rules.jsxAttributes = [
          {
            token: 'meta.tag.punctuation.tag-close.xml',
            regex: '/?>',
            onMatch: function (e, t, n) {
              return t == n[0] && n.shift(), e.length == 2 && (n[0] == this.nextState && n[1]--, (!n[1] || n[1] < 0) && n.splice(0, 2)), (this.next = n[0] || 'start'), [{ type: this.token, value: e }];
            },
            nextState: 'jsx',
          },
          n,
          f('jsxAttributes'),
          { token: 'entity.other.attribute-name.xml', regex: e },
          { token: 'keyword.operator.attribute-equals.xml', regex: '=' },
          { token: 'text.tag-whitespace.xml', regex: '\\s+' },
          { token: 'string.attribute-value.xml', regex: "'", stateName: 'jsx_attr_q', push: [{ token: 'string.attribute-value.xml', regex: "'", next: 'pop' }, { include: 'reference' }, { defaultToken: 'string.attribute-value.xml' }] },
          { token: 'string.attribute-value.xml', regex: '"', stateName: 'jsx_attr_qq', push: [{ token: 'string.attribute-value.xml', regex: '"', next: 'pop' }, { include: 'reference' }, { defaultToken: 'string.attribute-value.xml' }] },
          t,
        ]),
        (this.$rules.reference = [{ token: 'constant.language.escape.reference.xml', regex: '(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)' }]);
    }
    function f(e) {
      return [
        { token: 'comment', regex: /\/\*/, next: [i.getTagRule(), { token: 'comment', regex: '\\*\\/', next: e || 'pop' }, { defaultToken: 'comment', caseInsensitive: !0 }] },
        { token: 'comment', regex: '\\/\\/', next: [i.getTagRule(), { token: 'comment', regex: '$|^', next: e || 'pop' }, { defaultToken: 'comment', caseInsensitive: !0 }] },
      ];
    }
    var r = e('../lib/oop'),
      i = e('./doc_comment_highlight_rules').DocCommentHighlightRules,
      s = e('./text_highlight_rules').TextHighlightRules,
      o = '[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*',
      u = function (e) {
        var t = this.createKeywordMapper({ 'variable.language': 'Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|Namespace|QName|XML|XMLList|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt|JSON|Math|this|arguments|prototype|window|document', keyword: 'const|yield|import|get|set|async|await|break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|__parent__|__count__|escape|unescape|with|__proto__|class|enum|extends|super|export|implements|private|public|interface|package|protected|static', 'storage.type': 'const|let|var|function', 'constant.language': 'null|Infinity|NaN|undefined', 'support.function': 'alert', 'constant.language.boolean': 'true|false' }, 'identifier'),
          n = 'case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void',
          r = '\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u{[0-9a-fA-F]{1,6}}|[0-2][0-7]{0,2}|3[0-7][0-7]?|[4-7][0-7]?|.)';
        this.$rules = {
          no_regex: [i.getStartRule('doc-start'), f('no_regex'), { token: 'string', regex: "'(?=.)", next: 'qstring' }, { token: 'string', regex: '"(?=.)', next: 'qqstring' }, { token: 'constant.numeric', regex: /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/ }, { token: 'constant.numeric', regex: /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/ }, { token: ['storage.type', 'punctuation.operator', 'support.function', 'punctuation.operator', 'entity.name.function', 'text', 'keyword.operator'], regex: '(' + o + ')(\\.)(prototype)(\\.)(' + o + ')(\\s*)(=)', next: 'function_arguments' }, { token: ['storage.type', 'punctuation.operator', 'entity.name.function', 'text', 'keyword.operator', 'text', 'storage.type', 'text', 'paren.lparen'], regex: '(' + o + ')(\\.)(' + o + ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()', next: 'function_arguments' }, { token: ['entity.name.function', 'text', 'keyword.operator', 'text', 'storage.type', 'text', 'paren.lparen'], regex: '(' + o + ')(\\s*)(=)(\\s*)(function)(\\s*)(\\()', next: 'function_arguments' }, { token: ['storage.type', 'punctuation.operator', 'entity.name.function', 'text', 'keyword.operator', 'text', 'storage.type', 'text', 'entity.name.function', 'text', 'paren.lparen'], regex: '(' + o + ')(\\.)(' + o + ')(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()', next: 'function_arguments' }, { token: ['storage.type', 'text', 'entity.name.function', 'text', 'paren.lparen'], regex: '(function)(\\s+)(' + o + ')(\\s*)(\\()', next: 'function_arguments' }, { token: ['entity.name.function', 'text', 'punctuation.operator', 'text', 'storage.type', 'text', 'paren.lparen'], regex: '(' + o + ')(\\s*)(:)(\\s*)(function)(\\s*)(\\()', next: 'function_arguments' }, { token: ['text', 'text', 'storage.type', 'text', 'paren.lparen'], regex: '(:)(\\s*)(function)(\\s*)(\\()', next: 'function_arguments' }, { token: 'keyword', regex: 'from(?=\\s*(\'|"))' }, { token: 'keyword', regex: '(?:' + n + ')\\b', next: 'start' }, { token: ['support.constant'], regex: /that\b/ }, { token: ['storage.type', 'punctuation.operator', 'support.function.firebug'], regex: /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/ }, { token: t, regex: o }, { token: 'punctuation.operator', regex: /[.](?![.])/, next: 'property' }, { token: 'storage.type', regex: /=>/ }, { token: 'keyword.operator', regex: /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/, next: 'start' }, { token: 'punctuation.operator', regex: /[?:,;.]/, next: 'start' }, { token: 'paren.lparen', regex: /[\[({]/, next: 'start' }, { token: 'paren.rparen', regex: /[\])}]/ }, { token: 'comment', regex: /^#!.*$/ }],
          property: [
            { token: 'text', regex: '\\s+' },
            { token: ['storage.type', 'punctuation.operator', 'entity.name.function', 'text', 'keyword.operator', 'text', 'storage.type', 'text', 'entity.name.function', 'text', 'paren.lparen'], regex: '(' + o + ')(\\.)(' + o + ')(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()', next: 'function_arguments' },
            { token: 'punctuation.operator', regex: /[.](?![.])/ },
            { token: 'support.function', regex: /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/ },
            { token: 'support.function.dom', regex: /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/ },
            { token: 'support.constant', regex: /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/ },
            { token: 'identifier', regex: o },
            { regex: '', token: 'empty', next: 'no_regex' },
          ],
          start: [i.getStartRule('doc-start'), f('start'), { token: 'string.regexp', regex: '\\/', next: 'regex' }, { token: 'text', regex: '\\s+|^$', next: 'start' }, { token: 'empty', regex: '', next: 'no_regex' }],
          regex: [{ token: 'regexp.keyword.operator', regex: '\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)' }, { token: 'string.regexp', regex: '/[sxngimy]*', next: 'no_regex' }, { token: 'invalid', regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/ }, { token: 'constant.language.escape', regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/ }, { token: 'constant.language.delimiter', regex: /\|/ }, { token: 'constant.language.escape', regex: /\[\^?/, next: 'regex_character_class' }, { token: 'empty', regex: '$', next: 'no_regex' }, { defaultToken: 'string.regexp' }],
          regex_character_class: [{ token: 'regexp.charclass.keyword.operator', regex: '\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)' }, { token: 'constant.language.escape', regex: ']', next: 'regex' }, { token: 'constant.language.escape', regex: '-' }, { token: 'empty', regex: '$', next: 'no_regex' }, { defaultToken: 'string.regexp.charachterclass' }],
          function_arguments: [
            { token: 'variable.parameter', regex: o },
            { token: 'punctuation.operator', regex: '[, ]+' },
            { token: 'punctuation.operator', regex: '$' },
            { token: 'empty', regex: '', next: 'no_regex' },
          ],
          qqstring: [{ token: 'constant.language.escape', regex: r }, { token: 'string', regex: '\\\\$', consumeLineEnd: !0 }, { token: 'string', regex: '"|$', next: 'no_regex' }, { defaultToken: 'string' }],
          qstring: [{ token: 'constant.language.escape', regex: r }, { token: 'string', regex: '\\\\$', consumeLineEnd: !0 }, { token: 'string', regex: "'|$", next: 'no_regex' }, { defaultToken: 'string' }],
        };
        if (!e || !e.noES6)
          this.$rules.no_regex.unshift(
            {
              regex: '[{}]',
              onMatch: function (e, t, n) {
                this.next = e == '{' ? this.nextState : '';
                if (e == '{' && n.length) n.unshift('start', t);
                else if (e == '}' && n.length) {
                  n.shift(), (this.next = n.shift());
                  if (this.next.indexOf('string') != -1 || this.next.indexOf('jsx') != -1) return 'paren.quasi.end';
                }
                return e == '{' ? 'paren.lparen' : 'paren.rparen';
              },
              nextState: 'start',
            },
            { token: 'string.quasi.start', regex: /`/, push: [{ token: 'constant.language.escape', regex: r }, { token: 'paren.quasi.start', regex: /\${/, push: 'start' }, { token: 'string.quasi.end', regex: /`/, next: 'pop' }, { defaultToken: 'string.quasi' }] }
          ),
            (!e || e.jsx != 0) && a.call(this);
        this.embedRules(i, 'doc-', [i.getEndRule('no_regex')]), this.normalizeRules();
      };
    r.inherits(u, s), (t.JavaScriptHighlightRules = u);
  }),
  ace.define('ace/mode/xml_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules,
      s = function (e) {
        var t = '[_:a-zA-Z\u00c0-\uffff][-_:.a-zA-Z0-9\u00c0-\uffff]*';
        (this.$rules = {
          start: [{ token: 'string.cdata.xml', regex: '<\\!\\[CDATA\\[', next: 'cdata' }, { token: ['punctuation.instruction.xml', 'keyword.instruction.xml'], regex: '(<\\?)(' + t + ')', next: 'processing_instruction' }, { token: 'comment.start.xml', regex: '<\\!--', next: 'comment' }, { token: ['xml-pe.doctype.xml', 'xml-pe.doctype.xml'], regex: '(<\\!)(DOCTYPE)(?=[\\s])', next: 'doctype', caseInsensitive: !0 }, { include: 'tag' }, { token: 'text.end-tag-open.xml', regex: '</' }, { token: 'text.tag-open.xml', regex: '<' }, { include: 'reference' }, { defaultToken: 'text.xml' }],
          processing_instruction: [{ token: 'entity.other.attribute-name.decl-attribute-name.xml', regex: t }, { token: 'keyword.operator.decl-attribute-equals.xml', regex: '=' }, { include: 'whitespace' }, { include: 'string' }, { token: 'punctuation.xml-decl.xml', regex: '\\?>', next: 'start' }],
          doctype: [{ include: 'whitespace' }, { include: 'string' }, { token: 'xml-pe.doctype.xml', regex: '>', next: 'start' }, { token: 'xml-pe.xml', regex: '[-_a-zA-Z0-9:]+' }, { token: 'punctuation.int-subset', regex: '\\[', push: 'int_subset' }],
          int_subset: [
            { token: 'text.xml', regex: '\\s+' },
            { token: 'punctuation.int-subset.xml', regex: ']', next: 'pop' },
            { token: ['punctuation.markup-decl.xml', 'keyword.markup-decl.xml'], regex: '(<\\!)(' + t + ')', push: [{ token: 'text', regex: '\\s+' }, { token: 'punctuation.markup-decl.xml', regex: '>', next: 'pop' }, { include: 'string' }] },
          ],
          cdata: [
            { token: 'string.cdata.xml', regex: '\\]\\]>', next: 'start' },
            { token: 'text.xml', regex: '\\s+' },
            { token: 'text.xml', regex: '(?:[^\\]]|\\](?!\\]>))+' },
          ],
          comment: [{ token: 'comment.end.xml', regex: '-->', next: 'start' }, { defaultToken: 'comment.xml' }],
          reference: [{ token: 'constant.language.escape.reference.xml', regex: '(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)' }],
          attr_reference: [{ token: 'constant.language.escape.reference.attribute-value.xml', regex: '(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)' }],
          tag: [{ token: ['meta.tag.punctuation.tag-open.xml', 'meta.tag.punctuation.end-tag-open.xml', 'meta.tag.tag-name.xml'], regex: '(?:(<)|(</))((?:' + t + ':)?' + t + ')', next: [{ include: 'attributes' }, { token: 'meta.tag.punctuation.tag-close.xml', regex: '/?>', next: 'start' }] }],
          tag_whitespace: [{ token: 'text.tag-whitespace.xml', regex: '\\s+' }],
          whitespace: [{ token: 'text.whitespace.xml', regex: '\\s+' }],
          string: [
            { token: 'string.xml', regex: "'", push: [{ token: 'string.xml', regex: "'", next: 'pop' }, { defaultToken: 'string.xml' }] },
            { token: 'string.xml', regex: '"', push: [{ token: 'string.xml', regex: '"', next: 'pop' }, { defaultToken: 'string.xml' }] },
          ],
          attributes: [{ token: 'entity.other.attribute-name.xml', regex: t }, { token: 'keyword.operator.attribute-equals.xml', regex: '=' }, { include: 'tag_whitespace' }, { include: 'attribute_value' }],
          attribute_value: [
            { token: 'string.attribute-value.xml', regex: "'", push: [{ token: 'string.attribute-value.xml', regex: "'", next: 'pop' }, { include: 'attr_reference' }, { defaultToken: 'string.attribute-value.xml' }] },
            { token: 'string.attribute-value.xml', regex: '"', push: [{ token: 'string.attribute-value.xml', regex: '"', next: 'pop' }, { include: 'attr_reference' }, { defaultToken: 'string.attribute-value.xml' }] },
          ],
        }),
          this.constructor === s && this.normalizeRules();
      };
    (function () {
      this.embedTagRules = function (e, t, n) {
        this.$rules.tag.unshift({ token: ['meta.tag.punctuation.tag-open.xml', 'meta.tag.' + n + '.tag-name.xml'], regex: '(<)(' + n + '(?=\\s|>|$))', next: [{ include: 'attributes' }, { token: 'meta.tag.punctuation.tag-close.xml', regex: '/?>', next: t + 'start' }] }),
          (this.$rules[n + '-end'] = [
            { include: 'attributes' },
            {
              token: 'meta.tag.punctuation.tag-close.xml',
              regex: '/?>',
              next: 'start',
              onMatch: function (e, t, n) {
                return n.splice(0), this.token;
              },
            },
          ]),
          this.embedRules(e, t, [
            { token: ['meta.tag.punctuation.end-tag-open.xml', 'meta.tag.' + n + '.tag-name.xml'], regex: '(</)(' + n + '(?=\\s|>|$))', next: n + '-end' },
            { token: 'string.cdata.xml', regex: '<\\!\\[CDATA\\[' },
            { token: 'string.cdata.xml', regex: '\\]\\]>' },
          ]);
      };
    }.call(i.prototype),
      r.inherits(s, i),
      (t.XmlHighlightRules = s));
  }),
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
  ace.define('ace/mode/html_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/css_highlight_rules', 'ace/mode/javascript_highlight_rules', 'ace/mode/xml_highlight_rules'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('../lib/lang'),
      s = e('./css_highlight_rules').CssHighlightRules,
      o = e('./javascript_highlight_rules').JavaScriptHighlightRules,
      u = e('./xml_highlight_rules').XmlHighlightRules,
      a = i.createMap({ a: 'anchor', button: 'form', form: 'form', img: 'image', input: 'form', label: 'form', option: 'form', script: 'script', select: 'form', textarea: 'form', style: 'style', table: 'table', tbody: 'table', td: 'table', tfoot: 'table', th: 'table', tr: 'table' }),
      f = function () {
        u.call(this),
          this.addRules({
            attributes: [{ include: 'tag_whitespace' }, { token: 'entity.other.attribute-name.xml', regex: '[-_a-zA-Z0-9:.]+' }, { token: 'keyword.operator.attribute-equals.xml', regex: '=', push: [{ include: 'tag_whitespace' }, { token: 'string.unquoted.attribute-value.html', regex: '[^<>=\'"`\\s]+', next: 'pop' }, { token: 'empty', regex: '', next: 'pop' }] }, { include: 'attribute_value' }],
            tag: [
              {
                token: function (e, t) {
                  var n = a[t];
                  return ['meta.tag.punctuation.' + (e == '<' ? '' : 'end-') + 'tag-open.xml', 'meta.tag' + (n ? '.' + n : '') + '.tag-name.xml'];
                },
                regex: '(</?)([-_a-zA-Z0-9:.]+)',
                next: 'tag_stuff',
              },
            ],
            tag_stuff: [{ include: 'attributes' }, { token: 'meta.tag.punctuation.tag-close.xml', regex: '/?>', next: 'start' }],
          }),
          this.embedTagRules(s, 'css-', 'style'),
          this.embedTagRules(new o({ jsx: !1 }).getRules(), 'js-', 'script'),
          this.constructor === f && this.normalizeRules();
      };
    r.inherits(f, u), (t.HtmlHighlightRules = f);
  }),
  ace.define('ace/mode/markdown_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules', 'ace/mode/javascript_highlight_rules', 'ace/mode/xml_highlight_rules', 'ace/mode/html_highlight_rules', 'ace/mode/css_highlight_rules'], function (e, t, n) {
    'use strict';
    function c(e, t) {
      return { token: 'support.function', regex: '^\\s*```' + e + '\\s*$', push: t + 'start' };
    }
    var r = e('../lib/oop'),
      i = e('../lib/lang'),
      s = e('./text_highlight_rules').TextHighlightRules,
      o = e('./javascript_highlight_rules').JavaScriptHighlightRules,
      u = e('./xml_highlight_rules').XmlHighlightRules,
      a = e('./html_highlight_rules').HtmlHighlightRules,
      f = e('./css_highlight_rules').CssHighlightRules,
      l = function (e) {
        return '(?:[^' + i.escapeRegExp(e) + '\\\\]|\\\\.)*';
      },
      h = function () {
        a.call(this),
          this.$rules.start.unshift(
            { token: 'empty_line', regex: '^$', next: 'allowBlock' },
            { token: 'markup.heading.1', regex: '^=+(?=\\s*$)' },
            { token: 'markup.heading.2', regex: '^\\-+(?=\\s*$)' },
            {
              token: function (e) {
                return 'markup.heading.' + e.length;
              },
              regex: /^#{1,6}(?=\s*[^ #]|\s+#.)/,
              next: 'header',
            },
            c('(?:javascript|js)', 'jscode-'),
            c('xml', 'xmlcode-'),
            c('html', 'htmlcode-'),
            c('css', 'csscode-'),
            { token: 'support.function', regex: '^\\s*```\\s*\\S*(?:{.*?\\})?\\s*$', next: 'githubblock' },
            { token: 'string.blockquote', regex: '^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+', next: 'blockquote' },
            { token: 'constant', regex: '^ {0,2}(?:(?: ?\\* ?){3,}|(?: ?\\- ?){3,}|(?: ?\\_ ?){3,})\\s*$', next: 'allowBlock' },
            { token: 'markup.list', regex: '^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+', next: 'listblock-start' },
            { include: 'basic' }
          ),
          this.addRules({
            basic: [
              { token: 'constant.language.escape', regex: /\\[\\`*_{}\[\]()#+\-.!]/ },
              { token: 'support.function', regex: '(`+)(.*?[^`])(\\1)' },
              { token: ['text', 'constant', 'text', 'url', 'string', 'text'], regex: '^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:["][^"]+["])?(\\s*))$' },
              { token: ['text', 'string', 'text', 'constant', 'text'], regex: '(\\[)(' + l(']') + ')(\\]\\s*\\[)(' + l(']') + ')(\\])' },
              { token: ['text', 'string', 'text', 'markup.underline', 'string', 'text'], regex: '(\\[)(' + l(']') + ')(\\]\\()' + '((?:[^\\)\\s\\\\]|\\\\.|\\s(?=[^"]))*)' + '(\\s*"' + l('"') + '"\\s*)?' + '(\\))' },
              { token: 'string.strong', regex: '([*]{2}|[_]{2}(?=\\S))(.*?\\S[*_]*)(\\1)' },
              { token: 'string.emphasis', regex: '([*]|[_](?=\\S))(.*?\\S[*_]*)(\\1)' },
              { token: ['text', 'url', 'text'], regex: '(<)((?:https?|ftp|dict):[^\'">\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(>)' },
            ],
            allowBlock: [
              { token: 'support.function', regex: '^ {4}.+', next: 'allowBlock' },
              { token: 'empty_line', regex: '^$', next: 'allowBlock' },
              { token: 'empty', regex: '', next: 'start' },
            ],
            header: [{ regex: '$', next: 'start' }, { include: 'basic' }, { defaultToken: 'heading' }],
            'listblock-start': [{ token: 'support.variable', regex: /(?:\[[ x]\])?/, next: 'listblock' }],
            listblock: [{ token: 'empty_line', regex: '^$', next: 'start' }, { token: 'markup.list', regex: '^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+', next: 'listblock-start' }, { include: 'basic', noEscape: !0 }, { token: 'support.function', regex: '^\\s*```\\s*[a-zA-Z]*(?:{.*?\\})?\\s*$', next: 'githubblock' }, { defaultToken: 'list' }],
            blockquote: [{ token: 'empty_line', regex: '^\\s*$', next: 'start' }, { token: 'string.blockquote', regex: '^\\s*>\\s*(?:[*+-]|\\d+\\.)?\\s+', next: 'blockquote' }, { include: 'basic', noEscape: !0 }, { defaultToken: 'string.blockquote' }],
            githubblock: [{ token: 'support.function', regex: '^\\s*```', next: 'start' }, { defaultToken: 'support.function' }],
          }),
          this.embedRules(o, 'jscode-', [{ token: 'support.function', regex: '^\\s*```', next: 'pop' }]),
          this.embedRules(a, 'htmlcode-', [{ token: 'support.function', regex: '^\\s*```', next: 'pop' }]),
          this.embedRules(f, 'csscode-', [{ token: 'support.function', regex: '^\\s*```', next: 'pop' }]),
          this.embedRules(u, 'xmlcode-', [{ token: 'support.function', regex: '^\\s*```', next: 'pop' }]),
          this.normalizeRules();
      };
    r.inherits(h, s), (t.MarkdownHighlightRules = h);
  }),
  ace.define('ace/mode/scss_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/lib/lang', 'ace/mode/text_highlight_rules'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('../lib/lang'),
      s = e('./text_highlight_rules').TextHighlightRules,
      o = function () {
        var e = i.arrayToMap(
            (function () {
              var e = '-webkit-|-moz-|-o-|-ms-|-svg-|-pie-|-khtml-'.split('|'),
                t = 'appearance|background-clip|background-inline-policy|background-origin|background-size|binding|border-bottom-colors|border-left-colors|border-right-colors|border-top-colors|border-end|border-end-color|border-end-style|border-end-width|border-image|border-start|border-start-color|border-start-style|border-start-width|box-align|box-direction|box-flex|box-flexgroup|box-ordinal-group|box-orient|box-pack|box-sizing|column-count|column-gap|column-width|column-rule|column-rule-width|column-rule-style|column-rule-color|float-edge|font-feature-settings|font-language-override|force-broken-image-icon|image-region|margin-end|margin-start|opacity|outline|outline-color|outline-offset|outline-radius|outline-radius-bottomleft|outline-radius-bottomright|outline-radius-topleft|outline-radius-topright|outline-style|outline-width|padding-end|padding-start|stack-sizing|tab-size|text-blink|text-decoration-color|text-decoration-line|text-decoration-style|transform|transform-origin|transition|transition-delay|transition-duration|transition-property|transition-timing-function|user-focus|user-input|user-modify|user-select|window-shadow|border-radius'.split('|'),
                n = 'azimuth|background-attachment|background-color|background-image|background-position|background-repeat|background|border-bottom-color|border-bottom-style|border-bottom-width|border-bottom|border-collapse|border-color|border-left-color|border-left-style|border-left-width|border-left|border-right-color|border-right-style|border-right-width|border-right|border-spacing|border-style|border-top-color|border-top-style|border-top-width|border-top|border-width|border|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|content|counter-increment|counter-reset|cue-after|cue-before|cue|cursor|direction|display|elevation|empty-cells|float|font-family|font-size-adjust|font-size|font-stretch|font-style|font-variant|font-weight|font|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|marker-offset|margin|marks|max-height|max-width|min-height|min-width|opacity|orphans|outline-color|outline-style|outline-width|outline|overflow|overflow-x|overflow-y|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page|pause-after|pause-before|pause|pitch-range|pitch|play-during|position|quotes|richness|right|size|speak-header|speak-numeral|speak-punctuation|speech-rate|speak|stress|table-layout|text-align|text-decoration|text-indent|text-shadow|text-transform|top|unicode-bidi|vertical-align|visibility|voice-family|volume|white-space|widows|width|word-spacing|z-index'.split('|'),
                r = [];
              for (var i = 0, s = e.length; i < s; i++) Array.prototype.push.apply(r, (e[i] + t.join('|' + e[i])).split('|'));
              return Array.prototype.push.apply(r, t), Array.prototype.push.apply(r, n), r;
            })()
          ),
          t = i.arrayToMap('hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|scale_color|transparentize|type_of|unit|unitless|unquote'.split('|')),
          n = i.arrayToMap('absolute|all-scroll|always|armenian|auto|baseline|below|bidi-override|block|bold|bolder|border-box|both|bottom|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|collapse|content-box|crosshair|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ellipsis|fixed|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|outset|outside|overline|pointer|progress|relative|repeat-x|repeat-y|repeat|right|ridge|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|solid|square|static|strict|super|sw-resize|table-footer-group|table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|zero'.split('|')),
          r = i.arrayToMap('aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen'.split('|')),
          s = i.arrayToMap('@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare'.split('|')),
          o = i.arrayToMap('a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp'.split('|')),
          u = '\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))';
        this.$rules = {
          start: [
            { token: 'comment', regex: '\\/\\/.*$' },
            { token: 'comment', regex: '\\/\\*', next: 'comment' },
            { token: 'string', regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
            { token: 'string', regex: '["].*\\\\$', next: 'qqstring' },
            { token: 'string', regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']" },
            { token: 'string', regex: "['].*\\\\$", next: 'qstring' },
            { token: 'constant.numeric', regex: u + '(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{6}' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{3}' },
            { token: 'constant.numeric', regex: u },
            { token: ['support.function', 'string', 'support.function'], regex: '(url\\()(.*)(\\))' },
            {
              token: function (i) {
                return e.hasOwnProperty(i.toLowerCase()) ? 'support.type' : s.hasOwnProperty(i) ? 'keyword' : n.hasOwnProperty(i) ? 'constant.language' : t.hasOwnProperty(i) ? 'support.function' : r.hasOwnProperty(i.toLowerCase()) ? 'support.constant.color' : o.hasOwnProperty(i.toLowerCase()) ? 'variable.language' : 'text';
              },
              regex: '\\-?[@a-z_][@a-z0-9_\\-]*',
            },
            { token: 'variable', regex: '[a-z_\\-$][a-z0-9_\\-$]*\\b' },
            { token: 'variable.language', regex: '#[a-z0-9-_]+' },
            { token: 'variable.language', regex: '\\.[a-z0-9-_]+' },
            { token: 'variable.language', regex: ':[a-z0-9-_]+' },
            { token: 'constant', regex: '[a-z0-9-_]+' },
            { token: 'keyword.operator', regex: '<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*' },
            { token: 'paren.lparen', regex: '[[({]' },
            { token: 'paren.rparen', regex: '[\\])}]' },
            { token: 'text', regex: '\\s+' },
            { caseInsensitive: !0 },
          ],
          comment: [{ token: 'comment', regex: '\\*\\/', next: 'start' }, { defaultToken: 'comment' }],
          qqstring: [
            { token: 'string', regex: '(?:(?:\\\\.)|(?:[^"\\\\]))*?"', next: 'start' },
            { token: 'string', regex: '.+' },
          ],
          qstring: [
            { token: 'string', regex: "(?:(?:\\\\.)|(?:[^'\\\\]))*?'", next: 'start' },
            { token: 'string', regex: '.+' },
          ],
        };
      };
    r.inherits(o, s), (t.ScssHighlightRules = o);
  }),
  ace.define('ace/mode/less_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules', 'ace/mode/css_highlight_rules'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules,
      s = e('./css_highlight_rules'),
      o = function () {
        var e = '@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|or|and|when|not',
          t = e.split('|'),
          n = s.supportType.split('|'),
          r = this.createKeywordMapper({ 'support.constant': s.supportConstant, keyword: e, 'support.constant.color': s.supportConstantColor, 'support.constant.fonts': s.supportConstantFonts }, 'identifier', !0),
          i = '\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))';
        (this.$rules = {
          start: [
            { token: 'comment', regex: '\\/\\/.*$' },
            { token: 'comment', regex: '\\/\\*', next: 'comment' },
            { token: 'string', regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
            { token: 'string', regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']" },
            { token: ['constant.numeric', 'keyword'], regex: '(' + i + ')(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{6}' },
            { token: 'constant.numeric', regex: '#[a-f0-9]{3}' },
            { token: 'constant.numeric', regex: i },
            { token: ['support.function', 'paren.lparen', 'string', 'paren.rparen'], regex: '(url)(\\()(.*)(\\))' },
            { token: ['support.function', 'paren.lparen'], regex: '(:extend|[a-z0-9_\\-]+)(\\()' },
            {
              token: function (e) {
                return t.indexOf(e.toLowerCase()) > -1 ? 'keyword' : 'variable';
              },
              regex: '[@\\$][a-z0-9_\\-@\\$]*\\b',
            },
            { token: 'variable', regex: '[@\\$]\\{[a-z0-9_\\-@\\$]*\\}' },
            {
              token: function (e, t) {
                return n.indexOf(e.toLowerCase()) > -1 ? ['support.type.property', 'text'] : ['support.type.unknownProperty', 'text'];
              },
              regex: '([a-z0-9-_]+)(\\s*:)',
            },
            { token: 'keyword', regex: '&' },
            { token: r, regex: '\\-?[@a-z_][@a-z0-9_\\-]*' },
            { token: 'variable.language', regex: '#[a-z0-9-_]+' },
            { token: 'variable.language', regex: '\\.[a-z0-9-_]+' },
            { token: 'variable.language', regex: ':[a-z_][a-z0-9-_]*' },
            { token: 'constant', regex: '[a-z0-9-_]+' },
            { token: 'keyword.operator', regex: '<|>|<=|>=|=|!=|-|%|\\+|\\*' },
            { token: 'paren.lparen', regex: '[[({]' },
            { token: 'paren.rparen', regex: '[\\])}]' },
            { token: 'text', regex: '\\s+' },
            { caseInsensitive: !0 },
          ],
          comment: [{ token: 'comment', regex: '\\*\\/', next: 'start' }, { defaultToken: 'comment' }],
        }),
          this.normalizeRules();
      };
    r.inherits(o, i), (t.LessHighlightRules = o);
  }),
  ace.define('ace/mode/coffee_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules'], function (e, t, n) {
    'use strict';
    function s() {
      var e = '[$A-Za-z_\\x7f-\\uffff][$\\w\\x7f-\\uffff]*',
        t = 'this|throw|then|try|typeof|super|switch|return|break|by|continue|catch|class|in|instanceof|is|isnt|if|else|extends|for|own|finally|function|while|when|new|no|not|delete|debugger|do|loop|of|off|or|on|unless|until|and|yes',
        n = 'true|false|null|undefined|NaN|Infinity',
        r = 'case|const|default|function|var|void|with|enum|export|implements|interface|let|package|private|protected|public|static|yield',
        i = 'Array|Boolean|Date|Function|Number|Object|RegExp|ReferenceError|String|Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|SyntaxError|TypeError|URIError|ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray',
        s = 'Math|JSON|isNaN|isFinite|parseInt|parseFloat|encodeURI|encodeURIComponent|decodeURI|decodeURIComponent|String|',
        o = 'window|arguments|prototype|document',
        u = this.createKeywordMapper({ keyword: t, 'constant.language': n, 'invalid.illegal': r, 'language.support.class': i, 'language.support.function': s, 'variable.language': o }, 'identifier'),
        a = { token: ['paren.lparen', 'variable.parameter', 'paren.rparen', 'text', 'storage.type'], regex: /(?:(\()((?:"[^")]*?"|'[^')]*?'|\/[^\/)]*?\/|[^()"'\/])*?)(\))(\s*))?([\-=]>)/.source },
        f = /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)/;
      (this.$rules = {
        start: [
          { token: 'constant.numeric', regex: '(?:0x[\\da-fA-F]+|(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?)' },
          { stateName: 'qdoc', token: 'string', regex: "'''", next: [{ token: 'string', regex: "'''", next: 'start' }, { token: 'constant.language.escape', regex: f }, { defaultToken: 'string' }] },
          { stateName: 'qqdoc', token: 'string', regex: '"""', next: [{ token: 'string', regex: '"""', next: 'start' }, { token: 'paren.string', regex: '#{', push: 'start' }, { token: 'constant.language.escape', regex: f }, { defaultToken: 'string' }] },
          { stateName: 'qstring', token: 'string', regex: "'", next: [{ token: 'string', regex: "'", next: 'start' }, { token: 'constant.language.escape', regex: f }, { defaultToken: 'string' }] },
          { stateName: 'qqstring', token: 'string.start', regex: '"', next: [{ token: 'string.end', regex: '"', next: 'start' }, { token: 'paren.string', regex: '#{', push: 'start' }, { token: 'constant.language.escape', regex: f }, { defaultToken: 'string' }] },
          { stateName: 'js', token: 'string', regex: '`', next: [{ token: 'string', regex: '`', next: 'start' }, { token: 'constant.language.escape', regex: f }, { defaultToken: 'string' }] },
          {
            regex: '[{}]',
            onMatch: function (e, t, n) {
              this.next = '';
              if (e == '{' && n.length) return n.unshift('start', t), 'paren';
              if (e == '}' && n.length) {
                n.shift(), (this.next = n.shift() || '');
                if (this.next.indexOf('string') != -1) return 'paren.string';
              }
              return 'paren';
            },
          },
          { token: 'string.regex', regex: '///', next: 'heregex' },
          { token: 'string.regex', regex: /(?:\/(?![\s=])[^[\/\n\\]*(?:(?:\\[\s\S]|\[[^\]\n\\]*(?:\\[\s\S][^\]\n\\]*)*])[^[\/\n\\]*)*\/)(?:[imgy]{0,4})(?!\w)/ },
          { token: 'comment', regex: '###(?!#)', next: 'comment' },
          { token: 'comment', regex: '#.*' },
          { token: ['punctuation.operator', 'text', 'identifier'], regex: '(\\.)(\\s*)(' + r + ')' },
          { token: 'punctuation.operator', regex: '\\.{1,3}' },
          { token: ['keyword', 'text', 'language.support.class', 'text', 'keyword', 'text', 'language.support.class'], regex: '(class)(\\s+)(' + e + ')(?:(\\s+)(extends)(\\s+)(' + e + '))?' },
          { token: ['entity.name.function', 'text', 'keyword.operator', 'text'].concat(a.token), regex: '(' + e + ')(\\s*)([=:])(\\s*)' + a.regex },
          a,
          { token: 'variable', regex: '@(?:' + e + ')?' },
          { token: u, regex: e },
          { token: 'punctuation.operator', regex: '\\,|\\.' },
          { token: 'storage.type', regex: '[\\-=]>' },
          { token: 'keyword.operator', regex: '(?:[-+*/%<>&|^!?=]=|>>>=?|\\-\\-|\\+\\+|::|&&=|\\|\\|=|<<=|>>=|\\?\\.|\\.{2,3}|[!*+-=><])' },
          { token: 'paren.lparen', regex: '[({[]' },
          { token: 'paren.rparen', regex: '[\\]})]' },
          { token: 'text', regex: '\\s+' },
        ],
        heregex: [
          { token: 'string.regex', regex: '.*?///[imgy]{0,4}', next: 'start' },
          { token: 'comment.regex', regex: '\\s+(?:#.*)?' },
          { token: 'string.regex', regex: '\\S+' },
        ],
        comment: [{ token: 'comment', regex: '###', next: 'start' }, { defaultToken: 'comment' }],
      }),
        this.normalizeRules();
    }
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules;
    r.inherits(s, i), (t.CoffeeHighlightRules = s);
  }),
  ace.define('ace/mode/jade_highlight_rules', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text_highlight_rules', 'ace/mode/markdown_highlight_rules', 'ace/mode/scss_highlight_rules', 'ace/mode/less_highlight_rules', 'ace/mode/coffee_highlight_rules', 'ace/mode/javascript_highlight_rules'], function (e, t, n) {
    'use strict';
    function l(e, t) {
      return { token: 'entity.name.function.jade', regex: '^\\s*\\:' + e, next: t + 'start' };
    }
    var r = e('../lib/oop'),
      i = e('./text_highlight_rules').TextHighlightRules,
      s = e('./markdown_highlight_rules').MarkdownHighlightRules,
      o = e('./scss_highlight_rules').ScssHighlightRules,
      u = e('./less_highlight_rules').LessHighlightRules,
      a = e('./coffee_highlight_rules').CoffeeHighlightRules,
      f = e('./javascript_highlight_rules').JavaScriptHighlightRules,
      c = function () {
        var e = '\\\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)';
        (this.$rules = {
          start: [
            { token: 'keyword.control.import.include.jade', regex: '\\s*\\binclude\\b' },
            { token: 'keyword.other.doctype.jade', regex: '^!!!\\s*(?:[a-zA-Z0-9-_]+)?' },
            {
              onMatch: function (e, t, n) {
                return n.unshift(this.next, e.length - 2, t), 'comment';
              },
              regex: /^\s*\/\//,
              next: 'comment_block',
            },
            l('markdown', 'markdown-'),
            l('sass', 'sass-'),
            l('less', 'less-'),
            l('coffee', 'coffee-'),
            { token: ['storage.type.function.jade', 'entity.name.function.jade', 'punctuation.definition.parameters.begin.jade', 'variable.parameter.function.jade', 'punctuation.definition.parameters.end.jade'], regex: '^(\\s*mixin)( [\\w\\-]+)(\\s*\\()(.*?)(\\))' },
            { token: ['storage.type.function.jade', 'entity.name.function.jade'], regex: '^(\\s*mixin)( [\\w\\-]+)' },
            { token: 'source.js.embedded.jade', regex: '^\\s*(?:-|=|!=)', next: 'js-start' },
            { token: 'string.interpolated.jade', regex: '[#!]\\{[^\\}]+\\}' },
            { token: 'meta.tag.any.jade', regex: /^\s*(?!\w+:)(?:[\w-]+|(?=\.|#)])/, next: 'tag_single' },
            { token: 'suport.type.attribute.id.jade', regex: '#\\w+' },
            { token: 'suport.type.attribute.class.jade', regex: '\\.\\w+' },
            { token: 'punctuation', regex: '\\s*(?:\\()', next: 'tag_attributes' },
          ],
          comment_block: [
            {
              regex: /^\s*(?:\/\/)?/,
              onMatch: function (e, t, n) {
                return e.length <= n[1] ? (e.slice(-1) == '/' ? ((n[1] = e.length - 2), (this.next = ''), 'comment') : (n.shift(), n.shift(), (this.next = n.shift()), 'text')) : ((this.next = ''), 'comment');
              },
              next: 'start',
            },
            { defaultToken: 'comment' },
          ],
          tag_single: [
            { token: 'entity.other.attribute-name.class.jade', regex: '\\.[\\w-]+' },
            { token: 'entity.other.attribute-name.id.jade', regex: '#[\\w-]+' },
            { token: ['text', 'punctuation'], regex: '($)|((?!\\.|#|=|-))', next: 'start' },
          ],
          tag_attributes: [
            { token: 'string', regex: "'(?=.)", next: 'qstring' },
            { token: 'string', regex: '"(?=.)', next: 'qqstring' },
            { token: ['entity.other.attribute-name.jade', 'punctuation'], regex: '([a-zA-Z:\\.-]+)(=)?', next: 'attribute_strings' },
            { token: 'punctuation', regex: '\\)', next: 'start' },
          ],
          attribute_strings: [
            { token: 'string', regex: "'(?=.)", next: 'qstring' },
            { token: 'string', regex: '"(?=.)', next: 'qqstring' },
            { token: 'string', regex: '(?=\\S)', next: 'tag_attributes' },
          ],
          qqstring: [
            { token: 'constant.language.escape', regex: e },
            { token: 'string', regex: '[^"\\\\]+' },
            { token: 'string', regex: '\\\\$', next: 'qqstring' },
            { token: 'string', regex: '"|$', next: 'tag_attributes' },
          ],
          qstring: [
            { token: 'constant.language.escape', regex: e },
            { token: 'string', regex: "[^'\\\\]+" },
            { token: 'string', regex: '\\\\$', next: 'qstring' },
            { token: 'string', regex: "'|$", next: 'tag_attributes' },
          ],
        }),
          this.embedRules(f, 'js-', [{ token: 'text', regex: '.$', next: 'start' }]);
      };
    r.inherits(c, i), (t.JadeHighlightRules = c);
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
  ace.define('ace/mode/jade', ['require', 'exports', 'module', 'ace/lib/oop', 'ace/mode/text', 'ace/mode/jade_highlight_rules', 'ace/mode/folding/coffee'], function (e, t, n) {
    'use strict';
    var r = e('../lib/oop'),
      i = e('./text').Mode,
      s = e('./jade_highlight_rules').JadeHighlightRules,
      o = e('./folding/coffee').FoldMode,
      u = function () {
        (this.HighlightRules = s), (this.foldingRules = new o()), (this.$behaviour = this.$defaultBehaviour);
      };
    r.inherits(u, i),
      function () {
        (this.lineCommentStart = '//'), (this.$id = 'ace/mode/jade');
      }.call(u.prototype),
      (t.Mode = u);
  });
