(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"body {\n    background-color: black;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n}\n\n\n\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\nfont-size: 1.3rem;\n}\n#nav-container li {\n    color: pink;\n    list-style-type: none;\n    padding: 2vw;\n    border-radius: 6px;\n    /* border: 2px solid yellowgreen;     */\n    cursor: pointer;\n}\n\n\n#description-container {\n    border: 5px solid yellowgreen;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n\n\n}\n#img-container img {\n\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    opacity: 0.7;\n    border-radius: 25px;\n}\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    border: 5px solid yellowgreen;\n    font-size: 1.3rem;\n}\n@media (max-width: 800px) {\n    #description-container #text-container {\nfont-size: 0.7rem;\n    }\n}\n.title-container img {\n    border-radius: 50%;    \n    }\n\n    #optional-omelette-selection-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n#menu-item-container-1 {\n    width: 80vw;\n    \n}\n\n#menu-item-container-1 .menu-item {\ndisplay: flex;\n\nflex-direction: column;\nflex-wrap: wrap;\nheight: 600px;\ncolumn-gap: 3%;\n}\n#menu-item-container-1 .title-container {\n    width: 45%;\nheight: 100px;    \nflex: 0 0 0;\nbox-sizing: border-box;\n\n\n}\n\n#menu-item-container-1 .content-wrapper {\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\nflex: 0;\nheight: 100px;\n\n} \n\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"5e616b0758d7477927f7.jpg",n=t.p+"7d4eaff664877e4eb874.png";function o(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Breakfast",e.append(n),e}function r(e,n,t,o){this.title=e,this.description=n,this.price=t,this.vegan=o}let a=[];function i(e,n,t,o){const i=new r(e,n,t,o);a.push(i)}function c(){const e=document.createElement("div");e.id="baked-selection-container";const t=document.createElement("h2");t.innerHTML="Breakfast Served Daily";const o=document.createElement("h1");return o.innerHTML="Baked Selection ( 7:00 - 16:00 )",e.appendChild(t),e.appendChild(o),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<a.length;t++){const o=a[t],r=document.createElement("div");r.classList.add("title-container");const i=document.createElement("h4"),c=document.createElement("img"),d=document.createElement("p"),s=document.createElement("p");i.innerHTML=o.title,c.src=n,c.alt="Vegan",c.width=50,c.height=50,d.innerHTML=o.description,s.innerHTML=o.price,e.append(r),r.appendChild(i),o.vegan&&r.appendChild(c),e.appendChild(d),e.appendChild(s)}return e}()),e}i("Classic Scones (Baked Daily","Two warm scones layered with fresh cream and homeade berry compote",150,!0),i("CROISSANT (PLAIN)","add butter & homemade berry compote +40",70,!0),i("Dark Chocolate Croissant"," Cocoa 60% dark chocolate ganache, hazelnut crumble",120,!0),i("Almond Croissant","homemade almond créme, toasted flaked almonds",120,!0);const d=[];function s(e,n,t,o){const a=new r(e,n,t,o);d.push(a)}function l(){const e=document.createElement("div");e.id="breakfast-selection-container";const t=document.createElement("h1");return t.innerHTML="Breakfast Selection ( 7:00 - 11:30 )",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<d.length;t++){const o=d[t],r=document.createElement("div");r.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),s=document.createElement("p");a.innerHTML=o.title,i.src=n,i.alt="Vegan",i.width=50,i.height=50,c.innerHTML=o.description,s.innerHTML=o.price,e.append(r),r.appendChild(a),o.vegan&&r.appendChild(i),e.appendChild(c),e.appendChild(s)}return e}()),e}s("HOUSEMADE GRANOLA* - (500G BAGS AVAILABLE TO PURCHASE)","plain full-fat yoghurt OR dairy-free coconut yoghurt, Ratel River raw honey drizzle (*contains dried fruits, nuts, and seeds)",220,!0),s("WARM OATS PORRIDGE","rolled oats, chia seeds, granola sprinkle, salted butter, Ratel River raw honey drizzle (*contains milk)",140),s("BUCKWHEAT & OAT FLAPJACKS","banana, chunky peanut butter, coconut yoghurt, walnuts, toasted coconut flakes, golden syrup",240),s("CROISSANT FRENCH TOAST","homemade berry compote, fresh cream, Ratel River raw honey drizzle",230),s("SMASHED AVOCADO TOAST","two slices sourdough toast, tomato salsa, lemon wedge (optional extras available)",190),s("…CREAMY BREAKFAST RISOTTO","smoked streaky bacon bits, spring onion, two poached Usana Farm eggs, cheese crisps",290),s("SHAKSHUKA","homemade spiced tomato, onion and red bell pepper sauce, two poached Usana Farm eggs, crispy chickpeas, fresh coriander, Proof Bakery sourdough toast, salted butter",240),s("CLASSIC BACON & EGGS","smoked streaky bacon, two Usana Farm eggs, mushrooms, herbed cherry tomatoes, Proof Bakery sourdough toast, salted butter",250),s("SMOKED TROUT EGGS BENEDICT","Usana Farm poached eggs, Three Streams cold-smoked trout ribbons, fresh baby leaf spinach, capers, lemon wedge, homemade hollandaise, Proof Bakery sourdough toast",310),s("BACON EGGS BENEDICT","Usana Farm poached eggs, smoked streaky bacon, fresh baby leaf spinach, homemade hollandaise, Proof Bakery sourdough toast",270),s("VEGAN BENEDICT","avocado, button mushroom, herbed cherry tomato, fresh baby leaf spinach, cranberries, cashew & turmeric hollandaise, Proof Bakery sourdough toast",290),s("OMELETTE (PLAIN)","three Usana Farm pasture eggs",110);const u=[];function p(e,n,t,o){const a=new r(e,n,t,o);u.push(a)}function m(){const e=document.createElement("div");e.id="optional-omelette-selection-container";const n=document.createElement("h1");return n.innerHTML="Optional Omelette Add Ons",e.appendChild(n),e.appendChild(function(){const e=document.createElement("div");e.id="menu-item-container-1";const n=document.createElement("div");n.classList.add("menu-item");for(let t=0;t<u.length;t++){const o=u[t],r=document.createElement("div");r.className="title-container",r.id=t;const a=document.createElement("div");a.classList.add("content-wrapper");const i=document.createElement("h4"),c=document.createElement("p");i.innerHTML=o.title,c.innerHTML=o.price,n.appendChild(r),r.appendChild(a),a.appendChild(i),a.appendChild(c),e.appendChild(n)}return e}()),e}function h(e,n,t,o){this.title=e,this.description=n,this.price=t,this.vegan=o}p("Avocado","",70),p("Smoked Streaky Bacon","",80),p("Cold-Smoked Trout Ribons","",110),p("Grass-Fed Beef Boerewors Sausage","",80),p("FreeRange Chicken","",80),p("Goat Cheese","",60),p("Button Mushrooms","",50),p("Herbed Cherry Tomatoes","",45),p("Feta Cheese","",45),p("Sourdough SLice","",20),p("Buckwheat Slice","",40);let f=[];function g(e,n,t,o){const r=new h(e,n,t,o);f.push(r)}function v(){const e=document.createElement("div");e.id="small-bites-selection-container";const t=document.createElement("h2");t.innerHTML="Breakfast Served Daily";const o=document.createElement("h1");return o.innerHTML="Baked Selection ( 7:00 - 16:00 )",e.appendChild(t),e.appendChild(o),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<f.length;t++){const o=f[t],r=document.createElement("div");r.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),d=document.createElement("p");a.innerHTML=o.title,i.src=n,i.alt="Vegan",i.width=50,c.innerHTML=o.description,d.innerHTML=o.price,e.append(r),r.appendChild(a),o.vegan&&r.appendChild(i),e.appendChild(c),e.appendChild(d)}return e}()),e}g("Classic Scones (Baked Daily","Two warm scones layered with fresh cream and homeade berry compote",150,!0),g("CROISSANT (PLAIN)","add butter & homemade berry compote +40",70,!0),g("Dark Chocolate Croissant"," Cocoa 60% dark chocolate ganache, hazelnut crumble",120,!0),g("Almond Croissant","homemade almond créme, toasted flaked almonds",120,!0);var y=t(379),b=t.n(y),C=t(795),E=t.n(C),w=t(569),T=t.n(w),S=t(565),k=t.n(S),x=t(216),L=t.n(x),A=t(589),B=t.n(A),M=t(426),H={};H.styleTagTransform=B(),H.setAttributes=k(),H.insert=T().bind(null,"head"),H.domAPI=E(),H.insertStyleElement=L(),b()(M.Z,H),M.Z&&M.Z.locals&&M.Z.locals;const O=document.body,R=document.getElementById("content");O.insertBefore(function(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Restaurant Name",e.appendChild(n),e}(),R),O.insertBefore(function(){const e=document.createElement("div");e.id="nav-container";const n=document.createElement("ul");n.id="nav-ul";const t=["Breakfast","Lunch","Dinner"];for(let e=0;e<t.length;e++){const o=document.createElement("li");o.id=t[e],o.textContent=t[e],n.appendChild(o)}return e.appendChild(n),e}(),R),R.appendChild(function(){const n=document.createElement("div"),t=document.createElement("div");n.id="description-container",t.id="img-container";const o=new Image;return o.src=e,o.alt="aerial view of 3 people holding 3 cups of coffee, a latte, a cappuccino and a iced americano in a circle formation",t.style.backgroundImage="url(img)",n.appendChild(t),t.appendChild(o),n}()),document.getElementById("description-container").appendChild(function(){const e=document.createElement("div");e.id="text-container";const n=document.createElement("h1"),t=document.createElement("p");return n.innerHTML="food at The Gannon",t.innerHTML="At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.",e.appendChild(n),e.appendChild(t),e}());const I=document.getElementById("nav-ul").getElementsByTagName("li");for(let e=0;e<I.length;e++)I[e].addEventListener("click",(e=>{"Lunch"===e.target.id&&(N(R),R.appendChild(v())),"Breakfast"===e.target.id&&(N(R),R.appendChild(o()),R.appendChild(c()),R.appendChild(l()),R.appendChild(m()))}));function N(e){for(;e.firstChild;)e.removeChild(e.firstChild)}})()})();