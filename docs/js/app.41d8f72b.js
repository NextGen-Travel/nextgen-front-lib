(function(){"use strict";var t={1243:function(t,e,n){n(6531),n(6876);var o=n(144),i=n(3381),r=n(9088),a=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",[e(n.Block,{attrs:{title:n.basic.title,desc:n.basic.desc,code:n.basic.code}},[e("ng-table",{attrs:{filterTitle:"過濾",fields:n.basic.data.fields,items:n.basic.data.items,filterShow:!0},scopedSlots:t._u([{key:"t-actions",fn:function({item:o}){return[e(i.Z,{attrs:{icon:""},on:{click:function(t){return n.showAlert(o.name)}}},[e(r.Z,[t._v("mdi-music-note")])],1)]}}])})],1)],1)},s=[],l=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",[e("div",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"mb-2"},[t._v(t._s(t.desc))]),e("div",{staticClass:"mb-4 elevation-2"},[t._t("default")],2),e("div",{staticClass:"mb-4 elevation-2"},[t.code?e(n.Editor,{attrs:{mode:"html"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}):t._e()],1)])},u=[],c=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"rounded"},[n.state.show?e("codemirror",{attrs:{options:n.state.options},model:{value:n.code,callback:function(t){n.code=t},expression:"code"}}):t._e()],1)},f=[],d=n(4347),p=new d.Z,m=function(){return p.use()},v=(0,o.defineComponent)({__name:"editor",props:{value:{type:String,requreid:!1,default:function(){return"<div>123</div>"}},readonly:{type:Boolean,requreid:!1,default:function(){return!0}},mode:{type:String,required:!1,default:function(){return"javascript"}}},emits:{input:function(t){return!0}},setup:function(t,e){var n=e.emit,i=t,r=m(),a=r.data({show:!1,options:{tabSize:4,mode:"javascript",theme:"default",lineNumbers:!0,readOnly:i.readonly,line:!0}}),s=(0,o.computed)({get:function(){return i.value},set:function(t){return n("input",t)}});return(0,o.onMounted)((function(){"javascript"===i.mode&&(a.options.mode="javascript"),"html"===i.mode&&(a.options.mode="text/html"),r.nextTick((function(){a.show=!0}))})),{__sfc:!0,self:r,props:i,emit:n,state:a,code:s}}}),b=v,_=n(1001),h=(0,_.Z)(b,c,f,!1,null,null,null),y=h.exports,g=(0,o.defineComponent)({__name:"block",props:{title:{type:String,requreid:!1,default:function(){return""}},desc:{type:String,requreid:!1,default:function(){return""}},code:{type:String,requreid:!1,default:function(){return""}}},setup:function(t){var e=t;return{__sfc:!0,props:e,Editor:y}}}),k=g,w=(0,_.Z)(k,l,u,!1,null,null,null),x=w.exports,S=function(t){var e="\n        <template>\n            ".concat(t.template.trim(),'\n        </template>   \n        <script lang="ts" setup>\n            ').concat(t.script.trim(),"\n        <\/script>\n    "),n=e.split("\n")[1].split("<template>")[0].length;return e.split("\n").map((function(t){return t.slice(n)})).join("\n").trim()},Z=n(828),C=(0,o.defineComponent)({__name:"table",setup:function(t){var e=m(),n=e.data({title:"Basic",desc:"ouo",data:{fields:(0,Z.e)([{key:"name",label:"姓名"},{key:"age",label:"年齡",optionShow:!0},{key:"isAdult",label:"已成年",formatter:function(t,e,n){return n.age>=18?"是":"否"}},{key:"actions",label:"動作"}]),items:[{name:"小白",age:20},{name:"小明",age:15}]},code:S({template:'\n            <ng-table\n                filterTitle="過濾"\n                :filterShow="true"\n                :fields="basic.data.fields"\n                :items="basic.data.items">\n                <template #t-actions="{ item }">\n                    <v-btn icon @click="showAlert(item.name)">\n                        <v-icon>mdi-music-note</v-icon>\n                    </v-btn>\n                </template>\n            </ng-table>\n        ',script:"\n            import { reactive } from 'vue'\n            const state = reactive({\n                fields: defineFields([\n                    {\n                        key: 'name',\n                        label: '姓名'\n                    },\n                    {\n                        key: 'age',\n                        label: '年齡',\n                        optionShow: true\n                    },\n                    {\n                        key: 'isAdult',\n                        label: '已成年',\n                        formatter: (value, key, item) => item.age >= 18 ? '是' : '否'\n                    },\n                    {\n                        key: 'actions',\n                        label: '動作'\n                    }\n                ]),\n                items: [\n                    {\n                        name: '小白',\n                        age: 20\n                    },\n                    {\n                        name: '小明',\n                        age: 18\n                    }\n                ]\n            })\n            const showAlert = (name: string) => {\n                alert(`Hello ${name}.`)\n            }\n        "})}),o=function(t){alert("Hello ".concat(t,"."))};return{__sfc:!0,self:e,basic:n,showAlert:o,Block:x}}}),O=C,j=(0,_.Z)(O,a,s,!1,null,null,null),P=j.exports;o["default"].component("doc-table",P);var T=n(3726),q=n(1473),A=n(1819),B=n(7690),M=n(7970),E=n(5384),F=n(1667),H=n(8629),V=n(3102),$=n(2043),z=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(T.Z,[e($.Z,{attrs:{app:""}},[e(M.Z,{attrs:{nav:"",dense:""}},t._l(n.state.navs,(function(n,o){return e(E.Z,{key:o,attrs:{value:!0,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e(H.km,[e(H.V9,[t._v(t._s(o))])],1)]},proxy:!0}],null,!0)},t._l(n,(function(n){return e(F.Z,{key:n.name,attrs:{link:""},on:{click:n.click}},[e(H.V9,{domProps:{textContent:t._s(n.name)}})],1)})),1)})),1)],1),e(q.Z,{attrs:{app:""}}),e(V.Z,[e(A.Z,{attrs:{fluid:""}},[e("h1",[t._v(t._s(n.state.title))]),e(B.Z,{staticClass:"mt-2 mb-3"}),n.state.doc&&n.state.show?e(n.state.doc,{tag:"component"}):t._e()],1)],1)],1)},I=[],N=(0,o.defineComponent)({__name:"app",setup:function(t){var e=m(),n=e.data({doc:"",show:!1,title:"",navs:{Components:[{name:"table",click:function(){n.doc="doc-table",n.title="Component Table"}}]}});return(0,o.watch)((function(){return n.doc}),(function(){n.show=!1,e.nextTick((function(){n.show=!0}))})),{__sfc:!0,self:e,state:n}}}),U=N,D=(0,_.Z)(U,z,I,!1,null,null,null),G=D.exports,J=n(5043),K=n(5464),L=n.n(K),Q=n(5055),R=n.n(Q);o["default"].use(L());var W=new(L())({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#09244b",secondary:"#ebeef7",info:"#3250ac",muted:"#ddd"}},options:{customProperties:!0}}});o["default"].config.productionTip=!1,o["default"].use(J.ZP,{hooks:o,options:{staticUrl:"./static",notFoundImage:"not-found.png"}}),o["default"].use(R(),{options:{theme:"base16-dark"}}),new o["default"]({vuetify:W,render:function(t){return t(G)}}).$mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var c=l(n)}for(e&&e(o);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkplayground"]=self["webpackChunkplayground"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1243)}));o=n.O(o)})();
//# sourceMappingURL=app.41d8f72b.js.map