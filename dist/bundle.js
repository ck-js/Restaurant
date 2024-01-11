(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n    background-color: black;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n}\n#nav-container {\n    /* border: 5px solid yellowgreen; */\n}\n\n\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\nfont-size: 1.3rem;\n}\n#nav-container li {\n    color: pink;\n    list-style-type: none;\n    padding: 2vw;\n    border-radius: 6px;\n    /* border: 2px solid yellowgreen;     */\n    cursor: pointer;\n}\n\n\n#description-container {\n    border: 5px solid yellowgreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n\n\n}\n#img-container img {\n\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    opacity: 0.7;\n    border-radius: 25px;\n}\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    border: 5px solid yellowgreen;\n    font-size: 1.3rem;\n}\n@media (max-width: 800px) {\n    #description-container #text-container {\nfont-size: 0.7rem;\n    }\n}",""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"5e616b0758d7477927f7.jpg";var n=t(379),r=t.n(n),o=t(795),i=t.n(o),a=t(569),c=t.n(a),s=t(565),l=t.n(s),d=t(216),u=t.n(d),p=t(589),f=t.n(p),m=t(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;const h=document.body,g=document.getElementById("content");h.insertBefore(function(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Restaurant Name",e.appendChild(n),e}(),g),h.insertBefore(function(){const e=document.createElement("div");e.id="nav-container";const n=document.createElement("ul");n.id="nav-ul";const t=["Breakfast","Lunch","Dinner"];for(let e=0;e<t.length;e++){const r=document.createElement("li");r.textContent=t[e],n.appendChild(r)}return e.appendChild(n),e}(),g),g.appendChild(function(){const n=document.createElement("div"),t=document.createElement("div");n.id="description-container",t.id="img-container";const r=new Image;return r.src=e,r.alt="aerial view of 3 people holding 3 cups of coffee, a latte, a cappuccino and a iced americano in a circle formation",t.style.backgroundImage="url(img)",n.appendChild(t),t.appendChild(r),n}()),document.getElementById("description-container").appendChild(function(){const e=document.createElement("div");e.id="text-container";const n=document.createElement("h1"),t=document.createElement("p");return n.innerHTML="food at The Gannon",t.innerHTML="At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.",e.appendChild(n),e.appendChild(t),e}());const y=document.getElementById("nav-ul").getElementsByTagName("li");for(let e=0;e<y.length;e++)y[e].addEventListener("click",(e=>{b()}));function b(){for(let e=0;e<g.children.length;e++){const n=g.children[e];g.removeChild(n)}}})()})();