webpackJsonp([0xd2a57dc1d883],{155:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(652),options:{plugins:[]}},{plugin:t(655),options:{plugins:[]}},{plugin:t(653),options:{plugins:[]}}]},441:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(615),"component---src-templates-category-template-js":t(622),"component---src-templates-post-template-js":t(624),"component---src-templates-page-template-js":t(623),"component---src-pages-404-js":t(617),"component---src-pages-category-js":t(618),"component---src-pages-contact-js":t(619),"component---src-pages-index-js":t(620),"component---src-pages-search-js":t(621)},e.json={"layout-index.json":t(625),"offline-plugin-app-shell-fallback.json":t(642),"category-thought.json":t(633),"category-reading-notes.json":t(631),"category-yoga.json":t(634),"category-blog.json":t(630),"category-sayings.json":t(632),"time-management.json":t(647),"put-yourself.json":t(643),"why-you-are-angry.json":t(650),"who-are-you.json":t(648),"communicate-with-someone.json":t(635),"compound-interest.json":t(636),"the-way-to-happiness.json":t(646),"who-will-cry-at-your-funeral.json":t(649),"hi-yoga.json":t(640),"first-blog-on-gatsby.json":t(639),"draft-post.json":t(638),"about.json":t(628),"success.json":t(645),"404.json":t(626),"category.json":t(629),"contact.json":t(637),"index.json":t(641),"search.json":t(644),"404-html.json":t(627)},e.layouts={"layout---index":t(616)}},442:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),s=o(i),l=t(2),p=o(l),f=t(269),d=o(f),m=t(119),h=o(m),g=t(155),y=t(937),j=o(y),x=function(n){var e=n.children;return s.default.createElement("div",null,e())},v=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=c({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=c({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(s.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},119:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(810),a=o(r),u=(0,a.default)();n.exports=u},443:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(153),a=t(270),u=o(a),c={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),c[a])return c[a];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return i=n,c[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return i=n,c[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return i=n,c[a]=n,!0}return!1}),i}}},444:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(190),a=o(r),u=t(155),c=(0,u.apiRunner)("replaceHistory"),i=c[0],s=i||(0,a.default)();n.exports=s},627:function(n,e,t){t(4),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(664)})})}},626:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(665)})})}},628:function(n,e,t){t(4),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(666)})})}},630:function(n,e,t){t(4),n.exports=function(n){return t.e(99869901380991,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(667)})})}},631:function(n,e,t){t(4),n.exports=function(n){return t.e(0xf5746bd249d5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(668)})})}},632:function(n,e,t){t(4),n.exports=function(n){return t.e(0xf8217a05b0e6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(669)})})}},633:function(n,e,t){t(4),n.exports=function(n){return t.e(53937850974867,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(670)})})}},634:function(n,e,t){t(4),n.exports=function(n){return t.e(69128309098937,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(671)})})}},629:function(n,e,t){t(4),n.exports=function(n){return t.e(0x68a3bb584008,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(672)})})}},635:function(n,e,t){t(4),n.exports=function(n){return t.e(3521929505994,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(673)})})}},636:function(n,e,t){t(4),n.exports=function(n){return t.e(0x8cf5295a823a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(674)})})}},637:function(n,e,t){t(4),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(675)})})}},638:function(n,e,t){t(4),n.exports=function(n){return t.e(0xacdbfcf591a5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(676)})})}},639:function(n,e,t){t(4),n.exports=function(n){return t.e(87580909021316,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(677)})})}},640:function(n,e,t){t(4),n.exports=function(n){return t.e(0xcf53fa39759c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(678)})})}},641:function(n,e,t){t(4),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(679)})})}},625:function(n,e,t){t(4),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(193)})})}},642:function(n,e,t){t(4),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(680)})})}},643:function(n,e,t){t(4),n.exports=function(n){return t.e(78771511342856,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(681)})})}},644:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe7884ae5879b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(682)})})}},645:function(n,e,t){t(4),n.exports=function(n){return t.e(0x9b544cfa2a85,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(683)})})}},646:function(n,e,t){t(4),n.exports=function(n){return t.e(84294844037523,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(684)})})}},647:function(n,e,t){t(4),n.exports=function(n){return t.e(9729432580216,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(685)})})}},648:function(n,e,t){t(4),n.exports=function(n){return t.e(78679147110751,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(686)})})}},649:function(n,e,t){t(4),n.exports=function(n){return t.e(0xde00008b4069,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(687)})})}},650:function(n,e,t){t(4),n.exports=function(n){return t.e(73972739668502,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(688)})})}},616:function(n,e,t){t(4),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(445)})})}},269:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(443)),u=o(a),c=t(119),i=o(c),s=t(270),l=o(s),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",w=[],b={},C=function(n){return n&&n.default||n},N=void 0,R=!0,k=[],_={},P={},E=5;N=t(446)({getNextQueuedResources:function(){return w.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){w=w.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var L=function(n,e){return b[n]>b[e]?1:b[n]<b[e]?-1:0},O=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=C(o());g[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},b={},w=[],y=[],v=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(O);var o=p(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,w.indexOf(o.jsonName)!==-1||h[o.jsonName]||w.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,w.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||w.unshift(o.componentChunkName)),w.sort(L),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:w,resourcesCount:b}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,c=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,c()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=e,c()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,c()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(115))},689:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-thought.json",path:"/category/thought/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-reading-notes.json",path:"/category/reading-notes/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-yoga.json",path:"/category/yoga/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-blog.json",path:"/category/blog/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category-sayings.json",path:"/category/sayings/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"time-management.json",path:"/Time-management/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"put-yourself.json",path:"/Put-yourself/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"why-you-are-angry.json",path:"/Why-you-are-angry/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"who-are-you.json",path:"/who-are-you/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"communicate-with-someone.json",path:"/communicate-with-someone/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"compound-interest.json",path:"/Compound-interest/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"the-way-to-happiness.json",path:"/the-way-to-happiness/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"who-will-cry-at-your-funeral.json",path:"/who-will-cry-at-your-funeral/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"hi-yoga.json",path:"/hi-yoga/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"first-blog-on-gatsby.json",path:"/first-blog-on-gatsby/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"draft-post.json",path:"/draft-post/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"success.json",path:"/success/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-category-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"category.json",path:"/category/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-search-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"search.json",path:"/search/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},446:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(155),u=t(1),c=o(u),i=t(65),s=o(i),l=t(153),p=t(661),f=t(596),d=o(f),m=t(192),h=t(444),g=o(h),y=t(119),j=o(y),x=t(689),v=o(x),w=t(690),b=o(w),C=t(442),N=o(C),R=t(441),k=o(R),_=t(269),P=o(_);t(497),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),L=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};L(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){L(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(447);var o=function(n,e){function t(n){n.page.path===P.default.getPage(r).path&&(j.default.off("onPostLoadPageResources",t),clearTimeout(i),c(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var c=e?window.___history.replace:window.___history.push,i=setTimeout(function(){j.default.off("onPostLoadPageResources",t),j.default.emit("onDelayedLoadPageResources",{pathname:r}),c(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),c(o)):j.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return c.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(N.default,r({page:!0},o)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,a.apiRunner)("replaceHydrateFunction",void 0,s.default.render)[0];(0,d.default)(function(){return i(c.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},690:function(n,e){n.exports=[]},447:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(119),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},270:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},596:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},4:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var c=!1,i=!0,s=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void s(!0):(r(o,function(){c||(c=!0,i?setTimeout(function(){s()}):s())}),void(c||(i=!1,n(function(){c||(c=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),s(!0))}))))}}o()},651:function(n,e,t){"use strict";var o=t(32);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,r=n.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var c=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!c.test(""+a.host+a.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},652:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(32),a=t(651),u=o(a);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,r.navigateTo)(n)})}},653:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},615:function(n,e,t){t(4),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(654)})})}},655:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},810:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},115:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&c())}function c(){if(!h){var n=r(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function s(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||h||r(c)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=s,f.addListener=s,f.once=s,f.off=s,f.removeListener=s,f.removeAllListeners=s,f.emit=s,f.prependListener=s,f.prependOnceListener=s,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},937:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},617:function(n,e,t){t(4),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(472)})})}},618:function(n,e,t){t(4),n.exports=function(n){return t.e(0x6bb91e53a7a7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(473)})})}},619:function(n,e,t){t(4),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(474)})})}},620:function(n,e,t){t(4),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(475)})})}},621:function(n,e,t){t(4),n.exports=function(n){return t.e(0x81e20e680ce7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(476)})})}},622:function(n,e,t){t(4),n.exports=function(n){return t.e(78839606078735,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(477)})})}},623:function(n,e,t){t(4),n.exports=function(n){return t.e(0xd5d9d741ef0b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(478)})})}},624:function(n,e,t){t(4),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(479)})})}}});
//# sourceMappingURL=app-84a61e7c9a9a24457c3b.js.map