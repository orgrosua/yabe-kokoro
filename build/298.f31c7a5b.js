/*! For license information please see 298.f31c7a5b.js.LICENSE.txt */
(self.webpackChunkyabe_kokoro_src=self.webpackChunkyabe_kokoro_src||[]).push([[298],{2247:(t,e,r)=>{"use strict";r.d(e,{h:()=>o});r(5608);var n=r(3589);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n.Z.create(Object.assign({baseURL:kokoro.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":kokoro.rest_api.nonce}},t))}},1572:(t,e,r)=>{"use strict";r.d(e,{k:()=>u});r(5608);var n=r(2602),o=r.n(n),a=r(5917),i=r(3553);function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(o())(Object.assign({icons:{prefix:"",suffix:"",tip:'<div class="icon-tip">'.concat((0,a.qv)(i.FDd).html,"</div>"),async:'<div class="icon-async">'.concat((0,a.qv)(i.gr5).html,"</div>"),info:'<div class="icon-info">'.concat((0,a.qv)(i.DBf).html,"</div>"),success:'<div class="icon-success">'.concat((0,a.qv)(i.fV7).html,"</div>"),warning:'<div class="icon-warning">'.concat((0,a.qv)(i.xHz).html,"</div>"),alert:'<div class="icon-alert">'.concat((0,a.qv)(i.ik8).html,"</div>")}},t))}},327:(t,e,r)=>{"use strict";r.d(e,{c:()=>i});r(9239),r(6949),r(3199),r(2462),r(8495);var n=r(217),o=r(2811),a=r(6440),i=(0,n.Q_)("busy",(function(){var t=(0,o.iH)([]),e=(0,a.Fl)((function(){return t.value.length>0})),r=(0,a.Fl)((function(){return function(e){return t.value.some((function(t){return t.task===e}))}}));return{tasks:t,isBusy:e,hasTask:r,add:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t.value.unshift({timestamp:Date.now(),task:e})},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=!1;t.value=t.value.filter((function(t){return!!r||(t.task!==e||(r=!0,!1))}))},reset:function(){t.value=[]}}}))},7867:(t,e,r)=>{"use strict";var n=r(7803).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},1199:(t,e,r)=>{var n=r(4197),o=r(1302),a=Math.floor,i=n("".charAt),u=n("".replace),c=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,f,v){var d=r+t.length,p=n.length,h=s;return void 0!==f&&(f=o(f),h=l),u(v,h,(function(o,u){var l;switch(i(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,d);case"<":l=f[c(u,1,-1)];break;default:var s=+u;if(0===s)return o;if(s>p){var v=a(s/10);return 0===v?o:v<=p?void 0===n[v-1]?i(u,1):n[v-1]+i(u,1):o}l=n[s-1]}return void 0===l?"":l}))}},5995:(t,e,r)=>{var n=r(8078).PROPER,o=r(6082),a=r(3814);t.exports=function(t){return o((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||n&&a[t].name!==t}))}},2999:(t,e,r)=>{"use strict";var n=r(9131),o=r(4197),a=r(3987),i=o([].reverse),u=[1,2];n({target:"Array",proto:!0,forced:String(u)===String(u.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),i(this)}})},1991:(t,e,r)=>{"use strict";var n=r(9131),o=r(3987),a=r(5925),i=r(1995),u=r(5218),c=r(7225),l=r(4159),s=r(823),f=r(1561),v=r(8351),d=r(1982),p=v("slice"),h=f("species"),y=Array,m=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,f,v=l(this),p=c(v),g=u(t,p),b=u(void 0===e?p:e,p);if(o(v)&&(r=v.constructor,(a(r)&&(r===y||o(r.prototype))||i(r)&&null===(r=r[h]))&&(r=void 0),r===y||void 0===r))return d(v,g,b);for(n=new(void 0===r?y:r)(m(b-g,0)),f=0;g<b;g++,f++)g in v&&s(n,f,v[g]);return n.length=f,n}})},9663:(t,e,r)=>{var n=r(2692),o=r(8078).EXISTS,a=r(4197),i=r(1167),u=Function.prototype,c=a(u.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=a(l.exec);n&&!o&&i(u,"name",{configurable:!0,get:function(){try{return s(l,c(this))[1]}catch(t){return""}}})},3638:(t,e,r)=>{var n=r(4191);r(1596)(n.JSON,"JSON",!0)},9589:(t,e,r)=>{r(1596)(Math,"Math",!0)},1278:(t,e,r)=>{r(9131)({target:"Object",stat:!0,sham:!r(2692)},{create:r(9939)})},1148:(t,e,r)=>{var n=r(9131),o=r(6082),a=r(1302),i=r(9732),u=r(1038);n({target:"Object",stat:!0,forced:o((function(){i(1)})),sham:!u},{getPrototypeOf:function(t){return i(a(t))}})},6625:(t,e,r)=>{r(9131)({target:"Object",stat:!0},{setPrototypeOf:r(4549)})},2234:(t,e,r)=>{"use strict";var n=r(6500),o=r(7124),a=r(4197),i=r(2447),u=r(6082),c=r(813),l=r(3911),s=r(268),f=r(9653),v=r(8937),d=r(843),p=r(9075),h=r(7867),y=r(3504),m=r(1199),g=r(1620),b=r(1561)("replace"),_=Math.max,w=Math.min,k=a([].concat),x=a([].push),S=a("".indexOf),O=a("".slice),j="$0"==="a".replace(/./,"$0"),U=!!/./[b]&&""===/./[b]("a","$0");i("replace",(function(t,e,r){var a=U?"$":"$0";return[function(t,r){var n=p(this),a=s(t)?void 0:y(t,b);return a?o(a,t,n,r):o(e,d(n),t,r)},function(t,o){var i=c(this),u=d(t);if("string"==typeof o&&-1===S(o,a)&&-1===S(o,"$<")){var s=r(e,i,u,o);if(s.done)return s.value}var p=l(o);p||(o=d(o));var y=i.global;if(y){var b=i.unicode;i.lastIndex=0}for(var j=[];;){var U=g(i,u);if(null===U)break;if(x(j,U),!y)break;""===d(U[0])&&(i.lastIndex=h(u,v(i.lastIndex),b))}for(var P,E="",L=0,D=0;D<j.length;D++){for(var Z=d((U=j[D])[0]),T=_(w(f(U.index),u.length),0),z=[],N=1;N<U.length;N++)x(z,void 0===(P=U[N])?P:String(P));var $=U.groups;if(p){var F=k([Z],z,T,u);void 0!==$&&x(F,$);var C=d(n(o,void 0,F))}else C=m(Z,u,T,z,$,o);T>=L&&(E+=O(u,L,T)+C,L=T+Z.length)}return E+O(u,L)}]}),!!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!j||U)},9481:(t,e,r)=>{"use strict";var n=r(9131),o=r(8426).trim;n({target:"String",proto:!0,forced:r(5995)("trim")},{trim:function(){return o(this)}})},8590:(t,e,r)=>{r(2776)("asyncIterator")},1430:(t,e,r)=>{var n=r(2094),o=r(2776),a=r(1596);o("toStringTag"),a(n("Symbol"),"Symbol")},5298:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>I});r(6777),r(2234),r(9481),r(7024),r(6949),r(1420),r(6842),r(891),r(2393),r(6021),r(3490),r(516),r(4104),r(9852),r(8495),r(5731),r(2910),r(5475),r(733),r(6711),r(597),r(3715),r(2621),r(937),r(8590),r(1430),r(3638),r(9589),r(1278),r(1148),r(9663),r(6625),r(2999),r(1991);var n=r(6440),o=r(1040),a=r(2811),i=r(1254),u=r(9988),c=r(9389),l=r(2247),s=r(327),f=r(1572),v=r(5247),d=r(6135),p=r(4313);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),u=new U(o||[]);return n(i,"_invoke",{value:x(t,r,u)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function v(){}function d(){}function p(){}var m={};c(m,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==e&&r.call(b,a)&&(m=b);var _=p.prototype=v.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function o(n,a,i,u){var c=s(t[n],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return E()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=S(i,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=p,n(_,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(_),c(_,u,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function m(t,e,r,n,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){_(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function _(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===h(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var w={class:"mr:8 font:24"},k={class:"form-table",role:"presentation"},x={scope:"row"},S=(0,n._)("p",{class:"description"}," Paste the SiteKey to fill the below fields automatically. ",-1),O={scope:"row"},j=(0,n._)("span",{class:"fg:red-35"},"*",-1),U={scope:"row"},P=(0,n._)("span",{class:"fg:red-35"},"*",-1),E={key:0,class:"description"},L={key:0},D={class:"font:semibold"},Z=(0,n._)("br",null,null,-1),T=(0,n._)("span",{class:"font:semibold"},"Oxygen: ",-1),z=(0,n._)("br",null,null,-1),N=(0,n._)("span",{class:"font:semibold"},"Yabe Kokoro: ",-1),$={scope:"row"},F=(0,n._)("span",{class:"fg:red-35"},"*",-1),C={class:"flex"},H={class:"rel flex mr:8 align-items:center"},q=["type"],Y=(0,n._)("p",{class:"description"},[(0,n.Uk)(" License key generated by Yabe Kokoro should be prefixed with "),(0,n._)("code",null,"!kokoro:")],-1),A={scope:"row"},G={class:"flex align-items:center"},K=["disabled"];const I={__name:"Edit",setup:function(t){var e=(0,l.h)(),r=(0,u.yj)(),h=(0,u.tv)(),g=(0,f.k)(),_=(0,s.c)(),I=(0,v.G)(),M=(0,a.iH)({}),R=(0,a.iH)(!1),V=(0,a.iH)(!0),W=(0,a.iH)(""),B=(0,a.iH)(""),X=(0,a.iH)(""),J=(0,a.iH)(!0),Q=(0,a.iH)(""),tt=(0,a.iH)(null),et={status:null,connected:!1,yabeKokoroDetected:!1,oxygenDetected:!1},rt=(0,a.iH)(b({},et));function nt(){return ot.apply(this,arguments)}function ot(){var t;return t=y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _.add("remotes.edit:fetch-item"),t.abrupt("return",e.request({method:"GET",url:"/admin/remotes/detail/".concat(r.params.id)}).then((function(t){return t.data})).then((function(t){B.value=t.license_key,X.value=t.title,J.value=t.status,Q.value=t.remote_url,M.value=t})).finally((function(){_.remove("remotes.edit:fetch-item")})));case 2:case"end":return t.stop()}}),t)})),ot=function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){m(a,n,o,i,u,"next",t)}function u(t){m(a,n,o,i,u,"throw",t)}i(void 0)}))},ot.apply(this,arguments)}function at(t){t.preventDefault(),_.add("remote.edit:send-form");var r=e.request({method:"POST",url:"/admin/remotes/update/".concat(M.value.id),data:{title:X.value,license_key:B.value,status:J.value,remote_url:Q.value}}).then((function(t){I.add({type:"success",message:"<p>Remote updated successfully.</p>"}),nt()})).finally((function(){_.remove("remote.edit:send-form")}));g.async(r,"Remote updated successfully.",void 0,"Updating remote...")}function it(){confirm((0,d.__)("Are you sure you want to delete the remote?","yabe-kokoro"))&&(R.value=!0,_.add("remotes.edit:delete"),e.request({method:"POST",url:"/admin/remotes/delete/".concat(M.value.id)}).then((function(t){h.push({name:"remotes.index"})})).catch((function(t){g.alert(t.message)})).finally((function(){R.value=!1,_.remove("remotes.edit:delete")})))}(0,n.YP)(W,(function(t,e){if(""!==t&&t!==e)try{var r=atob(t).split("\n");3===r.length&&(Q.value=r[0],X.value=r[1],B.value=r[2])}catch(t){}})),(0,n.YP)(Q,(0,c.Z)((function(t,r){t!==r&&(rt.value=b({},et),""!==t&&tt.value.checkValidity()&&(rt.value.status="loading",e.request({method:"POST",url:"/admin/remotes/check-connection",data:{remote_url:t.trim().replace(/\/$/,"")}}).then((function(t){200===t.status?(rt.value=b(b({},rt.value),{},{status:!0,connected:!0}),rt.value.yabeKokoroDetected=void 0!==t.data.namespaces.find((function(t){return"yabe-kokoro/v1"===t})),rt.value.oxygenDetected=void 0!==t.data.namespaces.find((function(t){return"oxygen-vsb-connection/v1"===t}))):rt.value.status=!1})).catch((function(t){rt.value=b(b({},et),{},{status:!1})}))))}),100));var ut=(0,n.Fl)((function(){return!!M.value&&(M.value.license_key!==B.value||M.value.title!==X.value||M.value.status!==J.value||M.value.remote_url!==Q.value)})),ct=(0,a.iH)(null);return(0,n.YP)(ut,(function(t,e){t&&!ct.value?ct.value=I.add({type:"warning",message:"<p>You have unsaved changes.</p>"}):(I.remove(ct.value),ct.value=null)})),(0,n.wF)((function(){var t=nt();g.async(t,"Remote details loaded.",(function(t){g.alert(t.response&&404===t.response.status?"Remote not found.":"Failed to load remote details."),h.go(-1)}),"Fetching remote details...")})),(0,u.iS)((function(t,e,r){ut.value&&!confirm((0,d.__)("You have unsaved changes. Are you sure you want to leave?","yabe-kokoro"))||r()})),window.onbeforeunload=function(t){if(ut.value)return(0,d.__)("You have unsaved changes. Are you sure you want to leave?","yabe-kokoro")},(0,n.Jd)((function(){window.onbeforeunload=null,ct.value&&I.remove(ct.value)})),function(t,e){var r=(0,n.up)("font-awesome-icon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("span",w,"» "+(0,o.zw)((0,a.SU)(d.__)("Edit","yabe-kokoro")),1),(0,n._)("form",{onSubmit:at},[(0,n._)("div",null,[(0,n._)("table",k,[(0,n._)("tbody",null,[(0,n._)("tr",null,[(0,n._)("th",x,[(0,n._)("label",null,(0,o.zw)((0,a.SU)(d.__)("SiteKey","yabe-kokoro")),1)]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{type:"text",name:"siteKey","onUpdate:modelValue":e[0]||(e[0]=function(t){return W.value=t})},null,512),[[i.nr,W.value,void 0,{trim:!0,lazy:!0}]]),S])]),(0,n._)("tr",null,[(0,n._)("th",O,[(0,n._)("label",null,[(0,n.Uk)((0,o.zw)((0,a.SU)(d.__)("Title","yabe-kokoro"))+" ",1),j])]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{type:"text",name:"title","onUpdate:modelValue":e[1]||(e[1]=function(t){return X.value=t}),required:""},null,512),[[i.nr,X.value,void 0,{trim:!0,lazy:!0}]])])]),(0,n._)("tr",null,[(0,n._)("th",U,[(0,n._)("label",null,[(0,n.Uk)((0,o.zw)((0,a.SU)(d.__)("Remote URL","yabe-kokoro"))+" ",1),P])]),(0,n._)("td",null,[(0,n.wy)((0,n._)("input",{type:"url",ref_key:"remoteUrlField",ref:tt,name:"remote_url","onUpdate:modelValue":e[2]||(e[2]=function(t){return Q.value=t}),required:""},null,512),[[i.nr,Q.value,void 0,{trim:!0,lazy:!0}]]),null!==rt.value.status?((0,n.wg)(),(0,n.iD)("p",E,["loading"===rt.value.status?((0,n.wg)(),(0,n.iD)("span",L,[(0,n.Wm)(r,{icon:["fas","spinner"],class:"mr:4 fg:gray-60 animation:rotate|linear|1s|infinite"}),(0,n.Uk)(" "+(0,o.zw)((0,a.SU)(d.__)("Connecting","yabe-kokoro"))+"... ",1)])):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("span",D,(0,o.zw)((0,a.SU)(d.__)("Server","yabe-kokoro"))+": ",1),(0,n._)("span",{class:(0,o.C_)(rt.value.connected?"fg:green-50":"fg:red-40")},(0,o.zw)(rt.value.connected?(0,a.SU)(d.__)("Connected","yabe-kokoro"):(0,a.SU)(d.__)("Failed to connect","yabe-kokoro")),3),Z,T,(0,n._)("span",{class:(0,o.C_)(rt.value.oxygenDetected?"fg:green-50":"fg:red-40")},(0,o.zw)(rt.value.oxygenDetected?(0,a.SU)(d.__)("Detected","yabe-kokoro"):(0,a.SU)(d.__)("Not detected","yabe-kokoro")),3),z,N,(0,n._)("span",{class:(0,o.C_)(rt.value.yabeKokoroDetected?"fg:green-50":"fg:yellow-60")},(0,o.zw)(rt.value.yabeKokoroDetected?(0,a.SU)(d.__)("Detected","yabe-kokoro"):(0,a.SU)(d.__)("Not detected","yabe-kokoro")),3)],64))])):(0,n.kq)("v-if",!0)])]),(0,n._)("tr",null,[(0,n._)("th",$,[(0,n._)("label",null,[(0,n.Uk)((0,o.zw)((0,a.SU)(d.__)("License Key","yabe-kokoro"))+" ",1),F])]),(0,n._)("td",null,[(0,n._)("div",C,[(0,n._)("div",H,[(0,n.wy)((0,n._)("input",{type:V.value?"text":"password",name:"secret_license_key","onUpdate:modelValue":e[3]||(e[3]=function(t){return B.value=t}),autocomplete:"current-password",class:"min-w:300 hide::-ms-reveal",required:""},null,8,q),[[i.YZ,B.value]]),(0,n._)("span",{onClick:e[4]||(e[4]=function(t){return V.value=!V.value}),class:"flex align-items:center ml:-24 fg:gray-60 fg:gray-40:hover cursor:pointer"},[V.value?((0,n.wg)(),(0,n.j4)(r,{key:1,icon:["fas","eye-slash"],class:"font:15"})):((0,n.wg)(),(0,n.j4)(r,{key:0,icon:["fas","eye"],class:"font:15"}))])])]),Y])]),(0,n._)("tr",null,[(0,n._)("th",A,[(0,n._)("label",null,(0,o.zw)((0,a.SU)(d.__)("Status","yabe-kokoro")),1)]),(0,n._)("td",null,[(0,n.Wm)((0,a.SU)(p.Mv),{as:"div",class:"flex align-items:center"},{default:(0,n.w5)((function(){return[(0,n.Wm)((0,a.SU)(p.rs),{modelValue:J.value,"onUpdate:modelValue":e[5]||(e[5]=function(t){return J.value=t}),class:(0,o.C_)([[J.value?"bg:sky-55":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:(0,n.w5)((function(){return[(0,n._)("span",{class:(0,o.C_)([[J.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[(0,n._)("span",{"aria-hidden":"true",class:(0,o.C_)([[J.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,n.Wm)(r,{icon:["fas","xmark"],class:"fg:gray-60"})],2),(0,n._)("span",{"aria-hidden":"true",class:(0,o.C_)([[J.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,n.Wm)(r,{icon:["fas","check"],class:"fg:sky-55"})],2)],2)]})),_:1},8,["modelValue","class"]),(0,n.Wm)((0,a.SU)(p.$A),{as:"span",class:(0,o.C_)([[J.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(J.value?"enabled":"disabled"),1)]})),_:1},8,["class"])]})),_:1})])])])]),(0,n._)("div",G,[(0,n._)("button",{type:"submit",name:"save",id:"save",disabled:(0,a.SU)(_).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,K),(0,n._)("a",{class:(0,o.C_)([{"cursor:wait":(0,a.SU)(_).isBusy},"ml:12 fg:red-40 text:underline cursor:pointer fg:red-30:hover"]),onClick:it},(0,o.zw)(R.value?"Deleting...":"Delete"),3)])])],32)],64)}}}},4356:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=r(9615).Z.Symbol},9572:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(4356),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=n.Z?n.Z.toStringTag:void 0;const c=function(t){var e=a.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o};var l=Object.prototype.toString;const s=function(t){return l.call(t)};var f=n.Z?n.Z.toStringTag:void 0;const v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?c(t):s(t)}},7889:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n="object"==typeof global&&global&&global.Object===Object&&global},9615:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(7889),o="object"==typeof self&&self&&self.Object===Object&&self;const a=n.Z||o||Function("return this")()},9389:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var n=r(2433),o=r(9615);const a=function(){return o.Z.Date.now()};var i=/\s/;const u=function(t){for(var e=t.length;e--&&i.test(t.charAt(e)););return e};var c=/^\s+/;const l=function(t){return t?t.slice(0,u(t)+1).replace(c,""):t};var s=r(8111),f=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt;const h=function(t){if("number"==typeof t)return t;if((0,s.Z)(t))return NaN;if((0,n.Z)(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=(0,n.Z)(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=l(t);var r=v.test(t);return r||d.test(t)?p(t.slice(2),r?2:8):f.test(t)?NaN:+t};var y=Math.max,m=Math.min;const g=function(t,e,r){var o,i,u,c,l,s,f=0,v=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var r=o,n=i;return o=i=void 0,f=e,c=t.apply(n,r)}function b(t){var r=t-s;return void 0===s||r>=e||r<0||d&&t-f>=u}function _(){var t=a();if(b(t))return w(t);l=setTimeout(_,function(t){var r=e-(t-s);return d?m(r,u-(t-f)):r}(t))}function w(t){return l=void 0,p&&o?g(t):(o=i=void 0,c)}function k(){var t=a(),r=b(t);if(o=arguments,i=this,s=t,r){if(void 0===l)return function(t){return f=t,l=setTimeout(_,e),v?g(t):c}(s);if(d)return clearTimeout(l),l=setTimeout(_,e),g(s)}return void 0===l&&(l=setTimeout(_,e)),c}return e=h(e)||0,(0,n.Z)(r)&&(v=!!r.leading,u=(d="maxWait"in r)?y(h(r.maxWait)||0,e):u,p="trailing"in r?!!r.trailing:p),k.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=s=i=l=void 0},k.flush=function(){return void 0===l?c:w(a())},k}},2433:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},3795:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=function(t){return null!=t&&"object"==typeof t}},8111:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(9572),o=r(3795);const a=function(t){return"symbol"==typeof t||(0,o.Z)(t)&&"[object Symbol]"==(0,n.Z)(t)}}}]);