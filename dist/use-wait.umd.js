!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t.useWait={},t.react)}(this,function(t,e){var n="default"in e?e.default:e,i=function(t){return t.length>0},r=function(t,e){return t.includes(e)},u=function(t,e){return r(t,e)?t:t.concat([e])},a=function(t,e){return r(t,e)?t.filter(function(t){return t!==e}):t},o=n.createContext([]);function c(t){return e.useContext(o).waiters.includes(t.message)?t.waiting:t.children}t.Waiter=function(t){var c=e.useState(e.useContext(o)),f=c[0],s=c[1];return n.createElement(o.Provider,{value:{waiters:f,anyWaiting:function(){return i(f)},isWaiting:function(t){return r(f,t)},startWaiting:function(t){s(u(f,t))},endWaiting:function(t){s(a(f,t))}}},t.children)},t.useWait=function(){var t=e.useContext(o);return Object.assign({},t,{Wait:c})}});
//# sourceMappingURL=use-wait.umd.js.map
