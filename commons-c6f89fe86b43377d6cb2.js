(self.webpackChunkaureliendud_website=self.webpackChunkaureliendud_website||[]).push([[351],{7314:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/7286a748878bf7d6e9124606efa19792/fc4a5/logo.png","srcSet":"/static/7286a748878bf7d6e9124606efa19792/c27bc/logo.png 11w,\\n/static/7286a748878bf7d6e9124606efa19792/4b259/logo.png 21w,\\n/static/7286a748878bf7d6e9124606efa19792/fc4a5/logo.png 42w,\\n/static/7286a748878bf7d6e9124606efa19792/74bab/logo.png 84w","sizes":"(min-width: 42px) 42px, 100vw"},"sources":[{"srcSet":"/static/7286a748878bf7d6e9124606efa19792/32806/logo.webp 11w,\\n/static/7286a748878bf7d6e9124606efa19792/8bc71/logo.webp 21w,\\n/static/7286a748878bf7d6e9124606efa19792/544ae/logo.webp 42w,\\n/static/7286a748878bf7d6e9124606efa19792/c5e44/logo.webp 84w","type":"image/webp","sizes":"(min-width: 42px) 42px, 100vw"}]},"width":42,"height":42}')},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,o=e.attr,i=e.size,l=e.title,u=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},5610:function(e,t,n){"use strict";var r=n(7294),o=n(3794),i=n(1974),a=n(9666);t.Z=function(){var e;return r.createElement("div",{className:"bg-secondary small text-light py-3 text-center text-md-left"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row align-items-center justify-content-between"},r.createElement("div",{className:"col col-md-auto order-md-2"},r.createElement("div",{className:"d-flex flex-column flex-md-row"},r.createElement("div",{className:"nav-link"},r.createElement(i.Z,{to:(0,o.B)("legal").href,className:"text-light"},(0,o.B)("legal").label)))),r.createElement("div",{className:"col col-md-auto order-md-1"},null===a.Z||void 0===a.Z||null===(e=a.Z.global)||void 0===e?void 0:e.copyright))))}},9219:function(e,t,n){"use strict";var r=n(7294),o=n(5444),i=n(1974),a=n(1870),c=n(3794),l=n(9463),u="nav-link font-weight-bold h4 text-current";t.Z=function(){var e=(0,o.K2)("1789751783"),t=(0,r.useState)(""),s=t[0],f=t[1];return(0,r.useEffect)((function(){var t,n;return f((null==e||null===(t=e.meta)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.title)||"")}),[e]),r.createElement(r.Fragment,null,r.createElement("div",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top"},r.createElement("div",{className:"container"},r.createElement(i.Z,{className:"navbar-brand",to:(0,c.B)("home").href,title:(0,c.B)("home").label},r.createElement(a.S,{src:"../assets/images/logo.png",width:42,height:42,className:"d-inline-block align-top",alt:s,__imageData:n(7314)})),r.createElement("div",{className:"d-flex ml-auto"},r.createElement(i.Z,{to:(0,c.B)("github").href,title:(0,c.B)("github").label,className:u,target:"_blank"},r.createElement(l.pZu,null)),r.createElement(i.Z,{to:(0,c.B)("linkedin").href,title:(0,c.B)("linkedin").label,className:u,target:"_blank"},r.createElement(l.n7M,null))))))}},1974:function(e,t,n){"use strict";var r=n(9756),o=n(7294),i=n(5444);t.Z=function(e){var t=e.to,n=e.children,a=(0,r.Z)(e,["to","children"]);return o.createElement(o.Fragment,null,null!==t.match(/^(\/\/|www.|http|https|#)/)?o.createElement("a",Object.assign({href:t},a),n):o.createElement(i.rU,Object.assign({to:t},a),n))}},9666:function(e,t){"use strict";t.Z={home:{introTitle:"Designer & developpeur",introText:"\n      Les frontières entre les disciplines sont minces et il est\n      riche d'enseignement de les franchir. Ma vision de la\n      conception de projets web est faite de convergences et de\n      partis pris acquis au fil d'un parcours melant arts,\n      industrie, design et developpement informatique.\n    "},blog:{title:"Articles de blog"},global:{copyright:"© 2021 Aurélien Dudonney"},errors:{notfound:{title:"404",text:"L'adresse demandé de produit pas de résultat...",action:"Accéder à la page d'accueil"}}}},3794:function(e,t,n){"use strict";n.d(t,{B:function(){return o}});var r={home:{label:"Accueil",href:"/"},legal:{label:"Mentions légales",href:"/mentions-legales"},github:{label:"Github",href:"https://github.com/AurelienDud"},linkedin:{label:"LinkedIn",href:"https://www.linkedin.com/in/aureliendudonney/"}};function o(e,t){void 0===t&&(t=null);var n={isRegistered:!1,label:null,href:null};return Object.prototype.hasOwnProperty.call(r,e)&&(n.isRegistered=!0,n.label=r[e].label||null,n.href=r[e].href||null),Array.isArray(t)&&t.length>0&&n.href&&(n.href=n.href.concat("?").concat(t.filter((function(e){return Array.isArray(e)})).map((function(e){return e.join("=")})).join("&"))),n}},9779:function(e,t,n){"use strict";n.d(t,{Z:function(){return we}});var r,o,i,a,c=n(7294),l=n(5444),u=n(5697),s=n.n(u),f=n(4839),p=n.n(f),d=n(2993),m=n.n(d),h=n(6494),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",O="href",A="http-equiv",C="innerHTML",S="itemprop",k="name",j="property",x="rel",P="src",N="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",_="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Z="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,w.TITLE),n=X(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},$=function(e){return X(e,B)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===x&&"canonical"===e[n].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=y()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),le(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,u),styleTags:se(w.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Z),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Z):n.getAttribute(Z)!==a.join(",")&&n.setAttribute(Z,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Z,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Z]=!0,o=pe(n,r),[c.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=fe(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Z]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(b,n,r),htmlAttributes:de(g,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,u,r),title:de(w.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:J([O,N],e),bodyAttributes:G(b,e),defer:X(e,M),encode:X(e,_),htmlAttributes:G(g,e),linkTags:Q(w.LINK,[x,O],e),metaTags:Q(w.META,[k,T,A,j,S],e),noscriptTags:Q(w.NOSCRIPT,[C],e),onChangeClientState:$(e),scriptTags:Q(w.SCRIPT,[P,C],e),styleTags:Q(w.STYLE,[E],e),title:V(e),titleAttributes:G(v,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),me)((function(){return null})),ye=(o=he,a=i=function(e){function t(){return H(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case w.BODY:return Y({},o,{bodyAttributes:Y({},i)});case w.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(U(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},z(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var be=ye;var ge=function(e){var t=e.title,n=e.siteTitle,r=e.description,o=e.lang,i=e.author,a=e.keywords,l=e.meta;return c.createElement(be,{htmlAttributes:{lang:o},title:t||n,titleTemplate:"%s | "+n,meta:[{name:"description",content:r},{property:"og:title",content:n},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i},{name:"twitter:title",content:n},{name:"twitter:description",content:r}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(l)})};function ve(e){var t=e.children,n=e.meta;return c.createElement(l.i1,{query:"3521639313",render:function(e){return c.createElement(c.Fragment,null,c.createElement(ge,function(e,t){return{title:t.title||"",siteTitle:e.site.siteMetadata.title||"",description:t.description||e.site.siteMetadata.description||"",lang:t.lang||"fr",author:t.author||e.site.siteMetadata.author||"",keywords:t.keywords||[],meta:t.meta||[]}}(e,n)),t)}})}ve.defaultProps={children:null,meta:{}};var we=ve}}]);
//# sourceMappingURL=commons-c6f89fe86b43377d6cb2.js.map