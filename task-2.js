!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0),n(4)},function(e,t,n){var i=n(5),r=1,u=document.createElement("ul");u.className="email-list__items list-items",document.getElementById("emaiList").appendChild(u).setAttribute("id","e-mail-list");var o=[],l=function(e){o=o.filter(function(t){return t.id!==e}),c()};function a(){var e=document.getElementById("inputEmail").value;i(e)?(o.push({id:r++,value:e}),c()):alert("".concat(e," не является email адресом"))}var c=function(){u.innerHTML="",o.forEach(function(e){var t=document.createElement("button");t.innerText="X",t.type="button",t.className="btn btn_delete list-items__btn list-items__btn_delete",t.addEventListener("click",function(){l(e.id)});var n=document.createElement("li");n.className="list-items__item",n.innerHTML=e.value,n.appendChild(t),u.appendChild(n)})};document.getElementById("submit").addEventListener("click",a),document.getElementById("inputEmail").addEventListener("keypress",function(){13===event.keyCode&&a()})},function(e,t){e.exports=function(e){return/^[a-zA-Z]+([-._]?[a-zA-Z]+){1,}@[a-zA-Z_]+?\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6})?$/.test(e)}}]);