!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("utils.min",[],n):"object"==typeof exports?exports["utils.min"]=n():t["utils.min"]=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=0)}([function(t,n,r){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(n);var o=Object.getPrototypeOf,u={},i=u.toString,f=u.hasOwnProperty,c=f.toString,l=c.call(Object);function y(t){if(!t||"[object Object]"!==i.call(t))return!1;var n=o(t);if(!n)return!0;var r=f.call(n,"constructor")&&n.constructor;return"function"==typeof r&&c.call(r)===l}function a(){var t,n,r,o,u,i,f,c=1,l=arguments[0]||{},p=arguments.length;for("object"!==e(l)&&("function"!=typeof(f=l)||"number"==typeof f.nodeType)&&(l={});c<p;c++)if(null!==(t=arguments[c]))for(n in t)r=l[n],l!==(o=t[n])&&(o&&(y(o)||(u=Array.isArray(o)))?(u?(u=!1,i=r&&Array.isArray(r)?r:[]):i=r&&y(r)?r:{},l[n]=a(i,o)):void 0!==o&&(l[n]=o));return l}function p(t){return!(null==t||""===t)}function s(t){for(var n in t)return!1;return!0}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){return"object"===m(t)&&t instanceof Array}function d(t,n){var r={};if(!b(t))throw new Error("Required Array");var e,o=t.length;for(e=0;e<o;e++){var u=t[e];n?r[u[n]]=u:r[e]=u}return r}function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t){var n=S(t);return null!==t&&("object"===n||"function"===n)}function g(t){return!0===t||!1===t}var j=window.sessionStorage;function O(t,n){j.setItem(t,JSON.stringify(n))}function w(t){return JSON.parse(j.getItem(t))}function x(t){return j.removeItem(t)}var I=window.localStorage;function A(t,n){I.setItem(t,JSON.stringify(n))}function P(t){return JSON.parse(I.getItem(t))}function _(t){return I.removeItem(t)}r.d(n,"deepCopy",function(){return a}),r.d(n,"isDefined",function(){return p}),r.d(n,"isEmptyObject",function(){return s}),r.d(n,"createMap",function(){return d}),r.d(n,"isArray",function(){return b}),r.d(n,"isObject",function(){return v}),r.d(n,"isBoolean",function(){return g}),r.d(n,"setDataToSession",function(){return O}),r.d(n,"getDataFromSession",function(){return w}),r.d(n,"removeItemFromSession",function(){return x}),r.d(n,"setDataToLocal",function(){return A}),r.d(n,"getDataFromLocal",function(){return P}),r.d(n,"removeItemFromLocal",function(){return _})}])});