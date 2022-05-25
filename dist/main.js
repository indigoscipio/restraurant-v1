(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),s=r(667),c=r.n(s),l=new URL(r(385),r.b),u=i()(a());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap);"]);var d=c()(l);u.push([n.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --blue-50: #eff6ff;\r\n  --blue-100: #dbeafe;\r\n  --blue-300: #93c5fd;\r\n  --blue-500: #3b82f6;\r\n  --blue-600: #2563eb;\r\n  --slate-50: #f8fafc;\r\n  --slate-100: #f1f5f9;\r\n  --slate-300: #cbd5e1;\r\n  --slate-500: #64748b;\r\n  --slate-700: #334155;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: "Rubik", sans-serif;\r\n  background-color: var(--slate-100);\r\n}\r\n\r\n.heading-2 {\r\n  font-size: 3.2rem;\r\n  color: var(--slate-700);\r\n}\r\n\r\n.heading-3 {\r\n  font-size: 2.4rem;\r\n  color: var(--slate-700);\r\n}\r\n\r\n.paragraph {\r\n  font-size: 1.6rem;\r\n  color: var(--slate-500);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n/* Images */\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.home-img {\r\n  border-radius: 50%;\r\n  width: 12.8rem;\r\n  height: 12.8rem;\r\n  background-image: url('+d+");\r\n  background-size: cover;\r\n}\r\n\r\n.content-menu img {\r\n  width: 9.6rem;\r\n  height: 9.6rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n/* content & layouts*/\r\n#content {\r\n  margin: 3.2rem auto;\r\n  width: 40%;\r\n  min-height: 24rem;\r\n  min-width: 64rem;\r\n  border-radius: 0.8rem;\r\n  background-color: white;\r\n  box-shadow: 0px 16px 32px rgba(47, 47, 59, 0.192);\r\n}\r\n\r\n/* Content Home */\r\n.content-home {\r\n  padding: 3.2rem;\r\n  display: flex;\r\n  gap: 2.4rem;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Content Menu */\r\n\r\n.content-menu {\r\n  grid-gap: 2rem;\r\n  padding: 3.2rem;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  display: grid;\r\n}\r\n\r\n.content-menu .heading-2 {\r\n  align-self: center;\r\n  justify-self: center;\r\n  grid-column: 1/-1;\r\n}\r\n\r\n/* Content contact */\r\n.content-contact {\r\n  padding: 3.2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.6rem;\r\n}\r\n\r\n.menu-card {\r\n  gap: 1.6rem;\r\n  text-align: center;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 2.4rem;\r\n  border-radius: 0.8rem;\r\n  border: 2px solid var(--slate-100);\r\n}\r\n\r\n/* components */\r\n.menu {\r\n  height: 6.4rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: var(--blue-500);\r\n}\r\n\r\n.menu-list {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  padding: 0px 4.8rem;\r\n  align-items: center;\r\n  font-size: 1.8rem;\r\n  list-style: none;\r\n  align-self: stretch;\r\n}\r\n\r\n.menu-item:hover {\r\n  background-color: var(--blue-600);\r\n}\r\n",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);t&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var p=r(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var g=a(m,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=r(o[i]);e[s].references--}for(var c=t(n,a),l=0;l<o.length;l++){var u=r(o[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}o=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},385:(n,e,r)=>{n.exports=r.p+"b8f7adeb8c8db6c53ea5.jpg"}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),a=r.n(t),o=r(569),i=r.n(o),s=r(565),c=r.n(s),l=r(216),u=r.n(l),d=r(589),p=r.n(d),m=r(426),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;let f=document.querySelector("#content");function h(){f.innerHTML="",console.log("Content Home is fully loaded!!");let n=document.createElement("div");n.classList.add("content-home"),n.innerHTML='\n  <h2 class="heading-2">This isn\'t even a joke.</h2>\n  <p class="paragraph">We only serve the best food. Lol</p>\n  <div class="home-img"></div>',f.append(n)}let v=document.querySelector("#content"),b=document.querySelector("#content"),y=document.querySelector("#home"),x=document.querySelector("#menu"),w=document.querySelector("#contact");h(),y.addEventListener("click",h),x.addEventListener("click",(function(){v.innerHTML="",console.log("Content Menu is fully loaded!!");let n=document.createElement("div");n.classList.add("content-menu"),n.innerHTML='\n  <h2 class="heading-2">Our Finest Menu Yet ⭐⭐⭐</h2>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor snt ipsa repudiandae quisquam accusantium,\n      explicabo commodi labore soluta temporibus ad possimus?\n    </p>\n  </div>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor sit amet ipsa repudiandae quisquam accusantium,\n      explicabo commodi labore soluta temporibus ad possimus?\n    </p>\n  </div>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor sit amet consecepudiandae quisquam accusantium,\n      explicabo commodi labore soluta temporibus ad possimus?\n    </p>\n  </div>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor sit amet nt ipsa repudiandae quisquam accusantium,\n      explicabo commodi labore soluta temporibus ad possimus?\n    </p>\n  </div>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi\n      deserunt excepturi quae! Tempore recusandae doloribus\n    </p>\n  </div>\n  <div class="menu-card">\n    <img src="../src/Images/image-1.jpg" alt="" />\n    <h3 class="heading-3">Restaurant Menu 1</h3>\n    <p class="paragraph">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi\n      deserunt excepturi quae! Tempore recusandae doloribus\n    </p>\n  </div>',v.append(n)})),w.addEventListener("click",(function(){console.log("Content Contact is fully loaded!!"),b.innerHTML="";let n=document.createElement("div");n.classList.add("content-home"),n.innerHTML='\n  <h2 class="heading-2">Contact Us!!</h2>\n  <p class="paragraph">📞 +1234 56 789</p>\n  <p class="paragraph">🏠 Hollywood Boulevard 4444</p>\n  <img src="../src/Images/image-1.jpg" alt="" />',b.append(n)}))})()})();