(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n    background-color: black;\n    color: white;\n    text-align: center;\n    font-size: 16px;\n}\n#nav-container {\n    \n    \n}\n\n#nav-container ul {\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolumn-gap: 5vw;\n\n}\n#nav-container li {\ntext-transform: lowercase;\n    list-style-type: none;\n    padding: 2vw;\n    border-radius: 6px;\n    /* border: 2px solid yellowgreen;     */\n    cursor: pointer;\n}\n#nav-container li:hover {\ncolor: yellowgreen;\n\n}\n#description-container {\n    /* border: 5px solid yellowgreen; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: relative;\n    text-align: left;\n}\n#img-container {\nwidth: 100%;\nheight: auto;\n}\n#img-container img {\nbackground-size: contain;\n    background-position: center;\n    width: 100%;\n    opacity: 0.7;\n    border-radius: 25px;\n}\n#description-container #text-container {\n    position: absolute;\ntop: 50%;\nleft: 50%;\ntransform: translate(-50%, -50%);\n    border: 5px solid yellowgreen;\n    font-size: 1.3rem;\n}\n@media (max-width: 800px) {\n    #description-container #text-container {\nfont-size: 0.7rem;\n    }\n    \n\n}\n#content {\ndisplay: flex;\nflex-direction: column;\nrow-gap: 100px;\nmargin-bottom: 200px;\n}\n#baked-selection-container {\n    \n}\nh1 {\n    color: yellowgreen;\n    text-transform: uppercase;\nfont-family: 'Courier New', Courier, monospace;\n}\n.title-container {\n    font-size: 1.8rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    column-gap: 20px;\npadding: 0;    \nmargin: 0;\nmargin-bottom: -30px;\n\n}\n.title-container h4 {\n        text-transform: uppercase;\n    /* border: 2px solid yellowgreen; */\n    \n    max-width: 60ch;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n.title-container img {\n    border-radius: 50%;    \n    height: 1.8rem;\n    width: 1.8rem;\n    \n    }\n.menu-item {\n    margin-top: 50px;\n}\n.menu-item p {\n    font-size: 1.3rem;\n    text-transform: lowercase;\n    /* border: 2px solid yellowgreen; */\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    padding: 0 10% 0 10%;\n    \n}\n.menu-item .price {\n    font-size: 2rem;\n    font-weight: 800;\n    /* color: black; */\n\n}\n    #optional-omelette-selection-container {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        \n    }\n#menu-item-container-1 {\n    width: 80vw;\n    /* border: 3px solid yellowgreen; */\n    \n}\n\n#menu-item-container-1 .menu-item {\ndisplay: flex;\nflex-direction: column;\nflex-wrap: wrap;\nheight: 600px;\ncolumn-gap: 3%;\n}\n@media (max-width: 800px) {\n#menu-item-container-1 .menu-item {\ndisplay: flex;\nflex-direction: column;        \nflex-wrap: nowrap;\ncolumn-gap: 3%;\nheight: 1000px;\n    }\n}\n#menu-item-container-1 .title-container {\n    height: 100px;    \nflex: 0 0 0;\nbox-sizing: border-box;\n}\n.content-wrapper {\ndisplay: flex;\nflex-direction: row;\njustify-content: space-between;\nalign-items: center;\nheight: 100px;\nwidth: 100%;\n/* border: 3px solid yellowgreen; */\n} \n.content-wrapper p {\n    /* padding: 0; */\n}\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"5e616b0758d7477927f7.jpg",n=t.p+"7d4eaff664877e4eb874.png";function r(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Breakfast",e.append(n),e}function o(e,n,t,r){this.title=e,this.description=n,this.price=t,this.vegan=r}let a=[];function i(e,n,t,r){const i=new o(e,n,t,r);a.push(i)}function c(){const e=document.createElement("div");e.id="baked-selection-container";const t=document.createElement("h2");t.innerHTML="Breakfast Served Daily";const r=document.createElement("h1");return r.innerHTML="Baked Selection ( 7:00 - 16:00 )",e.appendChild(t),e.appendChild(r),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item-container");for(let t=0;t<a.length;t++){const r=a[t],o=document.createElement("div");o.classList.add("menu-item");const i=document.createElement("div");i.classList.add("title-container");const c=document.createElement("h4"),d=document.createElement("img"),s=document.createElement("p"),l=document.createElement("p");l.classList.add("price"),c.innerHTML=r.title,d.src=n,d.alt="Vegan",d.width=50,d.height=50,s.innerHTML=r.description,l.innerHTML=r.price,o.append(i),i.appendChild(c),r.vegan&&i.appendChild(d),o.appendChild(s),o.appendChild(l),e.appendChild(o)}return e}()),e}i("Classic Scones (Baked Daily","Two warm scones layered with fresh cream and homeade berry compote",150,!0),i("CROISSANT (PLAIN)","add butter & homemade berry compote +40",70,!0),i("Dark Chocolate Croissant"," Cocoa 60% dark chocolate ganache, hazelnut crumble",120,!0),i("Almond Croissant","homemade almond créme, toasted flaked almonds",120,!0);const d=[];function s(e,n,t,r){const a=new o(e,n,t,r);d.push(a)}function l(){const e=document.createElement("div");e.id="breakfast-selection-container";const t=document.createElement("h1");return t.innerHTML="Breakfast Selection ( 7:00 - 11:30 )",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<d.length;t++){const r=d[t],o=document.createElement("div");o.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),s=document.createElement("p");s.classList.add("price"),a.innerHTML=r.title,i.src=n,i.alt="Vegan",i.width=50,i.height=50,c.innerHTML=r.description,s.innerHTML=r.price,e.append(o),o.appendChild(a),r.vegan&&o.appendChild(i),e.appendChild(c),e.appendChild(s)}return e}()),e}s("HOUSEMADE GRANOLA* - (500G BAGS AVAILABLE TO PURCHASE)","plain full-fat yoghurt OR dairy-free coconut yoghurt, Ratel River raw honey drizzle (*contains dried fruits, nuts, and seeds)",220,!0),s("WARM OATS PORRIDGE","rolled oats, chia seeds, granola sprinkle, salted butter, Ratel River raw honey drizzle (*contains milk)",140,!0),s("BUCKWHEAT & OAT FLAPJACKS","banana, chunky peanut butter, coconut yoghurt, walnuts, toasted coconut flakes, golden syrup",240,!0),s("CROISSANT FRENCH TOAST","homemade berry compote, fresh cream, Ratel River raw honey drizzle",230,!0),s("SMASHED AVOCADO TOAST","two slices sourdough toast, tomato salsa, lemon wedge (optional extras available)",190,!0),s("…CREAMY BREAKFAST RISOTTO","smoked streaky bacon bits, spring onion, two poached Usana Farm eggs, cheese crisps",290,!1),s("SHAKSHUKA","homemade spiced tomato, onion and red bell pepper sauce, two poached Usana Farm eggs, crispy chickpeas, fresh coriander, Proof Bakery sourdough toast, salted butter",240,!0),s("CLASSIC BACON & EGGS","smoked streaky bacon, two Usana Farm eggs, mushrooms, herbed cherry tomatoes, Proof Bakery sourdough toast, salted butter",250,!1),s("SMOKED TROUT EGGS BENEDICT","Usana Farm poached eggs, Three Streams cold-smoked trout ribbons, fresh baby leaf spinach, capers, lemon wedge, homemade hollandaise, Proof Bakery sourdough toast",310,!1),s("BACON EGGS BENEDICT","Usana Farm poached eggs, smoked streaky bacon, fresh baby leaf spinach, homemade hollandaise, Proof Bakery sourdough toast",270,!1),s("VEGAN BENEDICT","avocado, button mushroom, herbed cherry tomato, fresh baby leaf spinach, cranberries, cashew & turmeric hollandaise, Proof Bakery sourdough toast",290,!0),s("OMELETTE (PLAIN)","three Usana Farm pasture eggs",110,!1);const p=[];function u(e,n,t,r){const a=new o(e,n,t,r);p.push(a)}function m(){const e=document.createElement("div");e.id="optional-omelette-selection-container";const n=document.createElement("h1");return n.innerHTML="Optional Omelette Add Ons",e.appendChild(n),e.appendChild(function(){const e=document.createElement("div");e.id="menu-item-container-1";const n=document.createElement("div");n.classList.add("menu-item");for(let t=0;t<p.length;t++){const r=p[t],o=document.createElement("div");o.className="title-container",o.id=t;const a=document.createElement("div");a.classList.add("content-wrapper");const i=document.createElement("h4"),c=document.createElement("p");c.classList.add("price"),i.innerHTML=r.title,c.innerHTML=r.price,n.appendChild(o),o.appendChild(a),a.appendChild(i),a.appendChild(c),e.appendChild(n)}return e}()),e}function h(e,n,t,r){this.title=e,this.description=n,this.price=t,this.vegan=r}function f(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Lunch",e.append(n),e}u("Avocado","",70),u("Smoked Streaky Bacon","",80),u("Cold-Smoked Trout Ribons","",110),u("Grass-Fed Beef Boerewors Sausage","",80),u("FreeRange Chicken","",80),u("Goat Cheese","",60),u("Button Mushrooms","",50),u("Herbed Cherry Tomatoes","",45),u("Feta Cheese","",45),u("Sourdough SLice","",20),u("Buckwheat Slice","",40);let g=[];function v(e,n,t,r){const o=new h(e,n,t,r);g.push(o)}function E(){const e=document.createElement("div");e.id="small-bites-selection-container";const t=document.createElement("h2");t.innerHTML="Lunch Served Daily(11:30 - 16:30";const r=document.createElement("h1");return r.innerHTML="Small Bites Selection",e.appendChild(t),e.appendChild(r),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<g.length;t++){const r=g[t],o=document.createElement("div");o.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),d=document.createElement("p");a.innerHTML=r.title,i.src=n,i.alt="Vegan",i.width=50,c.innerHTML=r.description,d.innerHTML=r.price,e.append(o),o.appendChild(a),r.vegan&&o.appendChild(i),e.appendChild(c),e.appendChild(d)}return e}()),e}v("Caesar Salad","gem lettuce, pecorino, bokkom dressing, anchovies, herbed sourdough croutons",240,!1),v("BURRATA & TOMATO SALAD","burrata, mixed tomatoes, basil, honey & balsamic vinaigrette, sourdough",360,!0),v("WALDORF SALAD","gem lettuce, apple, grapes, celery, walnut, raisins, chives, red onion, creamy homemade dressing",190,!0),v("CHICKEN LIVER PARFAIT","butternut chutney, banana bread, crispy chicken skins",240,!1),v("STEAK TARTARE","dry-aged sirloin, cured egg yolk, horseradish, capers, red onion, chives, lavosh crackers",300,!1),v("´BAKED CAMEMBERT","Fresh garlic, thymeloop HouseBurgers white wine, Proof Bakery sourdough toast, homemade orange marmalade",310,!0);let y=[];function b(){const e=document.createElement("div");e.id="house-burgers-selection-container";const t=document.createElement("h1");return t.innerHTML="House Burgers",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<y.length;t++){const r=y[t],o=document.createElement("div");o.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),d=document.createElement("p");a.innerHTML=r.title,i.src=n,i.alt="Vegan",i.width=50,c.innerHTML=r.description,d.innerHTML=r.price,e.append(o),o.appendChild(a),r.vegan&&o.appendChild(i),e.appendChild(c),e.appendChild(d)}return e}()),e}!function(e,n,t,r){const o=new h("CAFÉ CHARLES BURGER","160g grass-fed Usana Farm beef patty OR free-range chicken breast, homemade bun, bbq sauce, shredded gem lettuce, red onion mayo, mature cheddar",290,!1);y.push(o)}();let C=[];function w(e,n,t,r){const o=new h(e,n,t,r);C.push(o)}function T(){const e=document.createElement("div");e.id="main-plates-selection-container";const t=document.createElement("h1");return t.innerHTML="Main Plates Selection ( 7:00 - 16:00 )",e.appendChild(t),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu-item");for(let t=0;t<C.length;t++){const r=C[t],o=document.createElement("div");o.classList.add("title-container");const a=document.createElement("h4"),i=document.createElement("img"),c=document.createElement("p"),d=document.createElement("p");a.innerHTML=r.title,i.src=n,i.alt="Vegan",i.width=50,c.innerHTML=r.description,d.innerHTML=r.price,e.append(o),o.appendChild(a),r.vegan&&o.appendChild(i),e.appendChild(c),e.appendChild(d)}return e}()),e}w("OVEN BAKED CHICKEN POT PIE","Free-range chicken, carrot, celery, peas, cream, puff pastry, baby leaf salad, tomato salsa, feta.",280,!1),w("RIB-EYE STEAK","250g free-range beef rib-eye, Café de Paris butter",560,!1),w("PORK BELLY","Sweet potato mash, almond flakes, green beans, baby carrot, chimichurri.",520,!1),w("PEA, TRUFFLE & MINT RISOTTO","cream, peas, mint, white truffle oil, pecorino crisps, lemon zest",290,!1),w("FISH OF THE DAY","charred pak choi, mango chili salsa, herbed basmati rice","TBA",!1);var x=t(379),L=t.n(x),A=t(795),S=t.n(A),k=t(569),M=t.n(k),H=t(565),B=t.n(H),R=t(216),O=t.n(R),I=t(589),F=t.n(I),N=t(426),P={};P.styleTagTransform=F(),P.setAttributes=B(),P.insert=M().bind(null,"head"),P.domAPI=S(),P.insertStyleElement=O(),L()(N.Z,P),N.Z&&N.Z.locals&&N.Z.locals;const D=document.body,G=document.getElementById("content");D.insertBefore(function(){const e=document.createElement("div"),n=document.createElement("h1");return n.innerHTML="Restaurant Name",e.appendChild(n),e}(),G),D.insertBefore(function(){const e=document.createElement("div");e.id="nav-container";const n=document.createElement("ul");n.id="nav-ul";const t=["Breakfast","Lunch","Dinner"];for(let e=0;e<t.length;e++){const r=document.createElement("li");r.id=t[e],r.textContent=t[e],n.appendChild(r)}return e.appendChild(n),e}(),G),G.appendChild(function(){const n=document.createElement("div"),t=document.createElement("div");n.id="description-container",t.id="img-container";const r=new Image;return r.src=e,r.alt="aerial view of 3 people holding 3 cups of coffee, a latte, a cappuccino and a iced americano in a circle formation",t.style.backgroundImage="url(img)",n.appendChild(t),t.appendChild(r),n}()),document.getElementById("description-container").appendChild(function(){const e=document.createElement("div");e.id="text-container";const n=document.createElement("h1"),t=document.createElement("p");return n.innerHTML="food at The Gannon",t.innerHTML="At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.",e.appendChild(n),e.appendChild(t),e}());const U=document.getElementById("nav-ul").getElementsByTagName("li");for(let e=0;e<U.length;e++)U[e].addEventListener("click",(e=>{"Lunch"===e.target.id&&(z(G),G.appendChild(f()),G.appendChild(E()),G.appendChild(b()),G.appendChild(T())),"Breakfast"===e.target.id&&(z(G),G.appendChild(r()),G.appendChild(c()),G.appendChild(l()),G.appendChild(m()))}));function z(e){for(;e.firstChild;)e.removeChild(e.firstChild)}})()})();