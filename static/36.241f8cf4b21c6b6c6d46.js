webpackJsonp([36],{

/***/ "fj+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    comments: {
        lineComment: '#'
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')'],
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.ini',
    // we include these common regular expressions
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // sections
            [/^\[[^\]]*\]/, 'metatag'],
            // keys
            [/(^\w+)(\s*)(\=)/, ['key', '', 'delimiter']],
            // whitespace
            { include: '@whitespace' },
            // numbers
            [/\d+/, 'number'],
            // strings: recover on non-terminated strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string."'],
            [/'/, 'string', '@string.\''],
        ],
        whitespace: [
            [/[ \t\r\n]+/, ''],
            [/^\s*[#;].*$/, 'comment'],
        ],
        string: [
            [/[^\\"']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }]
        ],
    },
};


/***/ })

});
//# sourceMappingURL=36.241f8cf4b21c6b6c6d46.js.map