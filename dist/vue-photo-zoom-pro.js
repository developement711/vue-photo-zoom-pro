!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vuePhotoZoomPro",[],t):"object"==typeof exports?exports.vuePhotoZoomPro=t():e.vuePhotoZoomPro=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,o){"use strict";t.a={name:"vue-photo-zoom-pro",data:function(){return{selector:{width:166,halfWidth:83,top:0,left:0,bgTop:0,bgLeft:0,rightBound:0,bottomBound:0,absoluteLeft:0,absoluteTop:0},imgInfo:{},hideOutShow:!0,imgLoadedFlag:!1}},props:{url:String,highUrl:String,type:{type:String,default:"square",validator:function(e){return-1!==["circle","square"].indexOf(e)}},scale:{type:Number,default:3},moveEvent:{type:[Object,MouseEvent],default:null},leaveEvent:{type:[Object,MouseEvent],default:null},hideZoom:{type:Boolean,default:!1},outShow:{type:Boolean,default:!1}},watch:{moveEvent:function(e){this.mouseMove(e)},leaveEvent:function(e){this.mouseLeave(e)},url:function(){this.imgLoadedFlag=!1}},computed:{imgSelectorPosition:function(){var e=this.selector;return{top:e.top+"px",left:e.left+"px"}},imgSelectorSize:function(){var e=this.selector.width;return{width:e+"px",height:e+"px"}},imgOutShowSize:function(){var e=this.scale,t=this.selector.width;return{width:t*e+"px",height:t*e+"px"}},imgSelectorBg:function(){var e=this.scale,t=this.url,o=this.highUrl,n=this.imgInfo,r=n.height,i=n.width;return{backgroundImage:"url("+(o||t)+")",backgroundSize:i*e+"px "+r*e+"px"}},imgBgPosition:function(){var e=this.selector;return{backgroundPosition:e.bgLeft+"px "+e.bgTop+"px"}}},methods:{imgLoaded:function(){this.imgLoadedFlag=!0;var e=this.imgInfo=this.$refs.img.getBoundingClientRect(),t=e.width,o=e.height,n=e.left,r=e.top,i=this.selector,s=i.width,a=i.halfWidth;Object.assign(i,{absoluteLeft:n+a,absoluteTop:r+a+document.documentElement.scrollTop,rightBound:t-s,bottomBound:o-s})},reset:function(){Object.assign(this.selector,{top:0,left:0,bgLeft:0,bgTop:0})},mouseMove:function(e){if(!this.hideZoom&&this.imgLoadedFlag){var t=e.pageX,o=e.pageY,n=this.scale,r=this.selector,i=r.halfWidth,s=r.absoluteLeft,a=r.absoluteTop,u=r.rightBound,c=r.bottomBound,d=t-s,l=o-a;this.outShow&&(i=0,this.hideOutShow=!1),Object.assign(r,{top:l>0?l<c?l:c:0,left:d>0?d<u?d:u:0,bgLeft:i-(i+d)*n,bgTop:i-(i+l)*n})}},mouseLeave:function(){this.outShow&&(this.hideOutShow=!0)}}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),r={install:function(e,t){e.component(n.a.name,n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,o){"use strict";function n(e){o(3)}var r=o(0),i=o(9),s=o(8),a=n,u=s(r.a,i.a,!1,a,"data-v-02010782",null);t.a=u.exports},function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(6)("2f9fefb7",n,!0,{})},function(e,t,o){t=e.exports=o(5)(!1),t.push([e.i,".img-container[data-v-02010782]{position:relative}.img-selector[data-v-02010782]{position:absolute;background-color:rgba(0,0,0,.6);background-repeat:no-repeat;cursor:crosshair;border:1px solid rgba(0,0,0,.1)}.img-selector.circle[data-v-02010782]{border-radius:50%}.img-out-show[data-v-02010782]{position:absolute;top:0;right:0;background-repeat:no-repeat;transform:translate(100%);border:1px solid rgba(0,0,0,.1)}",""])},function(e,t){function o(e,t){var o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=n(r);return[o].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([i]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=d[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(i(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(i(o.parts[r]));d[o.id]={id:o.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,o,n=document.querySelector("style["+v+'~="'+e.id+'"]');if(n){if(h)return g;n.parentNode.removeChild(n)}if(b){var i=p++;n=f||(f=r()),t=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=r(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var o=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),m.ssrId&&e.setAttribute(v,t.id),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=o(7),d={},l=u&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},m=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o,r){h=o,m=r||{};var i=c(e,t);return n(i),function(t){for(var o=[],r=0;r<i.length;r++){var s=i[r],a=d[s.id];a.refs--,o.push(a)}t?(i=c(e,t),n(i)):i=[];for(var r=0;r<o.length;r++){var a=o[r];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],u=i[2],c=i[3],d={id:e+":"+r,css:a,media:u,sourceMap:c};n[s]?n[s].parts.push(d):o.push(n[s]={id:s,parts:[d]})}return o}},function(e,t){e.exports=function(e,t,o,n,r,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId=r);var d;if(i?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):n&&(d=n),d){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=d,c.render=function(e,t){return d.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,d):[d]}return{esModule:s,exports:a,options:c}}},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.url?o("div",{staticClass:"pic-img"},[o("div",{staticClass:"img-container",on:{mousemove:function(t){!e.moveEvent&&e.mouseMove(t)},mouseleave:function(t){!e.leaveEvent&&e.mouseLeave(t)}}},[o("img",{ref:"img",staticStyle:{width:"100%"},attrs:{src:e.url},on:{load:e.imgLoaded}}),e._v(" "),!e.hideZoom&&e.imgLoadedFlag?o("div",{class:["img-selector",{circle:"circle"===e.type}],style:[e.imgSelectorSize,e.imgSelectorPosition,!e.outShow&&e.imgSelectorBg,!e.outShow&&e.imgBgPosition]}):e._e(),e._v(" "),e.outShow?o("div",{directives:[{name:"show",rawName:"v-show",value:!e.hideOutShow,expression:"!hideOutShow"}],staticClass:"img-out-show",style:[e.imgOutShowSize,e.imgSelectorBg,e.imgBgPosition]}):e._e()])]):e._e()},r=[],i={render:n,staticRenderFns:r};t.a=i}])});
//# sourceMappingURL=vue-photo-zoom-pro.js.map