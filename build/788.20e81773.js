(self.webpackChunkyabe_kokoro_src=self.webpackChunkyabe_kokoro_src||[]).push([[788],{2247:(e,t,n)=>{"use strict";n.d(t,{h:()=>a});n(5608);var r=n(3589);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.create(Object.assign({baseURL:kokoro.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":kokoro.rest_api.nonce}},e))}},1572:(e,t,n)=>{"use strict";n.d(t,{k:()=>i});n(5608);var r=n(2602),a=n.n(r),o=n(5917),l=n(3553);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(a())(Object.assign({icons:{prefix:"",suffix:"",tip:'<div class="icon-tip">'.concat((0,o.qv)(l.FDd).html,"</div>"),async:'<div class="icon-async">'.concat((0,o.qv)(l.gr5).html,"</div>"),info:'<div class="icon-info">'.concat((0,o.qv)(l.DBf).html,"</div>"),success:'<div class="icon-success">'.concat((0,o.qv)(l.fV7).html,"</div>"),warning:'<div class="icon-warning">'.concat((0,o.qv)(l.xHz).html,"</div>"),alert:'<div class="icon-alert">'.concat((0,o.qv)(l.ik8).html,"</div>")}},e))}},327:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});n(9239),n(6949),n(3199),n(2462),n(8495);var r=n(217),a=n(2811),o=n(6440),l=(0,r.Q_)("busy",(function(){var e=(0,a.iH)([]),t=(0,o.Fl)((function(){return e.value.length>0})),n=(0,o.Fl)((function(){return function(t){return e.value.some((function(e){return e.task===t}))}}));return{tasks:e,isBusy:t,hasTask:n,add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.value.unshift({timestamp:Date.now(),task:t})},remove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=!1;e.value=e.value.filter((function(e){return!!n||(e.task!==t||(n=!0,!1))}))},reset:function(){e.value=[]}}}))},3086:e=>{var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},1500:(e,t,n)=>{var r=n(4191),a=n(6082),o=n(4197),l=n(843),i=n(8426).trim,u=n(3814),s=r.parseInt,c=r.Symbol,d=c&&c.iterator,f=/^[+-]?0x/i,p=o(f.exec),v=8!==s(u+"08")||22!==s(u+"0x16")||d&&!a((function(){s(Object(d))}));e.exports=v?function(e,t){var n=i(l(e));return s(n,t>>>0||(p(f,n)?16:10))}:s},8557:(e,t,n)=>{"use strict";var r=n(9131),a=n(6082),o=n(3987),l=n(1995),i=n(1302),u=n(7225),s=n(3086),c=n(823),d=n(3686),f=n(8351),p=n(1561),v=n(4911),m=p("isConcatSpreadable"),b=v>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),h=function(e){if(!l(e))return!1;var t=e[m];return void 0!==t?!!t:o(e)};r({target:"Array",proto:!0,arity:1,forced:!b||!f("concat")},{concat:function(e){var t,n,r,a,o,l=i(this),f=d(l,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(h(o=-1===t?l:arguments[t]))for(a=u(o),s(p+a),n=0;n<a;n++,p++)n in o&&c(f,p,o[n]);else s(p+1),c(f,p++,o);return f.length=p,f}})},8869:(e,t,n)=>{"use strict";var r=n(9131),a=n(930).map;r({target:"Array",proto:!0,forced:!n(8351)("map")},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},9663:(e,t,n)=>{var r=n(2692),a=n(8078).EXISTS,o=n(4197),l=n(1167),i=Function.prototype,u=o(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=o(s.exec);r&&!a&&l(i,"name",{configurable:!0,get:function(){try{return c(s,u(this))[1]}catch(e){return""}}})},207:(e,t,n)=>{var r=n(9131),a=n(1500);r({global:!0,forced:parseInt!=a},{parseInt:a})},8788:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});n(8869),n(8557),n(9663),n(207),n(6949),n(1420),n(6842);var r=n(6440),a=n(1040),o=n(2811),l=n(1254),i=n(9988),u=n(9389),s=n(2247),c=n(327),d=n(1572),f=n(5247),p=n(6135),v=n(4313),m=n(7197),b=n(7748),h={class:"mr:8 font:24"},y={class:"form-table",role:"presentation"},g={scope:"row"},w=(0,r._)("span",{class:"fg:red-35"},"*",-1),_={scope:"row"},k=(0,r._)("span",{class:"fg:red-35"},"*",-1),S={class:"flex"},j={class:"rel flex mr:8 align-items:center"},x=["type"],O=(0,r._)("span",{class:"text"},"Generate",-1),U=(0,r._)("p",{class:"description"},null,-1),H={scope:"row"},T={scope:"row"},Z={class:"flex"},E={scope:"row"},C={class:"flex"},P={scope:"row"},A={class:"flex"},D=["disabled"];const F={__name:"Create",setup:function(e){var t=(0,s.h)(),n=(0,i.tv)(),F=(0,d.k)(),L=(0,c.c)(),N=(0,f.G)(),V=(0,o.iH)(""),$=(0,o.iH)(""),W=(0,o.iH)(!0),z=(0,o.iH)(null),B=(0,o.iH)(null),q=(0,o.iH)(null),I=(0,o.iH)(!0),M=(0,o.iH)([]),R=(0,r.Fl)((function(){return M.value.map((function(e){return{label:"".concat(e.name," (").concat(e.email,")"),value:parseInt(e.id)}}))})),Y=(0,u.Z)((function(e,n){e&&(n(!0),t.request({method:"GET",url:"/admin/licenses/search_user",params:{s:e}}).then((function(e){M.value=e.data.data})).catch((function(e){F.error(e)})).finally((function(){n(!1)})))}),200);function G(){$.value="",V.value=(0,m.x0)(),W.value=!0}function J(e){var r;e.preventDefault(),L.add("license.create:send-form");var a=t.request({method:"POST",url:"/admin/licenses/store",data:{title:$.value,license_key:V.value,status:W.value,max_sites:z.value,expired_at:B.value,user_id:null===(r=q.value)||void 0===r?void 0:r.value}}).then((function(e){var t=n.resolve({name:"licenses.edit",params:{id:e.data.id}}).href;N.add({type:"success",message:'<p>License saved successfully. <a href="'.concat(t,'">Edit License</a></p>')}),G()})).finally((function(){L.remove("license.create:send-form")}));F.async(a,"License stored successfully.",void 0,"Storing license...")}return(0,r.YP)(B,(function(e,t){""===e&&(B.value=null)})),(0,r.wF)((function(){G()})),function(e,t){var n=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",h,"» "+(0,a.zw)((0,o.SU)(p.__)("New","yabe-kokoro")),1),(0,r._)("form",{onSubmit:J},[(0,r._)("div",null,[(0,r._)("table",y,[(0,r._)("tbody",null,[(0,r._)("tr",null,[(0,r._)("th",g,[(0,r._)("label",null,[(0,r.Uk)((0,a.zw)((0,o.SU)(p.__)("Title","yabe-kokoro"))+" ",1),w])]),(0,r._)("td",null,[(0,r.wy)((0,r._)("input",{type:"text",name:"title","onUpdate:modelValue":t[0]||(t[0]=function(e){return $.value=e}),required:""},null,512),[[l.nr,$.value,void 0,{trim:!0,lazy:!0}]])])]),(0,r._)("tr",null,[(0,r._)("th",_,[(0,r._)("label",null,[(0,r.Uk)((0,a.zw)((0,o.SU)(p.__)("License Key","yabe-kokoro"))+" ",1),k])]),(0,r._)("td",null,[(0,r._)("div",S,[(0,r._)("div",j,[(0,r.wy)((0,r._)("input",{type:I.value?"text":"password",name:"secret_license_key","onUpdate:modelValue":t[1]||(t[1]=function(e){return V.value=e}),autocomplete:"current-password",class:"min-w:300 hide::-ms-reveal",required:""},null,8,x),[[l.YZ,V.value]]),(0,r._)("span",{onClick:t[2]||(t[2]=function(e){return I.value=!I.value}),class:"flex align-items:center ml:-24 fg:gray-60 fg:gray-40:hover cursor:pointer"},[I.value?((0,r.wg)(),(0,r.j4)(n,{key:1,icon:["fas","eye-slash"],class:"font:15"})):((0,r.wg)(),(0,r.j4)(n,{key:0,icon:["fas","eye"],class:"font:15"}))])]),(0,r._)("div",{onClick:t[3]||(t[3]=function(e){return V.value=(0,o.SU)(m.x0)()}),class:"button flex align-items:center"},[(0,r.Wm)(n,{icon:["fas","shuffle"],class:"font:15 mr:6"}),O])]),U])]),(0,r._)("tr",null,[(0,r._)("th",H,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(p.__)("Status","yabe-kokoro")),1)]),(0,r._)("td",null,[(0,r.Wm)((0,o.SU)(v.Mv),{as:"div",class:"flex align-items:center"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(v.rs),{modelValue:W.value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return W.value=e}),class:(0,a.C_)([[W.value?"bg:sky-55":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:(0,r.w5)((function(){return[(0,r._)("span",{class:(0,a.C_)([[W.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[W.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,r.Wm)(n,{icon:["fas","xmark"],class:"fg:gray-60"})],2),(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[W.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,r.Wm)(n,{icon:["fas","check"],class:"fg:sky-55"})],2)],2)]})),_:1},8,["modelValue","class"]),(0,r.Wm)((0,o.SU)(v.$A),{as:"span",class:(0,a.C_)([[W.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(W.value?"enabled":"disabled"),1)]})),_:1},8,["class"])]})),_:1})])]),(0,r._)("tr",null,[(0,r._)("th",T,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(p.__)("Max activations","yabe-kokoro")),1)]),(0,r._)("td",null,[(0,r._)("div",Z,[(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=function(e){return z.value=e}),min:"0"},null,512),[[l.nr,z.value]])])])]),(0,r._)("tr",null,[(0,r._)("th",E,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(p.__)("Expired at","yabe-kokoro")),1)]),(0,r._)("td",null,[(0,r._)("div",C,[(0,r.wy)((0,r._)("input",{type:"date","onUpdate:modelValue":t[6]||(t[6]=function(e){return B.value=e})},null,512),[[l.nr,B.value]])])])]),(0,r._)("tr",null,[(0,r._)("th",P,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(p.__)("User","yabe-kokoro")),1)]),(0,r._)("td",null,[(0,r._)("div",A,[(0,r.Wm)((0,o.SU)(b.Z),{modelValue:q.value,"onUpdate:modelValue":t[7]||(t[7]=function(e){return q.value=e}),options:R.value,onSearch:(0,o.SU)(Y),filterable:!1,placeholder:"Choose user",class:"min-w:300"},{"no-options":(0,r.w5)((function(){return[(0,r.Uk)(" Search for a user... ")]})),_:1},8,["modelValue","options","onSearch"])])])])])]),(0,r._)("button",{type:"submit",name:"save",id:"save",disabled:(0,o.SU)(L).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,D)])],32)],64)}}}},4313:(e,t,n)=>{"use strict";n.d(t,{rs:()=>E,Mv:()=>Z,$A:()=>C});var r=n(6440),a=n(2811);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var l,i=((l=i||{})[l.None=0]="None",l[l.RenderStrategy=1]="RenderStrategy",l[l.Static=2]="Static",l),u=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(u||{});function s({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...a}){var l;let i=f(r,n),u=Object.assign(a,{props:i});if(e||2&t&&i.static)return c(u);if(1&t){return o(null==(l=i.unmount)||l?0:1,{0:()=>null,1:()=>c({...a,props:{...i,hidden:!0,style:{display:"none"}}})})}return c(u)}function c({props:e,attrs:t,slots:n,slot:a,name:o}){var l,i;let{as:u,...s}=v(e,["unmount","static"]),c=null==(l=n.default)?void 0:l.call(n,a),p={};if(a){let e=!1,t=[];for(let[n,r]of Object.entries(a))"boolean"==typeof r&&(e=!0),!0===r&&t.push(n);e&&(p["data-headlessui-state"]=t.join(" "))}if("template"===u){if(c=d(null!=c?c:[]),Object.keys(s).length>0||Object.keys(t).length>0){let[e,...n]=null!=c?c:[];if(!function(e){return null!=e&&("string"==typeof e.type||"object"==typeof e.type||"function"==typeof e.type)}(e)||n.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map((e=>e.trim())).filter(((e,t,n)=>n.indexOf(e)===t)).sort(((e,t)=>e.localeCompare(t))).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let a=f(null!=(i=e.props)?i:{},s),l=(0,r.Ho)(e,a);for(let e in a)e.startsWith("on")&&(l.props||(l.props={}),l.props[e]=a[e]);return l}return Array.isArray(c)&&1===c.length?c[0]:c}return(0,r.h)(u,Object.assign({},s,p),{default:()=>c})}function d(e){return e.flatMap((e=>e.type===r.HY?d(e.children):[e]))}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let a=n[e];for(let e of a){if(t instanceof Event&&t.defaultPrevented)return;e(t,...r)}}});return t}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}let m=0;function b(){return++m}var h=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(h||{});let y=Symbol("LabelContext");function g(){let e=(0,r.f3)(y,null);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,g),e}return e}function w({slot:e={},name:t="Label",props:n={}}={}){let o=(0,a.iH)([]);return(0,r.JJ)(y,{register:function(e){return o.value.push(e),()=>{let t=o.value.indexOf(e);-1!==t&&o.value.splice(t,1)}},slot:e,name:t,props:n}),(0,r.Fl)((()=>o.value.length>0?o.value.join(" "):void 0))}let _=(0,r.aZ)({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-label-${b()}`}},setup(e,{slots:t,attrs:n}){let o=g();return(0,r.bv)((()=>(0,r.Ah)(o.register(e.id)))),()=>{let{name:r="Label",slot:l={},props:i={}}=o,{id:u,passive:c,...d}=e,f={...Object.entries(i).reduce(((e,[t,n])=>Object.assign(e,{[t]:(0,a.SU)(n)})),{}),id:u};return c&&(delete f.onClick,delete f.htmlFor,delete d.onClick),s({ourProps:f,theirProps:d,slot:l,attrs:n,slots:t,name:r})}}}),k=Symbol("DescriptionContext");function S({slot:e=(0,a.iH)({}),name:t="Description",props:n={}}={}){let o=(0,a.iH)([]);return(0,r.JJ)(k,{register:function(e){return o.value.push(e),()=>{let t=o.value.indexOf(e);-1!==t&&o.value.splice(t,1)}},slot:e,name:t,props:n}),(0,r.Fl)((()=>o.value.length>0?o.value.join(" "):void 0))}(0,r.aZ)({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${b()}`}},setup(e,{attrs:t,slots:n}){let o=function(){let e=(0,r.f3)(k,null);if(null===e)throw new Error("Missing parent");return e}();return(0,r.bv)((()=>(0,r.Ah)(o.register(e.id)))),()=>{let{name:r="Description",slot:l=(0,a.iH)({}),props:i={}}=o,{id:u,...c}=e,d={...Object.entries(i).reduce(((e,[t,n])=>Object.assign(e,{[t]:(0,a.SU)(n)})),{}),id:u};return s({ourProps:d,theirProps:c,slot:l.value,attrs:t,slots:n,name:r})}}});function j(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}function x(e,t){if(e)return e;let n=null!=t?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function O(e,t){let n=(0,a.iH)(x(e.value.type,e.value.as));return(0,r.bv)((()=>{n.value=x(e.value.type,e.value.as)})),(0,r.m0)((()=>{var e;n.value||j(t)&&j(t)instanceof HTMLButtonElement&&(null==(e=j(t))||!e.hasAttribute("type"))&&(n.value="button")})),n}var U=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(U||{});let H=(0,r.aZ)({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup:(e,{slots:t,attrs:n})=>()=>{let{features:r,...a}=e;return s({ourProps:{"aria-hidden":2==(2&r)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&r)&&2!=(2&r)&&{display:"none"}}},theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}});let T=Symbol("GroupContext"),Z=(0,r.aZ)({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:n}){let o=(0,a.iH)(null),l=w({name:"SwitchLabel",props:{htmlFor:(0,r.Fl)((()=>{var e;return null==(e=o.value)?void 0:e.id})),onClick(e){o.value&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),o.value.click(),o.value.focus({preventScroll:!0}))}}}),i=S({name:"SwitchDescription"});return(0,r.JJ)(T,{switchRef:o,labelledby:l,describedby:i}),()=>s({theirProps:e,ourProps:{},slot:{},slots:t,attrs:n,name:"SwitchGroup"})}}),E=(0,r.aZ)({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,optional:!0},form:{type:String,optional:!0},name:{type:String,optional:!0},value:{type:String,optional:!0},id:{type:String,default:()=>`headlessui-switch-${b()}`}},inheritAttrs:!1,setup(e,{emit:t,attrs:n,slots:o,expose:l}){let i=(0,r.f3)(T,null),[u,c]=function(e,t,n){let o=(0,a.iH)(null==n?void 0:n.value),l=(0,r.Fl)((()=>void 0!==e.value));return[(0,r.Fl)((()=>l.value?e.value:o.value)),function(e){return l.value||(o.value=e),null==t?void 0:t(e)}]}((0,r.Fl)((()=>e.modelValue)),(e=>t("update:modelValue",e)),(0,r.Fl)((()=>e.defaultChecked)));function d(){c(!u.value)}let f=(0,a.iH)(null),m=null===i?f:i.switchRef,b=O((0,r.Fl)((()=>({as:e.as,type:n.type}))),m);function y(e){e.preventDefault(),d()}function g(e){e.key===h.Space?(e.preventDefault(),d()):e.key===h.Enter&&function(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n)for(let e of n.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type)return void e.click()}(e.currentTarget)}function w(e){e.preventDefault()}l({el:m,$el:m});let _=(0,r.Fl)((()=>{var e,t;return null==(t=null==(e=j(m))?void 0:e.closest)?void 0:t.call(e,"form")}));return(0,r.bv)((()=>{(0,r.YP)([_],(()=>{if(_.value&&void 0!==e.defaultChecked)return _.value.addEventListener("reset",t),()=>{var e;null==(e=_.value)||e.removeEventListener("reset",t)};function t(){c(e.defaultChecked)}}),{immediate:!0})})),()=>{let{id:t,name:a,value:l,form:c,...d}=e,f={checked:u.value},h={id:t,ref:m,role:"switch",type:b.value,tabIndex:0,"aria-checked":u.value,"aria-labelledby":null==i?void 0:i.labelledby.value,"aria-describedby":null==i?void 0:i.describedby.value,onClick:y,onKeyup:g,onKeypress:w};return(0,r.h)(r.HY,[null!=a&&null!=u.value?(0,r.h)(H,p({features:U.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:u.value,form:c,name:a,value:l})):null,s({ourProps:h,theirProps:{...n,...v(d,["modelValue","defaultChecked"])},slot:f,attrs:n,slots:o,name:"Switch"})])}}}),C=_},4356:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n(9615).Z.Symbol},9572:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(4356),a=Object.prototype,o=a.hasOwnProperty,l=a.toString,i=r.Z?r.Z.toStringTag:void 0;const u=function(e){var t=o.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var a=l.call(e);return r&&(t?e[i]=n:delete e[i]),a};var s=Object.prototype.toString;const c=function(e){return s.call(e)};var d=r.Z?r.Z.toStringTag:void 0;const f=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":d&&d in Object(e)?u(e):c(e)}},7889:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r="object"==typeof global&&global&&global.Object===Object&&global},9615:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7889),a="object"==typeof self&&self&&self.Object===Object&&self;const o=r.Z||a||Function("return this")()},9389:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(2433),a=n(9615);const o=function(){return a.Z.Date.now()};var l=/\s/;const i=function(e){for(var t=e.length;t--&&l.test(e.charAt(t)););return t};var u=/^\s+/;const s=function(e){return e?e.slice(0,i(e)+1).replace(u,""):e};var c=n(8111),d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt;const m=function(e){if("number"==typeof e)return e;if((0,c.Z)(e))return NaN;if((0,r.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,r.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var n=f.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):d.test(e)?NaN:+e};var b=Math.max,h=Math.min;const y=function(e,t,n){var a,l,i,u,s,c,d=0,f=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=a,r=l;return a=l=void 0,d=t,u=e.apply(r,n)}function g(e){var n=e-c;return void 0===c||n>=t||n<0||p&&e-d>=i}function w(){var e=o();if(g(e))return _(e);s=setTimeout(w,function(e){var n=t-(e-c);return p?h(n,i-(e-d)):n}(e))}function _(e){return s=void 0,v&&a?y(e):(a=l=void 0,u)}function k(){var e=o(),n=g(e);if(a=arguments,l=this,c=e,n){if(void 0===s)return function(e){return d=e,s=setTimeout(w,t),f?y(e):u}(c);if(p)return clearTimeout(s),s=setTimeout(w,t),y(c)}return void 0===s&&(s=setTimeout(w,t)),u}return t=m(t)||0,(0,r.Z)(n)&&(f=!!n.leading,i=(p="maxWait"in n)?b(m(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==s&&clearTimeout(s),d=0,a=c=l=s=void 0},k.flush=function(){return void 0===s?u:_(o())},k}},2433:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},3795:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=function(e){return null!=e&&"object"==typeof e}},8111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(9572),a=n(3795);const o=function(e){return"symbol"==typeof e||(0,a.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}}}]);