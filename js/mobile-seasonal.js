/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*!
 * jQuery UI 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.14",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mousedown(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==
false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;this.helper=
this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.14"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.14"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parentsUntil("body").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=
!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parentsUntil("body").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),l=0;l=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,l);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){if(!a.disabled){e(this).removeClass("ui-resizable-autohide");b._handles.show()}},function(){if(!a.disabled)if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=
false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff=
{width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},
_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,
{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateVirtualBoundaries:function(b){var a=this.options,c,d,f;a={minWidth:k(a.minWidth)?a.minWidth:0,maxWidth:k(a.maxWidth)?a.maxWidth:Infinity,minHeight:k(a.minHeight)?a.minHeight:0,maxHeight:k(a.maxHeight)?a.maxHeight:
Infinity};if(this._aspectRatio||b){b=a.minHeight*this.aspectRatio;d=a.minWidth/this.aspectRatio;c=a.maxHeight*this.aspectRatio;f=a.maxWidth/this.aspectRatio;if(b>a.minWidth)a.minWidth=b;if(d>a.minHeight)a.minHeight=d;if(c<a.maxWidth)a.maxWidth=c;if(f<a.maxHeight)a.maxHeight=f}this._vBoundaries=a},_updateCache:function(b){this.offset=this.helper.offset();if(k(b.left))this.position.left=b.left;if(k(b.top))this.position.top=b.top;if(k(b.height))this.size.height=b.height;if(k(b.width))this.size.width=
b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(k(b.height))b.width=b.height*this.aspectRatio;else if(k(b.width))b.height=b.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this._vBoundaries,c=this.axis,d=k(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=k(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=k(b.width)&&a.minWidth&&
a.minWidth>b.width,h=k(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,l=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&l)b.left=i-a.minWidth;if(d&&l)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=
null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||
0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+
a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+
c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);
b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.14"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),
10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-
f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var l=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:l.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(l.css("position"))){c._revertToRelativePosition=true;l.css({position:"absolute",top:"auto",left:"auto"})}l.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?
e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=
e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,
step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=
e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;
var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:
a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-
d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,
f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,
display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=
e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=
d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},k=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.14"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.14"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.14",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.scrollTop(),c=this.element.height();if(b<0)this.element.scrollTop(g+b);else b>=c&&this.element.scrollTop(g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,
this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||
this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element[d.fn.prop?"prop":"attr"]("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(b){var h,i,j,g,l=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},k=function(a){var c=a.name,e=a.form,f=b([]);if(c)f=e?b(e).find("[name='"+c+"']"):b("[name='"+c+"']",a.ownerDocument).filter(function(){return!this.form});return f};b.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",l);if(typeof this.options.disabled!==
"boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,c=this.options,e=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!e?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",function(){if(!c.disabled){b(this).addClass("ui-state-hover");
this===h&&b(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||b(this).removeClass(f)}).bind("click.button",function(d){if(c.disabled){d.preventDefault();d.stopImmediatePropagation()}});this.element.bind("focus.button",function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur.button",function(){a.buttonElement.removeClass("ui-state-focus")});if(e){this.element.bind("change.button",function(){g||a.refresh()});this.buttonElement.bind("mousedown.button",function(d){if(!c.disabled){g=
false;i=d.pageX;j=d.pageY}}).bind("mouseup.button",function(d){if(!c.disabled)if(i!==d.pageX||j!==d.pageY)g=true})}if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled||g)return false;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed",true);
var d=a.element[0];k(d).not(d).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;b(this).addClass("ui-state-active");h=this;b(document).one("mouseup",function(){h=null})}).bind("mouseup.button",function(){if(c.disabled)return false;b(this).removeClass("ui-state-active")}).bind("keydown.button",function(d){if(c.disabled)return false;if(d.keyCode==b.ui.keyCode.SPACE||
d.keyCode==b.ui.keyCode.ENTER)b(this).addClass("ui-state-active")}).bind("keyup.button",function(){b(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(d){d.keyCode===b.ui.keyCode.SPACE&&b(this).click()})}this._setOption("disabled",c.disabled);this._resetButton()},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type===
"radio"){var a=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=a.find(c);if(!this.buttonElement.length){a=a.length?a.siblings():this.element.siblings();this.buttonElement=a.filter(c);if(!this.buttonElement.length)this.buttonElement=a.find(c)}this.element.addClass("ui-helper-hidden-accessible");(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",a)}else this.buttonElement=this.element},
widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());this.hasTitle||this.buttonElement.removeAttr("title");
b.Widget.prototype.destroy.call(this)},_setOption:function(a,c){b.Widget.prototype._setOption.apply(this,arguments);if(a==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");else this._resetButton()},refresh:function(){var a=this.element.is(":disabled");a!==this.options.disabled&&this._setOption("disabled",a);if(this.type==="radio")k(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",true):
b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,d=[];if(e.primary||e.secondary){if(this.options.text)d.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary"));e.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>");e.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>");if(!this.options.text){d.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||a.attr("title",c)}}else d.push("ui-button-text-only");a.addClass(d.join(" "))}}});b.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(a,c){a==="disabled"&&this.buttons.button("option",a,c);b.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){var a=this.element.css("direction")===
"ltr";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a?"ui-corner-left":"ui-corner-right").end().filter(":last").addClass(a?"ui-corner-right":"ui-corner-left").end().end()},destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return b(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
b.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,l){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},n={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},o=c.attrFn||{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true,click:true};c.widget("ui.dialog",{options:{appendTo:document.body,autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,
position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(this.options.appendTo).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+
b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),
h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",
e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();a.originalTitle&&a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){e=c(this).css("z-index");isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=
1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===
f[0]&&e.shiftKey){g.focus(1);return false}}});c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,
function(){return!(d=true)});if(d){c.each(a,function(f,h){h=c.isFunction(h)?{click:h,text:f}:h;var i=c('<button type="button"></button>').click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.each(h,function(j,k){if(j!=="click")j in o?i[j](k):i.attr(j,k)});c.fn.button&&i.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,
originalSize:f.originalSize,position:f.position,size:f.size}}a=a===l?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",
f,b(h))},stop:function(f,h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):
[a[0],a[1]];if(b.length===1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);
if(g in m)e=true;if(g in n)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=
this.options,b,d,e=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.14",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),
create:function(a){if(this.instances.length===0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,function(){a=
a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=a.values&&a.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(a.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(a.range){if(a.range===true){if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(a.range==="min"||a.range==="max"?" ui-slider-range-"+a.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(b.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!b.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");i=b._start(g,l);if(i===false)return}break}m=b.options.step;i=b.options.values&&b.options.values.length?
(h=b.values(l)):(h=b.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=b._valueMin();break;case d.ui.keyCode.END:h=b._valueMax();break;case d.ui.keyCode.PAGE_UP:h=b._trimAlignValue(i+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(i-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===b._valueMax())return;h=b._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===b._valueMin())return;h=b._trimAlignValue(i-
m);break}b._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(g,k);b._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(b){var a=this.options,c,f,e,j,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(a.range===true&&this.values(1)===a.min){g+=1;e=d(this.handles[g])}if(this._start(b,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();a=e.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-e.width()/2,top:b.pageY-a.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(b){var a=
this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;if(this.orientation==="horizontal"){a=
this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);
c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var f;if(this.options.values&&this.options.values.length){f=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>f||a===1&&c<f))c=f;if(c!==this.values(a)){f=this.values();f[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:f});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],value:c});
b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}else return this._value()},values:function(b,a){var c,f,e;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):
this.value();else return this._values()},_setOption:function(b,a){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,f=!this._animateOff?a.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},a.animate);
if(h===1)c.range[f?"animate":"css"]({width:e-g+"%"},{queue:false,duration:a.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},a.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:a.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[f?"animate":"css"]({width:e+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.14"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.14"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,C){function M(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=N(d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function N(a){return a.bind("mouseout",function(b){b=
d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");b.length&&b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")}).bind("mouseover",function(b){b=d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");if(!(d.datepicker._isDisabledDatepicker(J.inline?a.parent()[0]:J.input[0])||!b.length)){b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");b.addClass("ui-state-hover");
b.hasClass("ui-datepicker-prev")&&b.addClass("ui-datepicker-prev-hover");b.hasClass("ui-datepicker-next")&&b.addClass("ui-datepicker-next-hover")}})}function H(a,b){d.extend(a,b);for(var c in b)if(b[c]==null||b[c]==C)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.14"}});var A=(new Date).getTime(),J;d.extend(M.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){H(this._defaults,
a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,
selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:N(d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}},_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=
h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=
this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,
"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",
function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);
a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}H(a.settings,e||{});b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",
this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",
this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span"){b=
b.children("."+this._inlineClass);b.children().removeClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",
cursor:"default"})}else if(e=="div"||e=="span"){b=b.children("."+this._inlineClass);b.children().addClass("ui-state-disabled");b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled","disabled")}this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},
_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,
"max");H(e.settings,f);if(i!==null&&f.dateFormat!==C&&f.minDate===C)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==C&&f.maxDate===C)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDate(e,h);this._updateAlternate(e);this._updateDatepicker(e)}},_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,
b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);
c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);
c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||
a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=
d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==C?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);
d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);if(d.datepicker._curInst&&d.datepicker._curInst!=b){d.datepicker._datepickerShowing&&d.datepicker._triggerOnClose(d.datepicker._curInst);d.datepicker._curInst.dpDiv.stop(true,true)}var c=
d.datepicker._get(b,"beforeShow");H(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c=
{left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");var f=d.datepicker._get(b,"duration"),h=function(){var i=b.dpDiv.find("iframe.ui-datepicker-cover");
if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.datepicker._datepickerShowing=true;d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=b}}},_updateDatepicker:function(a){this.maxRows=4;var b=d.datepicker._getBorders(a.dpDiv);
J=a;a.dpDiv.empty().append(this._generateHTML(a));var c=a.dpDiv.find("iframe.ui-datepicker-cover");c.length&&c.css({left:-b[0],top:-b[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("."+this._dayOverClass+" a").mouseover();b=this._getNumberOfMonths(a);c=b[1];a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");c>1&&a.dpDiv.addClass("ui-datepicker-multi-"+c).css("width",17*c+"em");a.dpDiv[(b[0]!=1||b[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var e=a.yearshtml;setTimeout(function(){e===a.yearshtml&&a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);e=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||
c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+
i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_triggerOnClose:function(a){var b=this._get(a,"onClose");if(b)b.apply(a.input?a.input[0]:null,[a.input?a.input.val():"",a])},_hideDatepicker:function(a){var b=
this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?"fadeOut":"hide"](a?c:null,e);a||e();d.datepicker._triggerOnClose(b);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",
left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&
d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=
b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c=="M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=
!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);
a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));
d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%
100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=B+1<a.length&&a.charAt(B+1)==p)&&B++;return p},m=function(p){var D=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&D?4:p=="o"?3:2)+"}");p=b.substring(q).match(p);if(!p)throw"Missing number at position "+q;q+=
p[0].length;return parseInt(p[0],10)},n=function(p,D,K){p=d.map(o(p)?K:D,function(w,x){return[[x,w]]}).sort(function(w,x){return-(w[1].length-x[1].length)});var E=-1;d.each(p,function(w,x){w=x[1];if(b.substr(q,w.length).toLowerCase()==w.toLowerCase()){E=x[0];q+=w.length;return false}});if(E!=-1)return E+1;else throw"Unknown name at position "+q;},s=function(){if(b.charAt(q)!=a.charAt(B))throw"Unexpected literal at position "+q;q++},q=0,B=0;B<a.length;B++)if(k)if(a.charAt(B)=="'"&&!o("'"))k=false;
else s();else switch(a.charAt(B)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var v=new Date(m("@"));c=v.getFullYear();j=v.getMonth()+1;l=v.getDate();break;case "!":v=new Date((m("!")-this._ticksTo1970)/1E4);c=v.getFullYear();j=v.getMonth()+1;l=v.getDate();break;case "'":if(o("'"))s();else k=true;break;default:s()}if(q<b.length)throw"Extra/unparsed characters found in date: "+b.substring(q);
if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}v=this._daylightSavingAdjust(new Date(c,j-1,l));if(v.getFullYear()!=c||v.getMonth()+1!=j||v.getDate()!=l)throw"Invalid date";return v},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",
TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<
n;)m="0"+m;return m},j=function(o,m,n,s){return i(o)?s[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",Math.round(((new Date(b.getFullYear(),b.getMonth(),b.getDate())).getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5),3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",b.getMonth(),h,
c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==C?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+A+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var s=this._get(a,"nextText");s=!h?s:this.formatDate(s,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+A+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+s+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+s+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+s+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+s+"</span></a>";j=this._get(a,"currentText");s=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,s,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+A+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,s)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+A+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");s=this._get(a,"dayNames");this._get(a,"dayNamesShort");var q=this._get(a,"dayNamesMin"),B=
this._get(a,"monthNames"),v=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),D=this._get(a,"showOtherMonths"),K=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var E=this._getDefaultDate(a),w="",x=0;x<i[0];x++){var O="";this.maxRows=4;for(var G=0;G<i[1];G++){var P=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",y="";if(l){y+='<div class="ui-datepicker-group';if(i[1]>1)switch(G){case 0:y+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":
"left");break;case i[1]-1:y+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:y+=" ui-datepicker-group-middle";t="";break}y+='">'}y+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&x==0?c?f:n:"")+(/all|right/.test(t)&&x==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,x>0||G>0,B,v)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var z=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":
"";for(t=0;t<7;t++){var r=(t+h)%7;z+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+s[r]+'">'+q[r]+"</span></th>"}y+=z+"</tr></thead><tbody>";z=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,z);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;z=Math.ceil((t+z)/7);this.maxRows=z=l?this.maxRows>z?this.maxRows:z:z;r=this._daylightSavingAdjust(new Date(m,g,1-t));for(var Q=0;Q<z;Q++){y+="<tr>";var R=!j?"":'<td class="ui-datepicker-week-col">'+
this._get(a,"calculateWeek")(r)+"</td>";for(t=0;t<7;t++){var I=p?p.apply(a.input?a.input[0]:null,[r]):[true,""],F=r.getMonth()!=g,L=F&&!K||!I[0]||k&&r<k||o&&r>o;R+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(r.getTime()==P.getTime()&&g==a.selectedMonth&&a._keyEvent||E.getTime()==r.getTime()&&E.getTime()==P.getTime()?" "+this._dayOverClass:"")+(L?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!D?"":" "+I[1]+(r.getTime()==u.getTime()?" "+
this._currentClass:"")+(r.getTime()==b.getTime()?" ui-datepicker-today":""))+'"'+((!F||D)&&I[2]?' title="'+I[2]+'"':"")+(L?"":' onclick="DP_jQuery_'+A+".datepicker._selectDay('#"+a.id+"',"+r.getMonth()+","+r.getFullYear()+', this);return false;"')+">"+(F&&!D?"&#xa0;":L?'<span class="ui-state-default">'+r.getDate()+"</span>":'<a class="ui-state-default'+(r.getTime()==b.getTime()?" ui-state-highlight":"")+(r.getTime()==u.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+'" href="#">'+
r.getDate()+"</a>")+"</td>";r.setDate(r.getDate()+1);r=this._daylightSavingAdjust(r)}y+=R+"</tr>"}g++;if(g>11){g=0;m++}y+="</tbody></table>"+(l?"</div>"+(i[0]>0&&G==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");O+=y}w+=O}w+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return w},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),
l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+A+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+A+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+
n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&l)?"&#xa0;":""));if(!a.yearshtml){a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var s=(new Date).getFullYear();i=function(q){q=q.match(/c[+-].*/)?c+parseInt(q.substring(1),10):q.match(/[+-].*/)?s+parseInt(q,10):parseInt(q,10);return isNaN(q)?s:q};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):
g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+A+".datepicker._selectMonthYear('#"+a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+A+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=a.drawYear+(c==
"Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,"onChangeMonthYear");
if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!this.length)return this;if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,
[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new M;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.14";window["DP_jQuery_"+A]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggle(a>this.min).toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.14"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.14",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,
a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);
a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%",
"pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*
((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=
e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=
e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*
h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,
e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;/*
 * jQuery bValidator plugin
 *
 * http://code.google.com/p/bvalidator/
 *
 * Copyright (c) 2011 Bojan Mauser
 *
 * $Id: jquery.bvalidator.js 67 2011-06-18 13:18:50Z bmauser $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(a){a.fn.bValidator=function(b){return new bValidator(this,b)};bValidator=function(m,e){var i={singleError:false,offset:{x:-25,y:-3},position:{x:"right",y:"top"},template:'<div class="{errMsgClass}"><em/>{message}</div>',templateCloseIcon:'<div style="display:table"><div style="display:table-cell">{message}</div><div style="display:table-cell"><div class="{closeIconClass}" onclick="{closeErrMsg}">x</div></div></div>',showCloseIcon:true,showErrMsgSpeed:"normal",scrollToError:true,closeIconClass:"bvalidator_close_icon",errMsgClass:"bvalidator_errmsg",errorClass:"bvalidator_invalid",validClass:"",lang:"en",errorMessageAttr:"data-bvalidator-msg",validateActionsAttr:"data-bvalidator",paramsDelimiter:":",validatorsDelimiter:",",validateOn:null,errorValidateOn:"keyup",onBeforeValidate:null,onAfterValidate:null,onValidateFail:null,onValidateSuccess:null,onBeforeElementValidation:null,onAfterElementValidation:null,onBeforeAllValidations:null,onAfterAllValidations:null,errorMessages:{en:{"default":"Please correct this value.",equalto:"Please enter the same value again.",differs:"Please enter a different value.",minlength:"The length must be at least {0} characters",maxlength:"The length must be at max {0} characters",rangelength:"The length must be between {0} and {1}",min:"Please enter a number greater than or equal to {0}.",max:"Please enter a number less than or equal to {0}.",between:"Please enter a number between {0} and {1}.",required:"This field is required.",alpha:"Please enter alphabetic characters only.",alphanum:"Please enter alphanumeric characters only.",digit:"Please enter only digits.",number:"Please enter a valid number.",email:"Please enter a valid email address.",image:"This field should only contain image types",url:"Please enter a valid URL.",ip4:"Please enter a valid IPv4 address.",ip6:"Please enter a valid IPv6 address.",date:"Please enter a valid date in format {0}."}}},c=function(o){return o.is(":input")?o:o.find(":input["+i.validateActionsAttr+"]").not(":button, :image, :reset, :submit, :hidden, :disabled")
},j=function(o){o.bind(i.validateOn+".bV",{bVInstance:l},function(p){p.data.bVInstance.validate(false,a(this))})},h=function(q,p){g(q);msg_container=a('<div class="bVErrMsgContainer"></div>').css("position","absolute");q.data("errMsg.bV",msg_container);msg_container.insertAfter(q);var u="";for(var s in p){u+="<div>"+p[s]+"</div>\n"}if(i.showCloseIcon){u=i.templateCloseIcon.replace("{message}",u).replace("{closeIconClass}",i.closeIconClass).replace("{closeErrMsg}","$(this).closest('."+i.errMsgClass+"').css('visibility', 'hidden');")
}var o=a(i.template.replace("{errMsgClass}",i.errMsgClass).replace("{message}",u));o.appendTo(msg_container);var t=n(q,o);o.css({visibility:"visible",position:"absolute",top:t.top,left:t.left}).fadeIn(i.showErrMsgSpeed);if(i.scrollToError){var r=o.offset().top;if(k===null||r<k){k=r}}},g=function(o){var p=o.data("errMsg.bV");if(p){p.remove()}},n=function(v,r){var q=v.data("errMsg.bV"),s=-((q.offset().top-v.offset().top)+r.outerHeight()-i.offset.y),p=(v.offset().left+v.outerWidth())-q.offset().left+i.offset.x,u=i.position.x,t=i.position.y;
if(t=="center"||t=="bottom"){var w=r.outerHeight()+v.outerHeight();if(t=="center"){s+=w/2}if(t=="bottom"){s+=w}}if(u=="center"||u=="left"){var o=v.outerWidth();if(u=="center"){p-=o/2}if(u=="left"){p-=o}}return{top:s,left:p}},b=function(p,q,r,o){if(a.isFunction(i[p])){return i[p](q,r,o)}},d=function(p){var o={};if(p.is("input:checkbox")){o.value=p.attr("name")?o.selectedInGroup=a('input:checkbox[name="'+p.attr("name")+'"]:checked').length:p.attr("checked")}else{if(p.is("input:radio")){o.value=p.attr("name")?o.value=a('input:radio[name="'+p.attr("name")+'"]:checked').length:p.val()
}else{if(p.is("select")){o.selectedInGroup=a("option:selected",p).length;o.value=p.val()}else{if(p.is(":input")){o.value=p.val()}}}}return o},f={equalto:function(o,p){return o.value==a("#"+p).val()},differs:function(o,p){return o.value!=a("#"+p).val()},minlength:function(o,p){return(o.value.length>=parseInt(p))},maxlength:function(o,p){return(o.value.length<=parseInt(p))},rangelength:function(o,q,p){return(o.value.length>=parseInt(q)&&o.value.length<=parseInt(p))},min:function(o,p){if(o.selectedInGroup){return o.selectedInGroup>=parseFloat(p)
}else{if(!this.number(o)){return false}return(parseFloat(o.value)>=parseFloat(p))}},max:function(p,o){if(p.selectedInGroup){return p.selectedInGroup<=parseFloat(o)}else{if(!this.number(p)){return false}return(parseFloat(p.value)<=parseFloat(o))}},between:function(p,q,o){if(p.selectedInGroup){return(p.selectedInGroup>=parseFloat(q)&&p.selectedInGroup<=parseFloat(o))}if(!this.number(p)){return false}var r=parseFloat(p.value);return(r>=parseFloat(q)&&r<=parseFloat(o))},required:function(o){if(!o.value||!a.trim(o.value)){return false
}return true},alpha:function(o){return this.regex(o,/^[a-z ._\-]+$/i)},alphanum:function(o){return this.regex(o,/^[a-z\d ._\-]+$/i)},digit:function(o){return this.regex(o,/^\d+$/)},number:function(o){return this.regex(o,/^[-+]?\d+(\.\d+)?$/)},email:function(o){return this.regex(o,/^([a-zA-Z\d_\.\-\+%\'])+\@(([a-zA-Z\d\-])+\.)+([a-zA-Z\d]{2,4})+$/)},image:function(o){return this.regex(o,/\.(jpg|jpeg|png|gif|bmp)$/i)},url:function(o){return this.regex(o,/^(http|https|ftp)\:\/\/[a-z\d\-\.]+\.[a-z]{2,3}(:[a-z\d]*)?\/?([a-z\d\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/i)
},regex:function(o,q,p){if(typeof q==="string"){q=new RegExp(q,p)}return q.test(o.value)},ip4:function(o){return this.regex(o,/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/)},ip6:function(o){return this.regex(o,/^(?:(?:(?:[A-F\d]{1,4}:){5}[A-F\d]{1,4}|(?:[A-F\d]{1,4}:){4}:[A-F\d]{1,4}|(?:[A-F\d]{1,4}:){3}(?::[A-F\d]{1,4}){1,2}|(?:[A-F\d]{1,4}:){2}(?::[A-F\d]{1,4}){1,3}|[A-F\d]{1,4}:(?::[A-F\d]{1,4}){1,4}|(?:[A-F\d]{1,4}:){1,5}|:(?::[A-F\d]{1,4}){1,5}|:):(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)|(?:[A-F\d]{1,4}:){7}[A-F\d]{1,4}|(?:[A-F\d]{1,4}:){6}:[A-F\d]{1,4}|(?:[A-F\d]{1,4}:){5}(?::[A-F\d]{1,4}){1,2}|(?:[A-F\d]{1,4}:){4}(?::[A-F\d]{1,4}){1,3}|(?:[A-F\d]{1,4}:){3}(?::[A-F\d]{1,4}){1,4}|(?:[A-F\d]{1,4}:){2}(?::[A-F\d]{1,4}){1,5}|[A-F\d]{1,4}:(?::[A-F\d]{1,4}){1,6}|(?:[A-F\d]{1,4}:){1,7}:|:(?::[A-F\d]{1,4}){1,7})$/i)
},date:function(x,y){if(x.value.length==10&&y.length==10){var z=y.match(/[^mdy]+/g);if(z.length==2&&z[0].length==1&&z[0]==z[1]){var t=x.value.split(z[0]),q=y.split(z[0]);for(var p=0;p<3;p++){if(q[p]=="dd"){var w=t[p]}else{if(q[p]=="mm"){var r=t[p]}else{if(q[p]=="yyyy"){var u=t[p]}}}}var o=new Date(u,r-1,w);if((o.getMonth()+1!=r)||(o.getDate()!=w)||(o.getFullYear()!=u)){return false}return true}}return false},extension:function(){var o=arguments[0],q="";if(!arguments[1]){return false}for(var p=1;p<arguments.length;
p++){q+=arguments[p];if(p!=arguments.length-1){q+="|"}}return this.regex(o,"\\.("+q+")$","i")}},l=this,k;if(window.bValidatorOptions){a.extend(true,i,window.bValidatorOptions)}if(e){a.extend(true,i,e)}if(m.data("bValidator")){return m.data("bValidator")}m.data("bValidator",this);if(m.is("form")){m.bind("submit.bV",function(o){if(l.validate()){return true}else{o.stopImmediatePropagation();return false}});m.bind("reset.bV",function(){l.reset()})}if(i.validateOn){j(c(m))}this.validate=function(o,s){var p=true,r=s?s:c(m);
k=null;if(b("onBeforeAllValidations",r)!==false){r.each(function(){var I=a.trim(a(this).attr(i.validateActionsAttr).replace(new RegExp("\\s*\\"+i.validatorsDelimiter+"\\s*","g"),i.validatorsDelimiter)),F=0;if(!I){return true}var x=I.split(i.validatorsDelimiter),w=d(a(this)),E=[];if(a.inArray("valempty",x)==-1&&a.inArray("required",x)==-1&&!f.required(w)){F=1}if(!F){var u=a(this).attr(i.errorMessageAttr),D=0;if(b("onBeforeElementValidation",a(this))!==false){for(var A=0;A<x.length;A++){x[A]=a.trim(x[A]);if(!x[A]){continue
}if(b("onBeforeValidate",a(this),x[A])===false){continue}var C=x[A].match(/^(.*?)\[(.*?)\]/);if(C&&C.length==3){var B=C[1];C=C[2].split(i.paramsDelimiter)}else{C=[];var B=x[A]}if(typeof f[B]=="function"){C.unshift(w);var t=f[B].apply(f,C)}else{if(typeof window[B]=="function"){C.unshift(w.value);var t=window[B].apply(f,C)}else{var W,X=B.split("."),Y=window,t=false;for(W=0;W<X.length-1;W++){if(Y[X[W]]){Y=Y[X[W]]}}B=Y[X[X.length-1]];if(typeof B=="function"){C.unshift(w.value);t=B.apply(f,C)}}}if(b("onAfterValidate",a(this),x[A],t)===false){continue}if(!t){if(!o){if(!D&&B!="valempty"){if(!u){if(i.errorMessages[i.lang]&&i.errorMessages[i.lang][B]){u=i.errorMessages[i.lang][B]
}else{if(i.errorMessages.en[B]){u=i.errorMessages.en[B]}else{if(i.errorMessages[i.lang]&&i.errorMessages[i.lang]["default"]){u=i.errorMessages[i.lang]["default"]}else{u=i.errorMessages.en["default"]}}}}else{D=1}if(u.indexOf("{")){for(var z=0;z<C.length-1;z++){u=u.replace(new RegExp("\\{"+z+"\\}","g"),C[z+1])}}if(!(E.length&&B=="required")){E[E.length]=u}u=null}}else{E[E.length]=""}p=false;b("onValidateFail",a(this),x[A],E)}else{b("onValidateSuccess",a(this),x[A])}}}var y=b("onAfterElementValidation",a(this),E);
if(!o&&y!==false){var v=a(this).is("input:checkbox,input:radio")?1:0;if(E.length){if(y!==0){h(a(this),E)}if(!v){a(this).removeClass(i.validClass);if(i.errorClass){a(this).addClass(i.errorClass)}}if(i.errorValidateOn){if(i.validateOn){a(this).unbind(i.validateOn+".bV")}var H=v||a(this).is("select,input:file")?"change":i.errorValidateOn;if(v){var G=a(this).is("input:checkbox")?a('input:checkbox[name="'+a(this).attr("name")+'"]'):a('input:radio[name="'+a(this).attr("name")+'"]');a(G).unbind(".bVerror");
a(G).bind("change.bVerror",{bVInstance:l,groupLeader:a(this)},function(J){J.data.bVInstance.validate(false,J.data.groupLeader)})}else{a(this).unbind(".bVerror");a(this).bind(H+".bVerror",{bVInstance:l},function(J){J.data.bVInstance.validate(false,a(this))})}}if(i.singleError){return false}}else{if(y!==0){g(a(this))}if(!v){a(this).removeClass(i.errorClass);if(i.validClass){a(this).addClass(i.validClass)}}if(i.validateOn){a(this).unbind(i.validateOn+".bV");j(a(this))}}}}})}b("onAfterAllValidations",r,p);
if(k&&!s&&(a(window).scrollTop()>k||a(window).scrollTop()+a(window).height()<k)){var q=navigator.userAgent.toLowerCase();a(q.indexOf("chrome")>-1||q.indexOf("safari")>-1?"body":"html").animate({scrollTop:k-10},{duration:"slow"})}return p};this.getOptions=function(){return i};this.isValid=function(o){return this.validate(true,o)};this.removeErrMsg=function(o){g(o)};this.getInputs=function(){return c(m)};this.bindValidateOn=function(o){j(o)};this.reset=function(){elements=c(m);if(i.validateOn){j(elements)
}elements.each(function(){g(a(this));a(this).unbind(".bVerror");a(this).removeClass(i.errorClass);a(this).removeClass(i.validClass)})};this.destroy=function(){if(m.is("form")){m.unbind(".bV")}this.reset();m.removeData("bValidator")}}})(jQuery); /*
 * jQuery UI selectmenu version 1.2.0
 *
 * Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://docs.jquery.com/UI
 * https://github.com/fnagel/jquery-ui/wiki/Selectmenu
 */

(function($) {

$.widget("ui.selectmenu", {
	getter: "value",
	version: "1.9",
	eventPrefix: "selectmenu",
	options: {
		transferClasses: true,
		typeAhead: 1000,
		style: 'dropdown',
		positionOptions: {
			my: "left top",
			at: "left bottom",
			offset: null
		},
		width: null,
		menuWidth: null,
		handleWidth: 26,
		maxHeight: null,
		icons: null,
		format: null,
		bgImage: function() {},
		wrapperElement: "<div />"
	},

	_create: function() {
		var self = this, o = this.options;

		// set a default id value, generate a new random one if not set by developer
		var selectmenuId = (this.element.attr( 'id' ) || 'ui-selectmenu-' + Math.random().toString( 16 ).slice( 2, 10 )).replace(':', '\\:');
		
		// quick array of button and menu id's
		this.ids = [ selectmenuId, selectmenuId + '-button', selectmenuId + '-menu' ];

		// define safe mouseup for future toggling
		this._safemouseup = true;
		this.isOpen = false;

		// create menu button wrapper
		this.newelement = $( '<a />', {
			'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
			'id' : this.ids[ 1 ],
			'role': 'button',
			'href': '#nogo',
			'tabindex': this.element.attr( 'disabled' ) ? 1 : 0,
			'aria-haspopup': true,
			'aria-owns': this.ids[ 2 ]
		});
		this.newelementWrap = $( o.wrapperElement )
			.append( this.newelement )
			.insertAfter( this.element );
		
		// transfer tabindex
		var tabindex = this.element.attr( 'tabindex' );
		if ( tabindex ) {
			this.newelement.attr( 'tabindex', tabindex );
		}

		// save reference to select in data for ease in calling methods
		this.newelement.data( 'selectelement', this.element );

		// menu icon
		this.selectmenuIcon = $( '<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>' )
			.prependTo( this.newelement );

		// append status span to button
		this.newelement.prepend( '<span class="' + self.widgetBaseClass + '-status" />' );

		// make associated form label trigger focus
		this.element.bind({
			'click.selectmenu':  function( event ) {
				self.newelement.focus();
				event.preventDefault();
			}
		});
		
		// click toggle for menu visibility
		this.newelement
			.bind('mousedown.selectmenu', function(event) {
				self._toggle(event, true);
				// make sure a click won't open/close instantly
				if (o.style == "popup") {
					self._safemouseup = false;
					setTimeout(function() { self._safemouseup = true; }, 300);
				}
				return false;
			})
			.bind('click.selectmenu', function() {
				return false;
			})
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.ENTER:
						ret = true;
						break;
					case $.ui.keyCode.SPACE:
						self._toggle(event);
						break;
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.open(event);
						} else {
							self._moveSelection(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveSelection(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveSelection(1);
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						break;
					case $.ui.keyCode.HOME:
						self.index(0);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'mouseup');
				}
				return true;
			})
			.bind('mouseover.selectmenu focus.selectmenu', function() {
				if (!o.disabled) {
					$(this).addClass(self.widgetBaseClass + '-focus ui-state-hover');
				}
			})
			.bind('mouseout.selectmenu blur.selectmenu', function() {
				if (!o.disabled) {
					$(this).removeClass(self.widgetBaseClass + '-focus ui-state-hover');
				}
			});

		// document click closes menu
		$(document).bind("mousedown.selectmenu-" + this.ids[0], function(event) {
			if ( self.isOpen ) {
				self.close( event );
			}
		});

		// change event on original selectmenu
		this.element
			.bind("click.selectmenu", function() {
				self._refreshValue();
			})
			// FIXME: newelement can be null under unclear circumstances in IE8
			// TODO not sure if this is still a problem (fnagel 20.03.11)
			.bind("focus.selectmenu", function() {
				if (self.newelement) {
					self.newelement[0].focus();
				}
			});

		// set width when not set via options
		if (!o.width) {
			o.width = this.element.outerWidth();
		}
		// set menu button width
		this.newelement.width(o.width);

		// hide original selectmenu element
		this.element.hide();

		// create menu portion, append to body		
		this.list = $( '<ul />', {
			'class': 'ui-widget ui-widget-content',
			'aria-hidden': true,
			'role': 'listbox',
			'aria-labelledby': this.ids[1],
			'id': this.ids[2]
		});
		this.listWrap = $( o.wrapperElement )
			.addClass( self.widgetBaseClass + '-menu' )
			.append( this.list )
			.appendTo( 'body' );
		
		// transfer menu click to menu button
		this.list
			.bind("keydown.selectmenu", function(event) {
				var ret = false;
				switch (event.keyCode) {
					case $.ui.keyCode.UP:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(-1);
						}
						break;
					case $.ui.keyCode.DOWN:
						if (event.altKey) {
							self.close(event, true);
						} else {
							self._moveFocus(1);
						}
						break;
					case $.ui.keyCode.LEFT:
						self._moveFocus(-1);
						break;
					case $.ui.keyCode.RIGHT:
						self._moveFocus(1);
						break;
					case $.ui.keyCode.HOME:
						self._moveFocus(':first');
						break;
					case $.ui.keyCode.PAGE_UP:
						self._scrollPage('up');
						break;
					case $.ui.keyCode.PAGE_DOWN:
						self._scrollPage('down');
						break;
					case $.ui.keyCode.END:
						self._moveFocus(':last');
						break;
					case $.ui.keyCode.ENTER:
					case $.ui.keyCode.SPACE:
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.TAB:
						ret = true;
						self.close(event, true);
						$(event.target).parents('li:eq(0)').trigger('mouseup');
						break;
					case $.ui.keyCode.ESCAPE:
						self.close(event, true);
						break;
					default:
						ret = true;
				}
				return ret;
			})
			.bind('keypress.selectmenu', function(event) {
				if (event.which > 0) {
					self._typeAhead(event.which, 'focus');
				}
				return true;
			})
			// this allows for using the scrollbar in an overflowed list
			.bind( 'mousedown.selectmenu mouseup.selectmenu', function() { return false; });

		// needed when window is resized
		$(window).bind( "resize.selectmenu-" + this.ids[0], $.proxy( self.close, this ) );
	},

	_init: function() {
		var self = this, o = this.options;

		// serialize selectmenu element options
		var selectOptionData = [];
		this.element
			.find('option')
			.each(function() {
				var opt = $(this);
				selectOptionData.push({
					value: opt.attr('value'),
					text: self._formatText(opt.text()),
					selected: opt.attr('selected'),
					disabled: opt.attr('disabled'),
					classes: opt.attr('class'),
					typeahead: opt.attr('typeahead'),
					parentOptGroup: opt.parent('optgroup'),
					bgImage: o.bgImage.call(opt)
				});
			});

		// active state class is only used in popup style
		var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";

		// empty list so we can refresh the selectmenu via selectmenu()
		this.list.html("");

		// write li's
		if (selectOptionData.length) {
			for (var i = 0; i < selectOptionData.length; i++) {
				var thisLiAttr = { role : 'presentation' };
				if ( selectOptionData[ i ].disabled ) {
					thisLiAttr[ 'class' ] = this.namespace + '-state-disabled';
				}					
				var thisAAttr = {
					html: selectOptionData[i].text,
					href : '#nogo',
					tabindex : -1,
					role : 'option',
					'aria-selected' : false
				};
				if ( selectOptionData[ i ].disabled ) {
					thisAAttr[ 'aria-disabled' ] = selectOptionData[ i ].disabled;
				}
				if ( selectOptionData[ i ].typeahead ) {
					thisAAttr[ 'typeahead' ] = selectOptionData[ i ].typeahead;
				}				
				var thisA = $('<a/>', thisAAttr);
				var thisLi = $('<li/>', thisLiAttr)	
					.append(thisA)				
					.data('index', i)
					.addClass(selectOptionData[i].classes)
					.data('optionClasses', selectOptionData[i].classes || '')
					.bind("mouseup.selectmenu", function(event) {
						if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($( event.currentTarget ).parents( "ul>li." + self.widgetBaseClass + "-group " )) ) {
							var changed = $(this).data('index') != self._selectedIndex();
							self.index($(this).data('index'));
							self.select(event);
							if (changed) {
								self.change(event);
							}
							self.close(event, true);
						}
						return false;
					})
					.bind("click.selectmenu", function() {
						return false;
					})
					.bind('mouseover.selectmenu focus.selectmenu', function(e) {
						// no hover if diabled
						if (!$(e.currentTarget).hasClass(self.namespace + '-state-disabled') && !$(e.currentTarget).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
							self._selectedOptionLi().addClass(activeClass);
							self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
							$(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
						}
					})
					.bind('mouseout.selectmenu blur.selectmenu', function() {
						if ($(this).is(self._selectedOptionLi().selector)) {
							$(this).addClass(activeClass);
						}
						$(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
					});

				// optgroup or not...
				if ( selectOptionData[i].parentOptGroup.length ) {
					var optGroupName = self.widgetBaseClass + '-group-' + this.element.find( 'optgroup' ).index( selectOptionData[i].parentOptGroup );
					if (this.list.find( 'li.' + optGroupName ).length ) {
						this.list.find( 'li.' + optGroupName + ':last ul' ).append( thisLi );
					} else {
						$(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"' ) + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ')
							.appendTo( this.list )
							.find( 'ul' )
							.append( thisLi );
					}
				} else {
					thisLi.appendTo(this.list);
				}

				// append icon if option is specified
				if (o.icons) {
					for (var j in o.icons) {
						if (thisLi.is(o.icons[j].find)) {
							thisLi
								.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon')
								.addClass(self.widgetBaseClass + '-hasIcon');
							var iconClass = o.icons[j].icon || "";
							thisLi
								.find('a:eq(0)')
								.prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
							if (selectOptionData[i].bgImage) {
								thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
							}
						}
					}
				}
			}
		} else {
			$('<li role="presentation"><a href="#nogo" tabindex="-1" role="option"></a></li>').appendTo(this.list);
		}
		// we need to set and unset the CSS classes for dropdown and popup style
		var isDropDown = ( o.style == 'dropdown' );
		this.newelement
			.toggleClass( self.widgetBaseClass + '-dropdown', isDropDown )
			.toggleClass( self.widgetBaseClass + '-popup', !isDropDown );
		this.list
			.toggleClass( self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown )
			.toggleClass( self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown )
			// add corners to top and bottom menu items
			.find( 'li:first' )
			.toggleClass( 'ui-corner-top', !isDropDown )
			.end().find( 'li:last' )
			.addClass( 'ui-corner-bottom' );
		this.selectmenuIcon
			.toggleClass( 'ui-icon-triangle-1-s', isDropDown )
			.toggleClass( 'ui-icon-triangle-2-n-s', !isDropDown );

		// transfer classes to selectmenu and list
		if ( o.transferClasses ) {
			var transferClasses = this.element.attr( 'class' ) || '';
			this.newelement.add( this.list ).addClass( transferClasses );
		}

		// set menu width to either menuWidth option value, width option value, or select width
		if ( o.style == 'dropdown' ) {
			this.list.width( o.menuWidth ? o.menuWidth : o.width );
		} else {
			this.list.width( o.menuWidth ? o.menuWidth : o.width - o.handleWidth );
		}

		// reset height to auto
		this.list.css( 'height', 'auto' );
		var listH = this.listWrap.height();
		// calculate default max height
		if ( o.maxHeight && o.maxHeight < listH ) {
			this.list.height( o.maxHeight );
		} else {
			var winH = $( window ).height() / 3;
			if ( winH < listH ) this.list.height( winH );
		}
		
		// save reference to actionable li's (not group label li's)
		this._optionLis = this.list.find( 'li:not(.' + self.widgetBaseClass + '-group)' );

		// transfer disabled state
		if ( this.element.attr( 'disabled' ) ) {
			this.disable();
		} else {
			this.enable();
		}
		
		// update value
		this.index( this._selectedIndex() );

		// needed when selectmenu is placed at the very bottom / top of the page
		window.setTimeout( function() {
			self._refreshPosition();
		}, 200 );
	},

	destroy: function() {
		this.element.removeData( this.widgetName )
			.removeClass( this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled' )
			.removeAttr( 'aria-disabled' )
			.unbind( ".selectmenu" );

		$( window ).unbind( ".selectmenu-" + this.ids[0] );
		$( document ).unbind( ".selectmenu-" + this.ids[0] );
		
		this.newelementWrap.remove();
		this.listWrap.remove();
		
		// unbind click event and show original select
		this.element
			.unbind(".selectmenu")
			.show();

		// call widget destroy function
		$.Widget.prototype.destroy.apply(this, arguments);
	},

	_typeAhead: function( code, eventType ) {
		var self = this,
			c = String.fromCharCode(code).toLowerCase(),
			items = this.list.find( 'li a' ),
			matchee = null,
			nextIndex = null;

		// Clear any previous timer if present
		if ( self._typeAhead_timer ) {
			window.clearTimeout( self._typeAhead_timer );
			self._typeAhead_timer = undefined;
		}

		// Store the character typed
		self._typeAhead_chars = (self._typeAhead_chars === undefined ? "" : self._typeAhead_chars).concat(c);

		// Detect if we are in cyciling mode or direct selection mode
		if ( self._typeAhead_chars.length < 2 ||
		     (self._typeAhead_chars.substr(-2, 1) === c && self._typeAhead_cycling) ) {
			self._typeAhead_cycling = true;

			// Match only the first character and loop
			matchee = c;
		}
		else {
			// We won't be cycling anymore until the timer expires
			self._typeAhead_cycling = false;

			// Match all the characters typed
			matchee = self._typeAhead_chars;
		}

		// We need to determine the currently active index, but it depends on
		// the used context: if it's in the element, we want the actual
		// selected index, if it's in the menu, just the focused one
		// I copied this code from _moveSelection() and _moveFocus()
		// respectively --thg2k
		var selectedIndex = (eventType !== 'focus' ?
			this._selectedOptionLi().data('index') :
			this._focusedOptionLi().data('index')) || 0;

		for (var i = 0; i < items.length; i++) {
			var thisText = items.eq(i).text().substr(0, matchee.length).toLowerCase();

			if ( thisText === matchee ) {

				if ( self._typeAhead_cycling ) {
					if ( nextIndex === null )
						nextIndex = i;

					if ( i > selectedIndex ) {
						nextIndex = i;
						break;
					}
				} else {
					nextIndex = i;
				}
			}
		}

		if ( nextIndex !== null ) {
			// Why using trigger() instead of a direct method to select the
			// index? Because we don't what is the exact action to do, it
			// depends if the user is typing on the element or on the popped
			// up menu
			items.eq(nextIndex).trigger( eventType );
		}

		self._typeAhead_timer = window.setTimeout(function() {
			self._typeAhead_timer = undefined;
			self._typeAhead_chars = undefined;
			self._typeAhead_cycling = undefined;
		}, self.options.typeAhead);
	},

	// returns some usefull information, called by callbacks only
	_uiHash: function() {
		var index = this.index();
		return {
			index: index,
			option: $("option", this.element).get(index),
			value: this.element[0].value
		};
	},

	open: function(event) {
		var self = this, o = this.options;
		if ( self.newelement.attr("aria-disabled") != 'true' ) {
			self._closeOthers(event);
			self.newelement.addClass('ui-state-active');
				
			self.listWrap.appendTo( o.appendTo );
			self.list.attr('aria-hidden', false);			
			self.listWrap.addClass( self.widgetBaseClass + '-open' );
						
			var selected = this._selectedOptionLi();
			if ( o.style == "dropdown" ) {
				self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
			} else {				
				// center overflow and avoid flickering
				this.list
					.css("left", -5000)
					.scrollTop( this.list.scrollTop() + selected.position().top - this.list.outerHeight()/2 + selected.outerHeight()/2 )
					.css("left","auto");
			}
			
			self._refreshPosition();	
			
			var link = selected.find("a");
			if (link.length) link[0].focus();		
			
			self.isOpen = true;
			self._trigger("open", event, self._uiHash());
		}
	},

	close: function(event, retainFocus) {
		if ( this.newelement.is('.ui-state-active') ) {
			this.newelement
				.removeClass('ui-state-active');
			this.listWrap.removeClass(this.widgetBaseClass + '-open');
			this.list.attr('aria-hidden', true);
			if ( this.options.style == "dropdown" ) {
				this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
			}
			if ( retainFocus ) {
				this.newelement.focus();
			}
			this.isOpen = false;
			this._trigger("close", event, this._uiHash());
		}
	},

	change: function(event) {
		this.element.trigger("change");
		this._trigger("change", event, this._uiHash());
	},

	select: function(event) {
		if (this._disabled(event.currentTarget)) { return false; }
		this._trigger("select", event, this._uiHash());
	},

	_closeOthers: function(event) {
		$('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function() {
			$(this).data('selectelement').selectmenu('close', event);
		});
		$('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
	},

	_toggle: function(event, retainFocus) {
		if ( this.isOpen ) {
			this.close(event, retainFocus);
		} else {
			this.open(event);
		}
	},

	_formatText: function(text) {
		return (this.options.format ? this.options.format(text) : text);
	},

	_selectedIndex: function() {
		return this.element[0].selectedIndex;
	},

	_selectedOptionLi: function() {
		return this._optionLis.eq(this._selectedIndex());
	},

	_focusedOptionLi: function() {
		return this.list.find('.' + this.widgetBaseClass + '-item-focus');
	},

	_moveSelection: function(amt, recIndex) {
		// do nothing if disabled
		if (!this.options.disabled) {
			var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
			// do not loop when using up key

			if (newIndex < 0) {
				newIndex = 0;
			}
			if (newIndex > this._optionLis.size() - 1) {
				newIndex = this._optionLis.size() - 1;
			}
			// Occurs when a full loop has been made
			if (newIndex === recIndex) { return false; }

			if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
				// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
				(amt > 0) ? ++amt : --amt;
				this._moveSelection(amt, newIndex);
			} else {
				return this._optionLis.eq(newIndex).trigger('mouseup');
			}
		}
	},

	_moveFocus: function(amt, recIndex) {
		if (!isNaN(amt)) {
			var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
			var newIndex = currIndex + amt;
		} else {
			var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
		}

		if (newIndex < 0) {
			newIndex = 0;
		}
		if (newIndex > this._optionLis.size() - 1) {
			newIndex = this._optionLis.size() - 1;
		}

		//Occurs when a full loop has been made
		if (newIndex === recIndex) { return false; }

		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);

		this._focusedOptionLi().find('a:eq(0)').attr('id', '');

		if (this._optionLis.eq(newIndex).hasClass( this.namespace + '-state-disabled' )) {
			// if option at newIndex is disabled, call _moveFocus, incrementing amt by one
			(amt > 0) ? ++amt : --amt;
			this._moveFocus(amt, newIndex);
		} else {
			this._optionLis.eq(newIndex).find('a:eq(0)').attr('id',activeID).focus();
		}

		this.list.attr('aria-activedescendant', activeID);
	},

	_scrollPage: function(direction) {
		var numPerPage = Math.floor(this.list.outerHeight() / this.list.find('li:first').outerHeight());
		numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
		this._moveFocus(numPerPage);
	},

	_setOption: function(key, value) {
		this.options[key] = value;
		// set
		if (key == 'disabled') {
			if (value) this.close();
			this.element
				.add(this.newelement)
				.add(this.list)[value ? 'addClass' : 'removeClass'](
					this.widgetBaseClass + '-disabled' + ' ' +
					this.namespace + '-state-disabled')
				.attr("aria-disabled", value);
		}
	},

	disable: function(index, type){
			// if options is not provided, call the parents disable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption( 'disabled', true );
			} else {
				if ( type == "optgroup" ) {
					this._disableOptgroup(index);
				} else {
					this._disableOption(index);
				}
			}
	},

	enable: function(index, type) {
			// if options is not provided, call the parents enable function
			if ( typeof( index ) == 'undefined' ) {
				this._setOption('disabled', false);
			} else {
				if ( type == "optgroup" ) {
					this._enableOptgroup(index);
				} else {
					this._enableOption(index);
				}
			}
	},

	_disabled: function(elem) {
			return $(elem).hasClass( this.namespace + '-state-disabled' );
	},


	_disableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.addClass(this.namespace + '-state-disabled')
					.find("a").attr("aria-disabled", true);
				this.element.find("option").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOption: function(index) {
			var optionElem = this._optionLis.eq(index);
			if (optionElem) {
				optionElem.removeClass( this.namespace + '-state-disabled' )
					.find("a").attr("aria-disabled", false);
				this.element.find("option").eq(index).removeAttr("disabled");
			}
	},

	_disableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.addClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", true);
				this.element.find("optgroup").eq(index).attr("disabled", "disabled");
			}
	},

	_enableOptgroup: function(index) {
			var optGroupElem = this.list.find( 'li.' + this.widgetBaseClass + '-group-' + index );
			if (optGroupElem) {
				optGroupElem.removeClass(this.namespace + '-state-disabled')
					.attr("aria-disabled", false);
				this.element.find("optgroup").eq(index).removeAttr("disabled");
			}
	},

	index: function(newValue) {
		if (arguments.length) {
			if (!this._disabled($(this._optionLis[newValue]))) {
				this.element[0].selectedIndex = newValue;
				this._refreshValue();
			} else {
				return false;
			}
		} else {
			return this._selectedIndex();
		}
	},

	value: function(newValue) {
		if (arguments.length) {
			this.element[0].value = newValue;
			this._refreshValue();
		} else {
			return this.element[0].value;
		}
	},

	_refreshValue: function() {
		var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
		var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
		// deselect previous
		this.list
			.find('.' + this.widgetBaseClass + '-item-selected')
			.removeClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'false')
			.attr('id', '');
		// select new
		this._selectedOptionLi()
			.addClass(this.widgetBaseClass + "-item-selected" + activeClass)
			.find('a')
			.attr('aria-selected', 'true')
			.attr('id', activeID);

		// toggle any class brought in from option
		var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
		var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
		this.newelement
			.removeClass(currentOptionClasses)
			.data('optionClasses', newOptionClasses)
			.addClass( newOptionClasses )
			.find('.' + this.widgetBaseClass + '-status')
			.html(
				this._selectedOptionLi()
					.find('a:eq(0)')
					.html()
			);

		this.list.attr('aria-activedescendant', activeID);
	},

	_refreshPosition: function() {
		var o = this.options;

		// if its a pop-up we need to calculate the position of the selected li
		if ( o.style == "popup" && !o.positionOptions.offset ) {
			var selected = this._selectedOptionLi();
			var _offset = "0 " + ( this.list.offset().top  - selected.offset().top - ( this.newelement.outerHeight() + selected.outerHeight() ) / 2);
		}
		// update zIndex if jQuery UI is able to process
		this.listWrap
			.zIndex( this.element.zIndex() + 1 )
			.position({
				// set options for position plugin
				of: o.positionOptions.of || this.newelement,
				my: o.positionOptions.my,
				at: o.positionOptions.at,
				offset: o.positionOptions.offset || _offset,
				collision: o.positionOptions.collision || 'flip'
			});
	}
});

})(jQuery);
/**
 * @author alexander.farkas
 * @version 1.4.4pre
 */
(function($){
	
	var supportsValidity;
	(function(){
		if(!$.prop || supportsValidity){return;}
		var supportTest = function(){
			supportsValidity = !!$('<input />').prop('validity');
		};
		supportTest();
		$(supportTest);
	})();
	
    $.widget('ui.checkBox', {
		options: {
	        hideInput: true,
			addVisualElement: true,
			addLabel: true
	    },
        _create: function(){
            var that = this, 
				opts = this.options
			;
			
			if(!this.element.is(':radio,:checkbox')){
				if(this.element[0].elements && $.nodeName(this.element[0], 'form')){
					$(this.element[0].elements).filter(':radio,:checkbox').checkBox(opts);
				}
				return false;
			}
			
			this._proxiedReflectUI = $.proxy(this, 'reflectUI');
			
            this.labels = $([]);
			
            this.checkedStatus = false;
			this.disabledStatus = false;
			this.hoverStatus = false;
            
			this.inputType = this.element[0].type;
            this.radio = this.inputType == 'radio';
					
            this.visualElement = $([]);
            if (opts.hideInput) {
				this.element.addClass('ui-helper-hidden-accessible');
				if(opts.addVisualElement){
					this.visualElement = $('<span />')
						.addClass('ui-'+this.inputType)
					;
					this.element.after(this.visualElement[0]);
				}
            }
			
			if(opts.addLabel){
				var id = this.element[0].id;
				if(id){
					this.labels = $('label[for="' + id + '"]', this.element[0].form || this.element[0].ownerDocument).add(this.element.parent('label'));
				}
				if(!this.labels[0]){
					this.labels = this.element.closest('label', this.element[0].form);
				}
				this.labels.addClass(this.radio ? 'ui-radio' : 'ui-checkbox');
			}
			
			if($.webshims && $.webshims.addShadowDom){
				$.webshims.addShadowDom(this.element, opts.addVisualElement ? this.visualElement[0] : this.labels[0], {
					shadowFocusElement: this.element[0]
				});
			}
			
			this.visualGroup = this.visualElement.add(this.labels);
			
			this._addEvents();
			
			this.initialized = true;
            this.reflectUI({type: 'initialreflect'});
			return undefined;
        },
		_addEvents: function(){
			var that 		= this, 
			
				opts 		= this.options,
					
				toggleHover = function(e){
					if(that.disabledStatus){
						return false;
					}
					that.hover = (e.type == 'focus' || e.type == 'mouseenter');
					if(e.type == 'focus'){
						that.visualGroup.addClass(that.inputType +'-focused');
					} else if(e.type == 'blur'){
						that.visualGroup.removeClass(that.inputType +'-focused');
					}
					that._changeStateClassChain();
					return undefined;
				}
			;
			
			this.element
				.bind('click.checkBox invalid.checkBox', this._proxiedReflectUI)
				.bind('focus.checkBox blur.checkBox', toggleHover)
			;
			if (opts.hideInput){
				this.element
					.bind('usermode', function(e){
	                    (e.enabled &&
	                        that.destroy.call(that, true));
	                })
				;
            }
			if(opts.addVisualElement){
				this.visualElement
					.bind('click.checkBox', function(e){
						that.element[0].click();
						return false;
					})
				;
			}
			
			this.visualGroup.bind('mouseenter.checkBox mouseleave.checkBox', toggleHover);
			
		},
		_changeStateClassChain: function(){
			var allElements = this.labels.add(this.visualElement),
				stateClass 	= '',
				baseClass 	= 'ui-'+ this.inputType
			;
				
			if(this.checkedStatus){
				stateClass += '-checked'; 
				allElements.addClass(baseClass+'-checked');
			} else {
				allElements.removeClass(baseClass+'-checked');
			}
			
			if(this.disabledStatus){
				stateClass += '-disabled'; 
				allElements.addClass(baseClass+'-disabled');
			} else {
				allElements.removeClass(baseClass+'-disabled');
			}
			if(this.hover){
				stateClass += '-hover'; 
				allElements.addClass(baseClass+'-hover');
			} else {
				allElements.removeClass(baseClass+'-hover');
			}
			
			baseClass += '-state';
			if(stateClass){
				stateClass = baseClass + stateClass;
			}
			
			function switchStateClass(){
				var classes = this.className.split(' '),
					found = false;
				$.each(classes, function(i, classN){
					if(classN.indexOf(baseClass) === 0){
						found = true;
						classes[i] = stateClass;
						return false;
					}
					return undefined;
				});
				if(!found){
					classes.push(stateClass);
				}
				this.className = classes.join(' ');
			}
			
			this.visualGroup.each(switchStateClass);
		},
        destroy: function(onlyCss){
            this.element.removeClass('ui-helper-hidden-accessible');
			this.visualElement.addClass('ui-helper-hidden');
            if (!onlyCss) {
                var o = this.options;
                this.element.unbind('.checkBox');
				this.visualElement.remove();
                this.labels
					.unbind('.checkBox')
					.removeClass('ui-state-hover ui-state-checked ui-state-disabled')
				;
            }
        },
		
        disable: function(status){
			if(status === undefined){
				status = true;
			}
            this.element[0].disabled = status;
            this.reflectUI({type: 'manuallydisabled'});
        },
		
        enable: function(){
            this.element[0].disabled = false;
            this.reflectUI({type: 'manuallyenabled'});
        },
		
        toggle: function(e){
            this.changeCheckStatus(!(this.element.is(':checked')), e);
        },
		
        changeCheckStatus: function(status, e){
            if(e && e.type == 'click' && this.element[0].disabled){
				return false;
			}
			this.element[0].checked = !!status;
            this.reflectUI(e || {
                type: 'changecheckstatus'
            });
			return undefined;
        },
        propagate: function(n, e, _noGroupReflect){
			if(!e || e.type != 'initialreflect'){
				if (this.radio && !_noGroupReflect) {
					var elem = this.element[0];
					//dynamic
	                $('[name="'+ elem.name +'"]', elem.form || elem.ownerDocument).checkBox('reflectUI', e, true);
						
	            }
	            return this._trigger(n, e, {
	                options: this.options,
	                checked: this.checkedStatus,
	                labels: this.labels,
					disabled: this.disabledStatus
	            });
			}
			return undefined;
        },
		changeValidityState: function(){
			if(supportsValidity){
				this.visualGroup[ !this.element.prop('willValidate') || (this.element.prop('validity') || {valid: true}).valid ? 'removeClass' : 'addClass' ](this.inputType +'-invalid');
			}
		},
        reflectUI: function(e){
			
            var oldChecked 			= this.checkedStatus, 
				oldDisabledStatus 	= this.disabledStatus
			;
            					
			this.disabledStatus = this.element.is(':disabled');
			this.checkedStatus = this.element.is(':checked');
			if(!e || e.type !== 'initialreflect'){
				this.changeValidityState();
			}
			
			if (this.disabledStatus != oldDisabledStatus || this.checkedStatus !== oldChecked) {
				this._changeStateClassChain();
				
				(this.disabledStatus != oldDisabledStatus &&
					this.propagate('disabledchange', e));
				
				(this.checkedStatus !== oldChecked &&
					this.propagate('change', e));
			}
            
        }
    });
		
	if($.propHooks){
		$.each({checked: 'changeCheckStatus', disabled: 'disable'}, function(name, fn){
			//be hook friendly
			if(!$.propHooks[name]){
				$.propHooks[name] = {};
			}
			var oldSetHook = $.propHooks[name].set;
			
			$.propHooks[name].set = function(elem, value){
				var widget = $.data(elem, 'checkBox');
				if(widget){
					widget[fn](!!value);
				}
				return oldSetHook && oldSetHook(elem, value) ;
			};
			
		});
	}
})(jQuery);/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.Class = function(){};
  
  // Create a new Class that inherits from this class
  Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;
    
    return Class;
  };
})();(function(a,b){function s(b){function e(b){for(;b&&b.nodeName.toLowerCase()!="html";b=b.parentNode){var d=a.css(b,"background-color");if(d&&d.indexOf("rgb")>=0){var e=d.match(/\d+/g);return"#"+c(e[0])+c(e[1])+c(e[2])}if(d&&d!="transparent")return d}return"#ffffff"}function c(a){a=parseInt(a,10).toString(16);return a.length<2?"0"+a:a}d("applying clearType background-color hack");b.each(function(){a(this).css("background-color",e(this))})}function r(b,c){var d=a(c.pager);a.each(b,function(e,f){a.fn.cycle.createPagerAnchor(e,f,d,b,c)});c.updateActivePagerLink(c.pager,c.startingSlide,c.activePagerClass)}function q(b,c){var d=c?1:-1;var e=b.elements;var f=b.$cont[0],g=f.cycleTimeout;if(g){clearTimeout(g);f.cycleTimeout=0}if(b.random&&d<0){b.randomIndex--;if(--b.randomIndex==-2)b.randomIndex=e.length-2;else if(b.randomIndex==-1)b.randomIndex=e.length-1;b.nextSlide=b.randomMap[b.randomIndex]}else if(b.random){b.nextSlide=b.randomMap[b.randomIndex]}else{b.nextSlide=b.currSlide+d;if(b.nextSlide<0){if(b.nowrap)return false;b.nextSlide=e.length-1}else if(b.nextSlide>=e.length){if(b.nowrap)return false;b.nextSlide=0}}var h=b.onPrevNextEvent||b.prevNextClick;if(a.isFunction(h))h(d>0,b.nextSlide,e[b.nextSlide]);n(e,b,1,c);return false}function o(a,b,c,e){if(c.timeoutFn){var f=c.timeoutFn.call(a,a,b,c,e);while(c.fx!="none"&&f-c.speed<250)f+=c.speed;d("calculated timeout: "+f+"; speed: "+c.speed);if(f!==false)return f}return c.timeout}function n(c,e,f,g){function q(){var a=0,b=e.timeout;if(e.timeout&&!e.continuous){a=o(c[e.currSlide],c[e.nextSlide],e,g);if(e.fx=="shuffle")a-=e.speedOut}else if(e.continuous&&h.cyclePause)a=10;if(a>0)h.cycleTimeout=setTimeout(function(){n(c,e,0,!e.backwards)},a)}if(f&&e.busy&&e.manualTrump){d("manualTrump in go(), stopping active transition");a(c).stop(true,true);e.busy=0}if(e.busy){d("transition active, ignoring new tx request");return}var h=e.$cont[0],i=c[e.currSlide],j=c[e.nextSlide];if(h.cycleStop!=e.stopCount||h.cycleTimeout===0&&!f)return;if(!f&&!h.cyclePause&&!e.bounce&&(e.autostop&&--e.countdown<=0||e.nowrap&&!e.random&&e.nextSlide<e.currSlide)){if(e.end)e.end(e);return}var k=false;if((f||!h.cyclePause)&&e.nextSlide!=e.currSlide){k=true;var l=e.fx;i.cycleH=i.cycleH||a(i).height();i.cycleW=i.cycleW||a(i).width();j.cycleH=j.cycleH||a(j).height();j.cycleW=j.cycleW||a(j).width();if(e.multiFx){if(g&&(e.lastFx==b||++e.lastFx>=e.fxs.length))e.lastFx=0;else if(!g&&(e.lastFx==b||--e.lastFx<0))e.lastFx=e.fxs.length-1;l=e.fxs[e.lastFx]}if(e.oneTimeFx){l=e.oneTimeFx;e.oneTimeFx=null}a.fn.cycle.resetState(e,l);if(e.before.length)a.each(e.before,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});var m=function(){e.busy=0;a.each(e.after,function(a,b){if(h.cycleStop!=e.stopCount)return;b.apply(j,[i,j,e,g])});if(!h.cycleStop){q()}};d("tx firing("+l+"); currSlide: "+e.currSlide+"; nextSlide: "+e.nextSlide);e.busy=1;if(e.fxFn)e.fxFn(i,j,e,m,g,f&&e.fastOnEvent);else if(a.isFunction(a.fn.cycle[e.fx]))a.fn.cycle[e.fx](i,j,e,m,g,f&&e.fastOnEvent);else a.fn.cycle.custom(i,j,e,m,g,f&&e.fastOnEvent)}else{q()}if(k||e.nextSlide==e.currSlide){e.lastSlide=e.currSlide;if(e.random){e.currSlide=e.nextSlide;if(++e.randomIndex==c.length){e.randomIndex=0;e.randomMap.sort(function(a,b){return Math.random()-.5})}e.nextSlide=e.randomMap[e.randomIndex];if(e.nextSlide==e.currSlide)e.nextSlide=e.currSlide==e.slideCount-1?0:e.currSlide+1}else if(e.backwards){var p=e.nextSlide-1<0;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=1;e.currSlide=0}else{e.nextSlide=p?c.length-1:e.nextSlide-1;e.currSlide=p?0:e.nextSlide+1}}else{var p=e.nextSlide+1==c.length;if(p&&e.bounce){e.backwards=!e.backwards;e.nextSlide=c.length-2;e.currSlide=c.length-1}else{e.nextSlide=p?0:e.nextSlide+1;e.currSlide=p?c.length-1:e.nextSlide-1}}}if(k&&e.pager)e.updateActivePagerLink(e.pager,e.currSlide,e.activePagerClass)}function m(b,c){b.addSlide=function(d,e){var f=a(d),g=f[0];if(!b.autostopCount)b.countdown++;c[e?"unshift":"push"](g);if(b.els)b.els[e?"unshift":"push"](g);b.slideCount=c.length;if(b.random){b.randomMap.push(b.slideCount-1);b.randomMap.sort(function(a,b){return Math.random()-.5})}f.css("position","absolute");f[e?"prependTo":"appendTo"](b.$cont);if(e){b.currSlide++;b.nextSlide++}if(!a.support.opacity&&b.cleartype&&!b.cleartypeNoBg)s(f);if(b.fit&&b.width)f.width(b.width);if(b.fit&&b.height&&b.height!="auto")f.height(b.height);g.cycleH=b.fit&&b.height?b.height:f.height();g.cycleW=b.fit&&b.width?b.width:f.width();f.css(b.cssBefore);if(b.pager||b.pagerAnchorBuilder)a.fn.cycle.createPagerAnchor(c.length-1,g,a(b.pager),c,b);if(a.isFunction(b.onAddSlide))b.onAddSlide(f);else f.hide()}}function l(b){var c,f,g=a.fn.cycle.transitions;if(b.fx.indexOf(",")>0){b.multiFx=true;b.fxs=b.fx.replace(/\s*/g,"").split(",");for(c=0;c<b.fxs.length;c++){var h=b.fxs[c];f=g[h];if(!f||!g.hasOwnProperty(h)||!a.isFunction(f)){e("discarding unknown transition: ",h);b.fxs.splice(c,1);c--}}if(!b.fxs.length){e("No valid transitions named; slideshow terminating.");return false}}else if(b.fx=="all"){b.multiFx=true;b.fxs=[];for(p in g){f=g[p];if(g.hasOwnProperty(p)&&a.isFunction(f))b.fxs.push(p)}}if(b.multiFx&&b.randomizeEffects){var i=Math.floor(Math.random()*20)+30;for(c=0;c<i;c++){var j=Math.floor(Math.random()*b.fxs.length);b.fxs.push(b.fxs.splice(j,1)[0])}d("randomized fx sequence: ",b.fxs)}return true}function k(b){b.original={before:[],after:[]};b.original.cssBefore=a.extend({},b.cssBefore);b.original.cssAfter=a.extend({},b.cssAfter);b.original.animIn=a.extend({},b.animIn);b.original.animOut=a.extend({},b.animOut);a.each(b.before,function(){b.original.before.push(this)});a.each(b.after,function(){b.original.after.push(this)})}function j(c,d,g,i,j){var o;var p=a.extend({},a.fn.cycle.defaults,i||{},a.metadata?c.metadata():a.meta?c.data():{});var t=a.isFunction(c.data)?c.data(p.metaAttr):null;if(t)p=a.extend(p,t);if(p.autostop)p.countdown=p.autostopCount||g.length;var u=c[0];c.data("cycle.opts",p);p.$cont=c;p.stopCount=u.cycleStop;p.elements=g;p.before=p.before?[p.before]:[];p.after=p.after?[p.after]:[];if(!a.support.opacity&&p.cleartype)p.after.push(function(){h(this,p)});if(p.continuous)p.after.push(function(){n(g,p,0,!p.backwards)});k(p);if(!a.support.opacity&&p.cleartype&&!p.cleartypeNoBg)s(d);if(c.css("position")=="static")c.css("position","relative");if(p.width)c.width(p.width);if(p.height&&p.height!="auto")c.height(p.height);if(p.startingSlide!=b){p.startingSlide=parseInt(p.startingSlide,10);if(p.startingSlide>=g.length||p.startSlide<0)p.startingSlide=0;else o=true}else if(p.backwards)p.startingSlide=g.length-1;else p.startingSlide=0;if(p.random){p.randomMap=[];for(var v=0;v<g.length;v++)p.randomMap.push(v);p.randomMap.sort(function(a,b){return Math.random()-.5});if(o){for(var w=0;w<g.length;w++){if(p.startingSlide==p.randomMap[w]){p.randomIndex=w}}}else{p.randomIndex=1;p.startingSlide=p.randomMap[1]}}else if(p.startingSlide>=g.length)p.startingSlide=0;p.currSlide=p.startingSlide||0;var x=p.startingSlide;d.css({position:"absolute",top:0,left:0}).hide().each(function(b){var c;if(p.backwards)c=x?b<=x?g.length+(b-x):x-b:g.length-b;else c=x?b>=x?g.length-(b-x):x-b:g.length-b;a(this).css("z-index",c)});a(g[x]).css("opacity",1).show();h(g[x],p);if(p.fit){if(!p.aspect){if(p.width)d.width(p.width);if(p.height&&p.height!="auto")d.height(p.height)}else{d.each(function(){var b=a(this);var c=p.aspect===true?b.width()/b.height():p.aspect;if(p.width&&b.width()!=p.width){b.width(p.width);b.height(p.width/c)}if(p.height&&b.height()<p.height){b.height(p.height);b.width(p.height*c)}})}}if(p.center&&(!p.fit||p.aspect)){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}if(p.center&&!p.fit&&!p.slideResize){d.each(function(){var b=a(this);b.css({"margin-left":p.width?(p.width-b.width())/2+"px":0,"margin-top":p.height?(p.height-b.height())/2+"px":0})})}var y=p.containerResize&&!c.innerHeight();if(y){var z=0,A=0;for(var B=0;B<g.length;B++){var C=a(g[B]),D=C[0],E=C.outerWidth(),F=C.outerHeight();if(!E)E=D.offsetWidth||D.width||C.attr("width");if(!F)F=D.offsetHeight||D.height||C.attr("height");z=E>z?E:z;A=F>A?F:A}if(z>0&&A>0)c.css({width:z+"px",height:A+"px"})}var G=false;if(p.pause)c.hover(function(){G=true;this.cyclePause++;f(u,true)},function(){G&&this.cyclePause--;f(u,true)});if(l(p)===false)return false;var H=false;i.requeueAttempts=i.requeueAttempts||0;d.each(function(){var b=a(this);this.cycleH=p.fit&&p.height?p.height:b.height()||this.offsetHeight||this.height||b.attr("height")||0;this.cycleW=p.fit&&p.width?p.width:b.width()||this.offsetWidth||this.width||b.attr("width")||0;if(b.is("img")){var c=a.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete;var d=a.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete;var f=a.browser.opera&&(this.cycleW==42&&this.cycleH==19||this.cycleW==37&&this.cycleH==17)&&!this.complete;var g=this.cycleH==0&&this.cycleW==0&&!this.complete;if(c||d||f||g){if(j.s&&p.requeueOnImageNotLoaded&&++i.requeueAttempts<100){e(i.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){a(j.s,j.c).cycle(i)},p.requeueTimeout);H=true;return false}else{e("could not determine size of image: "+this.src,this.cycleW,this.cycleH)}}}return true});if(H)return false;p.cssBefore=p.cssBefore||{};p.cssAfter=p.cssAfter||{};p.cssFirst=p.cssFirst||{};p.animIn=p.animIn||{};p.animOut=p.animOut||{};d.not(":eq("+x+")").css(p.cssBefore);a(d[x]).css(p.cssFirst);if(p.timeout){p.timeout=parseInt(p.timeout,10);if(p.speed.constructor==String)p.speed=a.fx.speeds[p.speed]||parseInt(p.speed,10);if(!p.sync)p.speed=p.speed/2;var I=p.fx=="none"?0:p.fx=="shuffle"?500:250;while(p.timeout-p.speed<I)p.timeout+=p.speed}if(p.easing)p.easeIn=p.easeOut=p.easing;if(!p.speedIn)p.speedIn=p.speed;if(!p.speedOut)p.speedOut=p.speed;p.slideCount=g.length;p.currSlide=p.lastSlide=x;if(p.random){if(++p.randomIndex==g.length)p.randomIndex=0;p.nextSlide=p.randomMap[p.randomIndex]}else if(p.backwards)p.nextSlide=p.startingSlide==0?g.length-1:p.startingSlide-1;else p.nextSlide=p.startingSlide>=g.length-1?0:p.startingSlide+1;if(!p.multiFx){var J=a.fn.cycle.transitions[p.fx];if(a.isFunction(J))J(c,d,p);else if(p.fx!="custom"&&!p.multiFx){e("unknown transition: "+p.fx,"; slideshow terminating");return false}}var K=d[x];if(!p.skipInitializationCallbacks){if(p.before.length)p.before[0].apply(K,[K,K,p,true]);if(p.after.length)p.after[0].apply(K,[K,K,p,true])}if(p.next)a(p.next).bind(p.prevNextEvent,function(){return q(p,1)});if(p.prev)a(p.prev).bind(p.prevNextEvent,function(){return q(p,0)});if(p.pager||p.pagerAnchorBuilder)r(g,p);m(p,g);return p}function i(b){if(b.next)a(b.next).unbind(b.prevNextEvent);if(b.prev)a(b.prev).unbind(b.prevNextEvent);if(b.pager||b.pagerAnchorBuilder)a.each(b.pagerAnchors||[],function(){this.unbind().remove()});b.pagerAnchors=null;if(b.destroy)b.destroy(b)}function h(b,c){if(!a.support.opacity&&c.cleartype&&b.style.filter){try{b.style.removeAttribute("filter")}catch(d){}}}function g(c,d,g){function k(b,c,d){if(!b&&c===true){var f=a(d).data("cycle.opts");if(!f){e("options not found, can not resume");return false}if(d.cycleTimeout){clearTimeout(d.cycleTimeout);d.cycleTimeout=0}n(f.elements,f,1,!f.backwards)}}if(c.cycleStop==b)c.cycleStop=0;if(d===b||d===null)d={};if(d.constructor==String){switch(d){case"destroy":case"stop":var h=a(c).data("cycle.opts");if(!h)return false;c.cycleStop++;if(c.cycleTimeout)clearTimeout(c.cycleTimeout);c.cycleTimeout=0;h.elements&&a(h.elements).stop();a(c).removeData("cycle.opts");if(d=="destroy")i(h);return false;case"toggle":c.cyclePause=c.cyclePause===1?0:1;k(c.cyclePause,g,c);f(c);return false;case"pause":c.cyclePause=1;f(c);return false;case"resume":c.cyclePause=0;k(false,g,c);f(c);return false;case"prev":case"next":var h=a(c).data("cycle.opts");if(!h){e('options not found, "prev/next" ignored');return false}a.fn.cycle[d](h);return false;default:d={fx:d}}return d}else if(d.constructor==Number){var j=d;d=a(c).data("cycle.opts");if(!d){e("options not found, can not advance slide");return false}if(j<0||j>=d.elements.length){e("invalid slide index: "+j);return false}d.nextSlide=j;if(c.cycleTimeout){clearTimeout(c.cycleTimeout);c.cycleTimeout=0}if(typeof g=="string")d.oneTimeFx=g;n(d.elements,d,1,j>=d.currSlide);return false}return d}function f(b,c,d){var e=a(b).data("cycle.opts");var f=!!b.cyclePause;if(f&&e.paused)e.paused(b,e,c,d);else if(!f&&e.resumed)e.resumed(b,e,c,d)}function e(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "))}function d(b){a.fn.cycle.debug&&e(b)}var c="2.9999";if(a.support==b){a.support={opacity:!a.browser.msie}}a.expr[":"].paused=function(a){return a.cyclePause};a.fn.cycle=function(b,c){var f={s:this.selector,c:this.context};if(this.length===0&&b!="stop"){if(!a.isReady&&f.s){e("DOM not ready, queuing slideshow");a(function(){a(f.s,f.c).cycle(b,c)});return this}e("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)"));return this}return this.each(function(){var h=g(this,b,c);if(h===false)return;h.updateActivePagerLink=h.updateActivePagerLink||a.fn.cycle.updateActivePagerLink;if(this.cycleTimeout)clearTimeout(this.cycleTimeout);this.cycleTimeout=this.cyclePause=0;var i=a(this);var k=h.slideExpr?a(h.slideExpr,this):i.children();var l=k.get();var m=j(i,k,l,h,f);if(m===false)return;if(l.length<2){e("terminating; too few slides: "+l.length);return}var p=m.continuous?10:o(l[m.currSlide],l[m.nextSlide],m,!m.backwards);if(p){p+=m.delay||0;if(p<10)p=10;d("first timeout: "+p);this.cycleTimeout=setTimeout(function(){n(l,m,0,!h.backwards)},p)}})};a.fn.cycle.resetState=function(b,c){c=c||b.fx;b.before=[];b.after=[];b.cssBefore=a.extend({},b.original.cssBefore);b.cssAfter=a.extend({},b.original.cssAfter);b.animIn=a.extend({},b.original.animIn);b.animOut=a.extend({},b.original.animOut);b.fxFn=null;a.each(b.original.before,function(){b.before.push(this)});a.each(b.original.after,function(){b.after.push(this)});var d=a.fn.cycle.transitions[c];if(a.isFunction(d))d(b.$cont,a(b.elements),b)};a.fn.cycle.updateActivePagerLink=function(b,c,d){a(b).each(function(){a(this).children().removeClass(d).eq(c).addClass(d)})};a.fn.cycle.next=function(a){q(a,1)};a.fn.cycle.prev=function(a){q(a,0)};a.fn.cycle.createPagerAnchor=function(b,c,e,g,h){var i;if(a.isFunction(h.pagerAnchorBuilder)){i=h.pagerAnchorBuilder(b,c);d("pagerAnchorBuilder("+b+", el) returned: "+i)}else i='<a href="#">'+(b+1)+"</a>";if(!i)return;var j=a(i);if(j.parents("body").length===0){var k=[];if(e.length>1){e.each(function(){var b=j.clone(true);a(this).append(b);k.push(b[0])});j=a(k)}else{j.appendTo(e)}}h.pagerAnchors=h.pagerAnchors||[];h.pagerAnchors.push(j);var l=function(c){c.preventDefault();h.nextSlide=b;var d=h.$cont[0],e=d.cycleTimeout;if(e){clearTimeout(e);d.cycleTimeout=0}var f=h.onPagerEvent||h.pagerClick;if(a.isFunction(f))f(h.nextSlide,g[h.nextSlide]);n(g,h,1,h.currSlide<b)};if(/mouseenter|mouseover/i.test(h.pagerEvent)){j.hover(l,function(){})}else{j.bind(h.pagerEvent,l)}if(!/^click/.test(h.pagerEvent)&&!h.allowPagerClickBubble)j.bind("click.cycle",function(){return false});var m=h.$cont[0];var o=false;if(h.pauseOnPagerHover){j.hover(function(){o=true;m.cyclePause++;f(m,true,true)},function(){o&&m.cyclePause--;f(m,true,true)})}};a.fn.cycle.hopsFromLast=function(a,b){var c,d=a.lastSlide,e=a.currSlide;if(b)c=e>d?e-d:a.slideCount-d;else c=e<d?d-e:d+a.slideCount-e;return c};a.fn.cycle.commonReset=function(b,c,d,e,f,g){a(d.elements).not(b).hide();if(typeof d.cssBefore.opacity=="undefined")d.cssBefore.opacity=1;d.cssBefore.display="block";if(d.slideResize&&e!==false&&c.cycleW>0)d.cssBefore.width=c.cycleW;if(d.slideResize&&f!==false&&c.cycleH>0)d.cssBefore.height=c.cycleH;d.cssAfter=d.cssAfter||{};d.cssAfter.display="none";a(b).css("zIndex",d.slideCount+(g===true?1:0));a(c).css("zIndex",d.slideCount+(g===true?0:1))};a.fn.cycle.custom=function(b,c,d,e,f,g){var h=a(b),i=a(c);var j=d.speedIn,k=d.speedOut,l=d.easeIn,m=d.easeOut;i.css(d.cssBefore);if(g){if(typeof g=="number")j=k=g;else j=k=1;l=m=null}var n=function(){i.animate(d.animIn,j,l,function(){e()})};h.animate(d.animOut,k,m,function(){h.css(d.cssAfter);if(!d.sync)n()});if(d.sync)n()};a.fn.cycle.transitions={fade:function(b,c,d){c.not(":eq("+d.currSlide+")").css("opacity",0);d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.cssBefore.opacity=0});d.animIn={opacity:1};d.animOut={opacity:0};d.cssBefore={top:0,left:0}}};a.fn.cycle.ver=function(){return c};a.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!a.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1e3,speedIn:null,speedOut:null,startingSlide:b,sync:1,timeout:4e3,timeoutFn:null,updateActivePagerLink:null,width:null}})(jQuery);(function(a){a.fn.cycle.transitions.none=function(b,c,d){d.fxFn=function(b,c,d,e){a(c).show();a(b).hide();e()}};a.fn.cycle.transitions.fadeout=function(b,c,d){c.not(":eq("+d.currSlide+")").css({display:"block",opacity:1});d.before.push(function(b,c,d,e,f,g){a(b).css("zIndex",d.slideCount+(!g===true?1:0));a(c).css("zIndex",d.slideCount+(!g===true?0:1))});d.animIn.opacity=1;d.animOut.opacity=0;d.cssBefore.opacity=1;d.cssBefore.display="block";d.cssAfter.zIndex=0};a.fn.cycle.transitions.scrollUp=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssBefore.top=e;d.cssBefore.left=0;d.cssFirst.top=0;d.animIn.top=0;d.animOut.top=-e};a.fn.cycle.transitions.scrollDown=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.height();d.cssFirst.top=0;d.cssBefore.top=-e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.scrollLeft=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=0-e};a.fn.cycle.transitions.scrollRight=function(b,c,d){b.css("overflow","hidden");d.before.push(a.fn.cycle.commonReset);var e=b.width();d.cssFirst.left=0;d.cssBefore.left=-e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.scrollHorz=function(b,c,d){b.css("overflow","hidden").width();d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.left=e?c.cycleW-1:1-c.cycleW;d.animOut.left=e?-b.cycleW:b.cycleW});d.cssFirst.left=0;d.cssBefore.top=0;d.animIn.left=0;d.animOut.top=0};a.fn.cycle.transitions.scrollVert=function(b,c,d){b.css("overflow","hidden");d.before.push(function(b,c,d,e){if(d.rev)e=!e;a.fn.cycle.commonReset(b,c,d);d.cssBefore.top=e?1-c.cycleH:c.cycleH-1;d.animOut.top=e?b.cycleH:-b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.animIn.top=0;d.animOut.left=0};a.fn.cycle.transitions.slideX=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.width="show";d.animOut.width=0};a.fn.cycle.transitions.slideY=function(b,c,d){d.before.push(function(b,c,d){a(d.elements).not(b).hide();a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH});d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animIn.height="show";d.animOut.height=0};a.fn.cycle.transitions.shuffle=function(b,c,d){var e,f=b.css("overflow","visible").width();c.css({left:0,top:0});d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true)});if(!d.speedAdjusted){d.speed=d.speed/2;d.speedAdjusted=true}d.random=0;d.shuffle=d.shuffle||{left:-f,top:15};d.els=[];for(e=0;e<c.length;e++)d.els.push(c[e]);for(e=0;e<d.currSlide;e++)d.els.push(d.els.shift());d.fxFn=function(b,c,d,e,f){if(d.rev)f=!f;var g=f?a(b):a(c);a(c).css(d.cssBefore);var h=d.slideCount;g.animate(d.shuffle,d.speedIn,d.easeIn,function(){var c=a.fn.cycle.hopsFromLast(d,f);for(var i=0;i<c;i++)f?d.els.push(d.els.shift()):d.els.unshift(d.els.pop());if(f){for(var j=0,k=d.els.length;j<k;j++)a(d.els[j]).css("z-index",k-j+h)}else{var l=a(b).css("z-index");g.css("z-index",parseInt(l,10)+1+h)}g.animate({left:0,top:0},d.speedOut,d.easeOut,function(){a(f?this:b).hide();if(e)e()})})};a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0})};a.fn.cycle.transitions.turnUp=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=c.cycleH;d.animIn.height=c.cycleH;d.animOut.width=c.cycleW});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.height=0;d.animIn.top=0;d.animOut.height=0};a.fn.cycle.transitions.turnDown=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssFirst.top=0;d.cssBefore.left=0;d.cssBefore.top=0;d.cssBefore.height=0;d.animOut.height=0};a.fn.cycle.transitions.turnLeft=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=c.cycleW;d.animIn.width=c.cycleW});d.cssBefore.top=0;d.cssBefore.width=0;d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.turnRight=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});a.extend(d.cssBefore,{top:0,left:0,width:0});d.animIn.left=0;d.animOut.width=0};a.fn.cycle.transitions.zoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false,true);d.cssBefore.top=c.cycleH/2;d.cssBefore.left=c.cycleW/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH});a.extend(d.animOut,{width:0,height:0,top:b.cycleH/2,left:b.cycleW/2})});d.cssFirst.top=0;d.cssFirst.left=0;d.cssBefore.width=0;d.cssBefore.height=0};a.fn.cycle.transitions.fadeZoom=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,false);d.cssBefore.left=c.cycleW/2;d.cssBefore.top=c.cycleH/2;a.extend(d.animIn,{top:0,left:0,width:c.cycleW,height:c.cycleH})});d.cssBefore.width=0;d.cssBefore.height=0;d.animOut.opacity=0};a.fn.cycle.transitions.blindX=function(b,c,d){var e=b.css("overflow","hidden").width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.width=c.cycleW;d.animOut.left=b.cycleW});d.cssBefore.left=e;d.cssBefore.top=0;d.animIn.left=0;d.animOut.left=e};a.fn.cycle.transitions.blindY=function(b,c,d){var e=b.css("overflow","hidden").height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=0;d.animIn.top=0;d.animOut.top=e};a.fn.cycle.transitions.blindZ=function(b,c,d){var e=b.css("overflow","hidden").height();var f=b.width();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);d.animIn.height=c.cycleH;d.animOut.top=b.cycleH});d.cssBefore.top=e;d.cssBefore.left=f;d.animIn.top=0;d.animIn.left=0;d.animOut.top=e;d.animOut.left=f};a.fn.cycle.transitions.growX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true);d.cssBefore.left=this.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.growY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false);d.cssBefore.top=this.cycleH/2;d.animIn.top=0;d.animIn.height=this.cycleH;d.animOut.top=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.curtainX=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,false,true,true);d.cssBefore.left=c.cycleW/2;d.animIn.left=0;d.animIn.width=this.cycleW;d.animOut.left=b.cycleW/2;d.animOut.width=0});d.cssBefore.top=0;d.cssBefore.width=0};a.fn.cycle.transitions.curtainY=function(b,c,d){d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,false,true);d.cssBefore.top=c.cycleH/2;d.animIn.top=0;d.animIn.height=c.cycleH;d.animOut.top=b.cycleH/2;d.animOut.height=0});d.cssBefore.height=0;d.cssBefore.left=0};a.fn.cycle.transitions.cover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d);if(e=="right")d.cssBefore.left=-f;else if(e=="up")d.cssBefore.top=g;else if(e=="down")d.cssBefore.top=-g;else d.cssBefore.left=f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.uncover=function(b,c,d){var e=d.direction||"left";var f=b.css("overflow","hidden").width();var g=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(e=="right")d.animOut.left=f;else if(e=="up")d.animOut.top=-g;else if(e=="down")d.animOut.top=g;else d.animOut.left=-f});d.animIn.left=0;d.animIn.top=0;d.cssBefore.top=0;d.cssBefore.left=0};a.fn.cycle.transitions.toss=function(b,c,d){var e=b.css("overflow","visible").width();var f=b.height();d.before.push(function(b,c,d){a.fn.cycle.commonReset(b,c,d,true,true,true);if(!d.animOut.left&&!d.animOut.top)a.extend(d.animOut,{left:e*2,top:-f/2,opacity:0});else d.animOut.opacity=0});d.cssBefore.left=0;d.cssBefore.top=0;d.animIn.left=0};a.fn.cycle.transitions.wipe=function(b,c,d){var e=b.css("overflow","hidden").width();var f=b.height();d.cssBefore=d.cssBefore||{};var g;if(d.clip){if(/l2r/.test(d.clip))g="rect(0px 0px "+f+"px 0px)";else if(/r2l/.test(d.clip))g="rect(0px "+e+"px "+f+"px "+e+"px)";else if(/t2b/.test(d.clip))g="rect(0px "+e+"px 0px 0px)";else if(/b2t/.test(d.clip))g="rect("+f+"px "+e+"px "+f+"px 0px)";else if(/zoom/.test(d.clip)){var h=parseInt(f/2,10);var i=parseInt(e/2,10);g="rect("+h+"px "+i+"px "+h+"px "+i+"px)"}}d.cssBefore.clip=d.cssBefore.clip||g||"rect(0px 0px 0px 0px)";var j=d.cssBefore.clip.match(/(\d+)/g);var k=parseInt(j[0],10),l=parseInt(j[1],10),m=parseInt(j[2],10),n=parseInt(j[3],10);d.before.push(function(b,c,d){if(b==c)return;var g=a(b),h=a(c);a.fn.cycle.commonReset(b,c,d,true,true,false);d.cssAfter.display="block";var i=1,j=parseInt(d.speedIn/13,10)-1;(function o(){var a=k?k-parseInt(i*(k/j),10):0;var b=n?n-parseInt(i*(n/j),10):0;var c=m<f?m+parseInt(i*((f-m)/j||1),10):f;var d=l<e?l+parseInt(i*((e-l)/j||1),10):e;h.css({clip:"rect("+a+"px "+d+"px "+c+"px "+b+"px)"});i++<=j?setTimeout(o,13):g.css("display","none")})()});a.extend(d.cssBefore,{display:"block",opacity:1,top:0,left:0});d.animIn={left:0};d.animOut={left:0}}})(jQuery)/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-csstransforms-input-inputtypes-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cookies-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}function H(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.backgroundsize=function(){return G("backgroundSize")},r.csstransforms=function(){return!!G("transform")};for(var I in r)z(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("cookies",function(){document.cookie="cookietest=1";var a=document.cookie.indexOf("cookietest=")!=-1;return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",a});(function(b,f){b.fn.jPlayer=function(a){var c="string"===typeof a,d=Array.prototype.slice.call(arguments,1),e=this;a=!c&&d.length?b.extend.apply(null,[!0,a].concat(d)):a;if(c&&"_"===a.charAt(0))return e;c?this.each(function(){var c=b.data(this,"jPlayer"),h=c&&b.isFunction(c[a])?c[a].apply(c,d):c;if(h!==c&&h!==f)return e=h,!1}):this.each(function(){var c=b.data(this,"jPlayer");c?c.option(a||{}):b.data(this,"jPlayer",new b.jPlayer(a,this))});return e};b.jPlayer=function(a,c){if(arguments.length){this.element=
b(c);this.options=b.extend(!0,{},this.options,a);var d=this;this.element.bind("remove.jPlayer",function(){d.destroy()});this._init()}};b.jPlayer.emulateMethods="load play pause";b.jPlayer.emulateStatus="src readyState networkState currentTime duration paused ended playbackRate";b.jPlayer.emulateOptions="muted volume";b.jPlayer.reservedEvent="ready flashreset resize repeat error warning";b.jPlayer.event={ready:"jPlayer_ready",flashreset:"jPlayer_flashreset",resize:"jPlayer_resize",repeat:"jPlayer_repeat",
click:"jPlayer_click",error:"jPlayer_error",warning:"jPlayer_warning",loadstart:"jPlayer_loadstart",progress:"jPlayer_progress",suspend:"jPlayer_suspend",abort:"jPlayer_abort",emptied:"jPlayer_emptied",stalled:"jPlayer_stalled",play:"jPlayer_play",pause:"jPlayer_pause",loadedmetadata:"jPlayer_loadedmetadata",loadeddata:"jPlayer_loadeddata",waiting:"jPlayer_waiting",playing:"jPlayer_playing",canplay:"jPlayer_canplay",canplaythrough:"jPlayer_canplaythrough",seeking:"jPlayer_seeking",seeked:"jPlayer_seeked",
timeupdate:"jPlayer_timeupdate",ended:"jPlayer_ended",ratechange:"jPlayer_ratechange",durationchange:"jPlayer_durationchange",volumechange:"jPlayer_volumechange",flashbufferfull:"jPlayer_flashbufferfull",flashbufferempty:"jPlayer_flashbufferempty"};b.jPlayer.htmlEvent="loadstart abort emptied stalled loadedmetadata loadeddata canplay canplaythrough ratechange".split(" ");b.jPlayer.pause=function(){b.each(b.jPlayer.prototype.instances,function(a,c){c.data("jPlayer").status.srcSet&&c.jPlayer("pause")})};
b.jPlayer.timeFormat={showHour:!1,showMin:!0,showSec:!0,padHour:!1,padMin:!0,padSec:!0,sepHour:":",sepMin:":",sepSec:""};b.jPlayer.convertTime=function(a){var c=new Date(1E3*a),d=c.getUTCHours();a=c.getUTCMinutes();c=c.getUTCSeconds();d=b.jPlayer.timeFormat.padHour&&10>d?"0"+d:d;a=b.jPlayer.timeFormat.padMin&&10>a?"0"+a:a;c=b.jPlayer.timeFormat.padSec&&10>c?"0"+c:c;return(b.jPlayer.timeFormat.showHour?d+b.jPlayer.timeFormat.sepHour:"")+(b.jPlayer.timeFormat.showMin?a+b.jPlayer.timeFormat.sepMin:"")+
(b.jPlayer.timeFormat.showSec?c+b.jPlayer.timeFormat.sepSec:"")};b.jPlayer.uaBrowser=function(a){a=a.toLowerCase();var c=/(opera)(?:.*version)?[ \/]([\w.]+)/,b=/(msie) ([\w.]+)/,e=/(mozilla)(?:.*? rv:([\w.]+))?/;a=/(webkit)[ \/]([\w.]+)/.exec(a)||c.exec(a)||b.exec(a)||0>a.indexOf("compatible")&&e.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}};b.jPlayer.uaPlatform=function(a){var b=a.toLowerCase(),d=/(android)/,e=/(mobile)/;a=/(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/.exec(b)||
[];b=/(ipad|playbook)/.exec(b)||!e.exec(b)&&d.exec(b)||[];a[1]&&(a[1]=a[1].replace(/\s/g,"_"));return{platform:a[1]||"",tablet:b[1]||""}};b.jPlayer.browser={};b.jPlayer.platform={};var j=b.jPlayer.uaBrowser(navigator.userAgent);j.browser&&(b.jPlayer.browser[j.browser]=!0,b.jPlayer.browser.version=j.version);j=b.jPlayer.uaPlatform(navigator.userAgent);j.platform&&(b.jPlayer.platform[j.platform]=!0,b.jPlayer.platform.mobile=!j.tablet,b.jPlayer.platform.tablet=!!j.tablet);b.jPlayer.prototype={count:0,
version:{script:"2.2.0",needFlash:"2.2.0",flash:"unknown"},options:{swfPath:"js",solution:"html, flash",supplied:"mp3",preload:"metadata",volume:0.8,muted:!1,wmode:"opaque",backgroundColor:"#000000",cssSelectorAncestor:"#jp_container_1",cssSelector:{videoPlay:".jp-video-play",play:".jp-play",pause:".jp-pause",stop:".jp-stop",seekBar:".jp-seek-bar",playBar:".jp-play-bar",mute:".jp-mute",unmute:".jp-unmute",volumeBar:".jp-volume-bar",volumeBarValue:".jp-volume-bar-value",volumeMax:".jp-volume-max",
currentTime:".jp-current-time",duration:".jp-duration",fullScreen:".jp-full-screen",restoreScreen:".jp-restore-screen",repeat:".jp-repeat",repeatOff:".jp-repeat-off",gui:".jp-gui",noSolution:".jp-no-solution"},fullScreen:!1,autohide:{restored:!1,full:!0,fadeIn:200,fadeOut:600,hold:1E3},loop:!1,repeat:function(a){a.jPlayer.options.loop?b(this).unbind(".jPlayerRepeat").bind(b.jPlayer.event.ended+".jPlayer.jPlayerRepeat",function(){b(this).jPlayer("play")}):b(this).unbind(".jPlayerRepeat")},nativeVideoControls:{},
noFullScreen:{msie:/msie [0-6]/,ipad:/ipad.*?os [0-4]/,iphone:/iphone/,ipod:/ipod/,android_pad:/android [0-3](?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/},noVolume:{ipad:/ipad/,iphone:/iphone/,ipod:/ipod/,android_pad:/android(?!.*?mobile)/,android_phone:/android.*?mobile/,blackberry:/blackberry/,windows_ce:/windows ce/,webos:/webos/,playbook:/playbook/},verticalVolume:!1,idPrefix:"jp",noConflict:"jQuery",emulateHtml:!1,errorAlerts:!1,
warningAlerts:!1},optionsAudio:{size:{width:"0px",height:"0px",cssClass:""},sizeFull:{width:"0px",height:"0px",cssClass:""}},optionsVideo:{size:{width:"480px",height:"270px",cssClass:"jp-video-270p"},sizeFull:{width:"100%",height:"100%",cssClass:"jp-video-full"}},instances:{},status:{src:"",media:{},paused:!0,format:{},formatType:"",waitForPlay:!0,waitForLoad:!0,srcSet:!1,video:!1,seekPercent:0,currentPercentRelative:0,currentPercentAbsolute:0,currentTime:0,duration:0,netStreamInfo:"",readyState:0,
networkState:0,playbackRate:1,ended:0},internal:{ready:!1},solution:{html:!0,flash:!0},format:{mp3:{codec:'audio/mpeg; codecs="mp3"',flashCanPlay:!0,media:"audio"},m4a:{codec:'audio/mp4; codecs="mp4a.40.2"',flashCanPlay:!0,media:"audio"},oga:{codec:'audio/ogg; codecs="vorbis"',flashCanPlay:!1,media:"audio"},wav:{codec:'audio/wav; codecs="1"',flashCanPlay:!1,media:"audio"},webma:{codec:'audio/webm; codecs="vorbis"',flashCanPlay:!1,media:"audio"},fla:{codec:"audio/x-flv",flashCanPlay:!0,media:"audio"},
rtmpa:{codec:'audio/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"audio"},m4v:{codec:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',flashCanPlay:!0,media:"video"},ogv:{codec:'video/ogg; codecs="theora, vorbis"',flashCanPlay:!1,media:"video"},webmv:{codec:'video/webm; codecs="vorbis, vp8"',flashCanPlay:!1,media:"video"},flv:{codec:"video/x-flv",flashCanPlay:!0,media:"video"},rtmpv:{codec:'video/rtmp; codecs="rtmp"',flashCanPlay:!0,media:"video"}},_init:function(){var a=this;this.element.empty();this.status=
b.extend({},this.status);this.internal=b.extend({},this.internal);this.internal.domNode=this.element.get(0);this.formats=[];this.solutions=[];this.require={};this.htmlElement={};this.html={};this.html.audio={};this.html.video={};this.flash={};this.css={};this.css.cs={};this.css.jq={};this.ancestorJq=[];this.options.volume=this._limitValue(this.options.volume,0,1);b.each(this.options.supplied.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.format[e]){var f=!1;b.each(a.formats,
function(a,b){if(e===b)return f=!0,!1});f||a.formats.push(e)}});b.each(this.options.solution.toLowerCase().split(","),function(c,d){var e=d.replace(/^\s+|\s+$/g,"");if(a.solution[e]){var f=!1;b.each(a.solutions,function(a,b){if(e===b)return f=!0,!1});f||a.solutions.push(e)}});this.internal.instance="jp_"+this.count;this.instances[this.internal.instance]=this.element;this.element.attr("id")||this.element.attr("id",this.options.idPrefix+"_jplayer_"+this.count);this.internal.self=b.extend({},{id:this.element.attr("id"),
jq:this.element});this.internal.audio=b.extend({},{id:this.options.idPrefix+"_audio_"+this.count,jq:f});this.internal.video=b.extend({},{id:this.options.idPrefix+"_video_"+this.count,jq:f});this.internal.flash=b.extend({},{id:this.options.idPrefix+"_flash_"+this.count,jq:f,swf:this.options.swfPath+(".swf"!==this.options.swfPath.toLowerCase().slice(-4)?(this.options.swfPath&&"/"!==this.options.swfPath.slice(-1)?"/":"")+"Jplayer.swf":"")});this.internal.poster=b.extend({},{id:this.options.idPrefix+
"_poster_"+this.count,jq:f});b.each(b.jPlayer.event,function(b,c){a.options[b]!==f&&(a.element.bind(c+".jPlayer",a.options[b]),a.options[b]=f)});this.require.audio=!1;this.require.video=!1;b.each(this.formats,function(b,c){a.require[a.format[c].media]=!0});this.options=this.require.video?b.extend(!0,{},this.optionsVideo,this.options):b.extend(!0,{},this.optionsAudio,this.options);this._setSize();this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=
this._uaBlocklist(this.options.noFullScreen);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._restrictNativeVideoControls();this.htmlElement.poster=document.createElement("img");this.htmlElement.poster.id=this.internal.poster.id;this.htmlElement.poster.onload=function(){(!a.status.video||a.status.waitForPlay)&&a.internal.poster.jq.show()};this.element.append(this.htmlElement.poster);this.internal.poster.jq=b("#"+this.internal.poster.id);this.internal.poster.jq.css({width:this.status.width,
height:this.status.height});this.internal.poster.jq.hide();this.internal.poster.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)});this.html.audio.available=!1;this.require.audio&&(this.htmlElement.audio=document.createElement("audio"),this.htmlElement.audio.id=this.internal.audio.id,this.html.audio.available=!!this.htmlElement.audio.canPlayType&&this._testCanPlayType(this.htmlElement.audio));this.html.video.available=!1;this.require.video&&(this.htmlElement.video=document.createElement("video"),
this.htmlElement.video.id=this.internal.video.id,this.html.video.available=!!this.htmlElement.video.canPlayType&&this._testCanPlayType(this.htmlElement.video));this.flash.available=this._checkForFlash(10);this.html.canPlay={};this.flash.canPlay={};b.each(this.formats,function(b,c){a.html.canPlay[c]=a.html[a.format[c].media].available&&""!==a.htmlElement[a.format[c].media].canPlayType(a.format[c].codec);a.flash.canPlay[c]=a.format[c].flashCanPlay&&a.flash.available});this.html.desired=!1;this.flash.desired=
!1;b.each(this.solutions,function(c,d){if(0===c)a[d].desired=!0;else{var e=!1,f=!1;b.each(a.formats,function(b,c){a[a.solutions[0]].canPlay[c]&&("video"===a.format[c].media?f=!0:e=!0)});a[d].desired=a.require.audio&&!e||a.require.video&&!f}});this.html.support={};this.flash.support={};b.each(this.formats,function(b,c){a.html.support[c]=a.html.canPlay[c]&&a.html.desired;a.flash.support[c]=a.flash.canPlay[c]&&a.flash.desired});this.html.used=!1;this.flash.used=!1;b.each(this.solutions,function(c,d){b.each(a.formats,
function(b,c){if(a[d].support[c])return a[d].used=!0,!1})});this._resetActive();this._resetGate();this._cssSelectorAncestor(this.options.cssSelectorAncestor);!this.html.used&&!this.flash.used?(this._error({type:b.jPlayer.error.NO_SOLUTION,context:"{solution:'"+this.options.solution+"', supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SOLUTION,hint:b.jPlayer.errorHint.NO_SOLUTION}),this.css.jq.noSolution.length&&this.css.jq.noSolution.show()):this.css.jq.noSolution.length&&this.css.jq.noSolution.hide();
if(this.flash.used){var c,d="jQuery="+encodeURI(this.options.noConflict)+"&id="+encodeURI(this.internal.self.id)+"&vol="+this.options.volume+"&muted="+this.options.muted;if(b.jPlayer.browser.msie&&8>=Number(b.jPlayer.browser.version)){d=['<param name="movie" value="'+this.internal.flash.swf+'" />','<param name="FlashVars" value="'+d+'" />','<param name="allowScriptAccess" value="always" />','<param name="bgcolor" value="'+this.options.backgroundColor+'" />','<param name="wmode" value="'+this.options.wmode+
'" />'];c=document.createElement('<object id="'+this.internal.flash.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0"></object>');for(var e=0;e<d.length;e++)c.appendChild(document.createElement(d[e]))}else e=function(a,b,c){var d=document.createElement("param");d.setAttribute("name",b);d.setAttribute("value",c);a.appendChild(d)},c=document.createElement("object"),c.setAttribute("id",this.internal.flash.id),c.setAttribute("data",this.internal.flash.swf),c.setAttribute("type",
"application/x-shockwave-flash"),c.setAttribute("width","1"),c.setAttribute("height","1"),e(c,"flashvars",d),e(c,"allowscriptaccess","always"),e(c,"bgcolor",this.options.backgroundColor),e(c,"wmode",this.options.wmode);this.element.append(c);this.internal.flash.jq=b(c)}this.html.used&&(this.html.audio.available&&(this._addHtmlEventListeners(this.htmlElement.audio,this.html.audio),this.element.append(this.htmlElement.audio),this.internal.audio.jq=b("#"+this.internal.audio.id)),this.html.video.available&&
(this._addHtmlEventListeners(this.htmlElement.video,this.html.video),this.element.append(this.htmlElement.video),this.internal.video.jq=b("#"+this.internal.video.id),this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):this.internal.video.jq.css({width:"0px",height:"0px"}),this.internal.video.jq.bind("click.jPlayer",function(){a._trigger(b.jPlayer.event.click)})));this.options.emulateHtml&&this._emulateHtmlBridge();this.html.used&&!this.flash.used&&
setTimeout(function(){a.internal.ready=!0;a.version.flash="n/a";a._trigger(b.jPlayer.event.repeat);a._trigger(b.jPlayer.event.ready)},100);this._updateNativeVideoControls();this._updateInterface();this._updateButtons(!1);this._updateAutohide();this._updateVolume(this.options.volume);this._updateMute(this.options.muted);this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide();b.jPlayer.prototype.count++},destroy:function(){this.clearMedia();this._removeUiClass();this.css.jq.currentTime.length&&this.css.jq.currentTime.text("");
this.css.jq.duration.length&&this.css.jq.duration.text("");b.each(this.css.jq,function(a,b){b.length&&b.unbind(".jPlayer")});this.internal.poster.jq.unbind(".jPlayer");this.internal.video.jq&&this.internal.video.jq.unbind(".jPlayer");this.options.emulateHtml&&this._destroyHtmlBridge();this.element.removeData("jPlayer");this.element.unbind(".jPlayer");this.element.empty();delete this.instances[this.internal.instance]},enable:function(){},disable:function(){},_testCanPlayType:function(a){try{return a.canPlayType(this.format.mp3.codec),
!0}catch(b){return!1}},_uaBlocklist:function(a){var c=navigator.userAgent.toLowerCase(),d=!1;b.each(a,function(a,b){if(b&&b.test(c))return d=!0,!1});return d},_restrictNativeVideoControls:function(){this.require.audio&&this.status.nativeVideoControls&&(this.status.nativeVideoControls=!1,this.status.noFullScreen=!0)},_updateNativeVideoControls:function(){this.html.video.available&&this.html.used&&(this.htmlElement.video.controls=this.status.nativeVideoControls,this._updateAutohide(),this.status.nativeVideoControls&&
this.require.video?(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})):this.status.waitForPlay&&this.status.video&&(this.internal.poster.jq.show(),this.internal.video.jq.css({width:"0px",height:"0px"})))},_addHtmlEventListeners:function(a,c){var d=this;a.preload=this.options.preload;a.muted=this.options.muted;a.volume=this.options.volume;a.addEventListener("progress",function(){c.gate&&(d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.progress))},
!1);a.addEventListener("timeupdate",function(){c.gate&&(d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.timeupdate))},!1);a.addEventListener("durationchange",function(){c.gate&&(d._getHtmlStatus(a),d._updateInterface(),d._trigger(b.jPlayer.event.durationchange))},!1);a.addEventListener("play",function(){c.gate&&(d._updateButtons(!0),d._html_checkWaitForPlay(),d._trigger(b.jPlayer.event.play))},!1);a.addEventListener("playing",function(){c.gate&&(d._updateButtons(!0),d._seeked(),
d._trigger(b.jPlayer.event.playing))},!1);a.addEventListener("pause",function(){c.gate&&(d._updateButtons(!1),d._trigger(b.jPlayer.event.pause))},!1);a.addEventListener("waiting",function(){c.gate&&(d._seeking(),d._trigger(b.jPlayer.event.waiting))},!1);a.addEventListener("seeking",function(){c.gate&&(d._seeking(),d._trigger(b.jPlayer.event.seeking))},!1);a.addEventListener("seeked",function(){c.gate&&(d._seeked(),d._trigger(b.jPlayer.event.seeked))},!1);a.addEventListener("volumechange",function(){c.gate&&
(d.options.volume=a.volume,d.options.muted=a.muted,d._updateMute(),d._updateVolume(),d._trigger(b.jPlayer.event.volumechange))},!1);a.addEventListener("suspend",function(){c.gate&&(d._seeked(),d._trigger(b.jPlayer.event.suspend))},!1);a.addEventListener("ended",function(){c.gate&&(b.jPlayer.browser.webkit||(d.htmlElement.media.currentTime=0),d.htmlElement.media.pause(),d._updateButtons(!1),d._getHtmlStatus(a,!0),d._updateInterface(),d._trigger(b.jPlayer.event.ended))},!1);a.addEventListener("error",
function(e){c.gate&&(d._updateButtons(!1),d._seeked(),d.status.srcSet&&(clearTimeout(d.internal.htmlDlyCmdId),d.status.waitForLoad=!0,d.status.waitForPlay=!0,d.status.video&&!d.status.nativeVideoControls&&d.internal.video.jq.css({width:"0px",height:"0px"}),d._validString(d.status.media.poster)&&!d.status.nativeVideoControls&&d.internal.poster.jq.show(),d.css.jq.videoPlay.length&&d.css.jq.videoPlay.show(),d._error({type:b.jPlayer.error.URL,context:d.status.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL,htmlError:e&&e.target&&e.target.error?e.target.error.code:null})))},
!1);b.each(b.jPlayer.htmlEvent,function(e,g){a.addEventListener(this,function(){c.gate&&d._trigger(b.jPlayer.event[g])},!1)})},_getHtmlStatus:function(a,b){var d=0,e=0,g=0,f=0;isFinite(a.duration)&&(this.status.duration=a.duration);d=a.currentTime;e=0<this.status.duration?100*d/this.status.duration:0;"object"===typeof a.seekable&&0<a.seekable.length?(g=0<this.status.duration?100*a.seekable.end(a.seekable.length-1)/this.status.duration:100,f=0<this.status.duration?100*a.currentTime/a.seekable.end(a.seekable.length-
1):0):(g=100,f=e);b&&(e=f=d=0);this.status.seekPercent=g;this.status.currentPercentRelative=f;this.status.currentPercentAbsolute=e;this.status.currentTime=d;this.status.readyState=a.readyState;this.status.networkState=a.networkState;this.status.playbackRate=a.playbackRate;this.status.ended=a.ended},_resetStatus:function(){this.status=b.extend({},this.status,b.jPlayer.prototype.status)},_trigger:function(a,c,d){a=b.Event(a);a.jPlayer={};a.jPlayer.version=b.extend({},this.version);a.jPlayer.options=
b.extend(!0,{},this.options);a.jPlayer.status=b.extend(!0,{},this.status);a.jPlayer.html=b.extend(!0,{},this.html);a.jPlayer.flash=b.extend(!0,{},this.flash);c&&(a.jPlayer.error=b.extend({},c));d&&(a.jPlayer.warning=b.extend({},d));this.element.trigger(a)},jPlayerFlashEvent:function(a,c){if(a===b.jPlayer.event.ready)if(this.internal.ready){if(this.flash.gate){if(this.status.srcSet){var d=this.status.currentTime,e=this.status.paused;this.setMedia(this.status.media);0<d&&(e?this.pause(d):this.play(d))}this._trigger(b.jPlayer.event.flashreset)}}else this.internal.ready=
!0,this.internal.flash.jq.css({width:"0px",height:"0px"}),this.version.flash=c.version,this.version.needFlash!==this.version.flash&&this._error({type:b.jPlayer.error.VERSION,context:this.version.flash,message:b.jPlayer.errorMsg.VERSION+this.version.flash,hint:b.jPlayer.errorHint.VERSION}),this._trigger(b.jPlayer.event.repeat),this._trigger(a);if(this.flash.gate)switch(a){case b.jPlayer.event.progress:this._getFlashStatus(c);this._updateInterface();this._trigger(a);break;case b.jPlayer.event.timeupdate:this._getFlashStatus(c);
this._updateInterface();this._trigger(a);break;case b.jPlayer.event.play:this._seeked();this._updateButtons(!0);this._trigger(a);break;case b.jPlayer.event.pause:this._updateButtons(!1);this._trigger(a);break;case b.jPlayer.event.ended:this._updateButtons(!1);this._trigger(a);break;case b.jPlayer.event.click:this._trigger(a);break;case b.jPlayer.event.error:this.status.waitForLoad=!0;this.status.waitForPlay=!0;this.status.video&&this.internal.flash.jq.css({width:"0px",height:"0px"});this._validString(this.status.media.poster)&&
this.internal.poster.jq.show();this.css.jq.videoPlay.length&&this.status.video&&this.css.jq.videoPlay.show();this.status.video?this._flash_setVideo(this.status.media):this._flash_setAudio(this.status.media);this._updateButtons(!1);this._error({type:b.jPlayer.error.URL,context:c.src,message:b.jPlayer.errorMsg.URL,hint:b.jPlayer.errorHint.URL});break;case b.jPlayer.event.seeking:this._seeking();this._trigger(a);break;case b.jPlayer.event.seeked:this._seeked();this._trigger(a);break;case b.jPlayer.event.ready:break;
default:this._trigger(a)}return!1},_getFlashStatus:function(a){this.status.seekPercent=a.seekPercent;this.status.currentPercentRelative=a.currentPercentRelative;this.status.currentPercentAbsolute=a.currentPercentAbsolute;this.status.currentTime=a.currentTime;this.status.duration=a.duration;this.status.netStreamInfo=a.netStreamInfo;this.status.readyState=4;this.status.networkState=0;this.status.playbackRate=1;this.status.ended=!1},_updateButtons:function(a){a!==f&&(this.status.paused=!a,this.css.jq.play.length&&
this.css.jq.pause.length&&(a?(this.css.jq.play.hide(),this.css.jq.pause.show()):(this.css.jq.play.show(),this.css.jq.pause.hide())));this.css.jq.restoreScreen.length&&this.css.jq.fullScreen.length&&(this.status.noFullScreen?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.hide()):this.options.fullScreen?(this.css.jq.fullScreen.hide(),this.css.jq.restoreScreen.show()):(this.css.jq.fullScreen.show(),this.css.jq.restoreScreen.hide()));this.css.jq.repeat.length&&this.css.jq.repeatOff.length&&
(this.options.loop?(this.css.jq.repeat.hide(),this.css.jq.repeatOff.show()):(this.css.jq.repeat.show(),this.css.jq.repeatOff.hide()))},_updateInterface:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.width(this.status.seekPercent+"%");this.css.jq.playBar.length&&this.css.jq.playBar.width(this.status.currentPercentRelative+"%");this.css.jq.currentTime.length&&this.css.jq.currentTime.text(b.jPlayer.convertTime(this.status.currentTime));this.css.jq.duration.length&&this.css.jq.duration.text(b.jPlayer.convertTime(this.status.duration))},
_seeking:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.addClass("jp-seeking-bg")},_seeked:function(){this.css.jq.seekBar.length&&this.css.jq.seekBar.removeClass("jp-seeking-bg")},_resetGate:function(){this.html.audio.gate=!1;this.html.video.gate=!1;this.flash.gate=!1},_resetActive:function(){this.html.active=!1;this.flash.active=!1},setMedia:function(a){var c=this,d=!1,e=this.status.media.poster!==a.poster;this._resetMedia();this._resetGate();this._resetActive();b.each(this.formats,function(e,
f){var j="video"===c.format[f].media;b.each(c.solutions,function(b,e){if(c[e].support[f]&&c._validString(a[f])){var g="html"===e;j?(g?(c.html.video.gate=!0,c._html_setVideo(a),c.html.active=!0):(c.flash.gate=!0,c._flash_setVideo(a),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.show(),c.status.video=!0):(g?(c.html.audio.gate=!0,c._html_setAudio(a),c.html.active=!0):(c.flash.gate=!0,c._flash_setAudio(a),c.flash.active=!0),c.css.jq.videoPlay.length&&c.css.jq.videoPlay.hide(),c.status.video=
!1);d=!0;return!1}});if(d)return!1});if(d){if((!this.status.nativeVideoControls||!this.html.video.gate)&&this._validString(a.poster))e?this.htmlElement.poster.src=a.poster:this.internal.poster.jq.show();this.status.srcSet=!0;this.status.media=b.extend({},a);this._updateButtons(!1);this._updateInterface()}else this._error({type:b.jPlayer.error.NO_SUPPORT,context:"{supplied:'"+this.options.supplied+"'}",message:b.jPlayer.errorMsg.NO_SUPPORT,hint:b.jPlayer.errorHint.NO_SUPPORT})},_resetMedia:function(){this._resetStatus();
this._updateButtons(!1);this._updateInterface();this._seeked();this.internal.poster.jq.hide();clearTimeout(this.internal.htmlDlyCmdId);this.html.active?this._html_resetMedia():this.flash.active&&this._flash_resetMedia()},clearMedia:function(){this._resetMedia();this.html.active?this._html_clearMedia():this.flash.active&&this._flash_clearMedia();this._resetGate();this._resetActive()},load:function(){this.status.srcSet?this.html.active?this._html_load():this.flash.active&&this._flash_load():this._urlNotSetError("load")},
play:function(a){a="number"===typeof a?a:NaN;this.status.srcSet?this.html.active?this._html_play(a):this.flash.active&&this._flash_play(a):this._urlNotSetError("play")},videoPlay:function(){this.play()},pause:function(a){a="number"===typeof a?a:NaN;this.status.srcSet?this.html.active?this._html_pause(a):this.flash.active&&this._flash_pause(a):this._urlNotSetError("pause")},pauseOthers:function(){var a=this;b.each(this.instances,function(b,d){a.element!==d&&d.data("jPlayer").status.srcSet&&d.jPlayer("pause")})},
stop:function(){this.status.srcSet?this.html.active?this._html_pause(0):this.flash.active&&this._flash_pause(0):this._urlNotSetError("stop")},playHead:function(a){a=this._limitValue(a,0,100);this.status.srcSet?this.html.active?this._html_playHead(a):this.flash.active&&this._flash_playHead(a):this._urlNotSetError("playHead")},_muted:function(a){this.options.muted=a;this.html.used&&this._html_mute(a);this.flash.used&&this._flash_mute(a);!this.html.video.gate&&!this.html.audio.gate&&(this._updateMute(a),
this._updateVolume(this.options.volume),this._trigger(b.jPlayer.event.volumechange))},mute:function(a){a=a===f?!0:!!a;this._muted(a)},unmute:function(a){a=a===f?!0:!!a;this._muted(!a)},_updateMute:function(a){a===f&&(a=this.options.muted);this.css.jq.mute.length&&this.css.jq.unmute.length&&(this.status.noVolume?(this.css.jq.mute.hide(),this.css.jq.unmute.hide()):a?(this.css.jq.mute.hide(),this.css.jq.unmute.show()):(this.css.jq.mute.show(),this.css.jq.unmute.hide()))},volume:function(a){a=this._limitValue(a,
0,1);this.options.volume=a;this.html.used&&this._html_volume(a);this.flash.used&&this._flash_volume(a);!this.html.video.gate&&!this.html.audio.gate&&(this._updateVolume(a),this._trigger(b.jPlayer.event.volumechange))},volumeBar:function(a){if(this.css.jq.volumeBar.length){var b=this.css.jq.volumeBar.offset(),d=a.pageX-b.left,e=this.css.jq.volumeBar.width();a=this.css.jq.volumeBar.height()-a.pageY+b.top;b=this.css.jq.volumeBar.height();this.options.verticalVolume?this.volume(a/b):this.volume(d/e)}this.options.muted&&
this._muted(!1)},volumeBarValue:function(a){this.volumeBar(a)},_updateVolume:function(a){a===f&&(a=this.options.volume);a=this.options.muted?0:a;this.status.noVolume?(this.css.jq.volumeBar.length&&this.css.jq.volumeBar.hide(),this.css.jq.volumeBarValue.length&&this.css.jq.volumeBarValue.hide(),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.hide()):(this.css.jq.volumeBar.length&&this.css.jq.volumeBar.show(),this.css.jq.volumeBarValue.length&&(this.css.jq.volumeBarValue.show(),this.css.jq.volumeBarValue[this.options.verticalVolume?
"height":"width"](100*a+"%")),this.css.jq.volumeMax.length&&this.css.jq.volumeMax.show())},volumeMax:function(){this.volume(1);this.options.muted&&this._muted(!1)},_cssSelectorAncestor:function(a){var c=this;this.options.cssSelectorAncestor=a;this._removeUiClass();this.ancestorJq=a?b(a):[];a&&1!==this.ancestorJq.length&&this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.ancestorJq.length+" found for cssSelectorAncestor.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT});
this._addUiClass();b.each(this.options.cssSelector,function(a,b){c._cssSelector(a,b)})},_cssSelector:function(a,c){var d=this;"string"===typeof c?b.jPlayer.prototype.options.cssSelector[a]?(this.css.jq[a]&&this.css.jq[a].length&&this.css.jq[a].unbind(".jPlayer"),this.options.cssSelector[a]=c,this.css.cs[a]=this.options.cssSelectorAncestor+" "+c,this.css.jq[a]=c?b(this.css.cs[a]):[],this.css.jq[a].length&&this.css.jq[a].bind("click.jPlayer",function(c){d[a](c);b(this).blur();return!1}),c&&1!==this.css.jq[a].length&&
this._warning({type:b.jPlayer.warning.CSS_SELECTOR_COUNT,context:this.css.cs[a],message:b.jPlayer.warningMsg.CSS_SELECTOR_COUNT+this.css.jq[a].length+" found for "+a+" method.",hint:b.jPlayer.warningHint.CSS_SELECTOR_COUNT})):this._warning({type:b.jPlayer.warning.CSS_SELECTOR_METHOD,context:a,message:b.jPlayer.warningMsg.CSS_SELECTOR_METHOD,hint:b.jPlayer.warningHint.CSS_SELECTOR_METHOD}):this._warning({type:b.jPlayer.warning.CSS_SELECTOR_STRING,context:c,message:b.jPlayer.warningMsg.CSS_SELECTOR_STRING,
hint:b.jPlayer.warningHint.CSS_SELECTOR_STRING})},seekBar:function(a){if(this.css.jq.seekBar){var b=this.css.jq.seekBar.offset();a=a.pageX-b.left;b=this.css.jq.seekBar.width();this.playHead(100*a/b)}},playBar:function(a){this.seekBar(a)},repeat:function(){this._loop(!0)},repeatOff:function(){this._loop(!1)},_loop:function(a){this.options.loop!==a&&(this.options.loop=a,this._updateButtons(),this._trigger(b.jPlayer.event.repeat))},currentTime:function(){},duration:function(){},gui:function(){},noSolution:function(){},
option:function(a,c){var d=a;if(0===arguments.length)return b.extend(!0,{},this.options);if("string"===typeof a){var e=a.split(".");if(c===f){for(var d=b.extend(!0,{},this.options),g=0;g<e.length;g++)if(d[e[g]]!==f)d=d[e[g]];else return this._warning({type:b.jPlayer.warning.OPTION_KEY,context:a,message:b.jPlayer.warningMsg.OPTION_KEY,hint:b.jPlayer.warningHint.OPTION_KEY}),f;return d}for(var g=d={},h=0;h<e.length;h++)h<e.length-1?(g[e[h]]={},g=g[e[h]]):g[e[h]]=c}this._setOptions(d);return this},_setOptions:function(a){var c=
this;b.each(a,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,c){var d=this;switch(a){case "volume":this.volume(c);break;case "muted":this._muted(c);break;case "cssSelectorAncestor":this._cssSelectorAncestor(c);break;case "cssSelector":b.each(c,function(a,b){d._cssSelector(a,b)});break;case "fullScreen":this.options[a]!==c&&(this._removeUiClass(),this.options[a]=c,this._refreshSize());break;case "size":!this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();
this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "sizeFull":this.options.fullScreen&&this.options[a].cssClass!==c.cssClass&&this._removeUiClass();this.options[a]=b.extend({},this.options[a],c);this._refreshSize();break;case "autohide":this.options[a]=b.extend({},this.options[a],c);this._updateAutohide();break;case "loop":this._loop(c);break;case "nativeVideoControls":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);
this._restrictNativeVideoControls();this._updateNativeVideoControls();break;case "noFullScreen":this.options[a]=b.extend({},this.options[a],c);this.status.nativeVideoControls=this._uaBlocklist(this.options.nativeVideoControls);this.status.noFullScreen=this._uaBlocklist(this.options.noFullScreen);this._restrictNativeVideoControls();this._updateButtons();break;case "noVolume":this.options[a]=b.extend({},this.options[a],c);this.status.noVolume=this._uaBlocklist(this.options.noVolume);this._updateVolume();
this._updateMute();break;case "emulateHtml":this.options[a]!==c&&((this.options[a]=c)?this._emulateHtmlBridge():this._destroyHtmlBridge())}return this},_refreshSize:function(){this._setSize();this._addUiClass();this._updateSize();this._updateButtons();this._updateAutohide();this._trigger(b.jPlayer.event.resize)},_setSize:function(){this.options.fullScreen?(this.status.width=this.options.sizeFull.width,this.status.height=this.options.sizeFull.height,this.status.cssClass=this.options.sizeFull.cssClass):
(this.status.width=this.options.size.width,this.status.height=this.options.size.height,this.status.cssClass=this.options.size.cssClass);this.element.css({width:this.status.width,height:this.status.height})},_addUiClass:function(){this.ancestorJq.length&&this.ancestorJq.addClass(this.status.cssClass)},_removeUiClass:function(){this.ancestorJq.length&&this.ancestorJq.removeClass(this.status.cssClass)},_updateSize:function(){this.internal.poster.jq.css({width:this.status.width,height:this.status.height});
!this.status.waitForPlay&&this.html.active&&this.status.video||this.html.video.available&&this.html.used&&this.status.nativeVideoControls?this.internal.video.jq.css({width:this.status.width,height:this.status.height}):!this.status.waitForPlay&&(this.flash.active&&this.status.video)&&this.internal.flash.jq.css({width:this.status.width,height:this.status.height})},_updateAutohide:function(){var a=this,b=function(){a.css.jq.gui.fadeIn(a.options.autohide.fadeIn,function(){clearTimeout(a.internal.autohideId);
a.internal.autohideId=setTimeout(function(){a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)},a.options.autohide.hold)})};this.css.jq.gui.length&&(this.css.jq.gui.stop(!0,!0),clearTimeout(this.internal.autohideId),this.element.unbind(".jPlayerAutohide"),this.css.jq.gui.unbind(".jPlayerAutohide"),this.status.nativeVideoControls?this.css.jq.gui.hide():this.options.fullScreen&&this.options.autohide.full||!this.options.fullScreen&&this.options.autohide.restored?(this.element.bind("mousemove.jPlayer.jPlayerAutohide",
b),this.css.jq.gui.bind("mousemove.jPlayer.jPlayerAutohide",b),this.css.jq.gui.hide()):this.css.jq.gui.show())},fullScreen:function(){this._setOption("fullScreen",!0)},restoreScreen:function(){this._setOption("fullScreen",!1)},_html_initMedia:function(){this.htmlElement.media.src=this.status.src;"none"!==this.options.preload&&this._html_load();this._trigger(b.jPlayer.event.timeupdate)},_html_setAudio:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e])return c.status.src=
a[e],c.status.format[e]=!0,c.status.formatType=e,!1});this.htmlElement.media=this.htmlElement.audio;this._html_initMedia()},_html_setVideo:function(a){var c=this;b.each(this.formats,function(b,e){if(c.html.support[e]&&a[e])return c.status.src=a[e],c.status.format[e]=!0,c.status.formatType=e,!1});this.status.nativeVideoControls&&(this.htmlElement.video.poster=this._validString(a.poster)?a.poster:"");this.htmlElement.media=this.htmlElement.video;this._html_initMedia()},_html_resetMedia:function(){this.htmlElement.media&&
(this.htmlElement.media.id===this.internal.video.id&&!this.status.nativeVideoControls&&this.internal.video.jq.css({width:"0px",height:"0px"}),this.htmlElement.media.pause())},_html_clearMedia:function(){this.htmlElement.media&&(this.htmlElement.media.src="",this.htmlElement.media.load())},_html_load:function(){this.status.waitForLoad&&(this.status.waitForLoad=!1,this.htmlElement.media.load());clearTimeout(this.internal.htmlDlyCmdId)},_html_play:function(a){var b=this;this._html_load();this.htmlElement.media.play();
if(!isNaN(a))try{this.htmlElement.media.currentTime=a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.play(a)},100);return}this._html_checkWaitForPlay()},_html_pause:function(a){var b=this;0<a?this._html_load():clearTimeout(this.internal.htmlDlyCmdId);this.htmlElement.media.pause();if(!isNaN(a))try{this.htmlElement.media.currentTime=a}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.pause(a)},100);return}0<a&&this._html_checkWaitForPlay()},_html_playHead:function(a){var b=this;
this._html_load();try{if("object"===typeof this.htmlElement.media.seekable&&0<this.htmlElement.media.seekable.length)this.htmlElement.media.currentTime=a*this.htmlElement.media.seekable.end(this.htmlElement.media.seekable.length-1)/100;else if(0<this.htmlElement.media.duration&&!isNaN(this.htmlElement.media.duration))this.htmlElement.media.currentTime=a*this.htmlElement.media.duration/100;else throw"e";}catch(d){this.internal.htmlDlyCmdId=setTimeout(function(){b.playHead(a)},100);return}this.status.waitForLoad||
this._html_checkWaitForPlay()},_html_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.video.jq.css({width:this.status.width,height:this.status.height})))},_html_volume:function(a){this.html.audio.available&&(this.htmlElement.audio.volume=a);this.html.video.available&&(this.htmlElement.video.volume=a)},_html_mute:function(a){this.html.audio.available&&
(this.htmlElement.audio.muted=a);this.html.video.available&&(this.htmlElement.video.muted=a)},_flash_setAudio:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4a":case "fla":c._getMovie().fl_setAudio_m4a(a[d]);break;case "mp3":c._getMovie().fl_setAudio_mp3(a[d]);break;case "rtmpa":c._getMovie().fl_setAudio_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=!0;c.status.formatType=d;return!1}}),"auto"===this.options.preload&&(this._flash_load(),
this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_setVideo:function(a){var c=this;try{b.each(this.formats,function(b,d){if(c.flash.support[d]&&a[d]){switch(d){case "m4v":case "flv":c._getMovie().fl_setVideo_m4v(a[d]);break;case "rtmpv":c._getMovie().fl_setVideo_rtmp(a[d])}c.status.src=a[d];c.status.format[d]=!0;c.status.formatType=d;return!1}}),"auto"===this.options.preload&&(this._flash_load(),this.status.waitForLoad=!1)}catch(d){this._flashError(d)}},_flash_resetMedia:function(){this.internal.flash.jq.css({width:"0px",
height:"0px"});this._flash_pause(NaN)},_flash_clearMedia:function(){try{this._getMovie().fl_clearMedia()}catch(a){this._flashError(a)}},_flash_load:function(){try{this._getMovie().fl_load()}catch(a){this._flashError(a)}this.status.waitForLoad=!1},_flash_play:function(a){try{this._getMovie().fl_play(a)}catch(b){this._flashError(b)}this.status.waitForLoad=!1;this._flash_checkWaitForPlay()},_flash_pause:function(a){try{this._getMovie().fl_pause(a)}catch(b){this._flashError(b)}0<a&&(this.status.waitForLoad=
!1,this._flash_checkWaitForPlay())},_flash_playHead:function(a){try{this._getMovie().fl_play_head(a)}catch(b){this._flashError(b)}this.status.waitForLoad||this._flash_checkWaitForPlay()},_flash_checkWaitForPlay:function(){this.status.waitForPlay&&(this.status.waitForPlay=!1,this.css.jq.videoPlay.length&&this.css.jq.videoPlay.hide(),this.status.video&&(this.internal.poster.jq.hide(),this.internal.flash.jq.css({width:this.status.width,height:this.status.height})))},_flash_volume:function(a){try{this._getMovie().fl_volume(a)}catch(b){this._flashError(b)}},
_flash_mute:function(a){try{this._getMovie().fl_mute(a)}catch(b){this._flashError(b)}},_getMovie:function(){return document[this.internal.flash.id]},_checkForFlash:function(a){var b=!1,d;if(window.ActiveXObject)try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a),b=!0}catch(e){}else navigator.plugins&&0<navigator.mimeTypes.length&&(d=navigator.plugins["Shockwave Flash"])&&navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/,"$1")>=a&&(b=!0);return b},_validString:function(a){return a&&
"string"===typeof a},_limitValue:function(a,b,d){return a<b?b:a>d?d:a},_urlNotSetError:function(a){this._error({type:b.jPlayer.error.URL_NOT_SET,context:a,message:b.jPlayer.errorMsg.URL_NOT_SET,hint:b.jPlayer.errorHint.URL_NOT_SET})},_flashError:function(a){var c;c=this.internal.ready?"FLASH_DISABLED":"FLASH";this._error({type:b.jPlayer.error[c],context:this.internal.flash.swf,message:b.jPlayer.errorMsg[c]+a.message,hint:b.jPlayer.errorHint[c]});this.internal.flash.jq.css({width:"1px",height:"1px"})},
_error:function(a){this._trigger(b.jPlayer.event.error,a);this.options.errorAlerts&&this._alert("Error!"+(a.message?"\n\n"+a.message:"")+(a.hint?"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_warning:function(a){this._trigger(b.jPlayer.event.warning,f,a);this.options.warningAlerts&&this._alert("Warning!"+(a.message?"\n\n"+a.message:"")+(a.hint?"\n\n"+a.hint:"")+"\n\nContext: "+a.context)},_alert:function(a){alert("jPlayer "+this.version.script+" : id='"+this.internal.self.id+"' : "+a)},_emulateHtmlBridge:function(){var a=
this;b.each(b.jPlayer.emulateMethods.split(/\s+/g),function(b,d){a.internal.domNode[d]=function(b){a[d](b)}});b.each(b.jPlayer.event,function(c,d){var e=!0;b.each(b.jPlayer.reservedEvent.split(/\s+/g),function(a,b){if(b===c)return e=!1});e&&a.element.bind(d+".jPlayer.jPlayerHtml",function(){a._emulateHtmlUpdate();var b=document.createEvent("Event");b.initEvent(c,!1,!0);a.internal.domNode.dispatchEvent(b)})})},_emulateHtmlUpdate:function(){var a=this;b.each(b.jPlayer.emulateStatus.split(/\s+/g),function(b,
d){a.internal.domNode[d]=a.status[d]});b.each(b.jPlayer.emulateOptions.split(/\s+/g),function(b,d){a.internal.domNode[d]=a.options[d]})},_destroyHtmlBridge:function(){var a=this;this.element.unbind(".jPlayerHtml");b.each((b.jPlayer.emulateMethods+" "+b.jPlayer.emulateStatus+" "+b.jPlayer.emulateOptions).split(/\s+/g),function(b,d){delete a.internal.domNode[d]})}};b.jPlayer.error={FLASH:"e_flash",FLASH_DISABLED:"e_flash_disabled",NO_SOLUTION:"e_no_solution",NO_SUPPORT:"e_no_support",URL:"e_url",URL_NOT_SET:"e_url_not_set",
VERSION:"e_version"};b.jPlayer.errorMsg={FLASH:"jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",FLASH_DISABLED:"jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",NO_SOLUTION:"No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",NO_SUPPORT:"It is not possible to play any media format provided in setMedia() on this browser using your current options.",
URL:"Media URL could not be loaded.",URL_NOT_SET:"Attempt to issue media playback commands, while no media url is set.",VERSION:"jPlayer "+b.jPlayer.prototype.version.script+" needs Jplayer.swf version "+b.jPlayer.prototype.version.needFlash+" but found "};b.jPlayer.errorHint={FLASH:"Check your swfPath option and that Jplayer.swf is there.",FLASH_DISABLED:"Check that you have not display:none; the jPlayer entity or any ancestor.",NO_SOLUTION:"Review the jPlayer options: support and supplied.",NO_SUPPORT:"Video or audio formats defined in the supplied option are missing.",
URL:"Check media URL is valid.",URL_NOT_SET:"Use setMedia() to set the media URL.",VERSION:"Update jPlayer files."};b.jPlayer.warning={CSS_SELECTOR_COUNT:"e_css_selector_count",CSS_SELECTOR_METHOD:"e_css_selector_method",CSS_SELECTOR_STRING:"e_css_selector_string",OPTION_KEY:"e_option_key"};b.jPlayer.warningMsg={CSS_SELECTOR_COUNT:"The number of css selectors found did not equal one: ",CSS_SELECTOR_METHOD:"The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",CSS_SELECTOR_STRING:"The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
OPTION_KEY:"The option requested in jPlayer('option') is undefined."};b.jPlayer.warningHint={CSS_SELECTOR_COUNT:"Check your css selector and the ancestor.",CSS_SELECTOR_METHOD:"Check your method name.",CSS_SELECTOR_STRING:"Check your css selector is a string.",OPTION_KEY:"Check your option name."}})(jQuery);/*
    http://www.JSON.org/json2.js
    2010-11-17

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {
    "use strict";

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());/**
 * jQBrowser v0.2 - Extend jQuery's browserrtc detection capabilities
 *   * http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/0.2/
 *
 * Dave Cardwell <http://davecardwell.co.uk/>
 *
 * Built on the shoulders of giants:
 *   * John Resig <http://jquery.com/>
 *   * Peter-Paul Koch <http://www.quirksmode.org/?/js/detect.html>
 *
 *
 * Copyright (c) 2006 Dave Cardwell, dual licensed under the MIT and GPL
 * licenses:
 *   * http://www.opensource.org/licenses/mit-license.php
 *   * http://www.gnu.org/licenses/gpl.txt
 */


/**
 * For the latest version of this plugin, and a discussion of its usage and
 * implementation, visit:
 *   * http://davecardwell.co.uk/javascript/jquery/plugins/jquery-browserdetect/
 */
/**
 * Updated by rtc to use $.browserrtc namespace so as not to break other jquery plugins that rely on the $.browser namespace.
 */

new function() {
    /**
     * The following functions and attributes form the Public interface of the
     * jQBrowser plugin, accessed externally through the $.browserrtc object.
     * See the relevant function definition later in the source for further
     * information.
     *
     * $.browserrtc.browserrtc()
     * $.browserrtc.version.number()
     * $.browserrtc.version.string()
     * $.browserrtc.OS()
     *
     * $.browserrtc.aol()
     * $.browserrtc.camino()
     * $.browserrtc.firefox()
     * $.browserrtc.flock()
     * $.browserrtc.icab()
     * $.browserrtc.konqueror()
     * $.browserrtc.mozilla()
     * $.browserrtc.msie()
     * $.browserrtc.netscape()
     * $.browserrtc.opera()
     * $.browserrtc.safari()
     *
     * $.browserrtc.linux()
     * $.browserrtc.mac()
     * $.browserrtc.win()
     */
    var Public = {
        // The current browserrtc, its version as a number or a string, and the
        // operating system its running on.
          'browserrtc': function() { return Private.browserrtc;   },
          'version': {
              'number': function() { return Private.version.number; },
              'string': function() { return Private.version.string; }
          },
               'OS': function() { return Private.OS;        },

        // A boolean value indicating whether or not the given browserrtc was
        // detected.
              'aol': function() { return Private.aol;       },
           'camino': function() { return Private.camino;    },
          'firefox': function() { return Private.firefox;   },
            'flock': function() { return Private.flock;     },
             'icab': function() { return Private.icab;      },
        'konqueror': function() { return Private.konqueror; },
          'mozilla': function() { return Private.mozilla;   },
             'msie': function() { return Private.msie;      },
         'netscape': function() { return Private.netscape;  },
            'opera': function() { return Private.opera;     },
           'safari': function() { return Private.safari;    },
           'chrome': function() { return Private.chrome;     },

        // A boolean value indicating whether or not the given OS was
        // detected.
            'linux': function() { return Private.linux;     },
              'mac': function() { return Private.mac;       },
              'win': function() { return Private.win;       }
    };

    // Allow external access to the 'Public' interface through the $.browserrtc
    // object.
    $.browserrtc = Public;



    /**
     * The following functions and attributes form the internal methods and
     * state of the jQBrowser plugin.  See the relevant function definition
     * later in the source for further information.
     *
     * Private.browserrtc
     * Private.version
     * Private.OS
     *
     * Private.aol
     * Private.camino
     * Private.firefox
     * Private.flock
     * Private.icab
     * Private.konqueror
     * Private.mozilla
     * Private.msie
     * Private.netscape
     * Private.opera
     * Private.safari
     *
     * Private.linux
     * Private.mac
     * Private.win
     */
    var Private = {
        // Initially set to 'Unknown', if detected each of these properties will
        // be updated.
          'browserrtc': 'Unknown',
          'version': {
              'number': undefined,
              'string': 'Unknown'
          },
               'OS': 'Unknown',

        // Initially set to false, if detected one of the following browsers
        // will be updated.
              'aol': false,
           'camino': false,
          'firefox': false,
            'flock': false,
             'icab': false,
        'konqueror': false,
          'mozilla': false,
             'msie': false,
         'netscape': false,
            'opera': false,
           'safari': false,
           
           'chrome': false,

        // Initially set to false, if detected one of the following operating
        // systems will be updated.
            'linux': false,
              'mac': false,
              'win': false
    };



    /**
     * Loop over the items in 'data' trying to find a browserrtc match with the
     * test in data[i].browserrtc().  Once found, attempt to determine the
     * browserrtc version.
     *
     *       'name': A string containing the full name of the browserrtc.
     * 'identifier': By default this is a lowercase version of 'name', but
     *               this can be overwritten by explicitly defining an
     *               'identifier'.
     *    'browserrtc': A function that returns a boolean value indicating
     *               whether or not the given browserrtc is detected.
     *    'version': An optional function that overwrites the default version
     *               testing.  Must return the result of a .match().
     *
     * Please note that the order of the data array is important, as some
     * browsers contain details of others in their navigator.userAgent string.
     * For example, Flock's contains 'Firefox' so much come before Firefox's
     * test to avoid false positives.
     */
    for( var  i = 0,                    // counter
             ua = navigator.userAgent,  // the navigator's user agent string
             ve = navigator.vendor,     // the navigator's vendor string
           data = [                     // browserrtc tests and data
                { // Safari <http://www.apple.com/safari/>
                          'name': 'Safari',
                       'browserrtc': function() { return /Apple/.test(ve); }
                },
                { // Opera <http://www.opera.com/>
                          'name': 'Opera',
                       'browserrtc': function() {
                                      return window.opera != undefined;
                                  }
                },
                { // iCab <http://www.icab.de/>
                          'name': 'iCab',
                       'browserrtc': function() { return /iCab/.test(ve); }
                },
                { // Konqueror <http://www.konqueror.org/>
                          'name': 'Konqueror',
                       'browserrtc': function() { return /KDE/.test(ve); }
                },
                { // AOL Explorer <http://downloads.channel.aol.com/browserrtc>
                    'identifier': 'aol',
                          'name': 'AOL Explorer',
                       'browserrtc': function() {
                                      return /America Online browserrtc/.test(ua);
                                  },
                       'version': function() {
                                      return ua.match(/rev(\d+(?:\.\d+)+)/);
                                  }
                },
                { // Flock <http://www.flock.com/>
                          'name': 'Flock',
                       'browserrtc': function() { return /Flock/.test(ua); }
                },
                { // Camino <http://www.caminobrowser.org/>
                          'name': 'Camino',
                       'browserrtc': function() { return /Camino/.test(ve); }
                },
                { // Firefox <http://www.mozilla.com/firefox/>
                          'name': 'Firefox',
                       'browserrtc': function() { return /Firefox/.test(ua); }
                },
                { // Netscape <http://browserrtc.netscape.com/>
                          'name': 'Netscape',
                       'browserrtc': function() { return /Netscape/.test(ua); }
                },
                { // Internet Explorer <http://www.microsoft.com/windows/ie/>
                  //                   <http://www.microsoft.com/mac/ie/>
                    'identifier': 'msie',
                          'name': 'Internet Explorer',
                       'browserrtc': function() { return /MSIE/.test(ua); },
                       'version': function() {
                                      return ua.match(
                                          /MSIE (\d+(?:\.\d+)+(?:b\d*)?)/
                                      );
                                  }
                },
                { // Chrome <www.google.com/chrome/?hl=ru>
                          'name': 'Chrome',
                       'browserrtc': function() {
                                      return /chrome/i.test(ua);
                                  }
                 },
                 { // Mozilla <http://www.mozilla.org/products/mozilla1.x/>
                     'name': 'Mozilla',
                  'browserrtc': function() {
                                 return /Gecko|Mozilla/.test(ua);
                             },
                  'version': function() {
                                 return ua.match(/rv:(\d+(?:\.\d+)+)/);
                             }
                 }
             ];
         i < data.length;
         i++
    ) {
        if( data[i].browserrtc() ) { // we have a match
            // If the identifier is not explicitly set, use a lowercase
            // version of the given name.
            var identifier = data[i].identifier ? data[i].identifier
                                                : data[i].name.toLowerCase();

            // Make a note that this browserrtc was detected.
            Private[ identifier ] = true;

            // $.browserrtc.browserrtc() will now return the correct browserrtc.
            Private.browserrtc = data[i].name;

            var result;
            if( data[i].version != undefined && (result = data[i].version()) ) {
                // Use the explicitly set test for browserrtc version.
                Private.version.string = result[1];
                Private.version.number = parseFloat( result[1] );
            } else {
                // Otherwise use the default test which searches for the
                // version number after the browserrtc name in the user agent
                // string.
                var re = new RegExp(
                    data[i].name + '(?:\\s|\\/)(\\d+(?:\\.\\d+)+(?:(?:a|b)\\d*)?)'
                );

                result = ua.match(re);
                if( result != undefined ) {
                    Private.version.string = result[1];
                    Private.version.number = parseFloat( result[1] );
                }
            }

            // Once we've detected the browserrtc there is no need to check the
            // others.
            break;
        }
    };



    /**
     * Loop over the items in 'data' trying to find a operating system match
     * with the test in data[i].os().
     *
     *       'name': A string containing the full name of the operating
     *               system.
     * 'identifier': By default this is a lowercase version of 'name', but
     *               this can be overwritten by explicitly defining an
     *               'identifier'.
     *         'OS': A function that returns a boolean value indicating
     *               whether or not the given operating system is detected.
     */
    for( var  i = 0,                  // counter
             pl = navigator.platform, // the navigator's platform string
           data = [                   // OS data and tests
                { // Microsoft Windows <http://www.microsoft.com/windows/>
                    'identifier': 'win',
                          'name': 'Windows',
                            'OS': function() { return /Win/.test(pl); }
                },
                { // Apple Mac OS <http://www.apple.com/macos/>
                          'name': 'Mac',
                            'OS': function() { return /Mac/.test(pl); }
                },
                { // Linux <http://www.linux.org/>
                          'name': 'Linux',
                            'OS': function() { return /Linux/.test(pl); }
                }
           ];
       i < data.length;
       i++
    ) {
        if( data[i].OS() ) { // we have a match
            // If the identifier is not explicitly set, use a lowercase
            // version of the given name.
            var identifier = data[i].identifier ? data[i].identifier
                                                : data[i].name.toLowerCase();

            // Make a note that the OS was detected.
            Private[ identifier ] = true;

            // $.browserrtc.OS() will now return the correct OS.
            Private.OS = data[i].name;

            // Once we've detected the browserrtc there is no need to check the
            // others.
            break;
        }
    };
}();var jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return a!==null?a:0},d=function(){return b(new Date(2010,0,1,0,0,0,0))},e=function(){return b(new Date(2010,5,1,0,0,0,0))},c=function(){var a=d(),b=e(),f=d()-e();if(f<0)return a+",1";else if(f>0)return b+",1,s";return a+",0"};return{determine_timezone:function(){var a=c();return new jstz.TimeZone(jstz.olson.timezones[a])},date_is_dst:function(a){var c=a.getMonth()>5?e():d(),a=b(a);return c-a!==0}}}();
jstz.TimeZone=function(){var b=null,d=null,e=null,c=function(a){e=a[0];b=a[1];d=a[2];if(typeof jstz.olson.ambiguity_list[b]!=="undefined")for(var a=jstz.olson.ambiguity_list[b],c=a.length,f=0,g=a[0];f<c;f+=1)if(g=a[f],jstz.date_is_dst(jstz.olson.dst_start_dates[g])){b=g;break}};c.prototype={constructor:jstz.TimeZone,name:function(){return b},dst:function(){return d},offset:function(){return e}};return c}();jstz.olson={};
jstz.olson.timezones=function(){return{"-720,0":["-12:00","Etc/GMT+12",!1],"-660,0":["-11:00","Pacific/Pago_Pago",!1],"-600,1":["-11:00","America/Adak",!0],"-660,1,s":["-11:00","Pacific/Apia",!0],"-600,0":["-10:00","Pacific/Honolulu",!1],"-570,0":["-09:30","Pacific/Marquesas",!1],"-540,0":["-09:00","Pacific/Gambier",!1],"-540,1":["-09:00","America/Anchorage",!0],"-480,1":["-08:00","America/Los_Angeles",!0],"-480,0":["-08:00","Pacific/Pitcairn",!1],"-420,0":["-07:00","America/Phoenix",!1],"-420,1":["-07:00",
"America/Denver",!0],"-360,0":["-06:00","America/Guatemala",!1],"-360,1":["-06:00","America/Chicago",!0],"-360,1,s":["-06:00","Pacific/Easter",!0],"-300,0":["-05:00","America/Bogota",!1],"-300,1":["-05:00","America/New_York",!0],"-270,0":["-04:30","America/Caracas",!1],"-240,1":["-04:00","America/Halifax",!0],"-240,0":["-04:00","America/Santo_Domingo",!1],"-240,1,s":["-04:00","America/Asuncion",!0],"-210,1":["-03:30","America/St_Johns",!0],"-180,1":["-03:00","America/Godthab",!0],"-180,0":["-03:00",
"America/Argentina/Buenos_Aires",!1],"-180,1,s":["-03:00","America/Montevideo",!0],"-120,0":["-02:00","America/Noronha",!1],"-120,1":["-02:00","Etc/GMT+2",!0],"-60,1":["-01:00","Atlantic/Azores",!0],"-60,0":["-01:00","Atlantic/Cape_Verde",!1],"0,0":["00:00","Etc/UTC",!1],"0,1":["00:00","Europe/London",!0],"60,1":["+01:00","Europe/Berlin",!0],"60,0":["+01:00","Africa/Lagos",!1],"60,1,s":["+01:00","Africa/Windhoek",!0],"120,1":["+02:00","Asia/Beirut",!0],"120,0":["+02:00","Africa/Johannesburg",!1],
"180,1":["+03:00","Europe/Moscow",!0],"180,0":["+03:00","Asia/Baghdad",!1],"210,1":["+03:30","Asia/Tehran",!0],"240,0":["+04:00","Asia/Dubai",!1],"240,1":["+04:00","Asia/Yerevan",!0],"270,0":["+04:30","Asia/Kabul",!1],"300,1":["+05:00","Asia/Yekaterinburg",!0],"300,0":["+05:00","Asia/Karachi",!1],"330,0":["+05:30","Asia/Kolkata",!1],"345,0":["+05:45","Asia/Kathmandu",!1],"360,0":["+06:00","Asia/Dhaka",!1],"360,1":["+06:00","Asia/Omsk",!0],"390,0":["+06:30","Asia/Rangoon",!1],"420,1":["+07:00","Asia/Krasnoyarsk",
!0],"420,0":["+07:00","Asia/Jakarta",!1],"480,0":["+08:00","Asia/Shanghai",!1],"480,1":["+08:00","Asia/Irkutsk",!0],"525,0":["+08:45","Australia/Eucla",!0],"525,1,s":["+08:45","Australia/Eucla",!0],"540,1":["+09:00","Asia/Yakutsk",!0],"540,0":["+09:00","Asia/Tokyo",!1],"570,0":["+09:30","Australia/Darwin",!1],"570,1,s":["+09:30","Australia/Adelaide",!0],"600,0":["+10:00","Australia/Brisbane",!1],"600,1":["+10:00","Asia/Vladivostok",!0],"600,1,s":["+10:00","Australia/Sydney",!0],"630,1,s":["+10:30",
"Australia/Lord_Howe",!0],"660,1":["+11:00","Asia/Kamchatka",!0],"660,0":["+11:00","Pacific/Noumea",!1],"690,0":["+11:30","Pacific/Norfolk",!1],"720,1,s":["+12:00","Pacific/Auckland",!0],"720,0":["+12:00","Pacific/Tarawa",!1],"765,1,s":["+12:45","Pacific/Chatham",!0],"780,0":["+13:00","Pacific/Tongatapu",!1],"840,0":["+14:00","Pacific/Kiritimati",!1]}}();
jstz.olson.dst_start_dates=function(){return{"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,
9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,
6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)}}();
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza,Asia/Beirut,Europe/Minsk,Europe/Helsinki,Europe/Istanbul,Asia/Damascus,Asia/Jerusalem,Africa/Cairo".split(","),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland",
"Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};if ( !navigator.userAgent.match( /msie [1-8][\\. ]/i ) ) {
	try {
		window.jQueryRTC = jQuery.noConflict();

		window.$ = window.jQueryRTC;

		function makeReadOnly( obj ) {
			var getter = function() { return window.jQueryRTC; };
			var setter = function() { /* do nothing to prevent object being overwritten */ };

			if ( Object.defineProperty ) {
				Object.defineProperty( window, obj, {
					get: getter,
					set: setter
				} );
			}
			else if ( window.__defineGetter__ ) {
				window.__defineGetter__( obj, getter );
				window.__defineSetter__( obj, setter );
			}
		}

		makeReadOnly( "$" );
		makeReadOnly( "jQuery" );
	}
	catch ( e ) {}
}
window.rtc = window.rtc || {};
$.extend( rtc, { utils: { bandwidth: { getXHR: function(){
	var xhr = null;
	if ( window.XMLHttpRequest ) {
		xhr = new XMLHttpRequest();
	}
    else if ( window.ActiveXObject ) {
    	try { xhr = new ActiveXObject( "Msxml2.XMLHTTP" ); } catch (e){ try{ xhr = new ActiveXObject( "Microsoft.XMLHTTP" ); } catch (e){} }
    }
	return xhr;
},
	bandwidthTestStarted: false,
	latencyTimes: [],
	now: function() { return (new Date()).getTime(); },
	getLatency: function( callback ) {
		var xhr = this.getXHR(), start = rtc.utils.bandwidth.now(), t = null;

		if ( xhr === null ) {
			return false;
		}

		xhr.onreadystatechange = function() {
	    	if ( xhr.readyState == 4 ) {
	    		clearTimeout( t );

	    		rtc.utils.bandwidth.latencyTimes.push( rtc.utils.bandwidth.now() - start );

	    		if ( rtc.utils.bandwidth.latencyTimes.length < 5 && xhr.status == 200 ) {
	    			rtc.utils.bandwidth.getLatency( callback );
	    		}
	    		else {
	    			consoleLog( rtc.utils.bandwidth.latencyTimes );
	    			callback( Math.min.apply( null, rtc.utils.bandwidth.latencyTimes ) );
	    		}
	    	}
		};

		xhr.open('GET', RTCConfig.baseDir + '/css/images/1x1.gif?cb=' + rtc.utils.bandwidth.now(), true);
		xhr.send(null);

		t = setTimeout( function() {
			xhr.onreadystatechange = function() {};
			xhr.abort();
			xhr = null;
			callback( rtc.utils.bandwidth.latencyTimes.length > 0 ? Math.min.apply( null, rtc.utils.bandwidth.latencyTimes ) : 5000 );
		}, 5000 );

		return true;
	},
	get: function( latency, url, callback, timeout, advanced, progress ) {
		var xhr = rtc.utils.bandwidth.getXHR(), start = rtc.utils.bandwidth.now(), t = null, calcBdw = function( size, time, latency ) {
			var b = 0;

			try {
				if ( latency < 5000 ) {
					time -= latency;
				}

				b = Math.round( ( ( size / ( time / 1000 ) ) / 1024 ) * 8 );

				if ( isNaN( b ) ) {
					b = 0;
				}
			}
			catch ( ex ) {
				b = 0;
			}

			return b;
		};

		if ( !!advanced ) {
			progress = typeof progress == "undefined" ? function( p ) {} : progress;
			var prevProgress = 0;
			var fnc = function( size ) {
				var start = rtc.utils.bandwidth.now(), url = "/rtc/lib/diagnostics/bandwidth/" + size + "k?cb=" + start;
				xhr.onreadystatechange = function() {
					if ( xhr.readyState == 4 ) {
						var time = rtc.utils.bandwidth.now() - start;

						if ( time > 4000 || size > 16384 ) {
							progress( 1 );
							callback( calcBdw( xhr.responseText.length, time, latency ), time, xhr.responseText.length, url );
						}
						else {
							progress( Math.max( prevProgress, time / 4000 ) );
							prevProgress = time / 4000;
							setTimeout( function() {
								fnc( size * 2 );
							}, 1000 );
						}
					}
				};
				xhr.open('GET', url, true);
				xhr.send(null);
			};
			fnc( 128 );
		}
		else {
			url += '?cb='+start;
			xhr.onreadystatechange = function() {
				var b, size, time = rtc.utils.bandwidth.now() - start;
				if ( xhr.readyState == 4 && rtc.bandwidth === null ) {
					clearTimeout( t );

					try {
						size = parseInt( xhr.getResponseHeader( "Content-Length" ) ) || 204898;
						b = calcBdw( size, time, latency );
						consoleLog( "Bandwidth: " + b + " Latency: " + latency + " Time: " + time );
						consoleLog( "Size: " + size );

						if ( isNaN( b ) ) {
							b = 0;
						}

						rtc.bandwidth = b;
					}
					catch ( e ) {
						rtc.bandwidth = 0;
					}

					callback( b, time, size, url );
				}
			};
			xhr.open('GET', url, true);
			xhr.send(null);

			if ( typeof timeout != "undefined" && timeout !== null ) {
				t = setTimeout( function() {
					var size = 0;
					try {
						// get the size of the partial download - unfortunately this doesn't work in IE
						size = xhr.responseText.length;
						rtc.bandwidth = calcBdw( size, timeout, latency );
					} catch (ex) {
						rtc.bandwidth = 0;
					}
					xhr.onreadystatechange = function() {};
					xhr.abort();
					xhr = null;
					callback( rtc.bandwidth, timeout, size, url );
				}, timeout );
			}
		}
	},
	check: function( readyFn ) {
		rtc.utils.bandwidth.bandwidthTestStarted = false;
		rtc.loadSequence.progress( rtc.loadSequence.steps.bandwidthCheck );
		rtc.bandwidth = null;
		if ( !this.getLatency( function( latency ) {
			if ( !rtc.utils.bandwidth.bandwidthTestStarted ) {
				rtc.utils.bandwidth.bandwidthTestStarted = true;
				rtc.loadSequence.progress( rtc.loadSequence.steps.bandwidthStart );
				// use large file to determine bandwidth
				rtc.utils.bandwidth.get( latency, RTCConfig.baseDir + "/css/images/200k.jpg", function( b, time, size, url ) {
					rtc.utils.track("bandwidth", { bandwidth: b, time: time, size: size, latency: latency });
					readyFn();
					rtc.loadSequence.progress( rtc.loadSequence.steps.bandwidthEnd );
				}, 3000 );
			}
		} ) ) {
	    	rtc.bandwidth = 0;
	    	readyFn();
	    	rtc.loadSequence.progress( rtc.loadSequence.steps.bandwidthEnd );
	    	rtc.utils.track("bandwidth", { bandwidth: 0 });
	    	return;
		}
	},
    /**
     * Check if low bandwidth occurs
     *
     * @returns {boolean}
     */
    isDetected: function() {
        return RTCConfig.lowBandwidthThreshold && rtc.bandwidth < RTCConfig.lowBandwidthThreshold && !RTCVisit.loadtest;
    }
} } } );

window.rtc = window.rtc || {};
rtc.player = rtc.player || {};
rtc.player.flash = {};
$.extend(true, rtc.player.flash, {

	buffer: {

		full: false,
		zeroProgressCount: 0,
		currentPlay: null,

		setfull: function() {
			this.full = true;
		},

		resetfull: function() {
			this.full = false;
		},

		countZeroProgressSinceFull: function(play) {
			if (this.full && play === this.currentPlay) {
				this.zeroProgressCount++;
			}
			else {
				this.zeroProgressCount = 0;
			}
			this.currentPlay = play;
			if (this.zeroProgressCount > 2) {
				this.resetfull();
				return true;
			}
			return false;
		}

	}

});
rtc.player.realevents = {};
$.extend(true, rtc.player.realevents, {
	vars: {
		playingInterval: null
	},
	playingInterval: {
		start: function() {
			rtc.player.events.vars.playingInterval = setInterval(function(){
				if ( rtc.player.playerStatus.playing && rtc.player.buffering.videoStartTime() !== null && rtc.player.getVideoTimes().play > rtc.player.buffering.videoStartTime() + 0.25 ) { // don't show the warning if the video is not playing
					rtc.player.showIE9FlashWarning();
					rtc.player.buffering.hideBufferingIcon();
					rtc.player.events.playingInterval.clear();
				}
			},500);
		},
		clear: function() {
			clearInterval( rtc.player.events.vars.playingInterval );
		}
	},
	timeupdate: function(currentPercentAbsolute, currentTime, bufferedPercentages, duration) {
		var time = (new Date()).getTime();

		if (!duration) {
			if (rtc.utils.vars.totalDuration) {
				duration = rtc.utils.vars.totalDuration;

				if (!currentPercentAbsolute && duration) {
					currentPercentAbsolute = 100 * currentTime / duration;
				}
			}
		}

		rtc.timeline.setPos(RTCVisit.currentState,currentPercentAbsolute, currentTime, duration);
        rtc.timeline.updateTimelineProgressBar();
        rtc.player.buffering.v2.timeupdate(currentTime);
		if(currentPercentAbsolute != 0)	// Fixes bug occuring when video ends.
		{
			rtc.utils.updateOverlays(currentTime);
		}
		if ( rtc.player.playerStatus.playing && currentTime > 0.25 ) {
			rtc.utils.positionUpdate(currentPercentAbsolute);
			if ( currentTime < 2 && ( $( "#jquery_jplayer_videoplayer img" ).length > 0 || $( ".failover_message:visible" ).length > 0 ) ) {
				$( "#jquery_jplayer_videoplayer img" ).remove();
				rtc.player.restoreVideoSize();
				rtc.player.hideIE9FlashWarning();
				$( ".failover_message" ).hide();
				$( "#cardproblemFeedbackStep1,#cardproblemFeedbackStep2" ).dialog( "dismiss" );
			}
		}
		$( window.rtc ).trigger( "rtc.player.timeupdate", { time: currentTime, percent: currentPercentAbsolute, buffered: bufferedPercentages, duration: duration, status: rtc.player.playerStatus } );
		return rtc.player.buffering.timeupdate( time, currentTime, bufferedPercentages, duration );
	},

	progress: function( times ) {
		rtc.utils.vars.downloadEndTime=(new Date()).getTime();
		rtc.utils.vars.downloadPercentage = times.bufferedPercentage;
//			timetaken=rtc.utils.vars.downloadEndTime - rtc.utils.vars.downloadStartTime;
//			consoleLog("progress " + downloadPercentage + "%");

		if (rtc.player.flash.buffer.countZeroProgressSinceFull(times.play)) {
			// no progress after flashbufferfull, so explicitly attempt to start the video.
			if ( 'paused' !== rtc.player.playerStatus.name ) {
				rtc.utils.track('flashbuffer.noprogress', 'flashVersion=' + rtc.utils.getFlashVersion() + ',playerStatus=' + rtc.player.playerStatus.name);
				$('#jquery_jplayer_videoplayer').jPlayer("play");
			}
		}

		return rtc.player.buffering.progress( times );
	},

	ended: function(duration, netStreamInfo) {
		if( rtc.utils.overlaysShouldFadeTo( navigator.userAgent ) ) {
			$('#overlays').css("display", "none");
		}
		rtc.utils.track('videoend', rtc.utils.parseNetStreamInfo(netStreamInfo) );
		if (rtc.utils.isIPhone()) { // fixes bug on iPhone where subsequent videos did not start at the beginning.
			rtc.player.video('playHead', 0);
		}

		rtc.player.buffering.clearPlayStatusTimeout();
		rtc.player.hideIE9FlashWarning();
		rtc.utils.exitFullScreen();
		rtc.player.audio("stop");

		var newState = rtc.state.next(RTCVisit);
		rtc.utils.track('autonext', {nextState: newState});

		rtc.state.set(newState);
		rtc.card.showCard(RTCVisit.currentState);
		rtc.player.playerStatus.seeking(false);
		rtc.utils.updateOverlays(duration);
		$.rtcVideoPlaying = false;
	},

	play: function( times ) {
		rtc.utils.track( "player.video.play" );
		if ( rtc.player.buffering.initialBuffer() ) {
			if ( rtc.utils.preloadImages && rtc.utils.vars.imagesToPreload ) {
				rtc.utils.preloadImages( rtc.utils.vars.imagesToPreload );
			}
			$("#jp_poster_1").remove();
			$("#wrapper_status_image").removeClass("wrapperPlayPoster wrapperLoadingImage");
			$("#video_background").delay(5000).css({'background-color': '#000000'});
			rtc.player.restoreVideoSize();
			this.playingInterval.start();
		}
		else if ( ( !rtc.card.isCardVisible( "bandwidthWarning" ) || ( !rtc.player.buffering.isBrowserBuffering() && rtc.player.buffering.canResume( times ) ) ) && rtc.player.buffering.videoStartTime() !== null ) {
			rtc.player.buffering.hideBufferingIcon();
		}
		consoleLog( "rtc.player.playerStatus.name = " + rtc.player.playerStatus.name );
		rtc.player.controls.playBtnPlay();
		$('#overlays').show();
		rtc.player.playerStatus.set( "playing" );
		rtc.player.buffering.status( "playing" );
		$.rtcVideoPlaying = true;
		rtc.logging.videoStarted();
		rtc.loadSequence.progress( rtc.loadSequence.steps.videoStarted );

		if ( rtc.player.seekingWhilePaused() ) {
			if ( times.play > 0 && !rtc.player.buffering.canResume( times, true ) ) {
				if ( rtc.player.video.isHtmlActive() ) {
					rtc.player.buffering.startBuffering( times, "after seek (paused)" );
				}
				else {
					rtc.player.buffering.showBufferingIcon();
					rtc.player.buffering.status( "buffering" );
				}
			}

			rtc.player.seekingWhilePaused( false );
		}

		if ((rtc.utils.vars.videoLayout == 'hq')&&(rtc.utils.getPlaybackQuality() == 'low')){
			rtc.hd.showHDlowBandwidthTip();
		}
	},

    playing: function(event) {
		rtc.utils.track( "player.video.playing" );
        rtc.player.buffering.v2.playing(event.jPlayer.status);
    },
    /**
     * Handles HTML5 video stalled events
     *
     * @param {Object} event jPlayer event data
     */
    stalled: function(event) {
        rtc.player.buffering.v2.stalled(event.jPlayer.status);
    },
    /**
     * Handles HTML5 video waiting events
     *
     * @param {Object} event jPlayer event data
     */
    waiting: function(event) {
        var networkState = event.jPlayer.status.networkState;

        //NETWORK_LOADING https://dev.w3.org/html5/spec-preview/media-elements.html#network-states
        if (2 === networkState && rtc.utils.bandwidth.isDetected()) {
            rtc.player.buffering.v2.showBandwidthWarningIfCount();
        }

        if (rtc.utils.bandwidth.isDetected() && rtc.player.buffering.v2.vars.count > 3) {
            rtc.utils.track("bandwidth.low", rtc.bandwidth);
        }

        rtc.player.buffering.v2.waiting(event.jPlayer.status);
    },

	pause: function() {
		rtc.utils.track( "player.video.pause" );
		if ( rtc.player.buffering.pausedToBuffer() ) {
			rtc.player.buffering.pausedToBuffer( false );
		}
		else {
			rtc.player.pause();
		}
		rtc.player.buffering.ignoreTimeupdateTimes( true );
	},

	seeking: function() {
		rtc.player.buffering.clearPlayStatusTimeout();
		rtc.player.buffering.ignoreTimeupdateTimes( true );
		if ( rtc.player.playerStatus.playing ) {
			rtc.player.audio( "pause" );
			rtc.player.playerStatus.seeking( true );
			rtc.player.buffering.showBufferingIcon( 500 );
		}
		else {
			rtc.player.seekingWhilePaused( true );
		}
	},

	seeked: function( times ) {
		var canResume = rtc.player.buffering.canResume( times, true );

		if ( rtc.player.video.isFlashActive() ) {
			if ( !canResume ) {
				rtc.player.buffering.status( "buffering" );
			}
		}
		else if ( canResume ) {
			rtc.player.buffering.hideBufferingIcon();
			rtc.player.buffering.status( "playing" );
		}
		rtc.player.buffering.seekingComplete( times );
		rtc.player.playerStatus.set( "seeked" );
		rtc.player.buffering.ignoreTimeupdateTimes( true );
	},

	canplay: function() {
		rtc.player.playerStatus.canplay();
	},

	canplaythrough: function(networkState) {
		if ( networkState == 1 ) { // NETWORK_IDLE http://dev.w3.org/html5/spec/media-elements.html#dom-media-networkstate
			rtc.player.playerStatus.canplay();
			rtc.player.buffering.canPlayThrough( true );
			if ( rtc.player.buffering.status( "buffering" ) ) {
				rtc.player.buffering.progress(rtc.player.getVideoTimes());
			}
		}
	},

	flashbufferfull: function(seekPercent) {
		rtc.player.flash.buffer.setfull();
		rtc.player.buffering.hideBufferingIcon();
		rtc.player.buffering.status('playing');
		rtc.player.playerStatus.seeking(false);
		rtc.player.audio("play");
		rtc.utils.track('flashbufferfull', 'seekPercent=' + seekPercent);
	},

	flashbufferempty: function(seekPercent) {
		if (seekPercent < 97 || !seekPercent) {
			rtc.utils.track('buffering.flash');
			rtc.player.audio("pause");
			rtc.player.flash.buffer.resetfull();
			rtc.player.buffering.status('buffering');
			rtc.player.buffering.showBufferingIcon();
			rtc.player.buffering.currentVideoBuffered();

            if (!rtc.player.playerStatus.seeking() && !rtc.player.seekingWhilePaused() && rtc.utils.bandwidth.isDetected()) {
                rtc.player.buffering.v2.showBandwidthWarningIfCount();
            } else if ( !rtc.player.playerStatus.seeking() && !rtc.player.seekingWhilePaused() ) {
				rtc.player.buffering.bufferingCounts.increase();
				rtc.player.buffering.showBandwidthWarningIfCount( "RTC" );
			}
		}
	},

	volumechange: function( event ) {
	},

	audio: {
		play: function() {
			rtc.utils.track( "player.audio.play" );
		},

		playing: function() {
			rtc.utils.track( "player.audio.playing" );
		},

		pause: function() {
			rtc.utils.track( "player.audio.paused" );
		}
	}
});
rtc.player.events = rtc.player.realevents;
/*
 * All code (c) 2014 Real Time Content, Inc. All rights reserved.
 */
window.rtc = window.rtc || {};
window.rtc.player = window.rtc.player || {};

$.extend( true, rtc.player, {
	defaultJplayerConfig: function() {
		return {
			solution: "flash, html",
			suppliedVideo: this.vars.defaultSuppliedVideo,
			swfPath: "/rtc/js/extlibs/Jplayer-h264-streaming.swf"
		};
	},
	vars: {
		defaultSuppliedVideo: "flv, m4v"
	},
	getJplayerMediaConfig: function( userAgent, flashVersion, rtcConfig ) {
		var config = rtc.player.defaultJplayerConfig();
		var exceptions = [
			{ regex: /Mozilla\/5\.0 \(X11; Linux; ko-KR\) AppleWebKit\/\d+\.\d+\+? \(KHTML, like Gecko\) Version\/5\.\d+ Safari\/\d+\.\d+\+?/i, solution: "html", suppliedVideo: "m4v, flv" },
			{ regex: /OS X.+safari/i, solution: "html, flash" }
        ];

		for ( var i = 0 ; i < exceptions.length ; i++ ) {
			if ( ( exceptions[i].regex && userAgent.match( exceptions[i].regex ) ) ||
				 ( exceptions[i].fnc && exceptions[i].fnc( userAgent ) ) )
			{
				config.solution = exceptions[i].solution || config.solution;
				config.suppliedVideo = exceptions[i].suppliedVideo || config.suppliedVideo;
				break;
			}
		}

		if ( flashVersion === false ) {
			config.suppliedVideo = "m4v, flv";
			config.solution = "html, flash";
		}
		rtcConfig = rtcConfig || {};
		if (rtcConfig.contentUrl && rtcConfig.contentUrl.match(/vidgen/)) {
			config.suppliedVideo = "m4v";
		}

		if ( typeof RTCVisit != "undefined" ) {
			config.solution = RTCVisit.videoSolution || config.solution;
			config.suppliedVideo = RTCVisit.videoSupplied || config.suppliedVideo;
		}

		return config;
	},
	attemptToAutoPlay: function( userAgent ) {
		var exceptions = [
			/(ipad|ipod|iphone)/i
		];

		if ( rtc.player.video && rtc.player.video.isHtmlActive() ) {
			exceptions.push( /android/i );
		}

		for ( var i = 0 ; i < exceptions.length ; i++ ) {
			if ( userAgent.match( exceptions[i] ) ) {
				rtc.utils && rtc.utils.track && rtc.utils.track( "autoplay.unsupported" );
				return false;
			}
		}

        var safari = userAgent.match(/version\/([0-9]+).+safari/i);

        if (safari && safari[1] >= 11) {
            return false;
        }

        var chrome = userAgent.match(/(crios|chrome|chromium)\/([0-9]+)/i);

        if (chrome && !userAgent.match(/edge/) && 66 <= chrome[2]) {
            return false;
        }

		return true;
	},
	forceLow: function( userAgent ) {
		return userAgent.match( /iphone/i );
	},
	supports: function( mimetype , maybe) {	//mimetype should look like:
										//	'video/mp4; codecs="avc1.64001E"' - High
										//	'video/mp4; codecs="avc1.4D401E, mp4a.40.2"' - Main
										//	'video/mp4; codecs="avc1.42E01E, mp4a.40.2"' - Baseline
										//  maybe: If true, accept "maybe" to mean it is supported (iOS reports HLS as "maybe" so this is the only way we can detect HLS support.)
		maybe = maybe || false;
		try {
			if(typeof rtc.player.supports.videoElem == "undefined") {
				rtc.player.supports.videoElem=document.createElement("video");
			}
			if(!rtc.player.supports.videoElem.canPlayType) {	//If we don't have HTML5, we will be using a flash player, which should be able to play any format we give it.
				return true;
			}
			return rtc.player.supports.videoElem.canPlayType(mimetype) == "probably" || (maybe && rtc.player.supports.videoElem.canPlayType(mimetype) == "maybe");
			//canPlayType returns	"probably" => Yes.
			//                   	"maybe" => To be safe, we'll say no.
			//                   	"" => No.
		}
		catch ( ex ) {
		}

		return false;
	}
} );
//Global variables for jplayer to use when setting up html5 audio.
var globalVolume = 100;
var globalMute = false;

window.rtc = window.rtc || {};

if ( typeof Object.keys == "undefined" ) {
	Object.keys = function( obj ) {
		var keys = [];
		for ( var key in obj ) {
			keys.push( key );
		}
		return keys;
	}
}

var AudioTrack = Class.extend({
	previousTime: -1,
	init: function(start,player,src){
		this.start = parseFloat(start);
		this.src = src;
		var filename = unescape( src.replace( /.*\//, "" ) );
		if ( rtc.overlay.audioTracks && rtc.overlay.audioTracks[filename] ) {
			this.end = rtc.overlay.audioTracks[filename].duration + this.start;
		}
		else if ( player.data("jPlayer").status.src == this.src ) {
			this.end = player.data("jPlayer").status.duration;
			if ( this.end > 0 ) {
				this.end += this.start;
			}
		}
		this.player=player;
	},
	update : function(time)
	{
		if ( !rtc.utils.backgroundAudioEnabled() ) {
			return;
		}

		if ( this.end == 0 && rtc.player.audio.status().src == this.src ) {
			this.end = rtc.player.audio.status().duration;

			if ( this.end > 0 ) {
				this.end += this.start;
			}
		}

		time=parseFloat(time);


		if ( time >= this.start && time <= this.end && this.end > 0 ) {
			var paused=rtc.player.audio.status().paused;
			var buffering = rtc.player.buffering.status() == 'buffering';
			var mainPaused=rtc.player.video.status().paused;
			var videoPlaying = !mainPaused && !buffering && !rtc.player.playerStatus.seeking() && time != this.previousTime;
			var currentTime=parseFloat(rtc.player.audio.status().currentTime);
			var tolerance=1;
			if ( rtc.player.audio.status().src != this.src ) {
				consoleLog( "Playing " + this.src );
				rtc.player.audio( "stop" );
				rtc.player.audio( "clearMedia" );
				rtc.player.audio( "setMedia", {mp3: this.src} );
				paused = true;
			}
			if ( paused && videoPlaying )
			{
				rtc.utils.track( "AudioTrack::update - audio paused and video playing" );
				rtc.player.audio("play",time - this.start);
				rtc.player.video("play");
			}

			if(!paused)
			{
				if(mainPaused)
				{
					rtc.player.audio('pause');
				}
				if((time < this.start || time > this.end))
				{
					rtc.player.audio("stop");
				} else if(videoPlaying)
				{
					var audioSeekPosition = rtc.player.audioDesyncSeekPos(time - this.start, currentTime, tolerance);
					if(audioSeekPosition != null) {
						rtc.utils.track( "AudioTrack::update - out of sync" );
						rtc.player.audio("play", audioSeekPosition);
						rtc.player.video("play");
					}
				}
			}
		}
		else if ( rtc.player.audio.status().src == this.src ) {
			rtc.player.audio( "pause" );
		}

		this.previousTime = time;
	}
});

window.rtc = window.rtc || {};
window.rtc.player = window.rtc.player || {};
$.extend( true, rtc.player, {
	audioDesyncSeekPos: function( expectedAudioTime, actualAudioTime, tolerance) {
		if(expectedAudioTime == null || actualAudioTime == null || tolerance == null) {
			return null;
		}
		if(Math.abs(expectedAudioTime - actualAudioTime) < tolerance) {
			return null;
		}
		if((expectedAudioTime - actualAudioTime) > 0 && expectedAudioTime - actualAudioTime < 2 * tolerance) {
			//If we're only slightly behind, attempt to counteract the lag by jumping slightly ahead.
			return 1.5 * expectedAudioTime - 0.5 * actualAudioTime;
		} else {
			return expectedAudioTime;
		}
	},
	vars: {
		player1Ready: false,
		videoDuration: 0,
		videoTypes: {},
		videoPlaybackFailed: false,
		playerType: null,
		autoPlayTimeouts: [],
		unloading: false,
		seekingWhilePaused: false,
		retriedSameHost: false,
		useSameHost: false,
		flashVersion: null,
		showCaptions: false,
		eventHandlers: []
	},
	addEventHandler: function( event, fnc ) {
		this.vars.eventHandlers.push( { event: event, fnc: fnc } );
	},
	triggerEvent: function( event, data ) {
		$.each( this.vars.eventHandlers, function( i, eventHandler ) {
			if ( eventHandler.event == event ) {
				eventHandler.fnc.call( window, data );
			}
		} );
	},
	flashVersion: function( flashVersion ) {
		if ( typeof flashVersion != "undefined" ) {
			this.vars.flashVersion = flashVersion;
		}
		else if ( this.vars.flashVersion === null ) {
			this.vars.flashVersion = rtc.utils.getFlashVersion();
		}

		return this.vars.flashVersion;
	},
	seekingWhilePaused: function( seekingWhilePaused ) {
		if ( typeof seekingWhilePaused != "undefined" ) {
			this.vars.seekingWhilePaused = seekingWhilePaused;
		}

		return this.vars.seekingWhilePaused;
	},
	unloading: function( unloading ) {
		if ( typeof unloading != "undefined" ) {
			this.vars.unloading = unloading;
		}
		return this.vars.unloading;
	},
	player1Ready: function( ready ) {
		if ( typeof ready != "undefined" ) {
			this.vars.player1Ready = ready;
		}
		return this.vars.player1Ready;
	},
	videoDuration: function( videoDuration ) {
		if ( typeof videoDuration != "undefined" ) {
			this.vars.videoDuration = videoDuration;
		}
		return this.vars.videoDuration;
	},
	playerType: function( playerType ) {
		if ( typeof playerType != "undefined" ) {
			this.vars.playerType = playerType;
		}
		return this.vars.playerType;
	},
	removeDomainFromURL: function( url ) {
		return url.replace( /^https?:\/\/[^\/]+/, "" );
	},
	getBufferingOptions: function( options, userAgent ) {
		options = $.extend( true, {
			enableBuffering: {}
		}, options );

		// disable RTC buffering on Windows Phone because the native player doesn't report download progress
		if ( userAgent.match( /windows phone/i ) ) {
			options.enableBuffering.RTC = false;
		}

		if ( userAgent.match( /iphone/i ) ) {
			options.enableBuffering.RTC = false;
		}

		// disable RTC buffering on Android 4+ because the native browser player doesn't report download progress
		var m = userAgent.match( /android ([0-9]+)/i );

		if ( m && m[1] >= 4 ) {
			options.enableBuffering.RTC = false;
		}

		m = userAgent.match( /mac os x.+version\/([0-9\.]+).+safari/i );

		if ( m && m[1] >= 8 ) {
			options.enableBuffering.RTC = false;
		}

		return options;
	},
	init: function( callback, options )
	{
		rtc.loadSequence.progress( rtc.loadSequence.steps.playerInitializing );

		rtc.player.buffering.options(
			rtc.player.getBufferingOptions( options, navigator.userAgent ) );

		( function( readyFn ) {
			readyFn = readyFn ? readyFn : function() {};
			if ( rtc.hd ) {
				rtc.hd.autoVideoSize();
			}
			// Flash must take precedence, due to technical inconstistencies between html implementations.
			var config = rtc.player.getJplayerMediaConfig( navigator.userAgent, rtc.player.flashVersion() );
			if ( rtc.utils.supportsBackgroundAudio() ) {
				// only initialise the audio player if the device supports background audio to prevent an issue with Chrome 36 on
				// Android showing an error card instead of the splash play screen
				$("#jquery_jplayer_audioplayer").jPlayer({
					ready: function () {
						rtc.utils.track("player.audio.ready");
						if(rtc.player.player1Ready())
						{
							rtc.utils.loadVolumeState();
							readyFn();
						}
						else {
							rtc.player.player1Ready(true);
						}
					},
					wmode:"window", // required by Firefox 3.6 otherwise audio player will never initialise
					swfPath: config.swfPath,
					solution: config.solution,
					supplied: "mp3",
					autoplay:false,
					error: function(e) {
						if ( !rtc.player.unloading() ) {
							consoleLog('AUDIO ERROR:' + e.jPlayer.error.type);
							consoleLog(e.jPlayer.error);
							rtc.player.logJplayerError( "audio", e.jPlayer.error );

							if ( e.jPlayer.error.type == "e_flash_disabled" ) {
								rtc.utils.backgroundAudioEnabled( false );
							}
							else if ( e.jPlayer.error.type == "e_url" ) {
								var url = rtc.player.audio.status().src;

								if ( String( url ).match( /^http/ ) ) {
									rtc.player.audio( "setMedia", { mp3: rtc.player.removeDomainFromURL( url ) } );
								}
							}
						}
					},
					play: function(e) {
						rtc.player.events.audio.play();
					},
					pause: function(e) {
						rtc.player.events.audio.pause();
					},
					playing: function() {
						rtc.player.events.audio.playing();
					}
				});
			}
			else {
				// audio player not supported so marking player as ready so that the readyFn will be called when the video player initialises
				rtc.player.player1Ready(true);
			}

		    $("#jquery_jplayer_videoplayer").jPlayer({
				ready: function () {
					if ( rtc.utils.isAndroid() ) {
						$("video").addClass("hide-video-player");
					}
					rtc.utils.track("player.video.ready", 'flashVersion=' + rtc.player.flashVersion());
					if(rtc.player.player1Ready())
					{
						rtc.utils.loadVolumeState();
						readyFn();
					}
					else {
						rtc.player.player1Ready(true);
					}
					$('.jp-cc').on("click", function(){
						rtc.player.toggleCC();
					})
				},
				progress: function(event) {
					rtc.player.events.progress( rtc.player.getVideoTimes() );
					rtc.player.autoPlayStarted();
				},
				timeupdate: function(event) {
					rtc.player.autoPlayStarted( event.jPlayer.status.currentTime > 0 );
					rtc.player.videoDuration( event.jPlayer.status.duration );
					rtc.player.events.timeupdate(event.jPlayer.status.currentPercentAbsolute, event.jPlayer.status.currentTime, rtc.player.getVideoPercentages(), event.jPlayer.status.duration);
				},
				emptied: function(event) {
					rtc.utils.track( "player.video.cleared", { data: "ts=" + ( new Date() ).getTime() } );
				},
				ended: function(event) {
					rtc.player.events.ended(event.jPlayer.status.duration, event.jPlayer.status.netStreamInfo);
				},
				click: function (event){
					rtc.utils.track("player.video.click", {data:"jPlayer"});
					rtc.utils.start();
				},
				play: function (event) {
					$("video").removeClass("hide-video-player").show();
					rtc.card.hideLoadingIcon();
					rtc.utils.hideResumeSplash();
					if ( event.jPlayer.status.duration > 0 ) {
						rtc.player.videoDuration( event.jPlayer.status.duration );
					}
					rtc.player.playerType( event.jPlayer.flash.active ? "flash" : "html" );
					rtc.player.events.play( rtc.player.getVideoTimes() );
				},
                /**
                 * Handles video playing events
                 *
                 * @param {Object} event jPlayer event
                 */
                playing: function(event) {
					rtc.player.autoPlayStarted( true ); // this is the HTML5 video player telling us the video has started playing
                    rtc.player.events.playing(event);
                },
                /**
                 * Handles video stalled events
                 *
                 * @param {Object} event jPlayer event
                 */
                stalled: function(event) {
                    rtc.player.events.stalled(event);
                },
                /**
                 * Handles video waiting events
                 *
                 * @param {Object} event jPlayer event
                 */
                waiting: function(event) {
                    rtc.player.events.waiting(event);
                },
				pause: function () {
					rtc.player.events.pause();
				},
				seeking: function() {
					rtc.player.events.seeking();
				},
				seeked: function(event) {
					rtc.player.events.seeked( rtc.player.getVideoTimes() );
				},
				canplay: function() {
					rtc.player.events.canplay();
				},
				canplaythrough: function(e) {
					rtc.player.events.canplaythrough(e.jPlayer.status.networkState);
				},
				flashbufferfull: function(e) {
					rtc.player.events.flashbufferfull(e.jPlayer.status.seekPercent);
				},
				flashbufferempty: function(e) {
					rtc.player.events.flashbufferempty(e.jPlayer.status.seekPercent);
				},
				volumechange: function(event) {
					rtc.player.events.volumechange( event );
				},
				swfPath: config.swfPath,
				solution: config.solution,
				supplied: config.suppliedVideo, // if m4v is given priority over flv please check patchTimings
				size: rtc.player.getVideoSize(),
				cssSelector: {
					noSolution:""
				},
				error: function(e) {
					if ( !rtc.player.unloading() ) {
						var errorType = "video";
						var errorData = { type: "e_unknown" };
						var additionalErrorData = {};
						try {
							errorData = e.jPlayer.error || errorData;
						}
						catch ( e ) { }
						try {
							var jPlayerData = rtc.player.video().data().jPlayer;

							additionalErrorData.jPlayerData = JSON.stringify( {
								formats: jPlayerData.formats,
								solutions: jPlayerData.solutions,
								src: jPlayerData.status.src
							} );
						}
						catch ( e ) { }
						consoleLog('VIDEO ERROR:' + errorData.type);
						consoleLog(errorData);
						if(errorData.type=="e_no_solution") {
							rtc.utils.showErrorCard( rtc.utils.getJplayerErrorCard( errorData.type, RTCVisit, rtc.player.vars.videoPlaybackFailed ) );
							additionalErrorData.flashVersion = rtc.utils.getFlashVersion();
							rtc.player.clearAutoPlayTimeouts();
							rtc.player.buffering.hideBufferingIcon();
						}
						else if ( errorData.type == "e_url" ) {
							if ( typeof rtc.player.vars.allVideoTypes == "undefined" ) {
								rtc.player.vars.allVideoTypes = $.extend( true, {}, rtc.player.vars.videoTypes );
							}
							if ( e.jPlayer.flash.active && !rtc.player.vars.retriedSameHost && Object.keys( rtc.player.vars.videoTypes ).length > 1 ) {
								delete rtc.player.vars.videoTypes[e.jPlayer.status.formatType];
								rtc.player.vars.videoPlaybackFailed = true;
								rtc.player.vars.defaultSuppliedVideo = Object.keys( rtc.player.vars.videoTypes ).join( ", " );
								rtc.player.video( "setMedia", rtc.player.vars.videoTypes );
								rtc.utils.start();
								errorType += ".mediaRetry";
							}
							else if ( !rtc.player.vars.retriedSameHost ) {
								rtc.player.vars.retriedSameHost = true;
								if (!rtc.utils.overlaysDisabled()) {
									rtc.player.vars.useSameHost = true;
									rtc.player.vars.videoTypes = $.extend( true, {}, rtc.player.vars.allVideoTypes );
									$.each( rtc.player.vars.videoTypes, function( i, s ) {
										rtc.player.vars.videoTypes[i] = rtc.player.removeDomainFromURL( s );
									} );
									errorType += ".mediaRetrySameDomain";
								}
								else {
									errorType += ".mediaRetryOverlaysDisabled";
								}
								rtc.player.vars.defaultSuppliedVideo = Object.keys( rtc.player.vars.videoTypes ).join( ", " );
								rtc.player.video( "setMedia", rtc.player.vars.videoTypes );
								rtc.utils.start();
							}
							else {
								rtc.utils.showErrorCard( rtc.utils.getJplayerErrorCard( errorData.type, RTCVisit ) );
								additionalErrorData.flashVersion = rtc.utils.getFlashVersion();
								rtc.player.clearAutoPlayTimeouts();
								rtc.player.buffering.hideBufferingIcon();
							}
						}
						else if ( errorData.type == "e_no_support" ) {
							rtc.utils.showErrorCard( rtc.utils.getJplayerErrorCard( errorData.type, RTCVisit ) );
							additionalErrorData.flashVersion = rtc.utils.getFlashVersion();
							rtc.player.clearAutoPlayTimeouts();
							rtc.player.buffering.hideBufferingIcon();
						}
						rtc.player.logJplayerError( errorType, errorData, additionalErrorData );
					}
				}
			} );
		} )( function() {
			var init = function( id ) {
				var o = function() {
					return o.elem.jPlayer.apply( o.elem, arguments );
				};

				o.id = id;
				o.elem = $( "#" + id );
				o.data = o.elem.data( "jPlayer" );
				o.status = function() { return this.data.status; };
				o.element = function() {
					if ( this.data.html.active ) {
						return this.data.htmlElement;
					}

					return {
						video: $( "object", this.data.element ).get( 0 ),
						poster: $( "img", this.data.element ).get( 0 )
					};
				};
				o.isHtmlActive = function() { return this.data.html.active; };
				o.isFlashActive = function() { return this.data.flash.active; };

				return o;
			};

			rtc.player.video = init( "jquery_jplayer_videoplayer" );
			rtc.player.audio = init( "jquery_jplayer_audioplayer" );
			rtc.player.both = function( arg1, arg2 ) {
				this.video( arg1, arg2 );
				this.audio( arg1, arg2 );
			};

			rtc.player.controls.addVolumeControls(rtc.player.hasVolumeControl());

			callback();

			rtc.loadSequence.progress( rtc.loadSequence.steps.playerInitialized );
		} );
	},
	// playerStatus keeps track of player status so that if a user skips forward past the buffered video playback can be resumed if the video is automatically paused during buffering
	playerStatus: {
		name: null,
		videoStarted: false,
		isSeeking: false,
		seeked: false,
		playing: false,
		canplay: function() {
			if ( this.seeked && name == "canplay" && !this.playing )
			{
				rtc.player.controls.resume();
				this.seeked = false;
			}
		},
		seeking: function( isSeeking ) {
			if ( typeof isSeeking != "undefined" ) {
				this.isSeeking = isSeeking;
			}

			return this.isSeeking;
		},
		set: function( name )
		{
			this.name = name;
			// console.log('set:' + name);
			rtc.player.buffering.clearPlayStatusTimeout();
			if ( name == "seeked" )
			{
				this.seeking( false );
				this.seeked = true;
			}
			else
			{
				if ( name == "playing" ) {
					if ( !rtc.player.video.isFlashActive() ) {
						this.seeking( false );
					}

					this.seeked = false;
					this.playing = true;
					this.videoStarted = true;
				}
				else if ( name == "paused" || name == "buffering" ) {
					this.playing = false;
				}
			}
		}
	},
	getVideoTimes: function() {
		try {
			var status = rtc.player.video.status();
			var buffered = rtc.player.getVideoPercentages();

			return { play: status.currentTime, buffered: status.duration * ( buffered.end / 100 ), bufferedStart: status.duration * ( buffered.start / 100 ), bufferedPercentage: buffered.end, status: status };
		}
		catch (e) {}

		return { play: 0, buffered: 0, bufferedStart: 0, bufferedPercentage: 0, status: {} };
	},
	hasVolumeControl :  function() {
		//For iOS and other devices where volume cannot be controlled by player.
		return !rtc.player.video.status().noVolume;
	},
	stopPlayer : function() {
		if(this.video && this.video.status().src!="") {
			this.video("stop");
		}
		if ( this.audio ) {
			this.audio("stop");
		}
		rtc.utils.exitFullScreen();
		this.buffering.hideBufferingIcon( true );
		this.playerStatus.set( "paused" ); // jPlayer does not report 'pause' event following a 'stop' method call on nexus 7, so update playerStatus here.
		this.buffering.clearPlayStatusTimeout();
		this.buffering.updateProgress();//ToMarkerPosition();
	},
	pause: function() {
		rtc.player.controls.playBtnPause();
		$.rtcVideoPlaying = false;
		rtc.player.playerStatus.set( "paused" );
	},
	getVideoFilename: function() {
		var f = null;

		try {
			f = rtc.utils.basename( rtc.player.video.status().src );
		}
		catch (e){}

		return f;
	},
	_videoPercentages: function(buffered, currentTime, duration) {
		var ret = { start: 0, end: 0 };
		if ( buffered.length > 0 ) {
			for ( var i = 0 ; i < buffered.length ; i++ ) {
				var start = buffered[i].start;
				var end = buffered[i].end;
				if ( start <= currentTime ) {
					ret.start = start;
				}
				if ( start <= currentTime + 10 && end >= currentTime ) { // With multiple sections, check if the start time of a later section is within 10 seconds of the current time, then consider that section buffered for the purpose of RTC buffering detection.
					ret.end = end;
				}
			}

			if ( ret.end == 0 ) {
				for ( i = 0 ; i < buffered.length ; i++ ) {
					ret.start = buffered[i].start;
					ret.end = buffered[i].end;
					if ( ret.start <= currentTime && ret.end >= currentTime ) {
						break;
					}
				}
			}

			if ( ret.start > currentTime && ret.start < currentTime + 16 ) {
				ret.start = currentTime;
			}

			ret.start = Math.floor( ( ret.start / duration ) * 100 );
			ret.end = ( ret.end / duration ) * 100;
		}
		return ret;
	},
	getVideoPercentages: function() {
		var ret = { start: 0, end: 0 };
		try {
			if ( rtc.player.video.isFlashActive() ) {
				ret.end = rtc.player.video.status().seekPercent;
			}
			else {
				var video = rtc.player.video.element().video;
				var buffered = [];
				for ( var i = 0 ; i < video.buffered.length ; i++ ) {
					buffered.push({
						start: video.buffered.start( i ),
						end  : video.buffered.end( i )
					});
				}


				ret = this._videoPercentages(buffered, video.currentTime, video.duration);
			}
		} catch (e){}

		return ret;
	},
	getVideoSize: function()
	{
		if ( rtc.hd ) {
			return rtc.hd.getVideoSize( true );
		}

		return {
			width: 640 + "px",
			height: 360 + "px",
			cssClass: "jp-video-360p"
		};
	},
	getCampaignId: function(config, visit)
	{
		if ( visit.currentState && typeof StateEngine[visit.currentState].getCampaign != "undefined" ) {
			return StateEngine[visit.currentState].getCampaign(rtc.utils.language(), config);
		}

		return config.campaignId;
	},
	getCampaignGuid: function(config, visit)
	{
		if ( visit.currentState && typeof StateEngine[visit.currentState].getCampaign != "undefined" ) {
			return StateEngine[visit.currentState].getCampaign(rtc.utils.language(), config);
		}

		return config['campaignGuid_' + rtc.utils.language()] || config.campaignGuid || null;
	},
	contentURL: function(config, visit, bdw)
	{
		config = config || {};
		visit = visit || {};
		bdw = bdw || 0;
		var campaignGuid= rtc.player.getCampaignGuid(config, visit);
		var campaignId= rtc.player.getCampaignId(config, visit);
		var forceLow = rtc.player.forceLow( navigator.userAgent ) ? '&brate=low' : '';
		var hd = ( rtc.utils.isHD && rtc.utils.isHD() ) ? '&hd=true' : '';
		var videoQuality = visit.videoQuality ? '&quality=' + visit.videoQuality : '';
		var format = "mobile";
		var forceVidgen = "";
		var publishDate = rtc.utils.getMediaPublishDate( config, visit, campaignId );

		if(rtc.player.supports("video/mp4; codecs=\"avc1.64001E\"")) {	//If browser supports h264 mp4 using "High" profile encoding
			format = "mp4";
		}
		if (visit.videoFormat) {
			format = visit.videoFormat;
		}
		if ( config.forceVidgen ) {
			forceVidgen = "&force";
		}

		var prefix = campaignGuid ? '&' : '?';
		if (!campaignId && !campaignGuid) {
			campaignId = '{campaignNotSpecified}';
		}
		campaignId = campaignId ? prefix + 'name=' + campaignId : '';
		campaignGuid = campaignGuid ? '?cid=' + campaignGuid : '';
		var videoRenderType = config.videoRenderType ? '&renderType=' + config.videoRenderType : '';

		var contentUrl = config.contentUrl || '/defaultContent';

		if ( typeof rtc.utils.getContentUrl != "undefined" ) {
			contentUrl = rtc.utils.getContentUrl( config, visit );
		}

		var burnins = rtc.utils.overlaysDisabled() ? '&burnins=true' : '';

		// Enable HLS, if HLS is configured on "config" file and overlays are disabled
		var hls = ( config.hlsEnabled == true || config.hlsEnabled == "true" ) && rtc.utils.overlaysDisabled() && rtc.player.supports("application/x-mpegURL",true) ? "&hls=true" : "";

		if ( !rtc.utils.supportsBackgroundAudio() && StateEngine[RTCVisit.currentState] && StateEngine[RTCVisit.currentState].getBurninAudioConfig ) {
			burnins += "&burninaudio=" + StateEngine[RTCVisit.currentState].getBurninAudioConfig();
		}

		return contentUrl + campaignGuid + campaignId + forceLow + '&bdw=' + bdw + hd + videoQuality + "&fmt=" + format +
			videoRenderType + publishDate + burnins + hls + forceVidgen;
	},
	setContentUrlResponseCallback: function( callback ) {
		this.contentUrlReponseCallback = callback;
	},
	contentUrlReponseCallback: null,
	handleContentUrlResponse: function( response, vars,  bdw, vrs, contentUrl ) {
		rtc.player.vars.videoTypes = {};
		rtc.player.vars.videoPlaybackFailed = false;
		rtc.player.seekingWhilePaused( false );
		rtc.utils.vars.videoQuality = response.videoQuality;
		rtc.utils.vars.totalDuration = response.totalDuration;
		rtc.utils.vars.videoSize=response.videosize;
		rtc.utils.vars.videoOverlays=new Array();
		rtc.player.buffering.reset();
		if(!(navigator.userAgent.match(/iphone/i) || navigator.userAgent.match(/ipad/i) || navigator.userAgent.match(/ipod/i) || navigator.userAgent.match(/android/i)) && !rtc.utils.overlaysDisabled()) {
			$(response.audio).each(function(i, a){
				if ( a.start == 0 || i == 0 ) {
					rtc.player.audio("setMedia",{mp3: a.url});
					rtc.player.audio("load");
				}
				rtc.utils.vars.videoOverlays.push(new AudioTrack(a.start,rtc.player.audio.elem,a.url));
			});
		}

		rtc.player.setVideoMedia( vrs, bdw, contentUrl, response, vars );
	},
	setVideoMedia: function( vrs, bdw, contentUrl, response, vars ) {
		var f = ( function( vrs, bdw, contentUrl, response, vars ) {
			return function() {
				var flvVideo = response.video || "";
				var m4vVideo = response.m4vvideo || response.formats[Object.keys(response.formats)[0]];
				var videoMd5 = null;
				var videoMedia = { poster: RTCConfig.baseDir + "/css/images/splash-play.png" };
				var overlayData = rtc.utils.parseEffects( response.effect );

				if ( rtc.player.vars.useSameHost ) {
					flvVideo = rtc.player.removeDomainFromURL( flvVideo );
					m4vVideo = rtc.player.removeDomainFromURL( m4vVideo );
				}

				if ( flvVideo != "" ) {
					rtc.player.vars.videoTypes.flv = flvVideo;
					videoMedia.flv = flvVideo;
				}
				if ( m4vVideo != "" ) {
					rtc.player.vars.videoTypes.m4v = m4vVideo;
					videoMedia.m4v = m4vVideo;
				}

				if ( response.md5s ) {
					videoMd5 = response.md5s[Object.keys(response.md5s)[0]];
				}

				rtc.player.video("setMedia", videoMedia);

				rtc.utils.logVideoMedia( bdw, videoMd5, rtc.player.getCampaignId(rtc.utils.config, RTCVisit), overlayData, vrs, contentUrl );

				if (rtc.utils.isAndroid() && $('#wrapper_status_image').hasClass('wrapperLoadingImage')) {
					$('#wrapper_status_image').removeClass('wrapperLoadingImage');
					$('#wrapper_status_image').addClass('wrapperPlayPoster').click( function() {
						$('#wrapper_status_image').unbind("click").removeClass('wrapperPlayPoster'); // prevent repeated click events
						rtc.utils.track("player.video.click", {data:"wrapper (Android)"}); // track as a player click event
						rtc.utils.start(vars.bufferIconDelay);
					});
				}
				if ( !navigator.userAgent.match( /(iphone|ipad|ipod|android)/i ) ) {
					// depending on the calculated bandwidth wait at least 1 second before showing low bandwidth warning
					rtc.player.buffering.checkPlayStatusTimeout( Math.max( 10, rtc.bandwidth > 0 ? Math.max( 1, ( 1 / rtc.bandwidth ) * 280 ) : 5 ) * 1000, true );
				}
				if ( navigator.userAgent.match( /(iphone|ipad|ipod|android)/i ) ) {
					if ( $('#wrapper_status_image').hasClass('wrapperLoadingImage') ) {
						$('#wrapper_status_image').removeClass('wrapperLoadingImage');
						$("#video_background").css( "background", "#000" );
					}
					rtc.player.buffering.hideBufferingIcon();
				}
				if ( !vars.firstPlay || rtc.player.attemptToAutoPlay( navigator.userAgent ) ) {
					if ( vars.firstPlay ) {
						rtc.player.checkAutoPlayStatus();
					}
					if ( $( ".sideCardDialog:visible" ).length == 0 ) {
						rtc.utils.start(vars.bufferIconDelay);
					}
				}
				if ( navigator.userAgent.match( /android/i ) ) {
					$("video").hide();
				}
				rtc.utils.updateOverlays(0);

				rtc.player.contentUrlReponseCallback && rtc.player.contentUrlReponseCallback( response, vars,  bdw, vrs, contentUrl );
			};
		} )( vrs, bdw, contentUrl, response, vars );

		var delay = rtc.utils.getSetMediaDelay( navigator.userAgent, $( "video" ).length );

		if ( delay == 0 ) {
			f();
		}
		else {
			setTimeout( f, delay );
		}
	},
	getVideoRequestString: function( state ) {
		var params = videoParams( state );
		var vrs = videoRequestString( params );

		if ( rtc.utils.config.hlsEnabled || ( rtc.utils.overlaysDisabled() && typeof rtc.overlay.params === 'function' ) ) {
			var overlayParams = rtc.overlay.params( RTCVisit.currentState, RTCVisit, RTCOverlayData );
			if ( overlayParams ) {
				vrs += "&visit=" + escape( JSON.stringify( overlayParams ) )
			}
		}

		return vrs;
	},
	playVideo: function(vars, retry) {
		rtc.player.vars.retriedSameHost = false;
		retry = typeof retry == "undefined" ? true : retry;
		rtc.player.both('clearMedia');
        $('#jquery_jplayer_videoplayer object').width(1).height(1);
		rtc.overlay.hideAll();
		var bdw=rtc.utils.getBandwidth();
		var contentUrl = rtc.player.contentURL(rtc.utils.config, RTCVisit, bdw) + '&nocache=' + new Date().getTime();
		var currentState = RTCVisit.currentState;
		rtc.player.buffering.showBufferingIcon(vars.bufferIconDelay);
		rtc.utils.track( "playvideo", { data: "ts=" + ( new Date() ).getTime() } );
		rtc.utils.vars.hdLowBandwidthShown = false; // reset to show warning for each section of video.
		var vrs = rtc.player.getVideoRequestString( vars.state );
		$.ajax( {
			url: contentUrl,
			data: vrs,
			dataType: 'jsonp',
			timeout: rtc.utils.overlaysDisabled() ? 60000 : 15000
		})
		.done(function(response) {
			if ( currentState != RTCVisit.currentState ) {
				return;
			}

			rtc.player.handleContentUrlResponse( response, vars,  bdw, vrs, contentUrl );
		})
		.fail(function( xhr, status, error ) {
			var trackData = "url=" + contentUrl + '&' + vrs + ",status=" + status + ",error=" + JSON.stringify( error );
			if( xhr.status == 503) {
				rtc.utils.showErrorCard( "service-overloaded" );
				rtc.utils.track( "error.overloaded", trackData );
			} else if ( retry ) {
				rtc.utils.track( "content.retry", trackData );
				setTimeout( function() {
					rtc.player.playVideo( vars, false );
				}, 2000 );
			}
			else {
				rtc.utils.showErrorCard( "technical-error" );
				try {
					trackData += ",jQueryVersion=" + $.fn.jquery;
				}
				catch ( e ) { }
				rtc.utils.track( "error.content", trackData );
			}
		});
	},
	checkAutoPlayStatus: function() {
		this.vars.autoPlayTimeouts = [
			setTimeout( function() {
				rtc.player.autoPlayFailed();
			}, 8000 ),
			setTimeout( function() {
				rtc.player.autoPlayFailed();
			}, 10000 ) ];
	},
	autoPlayStarted: function( force ) {
		if ( force && this.vars.autoPlayTimeouts.length > 0 ) {
			$.each( this.vars.autoPlayTimeouts, function( i, timeout ) {
				clearTimeout( timeout );
			} );

			this.vars.autoPlayTimeouts = [];
		}
		else if ( this.vars.autoPlayTimeouts.length == 2 ) {
			clearTimeout( this.vars.autoPlayTimeouts[0] );
			if ( rtc.player.getVideoPercentages().end > 0 ) {
				clearTimeout( this.vars.autoPlayTimeouts[1] );
				this.vars.autoPlayTimeouts = [];
			}
			else {
				this.vars.autoPlayTimeouts.splice( 0, 1 );
			}
		}
		else if ( this.vars.autoPlayTimeouts.length == 1 && rtc.player.getVideoPercentages().end > 0 ) {
			clearTimeout( this.vars.autoPlayTimeouts[0] );
			this.vars.autoPlayTimeouts = [];
		}
	},
	autoPlayFailed: function() {
		if ( rtc.player.video.isHtmlActive() ) { // ignore the autoplay failure if using flash which should always autoplau
			var videoPlayer = $( "#jquery_jplayer_videoplayer" );
			if ( $( "img", videoPlayer ).length > 0 ) {
				$( "img", videoPlayer ).show();
			}
			else {
				videoPlayer.prepend( $( "<img id='jp_poster_1' style='width:" + videoPlayer.width() + "px;height:" +
					videoPlayer.height() + "px' src='" + RTCConfig.baseDir + "/css/images/splash-play.png'>" ).click( function() {
						$( this ).hide();
						rtc.utils.track("player.video.click", {data:"auto play failed"}); // track as a player click event
						rtc.utils.start();
					} ) );
			}
			$( "object,video", videoPlayer ).width(1).height(1);
			rtc.player.buffering.hideBufferingIcon();
			rtc.player.controls.playBtnPause();
			rtc.utils.track( "error.video.autoplay", { userAgent: navigator.userAgent, flash: rtc.utils.getFlashVersion() } );
		}
		this.clearAutoPlayTimeouts();
	},
	clearAutoPlayTimeouts: function() {
		for ( var i = 0 ; i < this.vars.autoPlayTimeouts.length ; i++ ) {
			clearTimeout( this.vars.autoPlayTimeouts[i] );
		}
		this.vars.autoPlayTimeouts = [];
	},
	logJplayerError: function( mediaType, data, additionalData ) {
		if ( mediaType != "audio" || data.type != "e_url_not_set" ) { // prevent URL not set errors coming from the audio player when pausing/playing if no MP3 file is specified
			if ( additionalData ) {
				data = $.extend( true, data, additionalData );
			}
			rtc.utils.track( "error.jplayer." + mediaType, data );
		}
	},
	timelineSeek: function( percent ) {
		rtc.player.events.seeking();
		return rtc.player.buffering.setApproxStartTimeFromPercentage( percent, this.video.status().seekPercent, this.videoDuration(), this.video.status().currentTime );
	},
	isMediaSet: function() {
		try {
			return this.video.status().src != "";
		}
		catch ( e ) { }
		return false;
	},
	restoreVideoSize: function() {
		try {
			var videoElement = rtc.player.video.element().video;
			if ( videoElement.tagName && $( videoElement ).width() <= 1 ) {
				var size = { width: $( "#jquery_jplayer_videoplayer" ).width(), height: $( "#jquery_jplayer_videoplayer" ).height() };
				$( videoElement ).css( size ).attr( size );
			}
		}
		catch ( e ) { }
	},
	showIE9FlashWarning: function() {
		$( "#video_background" ).addClass( "flashWarningMessageIeIV" );
	},
	hideIE9FlashWarning: function() {
		$( "#video_background" ).removeClass( "flashWarningMessageIeIV" );
	},
	controls: {
		playBtnPlay: function() {
			consoleLog('playing');
			$('#timelineBar #playpause').removeClass('paused');
		},
		playBtnPause: function() {
			consoleLog('pausing');
			$('#timelineBar #playpause').addClass('paused');
			if ( rtc.player && rtc.player.buffering && rtc.player.buffering.clearPlayStatusTimeout ) {
				rtc.player.buffering.clearPlayStatusTimeout();
			}
		},
		playNext: function( saveFn, bufferIconDelay ) {
			rtc.utils.track( "playnext" );
			rtc.utils.showFlashOnAndroid();
			rtc.card.hideCards();
			var visitStr = saveFn ? saveFn() : rtc.session.save();
			rtc.player.playVideo({state:RTCVisit.currentState, bufferIconDelay:bufferIconDelay});
		},
		pause: function() {
			if ( rtc.player.isMediaSet() ) {
				consoleLog('pause');
				if ( rtc.player.buffering.status() == "buffering" ) { // video is buffering so is already paused and jPlayer pause event will not be triggered
					rtc.player.pause();
				}
				$('#jquery_jplayer_videoplayer').jPlayer("pause");
				$('#jquery_jplayer_audioplayer').jPlayer("pause");
				rtc.utils.showResumeSplash();
				rtc.player.playerStatus.set("paused");
				rtc.player.buffering.clearPlayStatusTimeout();
			}
		},
		resume: function() {
			if ( rtc.player.isMediaSet() ) {
				consoleLog('resume play');
				rtc.utils.showFlashOnAndroid();
				$('#jquery_jplayer_videoplayer').jPlayer("play");
				rtc.player.buffering.resume();
			}
		},
		rewind: function() {
			consoleLog('rewind');

			rtc.timeline.skipToState( rtc.player.getVideoTimes().play < 2 ? rtc.state.previous(RTCVisit) : RTCVisit.currentState );
		},
		fastForward: function() {
			consoleLog('fastForward');

			rtc.timeline.skipToState( rtc.state.next( RTCVisit ) );
		},
		muteUnmute: function(muteit) {
			consoleLog('muteUnmute ' + muteit);
			$('#jquery_jplayer_videoplayer').jPlayer("mute",muteit);
			$('#jquery_jplayer_audioplayer').jPlayer("mute",muteit);
			rtc.utils.storeLocal('rtc.muted', muteit);
		},
		setMutedState: function(muted) {
			consoleLog('Muted:' + muted);
			if (muted) {
				$('#muteunmute').addClass('muted');
				globalMute = true;
			}
			else {
				$('#muteunmute').removeClass('muted');
				globalMute = false;
			}
		},
		determineMuteState: function(val) {
			if (val < 1) {
				$('#timelineBar #muteunmute').removeClass('partial').addClass('muted');
			}
			else if (val > 80) {
				$('#timelineBar #muteunmute').removeClass('muted').removeClass('partial');
			}
			else {
				$('#timelineBar #muteunmute').removeClass('muted').addClass('partial');
			}
		},
		addVolumeControls: function(hasVolumeControl) {
			if(hasVolumeControl!==false)	//A null argument will evaluate to true here.
			{
				$('#timelineBar #muteunmute').hover(
						function() {
							$('#volumeBar').show();
						}
				);
				$('#timelineBar #muteVolume').mouseleave(
						function() {
							$('#volumeBar').hide();
						}
				);
				$('#timelineBar #muteunmute').on('click', function() {
					if ($(this).hasClass('muted')) {
						consoleLog('unmuting');
						$(this).removeClass('muted');
						rtc.player.controls.muteUnmute(false);
						rtc.player.controls.determineMuteState($('#volume').slider( "option", "value"));
						globalMute = false;
						$("#audio_player").jPlayer("mute", false);
						rtc.utils.track( "volume.unmute" );
					}
					else {
						consoleLog('muting');
						$(this).addClass('muted');
						rtc.player.controls.muteUnmute(true);
						globalMute = true;
						$("#audio_player").jPlayer("mute", true);
						rtc.utils.track( "volume.mute" );
					}
				});
			}
			else {
				$('#timelineBar #muteunmute').addClass("nosound");
			}
		},
		setVolume: function(volume) {
			consoleLog('volume:' + volume);
			$('#volume').slider('option', 'value', volume);
			if (!$('#muteunmute').hasClass('muted')) {
				rtc.player.controls.determineMuteState(volume);
			}
			globalVolume = volume/100;
		},
		changeVolume: function(volume) {
			// consoleLog('volume ' + volume);
			$('#jquery_jplayer_videoplayer').jPlayer("volume",volume/100);
			$('#jquery_jplayer_audioplayer').jPlayer("volume",volume/100);
			rtc.utils.storeLocal('rtc.volume', volume);
		}
	},
	documentReady: function() {
		$( window )
			.bind( "beforeunload", function() {
				rtc.player.unloading( true );
			} )
			.blur( function()
			{
				rtc.player.buffering.clearPlayStatusTimeout();
				rtc.utils.vars.windowHasFocus = false;
			} )
			.focus( function()
			{
				rtc.player.buffering.checkPlayStatusTimeout();
				rtc.utils.vars.windowHasFocus = true;
			} );

		$('.jp-no-solution .flash_player_dl').on('click', function(){
			window.open('http://www.adobe.com/go/getflashplayer','_blank');
		});

		$('.jp-no-solution .help_fail, .jp-playback-failed .help_fail, .jp-technical-error .help_fail').on('click', function(){
			rtc.utils.track("view.help");
			rtc.utils.popitup('help.html');
			return false;
		});

		$('.jp-no-solution .visit-our-website').on('click', function(){
			window.open($(this).attr('href'),'_self');
		});

		rtc.player.buffering.disableBandwidthWarning( !rtc.utils.inlineVideoSupported() );
	},
	getCurrentTime: function( player ) {
		try {
			return rtc.player[player || "video"].status().currentTime
		}
		catch ( e ) {
		}

		return 0;
	},
	removeCaptions: function() {
		if(!rtc.player.captionTrack || !rtc.player.captionTrack.cues) {
			return;
		}
		while(rtc.player.captionTrack.cues.length > 0) {
			rtc.player.captionTrack.removeCue(rtc.player.captionTrack.cues[0])
		}
	},
	trackSupported: function() {
		var playerObj = $("#jquery_jplayer_videoplayer").data().jPlayer;
		if(!playerObj.html.used) {
			return false;
		}
		if(!playerObj.htmlElement.video.addTextTrack) {
			return false;
		}
		return true;
	},
	addNativeCaption: function(text,intime,out) {
		var video = $("#jquery_jplayer_videoplayer").data().jPlayer.htmlElement.video;
		if(!rtc.player.captionTrack) {
			rtc.player.captionTrack = video.addTextTrack("captions", "English Closed Captions");
		}
		if(typeof VTTCue == 'function') {
			rtc.player.captionTrack.addCue(new VTTCue(intime, out, text));
		} else {
			rtc.player.captionTrack.addCue(new TextTrackCue(intime, out, text))
		}
		consoleLog("Adding caption: " + intime + "," + out + "," + text);
	},
	addOverlayCaption: function(text, intime, outtime) {
		var overlay = {
				type : "caption",
				text : text,
				className : "caption",
				times : {
					start: intime,
					end : outtime
				},
				transitions : {
					start : {
						type: "fade",
						speed : 0
					},
					end : {
						type: "fade",
						speed : 0
					}
				},
				position : {
					bottom : 20
				}
			};
		rtc.overlays.add(overlay);
	},
	toggleCC: function(){
		if(rtc.player.trackSupported()){
			var video = $("#jquery_jplayer_videoplayer").data().jPlayer.htmlElement.video;
			if(video.textTracks[0].mode == "disabled" || video.textTracks[0].mode == "hidden") {
				video.textTracks[0].mode = "showing";
			}
			else {
				video.textTracks[0].mode = "disabled";
			}
		} else {
			rtc.player.vars.showCaptions = !rtc.player.vars.showCaptions;

			if(rtc.player.vars.showCaptions){
				$('.overlay-caption.overlay-current').css("display", "block");
			} else {
				$('.overlay-caption.overlay-current').css("display", "none");
			}
		}
	},
	replay: function(){
		rtc.player.video( "play", 0 );
	}
} );
window.rtc.utils = window.rtc.utils || {};
$.extend(true, rtc.utils, {
	config: RTCConfig,
	vars: {
		lastpositionevent: null,
		videoOverlays: null,
		bandwidthWarningContinue: false,
		windowHasFocus: true,
		bandwidthMethod: null,
		videoLayout: "sq"
	},
	logVideoMedia:function(bdw, md5, campaignId, overlays, vrs, contentUrl) {
		var src = rtc.player.video.status().src;
		consoleLog('Reporting bandwidth: ' + bdw);
		if ( !contentUrl.match( /^http/ ) && !!window.location.protocol && !!window.location.host ) {
			contentUrl = window.location.protocol + "//" + window.location.host + contentUrl;
		}
		rtc.utils.track("videoMedia", {
			ts: ( new Date() ).getTime(),
			filename:rtc.utils.basename(src),
			src:src,
			downloadtime: rtc.utils.vars.downloadEndTime - rtc.utils.vars.downloadStartTime,
			bytestotal: rtc.utils.vars.videoSize,
			bdw:Math.round(bdw),
			md5:md5,
			campaignId:campaignId,
			overlays:JSON.stringify(overlays),
			vrs:vrs,
			contentUrl:contentUrl + "&" + vrs,
			bdwMethod:rtc.utils.vars.bandwidthMethod,
			player: rtc.player.video.isHtmlActive() ? 'html' : 'flash',
			quality: src.indexOf('/low/') == -1 ? 'high' : 'low'
		});
	},
	start: function(bufferIconDelay) {
		/*	Use of html5 solution on IE9 requires that this line be jp.jPlayer('play');
		However, that prevents the iPad from displaying the placeholder frame.
		The only reasonable solution would be to prioritise flash over html5
		2012-12-20: Changed from jp.jPlayer('play',0) to jp.jPlayer('play') and removed
                    the call to this function for the iPad
		*/
		rtc.player.video('play');
		// pause to allow video time to buffer prior to playing
		//rtc.player.video('pause');
		rtc.player.buffering.showBufferingIcon(bufferIconDelay);
		rtc.utils.vars.downloadStartTime=(new Date()).getTime();
		rtc.utils.track('videostart');
	},
	positionUpdate: function(pctpos) {
		// jPlayer calls this function every 0.25 seconds to update
		// the latest playback position
		// Events are sent at 25%, 50% and 75% playback position.

		// We internally track the last position event we logged and only send
		// when the time reaches the next 25% trigger point.
		var VIDEO_0  = 'video0';
		var VIDEO_25 = 'video25';
		var VIDEO_50 = 'video50';
		var VIDEO_75 = 'video75';

		var nextevent = 0;
		if ( pctpos >= 75 )
		{
			nextevent = VIDEO_75;
		}
		else if ( pctpos >= 50 )
		{
			nextevent = VIDEO_50;
		}
		else if ( pctpos >= 25 )
		{
			nextevent = VIDEO_25;
		}
		else if ( pctpos > 0 ) //works to detect that actual TRUE start time of the video.
		{
			nextevent = VIDEO_0;
			rtc.loadSequence.progress( rtc.loadSequence.steps.playing );
		}

		if ( nextevent != 0 && nextevent != rtc.utils.vars.lastpositionevent )
		{
			// we've passed a 25% mark, so send the event and remember that we did
			rtc.utils.track(nextevent);
			rtc.utils.vars.lastpositionevent = nextevent;
		}
	},
	updateOverlays: function(time) {
		var allowedOverlays = rtc.utils.allowOverlays();
		if (allowedOverlays !== false) {
			$.each(rtc.utils.vars.videoOverlays,function(index,overlay) {
				if ( allowedOverlays === true || $.inArray( overlay.name, allowedOverlays ) > -1 ) {
					overlay.update(time,!rtc.player.video.status().paused);
				}
			});
		}
	},
	loadVolumeState: function() {
		var volume = rtc.utils.getLocal('rtc.volume') ? parseFloat(rtc.utils.getLocal('rtc.volume')) : 80;
		var muted = ('true' === rtc.utils.getLocal('rtc.muted'));
		rtc.player.controls.setMutedState(muted);
		rtc.player.controls.muteUnmute(muted);
		rtc.player.controls.setVolume(volume);
		rtc.player.controls.changeVolume(volume);
		rtc.utils.track( "volume.load", { data: volume + ( muted ? " (muted)" : "" ) } );
	},
	exitFullScreen : function() {
		if(rtc.player.video && rtc.player.video.isHtmlActive() && rtc.player.video.element().video.webkitDisplayingFullscreen)
		{
			rtc.player.video.element().video.webkitExitFullScreen();
		}
	},
	getBandwidth : function()
	{
		var bdw=0,method=null;//99999;  // if default to high.
		if(rtc.utils.vars.videoSize && rtc.utils.vars.downloadEndTime && rtc.utils.vars.downloadStartTime && rtc.utils.vars.downloadPercentage)
		{
			method = "video";
			bdw=(rtc.utils.vars.downloadPercentage/100 * rtc.utils.vars.videoSize*8)/(rtc.utils.vars.downloadEndTime-rtc.utils.vars.downloadStartTime);
		}
		else if ( rtc.bandwidth ) {
			method = "image";
			bdw = rtc.bandwidth;
		}
		rtc.utils.vars.bandwidthMethod = method;
		bdw=(bdw>0)?bdw:0;
		consoleLog("Bandwidth estimate: " + bdw + ' kbps');
		return bdw;
	},
	getFlashVersion: function()
	{
		var getFlashVersionVariable = function( flashObject )
		{
	        var version = -1;
	        try {
	        	version = flashObject.GetVariable( "$version" );
        	} catch ( e ) {}
	        return version
	    };
		var shockwaveFlashVersions = [ {
	    	 name: "ShockwaveFlash.ShockwaveFlash.7",
	    	 version: function( object ) {
	    		 return getFlashVersionVariable( object );
    		 } }, {
			 name: "ShockwaveFlash.ShockwaveFlash.6",
			 version: function( object ) {
				 var version = "6,0,21";
				 try {
					 object.AllowScriptAccess = "always";
					 version = getFlashVersionVariable( object );
				 }
				 catch ( e ) {}

				 return version;
		 	 } }, {
	 		 name: "ShockwaveFlash.ShockwaveFlash",
	 		 version: function( object ) {
	 			 return getFlashVersionVariable( object );
	 		 } } ];

		if ( navigator.plugins && navigator.plugins.length > 0 )
		{
			var mimeType = navigator.mimeTypes["application/x-shockwave-flash"];

			if ( mimeType && mimeType.enabledPlugin && mimeType.enabledPlugin.description )
			{
				var descriptionArray = mimeType.enabledPlugin.description.split(/ +/);

			    return descriptionArray[2] + " " + descriptionArray[3];
			}
		}
		else if ( navigator.appVersion.indexOf( "Mac" ) < 0 && window.execScript )
		{
		    var h = -1;

		    for ( var i = 0 ; i < shockwaveFlashVersions.length && h == -1 ; i++ )
		    {
		    	var flashObject = null;

	            try {
	            	flashObject = new ActiveXObject( shockwaveFlashVersions[i].name );
	            }
	            catch ( e ) {}

		        if ( flashObject !== null )
		        {
		        	flashDescription = shockwaveFlashVersions[i].version( flashObject );

		            if ( flashDescription != -1 )
		            {
	                    var descriptionArray = flashDescription.split( "," );

	                    return descriptionArray[0].split( " " )[1] + "." + descriptionArray[1] + " r" + descriptionArray[2];
                    }
		        }
		    }
		}

		try {
			var ax = new ActiveXObject( "ShockwaveFlash.ShockwaveFlash" );
			if ( ax ) {
				try {
					return ax.getVariable( "$version" ).replace( /[a-z ]+/i, "" ).replace( /,/g, "." );
				}
				catch ( e ) {
					return true;
				}
			}
		}
		catch ( e ) {
		}

		return false;
	}
});
window.rtc = window.rtc || {};
window.rtc.player = window.rtc.player || {};
$.extend(true, rtc.player, {
	buffering: {
		vars: {
			lastRtcBufferingTime: null,
			canPlayThrough: false,
			enableBuffering: {
				RTC: true,
				browser: true
			},
			mode: { // "active" or "passive"
				RTC: "active",
				browser: "active"
			},
			browserBuffering: {
				start: null,
				end: null,
				data: null
			},
			approxStartTime: 0,
			lastTimeUpdate: 0,
			lastTimeUpdateTime: 0,
			total: 0,
			count: 0,
			video: -1,
			startTime: 0,
			status: null,
			pausedToBuffer: false,
			requiredBufferDuration: 5, // in seconds
			seekingDirection: 0,
			bufferingByVideo: [],
			preloadingRequired: true,
			initial: true,
			ignoreTimeupdateTimes: false,
			showTimeout: null,
			delayedTimeupdateTimeout: null,
			downloadingCheck: {
				timeout: null,
				previousTimes: { buffered: 0 }
			},
			progressCount: 0,
			disableBandwidthWarning: false
		},
		// var functions
		bufferingEnabled: function( type, playerType ) {
			if ('flash' === playerType) {
				return false; // Disable buffering for flash which does it's own.
			}
			else {
				return this.vars.enableBuffering[type];
			}
		},
		bufferingMode: function( bufferingType ) {
			return this.vars.mode[bufferingType];
		},
		options: function( options ) {
			$.extend( true, this.vars.enableBuffering, options.enableBuffering );
		},
		canPlayThrough: function( canPlayThrough ) {
			if ( typeof canPlayThrough != "undefined" ) {
				this.vars.canPlayThrough = canPlayThrough;
			}
			return this.vars.canPlayThrough;
		},
		lastTimeUpdate: function( lastTimeUpdate ) {
			if ( typeof lastTimeUpdate != "undefined" ) {
				this.vars.lastTimeUpdate = lastTimeUpdate;
			}
			return this.vars.lastTimeUpdate;
		},
		lastTimeUpdateTime: function( lastTimeUpdateTime ) {
			if ( typeof lastTimeUpdateTime != "undefined" ) {
				this.vars.lastTimeUpdateTime = lastTimeUpdateTime;
			}
			return this.vars.lastTimeUpdateTime;
		},
		browserBuffering: function( obj ) {
			if ( typeof obj != "undefined" ) {
				$.extend( true, this.vars.browserBuffering, obj );
			}
			return this.vars.browserBuffering;
		},
		isBrowserBuffering: function( obj ) {
			return this.vars.browserBuffering.start !== null;
		},
		previousVideoBuffered: function() {
			return this.vars.video > 0 && this.vars.bufferingByVideo[this.vars.video-1] > 0;
		},
		currentVideoBuffered: function() {
			this.vars.bufferingByVideo[this.vars.video] = 1;
		},
		nextVideo: function() {
			this.vars.video++;
			this.vars.bufferingByVideo[this.vars.video] = 0;
		},
		lastRtcBufferingTime: function( lastRtcBufferingTime ) {
			if ( typeof lastRtcBufferingTime != "undefined" ) {
				this.vars.lastRtcBufferingTime = lastRtcBufferingTime;
			}
			return this.vars.lastRtcBufferingTime;
		},
		setApproxStartTimeFromPercentage: function( percentage, seekPercent, duration, currentTime ) {
			try {
				percentage = Math.min( percentage, seekPercent );
				this.videoStartTime( null );
				this.vars.approxStartTime = duration * ( percentage / 100 );
				this.vars.seekingDirection = this.vars.approxStartTime - currentTime;
				this.ignoreTimeupdateTimes( true );
				consoleLog( "seeking from " + currentTime + " to " + this.vars.approxStartTime );
			} catch ( e ) {
				consoleLog( e );
			}

			return this.vars.approxStartTime;
		},
		ignoreTimeupdateTimes: function( ignoreTimeupdateTimes ) {
			if ( typeof ignoreTimeupdateTimes != "undefined" ) {
				this.vars.ignoreTimeupdateTimes = ignoreTimeupdateTimes;
			}
			return this.vars.ignoreTimeupdateTimes;
		},
		approxStartTime: function( approxStartTime ) {
			if ( typeof approxStartTime != "undefined" ) {
				this.vars.approxStartTime = approxStartTime;
			}
			return this.vars.approxStartTime;
		},
		status: function( status ) {
			if ( typeof status != "undefined" ) {
				this.vars.status = status;
			}
			return this.vars.status;
		},
		disableBandwidthWarning: function( disableBandwidthWarning ) {
			if ( typeof disableBandwidthWarning != "undefined" ) {
				this.vars.disableBandwidthWarning = disableBandwidthWarning;
			}

			return this.vars.disableBandwidthWarning;
		},
		requiredBufferDuration: function( requiredBufferDuration ) {
			if ( typeof requiredBufferDuration != "undefined" ) {
				this.vars.requiredBufferDuration = requiredBufferDuration;
			}
			return this.vars.requiredBufferDuration;
		},
		pausedToBuffer: function( pausedToBuffer ) {
			if ( typeof pausedToBuffer != "undefined" ) {
				this.vars.pausedToBuffer = pausedToBuffer;
			}
			return this.vars.pausedToBuffer;
		},
		preloadingRequired: function( preloadingRequired ) {
			if ( typeof preloadingRequired != "undefined" ) {
				this.vars.preloadingRequired = preloadingRequired;
			}
			return this.vars.preloadingRequired;
		},
		initialBuffer: function( initial ) {
			if ( typeof initial != "undefined" ) {
				this.vars.initial = initial;
			}
			return this.vars.initial;
		},
		bufferingCounts: {
			section: function( section ) {
				if ( typeof section != "undefined" ) {
					rtc.player.buffering.vars.count = section;
				}
				return rtc.player.buffering.vars.count;
			},
			total: function( total ) {
				if ( typeof total != "undefined" ) {
					rtc.player.buffering.vars.total = total;
				}
				return rtc.player.buffering.vars.total;
			},
			increase: function() {
				rtc.player.buffering.vars.count++;
				rtc.player.buffering.vars.total++;
			}
		},
		videoStartTime: function( startTime ) {
			if ( typeof startTime != "undefined" ) {
				this.vars.startTime = startTime;
			}
			return this.vars.startTime;
		},
		//
		icon: {
			showing: true,
			hide: function( immediate ) {
				if (this.showing) {
					rtc.player.buffering.hideBufferingIcon( immediate );
				}
			}
		},
		//
		browserBufferingStart: function( times, additionalData ) {
			if ( !this.isBrowserBuffering() && rtc.player.playerStatus.playing && !this.canPlayThrough() ) {
				if ( this.videoStartTime() !== null && times.play > this.videoStartTime() ) { // don't trigger before the video has started (either start of the video or the seek start position)
					this.browserBuffering( {
						start: (new Date()).getTime(),
						data: $.extend( { start: { datetime: new Date(), time: times.play, lastTimeUpdate: this.lastTimeUpdate(), buffered: ( times.buffered - times.play ) } }, additionalData )
					} );
					this.startBuffering( times, "browser buffering", 1000 );
					consoleLog("browserBufferingStart");

					return true;
				}
			}

			return false;
		},
		browserBufferingEnd: function( times ) {
			var time = (new Date()).getTime();
			var delay = time - this.browserBuffering().start;
			this.browserBuffering( { data: { end: { datetime: new Date(), delay: delay, buffered: ( times.buffered - times.play ) } } } );
			rtc.utils.track( "browserBuffering", { data: JSON.stringify( this.browserBuffering().data ) } );
			this.browserBuffering( { start: null, end: null, data: null } );
			this.hideBufferingIcon();
			this.status( "playing" );
			if ( delay > 1000 ) {
				this.bufferingCounts.increase();
				this.initialBuffer(false);
				this.showBandwidthWarningIfCount( "browser" );
			}
			rtc.player.playerStatus.set( "playing" );
			consoleLog("browserBufferingEnd " + delay);
		},
		clearPlayStatusTimeout: function()
		{
			clearTimeout( this.vars.delayedTimeupdateTimeout );
		},
		checkPlayStatusTimeoutFnc: function() {
			var times = rtc.player.getVideoTimes(); // must get from rtc.player due to be inside a timeout
			if ( rtc.player.playerStatus.playing && this.detected( "timeout", times ) != "buffering" ) {
				this.browserBufferingStart( times, { timeout: "exceeded" } );
			}
		},
		checkPlayStatusTimeout: function( delay, force )
		{
			this.clearPlayStatusTimeout();
			if ( this.bufferingEnabled( "browser", rtc.player.playerType() ) && this.videoStartTime() !== null && this.status() !== "buffering" ) { // only start the timeout if we're not seeking or already buffering
				this.vars.delayedTimeupdateTimeout = setTimeout( function() {
					rtc.player.buffering.checkPlayStatusTimeoutFnc();
				}, delay || 500 );
			}
		},
		seekingComplete: function( times ) {
			this.videoStartTime( times.play );
			consoleLog("startTime set to " + times.play);
			if ( this.detected( "seeked", times ) != "buffering" && this.canResume( times, true ) ) { // check to see if buffering is required
				this.hideBufferingIcon( false );
			}
			rtc.player.playerStatus.seeking( false );
			return this.status();
		},
		bufferingRequired: function( times, threshold ) {
			if ( !this.bufferingEnabled( "RTC", rtc.player.playerType() ) ) { // RTC buffering is disabled so buffering is not required
				return false;
			}
			threshold = threshold || 2;
			return this.videoStartTime() !== null && times.play >= this.videoStartTime() && ( times.play + threshold > times.buffered || times.play < times.bufferedStart ) && ( times.bufferedPercentage < 100 || !this.canPlayThrough() );
		},
		preload: function( times ) {
			if ( !this.preloadingRequired() ) {
				return false;
			}
			this.preloadingRequired( false );
			return this.startBuffering( times, "preload" );
		},
		reset: function() {
			this.initialBuffer( true );
			this.canPlayThrough( false );
			this.preloadingRequired( true );
			this.lastRtcBufferingTime( null );
			this.bufferingCounts.section( 0 );
			this.videoStartTime( 0 );
			this.approxStartTime( 0 );
			this.nextVideo();
			this.pausedToBuffer( false );
			this.ignoreTimeupdateTimes( false );
			if ( this.status() == "buffering" ) {
				$( "#buffering_icon" ).hide();
			}
			this.status( null );
		},
		showBufferingIcon: function( delay ) {
			delay = delay || 0;
			clearTimeout( this.vars.showTimeout );
			if ( delay > 0 ) {
				this.vars.showTimeout = setTimeout( function() {
					rtc.player.buffering.showBufferingIcon();
				}, delay );
			}
			else {
				$( "#buffering_icon" ).stop().show().animate( { opacity: 0.5 }, 500 );
			}
			this.icon.showing = true;
		},
		hideBufferingIcon: function( immediate ) {
			var iconEl = $( "#buffering_icon" );
			clearTimeout( this.vars.showTimeout );
			if ( immediate ) {
				iconEl.hide();
			}
			else {
				if ( rtc.player.video && rtc.player.video.isFlashActive() && !rtc.player.flash.buffer.full ) {
					return;
				}

				iconEl.animate( { opacity: 0 }, 500, function() {
					if ( rtc.player.buffering.status() != "buffering" ) {
						$( this ).hide();
					}
				} );
			}
			this.pausedToBuffer( false );
			this.icon.showing = false;
			rtc.loadSequence.progress( rtc.loadSequence.steps.bufferingComplete );
		},
		showBandwidthWarningIfCount: function( bufferingType ) {
			if ( !this.initialBuffer() && !rtc.player.buffering.bandwidthWarningContinue() && ( this.bufferingCounts.section() >= 3 || this.previousVideoBuffered() ) ) {
				consoleLog( "showBandwidthWarning - " + bufferingType );
				this.showBandwidthWarning( bufferingType );
			}
		},
		showBandwidthWarning: function( bufferingType ) {
			if ( $.rtcCardVars.interfaceCardShowing === null && !rtc.player.buffering.disableBandwidthWarning() ) {
				if ( this.bufferingMode( bufferingType ) == "active" ) {
					rtc.card.showCardByName("bandwidthWarning",rtc.player.controls.pause);
				}
				rtc.utils.track( 'bandwidthWarning', { data: "bufferingType=" + bufferingType } );
			}
		},
		bandwidthWarningContinue: function(bandwidthWarningContinue) {
			if ( typeof bandwidthWarningContinue != "undefined" ) {
				consoleLog('bandwidthWarningContinue');
				rtc.utils.track('bandwidthWarningContinueBtn');
				rtc.player.controls.resume();
				rtc.player.buffering.resume( true );
				rtc.utils.vars.bandwidthWarningContinue = bandwidthWarningContinue;
			}

			return rtc.utils.vars.bandwidthWarningContinue;
		},
		checkBufferingProgressWhilePaused: function( times ) {
			if ( this.vars.progressCount > 0 && this.vars.downloadingCheck.timeout === null && this.bufferingEnabled( "RTC", rtc.player.playerType() ) ) { //
				this.vars.downloadingCheck.previousTimes = times;
				this.vars.downloadingCheck.timeout = setTimeout( function() {
					if ( rtc.player.getVideoTimes().buffered == rtc.player.buffering.vars.downloadingCheck.previousTimes.buffered && rtc.player.buffering.status() == "buffering" ) {
						rtc.player.controls.resume();
						rtc.player.buffering.resume( true );
						rtc.loadSequence.progress( rtc.loadSequence.steps.playing );
						rtc.loadSequence.progress( rtc.loadSequence.steps.bufferingComplete );
						// disable RTC buffering because it doesn't appear that the video player allows buffering while paused
						rtc.player.buffering.vars.enableBuffering.RTC = false;
					}
				}, 2000 );
			}
		},
		clearBufferingProgressWhilePausedTimeout: function( times ) {
			clearTimeout( this.vars.downloadingCheck.timeout );
			this.vars.downloadingCheck.timeout = null;
		},
		startBuffering: function( times, reason, showBufferingIconTimeout ) {
			if ( this.status() == "buffering" || !this.bufferingEnabled( "RTC", rtc.player.playerType() ) ) { // already buffering or RTC buffering is disabled
				return false;
			}
			this.clearPlayStatusTimeout();
			if ( this.videoStartTime() === null || times.play < this.videoStartTime() + 1 || this.isBrowserBuffering() ) {
				this.initialBuffer( true );
				rtc.utils.track("buffering.initial",{filename:rtc.player.getVideoFilename(),reason:reason,times:times});
			}
			else {
				this.initialBuffer( false );
				this.bufferingCounts.increase();
				this.currentVideoBuffered();
				rtc.utils.track("buffering",{filename:rtc.player.getVideoFilename(),reason:reason,times:times});
				consoleLog( "buffering (" + reason + ")..." );
			}
			this.requiredBufferDuration( this.bufferingCounts.total() > 1 ? 10 : 5 );
			this.status( "buffering" );
			if ( this.bufferingMode( this.isBrowserBuffering() ? "browser" : "RTC" ) == "active" ) {
				this.showBufferingIcon(showBufferingIconTimeout);// FIXME add timeout
				this.ignoreTimeupdateTimes( true );
				if ( !this.isBrowserBuffering() ) {
					this.lastRtcBufferingTime( times.play );
					this.pausedToBuffer( true );
					this.showBandwidthWarningIfCount( "RTC" );
					rtc.player.video("pause");
					this.clearBufferingProgressWhilePausedTimeout();
					this.checkBufferingProgressWhilePaused(times);
				}
				// no need to pause the video because the player has done that for us but we must still pause the audio player
				rtc.player.audio("pause");
				rtc.player.events.playingInterval.clear();
				rtc.player.playerStatus.set('buffering');
			}
			consoleLog( "count = " + this.bufferingCounts.section() + " total = " + this.bufferingCounts.total() + " (playhead: " + times.play + " vs buffered: " + times.buffered + ") " + reason );
			return true;
		},
		detected: function( reason, times ) {
			if ( this.canPlayThrough() && this.bufferingMode( "browser" ) == "active" ) {
				if ( this.status() == "buffering" ) {
					this.progress( times );
				}
				return this.status();
			}

			// compare buffered percentage against play percentage
			if ( this.status() != "buffering" && ( this.bufferingRequired( times ) || this.isBrowserBuffering() ) ) {
				this.startBuffering( times, reason );
			}

			return this.status();
		},
		resume: function( force ) {
			if ( force || ( !rtc.card.isCardVisible( "bandwidthWarning" ) && !this.isBrowserBuffering() && ( rtc.player.video.isHtmlActive() || rtc.player.buffering.canResume( rtc.player.getVideoTimes(), true ) ) ) ) {
				this.hideBufferingIcon( force );
				this.status( "playing" );
			}
		},
		_updateProgress: function( p ) {
			var timelineWidth = $('#timeline').width();
			var bufferedWidth = Math.round(timelineWidth * p / 100);
			$( "#buffering-progress-buffered" ).width( bufferedWidth );
			$( "#buffering-progress-unbuffered" ).width( timelineWidth - bufferedWidth );
		},
		updateProgress: function( p ) {
			if ( typeof p == "undefined" ) {
				p = $( "#buffering-progress-buffered" ).data( "percent" );
			}

			$( "#buffering-progress-buffered" ).data( "percent", p );

			return this._updateProgress( p );
		},
		updateProgressToMarkerPosition: function() {
			this.updateProgress( StateEngine[RTCVisit.currentState].timelineStartPos );
		},
		canResume: function( times, alwaysCheck ) {
			if ( !alwaysCheck && !this.bufferingEnabled( "RTC", rtc.player.playerType() ) ) { // RTC buffering is disabled so we need to resume immediately
				return true;
			}
			return ( times.buffered >= times.play + this.requiredBufferDuration() && times.play >= times.bufferedStart ) || times.bufferedPercentage == 100 || this.canPlayThrough();
		},
		progress: function( times ) {
			var s = StateEngine[RTCVisit.currentState].timelineStartPos;
			var w = ( StateEngine[RTCVisit.currentState].getNextState( RTCVisit ) ? StateEngine[StateEngine[RTCVisit.currentState].getNextState( RTCVisit )].timelineStartPos : 100 ) - s;
			var p = s + Math.min( w, ( ( w * times.bufferedPercentage ) / 100 ) );
			this.updateProgress( p );

			if ( this.vars.progressCount++ == 0 && this.status() == "buffering" ) { // this is the first progress event and we are buffering
				this.checkBufferingProgressWhilePaused( times );
			}
			else {
				this.clearBufferingProgressWhilePausedTimeout();
			}

			if ( times.bufferedPercentage > 99 ) {
				this.canPlayThrough( true );
			}

			if ( this.preloadingRequired() && this.bufferingRequired( times, 5 ) && times.bufferedPercentage > 0 ) {
				this.preload( rtc.player.getVideoTimes() );
			}
			else if ( this.status() == "buffering" ) {
				if ( this.canResume( times )  ) {
					if ( $( "#playpause" ).hasClass( "paused" ) && ( !this.initialBuffer() || this.isBrowserBuffering() || rtc.card.isCardVisible() ) ) {
						this.resume( true );
					}
					else if ( !this.isBrowserBuffering() && this.bufferingEnabled( "RTC", rtc.player.playerType() )) {
						rtc.player.controls.resume();
					}
				}
			}
			else if ( this.bufferingRequired( times ) && times.bufferedPercentage > 0 ) {
				this.detected( "download progress", times );
			}
			else {
				this.initialBuffer( false );
			}
			return this.status();
		},
		hasTimeupdateSettledDown: function( time, t ) {
			var timeUpdateDelta = Math.abs( t - this.lastTimeUpdate() );
			return timeUpdateDelta < 0.5 && timeUpdateDelta > 0.2 && Math.abs( time - this.lastTimeUpdateTime() ) < 500;
		},
		timeupdateTimeProgressingRequired: function() {
			return rtc.player.playerStatus.playing || rtc.player.playerStatus.name == "buffering";
		},
		timeupdateBufferingCheckRequired: function( currentTime, duration ) {
			return this.videoStartTime() !== null && currentTime > this.videoStartTime() + 1 && currentTime < duration;
		},
		timeupdateBrowserBufferingDetected: function( timeDiff, t ) {
			return this.bufferingEnabled( "browser", rtc.player.playerType() ) && timeDiff >= 0.05 && !this.ignoreTimeupdateTimes() && ( this.lastRtcBufferingTime() === null || t > this.lastRtcBufferingTime() + 1 );
		},
		timeupdateBufferingCheck: function( time, currentTime, duration, times ) {
			if ( this.timeupdateBufferingCheckRequired( currentTime, duration ) ) {
				// timeDiff is the difference between the calls to this function (timeupdate) and the playhead progress
				// numbers below 0.01 show that the video is playing without any buffering
				var playheadDelta = Math.round( ( currentTime - this.lastTimeUpdate() ) * 1000 );
				var timeDelta = Math.round( time - this.lastTimeUpdateTime() );
				var timeDiff = Math.round(  timeDelta - playheadDelta ) / 1000;

				if ( this.isBrowserBuffering() ) {
					if ( timeDiff < 0.05 && this.hasTimeupdateSettledDown( time, currentTime ) || times.bufferedPercentage > 99 ) {
						this.browserBufferingEnd( times );
					}
				}
				else if ( this.timeupdateBrowserBufferingDetected( timeDiff, currentTime ) || this.bufferingRequired( times ) ) {
					if ( this.detected( "timeupdate", times ) != "buffering" ) {
						this.browserBufferingStart(times,{timeDiff:timeDiff});
					}
				}
				else if ( this.ignoreTimeupdateTimes() && !rtc.card.isCardVisible( "bandwidthWarning" ) ) {
					this.ignoreTimeupdateTimes( false );
				}
				else if ( this.icon.showing && ( this.canResume( times, true ) || this.status() != "buffering" ) ) {
					this.icon.hide();
				}

				return { timeDiff: timeDiff, playheadDelta: playheadDelta, timeDelta: timeDelta };
			}
			else if ( this.icon.showing && this.videoStartTime() !== null && currentTime > 0 && ( this.canResume( times, true ) || this.status() != "buffering" ) ) {
				this.icon.hide();
			}

			return {};
		},
		timeupdate: function( time, currentTime, bufferedPercentages, duration ) {
			var times = this.buildTimesObj( currentTime, bufferedPercentages, duration );

			this.clearPlayStatusTimeout();

			// wait for timeupdate events to settle down (i.e. every ~250ms) before re-setting startTime
			if ( this.videoStartTime() === null ) {
				var closeToApproxStartTime = currentTime > Math.max( 0, this.approxStartTime() - ( this.vars.seekingDirection > 0 ? 2 : 5 ) ) && currentTime < Math.min( duration, this.approxStartTime() + ( this.vars.seekingDirection > 0 ? 5 : 2 ) );
				if ( closeToApproxStartTime && this.hasTimeupdateSettledDown( time, currentTime ) ) { // key frame every 60 frames so allow 5 (extra 3 seconds to allow time for the timeupdate to settle down) seconds as the approximation of what the start time will be
					this.seekingComplete( times );
				}
			}

			if ( this.timeupdateTimeProgressingRequired() ) {
				if ( bufferedPercentages.end > 99 ) {
					this.canPlayThrough( true );
				}

				this.timeupdateBufferingCheck( time, currentTime, duration, times );

				this.lastTimeUpdate( currentTime );
				this.lastTimeUpdateTime( time );
				this.checkPlayStatusTimeout();

				if ( duration - currentTime < 2 ) {
					rtc.player.hideIE9FlashWarning();
				}
			}

			return this.status();
		},
		buildTimesObj: function( currentTime, bufferedPercentages, duration ) {
			return {
				play: currentTime,
				buffered: duration * ( bufferedPercentages.end / 100 ),
				bufferedStart: duration * ( bufferedPercentages.start / 100 ),
				bufferedPercentage: bufferedPercentages.end };
		}
	}
});
window.rtc = window.rtc || {};
window.rtc.player = window.rtc.player || {};
window.rtc.player.buffering = window.rtc.player.buffering || {};
$.extend(true, rtc.player.buffering, {
    v2: {
        vars: {
            activated: false,
            status: "playing",
            count: 0
        },

        /**
         * Activates buffering logic v2
         */
        activate: function() {
            if (!this.activated()) {
                this.activated(true);
                this.disableV1BufferingLogic();
            }
        },

        /**
         * Disables buffering logic v1
         */
        disableV1BufferingLogic: function() {
            $.each(rtc.player.buffering, this.disableV1BufferingLogicMethod);

            rtc.player.buffering.status = this.v1BufferingLogicStatusReplacement;
        },

        /**
         * Disables a buffering logic v1 method. This will prevent buffering logic v1 from intefering with v2.
         * This is not the ideal solution but the buffering logic is too tightly coupled with the rest of the
         * JavaScript.
         *
         * @param {string} key   Buffering logic v1 object key
         * @param {string} value Buffering logic v1 object value
         */
        disableV1BufferingLogicMethod: function(key, value) {
            if (rtc.player.buffering.v2.shouldDisableV1BufferingLogicMethod(key, value)) {
                /**
                 * Empty function to disable buffering logic v1 method
                 */
                rtc.player.buffering[key] = function() {};
            }
        },

        /**
         * Checks if the v1 buffering logic method should be disabled
         *
         * @param {string} key   Object key
         * @param {mixed}  value Object value
         *
         * return {boolean}
         */
        shouldDisableV1BufferingLogicMethod: function(key, value) {
            return typeof value === "function" && key != "forceShow";
        },

        /**
         * Replacement method for rtc.player.buffering.status to prevent issues with audio continuing to play
         * when the video is buffering
         *
         * @return {string}
         */
        v1BufferingLogicStatusReplacement: function() {
            return rtc.player.buffering.v2.vars.status == "buffering" ? "buffering" : "playing";
        },

        /**
         * Checks if buffering logic v2 is activated
         *
         * @param {boolean} [activated] If specified, changes activated value
         *
         * @param {boolean} True, if buffering logic v2 is activated, else, false
         */
        activated: function(activated) {
            if (typeof activated != "undefined") {
                this.vars.activated = activated;
            }

            return this.vars.activated;
        },

        /**
         * Checks if buffering logic v2 should be activated.
         *
         * @param {string} userAgent Browser user agent
         *
         * @return {boolean} True, if buffering logic v2 should be activated, else, false
         */
        shouldActivate: function(userAgent) {
            var chrome = userAgent.match(/(crios|chrome|chromium)\/([0-9]+)/i),
                firefox = userAgent.match(/firefox\/([0-9]+)/i),
                safari = userAgent.match(/version\/([0-9]+).+safari/i);

            // Disable this buffering logic on Edge and iPad, to prevent issues where the icon didn't hide
            if (userAgent.match(/edge|ipad/i)) {
                return false;
            }

            if (chrome) {
                return chrome[2] >= 54;
            }

            if (firefox) {
                return firefox[1] >= 53;
            }

            if (safari) {
                return safari[1] >= 10;
            }

            return false;
        },

        /**
         * Checks if browser is a safari HTML5 or iOS browser.
         *
         * @param {string} userAgent Browser user agent
         *
         * @return {boolean} True, if browser is Safari or iOS, else, false
         */
        isSafariOrIos: function(userAgent) {
            var safari = userAgent.match(/version\/([0-9]+).+safari/i),
                ios = userAgent.match(/iPhone|iPad|iPod/);

            if (ios) {
                return true;
            } else if (safari) {
                return safari[1] >= 10;
            }

            return false;
        },

        /**
         * Checks if browser is Safari on MacOS
         *
         * @param {string} userAgent Browser user agent
         *
         * @return {boolean} True if browser is Safari on MacOS, else false
         */
        isSafariOnMacOS: function(userAgent, platform) {
            var safari = userAgent.match(/version\/([0-9]+).+safari/i) != null,
                macOS = platform.indexOf("Mac") > -1;

            return safari && macOS;
        },

        /**
         * HTML5 media player "stalled" event handler
         *
         * @param {Object} status     jPlayer status object
         */
        stalled: function(status) {
            if (this.shouldActivate(navigator.userAgent)) {
                this.activate();

                if (!this.isSafariOnMacOS(navigator.userAgent, navigator.platform)) {
                    this.waiting(status);
                }
            }
        },

        /**
         * HTML5 media player "waiting" event handler. Pauses the other media player and shows the buffering icon.
         *
         * @param {Object} status     jPlayer status object
         */
        waiting: function(status) {
            if (this.activated() && this.vars.status == "playing") {
                this.vars.status = "buffering";
                this.showBufferingIcon();

                rtc.player.audio("pause");
                rtc.player.events.playingInterval.clear();
                rtc.player.playerStatus.set("buffering");
                rtc.utils.track("browserBuffering.v2.start", this.getEventData(status));
            }
        },

        /**
         * HTML5 media player "playing" event handler. Plays the other media player and hides the buffering icon.
         *
         * @param {Object} status     jPlayer status object
         */
        playing: function(status) {
            if (this.activated()) {
                this.vars.status = "playing";
                if (!this.isSafariOrIos(navigator.userAgent)) {
                    this.hideBufferingIcon();
                }

                rtc.player.playerStatus.set("playing");
                rtc.utils.track("browserBuffering.v2.end", this.getEventData(status));
            }
        },

        /**
         * HTML5 media player "timeupdate" event handler. Hides the buffering icon.
         *
         * @param {number} currentTime     Current time from latest timeUpdate event
         */
        timeupdate: function(currentTime) {
            if (this.activated() && this.vars.status === "playing" &&
                currentTime > 0 && this.isSafariOrIos(navigator.userAgent)) {
                this.hideBufferingIcon();
            }
        },

        /**
         * Gets buffering data to store when tracking a buffering event
         *
         * @param {Object} status jPlayer status object
         * @param {number} time   Current time
         *
         * @return {Object}
         */
        getEventData: function(status, time) {
            time = time || (new Date()).getTime();

            return {
                data: JSON.stringify({
                    time: time,
                    playhead: status.currentTime
                })
            };
        },

        /**
         * Shows the buffering icon
         */
        showBufferingIcon: function() {
            $("#buffering_icon").fadeIn();
        },

        /**
         * Hides the buffering icon
         */
        hideBufferingIcon: function() {
            clearTimeout(rtc.player.buffering.vars.showTimeout);
            $("#buffering_icon").fadeOut();
        },

        /**
         * Shows full low Bandwidth error card
         */
        showBandwidthWarningIfCount: function() {
            this.vars.count++;

            if (3 === this.vars.count && RTCConfig.dynamicLowBandwidth) {
                rtc.utils.showLowBandwidthWarningCard(false);
            }
        }
    }
});
$.extend( true, rtc, {
	session: {
		strings: {
			preparedFor: "Prepared for",
			from: "from"
		},
		save: function(fn) {
			if ('true' === RTCVisit.emailChanged || 'true' === RTCVisit.nameChanged) {
				consoleLog('Creating new session');
				delete RTCVisit.name;
				delete RTCVisit.puid;
				delete RTCVisit.nameChanged;
				delete RTCVisit.emailChanged;
			}
			if ( !RTCVisit.timezone ) {
				RTCVisit.timezone = jstz.determine_timezone().name() + ( jstz.date_is_dst( new Date() ) ? " DST" : "" );
				RTCVisit.timezoneOffset = ( new Date() ).getTimezoneOffset() * -60;
			}
			var visitStr = JSON.stringify(RTCVisit);
			$.post(RTCConfig.baseDir + "/api/sessions/" + ( Modernizr.cookies ? '' : 'nocookies/' ) + (RTCVisit.name ? RTCVisit.name : ''), visitStr, function(data) {
				consoleLog('sessions.name:' + data.name);
				if (data.name) {
					RTCVisit.name = data.name;
				}
				if (fn) {
					fn(RTCVisit.name);
				}
			} );
			return visitStr;
		},
		copyFieldsFromSessionToEvent: function() {
			return ['language'];
		},
		recordEvent: function(sessionName, eventName, formEl) {
			consoleLog('rtc.session.recordEvent');
			var eventData = '';
			var eventDataStr = '';
			if (formEl) {
				eventData = formEl.serializeObject();
				$.each(rtc.session.copyFieldsFromSessionToEvent(), function(i, field) {
					if ( RTCVisit[field] ) {
						eventData[field] = eventData[field] || RTCVisit[field];
					}
				});
				eventDataStr = JSON.stringify(eventData);
			}
			if ( !eventName.match( /shown/i ) ) {
				rtc.utils.analytics.trackEvent( "Action",
						eventName.replace( /\-/g, " " ).replace( /(^| )([a-z])/gi, function( $0, $1, $2 ) { return $1 + $2.toUpperCase() } ) );
			}
			return rtc.session.save(function(sessionName) {
				$.post(RTCConfig.baseDir + "/api/sessions/" + sessionName + '/' + eventName + '/', eventDataStr, function(data) {
					consoleLog('recorded session event sessionName:[' + sessionName + '] eventName:[' + eventName + '] ');
				} );
			});
		},
		setViewerProfile: function(visit) {
			var text = rtc.utils.viewerProfileText(visit);
			$('#viewerProfile').html(text);
		}
	}
});window.rtc = window.rtc || {};
$.extend(true, rtc, {
	loadSequence: {
		start: ( new Date() ).getTime(),
		timeouts: {},
		current: 0,
		sequence: [ { ts: ( new Date() ).getTime(), name: "start" } ],
		steps: {
			domLoadComplete: {
				percent: 0,
				name: "domLoadComplete",
				fn: function() {
					var ua = navigator && navigator.userAgent;
					var jQVersion = jQuery && jQuery.fn && jQuery.fn.jquery;
					var trackData = { jsUserAgent: ua, jQueryVersion: jQVersion };
					var compatibilityView = rtc.utils.compatibilityView(ua);
					if ( compatibilityView ) {
						trackData.compatibilityView = compatibilityView;
					}
					rtc.utils.track( "dom-load-complete", { data: JSON.stringify( trackData ) } );
				}
			},
			bandwidthCheck: {
				percent: 10,
				name: "bandwidthCheck"
			},
			bandwidthStart: {
				percent: 10,
				name: "bandwidthStart"
			},
			bandwidthEnd: {
				percent: 10,
				name: "bandwidthEnd"
			},
			playerInitializing: {
				percent: 15,
				name: "playerInitializing",
				timeout: 12000,
				fn: function() {
					this.percent = 0; // prevent total percentage being incremented again

					if ( !RTCVisit.videoSolution || RTCVisit.videoSolution.match( /flash/i ) ) {
						var flashVersion = rtc.utils.getFlashVersion();

						if ( flashVersion !== false ) { // flash is installed
							// TODO: check to see if swf can be download and the swf can call javascript function
							rtc.utils.track( "flash.unavailable", { data: JSON.stringify( { message: ".swf file failed to download", flashVersion: flashVersion } ) } );
						}

						var v = document.createElement( 'video' );

						v = !!v.canPlayType && ( function() {
							try {
								v.canPlayType( 'audio/mpeg; codecs="mp3"' );
							}
							catch ( e ) {
								return false;
							}

							return true;
						} )();

						if ( v ) { // HTML5 video is supported
							$( "#jquery_jplayer_videoplayer,#jquery_jplayer_audioplayer" ).jPlayer( "destroy" );

							rtc.utils.track( "player.reset", { data: "Attempting to use HTML5 video instead of Flash" } );

							RTCVisit.videoSolution = "html";
							RTCVisit.videoSupplied = "m4v";

							rtc.main.initPlayer();

							return;
						}
					}

					rtc.utils.showErrorCard( "no-solution" );
					$( "#buffering_icon" ).hide();
				}
			},
			playerInitialized: {
				percent: 15,
				name: "playerInitialized",
				prevStep: "playerInitializing"
			},
			videoStarted: {
				percent: 20,
				name: "videoStarted"
			},
			playing: {
				percent: 20,
				name: "playing"
			},
			bufferingComplete: {
				percent: 10,
				name: "bufferingComplete"
			}
		},
		report: function() {
			rtc.utils.track( "load.sequence", { data: JSON.stringify( this.sequence ) } );
		},
		progress: function( step ) {
			if ( this.current < 100 ) {
				if ( step.prevStep ) {
					clearTimeout( this.timeouts[step.prevStep] );
				}
				var e = $( "#loading-progress" );
				this.sequence.push( { ts: ( new Date() ).getTime(), name: step.name } );
				this.current = Math.min( this.current + step.percent, 100 );
				e.html( ( this.current < 10 ? ( "0" + this.current ) : this.current ) + "%" );
				if ( this.current == 100 ) {
					e.animate( { opacity: 0 }, 500, function() { e.remove(); } );
					this.report();
				}
				if ( step.timeout ) {
					clearTimeout( this.timeouts[step.name] );
					this.timeouts[step.name] = setTimeout( function() {
						rtc.loadSequence.report();
						step.fn && step.fn();
					}, step.timeout );
				}
				else if ( step.fn ) {
					step.fn();
				}
			}
		}
	}
});window.rtc = window.rtc || {};
$.extend(true, rtc, {
	logging: {
		videoAlreadyStarted: false,
		domLoadComplete: function() {
			rtc.loadSequence.progress( rtc.loadSequence.steps.domLoadComplete );
		},
		videoStarted: function() {
			if ( !this.videoAlreadyStarted ) {
				rtc.utils.track('video-started');
				this.videoAlreadyStarted = true;
			}
		}
	},
	app: {
		documentReady: function() {
            if (rtc.player.buffering.v2.shouldActivate(navigator.userAgent)) {
                rtc.player.buffering.v2.activate();
            }

			$( "#language_buttons a" ).each( function() {
				$( this ).click( function( e ) {
					e.preventDefault();

					if ( $( this ).hasClass( "active-language" ) ) {
						var languageBtns = $( "#language_buttons" );
						var height = languageBtns.toggleClass( "language_buttons_open" ).hasClass( "language_buttons_open" ) ?
								( ( languageBtns.children( "a" ).length - 1 ) * 20 ) : 0;

						if ( Modernizr.touch ) {
							languageBtns.css( "height", height );
						}
						else {
							languageBtns.stop().animate( { height: height }, 500 );
						}
					}
					else {
						var href = $( this ).attr( "href" );
						rtc.utils.track( "language.change", { data: $( this ).attr( "id" ).replace( /language\-/, "" ) }, function() {
							window.location = href;
						} );
					}
				} );
			} );
		}
	}
});
$.rtcCardVars = {
	interfaceCardShowing: null
};

window.rtc = window.rtc || {};
$.extend(true, rtc, {card: {
	vars: {
		showLoadingIconTimeout: null,
		xhr: {},
		validationErrors: [],
		shouldResume: false,
		showGiftClaimCard: false
	},
	wrapperWidth: function() {
		return $(window).width();
	},
	containerMinWidth: function() {
		return parseInt( String( $( "#site_container" ).css( "min-width" ) ).replace( /[^0-9\.]+/g, "" ) );
	},
	showLoadingIcon: function( force ) {
		clearTimeout( this.vars.showLoadingIconTimeout );
		this.vars.showLoadingIconTimeout = setTimeout( function() {
			if ( force || ( rtc.player && rtc.player.video && rtc.player.video.status().currentTime >= rtc.player.video.status().duration ) ) { // don't show loading icon it video hasn't reached the end
				$( "#loading_icon" ).stop().show().animate( { opacity: 0.5 }, 250 );
			}
		}, 100 );
	},
	hideLoadingIcon: function() {
		clearTimeout( this.vars.showLoadingIconTimeout );
		var icon = $( "#loading_icon" );
		var opacity = icon.css( "opacity" );
		icon.stop().delay( 250 ).animate( { opacity: 0 }, 500, function() {
			$( this ).hide();
		} );
	},
	posCard: function(card) {
		if (typeof card == "undefined") {
			card = $(".ui-dialog-content").filter(function() {
				return $(this).closest(".ui-dialog").css("display") == "block";
			});

			if (card.length == 0) {
				return;
			}
		}

		var mt = 114, ml = -320, mww = rtc.card.containerMinWidth(), mwh = $('#wrapper_container').height(), c = mww / 2,
			cw = card.closest( ".ui-dialog" ).outerWidth(),
			ch = card.closest( ".ui-dialog" ).outerHeight(),
			vh = $( "#playingVideo,#jquery_jplayer_videoplayer" ).height();

		if (rtc.utils.isHD && rtc.utils.isHD()) {
			mt = 126;
			if (card.hasClass("sideCard")) {
				mt = 125;
				ml = -319;
			}
		}
		else {
			if (card.hasClass("sideCard")) {
				mt = ch - 10 <= vh ? 102 : -5;
				ml = -( Math.round( cw / 2 ) - 8 );
			}
		}

		if (rtc.card.wrapperWidth() < mww) {
			card.closest(".ui-dialog").css({
				left : 0,
				top : 0,
				margin : mt + "px 0 0 " + (ml + c) + "px"
			});
		} else {
			card.closest(".ui-dialog").css({
				left : "50%",
				top : 0,
				margin : mt + "px 0 0 " + ml + "px"
			});
		}
	},
	hideCards: function() {
		consoleLog('hideCards');
		$( ".card form input, .sideCard form input" ).blur(); //Fix issue where autocomplete would appear over video.
		$('.card, .sideCard').dialog('close');
		$.rtcCardVars.interfaceCardShowing = null; // FIXME .rtcCard('dismiss') would rather call .rtcCard('dismiss'); or similar.
	},
	isCardVisible: function(name) {
		if ( name ) {
			return $('.card' + name + ':visible').length > 0;
		}
		return $(".cardDialog:visible").length > 0;
	},
	getCardUrl: function( cardId, state, visit, config ) {
		config = config || RTCConfig;
		var prefix = "card";
		if ( StateEngine[state] && StateEngine[state].getUrl( visit ) == cardId ) {
			if ( StateEngine[state].getCardUrl ) {
				return StateEngine[state].getCardUrl( cardId, visit );
			}
			else if ( StateEngine[state].cardPrefix ) {
				prefix = StateEngine[state].cardPrefix();
			}
		}
		if ( config.loadedLanguage ) {
			prefix = ( config.loadedLanguage == "en" ? "" : ( config.loadedLanguage + "/" ) ) + prefix;
		}
		else if ( visit.language && visit.language != "en" ) {
			prefix = ( visit.language == "en" ? "" : ( visit.language + "/" ) ) + prefix;
		}
		return RTCConfig.baseDir + '/cards/' + prefix + cardId + '.xhtml'
	},
    loadCard: function(card, cachebuster, complete, retry) {
        retry = retry || 0;

        return $.ajax({
            url: card + cachebuster,
            dataType: "html",
            complete: function(response, status, xhr) {
                if (status != "abort") {
                    if (status == "error") {
                        var error = "error.card.notFound",
                            errorData = {
                                card: card,
                                status: response.status
                            };

                        if (retry++ < 5) {
                            error += ".retry";
                            rtc.card.loadCard(card, cachebuster, complete, retry);
                        } else {
                            $('#card').load(RTCConfig.baseDir + '/cards/cardNotFound.xhtml' + cachebuster, function(response, status, xhr) {
                                if (status != "error") {
                                    $('#errorMessage').text(card + ' not found.');
                                }
                            });
                        }

                        rtc.utils.track(error, {
                            data: JSON.stringify(errorData)
                        });
                    }
                    else {
                        complete && complete(response);
                    }
                }
            }
        });
    },
	showCardCommon: function(name, cardType, loadedFn, showFn, canDisplayFn) {
		try {
			if ( rtc.card.vars.xhr[cardType] !== null ) {
				rtc.card.vars.xhr[cardType].abort();
			}
		}
		catch ( e ) {
		}
		rtc.utils.hideFlashOnAndroid();
		$.rtcVideoPlaying = false;
		if (!showFn) {
			rtc.player.controls.playBtnPause();
		}
		else {
			showFn();
		}
		if (!canDisplayFn) {
			canDisplayFn = function() {
				return true;
			}
		}
		var cardId = name.replace('-fsi.swf', '').replace('1-9', 'FSIDetails');
		var cachebuster = '?cachebuster=' + rtc.utils.cacheBuster();
//			cardId = 'Blank';
		var card = rtc.card.getCardUrl( cardId, RTCVisit.currentState, RTCVisit );
		if ( name != "problemFeedback" ) {
			rtc.utils.track('card.show', {card:card});
		}
		$('.card, .sideCard').dialog('close');
		$('.' + cardType).remove();
		$.rtcCardVars.isLoading = true;
		if ( cardId != "androidplay" ) {
			this.showLoadingIcon( cardType == "sideCard" );
		}
		rtc.card.loadCard(card, cachebuster, function(response) {
			if (canDisplayFn()) {
				rtc.card.vars.xhr[cardType] = null;
				rtc.card.hideLoadingIcon();
				$.rtcCardVars.isLoading = false;

				// only actually display the card if the video is not playing.
				// prevents problem where card was still loading when skipped back.
				if (!$.rtcVideoPlaying) {
					$('#' + cardType).html(response.responseText);
				}
				else {
					consoleLog('Ignoring card load response since video playing.');
				}

				if (loadedFn) {
					loadedFn();
				}
			}
		});
	},
	showCard: function(state, alwaysPlay) {
		//consoleLog('showCard-' + state+ ' ' + alwaysPlay);
		if ( rtc.player.video ) {
			rtc.player.video( "clearMedia" );
		}
		// resize jplayer video element to 1x1 instead of 0x0 to fix processor load issue in Firefox 3.6
		// Also fixes issue with compatibilty view on IE11/Win8.1 where the video player did not disappear when shrunk to 0x0 by clearMedia.
		$('#jquery_jplayer_videoplayer object').width(1).height(1);

		rtc.utils.trackVideoPlayerDimensions('player.dimensions');
		rtc.state.set(state);
		rtc.timeline.setPos(state, 0);
		var url = StateEngine[state].getUrl( RTCVisit );
		if (url && !alwaysPlay) {
			if(!StateEngine[state].cardIsShowing()) {
				this.showCardCommon(url, 'card', StateEngine[state].cardLoaded, null, function() {
					return state == RTCVisit.currentState;
				} );
			}
			else {
				StateEngine[state].cardLoaded();
			}
		}
		else {
			if ( typeof StateEngine[state].gotoState != "undefined" ) {
				StateEngine[state].gotoState( state );
			}
			else if (rtc.utils.isAndroid() && !alwaysPlay) {
				this.showCardCommon('androidplay', 'card', function() {});
			}
			else {
				rtc.player.controls.playNext(rtc.session.save, 2000);
			}
		}
	},
	showCardByName: function(name, showFn) {
		consoleLog('showCardByName');
		this.showCardCommon(name, 'card', null, showFn);
	},
	showSideCard: function(name, loadedFn) {
		var videoPlayerStatus = rtc.player.video ? rtc.player.video.status() : {};

		this.vars.shouldResume = ( !videoPlayerStatus.srcSet || !videoPlayerStatus.paused ) && $.rtcCardVars.interfaceCardShowing === null;

		this.showCardCommon(name, 'sideCard', loadedFn);
	},
	toggleSideCard: function(name, loadedFn) {
		name = this.sideCardNameMap(name);
		consoleLog('toggleSideCard:' + name);
		if ('website' === name) {
			window.open( rtc.utils.getWebsiteURL( RTCConfig, RTCVisit ), '_blank');
			return;
		}
		if (this.toggleSideCardHandler(name)) {
			return;
		}
		if (this.isCardVisible(this.sideCardIsVisibleMap(name))) {
			$('.sideCardClose').click(); // FIXME .rtcCard('dismiss'). This will invoke rtc.card showCardOrResume function.
		}
		else {
			rtc.card.showSideCard(name, loadedFn);
			rtc.player.controls.pause();
		}
	},
	toggleSideCardHandler: function(name) {
		return false;
	},
	sideCardNameMap: function(name) {
		return name;
	},
	sideCardIsVisibleMap: function(name) {
		return name;
	},
	addHiddenField: function( form, name, value ) {
		$( form ).append( "<input type='hidden' name='" + name + "' value='" + value + "'/>" );
	},
	bValidatorOptions: {
		errorClass:'ui-state-error',
		template:'<div></div>', // don't show tooltip position: {x:'left', y:'top'}, offset: {x:50},
		onBeforeAllValidations: function() {
			rtc.card.vars.validationErrors = [];
		},
		onValidateFail:function(el, validatorAction, errors) {
			if(el.is('select')){
				// el.siblings('.label').css({color:'red'});
				el.siblings().find('.dropDownValidation').css({'background-color':'#B3522D', 'border':'1px solid #e34902','color':'#aaaaaa'});
			}
			if (el.is('input[type=radio]') || el.is('input[type=checkbox]')) {
				if (errors && errors.length) {
					$('.ui-dialog-buttonpane-warning').text(errors[0]);
				}
			}
			rtc.card.vars.validationErrors.push( el );
		}
	},
	playEndCardAudio: function( url ) {
		if ( rtc.utils.supportsBackgroundAudio() && $( "#audio_player" ).length ) {
			$( "#audio_player" ).jPlayer( {
		        ready: function( event ) {
		            $( this )
			            .jPlayer( "setMedia", {
			                mp3: url || ( rtc.utils.getBaseUrl() + "audio/end_card_mixdown.mp3" )
			            } )
			            .jPlayer( "play" )
			            .jPlayer( "volume", globalVolume )
			            .jPlayer( "mute", globalMute );
		        },
		        //swfPath: "http://www.jplayer.org/2.1.0/js",
				swfPath: "/rtc/js/extlibs",
		        supplied: "mp3"
		    } );
		}
	},
	showGiftClaimCard: function() {
		return false;
	}
}});

(function($) {
	// Monkey Patch jquery ui dialog _createButtons function to put in additional text if necessary.
	var attrFn = $.attrFn || {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true,
		click: true
	};
	$.ui.dialog.prototype._createButtons = function(buttons) {
		var self = this,
			hasButtons = false,
			uiDialogButtonPane = $('<div></div>')
				.addClass(
					'ui-dialog-buttonpane ' +
					'ui-widget-content ' +
					'ui-helper-clearfix'),
			uiButtonPaneText= $( "<div></div>" )
				.addClass( "ui-dialog-buttonpane-text" )
				.html(self.options.buttonPaneText),
			uiButtonPaneWarningText= $( "<div></div>" )
				.addClass( "ui-dialog-buttonpane-warning" ),
			uiButtonSet = $( "<div></div>" )
				.addClass( "ui-dialog-buttonset" )
				.appendTo( uiDialogButtonPane );

		if (self.options.buttonPaneClass) {
			uiDialogButtonPane.addClass( self.options.buttonPaneClass );
		}
		if (self.options.buttonPaneText) {
			uiButtonPaneText.appendTo( uiDialogButtonPane );
		}
		uiButtonPaneWarningText.appendTo( uiDialogButtonPane );

		// if we already have a button pane, remove it
		self.uiDialog.find('.ui-dialog-buttonpane').remove();

		if (typeof buttons === 'object' && buttons !== null) {
			$.each(buttons, function() {
				return !(hasButtons = true);
			});
		}
		if (hasButtons) {
			$.each(buttons, function(name, props) {
				props = $.isFunction( props ) ?
					{ click: props, text: name } :
					props;
				var button = $('<button type="button"></button>')
					.click(function() {
						props.click.apply(self.element[0], arguments);
					})
					.appendTo(uiButtonSet);
				// can't use .attr( props, true ) with jQuery 1.3.2.
				$.each( props, function( key, value ) {
					if ( key === "click" ) {
						return;
					}
					if ( key in attrFn ) {
						button[ key ]( value );
					} else {
						button.attr( key, value );
					}
				});
				if ($.fn.button) {
					button.button();
				}
			});
			uiDialogButtonPane.appendTo(self.uiDialog);
		}
	};

	$.fn.rtcPopulateDropdown = function(options) {
		$.each( this, function( i, dropdown ) {
			$.each( options, function( value, text ) {
				$( dropdown ).append( "<option value='" + value + "'>" + text + "</option>" );
			} );
		} );
	};

	$.fn.rtcCard = function(options) {
		var defaults = {
			dialogClass : 'cardDialog',
			openFn: function(cardElem, event, ui) {
				$.rtcCardVars.interfaceCardShowing = cardElem.attr('id');

				$( "#cardEnd li" )
					.unbind( "click.rtcCardButton" )
					.bind( "click.rtcCardButton", function() {
						rtc.utils.track( "card.button.click", { data: JSON.stringify(
							{ card: $( this ).closest( ".card" ).attr( "id" ), button: $( this ).attr( "id" ) } ) } );
					}
				);
			},
			successFn: function() {
				$.rtcCardVars.interfaceCardShowing = null;
				rtc.player.controls.playNext(options.saveFn);
			}
		};
		options = $.extend(defaults, options);
		return $(this).rtcCardCommon(options);
	};

	$.fn.rtcSideCard = function(options) {
		var showCardOrResume = function() {
			if ($.rtcCardVars.interfaceCardShowing) {
				$('#' + $.rtcCardVars.interfaceCardShowing).dialog('open');
			}
			else {
				rtc.utils.showVideoPlayerForSideCardByUserAgent();

				if ( rtc.card.vars.shouldResume ) {
					rtc.player.controls.resume();
				}
			}

			$( window.rtc ).trigger( "rtc.sideCard.showCardOrResume", {} );
		};

		var defaults = {
			dialogClass : 'cardDialog sideCardDialog',
			width : 647,
			height: 346,
			xPos: 180,
			openFn: function() {
				if ( $.rtcCardVars.interfaceCardShowing === null ) {
					rtc.utils.hideVideoPlayerForSideCardByUserAgent();
				}

//				var inner = $('<div/>').addClass('cardWrapper ui-widget-content');
				$('.sideCardDialog:visible').each( function() {
					if ( $( '.sideCardClose', this ).length == 0 ) {
						var inner = $('<div/>').append($('<div/>').addClass('cardWrapper ui-widget-content'));
						$(this).wrapInner(inner).prepend($('<div class="sideCardClose"/>'));
						if ($(this).length) {
							$('.sideCardClose', this).click(function() {
								$(this).parent().find('.sideCard').dialog('close');
								showCardOrResume();
								rtc.utils.track( "card.close", { card: $( this ).parent().find( ".ui-dialog-content:first" ).attr( "id" ) } );
							});
						}
					}
				});
			},
			close: function() {
				var wrapper = $( this ).closest( ".cardWrapper" );
				wrapper.closest( ".sideCardDialog" ).find( ".sideCardClose" ).remove();
				wrapper.children().appendTo( wrapper.closest( ".sideCardDialog" ) );
				wrapper.parent().remove();
			},
			dismissFn: showCardOrResume,
			successFn: showCardOrResume
		};
		options = $.extend(defaults, options);
		return $(this).rtcCardCommon(options);
	};

	$.fn.rtcCardCommon = function(options) {
		function showPlaceholders(el) {
			if(!Modernizr.input.placeholder){

		        $(el).find("input[placeholder], textarea[placeholder]").each(function () {
					var $this = $(this);
					if($this.val() == ""){
		                $this
		                .val($this.attr("placeholder"))
						.css({'color': '#cccccc'})
		                .focus(function(){
		                    if($this.val() == $this.attr("placeholder")) {
		                        $this.val("");
								$this.css({'color': '#000000'});
		                    }
		                })
		                .blur(function(){
		                    if($this.val() == "") {
		                        $this.val($this.attr("placeholder"));
								$this.css({'color': '#cccccc'});
		                    }
		                });
		            }
		        });

			}
		}

		function clearPlaceholders(el) {
			if(!Modernizr.input.placeholder){
		        $(el).find("input[placeholder], textarea[placeholder]").each(function () {
					var $this = $(this);
					if($this.val() == $this.attr("placeholder")){
		                $this.val('');
					}
		        });

			}
		}

		function trimFieldValues(el) {
			$( "input[type=text], input[type=email], textarea", el ).each( function() {
				var v = $( this ).val();

				if ( typeof v == "string" ) {
					$( this ).val( $.trim( v ) );
				}
			} );
		}

		var borderWidth = 5;
		var $this = $(this);
		var defaults = {
			// card options
			autoPopulateTextFields : [],
			autoPopulateCheckboxes : {},
			autoPopulateRadio : [],
			autoPopulateDropdowns : [],
			enhanceRadio : true,
			enhanceCheckbox : true,
			// dialog options
			autoOpen : true,
			draggable : false,
			resizable : false,
			width : 636 - 2*borderWidth,
			height : 356 - 2*borderWidth,
			closeOnEscape: false,
			show: 'fade',
			hide: 'fade',
			position : [ 0, 0 ],
			openFn: function() {},
			close : function() {
				$(window).unbind('.' + $this.attr('id') + '.rtcCard');
			},
			buttons: {},
			cardButtons: {},
			readyFn: function() {},
			successFn: function() {},
			dismissFn: function() {},
			buttonPaneText: '',
			step: null,
			hiddenFields: [],
			zIndex: 4000 + $( ".cardDialog" ).length
		};

		if ( $( "#site-body" ).length ) {
			defaults.appendTo = "#site-body";
		}

		options = $.extend(defaults, options);
		$.each(options.cardButtons, function(name, fn) {
			if ( name == "Skip" ) {
				options.buttons[name] = function() {
					fn();
					$(this).dialog('close');
					rtc.utils.track("card.skip",{card:$(this).attr("id")});
					options.successFn();
				}
			}
			else {
				options.buttons[name] = function() {
					$(this).find('select').each(function(){
						$(this).show().css({
							position:"absolute",
							marginTop:"8px",
							height:"0px",
							border: "none"
						});
					}).change(function(){
						//$(this).siblings('.label').css({color:'white'});
						$('.dropDownValidation').css({'background-color':'#ffffff','border':'none','color':'black'});
					});

					clearPlaceholders($(this).find('form'));
					trimFieldValues($(this).find('form'));

					var validator = $(this).find('form').bValidator(rtc.card.bValidatorOptions);
					if (options.validate) {
						validator = {
								validate: function(b) {
									return options.validate();
								}
						};
					}
	//				consoleLog('validating');
					$('#buttonPaneWarningText').text('');
					if(validator.validate(false)) {
						if ( fn() !== false ) {
							$(this).dialog('close');
							rtc.utils.track("card.submit",{card:$(this).attr("id")});
							options.successFn();
						}
					}
					else {
						showPlaceholders($(this));
						try {
							var errors = [], arr = rtc.card.vars.validationErrors;

							for ( var i = 0 ; i < arr.length ; i++ ) {
								var name = arr[i].attr( "name" );

								if ( name && $.inArray( name, errors ) < 0 ) {
									errors.push( name );
								}
							}

							rtc.utils.track( "card.submit.validationfailed", {
								form: JSON.stringify( { id: this.id, fields: $( "form", this ).serialize(), errors: errors } ) } );
						}
						catch ( e ) {}
					}
				};
			}
		});

		if ( options.step !== null ) {
			$( this ).append( "<div class='card-step'>Step " + options.step.join( " of " ) + "</div>" )
		}

		options.open = function(event, ui) {
			var cardElem = $(this);
			rtc.card.posCard( cardElem );
			$(window).bind('resize.' + cardElem.attr('id') + '.rtcCard', function() {
				rtc.card.posCard( cardElem );
			});
			$('.ui-dialog-buttonpane-warning').text('');
			options.openFn($(this), event, ui);
		};

		$.each( options.hiddenFields, function( name, value ) {
			if ( typeof value == "object" ) {
				$.each( value, function( name, value ) {
					$this.find( "form" ).prepend( "<input type='hidden' name='" + name + "' value='" + value + "'/>" );
				} );
			}
			else if ( typeof RTCVisit[value] != "undefined" ) {
				$this.find( "form" ).prepend( "<input type='hidden' name='" + value + "' value='" + RTCVisit[value] + "'/>" );
			}
		} );

		this.each(function() {
			var autoPopulate;
			$(this).dialog(options).css('background-color', 'transparent');
			if ( typeof options.autoPopulateTextFields == "function" ) {
				autoPopulate = options.autoPopulateTextFields();
			}
			else {
				autoPopulate = { visit: RTCVisit, fields: options.autoPopulateTextFields };
			}
			$.each(autoPopulate.fields, function(index, field) {
				$('input[name=' + field + '],textarea[name=' + field + ']').val(autoPopulate.visit[field]);
			});
			if ( typeof options.autoPopulateRadio == "function" ) {
				autoPopulate = options.autoPopulateRadio();
			}
			else {
				autoPopulate = { visit: RTCVisit, fields: options.autoPopulateRadio };
			}
			$.each(autoPopulate.fields, function(index, field) {
//				consoleLog('field:' + field);
//				consoleLog('value:' + RTCVisit[field]);
				$('input[name=' + field + ']').filter('[value=' + autoPopulate.visit[field] + ']').attr('checked', true);
			});
			if ( typeof options.autoPopulateCheckboxes == "function" ) {
				autoPopulate = options.autoPopulateCheckboxes();
			}
			else {
				autoPopulate = { visit: RTCVisit, fields: options.autoPopulateCheckboxes };
			}
			$.each(autoPopulate.fields, function(field, values) {
				$.each(values, function(index, value) {
					if (-1 != $.inArray(value, autoPopulate.visit[field])) {
						$('input[name=' + field + '][value=' + value +']').prop('checked', true);
					}
				});
			});
			$(this).find('select').selectmenu({
				style:'popup',
				width:RTCConfig.selectMenuWidth,
				menuWidth:RTCConfig.selectMenuWidth
			}).css({marginTop:'2px', marginBottom:'2px', padding:'1px'});
			// Fix to prevent autocomplete list from remaining on screen (and over video once form is submitted) if a select menu is clicked on.
			$( ".ui-selectmenu", this ).bind( "mousedown.selectmenu", function() {
				$( "form input[type=text]" )
					.attr( "autocomplete", "off" )
					.unbind( "focus.autocompletefix" )
					.bind( "focus.autocompletefix", function() {
					$( "form input[type=text]" ).attr( "autocomplete", "on" );
					} );
			} );

			autoPopulate = { visit: RTCVisit, fields: options.autoPopulateDropdowns };
			$.each(autoPopulate.fields, function(field, fieldName) {
				var match = fieldName.match( /(cntrycode):([a-z]+)/i );
				var value = null;

				if (match) {
					fieldName = match[1];
					value = match[2];
				}

				if (autoPopulate.visit[fieldName]) {
					value = autoPopulate.visit[fieldName];
				}
				else if (fieldName == 'cntrycode') {
					value = rtc.utils.geoIp.getCountryCode( value || "US" );
				}

				if (value !== null) {
					$('select[name=' + fieldName + ']').selectmenu('value', value);
				}
			});

//			$(this).find('.radio').buttonset(); // Must be after autoPopulateRadio so that checked styling looks ok!
			if (options.enhanceRadio) {
				$(this).find('input[type=radio]').checkBox();
			}
			if (options.enhanceCheckbox) {
				$(this).find('input[type=checkbox]').checkBox();
			}
			showPlaceholders($(this));
			rtc.utils.addVisitTrackParameter($(this));

		});

		options.readyFn();

		return this;
	};

	$.fn.rtcCardInitDropdowns = function( options ) {
		var form = $( this );
		$.each( options, function( index, value ) {
			if ( RTCVisit[value] ) {
				form.find( "select[name=" + value + "]" ).selectmenu( "value", RTCVisit[value] );
			}
		} );
	}
})(jQuery);
var Trace = function() {
	var err = new Error();
	if(err.stack) {
		var caller_line = err.stack.split("\n").slice(4);
		this.stack = caller_line;
	} else {
		this.stack = {0:"Stack trace not supported in this browser."};
	}
}
var consoleLog = function(msg) {
	RTCConfig.jsLoggingEnabled && window.console && console.log(new Trace(),msg);
	RTCConfig.jsDisplayConsoleLog && $( "#console-log" ).append( "<div>" + msg + "</div>" ).scrollTop( $( "#console-log" ).scrollTop() + 100 );
};
window.rtc = window.rtc || {};
window.rtc.utils = window.rtc.utils || {};
$.extend(true, rtc.utils, {

	vars: {
		backgroundAudioEnabled: true,
		pageVisibility: "visible",
		pageFocus: "focus"
	},

	popitupSettings: 'height=500,width=775,scrollbars=yes',
	promoImagesSelector: '#promo',

	popitup: function(url) {
		var newwindow=window.open(url,'name',rtc.utils.popitupSettings);
		if (window.focus) {
			newwindow.focus();
		}
		return false;
	},

	isAndroid: function() {
		return navigator.userAgent.match( /Android/i );
	},

	overlaysDisabled: function() {
		return rtc.utils.overlaysDisabledByUserAgent(navigator.userAgent);
	},

	overlaysDisabledByUserAgent: function(userAgent) {
		var match = userAgent.match(/Android\s*(\d+\.?\d*)/i);
		if (match) {
			return parseFloat(match[1]) < 3.1;
		}
		match = userAgent.match(/MSIE \d+\.?\d*;\s*Windows Phone/i);
		if (match) {
			return true;
		}
		return userAgent.match(/iphone/i);
	},

	allowOverlays: function() {
		return !rtc.utils.overlaysDisabled();
	},

	shouldHideCCButton: function( userAgent ) {
		return rtc.utils.overlaysDisabledByUserAgent( userAgent );
	},

	hideCCButton: function() {
		if( rtc.utils.shouldHideCCButton( navigator.userAgent ) ) {
			$( ".jp-cc" ).hide();
			$( ".jp-progress" ).css("width", "411px");
		}
	},

	isFluidPlayer: function() {
		if(rtc.utils.config.fluidPlayer && rtc.utils.fluidVideoSupported()) {
			return rtc.utils.config.fluidPlayer;
		}

		return false;
	},

	disableFluidPlayer: function() {
		$( "link.fluid-stylesheet", $( "head" ) ).remove();
		$( ".jp-gui .table" ).removeClass( "table" );
	},

	fluidVideoSupported: function() {
		var supported = true;
		if(!Modernizr.boxsizing) { supported = false; }
		if(!Modernizr.bgsizecover) { supported = false; }
		if(!Modernizr.cssremunit) { supported = false; }
		if(!Modernizr.csscalc) { supported = false; }
		return supported;
	},

	shouldHideFullscreenButton: function() {
		return !(Modernizr.fullscreen && Modernizr.cssvhunit && Modernizr.cssvwunit && Modernizr.csscalcvhunit && rtc.utils.fluidVideoSupported());
	},

	hideFullscreenButton: function() {
		if( rtc.utils.shouldHideFullscreenButton() ) {
			$( ".jp-fullscreen" ).hide();
		}
	},

	inlineVideoSupported: function() {
		return rtc.utils.inlineVideoSupportedByUserAgent( navigator.userAgent );
	},

	inlineVideoSupportedByUserAgent: function( userAgent, flashVersion ) {
		if ( !rtc.utils.overlaysDisabledByUserAgent( userAgent ) ) {
			return true;
		}

		if ( typeof flashVersion == "undefined" ) {
			flashVersion = rtc.utils.getFlashVersion();
		}

		if ( flashVersion !== false && userAgent.match( /android [23]/i ) ) { // Android 2.2+ + Flash = inline video
			return true;
		}

		return false;
	},

	compatibilityView: function() {
		return rtc.utils.compatibilityViewByUserAgent(navigator.userAgent);
	},

	compatibilityViewByUserAgent: function(userAgent) {
		if ( userAgent && userAgent.match(/MSIE 7.0/i) && userAgent.match(/Trident/i) ) {

			var ieVersion = '';
			ieVersion =  userAgent.match("Trident/7.0") ? 'IE11' : ieVersion;
			ieVersion =  userAgent.match("Trident/6.0") ? 'IE10' : ieVersion;
			ieVersion =  userAgent.match("Trident/5.0") ? 'IE9' : ieVersion;
			ieVersion =  userAgent.match("Trident/4.0") ? 'IE8' : ieVersion;

			var osVersion = '';
			osVersion =  userAgent.match("Windows NT 6.3") ? 'Win8.1' : osVersion;
			osVersion =  userAgent.match("Windows NT 6.2") ? 'Win8' : osVersion;
			osVersion =  userAgent.match("Windows NT 6.1") ? 'Win7' : osVersion;
			osVersion =  userAgent.match("Windows NT 6.0") ? 'WinVista' : osVersion;
			osVersion =  userAgent.match("Windows NT 5") ? 'WinXP' : osVersion;

			return ieVersion + ' ' + osVersion + ' compatibility view';
		}
		return false;
	},

	sameProtocol : function(url) {
		return url ? url.replace(/^http:/, document.location.protocol).replace(/^https:/, document.location.protocol) : url;
	},

	hideFlashOnAndroid: function() {
		if (rtc.utils.isAndroid()) {
			$('#rtcFlashObject,#jquery_jplayer_videoplayer object').width(1);
			$('#rtcFlashObject,#jquery_jplayer_videoplayer object').height(1);
		}
	},

	showFlashOnAndroid: function() {
		if (rtc.utils.isAndroid()) {
			$('#rtcFlashObject').width(1000);
			$('#rtcFlashObject').height(530);
			$('#jquery_jplayer_videoplayer object').width(640);
			$('#jquery_jplayer_videoplayer object').height(360);
		}
	},

	truncateExtendedZip: function(zip) {
		if (zip) {
			var zipFormat = /(\d{5})\-\d+/;
			zip = zip.replace(zipFormat, '$1');
		}
		return zip;
	},

	lookupFSIData: function(zip) {
		zip = rtc.utils.truncateExtendedZip(zip);
		$.get(RTCConfig.baseDir + '/api/fsiData.json?zip=' + zip, function(data) {
			RTCOverlayData.fsiData = data;
		});
	},

	loadImage: function(imageEl, imageName, errorFn, successFn) { // type = leadsource or incentive
		var image = new Image();

		if ( typeof errorFn != "undefined" && errorFn !== null ) {
			image.onerror = errorFn;
		};
		image.onload = function() {
			if ( this.width <= 1 || this.height <= 1 ) {
				if ( typeof errorFn != "undefined" && errorFn !== null ) {
					errorFn( this );
				};
			}
			else {
				imageEl.css({
					background: 'url(' + this.src + ') no-repeat'
				});
				if ( typeof successFn != "undefined" ) {
					successFn( imageEl );
				}
			}
		};
		image.src = RTCConfig.baseDir + '/css/images/promo_images/' + imageName;
	},

	loadPromoImage: function(type, errorFn, successFn) { // type = leadsource or incentive
		var image = $('#promo #' + type + 'Image');
		if (RTCVisit[type]) {
	//		/consoleLog('loading: ' + type);
			rtc.utils.loadImage(image, type + '_' + RTCVisit[type] + '.png', errorFn, successFn);
		}
	},

	loadPromoImages: function() {
		$(rtc.utils.promoImagesSelector).show();
		rtc.utils.loadPromoImage('leadsource');
		rtc.utils.loadPromoImage('incentive');
		rtc.utils.resizePromoImages();
	},

	resizePromoImages: function() { // overridden by project-specific.
	},

	listCustomFonts: function() {
	    var result = [];
	    var sheet = document.styleSheets;
	    var rule = null;

	    for ( var i = 0 ; i < sheet.length ; i++ ) {
            var css_times_failed = 0;
            var checkParsed = function(sheet) {
                try {
                    rule = sheet.rules || sheet.cssRules || [];
                    if (css_times_failed > 0) {
                        consoleLog('Sheet read times failed: ' + css_times_failed + ' (' + sheet.href + ')');
                    }
                } catch (e) {
                    if (css_times_failed++ <= 3) {
                        setTimeout(function() {
                            checkParsed(sheet);
                        }, 5);
                    } else {
                        consoleLog('Sheet failed to be listed in custom fonts: ' + sheet.href);
                        // Track if tries goes over the limit
                        rtc.utils.track( "error.cssRuleParsing" );
                    }
                }
            };

            checkParsed(sheet[i]);

	        for ( var j = 0 ; j < rule.length ; j++ ) {
	            if( typeof rule[j].constructor !== "undefined" && typeof rule[j].constructor.name !== "undefined" ) {
	                if ( rule[j].constructor.name === "CSSFontFaceRule" ) {
	                    result.push( rule[j].style.fontFamily );
	                }
	            }
	        }
	    }

	    return result;
	},

	preloadFonts: function( fonts, callback ) {
		if ( !( fonts instanceof Array ) ) {
			fonts = [ fonts ];
		}

		var loadedFonts = 0;

		if ( callback ) {
			$( window ).bind( "load", function() {
				callback();
			} );
		}

		$.each( fonts, function( i, font ) {
			var e = $( "<div style='position:absolute;left:-10000px;top:-10000px;font:normal normal normal 300px sans-serif;letter-spacing:0'>giItT1WQy@!-/#</div>" ).appendTo( "body" );
			var width = e.width();
			var interval;
			var check = function() {
				if ( e && e.width() != width ) {
					clearInterval( interval );
					loadedFonts++;
					e.remove();
					e = null;
				}

				if ( loadedFonts >= fonts.length && callback ) {
					callback();
				}
			}

			interval = setInterval( check, 50 );

			e.css( "font-family", font );
		} );
	},

	preloadImages: function( imagesToPreload ) {
		var imageToPreload = imagesToPreload.pop();

		if ( imageToPreload ) {
			rtc.utils.preloadImage( imageToPreload, function() {
				rtc.utils.preloadImages( imagesToPreload );
			} );
		}
		else if ( imagesToPreload.length > 0 ) {
			rtc.utils.preloadImages( imagesToPreload );
		}
	},

	preloadImage: function( url, callback ) {
		try {
			var img = new Image();

			img.onload = callback;
			img.onerror = function() {
				consoleLog( "ERROR: Failed to preload " + url );
			};
			img.src = url;
		}
		catch ( e ) {
		}
	},

	validations: {
		firstName: function( s ) {
			return s.match( /[^\s]+/ ) && !s.match( /[<>]+/ );
		},
		lastName: function( s ) {
			return s.match( /[^\s]+/ ) && !s.match( /[<>]+/ );
		},
		fullName: function( s ) {
			return s.match( /[^\s#!"£\$%\^&\*\(\)_+\-=<>\?\/'@~\[\]\\\|;:\{\}]+\s+[^\s#!"£\$%\^&\*\(\)_+\-=\.,<>\?\/'@~\[\]\\\|;:\{\}]+/ );
		},
		email: function( s ) {
			return s.replace( /(^ +| +$)/g, "" ).match( /^[^ ]+\@[^ ]+\.[a-z0-9]{2,}$/i );
		},
		phoneNumber: function(s) {
			s = s ? s : '';
			s = s.replace(/-/g, '');
			s = s.replace(/\./g, '');
			s = s.replace(/\(/g, '');
			s = s.replace(/\)/g, '');
			s = s.replace(/ /g, '');
			s = s.replace(/\./g, '');
			s = s.replace(/\//g, '');
			var phone2 = /^(\+)?(\d)+(((ext)|x)?\d+)?$/i;
			if (s.length > 6 && s.match(phone2)) {
		   		return true;
	 		} else {
	 			return false;
		 	}
		},

		selectMenu: function(s) {
			if(s === '' || s ==='please_select'){
				return false;
			}else{
				return true;
			}
		}
	},

	cardReadName: function(visit, nameVal) {
		var oldname = visit.fullname;
		if ( $.isArray( nameVal ) ) {
			visit.firstname = nameVal[0];
			visit.lastname = nameVal[1];
			visit.fullname = nameVal[0] + " " + nameVal[1];
		}
		else {
			visit.fullname = nameVal ? $.trim(nameVal) : nameVal;
		}
		visit.nameChanged = ($.trim(oldname) !== '' && $.trim(oldname) !== $.trim(visit.fullname)) ? 'true' : 'false';
		return visit;
	},
	cardReadEmail: function(visit, emailVal) {
		var oldemail = visit.email;
		visit.email = emailVal ? $.trim(emailVal) : emailVal;
		visit.emailChanged = ($.trim(oldemail) !== '' && $.trim(oldemail) !== $.trim(emailVal)) ? 'true' : 'false';
		return visit;
	},

	record: function(trackingUrl) {
		var img = $("<img />").attr('src', trackingUrl);
	    img.load(function() {
	       if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
	           consoleLog('broken image!');
	       } else {
	           $("body").append(img);
	       }
	    });
	},

	track: function(e, extraParams, successFn) {
		consoleLog('track:' + e);
		var params = {c:RTCConfig.campaignName, e: e, u: RTCVisit.name, rn:new Date().getTime(),s:RTCVisit.currentState};
		var extra = extraParams;
		if ( 'string' === typeof extraParams ) {
			extra = { data: extraParams };
		}
		$.extend(params, extra);
		$.get(RTCConfig.baseDir + '/t.php', params, successFn);
	},

	getJplayerErrorCard: function( errorType, visit, videoPlaybackFailed ) {
		var card = "technical-error";

		if ( errorType == "e_no_solution" ) {
			card = videoPlaybackFailed ? "playback-failed" : "no-solution";
		}
		else if ( visit.corporateFirewallDetected ) {
			card = "corporate-firewall";
		}

		return card;
	},

	showErrorCard: function( card ) {
		var $card = $( ".jp-" + card );

		if ( typeof RTCVisit.previousPlaybackProblems != "undefined" && RTCVisit.previousPlaybackProblems && $.inArray( card, [ "playback-failed", "no-solution", "technical-error" ] ) > -1 ) {
			if ( !$card.is( ":visible" ) ) {
				rtc.utils.track( "errorcard.problemFeedback" );
			}

			rtc.card.showSideCard( "problemFeedback" );
		}
		else {
			if ( $card.length == 0 ) {
				$.ajax( { url: RTCConfig.baseDir + "/api/templates/" + card + "/" } )
					.done( function( html ) {
						$( ".jp-video .jp-type-single" ).append(
							$( '<div class="jp-' + card + ' failover_message" style="display:none"></div>' ).html( html ) );
						rtc.utils.showErrorCard( card );
					} )
					.fail( function() {
						$( ".jp-video .jp-type-single" )
							.append( $( '<div class="jp-' + card + ' failover_message" style="display:none"></div>' ).html(
								$( $( "noscript" ).html().replace( /&gt;/g, ">" ).replace( /&lt;/g, "<" ) ).find( ".script_disabled" ).html() ) );
						rtc.utils.showErrorCard( card );
					} );

				return;
			}

			if ( !$card.is( ":visible" ) ) {
				rtc.utils.track( "errorcard." + card );
			}
			$card.show();
			var vPadding = parseInt( $card.css( "padding-top" ).replace( /[a-z]+/i, "" ) ) + parseInt( $card.css( "padding-bottom" ).replace( /[a-z]+/i, "" ) );
			var targetHeight = $('#wrapper').height() - vPadding;
			var fontSize = parseInt( $card.css( "font-size" ).replace( /[a-z]+/i, "" ) );
			var $h2 = $( "h2,.error-card-heading", $card );
			var fontSizeH2 = parseInt( $h2.css( "font-size" ).replace( /[a-z]+/i, "" ) );
			var maxHeightH2 = Math.max(
				parseInt( $h2.css( "line-height" ).replace( /[a-z]+/, "" ) ),
				parseInt( $h2.css( "font-size" ).replace( /[a-z]+/, "" ) ) )

			$card.css( "height", "auto" );

			while ( $h2.height() > maxHeightH2 && fontSizeH2 > 21 ) {
				$h2.css( "font-size", --fontSizeH2 );
			}

			while ( $card.height() > targetHeight && fontSize > 10 ) {
				$h2.css( "font-size", --fontSizeH2 );
				$card.css( "font-size", --fontSize );
			}

			$card.css( "height", targetHeight );
		}
	},

	logException: function( fnc, e ) {
		var o = {}, f = [ "message", "stack", "stacktrace" ];
		$.each( f, function( i, v ) {
			if ( e[v] ) {
				o[v] = e[v];
			}
		} );
		consoleLog( o );
		this.track( "error.exception", { data: JSON.stringify( { fnc: fnc, exception: o } ) } );
	},

	isRepeat: ( function() {
		var f = function(visit) {
			if ( rtc.utils.isRepeat.result === null ) {
				visit = visit || {};
				if (visit.disableRepeat != undefined) {
					rtc.utils.isRepeat.result = false;
				}
				else {
					rtc.utils.isRepeat.result = visit.maxState ? true : false;
				}
			}

			return rtc.utils.isRepeat.result;
		};

		f.result = null;

		return f;
	} )(),

	supportsBackgroundAudio: function(userAgent) {
		userAgent = userAgent || navigator.userAgent;
		return !userAgent.match(/(iphone|ipad|ipod|android)/i);
	},

	backgroundAudioEnabled: function(enabled) {
		if ( typeof enabled != "undefined" ) {
			rtc.utils.vars.backgroundAudioEnabled = enabled;
		}

		return rtc.utils.vars.backgroundAudioEnabled;
	},

	isIPhone: function(userAgent) {
		userAgent = userAgent || navigator.userAgent;
		return userAgent.match(/iphone/i);
	},

	supports_html5_storage: function() {
		try {
			if ( 'localStorage' in window && window['localStorage'] !== null ) {
				localStorage.setItem("test", "test");
			    localStorage.removeItem("test");
			    return true;
			}
		} catch (e) {}
		return false;
	},

	storeLocal: function(key, value) {
		  if (rtc.utils.supports_html5_storage()) {
			  localStorage.setItem(key, value);
		  }
	},

	getLocal: function(key) {
		  if (rtc.utils.supports_html5_storage()) {
			  return localStorage.getItem(key);
		  }
		  return null;
	},

	clearLocal: function() {
		  if (rtc.utils.supports_html5_storage()) {
			  localStorage.clear();
		  }
	},

	basename: function(path) {
	    return path.replace(/\\/g,'/').replace( /.*\//, '' ).replace( /\?.*/, '' );
	},

	getPlaybackQuality: function() {
		// From response to content6.
		return rtc.utils.vars.videoQuality;
	},

	isHD: function() {
		return rtc.utils.vars && rtc.utils.vars.videoLayout && 'hq' === rtc.utils.vars.videoLayout;
	},

	geoIp: {
		getCity: function( defaultValue ) {
			return typeof geoip_city == "undefined" ? ( defaultValue || "" ) : geoip_city();
		},
		getRegionName: function( defaultValue ) {
			return typeof geoip_region_name == "undefined" ? ( defaultValue || "" ) : geoip_region_name();
		},
		getCountryCode: function( defaultValue ) {
			return typeof geoip_country_code == "undefined" ? ( defaultValue || "" ) : geoip_country_code();
		}
	},

	parseNetStreamInfo: function( netStreamInfo ) {

		netStreamInfo = netStreamInfo || '';

		var fields = netStreamInfo.match(/\S+=\S+/gi);
		if ( !fields ) {
			return null;
		}

		var ret = { };
		$.each( fields , function(i, e) {
			var c = e.split('=');
			ret[c[0]] = c[1];
		});
		return ret;
	},

	analytics: {
		trackEvent: function( category, action, label, value )
		{
			if ( typeof _gaq != "undefined" && RTCConfig.gaTrackEvents ) {
				_gaq.push( [ "_trackEvent", category, action, label, value ] );
			}
		}
	},

	shareUrl: function(baseurl, form, visit, str) {
		var formFieldsToUrlParams = {
			theiremail: 'email',
			theircompany: 'company',
			email: 'referral_email',
			fullname: 'referral'
		};
		str = str || [];
		visit = visit || {};
		if (form.find('input[name=theirfirstname]').length) {
			formFieldsToUrlParams['theirfirstname'] = 'firstname';
			formFieldsToUrlParams['theirlastname'] = 'lastname';
			str.push(encodeURIComponent('fullname') + "=" +
				encodeURIComponent(
					form.find('input[name=theirfirstname],input[name=theirfirstname\\[\\]]').val() + ' ' +
					form.find('input[name=theirlastname],input[name=theirlastname\\[\\]]').val()));
		}
		else {
			formFieldsToUrlParams['theirname'] = 'fullname';
		}
		for(var p in formFieldsToUrlParams) {
			str.push(encodeURIComponent(formFieldsToUrlParams[p]) + "=" + encodeURIComponent(form.find('input[name=' + p +'],input[name=' + p +'\\[\\]]').val() || visit[p] || ""));
		}
		var shareCampaign = 'SH.Share';
		if (visit.campaign && '' !== visit.campaign) {
			shareCampaign = 'SH.' + visit.campaign;
		}
		str.push("c=" + encodeURIComponent(shareCampaign));
		var referrerSession = '';
		if (visit.name) {
			referrerSession = visit.name;
		}
		str.push("referrer_session_name=" + encodeURIComponent(referrerSession));
		if (visit.language) {
			str.push("language=" + visit.language);
		}

		return baseurl + '?' + str.join("&");
	},
	showCorporateFirewallDetected: function() {
		if ( RTCVisit.corporateFirewallDetected ) {
			/*$('#corporate-firewall-detected')
				.delay(1000)
				.fadeIn(500)
				.delay(10000)
				.fadeOut(500, function() {
					// Animation complete.
					$(this).hide();
			  	});*/

			rtc.utils.track( "warning.corporate-firewall" );
		}
	},
	cacheBuster: function() {
		return RTCConfig.buildNumber;
	},
	language: function( visit ) {
		visit = visit || RTCVisit;
		return visit.language ? visit.language : 'en';
	},
	css: {
		getCacheBuster: function() {
			return RTCConfig.buildNumber ? ( "?cb=" + RTCConfig.buildNumber ) : "";
		},
		add: function( css, onload, onloadCheck ) {
			if ( typeof onloadCheck != "undefined" && typeof onload != "undefined" ) {
				var interval = setInterval( function() {
					if ( onloadCheck() ) {
						onload();
						clearInterval( interval );
					}
				}, 500 );
			}

			for ( var i = 0 ; i < css.length ; i++ ) {
				var url = css[i].match( /^http/i ) ? css[i] : ( RTCConfig.baseDir + '/css/' + css[i] + rtc.utils.css.getCacheBuster() );
				consoleLog( "Adding " + url );
				$( '<link/>', {
					  rel:  'stylesheet',
					  type: 'text/css',
					  href: url
				} ).load( function() {
					onload && onload();
					clearInterval( interval );
				} ).appendTo( 'head' );
			}
		},
		remove: function( css ) {
			for ( var i = 0 ; i < css.length ; i++ ) {
				consoleLog( "Removing css/" + css[i] );
				$('link[href="' + RTCConfig.baseDir + '/css/' + css[i] + rtc.utils.css.getCacheBuster() + '"]').remove();
			}
		}
	},
	isCREnabled: function( cr ) {
		var k = "cr" + cr + "Enabled";
		return typeof RTCConfig[k] != "undefined" && RTCConfig[k];
	},
	checkCookiesEnabled: function() {
		if ( !Modernizr.cookies ) {
			rtc.utils.track( "cookies.disabled" );
		}
	},
	mapFieldValues: function( selector ) {
		return $( selector ).map( function() { return this.value; } ).get();
	},
	arrayIntersect: function( arr1, arr2 ) {
		var retArr = [], argl = arguments.length, arglm1 = argl - 1, k1 = '', arr = {}, i = 0, k = '';

		arr1keys: for ( k1 in arr1 ) {
			arrs: for ( i = 1 ; i < argl ; i++ ) {
				arr = arguments[i];
				for ( k in arr ) {
					if ( arr[k] === arr1[k1] ) {
						if ( i === arglm1 ) { // we've reached the last array so store in the return arrayssssss
							retArr.push( arr1[k1] );
						}
						continue arrs; // found in this array lets find check the next array
					}
				}
				continue arr1keys; // not found in at least one array so try the next key
			}
		}

		return retArr;
	},
	linkSessionName: function(link) {
		link = link || '';
		var sessionName = RTCVisit && RTCVisit.name ? RTCVisit.name : null;
		var currentState = RTCVisit && RTCVisit.currentState ? RTCVisit.currentState : null;
		var querySymbol = -1 == link.indexOf('?') ? '?' : '&';
		if (-1 == link.indexOf('&v=') && -1 == link.indexOf('?v=') && sessionName) {
			link = link + querySymbol + 'v=' + sessionName;
		}
		querySymbol = -1 == link.indexOf('?') ? '?' : '&';
		if (-1 == link.indexOf('&s=') && -1 == link.indexOf('?s=') && currentState) {
			link = link + querySymbol + 's=' + currentState;
		}
		return link;
	},
	addVisitTrackParameter: function(parentEl) {
		parentEl = parentEl || $(document);
		// Apply 'v' parameter to track session name.
		parentEl.find('.trackLink').click(function() {
			var href = $(this).attr('href');
			var link = rtc.utils.linkSessionName(href);
			if (link != href) {
				$(this).attr('href', link);
			}
		});
	},
	trackClick: function(parentEl) {
		parentEl = parentEl || $(document);
		parentEl.find('.trackClick').click(function() {
			rtc.utils.track( "wwwlink", $(this).attr('href') );
		});
	},
	trackVideoPlayerDimensions: function(e) {
	    /*		var videoObject = $('#jquery_jplayer_videoplayer object');
		if (!videoObject.length) {
			videoObject = $('#jquery_jplayer_videoplayer video');
		}
		if (!videoObject.length) {
			videoObject = {};
		}
		var position = videoObject.position && videoObject.position() || {};
		var dimensions = {
				width:videoObject.width(),
				height: videoObject.height(),
				top: position.top,
				left: position.left,
		};
		rtc.utils.track(e, { data: JSON.stringify( dimensions ) } );*/
	},
	documentReady: function() {
		if ( typeof RTCConfig != "undefined" && RTCConfig.jsDisplayConsoleLog ) {
			$( document.body ).append( "<div id='console-log' style='pointer-events:none;position:absolute;right:0;top:0;width:400px;height:400px;overflow:auto;z-index:999999;background:RGBA(255,255,255,0.5)'></div>" );
		}

		rtc.utils.addVisitTrackParameter();
		rtc.utils.trackClick();
		rtc.utils.addPageVisibilityTracking();
		rtc.utils.addSideButtonClickTracking();
	},
	getBaseUrl: function() {
		return RTCConfig.baseurl;
	},
	getShareBaseUrl: function( params ) {
		return RTCConfig.baseurl;
	},
	commafy: function( num, sep ) {
		var parts = ( '' + num ).split( '.' ); // convert to string and split at decimal point
		var i = parts[0];
		var o = '';
		var m = i.match( /^([^0-9]+)(.+)/ );
		var p = '';

		if ( m ) {
			p = m[1];
			i = m[2];
		}

		var n = i.length;

		sep = sep || ',';

		while ( n-- ) {
			o = ( n == 0 ? '' : ( ( i.length - n ) % 3 ? '' : sep ) ) + i.charAt( n ) + o;
		}

		return p + o + ( parts.length > 1 ? ( '.' + parts[1] ) : '' );
	},
	stateToNumber: function( state ) {
		if (null == state) {
			return 0;
		}
		if ('LOADING' == state) {
			return -1;
		}
		if ('START' == state) {
			return 0;
		}
		if ('END' == state) {
			return 999999;
		}
		state = state.replace(/^S_/, '');
		var n = state.split('_');
		if (n.length >= 2) {
			var major = n[0];
			var minor = n[1];

			return minor ? 1000 * major + 1 * minor : major;
		}
		var ret = n[0] * 1;
		return isNaN(ret) ? -2 : ret;
	},
	isEmpty: function( val ) {
		return typeof val == "undefined" || val == "";
	},
	getMediaPublishDate: function( config, visit, campaignId ) {
		if ( config.publishDate && config.publishDate[campaignId] ) {
			return "&publishDate=" + config.publishDate[campaignId];
		}

		return "";
	},
	transliterate: function( s ) {
		var charMap = {
			'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE', 'Ç': 'C',
			'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
			'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ő': 'O',
			'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH',
			'ß': 'ss',
			'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
			'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
			'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o',
			'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th',
			'ÿ': 'y'
		};

		for ( var k in charMap ) {
			s = s.replace( RegExp( k, 'g' ), charMap[k] );
		}

		return s;
	},
	parseEffects: function( effects ) {
		rtc.utils.vars.overlayData = [];

		$( effects ).each( function( i, eff ){
			rtc.utils.parseEffect( i, eff );
		} );

		return rtc.utils.vars.overlayData;
	},
	parseEffect: function( i, eff ) {
		rtc.utils._parseEffect( i, eff );
	},
	_parseEffect: function( i, eff ) {
		if ( eff.type === "function" )
		{
			rtc.utils.vars.videoOverlays.push( new Overlay( eff.param, eff.start, eff.end ) );

			if ( rtc.overlay.data ) {
				eff = $.extend( eff, { data: rtc.overlay.data( eff.param ) } );
			}
		}
		else {
			if ( $( '#overlays' ).find( '#' + [eff.param] ).length ) {
				rtc.utils.vars.videoOverlays.push( new Overlay( eff.param, eff.start, eff.end ) );
			} else {
				consoleLog( "Overlay " + eff.param + " not implemented" );
			}
		}

		rtc.utils.vars.overlayData.push( eff );
	},
	getWebsiteURL: function( config, visit ) {
		return config.baseDir + "/www.php?v=" + visit.name + '&s=' + visit.currentState;
	},
	openAndPause: function( url ) {
		rtc.player.controls.pause();

		window.open( url, "_blank" );
	},
	openAndTrackUrl: function( url, event, params, target ) {
		window.open( url, target || "_blank" );
		if ( typeof params != "undefined" && typeof params.data == "undefined" ) {
			params = { data: JSON.stringify( params ) };
		}
		rtc.utils.track( "www" + event, params );
	},
	logEndCardBtnClick: function( id ) {
		var k = "endCardBtn" + id.replace( /\-/g, " " ).replace( /(^[a-z]|\s+[a-z])/g, function( m ) {
			return m.toUpperCase();
		} ).replace( /\s+/g, "" );

		RTCVisit[k] = ( RTCVisit[k] || 0 ) + 1;

		rtc.session.save();
	},
	addLineBreak: function( s ) {
		var i = Math.floor( s.length / 2 );
		var o = 1;

		if ( s.indexOf( " " ) < 0 ) {
			return s;
		}

		while ( s.substr( i, 1 ) != " " ) {
			i += o;
			o = ( o < 0 ? ( o - 1 ) : ( o + 1 ) ) * -1;
		}

		return s.substr( 0, i ) + "<br/>" + s.substr( i + 1 );
	},
	getActualFirstName: function( visit ) {
		visit = visit ? visit : {};

		var firstname = "";

		if ( visit.fullname ) {
			firstname = visit.fullname.replace( / [^ ]+$/, "" );
		}

		firstname = ( !( firstname && firstname.length ) && visit.firstname ) ? visit.firstname : firstname;

		return firstname && firstname.length ? firstname : "";
	},
	getFirstName: function( visit ) {
		visit = visit ? visit : {};

		var firstname = rtc.utils.getActualFirstName( visit ).toLowerCase();

		firstname = rtc.homophones.names[firstname] ?
			rtc.homophones.names[firstname] :
			firstname;

		while ( firstname.indexOf( " " ) != -1 ) {
			if ( typeof rtc.infmap.val('b', firstname.toLowerCase().replace( / /g, "_" )) == "undefined" ) {
				firstname = firstname.replace( / [^ ]*$/, "" );
			}
			else {
				break;
			}
		}

		return firstname;
	},
	getLastName: function( visit ) {
		visit = visit || {};
		var lastname = "";

		if ( visit.fullname && visit.fullname.indexOf( " " ) > -1 ) {
			lastname = visit.fullname.replace( /^.+ /, "" );
		}

		lastname = ( !( lastname && lastname.length ) && visit.lastname ) ? visit.lastname : lastname;
		lastname = lastname && lastname.length ? lastname : "";

		return lastname;
	},
	shouldHideVideoPlayerForSideCardByUserAgent: function( userAgent ) {
		return String( userAgent || navigator.userAgent ).match( /iphone/i );
	},
	hideVideoPlayerForSideCardByUserAgent: function() {
		if ( this.shouldHideVideoPlayerForSideCardByUserAgent() ) {
			$( "#jquery_jplayer_videoplayer video" ).width(1).height(1);
		}
	},
	showVideoPlayerForSideCardByUserAgent: function() {
		if ( this.shouldHideVideoPlayerForSideCardByUserAgent() ) {
			$( "#jquery_jplayer_videoplayer video" ).width(640).height(360);
		}
	},
	viewerProfileText: function(visit) {
		visit = visit || {};
		var text = '';
		if ($.trim(visit.fullname)) {
			text += rtc.strings.get( "session", "preparedFor" ) + ' <span class="strong">' + visit.fullname + '</span>';
		}
		else if (visit.firstname) {
			text += rtc.strings.get( "session", "preparedFor" ) + ' <span class="strong">' + visit.firstname;

			if (visit.lastname) {
				text += ' ' + visit.lastname;
			}

			text += '</span>';
		}
		if (text.length && visit.company) {
			text += ' ' + rtc.strings.get( "session", "from" ) + ' <span class="strong">' + visit.company + '</span>';
		}
		else if (visit.company) {
			text += ' ' + rtc.strings.get( "session", "preparedFor" ) + ' <span class="strong">' + visit.company + '</span>';
		}
		return text;
	},
	isReferral: function( visit ) {
		return !!( visit && visit.referral );
	},
	addPageVisibilityTracking: function() {
		var hidden = "hidden";
		var timeout = null;
		var onchange = function( event ) {
			var map = {
				focus: "focus",
				focusin: "focus",
				pageshow: "visible",
				blur: "blur",
				focusout: "blur",
				pagehide: "hidden"
			};
			var state = null;

			clearTimeout( timeout );

			event = event || window.event;

			if ( event.type in map ) {
				state = map[event.type];
			}
			else {
				state = this[hidden] ? "hidden" : "visible";
			}

			timeout = setTimeout( function() {
				if ( state == "visible" || state == "hidden" ) {
					if ( state == rtc.utils.vars.pageVisibility ) {
						return;
					}

					rtc.utils.vars.pageVisibility = state;
				}
				else {
					if ( state == rtc.utils.vars.pageFocus ) {
						return;
					}

					rtc.utils.vars.pageFocus = state;
				}

				rtc.utils.track( "page." + state );
			}, 100 );
		};

		if ( hidden in document ) {
			$( document ).on( "visibilitychange", onchange );
		}
		else if ( ( hidden = "mozHidden" ) in document ) {
			$( document ).on( "mozvisibilitychange", onchange );
		}
		else if ( ( hidden = "webkitHidden" ) in document ) {
			$( document ).on( "webkitvisibilitychange", onchange );
		}
		else if ( ( hidden = "msHidden" ) in document ) {
			$( document ).on( "msvisibilitychange", onchange );
		}
		else if ( ( hidden = "oHidden" ) in document ) {
			$( document ).on( "ovisibilitychange", onchange );
		}
		else if ( "onfocusin" in document ) {
			document.onfocusin = document.onfocusout = onchange;
		}
		else {
			window.onpageshow = window.onpagehide = onchange;
		}

		window.onfocus = window.onblur = onchange;
	},
	addSideButtonClickTracking: function() {
		$( ".sideButtons li" ).click( function() {
			rtc.utils.track( "sideButton.click", { data: JSON.stringify( { card: $( this ).attr( "class" ) } ) } );
		} );
	},
	findNearestChar: function( text, char, index ) {
		text = String( text );
		index = index || 0;

		var middle = Math.ceil( text.length / 2 );
		var orbit = 0;

		while ( orbit < middle ) {
			if ( index + orbit > 0 && index + orbit < text.length && text.substr( index + orbit, 1 ) == char ) {
				return index + orbit;
			}

			orbit = ( orbit < 0 ? orbit : ( orbit + 1 ) ) * -1;
		}

		return false;
	},
	splitTextMultiline: function( text, options ) {
		text = String( text );

		if ( options.lines ) {
			var splits = [];
			var charsPerLine = text.length / options.lines;

			for ( var i = 0 ; i < options.lines - 1 ; i++ ) {
				splits.push( Math.round( ( i + 1 ) * charsPerLine ) );
			}

			$.each( splits, function( i, index ) {
				index = rtc.utils.findNearestChar( text, " ", index );

				if ( index !== false ) {
					text = text.substr( 0, index ) + "\n" + text.substr( index + 1 );
				}
			} );
		}

		if ( options.html ) {
			text = text.replace( /\n/g, "<br/>" );
		}

		return text;
	},
	limitElementLines: function( selector, text, lines, minFontSize ) {
		minFontSize = minFontSize || 8;
		lines = lines || 1;

		var tmp = [];
		var el = $( selector );

		for ( var i = 0 ; i < lines ; i++ ) {
			tmp.push( "A" );
		}

		el.css( "font-size", "" ).html( tmp.join( "<br/>" ) );

		var maxHeight = el.height();
		var fontSize = parseInt( el.css( "font-size" ).replace( /[a-z]+/i, "" ) );

		el.html( text );

		while ( el.height() > maxHeight && fontSize >= minFontSize ) {
			el.css( "font-size", --fontSize );
		}

		return maxHeight - el.height();
	},
	shouldDisablePrependPreVid: function( userAgent ) {
		var m = String( userAgent ).match( /android ([0-9]+)/i );

		if ( m && m[1] >= 4 ) {
			return true;
		}

		return false;
	},
	fixMacWebkitIpadOverlayPosition: function() {
		if( rtc.utils.shouldFixMacWebkitIpadOverlayPosition(navigator.userAgent)  ){
			$("head").append("<style type=\"text/css\">#overlays .overlay-text{margin-top: -2px;}</style>");
		}
	},
	shouldFixMacWebkitIpadOverlayPosition: function( userAgent ) {
		if( String( userAgent ).match( /ipad/i ) ) {
			return true;
		} else if( String( userAgent ).match( /chrome/i ) ) {
			return String( userAgent ).match( /OS X/i );
		} else if( String( userAgent ).match( /safari/i ) ) {
			return true;
		}
		return false;
	},
	// This function matches the native browser on HTC and is
	// used to handle overlays differently to fix the timing issue.
	overlaysShouldFadeTo: function( userAgent ) {
		if( String( userAgent ).match( /Android/i ) ) {
			if( String( userAgent ). match( /HTC/ ) ) {
				return !String( userAgent ).match( /chrome/i );
			} else {
				return false;
			}
		}
		return false;
	},
	addVideoVisitData: function( field, value ) {
		RTCVisit.videoVisitData = RTCVisit.videoVisitData || {};

		if ( typeof value == "undefined" ) {
			$.each( field, function( field, value ) {
				rtc.utils.addVideoVisitData( field, value );
			} );
		}
		else {
			RTCVisit.videoVisitData[field] = value;
		}
	},
	getSetMediaDelay: function( userAgent, html5 ) {
		var m = String( userAgent ).match( /windows nt.+rv:([0-9]+)/i );

		if ( html5 && m && m[1] >= 11 ) {
			return 100;
		}

		return 0;
	},
	getSplashPlayImgURL: function( config ) {
		var url = RTCConfig.baseDir + "/css/";

		if ( config.applicationName ) {
			url += config.applicationName + "/";
		}

		return url + "images/splash-play.png"
	},
	showLowBandwidthWarningCard: function() {
		$( "#jp_container_1, #wrapper_container" ).hide();
		$( "#low-bandwidth-card" ).show();

		$( "#low-bandwidth-card button" ).click( function() {
			$( "#jp_container_1, #wrapper_container" ).show();
			$( "#low-bandwidth-card" ).hide();
			$( "#jp_container_1" ).removeClass( "hide-player" );
			rtc.player.playVideo({state:rtc.state.startState(), firstPlay:true});
		} );
	},
    handleVidBillGenResponseData: function( data ) {

    },
    addResumeSplash: function() {
    	$( '#overlays' ).before( "<div id=\"resumeSplash\"></div>" );
    	var url = RTCConfig.baseDir + "/css/images/resumeSplashButton.png";
		var img = $( '<img>' );
		img.attr( 'src', url );
		img.appendTo( '#resumeSplash' );
    },
    showResumeSplash: function() {
    	if( $( '#resumeSplash' ).length > 0 ) {
	    	$( '#resumeSplash' ).show();
	    	$( '#resumeSplash' ).on( "click", function() {
	    		rtc.player.controls.resume();
	    	} );
    	}
    },
    hideResumeSplash: function() {
    	if( $( '#resumeSplash' ).length > 0 ) {
    		$( '#resumeSplash' ).hide();
    	}
    },
    shouldShowGiftClaimCard: function ( visit ) {
    	if( typeof visit.incentive !== "undefined" && !rtc.utils.isEmpty( visit.incentive ) && visit.incentive !== "none" && visit.incentive !== "_none" ) {
    		return !visit.giftClaimCardShown;
    	}
    	return false;
    }
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$.fn.rtcTooltip = function( text, options )
{
	var settings = $.extend( true, {
		actions: [ "hover" ],
		position: "below",
		offset: { vert: 5, horz: 0 },
		align: "center"
	}, options );

	$.each( this, function() {
		var hideTimeout = null;
		var self = $( this );
		var create = function() {
			if ( $.inArray( "hover", settings.actions ) > -1 ) {
				self.on( {
					mouseover: show,
					mouseout: hide
				} );
			}

			if ( $.inArray( "focus", settings.actions ) > -1 ) {
				self.on( {
					focus: show,
					blur: hide
				} );
			}

			if ( $.inArray( "click", settings.actions ) > -1 ) {
				self.on( "click change",
					function() {
						show();
						hide( 2000 );
					}
				);
			}

			var position = self.offset();
			var width = self.outerWidth();
			var height = self.outerHeight();
			var tooltip = null;

			if ( position !== null ) {
				var css = "";

				if ( position.left < 0 || position.top < 0 ) {
					position = self.parent().offset();
				}

				tooltip = $( "<div class='rtcTooltip'>" + text + "</div>" )
				$( document.body ).append( tooltip );

				if ( typeof settings.position == "object" ) {
					css = settings.position;
				}
				else if ( settings.position == "below" ) {
					css = { top: ( position.top + height ), left: ( position.left ) };
				}
				else if ( settings.position == "above" ) {
					css = { top: ( position.top - tooltip.outerHeight() ), left: ( position.left ) };
				}
				else if ( settings.position == "left" ) {
					css = { top: position.top, left: ( position.left - tooltip.outerWidth() ) };
				}
				else if ( settings.position == "right" ) {
					css = { top: position.top, left: ( position.left + width ) };
				}

				if ( settings.align == "center" ) {
					if ( settings.position == "below" || settings.position == "above" ) {
						css.left += ( width - tooltip.outerWidth() ) / 2;
					}
					else if ( settings.position == "left" || settings.position == "right" ) {
						css.top += ( height - tooltip.outerHeight() ) / 2;
					}
				}

				css.left += settings.offset.horz;
				css.top += settings.offset.vert;

				tooltip.css( css );
			}

			return tooltip;
		};
		var show = function() {
			clearTimeout( hideTimeout );
			$( tooltip ).fadeIn();
		};
		var hide = function( delay ) {
			clearTimeout( hideTimeout );
			hideTimeout = setTimeout( function() {
				$( tooltip ).fadeOut();
			}, delay || 50 );
		};

		var tooltip = create();
	} );
};
window.rtc = window.rtc || {};
window.rtc.hd = window.rtc.hd || {};
$.extend(true, rtc.hd, {

	vars: {
		cssFilename: null,
		eventListeners: [],
		hdAllowed: true
	},

	addEventListener: function( fnc, type ) {
		rtc.hd.vars.eventListeners.push( { fnc: fnc, type: type || true } );
	},

	triggerEvent: function( type ) {
		var l = rtc.hd.vars.eventListeners;

		for ( var i = 0 ; i < l.length ; i++ ) {
			if ( l[i].type === true || l[i].type === type ) {
				l[i].fnc();
			}
		}
	},

	css: function( cssFilename ) {
		if ( typeof cssFilename != "undefined" ) {
			this.vars.cssFilename = arguments;
		}

		return this.vars.cssFilename;
	},

	getVideoSize: function( includeCssClass ) {
		var size = {height:'360px', width:'640px'};

		if ( rtc.utils.isHD() ) {
			size = {height:'540px', width:'960px'};
		}

		if ( includeCssClass ) {
			size.cssClass = $('#jp_container_1').attr( "class" );
		}

		return size;
	},

	updateVideoSize: function() {
		$('#jquery_jplayer_videoplayer, #jp_poster_1, #jp_flash_1').css(rtc.hd.getVideoSize());
		$("#jquery_jplayer_videoplayer").jPlayer({size:rtc.hd.getVideoSize(true)});
	},

	detectVideoResize: function( expectedWidth, callback ) {
		// wait for the CSS changes to be applied by checking the width of the main wrapper
		var interval = setInterval( function() {
			if ( $("#wrapper").width() == expectedWidth ) {
				clearInterval( interval );
				callback();
				if ( $( "#timeline .timeline-section" ).length ) {
					rtc.timeline.render();
				}
			}
		}, 10 );
	},

	addCss: function( onload ) {
		rtc.utils.css.add( this.css(), onload, function() { return $( "#timeline" ).css( "background-image" ).match( /hi\-res/ ); } );
	},

	removeCss: function() {
		rtc.utils.css.remove( this.css() );
	},

	expandScreen: function() {
		rtc.hd.detectVideoResize( 1420, rtc.card.posCard );
		this.addCss( function() {
			rtc.player.buffering.updateProgress();
			rtc.hd.triggerEvent( "expand" );
		} );
		$('#jp_container_1').removeClass('jp-video-360p').addClass('jp-video-540p');
		$('#timelineBar #qualitybtn').removeClass('auto standard').addClass('high');
		$('#timeline').data("slider").options.max = 1144;
		rtc.timeline.updateTimelineProgressBar();
		rtc.utils.vars.videoLayout = 'hq';
	},

	contractScreen: function() {
		rtc.hd.detectVideoResize( 1000, rtc.card.posCard );
		this.removeCss();
		$('#jp_container_1').removeClass('jp-video-540p').addClass('jp-video-360p');
		$('#timelineBar #qualitybtn').removeClass('auto high').addClass('standard');
		$('#timeline').data("slider").options.max = 770;
		rtc.timeline.updateTimelineProgressBar();
		rtc.utils.vars.videoLayout = 'sq';
		rtc.player.buffering.updateProgress();
		rtc.hd.triggerEvent( "collapse" );
	},

	hdAllowed: function( hdAllowed ) {
		if ( typeof hdAllowed != "undefined" ) {
			rtc.hd.vars.hdAllowed = hdAllowed;
		}
		return rtc.hd.vars.hdAllowed && (screen.width >= 1440)&&(screen.height >= 900)&&(Modernizr.csstransforms)&&(Modernizr.backgroundsize);
	},
	hdViewport: function() {
		//alert('width: ' + $(window).width() + '/nheight: ' + $(window).height() );
		return ($(window).width() >= 1440)&&($(window).height() >= 800);
	},

	autoVideoSize: function() {
		//Is browser 1440x900 or larger?
		//Does the browser support CSS3 2D transforms
		if (rtc.hd.hdAllowed() && rtc.hd.hdViewport()){
			//alert ('great, you get the hq version - width: ' + screen.width + ' | height: ' + screen.height + ' | css transforms: ' + Modernizr.csstransforms);
			$('#timelineBar #qualitybtn').removeClass('auto standard').addClass('high');
			rtc.hd.expandScreen();
		} else {
			//alert ('sorry, no hq version for you - width: ' + screen.width + ' | height: ' + screen.height + ' | css transforms: ' + Modernizr.csstransforms);
			$('#timelineBar #qualitybtn').removeClass('auto high').addClass('standard');
			rtc.hd.contractScreen();
		}
		rtc.hd.videoSizeAllowed();
	},

	videoSizeAllowed: function() {
		//Is browser 1440x900 or larger?
		//Does the browser support CSS3 2D transforms
		if (rtc.hd.hdAllowed()){
			$('#timelineBar #qualityauto').css('display','none');
			return true;
		}

		//add disabled to the video quality button.
		$('#timelineBar #qualitybtn').addClass('disabled');
		$('#timelineBar #qualityhigh').addClass('disabled');
		$('#timelineBar #qualityhigh').css('display','none');
		$('#timelineBar #qualitystandard').css('display','none');
		$('#timelineBar #qualityauto').css('display','none');
		return false;
	},

	showHDlowBandwidthTip: function(force) {
		if ( (!rtc.utils.vars.hdLowBandwidthShown && rtc.player.playerStatus.playing) || (force && rtc.player.playerStatus.playing) ) {
			// hide the corporate firewall detected popup before displaying HD low bandwidth popup
			$('#corporate-firewall-detected').stop().fadeOut(300, function() {
				$(this).hide();
			});
			$('#timelineBar #hd_low_bandwidth').delay(300).fadeIn(500);
			$('#timelineBar #hd_low_bandwidth').delay(6000).fadeOut(500, function() {
	    		// Animation complete.
				$(this).hide();
		  	});
			rtc.utils.vars.hdLowBandwidthShown = true;
		}
	}
});

window.rtc = window.rtc || {};
$.extend(true, rtc, {
	timeline: {
		vars: {
			strings: null,
			timelineOptions: {
				hyphenate: false,
				intermediateSections: []
			},
			minSectionFontSize: 10,
			sectionAdditionalPadding: "0",
			timelineTooltips: []
		},
		sliding: false,
		slideCurrentState: function( targetState, timelineVal ) {
			if ( !StateEngine[targetState].cardIsShowing() ) {
				if ( 'function' === typeof StateEngine[targetState].slide ) {
					StateEngine[targetState].slide( RTCVisit, timelineVal );
				}
				else {
					var percent = StateEngine[targetState].percentFromTimeline( timelineVal, RTCVisit );
					rtc.player.timelineSeek( percent );

					if ( rtc.player.video.isFlashActive() ) {
						var secondsFromStart = percent * rtc.player.video.status().duration / 100;
						this.setVideoPositionSeconds( secondsFromStart );
					}
					else {
						this.setVideoPercentage( percent );
					}
				}
			}
		},
		setVideoPositionSeconds: function( secondsFromStart ) {
			consoleLog('rtc.timeline.setVideoPositionSeconds ' + secondsFromStart);
			rtc.player.video("play", secondsFromStart);
		},
		slideDifferentState: function( targetState, timelineVal ) {
			this.gotoState( targetState );
		},
		slide: function(event, ui) {
			var timelineVal = ui.value;
			var targetState = rtc.state.timelineTargetState(timelineVal);
			var currentState = rtc.state.currentState();
			consoleLog('timelineSlide:' + timelineVal + ' targetState:' + targetState + ' currentState:' + currentState);
			rtc.utils.track("timeline.slide", {
				pos: timelineVal,
				targetState: targetState,
				currentState: currentState,
				hd: rtc.utils.isHD()
			});
			if ( !rtc.player.playerStatus.videoStarted ) {
				$('#timelineBar #playpause').click();
			}
			else if (targetState == 'END' && StateEngine.END) {
				rtc.card.showCard( targetState );

				return false;
			}
			else if (rtc.state.currentState() === targetState) {
				rtc.timeline.slideCurrentState( targetState, timelineVal );
			}
			else {
				this.slideDifferentState( targetState, timelineVal );
				rtc.player.hideIE9FlashWarning();
				return false;
			}
		},
		gotoState: function(targetState, alwaysPlay) {
			if ( StateEngine[targetState].stateSelectedOnTimeline(RTCVisit, alwaysPlay) !== false ) {
				this.changeState(targetState, alwaysPlay);
			}
			$("#audio_player").jPlayer("stop");
			//consoleLog('timelineSlide change state');
		},
		skipToState: function( state ) {
			// prevent IE9 flash warning from being displayed
			rtc.player.hideIE9FlashWarning();
			rtc.player.buffering.resume( true );
			rtc.player.stopPlayer();
			rtc.overlay.hideAll();
			rtc.state.set(state);
			rtc.card.showCard(state);
			rtc.player.buffering.updateProgressToMarkerPosition();
			rtc.timeline.setPosForce(state, 0);
		},
		setVideoPercentage: function(percent) {
			consoleLog('rtc.timeline.setVideoPercentage ' + percent);
			var relativePercent=Math.min(100,percent*100/$("#jquery_jplayer_videoplayer").data("jPlayer").status.seekPercent);		//"playHead" takes a percentage of the currently seekable video, not of the whole video.
			$("#jquery_jplayer_videoplayer").jPlayer("playHead", relativePercent);
		},
		changeState: function(targetState, alwaysPlay) {
			consoleLog('rtc.timeline.changeState ' + targetState);
			rtc.state.set(targetState);
			if(!StateEngine[targetState].cardIsShowing()) {
				rtc.card.hideCards();
			}
			else {
				StateEngine[targetState].cardLoaded();
			}
			if ( alwaysPlay === true ) {
				rtc.player.controls.playNext();
				rtc.timeline.setPos(RTCVisit.currentState,0);
			}
			else {
				rtc.player.stopPlayer();
				rtc.card.showCard(targetState);
			}
			rtc.player.buffering.updateProgressToMarkerPosition();
		},
		sliderOnce: {},
		sliderOnceExpired: function(sliderPos) {
			delete this.sliderOnce[sliderPos];
		},
		slideIgnoreRepeated: function(event, ui, fn) {
			if (!this.sliderOnce[ui.value]) {
				this.sliderOnce[ui.value] = true;
				setTimeout(function() {rtc.timeline.sliderOnceExpired(ui.value);}, 300);
				fn.call(this, event, ui);
			}

			return false;
		},
		setPosForce: function(state, pos) { // timelineForcePos
            this.updateTimelineProgressBar();
			var sliderVal = rtc.timeline.sliderPos(state, pos);
			$('#timeline').slider('option', 'value', sliderVal);
		},
		setPos: function(state, pos, currentTime, duration) { // timelinePos
			if ( !this.sliding ) {
				if ( pos > 0 || !RTCVisit.lastTimelinePosUpdate || RTCVisit.lastTimelinePosUpdate.state != state ) { // prevent timeline position going back to the start when the next state is reached
					this.setPosForce(state, pos);
				}
				RTCVisit.lastTimelinePosUpdate = {state:state,pos:pos};
			}
		},
		sliderPos: function(state, percent) {
			// default to END if state is null when user slides past the end of the timeline
			return StateEngine[state || 'END'].timelinePos(percent, RTCVisit);
		},
        updateTimelineProgressBar: function() {
            // Is overridden with functionality by projects which require so.
        },
		_render: function( strings, options ) {
			var sections = [];
			var timeline = $( "#timeline" );
			var timelineWidth = timeline.width();
			var total = 0;
			var minFontSize = 100;

			if ( typeof strings == "undefined" ) {
				strings = rtc.timeline.vars.strings;
			}
			else {
				rtc.timeline.vars.strings = strings;
			}

			if ( typeof options != "undefined" ) {
				$.extend( true, rtc.timeline.vars.timelineOptions, options );
			}

			options = rtc.timeline.vars.timelineOptions;

			timeline.children( ".timeline-section,.intermediate-timeline-section-divider,.intermediate-timeline-section" ).remove();

			for ( var state in strings ) {
				if ( typeof strings[state] == "string" ) {
					if ( StateEngine[state] ) {
						sections.push( { start: StateEngine[state].timelineStartPos, label: strings[state], state: state } );
					}
				}
				else {
					sections.push( strings[state] );
				}
			}

			for ( var i = 0 ; i < sections.length ; i++ ) {
				var last = i + 1 == sections.length;
				var width = last ? ( 100 - total ) : ( sections[i + 1].start - sections[i].start );
				var label = sections[i].label;
				var section = $( "<div class='timeline-section' id='timeline-section-" + sections[i].state +
					"'><div class='timeline-section-text' style='padding:" + rtc.timeline.vars.sectionAdditionalPadding + "'>" +
					label.replace( /\n/g, "<br/>" ) + "</div></div>" ).appendTo( timeline );
				var fontSize = parseInt( String( section.css( "font-size", null ).css( "font-size" ) ).replace( /[a-z]+/i, "" ) );
				var padding = parseInt( section.css( "padding-left" ), 10 ) + parseInt( section.css( "padding-right" ), 10 );
				var totalPadding = padding + parseInt( section.find( "div" ).css( "padding-left" ), 10 ) + parseInt( section.find( "div" ).css( "padding-right" ), 10 );

				if ( RTCConfig.showTimelineSceneNumbers && sections[i].state ) {
					section.append( "<div class='timeline-scene-number'>" + sections[i].state.replace( /^S_/, "" ) + "</div>" );
				}

				while ( section.width() + totalPadding >= Math.floor( ( width * timelineWidth ) / 100 ) && fontSize > rtc.timeline.vars.minSectionFontSize ) {
					if ( label.match( / / ) && !section.hasClass( "timeline-section-2-line" ) ) {
						break;
					}
					else {
						fontSize -= 0.5;
						section.css( "font-size", fontSize );
					}
				}

				if ( options.hyphenate && section.width() >= Math.floor( ( width * timelineWidth ) / 100 ) && !label.match( / / ) ) {
					var middle = Math.ceil( label.length / 2 );
					section
						.addClass( "timeline-section-2-line" )
						.find( ".timeline-section-text" )
							.html( label.substr( 0, middle ) + "- " + label.substr( middle ) );
				}

				minFontSize = Math.max( rtc.timeline.vars.minSectionFontSize, Math.min( minFontSize, fontSize ) );

				if ( !last ) {
					section.append( "<div class='timeline-section-divider'></div>" )
				}

				section.css( "width", ( width - ( ( 100 / timelineWidth ) * padding ) ) + "%" );

				total += width;
			}

			if ( options.intermediateSections && options.intermediateSections.length ) {
				for ( var i = 0 ; i < options.intermediateSections.length ; i++ ) {
					var intermediateSection = options.intermediateSections[i];

					if ( typeof intermediateSection == "string" ) {
						if ( StateEngine[intermediateSection] ) {
							$( "<div class='intermediate-timeline-section-divider' style='left:" +
								StateEngine[intermediateSection].timelineStartPos + "%'></div>" ).appendTo( timeline );
						}
					}
					else {
						$( "<div class='intermediate-timeline-section" +
							( intermediateSection.width ? "" : "-divider" ) + "' style='left:" +
							intermediateSection.start + "%'></div>" ).appendTo( timeline );

						if ( intermediateSection.tooltip ) {
							rtc.timeline.vars.timelineTooltips.push( intermediateSection );
						}
					}
				}
			}

			$( ".timeline-section" ).css( "font-size", minFontSize ).each( function() {
				var e = $( this ).css( "white-space", "normal" );
				if ( e.find( "br" ).length ) {
					e.addClass( "timeline-section-2-line" );
				}
				else if ( e.height() > parseFloat( e.css( "line-height" ) ) ) {
					var t = e.find( ".timeline-section-text" );
					t.html( rtc.utils.addLineBreak( t.html() ) );
					e.addClass( "timeline-section-2-line" );
				}
				else {
					e.css( "white-space", "" );
				}
			} );
		},
		render: function( strings, options ) {
			this._render( strings, options );
		},
		configureTimelineMarker: function( options ) {
			options = $.extend( true, {
				max: 813,
				slide: function( event, ui ) {
					var targetState = rtc.state.timelineTargetState( ui.value );
					var isCurrentState = rtc.state.currentState() === targetState;

					if ( !isCurrentState || !rtc.player.isMediaSet() ) {
						if ( !isCurrentState ) {
							rtc.card.hideCards();
							rtc.overlay.hideAll();
						}

						rtc.timeline.setPosForce( targetState, 0 );
						rtc.timeline.sliding = true;

						return false;
					}
					else if ( isCurrentState ) {
						rtc.timeline.sliding = false;

						return rtc.timeline.slideIgnoreRepeated(event, ui, rtc.timeline.slide);
					}
				},
				stop: function( event, ui ) {
					if ( rtc.state.currentState() !== rtc.state.timelineTargetState( ui.value ) ) {
						rtc.timeline.slide( event, ui );
					}

					setTimeout( function() {
						rtc.timeline.sliding = false;
					}, 250 );
				}
			}, options );

			$('#timeline').slider( options );

			// lower the z-index of the tooltips when the user hovers over the timeline slider
			$( "#timeline .ui-slider-handle" ).bind( {
				mouseover: function() {
					$( "#tooltipLayer" ).css( "z-index", 2 );
				},
				mouseout: function() {
					$( "#tooltipLayer" ).css( "z-index", "" );
				}
			} ).append( "<span class='ui-slider-handle-line'/><span class='ui-slider-handle-top'/>" );
		},
		documentReady: function() {
			$('#timelineBar #muteunmute, #timelineBar #playpause,#timelineBar #skipback, #timelineBar #skipforward, #timelineBar #qualitybtn, #timelineBar #qualityhigh, #timelineBar #qualitystandard, #timelineBar #qualityauto').hover(
				function() {
					$(this).addClass('hover');
				},
				function() {
					$(this).removeClass('hover');
				});

			$('#timelineBar #timeline').mousemove(function(e) {
					//var offsetX = e.offsetX;
					var offsetX = e.pageX - $(this).offset().left;
					offsetX = Math.max(0, offsetX);
					var timelineState = rtc.state.timelineTargetState(offsetX);
					var state = StateEngine[timelineState];
					var shown = false;
					var showTooltip = function( left, stateWidth, text ) {
						$( '#timelineTooltipWrapper' ).show();
						$( '#timelineTooltip' ).text( text );

						var tooltipWidth = $( '#timelineTooltip' ).width() + 40; // left and right sides are 20px each

						left = left + ( rtc.utils.isHD() ? 165 : 140 ) - ( tooltipWidth / 2 ) + ( stateWidth / 2 );

						$( '#timelineTooltipWrapper' ).css( 'padding-left', left );
					};

					if (state && (state.timelineTooltip && (!$('#timelineTooltipWrapper:visible').length || $('#timelineTooltip').text() != state.timelineTooltip))) {
						// show tooltip.
						//consoleLog('hover: ' + state.timelineTooltip + ' ' + state.timelineStartPos);
						$('#timelineTooltipWrapper').show();
						$('#timelineTooltip').text(state.timelineTooltip);

						var stateWidth = state.timelinePos( 100, RTCVisit ) - state.timelinePos( 0, RTCVisit );
						var tooltipWidth = $('#timelineTooltip').width() + 40; // left and right sides are 20px each
						var left = state.timelinePos(0, RTCVisit) + ( rtc.utils.isHD() ? 165 : 140 ) - ( tooltipWidth / 2 ) + ( stateWidth / 2 );

						$('#timelineTooltipWrapper').css('padding-left', left );

						shown = true;
					}
					else if ( rtc.timeline.vars.timelineTooltips.length ) {
						var timelineWidth = $( this ).width();
						var percent = ( offsetX / timelineWidth ) * 100;

						$.each( rtc.timeline.vars.timelineTooltips, function( i, tooltip ) {
							if ( percent >= tooltip.start && percent <= tooltip.start + tooltip.width ) {
								showTooltip( ( tooltip.start / 100 ) * timelineWidth, ( tooltip.width / 100 ) * timelineWidth, tooltip.tooltip );

								shown = true;
							}
						} );
					}
					if ((!state || !state.timelineTooltip) && $('#timelineTooltipWrapper:visible').length && !shown) {
						$('#timelineTooltipWrapper').hide();
					}
				}).mouseleave(function() {
					// remove tooltip.
					$('#timelineTooltipWrapper').hide();
				});

			$('#timelineBar #playpause').on('click', function() {
				if ($(this).hasClass('paused')) {
					rtc.utils.track('playBtn');
					if ($('.sideCard:visible').length) {
						$('.sideCardClose').click();
					}
					else if (0 == $('.card').length || !$('.card').dialog('isOpen') || !RTCVisit.currentState || !StateEngine[RTCVisit.currentState].cardIsShowing()) {
						rtc.player.controls.resume();
					}
				}
				else {
					rtc.utils.track('pauseBtn');
					rtc.player.controls.pause();
				}
			});

			$('#timelineBar #skipback').on('click', function() {
				rtc.utils.track('rewindBtn');
				if ( $( this ).attr( "disabled" ) != "disabled" ) {
					rtc.player.controls.rewind();
				}
			});

			$('#timelineBar #skipforward').on('click', function() {
				rtc.utils.track('forwardBtn');
				if ( $( this ).attr( "disabled" ) != "disabled" ) {
					rtc.player.controls.fastForward();
				}
			});

			$('#timelineBar #qualitybtn').on('click', function() {
				$('#timelineBar #qualitypopup').toggle();
			});

			$('#timelineBar #qualityhigh').on('click', function() {
				if ($('#timelineBar #qualityhigh').hasClass('disabled')){
					 //Do Nothing
				} else {
					$('#timelineBar #qualitybtn').removeClass('auto standard').addClass('high');
					$('#timelineBar #qualitypopup').hide();
					//Add the HD CSS file
					rtc.hd.expandScreen();
					rtc.hd.updateVideoSize();

					if (rtc.utils.getPlaybackQuality() == 'low') {
						rtc.hd.showHDlowBandwidthTip(true);
					}
				}

			});
			$('#timelineBar #qualitystandard').on('click', function() {
				$('#timelineBar #qualitybtn').removeClass('auto high').addClass('standard');
				$('#timelineBar #qualitypopup').hide();
				$('#timelineBar #hd_low_bandwidth').hide();
				//Remove the HD CSS File
				rtc.hd.contractScreen();
				rtc.hd.updateVideoSize();
			});
			$('#timelineBar #qualityauto').on('click', function() {
				$('#timelineBar #qualitybtn').removeClass('high standard').addClass('auto');
				$('#timelineBar #qualitypopup').hide();
				//Run a function to check CSS capability, and browser size. Then impliment eitherthe HQ or SQ version.
				rtc.hd.autoVideoSize();
			});
			$('#timelineBar #quality').mouseleave(function() {
				$('#timelineBar #qualitypopup').hide();
			});
			$('#volumeBar').hide();
			$('#volume').slider({
				orientation: 'vertical',
				range: 'min',
				max:100,
				stop: function( event, ui ) {
					rtc.utils.track( "volume.set", { data: ui.value } );
				},
				slide:function(event, ui) {
					var val = ui.value;
					rtc.player.controls.determineMuteState(val);
					rtc.player.controls.changeVolume(val);
					//set globalVolume variable
					globalVolume = val/100;
					//set globalMute value
					if(globalMute)
					{
						globalMute = false;
						rtc.player.controls.muteUnmute(false);
					}
				}
			});
		}
	}
});
window.rtc = window.rtc || {};
window.rtc.overlay = window.rtc.overlay || {};
var Overlay = Class.extend({
	init: function(name,start,end,startFn,endFn){
		this.name = name;
		this.start = start;
		this.end = end;
		this.startFn=startFn ? startFn : rtc.overlay.show;
		this.endFn=endFn ? endFn : rtc.overlay.hide;
		this.isShowing=false;
		this.patchTimings();
	},
	patchTimings:function() {
	},
	updateMain : function(time)
	{
		if((time >= this.start && time < this.end) && !this.isShowing) {	//If we're not showing and we should be
			this.isShowing=true;
			this.startFn(this.name);
		} else if((time < this.start || time >= this.end) && this.isShowing) {
			this.isShowing=false;
			this.endFn(this.name);
		}
	},
	update: function(time,playing) {
		clearTimeout(this.inTimeout);
		clearTimeout(this.outTimeout);	//Note - clearTimeout accepts undefined and already cleared timeouts.
		if((time >= this.start && time < this.end) && !this.isShowing && !rtc.player.playerStatus.seeking()) {	//If we're not showing and we should be
			this.updateMain(time);
		} else if((time < this.start || time >= this.end) && this.isShowing) {
			this.updateMain(time);
		} else if((time < this.start && time > this.start - this.updateInterval) && playing) {
			var _this = this;
			consoleLog("Overlay in timeout set");
			this.inTimeout = setTimeout(function() {
				_this.updateMain.call(_this,_this.start);
				},	(this.start - time) * 1000);
		} else if((time < this.end && time > this.end - this.updateInterval) && playing) {
			var _this = this;
			consoleLog("Overlay out timeout set");
			this.outTimeout = setTimeout(function() {
				_this.updateMain.call(_this,_this.end);
				},	(this.end - time) * 1000);
		}

	},
	updateInterval: 1
});
$.extend(true, rtc.overlay, {
	data: function(name) {
		consoleLog('overlayData name:[' + name + '].');
		var ret = rtc.overlay.dataForVisit(name, RTCVisit, RTCOverlayData);
		ret = ret ? ret : {};
		return ret;
	},
	hide: function(name) {
		consoleLog('rtc.overlay.hide name:[' + name + '].');
		var fnMap = rtc.overlay.fnMapHide;
		var fn = fnMap[name] ? fnMap[name] : function() {consoleLog('No rtc.overlay.hide fn for name:[' + name + ']');};
		fn(name);
	},
	show: function(name, offset) {
		consoleLog('rtc.overlay.show name:[' + name + '], offset:[' + offset + '].');
		var fnMap = rtc.overlay.fnMapShow;
		var fn = fnMap[name] ? fnMap[name] : function() {consoleLog('No rtc.overlay.show fn for name:[' + name + ']');};
		fn(name);
	},
	hideAll: function() {
		$('#overlays').children().each(function() { $(this).hide();});
		if ( rtc.overlay.fnMapHide ) {
			for ( var i in rtc.overlay.fnMapHide ) {
				if ( typeof ( rtc.overlay.fnMapHide[i] ) == "function" ) {
					rtc.overlay.fnMapHide[i].call( rtc.overlay, i );
				}
			}
		}
	},
	fade: function(name) {
		$('#overlays').find("#" + name).rtcFadeOut(400);
	},
	fadeOutFast: function(name) {
		$('#overlays').find("#" + name).rtcFadeOut('fast');
	},
	fadeIn: function(name, duration) {
		rtc.overlay.fns[name](name);
		$('#overlays').find('#'+ name).rtcFadeIn('fast');
	},
	fadeInFast: function(name) {
		rtc.overlay.fadeIn(name, 'fast');
	},
	fadeInSlow: function(name) {
		rtc.overlay.fadeIn(name, 'slow');
	},
	showDelay: function(name, fn, delay) {
		setTimeout(function() {
			fn(name);
		}, delay);
	},
	performFadeIn: function( elem, duration, complete ) {
		elem.fadeIn( duration, function() {
			complete && complete();
			clearTimeout( elem.data( "fadeinTimeout" ) );
		} );
	},
	performFadeOut: function( elem, duration, complete ) {
		elem.fadeOut( duration, function() {
			complete && complete();
			clearTimeout( elem.data( "fadeoutTimeout" ) );
		} );
	},
	documentReady: function() {
		if ( rtc.utils.overlaysShouldFadeTo( navigator.userAgent ) ) {
			$.extend( rtc.overlay, {
				performFadeIn: function( elem, duration, complete ) {
					elem.show().fadeTo( duration, 0.99, function() {
						complete && complete();

						clearTimeout( elem.data( "fadeinTimeout" ) );
					} );
				},
				performFadeOut: function( elem, duration, complete ) {
					elem.fadeTo( duration, 0.01, function() {
						complete && complete();
						clearTimeout( elem.data( "fadeoutTimeout" ) );
						$(this).hide();
					} );
				}
			} );
		}
	}

} );

$.fn.rtcFadeIn = function( duration, complete ) {
	var self = $( this );
	var speed = duration in jQuery.fx.speeds ? jQuery.fx.speeds[duration] : ( duration || jQuery.fx.speeds._default );
	var name = self.attr( "id" ) || self.attr( "class" );

	if ( !self.is( ":visible" ) ) {
		rtc.utils.track( "rtcFadeIn", { data: JSON.stringify( { name: name, duration: duration, speed: speed, actualTime: new Date(), videoTime: rtc.player.getCurrentTime() } ) } );
	}

	clearTimeout( self.data( "fadeinTimeout" ) );
	clearTimeout( self.data( "fadeinErrorTimeout" ) );
	clearTimeout( self.data( "fadeoutTimeout" ) );
	clearTimeout( self.data( "fadeoutErrorTimeout" ) );

	self.data( "fadeinTimeout", setTimeout( function() {
		try {
			self.stop( true, true );
		}
		catch ( ex ) {
		}

		self.show().css( "opacity", 1 );

		complete && complete();
	}, speed + 250 ) );

	self.data( "fadeinErrorTimeout", setTimeout( function() {
		if ( !self.is( ":visible" ) ) {
			rtc.utils.track( "error.rtcFadeIn", { data: JSON.stringify( { name: name, duration: duration, speed: speed, actualTime: new Date(), videoTime: rtc.player.getCurrentTime() } ) } );
		}
	}, speed + 200 ) );

	try {
		self.stop( true, true );
	}
	catch ( ex ) {
	}
	rtc.overlay.performFadeIn( self, duration, complete );

	if ( self.parent().attr( "id" ) == "overlays" ) {
		var visibleOverlays = $( "#overlays" ).children().not( this ).filter( ":visible" );

		if ( visibleOverlays.length > 0 ) {
			var visibleOverlayNames = [];

			$( visibleOverlays ).each( function( i, overlay ) {
				visibleOverlayNames.push( $( overlay ).attr( "id" ) );
			} );

			rtc.utils.track( "warning", { data: JSON.stringify( { visible: visibleOverlayNames, actualTime: new Date(), videoTime: rtc.player.getCurrentTime() } ) } );
		}
	}
};

$.fn.rtcFadeOut = function( duration, complete ) {
	var self = $( this );
	var speed = duration in jQuery.fx.speeds ? jQuery.fx.speeds[duration] : ( duration || jQuery.fx.speeds._default );
	var name = self.attr( "id" ) || self.attr( "class" );

	if ( self.is( ":visible" ) ) {
		rtc.utils.track( "rtcFadeOut", { data: JSON.stringify( { name: name, duration: duration, speed: speed, actualTime: new Date(), videoTime: rtc.player.getCurrentTime() } ) } );
	}

	clearTimeout( self.data( "fadeinTimeout" ) );
	clearTimeout( self.data( "fadeinErrorTimeout" ) );
	clearTimeout( self.data( "fadeoutTimeout" ) );
	clearTimeout( self.data( "fadeoutErrorTimeout" ) );

	self.data( "fadeoutTimeout", setTimeout( function() {
		try {
			self.stop( true, true );
		}
		catch ( ex ) {
		}

		self.hide().css( "opacity", 0 );

		complete && complete();
	}, speed + 250 ) );

	self.data( "fadeoutErrorTimeout", setTimeout( function() {
		if ( self.is( ":visible" ) ) {
			rtc.utils.track( "error.rtcFadeOut", { data: JSON.stringify( { name: name, duration: duration, speed: speed, actualTime: new Date(), videoTime: rtc.player.getCurrentTime() } ) } );
		}
	}, speed + 200 ) );

	try {
		self.stop( true, true );
	}
	catch ( ex ) {
	}
	rtc.overlay.performFadeOut( self, duration, complete );
};
window.rtc = window.rtc || {};
$.extend( true, rtc, { mailto: {
	form: null,
	mode: "single",
	options: {
		lastStepSelector: "#cardshareStep2,#cardshareStep3",
		sendViaTooltipCSS: {
			left: 'auto',
			top: 'auto'
		},
		sendDirectlyTooltipCSS: {
			left: 'auto',
			top: 'auto',
			width: '300px'
		}
	},
	getAdditionalShareStr: function() {
		return [];
	},
	init: function( form, sendViaName, getAdditionalShareStr ) {
		this.form = form;
		if ( typeof getAdditionalShareStr != "undefined" ) {
			this.getAdditionalShareStr = getAdditionalShareStr;
		}
	},
	updateVisitDetails: function()
	{
		var form = rtc.mailto.form;
		RTCVisit = rtc.utils.cardReadName(RTCVisit, form.find('input[name=firstname]').length ?
			[ form.find('input[name=firstname]').val(), form.find('input[name=lastname]').val() ] :
			form.find('input[name=fullname]').val());
		RTCVisit = rtc.utils.cardReadEmail(RTCVisit, form.find('input[name=email]').val());
		RTCVisit.company = form.find('input[name=company]').val();
		RTCVisit.lastShareMessage = form.find('textarea[name=message], input[name=message]').val();
	},
	getFromName: function(form) {
		if ( form.find( 'input[name=firstname]' ).length) {
			return $.trim( form.find( 'input[name=firstname]' ).val() + ' ' + form.find( 'input[name=lastname]' ).val() );
		}

		return $.trim( form.find( 'input[name=fullname]' ).val() );
	},
	getTheirName: function(form) {
		if ( form.find( 'input[name=theirfirstname]' ).length) {
			return $.trim( form.find( 'input[name=theirfirstname]' ).val() + ' ' + form.find( 'input[name=theirlastname]' ).val() );
		}

		return $.trim( form.find( 'input[name=theirname]' ).val() );
	},
	getTheirFirstName: function(form) {
		if ( form.find( 'input[name=theirfirstname]' ).length) {
			return $.trim( form.find( 'input[name=theirfirstname]' ).val() );
		}

		return $.trim( form.find( 'input[name=theirname]' ).val() ).replace( / .*/, '' );
	},
	getStringsForDirectEmail: function() {
		var form = rtc.mailto.form;
		var data = {};

		data.theiremail = form.find('input[name=theiremail]').val();
		data.firstname = rtc.mailto.getTheirFirstName(form);
		data.fullname = rtc.mailto.getFromName(form);
		data.message = form.find('textarea[name=message], input[name=message]').val();

		return data;
	},
	cardButtons: {
		sendVia: function()
		{
			var form = rtc.mailto.form;
			rtc.mailto.updateVisitDetails(form);

			form.find('input[name=shareUrl]').remove();
			form.find('input[name=sharePuid]').remove();
			form.find('input[name=referrer_session_name]').val(RTCVisit.name);
			form.find('input[name=campaign]').val(RTCVisit.campaign);

			if ( rtc.mailto.mode == "single" ) {
				var onSendByRTCURL = function (shareUrl) {
					$(rtc.mailto.options.lastStepSelector).find('input[name=sharelink]').val(shareUrl);
					rtc.session.setViewerProfile(RTCVisit);
					rtc.session.recordEvent(RTCVisit.name, 'share', form);
				};

				$.ajax({
				    url: rtc.utils.getBaseUrl() + 'api/shareurl/sendbyrtc',
				    type: "POST",
				    timeout: 2000,
				    data: form.serialize(),
				    success: function(response) {
				    	var shareUrl = response.url;
				    	form.append($("<input type='hidden' name='shareurl' />").val(shareUrl));
				    	onSendByRTCURL(shareUrl);
				    },
				    error: function(x, t, m) { // On timeout or other error use long url.
						var shareUrl = rtc.utils.shareUrl(rtc.utils.getShareBaseUrl( form.serializeArray() ), form, RTCVisit, rtc.mailto.getAdditionalShareStr());
						onSendByRTCURL(shareUrl);
				    }
				});
			}
			else {
				var onSendByRTCURL = function () {
					rtc.session.setViewerProfile(RTCVisit);
					rtc.session.recordEvent(RTCVisit.name, 'share-multiple', form);
				};

				$.ajax({
				    url: rtc.utils.getBaseUrl() + 'api/shareurl/sendbyrtc',
				    type: "POST",
				    timeout: 2000,
				    data: form.serialize(),
				    success: function(response) {
				    	var urls = [];
				    	for ( var i = 0 ; i < response.length ; i++ ) {
				    		urls.push( response[i].email + "\t" + response[i].url );
				    	}
				    	$( "#multipleShareResponse textarea" ).val( urls.join( "\n" ) );
				    	onSendByRTCURL();
				    },
				    error: function(x, t, m) { // On timeout or other error use long url.
						var recipients = $( ".emailFieldsRow" );
						var urls = [];
						for ( var i = 0 ; i < recipients.length ; i++ ) {
							urls.push( recipients.find( "input[name=theiremail\\[\\]]" ).val() + "\t" + rtc.utils.shareUrl(
								rtc.utils.getShareBaseUrl( rtc.mailto.form.serializeArray() ), recipients, RTCVisit, rtc.mailto.getAdditionalShareStr() ) );
						}
						$( "#multipleShareResponse textarea" ).val( urls.join( "\n" ) );
				    	onSendByRTCURL();
				    }
				});
			}
		},
		sendDirectly: function( recordSessionEvent, shareUrl, eventName )
		{
			var form = rtc.mailto.form;
			var mailBody = rtc.strings.get( "mailto", "mailBody" );

			if ( recordSessionEvent !== false ) {
				rtc.mailto.recordShareMailtoEvent(eventName);
			}

			mailStrings = rtc.mailto.getStringsForDirectEmail();
			mailBody = mailBody.replace('{{firstname}}', mailStrings.firstname);
			mailBody = mailBody.replace('{{fullname}}', mailStrings.fullname);

			if ( typeof mailStrings.message != "undefined" && !!mailStrings.message ) {
				mailBody = mailBody.replace('{{message}}', mailStrings.message);
			}
			else {
				mailBody = mailBody.replace(/\{\{message\}\}([\r\n]|%0A)+/, "");
			}

			var mailTo = "mailto:" + mailStrings.theiremail + '?subject=' + rtc.strings.get( "mailto", "mailSubject" );
			shareUrl = shareUrl || rtc.mailto.getSendDirectlyShareUrl( form );
			var link = encodeURIComponent(shareUrl);

			mailBody = mailBody.split('{{link}}').join(link); // replace all.

			// Note that we use _blank in case mailto links are handled by gmail or other webmail which causes browser to open in the same tab.
			window.open(mailTo + '&body=' + mailBody, '_blank');

			$(rtc.mailto.options.lastStepSelector).find('#confirmText').text(rtc.strings.get( "mailto", "ifSendDirectlyFailed" ));
			$(rtc.mailto.options.lastStepSelector).find('input[name=sharelink]').val(shareUrl);
		}
	},
	recordShareMailtoEvent: function(eventName) {
		eventName = eventName || 'share-mailto';
		var form = rtc.mailto.form;

		rtc.mailto.updateVisitDetails(form);
		rtc.session.setViewerProfile(RTCVisit);

		form.find('input[name=referrer_session_name]').val(RTCVisit.name);
		form.find('input[name=campaign]').val(RTCVisit.campaign);

		rtc.session.recordEvent(RTCVisit.name, eventName, form);
	},
	getSendDirectlyShareUrl: function(form) {
		var shareUrl = form.find('input[name=shareUrl]').val();
		var sharePuid = $.trim(form.find('input[name=sharePuid]').val());

		if ('' === sharePuid) {
			shareUrl = rtc.utils.shareUrl(rtc.utils.getShareBaseUrl( rtc.mailto.form.serializeArray() ), form, RTCVisit, rtc.mailto.getAdditionalShareStr());
		}
		else {
			var longPath = rtc.utils.shareUrl(rtc.utils.getShareBaseUrl( rtc.mailto.form.serializeArray() ), form, RTCVisit, rtc.mailto.getAdditionalShareStr()) + '&path=' + sharePuid;
			$.post(rtc.utils.getBaseUrl() + 'api/shareurl/' + sharePuid, {longpath: longPath});
		}

		return shareUrl;
	},
	onShareUrl: function(shareUrl, sharePuid, shareLongpath) {
		rtc.mailto.form.find('input[name=shareUrl]').val(shareUrl);
		if (sharePuid) {
			rtc.mailto.form.find('input[name=sharePuid]').val(sharePuid);
		}
		if (shareLongpath) {
			rtc.mailto.form.find('input[name=shareLongpath]').val(shareLongpath);
		}
	},
	updateTheirname: function() {
		$.ajax({
		    url: rtc.utils.getBaseUrl() + 'api/shareurl',
		    type: "POST",
		    timeout: 2000,
		    data: {
		    	theirname: rtc.mailto.getTheirName(rtc.mailto.form),
		    	baseurl: rtc.utils.getShareBaseUrl( rtc.mailto.form.serializeArray() )
		    },
		    success: function(response) {
		    	rtc.mailto.onShareUrl(response.url, response.path, response.longpath);
		    },
		    error: function(x, t, m) { // On timeout or other error use long url.
				var shareUrl = rtc.utils.shareUrl(rtc.utils.getShareBaseUrl( rtc.mailto.form.serializeArray() ), rtc.mailto.form, RTCVisit, rtc.mailto.getAdditionalShareStr());
				rtc.mailto.onShareUrl(shareUrl);
		    }
		});
	},
	hoverBox: function(t, overrideCss, e) {
		var cssOptions = {
			position: 'absolute',
			top: '-50px',
			color: 'black',
			background: '#d9d9d9',
			width: 200,
			height: 45,
			textAlign: 'left',
			padding: '5px 15px',
			zIndex: 999
		};

		cssOptions = $.extend(cssOptions, overrideCss);

		var box = $('<div/>').addClass('popup').addClass('ui-widget ui-widget-content ui-corner-all').text(t).css(cssOptions);

		if ( !!e ) {
			e = $( e );
			var pos = e.position();
			if ( cssOptions.left == "auto" ) {
				e.closest( "div" ).append( box );
				cssOptions.left = pos.left + ( e.outerWidth() / 2 ) - ( box.outerWidth() / 2 );
				if ( cssOptions.left + box.outerWidth() > e.closest( "div" ).outerWidth() ) {
					cssOptions.left = e.closest( "div" ).outerWidth() - box.outerWidth() + 20;
				}
			}
			if ( cssOptions.top == "auto" ) {
				e.closest( "div" ).append( box );
				cssOptions.top = pos.top - box.outerHeight() - 5;
			}
			box.css(cssOptions);
		}

		return box;
	},
	configureForm: function( form, options ) {
		rtc.mailto.form = form;
		rtc.mailto.mode = "single";

		$.extend( rtc.mailto.options, options );

		form.filter( ":first" ).prepend( // make sure that these fields are only appended to one form (in the case of multi step forms - e.g. Curian's cardmailto-fp.xhtml)
			'<input type="hidden" name="shareUrl" ></input>' +
			'<input type="hidden" name="sharePuid" ></input>' +
			'<input type="hidden" name="referrer_session_name" ></input>' +
			'<input type="hidden" name="campaign" ></input>' );

		form.find('input[name=theirname],input[name=theirfirstname],input[name=theirlastname]').change(rtc.mailto.updateTheirname).keyup(rtc.mailto.updateTheirname);

		$('input[name=sharelink]',rtc.mailto.options.lastStepSelector).click(function() {
			//$(this).select();
			try {
				var i = $(this).get(0);
				i.focus();
				i.setSelectionRange(0, 9999);
			}
			catch ( e ) {}
		});

		if (!Modernizr.touch){
			$('span.ui-button-text:contains(' + rtc.strings.get( "mailtoCardButtonLabels", "sendVia" ) + ')').parent().mouseenter(function() {
				$(this).closest("div").css("position","relative").append(rtc.mailto.hoverBox(rtc.strings.get( "mailtoTooltips", "sendVia" ),rtc.mailto.options.sendViaTooltipCSS,this));
			}).mouseleave(function() {
				$(this).closest("div").find('.popup').remove();
			});
			$('span.ui-button-text:contains(' + rtc.strings.get( "mailtoCardButtonLabels", "sendDirectly" ) + ')').parent().mouseenter(function() {
				$(this).closest("div").css("position","relative").append(rtc.mailto.hoverBox(rtc.strings.get( "mailtoTooltips", "sendDirectly" ), rtc.mailto.options.sendDirectlyTooltipCSS,this));
			}).mouseleave(function() {
				$(this).closest("div").find('.popup').remove();
			});
		}
	}
} } );
window.rtc = window.rtc || {};
$.extend(true, rtc, {

	state: {

		next: function(visit)
		{
			if (visit && visit.currentState && StateEngine[visit.currentState]) {
				return StateEngine[visit.currentState].nextCard(visit);
			}
			return 'START';
		},

		previous: function(visit)
		{
			if (visit && visit.currentState && StateEngine[visit.currentState]) {
				return StateEngine[visit.currentState].prevCard(visit);
			}
			return 'START';
		},

		max: function(state1, state2) {
			var s1 = StateEngine[state1];
			var s2 = StateEngine[state2];
			if (!s1 && !s2) {
				return 'ERROR';
			}
			if (!s1 && s2) {
				return state2;
			}
			if (s1 && !s2) {
				return state1;
			}
			return s1.timelinePos(0, RTCVisit) > s2.timelinePos(0, RTCVisit) ? state1 : state2;
		},

		_set: function( state, dontUpdateMaxState ) {
			if ( state != RTCVisit.currentState ) {
				rtc.utils.analytics.trackEvent( "State", state );
			}
			RTCVisit.currentState = state;
			if ( !dontUpdateMaxState ) {
				RTCVisit.maxState = rtc.state.max(RTCVisit.currentState, RTCVisit.maxState);
			}
		},

		set: function( state, dontUpdateMaxState ) {
			rtc.state._set( state, dontUpdateMaxState );
		},

		startState: function() {
			var state = 'START';
			consoleLog('startState:' + state);
			rtc.state.set(state, true);
			return state;
		},

		timelineTargetState: function(timelineVal) {
			var ret = null;
			$.each(StateEngine, function(name, state) {
				if (null !== state.nextState
						&& state.timelinePos(0, RTCVisit) <= timelineVal
						&& state.timelinePos(100, RTCVisit) > timelineVal) {
					ret = name;
				}
			});
			if (null == ret && StateEngine.END.getTimelinePixelPos(100) <= timelineVal) {
				ret = 'END';
			}
			return ret;
		},

		currentState: function() {
			return RTCVisit.currentState ? RTCVisit.currentState : 'START';
		},

		removeState: function( stateEngine, state, timelineSections ) {
			if ( stateEngine[state] ) {
				var prev = stateEngine[state].prevState;
				var next = stateEngine[state].nextState;
				var width = stateEngine[next].timelineStartPos - stateEngine[state].timelineStartPos;

				stateEngine[prev].nextState = next;
				stateEngine[next].prevState = prev;

				delete stateEngine[state];

				if ( timelineSections ) {
					var count = timelineSections.length;
					var increase = width / count;
					var decrease = width / count;
					var states = { next: [], prev: [] };
					var key = "prev";

					for ( var otherState in stateEngine ) {
						if ( otherState == next ) {
							key = "next";
						}
						else if ( otherState == "END" ) {
							break;
						}

						if ( otherState != "START" && otherState != "ERROR" ) {
							states[key].push( otherState );
						}
					}

					states.next.reverse();

					for ( var i = 0 ; i < states.prev.length ; i++ ) {
						stateEngine[states.prev[i]].timelineStartPos += increase;
						if ( $.inArray( states.prev[i], timelineSections ) > -1 ) {
							increase += width / count;
						}
					}

					for ( var i = 0 ; i < states.next.length ; i++ ) {
						stateEngine[states.next[i]].timelineStartPos -= decrease;
						if ( $.inArray( states.next[i], timelineSections ) > -1 ) {
							decrease += width / count;
						}
					}
				}
			}

			return stateEngine;
		},

		resizeStates: function( stateEngine, states ) {
			// check all states exist
			var allExist = true;

			$.each( states, function( i, state ) {
				if ( typeof stateEngine[state] == "undefined" ) {
					allExist = false;
					return false;
				}
			} );

			if ( allExist ) {
				// get total width of states
				var start = stateEngine[states[0]].timelineStartPos;
				var last = states[states.length - 1];
				var next = stateEngine[last].nextState;

				if ( typeof stateEngine[next] != "undefined" ) {
					var end = stateEngine[next].timelineStartPos;
					var totalWidth = end - start;
					var sectionWidth = totalWidth / states.length;

					$.each( states, function( i, state ) {
						stateEngine[state].timelineStartPos = start + ( i * sectionWidth );
					} );
				}
			}

			return stateEngine;
		},

		buildStateEngine: function( states ) {
			var prevState = states[0].name;
			var timelineStateLength = 100 / ( states.length - 1 ); // use states.length - 1 to allow for the fact that the end state being returned
			var timelineStartPos = 0;

			StateEngine = {
				ERROR: new State( "ERROR", "NotFound", null, null, 0, null )
			};

			$.each( states, function( i, state ) {
				var stateClass = state.name == "END" ? StateEnd : State;

				StateEngine[state.name] = new stateClass(
					state.name,
					state.card,
					states[i + 1] ? states[i + 1].name : "END",
					prevState,
					timelineStartPos,
					null
				);

				timelineStartPos += timelineStateLength;
				prevState = state.name;
			} );
		}
	}

});
window.rtc = window.rtc || {};
$.extend(true, rtc, {

	infmap: {
		lang: function(lang) {

		},
		val: function(letter, key) {
			var lang = rtc.utils.language();		
			if( RTCVisit.presentationType == "seasonal" ) {
				return Infmap[lang][letter][key];
			}
			var type = rtc.utils.homeOrCondo( RTCVisit );
			
			if( type == "condo" && typeof Infmap.condo != "undefined") {
				if( typeof Infmap.condo[lang] == "undefined" ) {
					return Infmap.condo.en[letter][key];
				}
				return Infmap.condo[lang][letter][key];
			}

			if( typeof Infmap.policyholder[lang] == "undefined" ) {
				return Infmap.policyholder.en[letter][key];
			}
			return Infmap.policyholder[lang][letter][key];				
		}
	}
});
var State = Class.extend({
	init: function(name,url,nextState,prevState,timelineStartPos,timelineTooltip, burninAudio){
		this.name = name;
		this.url = url;
		this.nextState = nextState;
		this.prevState = prevState;
		this.timelineStartPos = timelineStartPos;
		this.timelineTooltip = timelineTooltip;
		this.burninAudio = burninAudio;
	},
	getUrl: function(visit){
		return this.url;
	},
	getNextState: function(visit) {
		return this.nextState;
	},
	getPrevState: function(visit) {
		return this.prevState;
	},
	nextCard: function(visit){
		return this.nextState;
	},
	prevCard: function(visit){
		return this.prevState;
	},
	getTimelinePixelPos: function(timelinePercent){
		return Math.round( ( $( "#timeline" ).width() || 770 ) * ( timelinePercent / 100 ) );
	},
	timelinePos: function(percent){
		var start = this.getTimelinePixelPos( this.timelineStartPos );
		var sectionWidth = this.getTimelinePixelPos( StateEngine[this.nextState].timelineStartPos ) - start;
		return start + ( sectionWidth * ( percent / 100 ) );
	},
	percentFromTimeline: function(timelinePixelPos){
		var start = this.getTimelinePixelPos( this.timelineStartPos );
		var sectionWidth = this.getTimelinePixelPos( StateEngine[this.nextState].timelineStartPos ) - start;
		return Math.min( 100, 100 * ( timelinePixelPos - start ) / sectionWidth );
	},
	cardIsShowing: function() {
		return this.url && $('#card' + this.url.replace('-', '') + ':visible').length;
	},
	cardLoaded: function() {},
	stateSelectedOnTimeline: function(visit) {},
	getBurninAudioConfig: function() {
		return this.burninAudio;
	},
	getCampaign	: function( language, config ) {
		return config['campaignId'][language].seasonal;
	},
	getCardUrl: function( cardId, visit, config ) {
		config = config || RTCConfig;
		visit = visit || RTCVisit;
		var prefix = '/card';

		if ( visit.language ) {
			prefix = ( visit.language == "en" ? "" : ( "/" + visit.language ) ) + prefix;
		}

		return config.baseDir + '/cards/seasonal' + prefix + cardId + '.xhtml';
	}
});


var stateToTopic = {
	S_7 	: "hurricane-preparedness",
	S_8 	: "hurricane-preparedness",
	S_9 	: "id-theft-prevention",
	S_10 	: "id-theft-prevention",
	S_11	: "fire-prevention",
	S_12	: "fire-prevention"
};

var StateAdInf = State.extend({
	nextCard: function(visit){
		var next = this.nextState;
		if (visit.topics && -1 != $.inArray(stateToTopic[next], visit.topics)) {
			return next;
		}
		else {
			return StateEngine[next].nextCard(visit);
		}
	},
	prevCard: function(visit){
		visit = visit ? visit : {};
		var prev = this.prevState;
		if (visit.topics && -1 != $.inArray(stateToTopic[prev], visit.topics)) {
			return prev;
		}
		else {
			return StateEngine[prev].prevCard(visit);
		}
	},
	stateSelectedOnTimeline: function(visit) {
		if (!visit.topics) {
			visit.topics = [];
		}
		if (stateToTopic[this.name] && -1 == $.inArray(stateToTopic[this.name], visit.topics)) {
			visit.topics.push(stateToTopic[this.name]);
		}
	}
});

var State7 = StateAdInf.extend({
	cardLoaded: function() {
		consoleLog('cardLoaded 7');
		rtc.player.controls.playBtnPause();
		//$('.card7Dialog.ui-dialog').css('background', '#262525');
		$( ".card7PartialDialog" ).removeClass( "card7PartialDialog" );
	}
});
var State8 = StateAdInf.extend({
	prevCard: function() {
		return this.prevState;
	}
});
var State9 = StateAdInf.extend({});
var State10 = StateAdInf.extend({});
var State11 = StateAdInf.extend({});
var State12 = StateAdInf.extend({
	nextCard: function() {
		return this.nextState;
	}
});
var State13 = StateAdInf.extend({});
var StateEnd = StateAdInf.extend({
	nextCard: function() {
		return this.nextState;
	}
});

var StateEngine = {
	ERROR 	: new State		('ERROR',	'NotFound',	null,	null, 		0, 		null,	null),
	START 	: new State		('START',	null,		'S_7',	'START',	0, 		null,	0),
	S_7 	: new State7	('S_7',		'7',		'S_8',	'START',	15,		null,	-1),
	S_8 	: new State8	('S_8',		'8',		'S_9',	'S_7',		35,		null,	-1),
	S_9 	: new State9	('S_9',		null,		'S_10',	'S_8',		35,		null,	-1),
	S_10 	: new State10	('S_10',	'10',		'S_11',	'S_9',		60,		null,	-1),
	S_11 	: new State11	('S_11',	null,		'S_12',	'S_10',		60,		null,	-1),
	S_12 	: new State12	('S_12',	'12',		'S_13',	'S_11',		80,		null,	-1),
	S_13 	: new State13	('S_13',	null,		'END',	'S_12',		80,		null,	-1),
	END 	: new StateEnd	('END',		'End',		'END',	'S_12',		100,	null,	null)
};window.rtc = window.rtc || {};
window.rtc.homophones = {
	names: {
	}
};window.rtc = window.rtc || {};
window.rtc.videoParams = {
		map : {
			TimeOfDay : function(date, visit) {
				visit = visit || {};
				var letter = 'b';
				if (rtc.utils.isRepeat(visit) && !('true' === visit.detailsConfirmed || true === visit.detailsConfirmed)) {
					return rtc.infmap.val(letter, 'repeat');
				}
				date = date ? date : new Date();
				var day = date.getDay();
				var hour = date.getHours();
				if (hour < 7) {
					return rtc.infmap.val(letter, 'early_morning');
				}
				if (hour < 12) {
					return rtc.infmap.val(letter, 'late_morning');
				}
				if (hour < 17) {
					return rtc.infmap.val(letter, 'afternoon');
				}
				return rtc.infmap.val(letter, 'evening');
			},
			Name: function(visit) {
				var firstname = rtc.utils.getFirstName(visit) || 'none';
				return rtc.videoParams.defaultIf.Null(rtc.infmap.val('b', firstname.toLowerCase().replace( / /g, "_" )), rtc.infmap.val('b', 'none'));
			},
			LeadSource: function(visit) {
				var ret = visit.referral ? rtc.infmap.val('b', 'mutual_friend') : rtc.infmap.val('b', 'none');
				ret = rtc.utils.overlaysDisabled() ? rtc.infmap.val('b', 'none') : ret;
				return ret;
			},
			ExistingCustomer: function(visit, letter) {
				return visit.RISKID ? rtc.infmap.val(letter, 'true') : rtc.infmap.val(letter, 'false');
			}
		},
		has : {
			Referral : function(visit) {
				return visit.referral !== undefined;
			}
		},
		videoParamsToString: function(params) {
			params = params || [];
			params = $.isArray(params) ? params : [ params ];
			var ret = [];
			$.each(params, function(i, el) {
				var item = [];
				$.each(el, function(k, v) {
					item.push(k);
					item.push(v);
				});
				ret.push(item.join());
			});
			// consoleLog(ret);
			return ret;
		},
		videoRequestString: function(params) {

			params = params ? params : [];

			var paramString = 'a=m';
			$.each(params, function(i, e) {
				var letter = 'abcdefghijklmnopqrstuvwxyz'.charAt(i + 1);
				paramString += '&' + letter + '=' + e;
			});

			return paramString;
		},
		propertyIs: {
			EqualBoolean: function(visit, propertyName, required) {
				return visit && (required === visit[propertyName]);
			},

			Equal: function(visit, propertyName, required) {
				var ret = rtc.videoParams.propertyIs.EqualBoolean(visit, propertyName, required) ? 'true'
						: 'false';
				return ret;
			},

			TrueBoolean: function(visit, propertyName) {
				return visit
						&& ('true' == visit[propertyName] || '1' == visit[propertyName] || true === visit[propertyName]);
			},

			True: function(visit, propertyName) {
				var ret = rtc.videoParams.propertyIs.TrueBoolean(visit, propertyName) ? 'true' : 'false';
				return ret;
			}
		},
		defaultIf: {
			Null: function(value, def) {
				var ret = value ? value : def;
				return ret;
			}
		},
		get: function(stateName) {
			var map = rtc.videoParams.map;
			var videoMap = {
				START : function() {
					var leadSource = map.LeadSource( RTCVisit );
					var result = [ {
						a : rtc.infmap.val('a', 'd1_2_introduction'),
						b : map.Name( RTCVisit )
					} ];

					if ( leadSource == rtc.infmap.val('b', 'none') ) {
						result.push( {
							a : rtc.infmap.val('a', 'd4_direct_visitor')
						} );
					}
					else {
						result.push( {
							a : rtc.infmap.val('a', 'd3_lead_source'),
							b : leadSource
						} );
					}

					result.push( {
						a : rtc.infmap.val('a', 'd5_scene_setting')
					} );

					return result;
				},
				S_7 : function() {
					return [ { a : rtc.infmap.val('a', 'd7_hurricane_preparedness') } ]
				},
				S_9 : function() {
					return [ { a : rtc.infmap.val('a', 'd9_identity_theft_protection') } ]
				},
				S_11 : function() {
					return [ { a : rtc.infmap.val('a', 'd11_fire_prevention') } ]
				},
				S_13 : function() {
					return [ {
						a : rtc.infmap.val('a', 'd13_15_closing_message'),
						b : map.ExistingCustomer( RTCVisit, 'b' )
					} ];
				}
			};
			var params = videoMap[stateName];
			if (undefined === params) {
				consoleLog('WARNING: unknown videoParams for state:[' + stateName
						+ '].');
				params = [];
			}
			if ('function' == typeof params) {
				params = params();
			}

			var videoParamsString = rtc.videoParams.videoParamsToString(params);
			consoleLog(videoParamsString);
			return videoParamsString;
		}
	};

var videoRequestString = function(params) {
	return rtc.videoParams.videoRequestString(params);
};

var videoParams = function(stateName) {
	return rtc.videoParams.get(stateName);
};window.rtc = window.rtc || {};
window.rtc.utils = window.rtc.utils || {};
$.extend(true, rtc.utils, {
	vars: {
		skippedToState: null
	},
	skippedToState: function( state ) {
		if ( typeof state != "undefined" ) {
			rtc.utils.vars.skippedToState = state;
		}

		return rtc.utils.vars.skippedToState;
	},
	setVisitData: function( field, value ) {
		RTCVisit[field] = value;
	}
	,
	numberWithCommas: function(x) {
	    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
	}
	,
	hurricaneDeductible: function(visit) {
		visit = visit || {};
		var deductible = $.trim(visit.HURRICANEDED);
		if ('%' == deductible.charAt(deductible.length-1)) {
			return Math.ceil(visit.DWELLINGLIMIT * deductible.substring(0, deductible.length - 1) / 100);
		}
		if ('$' == deductible.charAt(0)) {
			return deductible.substring(1);
		}
		return visit.HURRICANEDED;
	}
	,
	ordinanceLawLimit: function(visit) {
		visit = visit || {};
		var ordinanceLimit = $.trim(visit.ORDINANCE_LAW_LIMIT);
		if ('%' == ordinanceLimit.charAt(ordinanceLimit.length-1)) {
			return Math.ceil(visit.DWELLINGLIMIT * ordinanceLimit.substring(0, ordinanceLimit.length - 1) / 100);
		}
		if ('$' == ordinanceLimit.charAt(0)) {
			return ordinanceLimit.substring(1);
		}
		if (ordinanceLimit.match(/^0\./)) {
			return Math.ceil(visit.DWELLINGLIMIT * ordinanceLimit);
		}
		return visit.ORDINANCE_LAW_LIMIT;
	}
	,
	emptyToZero: function(visit, key) {
		visit = visit || {};
		var ret = visit[key] ? parseInt(visit[key]) : 0;
		return isNaN(ret) ? 0 : ret;
	}
	,
	otherStructuresAmount: function(visit) {
		visit = visit || {};

		return rtc.utils.emptyToZero(visit, 'OTHERSTRUCTURESLIMIT') + rtc.utils.emptyToZero(visit, 'SCHEDULED_STRUCTURES_LIMIT');
	},
	parseEffects: function( effects ) {
		rtc.utils.vars.overlayData = [];
		rtc.timeline.vars.sections = [];

		$( effects ).each( function( i, eff ){
			rtc.utils.parseEffect( i, eff );
		} );

		return rtc.utils.vars.overlayData;
	},
	parseEffect: function( i, eff ) {
		if ( eff.param === "section_start" ) {
			rtc.timeline.vars.sections.push( { start: eff.start, state: rtc.timeline.vars.sectionStates[RTCVisit.currentState][rtc.timeline.vars.sections.length] } );
		}
		else {
			rtc.utils._parseEffect( i, eff );
		}
	},
	getContentUrl: function( config, visit) {
		config = config || {};
		var contentUrl = config.contentUrl ? config.contentUrl : '/rtc/vidgen/vidgen.php';
		var burnerUrl = config.burnerUrl ? config.burnerUrl : contentUrl;
		return rtc.utils.overlaysDisabled() ? burnerUrl : contentUrl;
	},
	isDemo: function( visit ) {
		return ( visit || {} ).DEMO === true;
	},

	allowOverlays: function() {
		return rtc.utils.overlaysDisabled() ? [ "customerLoginBtnOverlay" ] : true;
	},

	getPresentationType: function() {
		return "policy";
	},

	getPromoImageURL: function( id ) {
		var language = RTCVisit.language || "en";

		return "http://rtc-assets.s3.amazonaws.com/securityfirst/side-graphics/" +
			RTCConfig.environmentName + "/" + this.getPresentationType() + "/" + language + "/" + id + ".png";
	},

	showDefaultPromoImage: function() {
		$.get( "/securityfirst/api/promosidegraphic" + this.getPresentationType() + "/getDefault", {}, function( data ) {
			if (null === data) {
				$( "#promo" ).remove();
				return;
			}
			var image = new Image();

			image.onload = function() {
				$( "#promo" ).css( "background-image", "url(" + this.src + ")" );

				if ( this.width > 260 ) {
					$( "#promo" ).addClass( "promo-hoverover" );
				}

				rtc.utils.setPromoTargetURL( data.url )
			};

			image.src = rtc.utils.getPromoImageURL( data.id );


		}, "json" );
	},

	setPromoTargetURL: function( url ) {
		if ( url == "" ) {
			$( "#promo" )
				.removeAttr( "href" )
				.off( "click" )
				.on( "click", function( e ) {
					e.preventDefault();
				} );
		}
		else {
			$( "#promo" )
				.attr( "href", "/securityfirst/promowww.php?url=" + escape( url ) )
				.off( "click" )
				.on( "click", function() {
					rtc.player.controls.pause();
				} );

			rtc.utils.addVisitTrackParameter( $( "#promo" ).parent() );
		}
	},

	getPromoTargetURL: function( id ) {
		$.get( "/securityfirst/api/promosidegraphic" + this.getPresentationType() + "/getTargetURL", { id: id }, function( data ) {
			rtc.utils.setPromoTargetURL( data );
		} );
	},

	getPromoGraphicID: function() {
		return typeof RTCVisit.POLICY_PROMO_SIDE_GRAPHIC == "undefined" ? false : RTCVisit.POLICY_PROMO_SIDE_GRAPHIC;
	},

	showPromoImage: function() {
		var id = this.getPromoGraphicID();

		if ( id === false ) {
			rtc.utils.showDefaultPromoImage();
		}
		else {
			var image = new Image();
			var url = this.getPromoImageURL( id );

			image.onload = function() {
				$( "#promo" ).css( "background-image", "url(" + url + ")" );

				if ( this.width > 260 ) {
					$( "#promo" ).addClass( "promo-hoverover" );
				}

				rtc.utils.getPromoTargetURL( id );
			};
			image.onerror = function() {
				rtc.utils.showDefaultPromoImage();
			};

			image.src = url;
		}
	},
	getCurrentSection: function( time, sections ) {
		time = time || rtc.player.video.status().currentTime;
		sections = sections || rtc.timeline.vars.sections;

		for ( var i = sections.length - 1 ; i > 0 ; i-- ) {
			if ( time >= sections[i].start ) {
				return i;
			}
		}

		return 0;
	},
	findSection: function( state, sections ) {
		sections = sections || rtc.timeline.vars.sections;

		for ( var i = 0 ; i < sections.length ; i++ ) {
			if ( state == sections[i].state ) {
				return i;
			}
		}

		return sections.length; // shouldn't get here
	},
	getSection: function( state, sections ) {
		sections = sections || rtc.timeline.vars.sections;

		var i = this.findSection( state, sections );

		return sections[i] || false;
	},
	getNextSection: function( time, sections ) {
		time = time || rtc.player.video.status().currentTime;
		sections = sections || rtc.timeline.vars.sections;

		var i = this.getCurrentSection( time, sections );

		return sections[i + 1] || "END";
	},
	getPrevSection: function( time, sections ) {
		time = time || rtc.player.video.status().currentTime;
		sections = sections || rtc.timeline.vars.sections;

		var i = this.getCurrentSection( time, sections );

		if ( sections[i].start + 5 < time ) {
			return sections[i];
		}

		return i > 0 ? sections[i - 1] : sections[0];
	},
	gotoSection: function( section ) {
		if ( section === "END" ) {
			rtc.player.hideIE9FlashWarning();
			rtc.player.buffering.resume( true );
			rtc.player.stopPlayer();
			rtc.overlay.hideAll();
			rtc.state.set(rtc.state.next(RTCVisit));
			rtc.card.showCard(RTCVisit.currentState);
			rtc.player.buffering.updateProgressToMarkerPosition();
		}
		else {
			rtc.utils.skippedToState( section.state );

			consoleLog( "gotoSection " + section.state + " : " + section.start );

			if ( rtc.player.video.isFlashActive() ) {
				rtc.player.video( rtc.player.video.status().paused ? "pause" : "play", section.start );
				rtc.player.events.seeking();
			}
			else {
				var percent = ( section.start / rtc.player.video.status().duration ) * 100;

				rtc.player.timelineSeek( percent );
				rtc.timeline.setVideoPercentage( percent )
			}

			RTCVisit.actualState = section.state;
		}
	},
	homeOrCondo: function( visit ) {
		if( visit.POLICYFORM == "HO6" ) {
			return "condo";
		}
		return "home";
	}
});

if ( typeof RTCVisit != "undefined" && RTCVisit.presentationType == "policyholder" ) {
	$.extend( true, rtc.player, {
		controls: {
			rewind: function() {
				consoleLog('rewind');

				if ( RTCVisit.currentState == "END" ) {
					rtc.player.hideIE9FlashWarning();
					rtc.player.buffering.resume( true );
					rtc.player.stopPlayer();
					rtc.overlay.hideAll();
					rtc.state.set(rtc.state.previous(RTCVisit));
					rtc.card.showCard(RTCVisit.currentState);
					rtc.player.buffering.updateProgressToMarkerPosition();
					rtc.timeline.setPosForce(RTCVisit.currentState, 0);
				}
				else {
					rtc.utils.gotoSection( rtc.utils.getPrevSection() );
				}
			},
			fastForward: function() {
				consoleLog('fastForward');

				rtc.utils.gotoSection( rtc.utils.getNextSection() );
			}
		}
	} );
}window.rtc = window.rtc || {};
window.rtc.utils = window.rtc.utils || {};
$.extend(true, rtc.utils, {
	getShareBaseUrl: function() {
		return this.getBaseUrl() + "seasonal/";
	},
	getPromoGraphicID: function() {
		return typeof RTCVisit.SEASONAL_PROMO_SIDE_GRAPHIC == "undefined" ? false : RTCVisit.SEASONAL_PROMO_SIDE_GRAPHIC;
	},
	getPresentationType: function() {
		return "seasonal";
	}
});window.rtc = window.rtc || {};
window.rtc.overlay = window.rtc.overlay || {};
var Overlay = Overlay.extend({
    patchTimings:function() {
        if ( this.name == "showCard7Options" ) {
            if ( RTCVisit.language == "es" ) {
                this.start += 2;
            }

            this.end += 100;
        }
    },
	updateMain : function(time)
	{
		if((time >= this.start && time < this.end) && !this.isShowing && !rtc.player.playerStatus.seeking())
		{
			this.isShowing=true;
			this.startFn(this.name);
		}
		if((time < this.start || time >= this.end) && this.isShowing)
		{
			this.isShowing=false;
			this.endFn(this.name);
			var overlayName = this.name;
			setTimeout(function() {
				$('#overlays').find("#" + overlayName).hide();
			}, 1000);
		}
	}
});

$.extend(true, rtc.overlay, {
	fadeIn7d2: function(name) {
		rtc.overlay.fns['7d2'](name);
		$('#overlays').find('#7d2').rtcFadeIn('fast');
	}
});

$.extend(true, rtc.overlay, {
	audioTracks: {
		"14_discounts_(advertizing-pack-4)_mixdown.mp3": { duration: 59 },
		"coverage_e_(friendly-fresh-fun)_mixdown.mp3": { duration: 89 },
		"Live_Life-Audio_Jungle_01.mp3": { duration: 185 },
		"sfi_audio_intro_(live-life)_mixdown.mp3": { duration: 45 },
		"sfi_coverages_(bright-morning)_mixdown3.mp3": { duration: 140 },
		"scene_16_close(presenting_joy)_mixdown.mp3": { duration: 23 }

	},
	dataForVisit: function(name, visit, overlayData) {
		visit = visit ? visit : {};
		overlayData = overlayData ? overlayData : {};

		var r = {
			"4a_property_address" :function(){ return {address1:visit.PROPERTYADDRESSLINE1, address2:visit.PROPERTYADDRESSCITY}; },
			"5a_coverage_a_dwelling" :function(){ return {amount:visit.DWELLINGLIMIT}; },
			"5b_coverage_a_dwelling_insert_true" :function(){ return {amount:visit.DWELLINGLIMIT, increasedAmount:visit.DWELLINGLIMIT * 1.2}; },
			"5c_ordinance_or_law" :function(){ return {amount:rtc.utils.ordinanceLawLimit(visit)}; },
			"6a_coverage_b_other_structures" :function(){ return {otherStructuresAmount:rtc.utils.otherStructuresAmount(visit)}; },
			"6b_coverage_b_other_structures" :function(){ return {amount:visit.SCREENENCLOSURELIMIT}; },
			"7a_coverage_c_personal_property" :function(){ return {amount:visit.PERSONALPROPERTYLIMIT}; },
			"8_coverage_d_loss_of_use": function(){ return {amount:visit.LOSSOFUSELIMIT}; },
			"13b_deductibles_hurricane_main_percent" :function(){ return {amount:rtc.utils.hurricaneDeductible(visit)}; },
			"13e_deductibles_sinkholes_true" :function(){ return {amount:Math.ceil(visit.DWELLINGLIMIT*0.1)}; },
			"15_a_billing_1_l" :function(){
				return {
					address1:visit.LIEN_HOLDER_1_NAME,
					address2:visit.LIEN_HOLDER_1_ADDRESS_1,
					address3:visit.LIEN_HOLDER_1_ADDRESS_2,
					address4:visit.LIEN_HOLDER_1_ADDRESS_CITY + ', ' + visit.LIEN_HOLDER_1_ADDRESS_STATE,
					address5:visit.LIEN_HOLDER_1_ADDRESS_ZIP
				};
			},
			"referralOverlay": {
				referral_text: visit.referral
			},
			'7d2_antiques': function(){ return {amount:visit.SCHEDULED_ANTIQUES_LIMIT}; },
			'7d2_bikes': function(){ return {amount:visit.SCHEDULED_BIKES_LIMIT}; },
			'7d2_cameras': function(){ return {amount:visit.SCHEDULED_CAMERAS_LIMIT}; },
			'7d2_coins': function(){ return {amount:visit.SCHEDULED_COINS_LIMIT}; },
			'7d2_arts_ex_breakage': function(){ return {amount:visit.SCHEDULED_FINE_ARTS_NO_BREAKAGE_LMIT}; },
			'7d2_arts_inc_breakage': function(){ return {amount:visit.SCHEDULED_FINE_ARTS_BREAKAGE_LIMIT}; },
			'7d2_furs': function(){ return {amount:visit.SCHEDULED_FURS_LIMIT}; },
			'7d2_golf': function(){ return {amount:visit.SCHEDULED_GOLF_LIMIT}; },
			'7d2_guns_collectable': function(){ return {amount:visit.SCHEDULED_GUNS_COLLECTIBLE_LIMIT}; },
			'7d2_guns_fired': function(){ return {amount:visit.SCHEDULED_GUNS_FIRED_LIMIT}; },
			'7d2_jewelry': function(){ return {amount:visit.SCHEDULED_JEWELRY_LIMIT}; },
			'7d2_other': function(){ return {amount:visit.SCHEDULED_OTHER_LIMIT}; },
			'7d2_musical': function(){ return {amount:visit.SCHEDULED_MUSICAL_LIMIT}; },
			'7d2_sports': function(){ return {amount:visit.SCHEDULED_OTHER_SPORTS_LIMIT}; },
			'7d2_silverware': function(){ return {amount:visit.SCHEDULED_SILVERWARE_LIMIT}; },
			'7d2_stamps': function(){ return {amount:visit.SCHEDULED_STAMPS_LIMIT}; }
		};

		var ret = r[name];
		if ('function' == typeof ret) {
			ret = ret();
		}

		return ret;
	},
	fnDataAmount: function(name, datavalsKey){
		datavalsKey = datavalsKey || 'amount';
		var overlayDatavals=rtc.overlay.data(name);
		var overlayAmount=$('#' + name);
		overlayAmount.find("#amount").text(rtc.utils.numberWithCommas(overlayDatavals[datavalsKey]));
	},
	fnDataAmount7d2: function(name, datavalsKey){
		datavalsKey = datavalsKey || 'amount';
		var overlayDatavals=rtc.overlay.data(name);
		var overlayAmount=$('#7d2');
		overlayAmount.find("#amount").text(rtc.utils.numberWithCommas(overlayDatavals[datavalsKey]));
	},
	fns: {
		"4a_property_address": function(name){
			var overlayDatavals=rtc.overlay.data(name);
			var overlayAddress=$('#' + name);
			overlayAddress.find("#address1").text(overlayDatavals.address1);
			overlayAddress.find("#address2").text(overlayDatavals.address2);
		},
		"5a_coverage_a_dwelling": function(name) {rtc.overlay.fnDataAmount(name);},
		"5b_coverage_a_dwelling_insert_true": function(name) {
			rtc.overlay.fnDataAmount(name);
			setTimeout(function() {	rtc.overlay.fnDataAmount(name, 'increasedAmount'); }, 4000);
		},
		"5c_ordinance_or_law": function(name) { rtc.overlay.fnDataAmount(name); },
		"6a_coverage_b_other_structures": function(name){
			var overlayDatavals=rtc.overlay.data(name);
			var overlayAmount=$('#' + name);
			overlayAmount.find("#otherStructuresAmount").text(rtc.utils.numberWithCommas(overlayDatavals.otherStructuresAmount));
		},
		"6b_coverage_b_other_structures": function(name) { rtc.overlay.fnDataAmount(name); },
		"7a_coverage_c_personal_property": function(name) {rtc.overlay.fnDataAmount(name);},
		referralOverlay: function(){
			$('#referralOverlay').html(rtc.overlay.data("referralOverlay").referral_text);
		},
		"8_coverage_d_loss_of_use": function(name) {rtc.overlay.fnDataAmount(name);},
		"13b_deductibles_hurricane_main_percent": function(name) {rtc.overlay.fnDataAmount(name);},
		"13e_deductibles_sinkholes_true": function(name) {rtc.overlay.fnDataAmount(name);},
		"15_a_billing_1_l": function(name) {
			var overlayDatavals=rtc.overlay.data(name);
			var overlayEl=$('#' + name);
			$.each(['address1', 'address2', 'address3', 'address4', 'address5'], function(i, e) {
				overlayEl.find("#" + e).text(overlayDatavals[e]);
			});
		},
		"4b_skip": function() {
		},
		'7d2': function(name) {rtc.overlay.fnDataAmount7d2(name);}
	},
	fnMapShow: {
		preloadCard7: function(name) {
			// noop.
		},
//		preloadCard7: function(name) {
//			RTCVisit.currentState = "S_7";
//			rtc.card.showCardByName("7", function() {} /* don't call rtc.player.controls.playBtnPause()*/);
//			RTCVisit.currentState = "START";
//		},
		showCard7Options: function(name) {
			//$( "#card7" ).dialog( "open" );
			RTCVisit.currentState = "S_7";
			rtc.card.showCardByName("7", function() {} /* don't call rtc.player.controls.playBtnPause()*/);
			RTCVisit.currentState = "START";
		},
		showCard7ContinueBtn: function(name) {
//
		},
		referralOverlay: function(name) {
			rtc.overlay.fns[name]();
			$('#overlays').find('#'+ name).rtcFadeIn(1000);
		},
		contactBtnOverlay : function(){
			$('#contactButtonHighlight').rtcFadeIn('slow');
		},
		shareBtnOverlay : function(){
			$('#mailtoButtonHighlight').rtcFadeIn('slow');
		},
		customerLoginBtnOverlay : function(){
			$('#customer-loginButtonHighlight').rtcFadeIn('slow');
		},
		"4a_property_address": rtc.overlay.fadeInFast,
		"5a_coverage_a_dwelling": rtc.overlay.fadeInFast,
		"5b_coverage_a_dwelling_insert_true": rtc.overlay.fadeInFast,
		"5c_ordinance_or_law": rtc.overlay.fadeInFast,
		"6a_coverage_b_other_structures": rtc.overlay.fadeInFast,
		"6b_coverage_b_other_structures": rtc.overlay.fadeInFast,
		"7a_coverage_c_personal_property": rtc.overlay.fadeInFast,
		"8_coverage_d_loss_of_use": rtc.overlay.fadeInFast,
		"13b_deductibles_hurricane_main_percent": rtc.overlay.fadeInFast,
		"13e_deductibles_sinkholes_true": rtc.overlay.fadeInFast,
		"15_a_billing_1_l": rtc.overlay.fadeInFast,
		"4b_skip": function() {
			if ( rtc.utils.skippedToState() != "S_5" ) {
				var section = rtc.utils.getSection( RTCVisit.maxState );

				if ( section !== false ) {
					rtc.utils.gotoSection( section );
				}
			}
		},
		'7d2_antiques': rtc.overlay.fadeIn7d2,
		'7d2_bikes': rtc.overlay.fadeIn7d2,
		'7d2_cameras': rtc.overlay.fadeIn7d2,
		'7d2_coins': rtc.overlay.fadeIn7d2,
		'7d2_arts_ex_breakage': rtc.overlay.fadeIn7d2,
		'7d2_arts_inc_breakage': rtc.overlay.fadeIn7d2,
		'7d2_furs': rtc.overlay.fadeIn7d2,
		'7d2_golf': rtc.overlay.fadeIn7d2,
		'7d2_guns_collectable': rtc.overlay.fadeIn7d2,
		'7d2_guns_fired': rtc.overlay.fadeIn7d2,
		'7d2_jewelry': rtc.overlay.fadeIn7d2,
		'7d2_other': rtc.overlay.fadeIn7d2,
		'7d2_musical': rtc.overlay.fadeIn7d2,
		'7d2_sports': rtc.overlay.fadeIn7d2,
		'7d2_silverware': rtc.overlay.fadeIn7d2,
		'7d2_stamps': rtc.overlay.fadeIn7d2

	},
	fnMapHide: {
		referralOverlay: rtc.overlay.fade,
		contactBtnOverlay : function(){
			$('#contactButtonHighlight').rtcFadeOut('slow');
		},
		shareBtnOverlay : function(){
			$('#mailtoButtonHighlight').rtcFadeOut('slow');
		},
		customerLoginBtnOverlay : function(){
			$('#customer-loginButtonHighlight').rtcFadeOut('slow');
		},
		preloadCard7: function(name) {
			// noop.
		},
		showCard7Options: function(name) {
			$("#card7").dialog("close");
		},
		"4a_property_address": rtc.overlay.fadeOutFast,
		"5a_coverage_a_dwelling": rtc.overlay.fadeOutFast,
		"5b_coverage_a_dwelling_insert_true": rtc.overlay.fadeOutFast,
		"5c_ordinance_or_law": rtc.overlay.fadeOutFast,
		"6a_coverage_b_other_structures": rtc.overlay.fadeOutFast,
		"6b_coverage_b_other_structures": rtc.overlay.fadeOutFast,
		"7a_coverage_c_personal_property": rtc.overlay.fadeOutFast,
		"8_coverage_d_loss_of_use": rtc.overlay.fadeOutFast,
		"13b_deductibles_hurricane_main_percent": rtc.overlay.fadeOutFast,
		"13e_deductibles_sinkholes_true": rtc.overlay.fadeOutFast,
		"15_a_billing_1_l": rtc.overlay.fadeOutFast,
		"4b_skip": function() {

		},
		'7d2_antiques': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_bikes': function(name) { rtc.overlay.fadeOutFast('7d2', 'fast'); },
		'7d2_cameras': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_coins': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_arts_ex_breakage': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_arts_inc_breakage': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_furs': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_golf': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_guns_collectable': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_guns_fired': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_jewelry': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_other': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_musical': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_sports': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_silverware': function(name) { rtc.overlay.fadeOutFast('7d2'); },
		'7d2_stamps': function(name) { rtc.overlay.fadeOutFast('7d2'); }
	},
	overlayDataForState: function(visit, overlayData, overlays) {
		var ret = {};
		$.each(overlays, function(i, e) {
			ret[e] = rtc.overlay.dataForVisit(e, visit, overlayData);
		});
		return ret;
	},
	params: function(state,visit,overlayData) {
		visit = visit ? visit : {};
		overlayData = overlayData ? overlayData : {};

		var stateToParams = {
		    START: function(visit, overlayData) {
				var overlays = [
				                '4a_property_address',
				                '5a_coverage_a_dwelling',
				                '5b_coverage_a_dwelling_insert_true',
				                '5c_ordinance_or_law',
				                '6a_coverage_b_other_structures',
				                '6b_coverage_b_other_structures',
				                '7a_coverage_c_personal_property',
				                '7a_coverage_c_personal_property',
				                '8_coverage_d_loss_of_use',
				                '13b_deductibles_hurricane_main_percent',
				                '13e_deductibles_sinkholes_true',
				                '15_a_billing_1_l',
				                '7d2_antiques',
				        		'7d2_bikes',
				        		'7d2_cameras',
				        		'7d2_coins',
				        		'7d2_arts_ex_breakage',
				        		'7d2_arts_inc_breakage',
				        		'7d2_furs',
				        		'7d2_golf',
				        		'7d2_guns_collectable',
				        		'7d2_guns_fired',
				        		'7d2_jewelry',
				        		'7d2_other',
				        		'7d2_musical',
				        		'7d2_sports',
				        		'7d2_silverware',
				        		'7d2_stamps'
				                ];
				return rtc.overlay.overlayDataForState(visit, overlayData, overlays)
		    }
		};
		if (stateToParams[state]) {
			return stateToParams[state](visit, overlayData);
		}
		return null;
	}

});
window.rtc = window.rtc || {};
window.rtc.timeline = window.rtc.timeline || {};
$.extend(true, rtc.timeline, {
	vars: {
		sectionAdditionalPadding: "0 8px",
		minSectionFontSize: 12
	},
    slideCurrentState: function( targetState, timelineVal ) {
		if ( !StateEngine[targetState].cardIsShowing() ) {
			if ( 'function' === typeof StateEngine[targetState].slide ) {
				StateEngine[targetState].slide( RTCVisit, timelineVal );
			}
			else {
				var percent = StateEngine[targetState].percentFromTimeline( timelineVal, RTCVisit );
			    rtc.player.timelineSeek( percent );
			    
			    if ( rtc.player.video.isFlashActive() ) {
				    var secondsFromStart = percent * rtc.player.video.status().duration / 100;
				    this.setVideoPositionSeconds( secondsFromStart );
				}
				else {
					this.setVideoPercentage( percent );
				}
			    
			}
		}
	},
	setVideoPositionSeconds: function( secondsFromStart ) {
		consoleLog('rtc.timeline.setVideoPositionSeconds ' + secondsFromStart);
		if (rtc.player.video.status().paused) {
			rtc.player.video("pause", secondsFromStart);
		}
		else {
			rtc.player.video("play", secondsFromStart);
		}
	}
} );
var Infmap = {
	"en":{
		a:{
			"d1_2_introduction":1,
			"d1_3_introduction":2,
			"d11_fire_prevention":3,
			"d13_15_closing_message":4,
			"d3_lead_source":5,
			"d4_direct_visitor":6,
			"d5_scene_setting":7,
			"d7_hurricane_preparedness":8,
			"d9_identity_theft_protection":9
		},
		b:{
			"false":1,
			"true":2,
			"marissa":3,
			"mutual_friend":4,
			"none":5,
			"john":6,
			"michael":7,
			"robert":8,
			"james":9,
			"david":10,
			"richard":11,
			"thomas":12,
			"joseph":13,
			"charles":14,
			"daniel":15,
			"paul":16,
			"mark":17,
			"christopher":18,
			"patricia":19,
			"linda":20,
			"steven":21,
			"jennifer":22,
			"ronald":23,
			"susan":24,
			"kenneth":25,
			"brian":26,
			"edward":27,
			"donald":28,
			"kevin":29,
			"andrew":30,
			"jose":31,
			"timothy":32,
			"barbara":33,
			"jason":34,
			"lisa":35,
			"maria":36,
			"eric":37,
			"peter":38,
			"nancy":39,
			"carol":40,
			"donna":41,
			"carlos":42,
			"dennis":43,
			"frank":44,
			"sharon":45,
			"sandra":46,
			"raymond":47,
			"christine":48,
			"jessica":49,
			"laura":50,
			"patrick":51,
			"angela":52,
			"diane":53,
			"ryan":54,
			"luis":55,
			"amanda":56,
			"margaret":57,
			"cynthia":58,
			"marie":59,
			"diana":60,
			"douglas":61,
			"juan":62,
			"justin":63,
			"kathleen":64,
			"cheryl":65,
			"jorge":66,
			"judith":67,
			"bruce":68,
			"janet":69,
			"joshua":70,
			"nicholas":71,
			"wayne":72,
			"heather":73,
			"jack":74,
			"arthur":75,
			"joan":76,
			"keith":77,
			"carl":78,
			"janice":79,
			"adam":80,
			"amy":81,
			"harold":82,
			"roger":83,
			"victor":84,
			"alan":85,
			"debra":86,
			"walter":87,
			"brenda":88,
			"andrea":89,
			"brandon":90,
			"carmen":91,
			"gerald":92,
			"samuel":93,
			"ann":94,
			"benjamin":95,
			"catherine":96,
			"chris":97,
			"henry":98,
			"ana":99,
			"dorothy":100,
			"lawrence":101,
			"philip":102,
			"shirley":103,
			"ralph":104,
			"virginia":105,
			"albert":106,
			"dale":107,
			"julie":108,
			"lynn":109,
			"craig":110,
			"edwin":111,
			"ricardo":112,
			"steve":113,
			"alexander":114,
			"carolyn":115,
			"lauren":116,
			"louis":117,
			"martin":118,
			"vincent":119,
			"howard":120,
			"joyce":121,
			"miguel":122,
			"aaron":123,
			"barry":124,
			"christian":125,
			"gloria":126,
			"harry":127,
			"jane":128,
			"leonard":129,
			"martha":130,
			"mike":131,
			"sean":132,
			"anna":133,
			"joe":134,
			"kim":135,
			"chad":136,
			"greg":137,
			"dawn":138,
			"francisco":139,
			"jeremy":140,
			"marc":141,
			"teresa":142,
			"antonio":143,
			"emily":144,
			"evelyn":145,
			"frances":146,
			"gail":147,
			"kyle":148,
			"maureen":149,
			"rafael":150,
			"alex":151,
			"fred":152,
			"joel":153,
			"leslie":154,
			"nathan":155,
			"roberto":156,
			"sherry":157,
			"victoria":158,
			"ellen":159,
			"hector":160,
			"norman":161,
			"pedro":162,
			"ruth":163,
			"samantha":164,
			"valerie":165,
			"bradley":166,
			"elaine":167,
			"helen":168,
			"lee":169,
			"monica":170,
			"amber":171,
			"dean":172,
			"eduardo":173,
			"jesse":174,
			"mario":175,
			"nick":176,
			"oscar":177,
			"stacey":178,
			"tiffany":179,
			"claudia":180,
			"dana":181,
			"darlene":182,
			"derek":183,
			"manuel":184,
			"paula":185,
			"rita":186,
			"rodney":187,
			"sheila":188,
			"stanley":189,
			"tina":190,
			"anita":191,
			"doris":192,
			"glen":193,
			"jill":194,
			"jordan":195,
			"julio":196,
			"lois":197,
			"marilyn":198,
			"regina":199,
			"rosa":200,
			"roy":201,
			"shannon":202,
			"tim":203,
			"travis":204,
			"angel":205,
			"carole":206,
			"charlotte":207,
			"don":208,
			"eugene":209,
			"julia":210,
			"kristen":211,
			"melanie":212,
			"rhonda":213,
			"sara":214,
			"stuart":215,
			"theodore":216,
			"alicia":217,
			"bernard":218,
			"brad":219,
			"danny":220,
			"ernest":221,
			"gabriel":222,
			"jacob":223,
			"joann":224,
			"sylvia":225,
			"vanessa":226,
			"vivian":227,
			"alfred":228,
			"marcia":229,
			"marvin":230,
			"ron":231,
			"tom":232,
			"vicki":233,
			"wesley":234,
			"april":235,
			"bill":236,
			"brent":237,
			"charlene":238,
			"eileen":239,
			"erica":240,
			"geraldine":241,
			"javier":242,
			"ken":243,
			"marion":244,
			"nelson":245,
			"norma":246,
			"raul":247,
			"wanda":248,
			"alice":249,
			"arlene":250,
			"carla":251,
			"colleen":252,
			"dan":253,
			"dave":254,
			"franklin":255,
			"ivan":256,
			"jerome":257,
			"jim":258,
			"josephine":259,
			"joy":260,
			"mohamed":261,
			"nathaniel":262,
			"tyler":263,
			"yolanda":264,
			"audrey":265,
			"candace":266,
			"cindy":267,
			"clarence":268,
			"claude":269,
			"connie":270,
			"curtis":271,
			"edgar":272,
			"edna":273,
			"gina":274,
			"gladys":275,
			"irene":276,
			"lloyd":277,
			"neil":278,
			"omar":279,
			"orlando":280,
			"rick":281,
			"rose":282,
			"sonia":283,
			"veronica":284,
			"adrian":285,
			"adrianne":286,
			"andre":287,
			"armando":288,
			"arnold":289,
			"constance":290,
			"deanna":291,
			"duane":292,
			"dwight":293,
			"jesus":294,
			"jodi":295,
			"katie":296,
			"lorraine":297,
			"marsha":298,
			"max":299,
			"megan":300,
			"mildred":301,
			"miriam":302,
			"natalie":303,
			"ramon":304,
			"ray":305,
			"ruben":306,
			"shane":307,
			"troy":308,
			"adrienne":309,
			"alexis":310,
			"allison":311,
			"cesar":312,
			"corey":313,
			"dolores":314,
			"eva":315,
			"fernando":316,
			"grace":317,
			"guy":318,
			"herbert":319,
			"iris":320,
			"jaime":321,
			"jeanette":322,
			"jeffery":323,
			"julian":324,
			"marcus":325,
			"marjorie":326,
			"mathew":327,
			"maurice":328,
			"melvin":329,
			"olga":330,
			"willie":331,
			"yvonne":332,
			"alberto":333,
			"alison":334,
			"annette":335,
			"arturo":336,
			"austin":337,
			"billie":338,
			"calvin":339,
			"caroline":340,
			"casey":341,
			"clyde":342,
			"colin":343,
			"darryl":344,
			"eddie":345,
			"geoffrey":346,
			"jeanne":347,
			"june":348,
			"kent":349,
			"marco":350,
			"pablo":351,
			"peggy":352,
			"sidney":353,
			"tara":354,
			"taylor":355,
			"tracey":356,
			"alvin":357,
			"andres":358,
			"bernice":359,
			"beth":360,
			"cristina":361,
			"damon":362,
			"doug":363,
			"dustin":364,
			"evan":365,
			"floyd":366,
			"francine":367,
			"guillermo":368,
			"harvey":369,
			"herman":370,
			"katrina":371,
			"lance":372,
			"lindsay":373,
			"lydia":374,
			"maritza":375,
			"milton":376,
			"misty":377,
			"natasha":378,
			"paulette":379,
			"rosalie":380,
			"sabrina":381,
			"sheryl":382,
			"ted":383,
			"vladimir":384,
			"agnes":385,
			"alexandra":386,
			"alma":387,
			"angelo":388,
			"cassandra":389,
			"cecil":390,
			"darrell":391,
			"earl":392,
			"edgardo":393,
			"edith":394,
			"emma":395,
			"ernesto":396,
			"gordon":397,
			"jenna":398,
			"johanna":399,
			"leah":400,
			"leon":401,
			"lillian":402,
			"louise":403,
			"luz":404,
			"marlene":405,
			"mary_ann":406,
			"melinda":407,
			"roberta":408,
			"shelly":409,
			"tamara":410,
			"terrence":411,
			"tommy":412,
			"whitney":413,
			"adriana":414,
			"alain":415,
			"alfonso":416,
			"belinda":417,
			"betsy":418,
			"blair":419,
			"blake":420,
			"brendan":421,
			"camille":422,
			"chester":423,
			"clara":424,
			"cory":425,
			"drew":426,
			"eleanor":427,
			"enrique":428,
			"esther":429,
			"gene":430,
			"gerardo":431,
			"glenda":432,
			"grant":433,
			"gustavo":434,
			"gwendolyn":435,
			"hernan":436,
			"hubert":437,
			"jan":438,
			"jimmie":439,
			"kayla":440,
			"kelsey":441,
			"loretta":442,
			"lynda":443,
			"margarita":444,
			"marshall":445,
			"maxine":446,
			"mayra":447,
			"mona":448,
			"neal":449,
			"nora":450,
			"paige":451,
			"pauline":452,
			"pierre":453,
			"rakesh":454,
			"reginald":455,
			"ruby":456,
			"sandy":457,
			"stefanie":458,
			"suzette":459,
			"tatiana":460,
			"toni":461,
			"trevor":462,
			"warren":463,
			"wilfredo":464,
			"zachary":465,
			"alejandro":466,
			"alfredo":467,
			"ali":468,
			"andy":469,
			"angelica":470,
			"angie":471,
			"anibal":472,
			"antoinette":473,
			"becky":474,
			"brandi":475,
			"bridget":476,
			"chelsea":477,
			"diego":478,
			"dominic":479,
			"dwayne":480,
			"ethan":481,
			"florence":482,
			"freddie":483,
			"gerard":484,
			"gilberto":485,
			"gisela":486,
			"hans":487,
			"hilda":488,
			"isaac":489,
			"jared":490,
			"josh":491,
			"kirk":492,
			"laurel":493,
			"leo":494,
			"leroy":495,
			"lewis":496,
			"lissette":497,
			"lourdes":498,
			"lucas":499,
			"lyle":500,
			"mauricio":501,
			"monique":502,
			"myrna":503,
			"olivia":504,
			"pam":505,
			"roland":506,
			"seth":507,
			"stewart":508,
			"sue":509,
			"terrance":510,
			"thelma":511,
			"wallace":512,
			"abraham":513,
			"ahmed":514,
			"aida":515,
			"aimee":516,
			"alisa":517,
			"alvaro":518,
			"amelia":519,
			"ashok":520,
			"bart":521,
			"ben":522,
			"bret":523,
			"cameron":524,
			"delores":525,
			"desiree":526,
			"dewey":527,
			"dina":528,
			"dora":529,
			"doreen":530,
			"ed":531,
			"elba":532,
			"elisa":533,
			"elise":534,
			"elsa":535,
			"garth":536,
			"genevieve":537,
			"georgette":538,
			"georgia":539,
			"gilbert":540,
			"heriberto":541,
			"hope":542,
			"hugh":543,
			"humberto":544,
			"hung":545,
			"ilene":546,
			"irving":547,
			"irwin":548,
			"israel":549,
			"jacques":550,
			"janine":551,
			"jennie":552,
			"jenny":553,
			"joaquin":554,
			"karla":555,
			"kay":556,
			"kelli":557,
			"kenny":558,
			"lana":559,
			"latoya":560,
			"lien":561,
			"lindsey":562,
			"logan":563,
			"lucille":564,
			"lynette":565,
			"marcos":566,
			"marian":567,
			"marina":568,
			"marla":569,
			"marta":570,
			"matt":571,
			"mercedes":572,
			"morgan":573,
			"nadine":574,
			"nichole":575,
			"nina":576,
			"pat":577,
			"pete":578,
			"ramona":579,
			"rex":580,
			"rodger":581,
			"rodrigo":582,
			"rolando":583,
			"ross":584,
			"rudy":585,
			"sam":586,
			"samir":587,
			"saul":588,
			"sergio":589,
			"silvia":590,
			"simon":591,
			"spencer":592,
			"summer":593,
			"tristan":594,
			"venus":595,
			"vince":596,
			"wade":597,
			"wilma":598,
			"winston":599,
			"abdul":600,
			"ada":601,
			"ajay":602,
			"alba":603,
			"althea":604,
			"amir":605,
			"annie":606,
			"anton":607,
			"august":608,
			"awilda":609,
			"beatriz":610,
			"benny":611,
			"bernadette":612,
			"blaine":613,
			"bonita":614,
			"caleb":615,
			"cecilia":616,
			"celia":617,
			"cheri":618,
			"christa":619,
			"claire":620,
			"clayton":621,
			"clement":622,
			"clifford":623,
			"clifton":624,
			"concetta":625,
			"cristian":626,
			"danette":627,
			"daniela":628,
			"desmond":629,
			"dirk":630,
			"elia":631,
			"elias":632,
			"ella":633,
			"elmer":634,
			"emanuel":635,
			"emmanuel":636,
			"federico":637,
			"ferdinand":638,
			"fran":639,
			"gaetano":640,
			"german":641,
			"gil":642,
			"gillian":643,
			"ginger":644,
			"gwen":645,
			"harriet":646,
			"hassan":647,
			"hazel":648,
			"heidi":649,
			"hoa":650,
			"ida":651,
			"ingrid":652,
			"ira":653,
			"irma":654,
			"isai":655,
			"ismael":656,
			"jana":657,
			"janis":658,
			"jerald":659,
			"jeremiah":660,
			"joanna":661,
			"johnathan":662,
			"josefina":663,
			"juergen":664,
			"justina":665,
			"kendall":666,
			"kendra":667,
			"krishna":668,
			"laurence":669,
			"lazaro":670,
			"lenora":671,
			"lilian":672,
			"lorenzo":673,
			"lou":674,
			"lynne":675,
			"maggie":676,
			"malcolm":677,
			"mallory":678,
			"marcelo":679,
			"margie":680,
			"margo":681,
			"marguerite":682,
			"meagan":683,
			"michel":684,
			"milagros":685,
			"minerva":686,
			"morris":687,
			"murray":688,
			"natalia":689,
			"nestor":690,
			"otis":691,
			"owen":692,
			"patrica":693,
			"patrice":694,
			"patsy":695,
			"patti":696,
			"pearl":697,
			"penelope":698,
			"perry":699,
			"petra":700,
			"phong":701,
			"ramesh":702,
			"rhoda":703,
			"rich":704,
			"rogelio":705,
			"roman":706,
			"rosario":707,
			"shelia":708,
			"simone":709,
			"solomon":710,
			"sonja":711,
			"sophia":712,
			"stefan":713,
			"stella":714,
			"teri":715,
			"terrell":716,
			"thao":717,
			"therese":718,
			"valencia":719,
			"van":720,
			"yadira":721,
			"abdiel":722,
			"abel":723,
			"abigail":724,
			"adele":725,
			"ahmad":726,
			"aixa":727,
			"al":728,
			"alaina":729,
			"aleksandr":730,
			"amos":731,
			"andreas":732,
			"antoine":733,
			"arcadio":734,
			"arun":735,
			"aubrey":736,
			"autumn":737,
			"barrie":738,
			"beatrice":739,
			"bettye":740,
			"bibi":741,
			"blanca":742,
			"bo":743,
			"bob":744,
			"boris":745,
			"bradford":746,
			"brianna":747,
			"bruno":748,
			"camilla":749,
			"candice":750,
			"candido":751,
			"cara":752,
			"carmela":753,
			"carroll":754,
			"cassie":755,
			"catalina":756,
			"celeste":757,
			"celso":758,
			"clark":759,
			"claudio":760,
			"clay":761,
			"clinton":762,
			"cody":763,
			"colby":764,
			"colette":765,
			"conrad":766,
			"corinne":767,
			"cuong":768,
			"damaris":769,
			"damian":770,
			"daniella":771,
			"darcy":772,
			"darnell":773,
			"deana":774,
			"debora":775,
			"deloris":776,
			"dena":777,
			"devin":778,
			"dieter":779,
			"dylan":780,
			"edmond":781,
			"edmundo":782,
			"eli":783,
			"elisabeth":784,
			"elliot":785,
			"elma":786,
			"eloise":787,
			"elsie":788,
			"elvin":789,
			"elvis":790,
			"emmett":791,
			"ernestine":792,
			"esmeralda":793,
			"estrella":794,
			"ethel":795,
			"everett":796,
			"felicia":797,
			"felicita":798,
			"francois":799,
			"frederic":800,
			"gabriela":801,
			"geoff":802,
			"gertrude":803,
			"giovanni":804,
			"giuseppe":805,
			"gonzalo":806,
			"graham":807,
			"gretchen":808,
			"hanna":809,
			"hong":810,
			"ignacio":811,
			"isabel":812,
			"jeanine":813,
			"jillian":814,
			"jo_ann":815,
			"joni":816,
			"josue":817,
			"juan_carlos":818,
			"judi":819,
			"karina":820,
			"karyn":821,
			"kate":822,
			"keila":823,
			"kenya":824,
			"kirsten":825,
			"kwame":826,
			"lane":827,
			"latisha":828,
			"leigh":829,
			"len":830,
			"leonardo":831,
			"liam":832,
			"lisette":833,
			"lonnie":834,
			"louie":835,
			"lucy":836,
			"luisa":837,
			"luke":838,
			"lula":839,
			"luther":840,
			"lynnette":841,
			"mae":842,
			"marcelle":843,
			"mariam":844,
			"mariana":845,
			"mariano":846,
			"mariela":847,
			"marwan":848,
			"mary_lou":849,
			"mattie":850,
			"may":851,
			"migdalia":852,
			"miles":853,
			"mindy":854,
			"minh":855,
			"miranda":856,
			"mitesh":857,
			"moises":858,
			"myron":859,
			"nadia":860,
			"naomi":861,
			"nguyen":862,
			"noel":863,
			"nolan":864,
			"patience":865,
			"paulo":866,
			"pavel":867,
			"phu":868,
			"preston":869,
			"quentin":870,
			"rachael":871,
			"rajesh":872,
			"randal":873,
			"randi":874,
			"reynaldo":875,
			"rickey":876,
			"rohan":877,
			"rolf":878,
			"rosanna":879,
			"rosetta":880,
			"samira":881,
			"sanjay":882,
			"santiago":883,
			"sasha":884,
			"scot":885,
			"scotty":886,
			"sebastian":887,
			"sharyn":888,
			"shauna":889,
			"shawna":890,
			"sheldon":891,
			"shelley":892,
			"shelton":893,
			"srinivas":894,
			"sunil":895,
			"sydney":896,
			"syd":897,
			"tamika":898,
			"tania":899,
			"tarek":900,
			"tasha":901,
			"teresita":902,
			"tien":903,
			"tisha":904,
			"tuan":905,
			"vicente":906,
			"vijay":907,
			"vito":908,
			"wendell":909,
			"wilbur":910,
			"willard":911,
			"wilner":912,
			"xavier":913,
			"yvette":914,
			"zaida":915,
			"zulma":916,
			"abdo":917,
			"addison":918,
			"adela":919,
			"adelaide":920,
			"adnan":921,
			"aishwarya":922,
			"alec":923,
			"alejandrina":924,
			"aleshia":925,
			"alessandra":926,
			"alexa":927,
			"alexandre":928,
			"alexandria":929,
			"alexia":930,
			"amira":931,
			"amparo":932,
			"anam":933,
			"anand":934,
			"anastasio":935,
			"angeline":936,
			"anson":937,
			"aramis":938,
			"ariel":939,
			"arielle":940,
			"armand":941,
			"arsenio":942,
			"asha":943,
			"ava":944,
			"axel":945,
			"barney":946,
			"beau":947,
			"bela":948,
			"belen":949,
			"belkis":950,
			"benito":951,
			"bertha":952,
			"bette":953,
			"bharat":954,
			"bin":955,
			"binh":956,
			"birgit":957,
			"blanche":958,
			"bobbi":959,
			"branden":960,
			"brendon":961,
			"britney":962,
			"bryant":963,
			"byron":964,
			"caitlin":965,
			"camila":966,
			"camilo":967,
			"caren":968,
			"carlene":969,
			"carline":970,
			"carlton":971,
			"carmine":972,
			"carolina":973,
			"caron":974,
			"caryl":975,
			"cecelia":976,
			"cecile":977,
			"cedric":978,
			"celestina":979,
			"chantal":980,
			"charmaine":981,
			"chase":982,
			"chau":983,
			"chenise":984,
			"cherita":985,
			"chi":986,
			"chloe":987,
			"christen":988,
			"christiane":989,
			"christie":990,
			"chrystal":991,
			"chuck":992,
			"chy_ching":993,
			"cira":994,
			"coleen":995,
			"concepcion":996,
			"cono":997,
			"corliss":998,
			"corneliu":999,
			"corrine":1000,
			"courtland":1001,
			"cruz":1002,
			"dane":1003,
			"dani":1004,
			"danica":1005,
			"dara":1006,
			"darin":1007,
			"dario":1008,
			"darwin":1009,
			"davina":1010,
			"deandra":1011,
			"deepak":1012,
			"deidre":1013,
			"delia":1014,
			"denzil":1015,
			"dereje":1016,
			"devon":1017,
			"dino":1018,
			"dolan":1019,
			"domenic":1020,
			"dona":1021,
			"doodnauth":1022,
			"dottie":1023,
			"dowan":1024,
			"doyle":1025,
			"dulce":1026,
			"earnest":1027,
			"ebony":1028,
			"edson":1029,
			"efrain":1030,
			"elton":1031,
			"emile":1032,
			"emilio":1033,
			"essie":1034,
			"esteban":1035,
			"estella":1036,
			"eugenio":1037,
			"fabian":1038,
			"fabio":1039,
			"faith":1040,
			"farah":1041,
			"farrell":1042,
			"fausto":1043,
			"fay":1044,
			"fazal":1045,
			"forrest":1046,
			"francesca":1047,
			"frankie":1048,
			"fredric":1049,
			"fresnel":1050,
			"g":1051,
			"ganesh":1052,
			"gardy":1053,
			"garfield":1054,
			"garland":1055,
			"gasim":1056,
			"gavin":1057,
			"gem":1058,
			"georgianna":1059,
			"georgina":1060,
			"gerda":1061,
			"germaine":1062,
			"gerry":1063,
			"ginny":1064,
			"glenna":1065,
			"greta":1066,
			"grover":1067,
			"guadalupe":1068,
			"guido":1069,
			"haoming":1070,
			"harrison":1071,
			"heinz":1072,
			"helena":1073,
			"helga":1074,
			"hien":1075,
			"hoai":1076,
			"hollie":1077,
			"honey":1078,
			"horst":1079,
			"hossam":1080,
			"hunter":1081,
			"ileana":1082,
			"ilia":1083,
			"ilona":1084,
			"imran":1085,
			"indira":1086,
			"inez":1087,
			"inge":1088,
			"ivana":1089,
			"ivonne":1090,
			"ivy":1091,
			"jackson":1092,
			"jairo":1093,
			"jake":1094,
			"jamal":1095,
			"jamey":1096,
			"janae":1097,
			"janene":1098,
			"janeth":1099,
			"jannet":1100,
			"jarod":1101,
			"jarrett":1102,
			"jarrod":1103,
			"jasmine":1104,
			"jayne":1105,
			"jeannine":1106,
			"jemima":1107,
			"jerold":1108,
			"jo":1109,
			"joao":1110,
			"jocelyn":1111,
			"joelle":1112,
			"joey":1113,
			"jofre":1114,
			"johnetta":1115,
			"johnie":1116,
			"johnnie":1117,
			"jong":1118,
			"josias":1119,
			"juli":1120,
			"juliana":1121,
			"juliet":1122,
			"julius":1123,
			"junior":1124,
			"kaitlin":1125,
			"kalpesh":1126,
			"karim":1127,
			"karisa":1128,
			"karissa":1129,
			"kashif":1130,
			"katarina":1131,
			"kaylene":1132,
			"kelley":1133,
			"kelvin":1134,
			"kenton":1135,
			"khalid":1136,
			"khalil":1137,
			"kiersten":1138,
			"kimberlee":1139,
			"kip":1140,
			"kisha":1141,
			"kishore":1142,
			"kyla":1143,
			"kylie":1144,
			"lamar":1145,
			"landon":1146,
			"larhonda":1147,
			"latasha":1148,
			"latrice":1149,
			"lea":1150,
			"leandro":1151,
			"leann":1152,
			"leanna":1153,
			"leena":1154,
			"lena":1155,
			"lenin":1156,
			"lennox":1157,
			"leoncio":1158,
			"leonel":1159,
			"leonora":1160,
			"lester":1161,
			"letha":1162,
			"leticia":1163,
			"li":1164,
			"lidia":1165,
			"lincoln":1166,
			"lindee":1167,
			"lola":1168,
			"lorin":1169,
			"luann":1170,
			"lucia":1171,
			"luciano":1172,
			"lucila":1173,
			"lukasz":1174,
			"madison":1175,
			"magaly":1176,
			"magdalena":1177,
			"maida":1178,
			"malachi":1179,
			"malinda":1180,
			"mamie":1181,
			"manish":1182,
			"manny":1183,
			"manpreet":1184,
			"manuela":1185,
			"marcela":1186,
			"marci":1187,
			"marcial":1188,
			"maribel":1189,
			"marisela":1190,
			"marisol":1191,
			"marlee":1192,
			"marva":1193,
			"marvia":1194,
			"mary_jane":1195,
			"mary_jo":1196,
			"mattew":1197,
			"maynard":1198,
			"melisa":1199,
			"melva":1200,
			"meredith":1201,
			"merle":1202,
			"mickey":1203,
			"milford":1204,
			"mina":1205,
			"mirjam":1206,
			"mirna":1207,
			"mirtha":1208,
			"mohinder":1209,
			"my":1210,
			"myra":1211,
			"nabil":1212,
			"nam":1213,
			"nanette":1214,
			"nasser":1215,
			"ned":1216,
			"nellie":1217,
			"nerline":1218,
			"neville":1219,
			"nevin":1220,
			"nhung":1221,
			"nigel":1222,
			"nikita":1223,
			"nila":1224,
			"nilda":1225,
			"noah":1226,
			"noemi":1227,
			"norberto":1228,
			"obed":1229,
			"olive":1230,
			"omara":1231,
			"osvaldo":1232,
			"oswald":1233,
			"paola":1234,
			"pavan":1235,
			"phil":1236,
			"porfirio":1237,
			"premanand":1238,
			"pricilla":1239,
			"priyanko":1240,
			"pura":1241,
			"qazi":1242,
			"quiana":1243,
			"rae":1244,
			"rainer":1245,
			"raj":1246,
			"raja":1247,
			"rajendra":1248,
			"ramiro":1249,
			"raquel":1250,
			"rasha":1251,
			"rayan":1252,
			"reba":1253,
			"reed":1254,
			"reina":1255,
			"reinaldo":1256,
			"reinhard":1257,
			"rena":1258,
			"renay":1259,
			"reuben":1260,
			"riley":1261,
			"robbi":1262,
			"rocco":1263,
			"rochelle":1264,
			"rod":1265,
			"roderick":1266,
			"rogerio":1267,
			"romulo":1268,
			"rona":1269,
			"ronda":1270,
			"roosevelt":1271,
			"rosalind":1272,
			"roscoe":1273,
			"rose_ann":1274,
			"rose_marie":1275,
			"rosita":1276,
			"roslyn":1277,
			"rossana":1278,
			"roxanna":1279,
			"rusty":1280,
			"ruthann":1281,
			"ryland":1282,
			"ryszard":1283,
			"sadie":1284,
			"said":1285,
			"sal":1286,
			"salil":1287,
			"salim":1288,
			"sallie":1289,
			"salvador":1290,
			"sandor":1291,
			"selena":1292,
			"shanna":1293,
			"shawanda":1294,
			"shaye":1295,
			"shayna":1296,
			"shellie":1297,
			"sheree":1298,
			"sherrel":1299,
			"sherrie":1300,
			"shirvana":1301,
			"sima":1302,
			"skye":1303,
			"soloman":1304,
			"stan":1305,
			"sumeet":1306,
			"suresh":1307,
			"susana":1308,
			"susie":1309,
			"sybil":1310,
			"tam":1311,
			"tamatha":1312,
			"tanisha":1313,
			"taryn":1314,
			"tashia":1315,
			"tera":1316,
			"teressa":1317,
			"thanh":1318,
			"theron":1319,
			"thierry":1320,
			"thurman":1321,
			"tibor":1322,
			"timea":1323,
			"tobias":1324,
			"toby":1325,
			"tonia":1326,
			"trent":1327,
			"trina":1328,
			"tyson":1329,
			"ursula":1330,
			"valery":1331,
			"velda":1332,
			"venes":1333,
			"venkata":1334,
			"vera":1335,
			"vernell":1336,
			"vidal":1337,
			"vikram":1338,
			"viktor":1339,
			"vilma":1340,
			"vinod":1341,
			"viola":1342,
			"violet":1343,
			"vipul":1344,
			"virgilo":1345,
			"vivek":1346,
			"vonnie":1347,
			"wael":1348,
			"waldemar":1349,
			"wale":1350,
			"wally":1351,
			"wayman":1352,
			"wei":1353,
			"werner":1354,
			"weston":1355,
			"wilbert":1356,
			"wilfred":1357,
			"will":1358,
			"willis":1359,
			"wilton":1360,
			"windell":1361,
			"windy":1362,
			"winifred":1363,
			"woodrow":1364,
			"yao":1365,
			"yara":1366,
			"zoraida":1367,
			"zoran":1368,
			"a'drien":1369,
			"abbie":1370,
			"abdalla":1371,
			"abdullah":1372,
			"abe":1373,
			"abed":1374,
			"abhay":1375,
			"abina":1376,
			"abu":1377,
			"adams":1378,
			"adelina":1379,
			"adeline":1380,
			"adia":1381,
			"adolph":1382,
			"adrea":1383,
			"adrien":1384,
			"ahsan":1385,
			"aidan":1386,
			"aileen":1387,
			"aimekae":1388,
			"aira":1389,
			"aishia":1390,
			"aja":1391,
			"aladin":1392,
			"alana":1393,
			"alane":1394,
			"alassandra":1395,
			"alden":1396,
			"alejandra":1397,
			"alesha":1398,
			"aleshka":1399,
			"alessandro":1400,
			"alfonzo":1401,
			"alica":1402,
			"alisha":1403,
			"alissa":1404,
			"alton":1405,
			"alysa":1406,
			"alyson":1407,
			"amancio":1408,
			"ana_gabriela":1409,
			"ana_maria":1410,
			"anabel":1411,
			"anabela":1412,
			"anabella":1413,
			"andrae":1414,
			"andrel":1415,
			"andressa":1416,
			"andretti":1417,
			"andrewlynn":1418,
			"angel_manuel":1419,
			"angelicia":1420,
			"angelina":1421,
			"angelique":1422,
			"angella":1423,
			"angus":1424,
			"ann_lee":1425,
			"ann_marie":1426,
			"annabel":1427,
			"anne_rose":1428,
			"annetta":1429,
			"annmarie":1430,
			"ansley":1431,
			"anthoni":1432,
			"antonette":1433,
			"antonia":1434,
			"arcadia":1435,
			"archibald":1436,
			"archie":1437,
			"ariana":1438,
			"arnaldo":1439,
			"arvin":1440,
			"ashlynn":1441,
			"athena":1442,
			"audra":1443,
			"audrey_gay":1444,
			"augusta":1445,
			"augusto":1446,
			"barb":1447,
			"barbie":1448,
			"barclay":1449,
			"barnard":1450,
			"barrington":1451,
			"bartholomew":1452,
			"barton":1453,
			"bayard":1454,
			"beauty":1455,
			"benard":1456,
			"benette":1457,
			"benzeger":1458,
			"bernado":1459,
			"bernando":1460,
			"bernardo":1461,
			"bernhard":1462,
			"berry":1463,
			"berta":1464,
			"beth_ann":1465,
			"bethany":1466,
			"bettie":1467,
			"bettina":1468,
			"betty_jean":1469,
			"bev":1470,
			"beverlee":1471,
			"bianca":1472,
			"bianka":1473,
			"bilford":1474,
			"billie_jean":1475,
			"billie_jo":1476,
			"bing":1477,
			"bj":1478,
			"blenda":1479,
			"blondie":1480,
			"bobby_joe":1481,
			"bolton":1482,
			"bowman":1483,
			"boyd":1484,
			"braiden":1485,
			"bree":1486,
			"brenan":1487,
			"brenna":1488,
			"brennan":1489,
			"bri":1490,
			"briana":1491,
			"brice":1492,
			"brock":1493,
			"broderick":1494,
			"bronson":1495,
			"brook":1496,
			"bryallan":1497,
			"bud":1498,
			"buford":1499,
			"bunnie":1500,
			"burke":1501,
			"buster":1502,
			"cadence":1503,
			"cailin":1504,
			"camelia":1505,
			"candie":1506,
			"carey":1507,
			"carisa":1508,
			"carissa":1509,
			"carl_david":1510,
			"carl_lee":1511,
			"carl_stephens":1512,
			"carleen":1513,
			"carley":1514,
			"carlito":1515,
			"carlo":1516,
			"carlos_eduardo":1517,
			"carlotta":1518,
			"carmen_raquel":1519,
			"carmin":1520,
			"carmino":1521,
			"carol_anne":1522,
			"carol_jo":1523,
			"carolann":1524,
			"carolyne":1525,
			"carrington":1526,
			"carson":1527,
			"carter":1528,
			"casandra":1529,
			"cash":1530,
			"casique":1531,
			"cassaundra":1532,
			"cassidy":1533,
			"catalin":1534,
			"cathi":1535,
			"cathleen":1536,
			"catriona":1537,
			"cauley":1538,
			"cayle":1539,
			"cebrina":1540,
			"cecilio":1541,
			"cecillia":1542,
			"cederic":1543,
			"ceilia":1544,
			"celestine":1545,
			"celestino":1546,
			"celida":1547,
			"chadley":1548,
			"chadwick":1549,
			"chaka":1550,
			"chancellor":1551,
			"chandler":1552,
			"chang":1553,
			"chantel":1554,
			"charity":1555,
			"charles_glynn":1556,
			"charley":1557,
			"charline":1558,
			"charlotta":1559,
			"charolette":1560,
			"chastity":1561,
			"chevelle":1562,
			"cheyenne":1563,
			"chiquita":1564,
			"chirstopher":1565,
			"chistine":1566,
			"chrisi":1567,
			"christel":1568,
			"christena":1569,
			"chrstopher":1570,
			"cinthia":1571,
			"cj":1572,
			"clairmont":1573,
			"clarice":1574,
			"clarissa":1575,
			"claudet":1576,
			"claudine":1577,
			"cleo":1578,
			"cleveland":1579,
			"cliff":1580,
			"clint":1581,
			"clover":1582,
			"colbert":1583,
			"collins":1584,
			"columbus":1585,
			"connor":1586,
			"conor":1587,
			"constantin":1588,
			"consuelo":1589,
			"coral":1590,
			"coralina":1591,
			"corbin":1592,
			"cortlend":1593,
			"cortne":1594,
			"cortnie":1595,
			"corwin":1596,
			"costantino":1597,
			"cravin":1598,
			"crisanto":1599,
			"crista":1600,
			"cristal":1601,
			"cristhian_javier":1602,
			"cristiana":1603,
			"cullen":1604,
			"cullin":1605,
			"curian":1606,
			"currie":1607,
			"curt":1608,
			"cyrus":1609,
			"d":1610,
			"daisey":1611,
			"dalia":1612,
			"dallas":1613,
			"damion":1614,
			"damond":1615,
			"dandra":1616,
			"danelle":1617,
			"daniel_richard":1618,
			"daniele":1619,
			"danika":1620,
			"danita":1621,
			"danna":1622,
			"dannie":1623,
			"dante":1624,
			"daphne":1625,
			"darby":1626,
			"daren":1627,
			"dari":1628,
			"daria":1629,
			"dariana":1630,
			"darius":1631,
			"darla":1632,
			"darlin":1633,
			"darrel":1634,
			"daveson":1635,
			"davison":1636,
			"davy":1637,
			"dawnmarie":1638,
			"deann":1639,
			"deanne":1640,
			"deb":1641,
			"debbi":1642,
			"deeanna":1643,
			"deedee":1644,
			"delbert":1645,
			"delight":1646,
			"dell":1647,
			"delmar":1648,
			"delora":1649,
			"delroy":1650,
			"demetra":1651,
			"demetrias":1652,
			"demetrius":1653,
			"demetrus":1654,
			"demond":1655,
			"denice":1656,
			"denney":1657,
			"denny":1658,
			"deon":1659,
			"devan":1660,
			"devron":1661,
			"dewhitney":1662,
			"dexter":1663,
			"diamante":1664,
			"dianna":1665,
			"dillard":1666,
			"dimitri":1667,
			"dion":1668,
			"dixie":1669,
			"dollie":1670,
			"dolly":1671,
			"dolorous":1672,
			"domnic":1673,
			"donathan":1674,
			"donato":1675,
			"dong":1676,
			"doni":1677,
			"donita":1678,
			"donnelle":1679,
			"donnis":1680,
			"donohue":1681,
			"donte":1682,
			"dora_lee":1683,
			"doran":1684,
			"doree":1685,
			"dori":1686,
			"dorian":1687,
			"dorthy":1688,
			"dropati":1689,
			"dudley":1690,
			"duffy":1691,
			"duncan":1692,
			"dung":1693,
			"dusty":1694,
			"dyann":1695,
			"echo":1696,
			"edgard":1697,
			"edie":1698,
			"eduard":1699,
			"edurado":1700,
			"edwards":1701,
			"edwine":1702,
			"elan":1703,
			"elana":1704,
			"elbert":1705,
			"ellie":1706,
			"ellis":1707,
			"ellisa":1708,
			"ellsworth":1709,
			"elmar":1710,
			"elroy":1711,
			"elvira":1712,
			"elwin":1713,
			"emelia":1714,
			"emelio":1715,
			"emerson":1716,
			"emery":1717,
			"emilia":1718,
			"emory":1719,
			"equator":1720,
			"erlinda":1721,
			"erma":1722,
			"ernie":1723,
			"erwin":1724,
			"estefani":1725,
			"ester":1726,
			"ethelyn":1727,
			"fabia":1728,
			"fabiano":1729,
			"fabiola":1730,
			"fabrice":1731,
			"fade":1732,
			"faris":1733,
			"felica":1734,
			"feliix":1735,
			"felipe":1736,
			"flora":1737,
			"florencia":1738,
			"florencio":1739,
			"foster":1740,
			"francesco":1741,
			"franchesca":1742,
			"franco":1743,
			"franklyn":1744,
			"galen":1745,
			"garet":1746,
			"gareth":1747,
			"garett":1748,
			"garlanda":1749,
			"garner":1750,
			"garri":1751,
			"gasner":1752,
			"genesis":1753,
			"genie":1754,
			"georges":1755,
			"geraldo":1756,
			"gilda":1757,
			"giles":1758,
			"gilliard":1759,
			"gino":1760,
			"giorgio":1761,
			"giovana":1762,
			"glendoline":1763,
			"gordy":1764,
			"grady":1765,
			"granville":1766,
			"greggory":1767,
			"gregoria":1768,
			"grenetta":1769,
			"gus":1770,
			"gwendoline":1771,
			"hadley":1772,
			"hailey":1773,
			"hal":1774,
			"hamilton":1775,
			"hank":1776,
			"hayden":1777,
			"hayley":1778,
			"heath":1779,
			"heddy":1780,
			"hee":1781,
			"heidi_marie":1782,
			"hein":1783,
			"heinrich":1784,
			"hendrik":1785,
			"henri":1786,
			"henrietta":1787,
			"henrique":1788,
			"herb":1789,
			"herby":1790,
			"herma":1791,
			"hermes":1792,
			"hermine":1793,
			"hermon":1794,
			"hervey":1795,
			"hilary":1796,
			"hillard":1797,
			"hillis":1798,
			"hodges":1799,
			"hogan":1800,
			"holley":1801,
			"homer":1802,
			"hue":1803,
			"hugo":1804,
			"hutch":1805,
			"irivng":1806,
			"irv":1807,
			"irvin":1808,
			"isabella":1809,
			"isaiah":1810,
			"j":1811,
			"jacklyn":1812,
			"jacy":1813,
			"jada":1814,
			"jameson":1815,
			"janey":1816,
			"jann":1817,
			"janna":1818,
			"jannie":1819,
			"jaqlyn":1820,
			"jaquoline":1821,
			"jasmin":1822,
			"javon":1823,
			"jazmin":1824,
			"jazzmine":1825,
			"jean_claude":1826,
			"jean_paul":1827,
			"jean_pierre":1828,
			"jean_robert":1829,
			"jeanett":1830,
			"jeanise":1831,
			"jeannell":1832,
			"jeannette":1833,
			"jeannie":1834,
			"jeanpaul":1835,
			"jefferson":1836,
			"jenel":1837,
			"jennette":1838,
			"jeraldine":1839,
			"jeramy":1840,
			"jerilyn":1841,
			"jermaine":1842,
			"jerrald":1843,
			"jerritt":1844,
			"jesica":1845,
			"jess":1846,
			"jesslyn":1847,
			"jetser":1848,
			"jett":1849,
			"jewel":1850,
			"john_michael":1851,
			"johnathon":1852,
			"johndavid":1853,
			"jolanta":1854,
			"joleen":1855,
			"jolly":1856,
			"jon_paul":1857,
			"jones":1858,
			"jovaughn":1859,
			"judd":1860,
			"juliann":1861,
			"kaleb":1862,
			"kalen":1863,
			"kameron":1864,
			"kandie":1865,
			"kandra":1866,
			"kareem":1867,
			"kareen":1868,
			"kareena":1869,
			"karlene":1870,
			"kassandra":1871,
			"katelyn":1872,
			"kathrine":1873,
			"kathyrn":1874,
			"kaylee":1875,
			"kaytlin":1876,
			"kc_anne":1877,
			"keely":1878,
			"keenan":1879,
			"keisha":1880,
			"kennedy":1881,
			"kenyon":1882,
			"kerine":1883,
			"kermit":1884,
			"kerri_ann":1885,
			"kester":1886,
			"kirkland":1887,
			"kirstie":1888,
			"kirt":1889,
			"klein":1890,
			"klemen":1891,
			"krisitine":1892,
			"lacey":1893,
			"lady":1894,
			"lamont":1895,
			"langston":1896,
			"lanny":1897,
			"lara":1898,
			"larri":1899,
			"lars":1900,
			"lauri":1901,
			"lavern":1902,
			"leanne":1903,
			"lee_ann":1904,
			"lenny":1905,
			"leona":1906,
			"leone":1907,
			"lesleyann":1908,
			"lesli":1909,
			"lessie":1910,
			"lillie":1911,
			"lin":1912,
			"linnette":1913,
			"lionel":1914,
			"lissa":1915,
			"liz":1916,
			"lizbeth":1917,
			"long":1918,
			"lonie":1919,
			"lorain":1920,
			"loran":1921,
			"lorenza":1922,
			"lorissa":1923,
			"lorna":1924,
			"louisiana":1925,
			"lovemore":1926,
			"lowry":1927,
			"lu_ann":1928,
			"lucie":1929,
			"lulu":1930,
			"lyndon":1931,
			"lyndrick":1932,
			"lynett":1933,
			"lynnae":1934,
			"lynnmarie":1935,
			"lynsey":1936,
			"macklin":1937,
			"macy":1938,
			"madeleine":1939,
			"magdy":1940,
			"maggie_jo":1941,
			"magnus":1942,
			"mahogany":1943,
			"major":1944,
			"maleska":1945,
			"malika":1946,
			"mandi":1947,
			"margeret":1948,
			"marggie":1949,
			"margrett":1950,
			"mariah":1951,
			"mariann":1952,
			"mariebeth":1953,
			"marino":1954,
			"marlo":1955,
			"mary_alice":1956,
			"mary_anna":1957,
			"mary_beth":1958,
			"mary_ellen":1959,
			"mary_frances":1960,
			"mary_hall":1961,
			"mary_laura":1962,
			"mary_lee":1963,
			"mary_lynne":1964,
			"mary_virginia":1965,
			"marylee":1966,
			"matthew_philip":1967,
			"maxwell":1968,
			"mcgee":1969,
			"melani":1970,
			"melodee":1971,
			"merida":1972,
			"merrill":1973,
			"merry":1974,
			"michael_lance":1975,
			"michella":1976,
			"mick":1977,
			"mile":1978,
			"millard":1979,
			"milo":1980,
			"mimi":1981,
			"mitchel":1982,
			"miton":1983,
			"mitt":1984,
			"monte":1985,
			"monty":1986,
			"moody":1987,
			"moriah":1988,
			"morise":1989,
			"myrtle":1990,
			"nichola":1991,
			"nirvana":1992,
			"oliver":1993,
			"patircia":1994,
			"paulina":1995,
			"payton":1996,
			"peggie":1997,
			"peggy_jo":1998,
			"penni":1999,
			"percy":2000,
			"perlinda":2001,
			"peyton":2002,
			"phllis":2003,
			"phoebe":2004,
			"phylis":2005,
			"price":2006,
			"prince":2007,
			"priscila":2008,
			"rae_ann":2009,
			"raegan":2010,
			"raelynn":2011,
			"raleigh":2012,
			"ralph_lee":2013,
			"randolf":2014,
			"reagan":2015,
			"rebeca":2016,
			"reggie":2017,
			"renaissance":2018,
			"rhett":2019,
			"richie":2020,
			"rob":2021,
			"robbin":2022,
			"robert_daniel":2023,
			"rockford":2024,
			"rocky":2025,
			"rodolfo":2026,
			"rodrick":2027,
			"rogers":2028,
			"rolan":2029,
			"rolanda":2030,
			"romano":2031,
			"romelia":2032,
			"romeo":2033,
			"romi":2034,
			"rona_denise":2035,
			"ronaldo":2036,
			"rondell":2037,
			"rory":2038,
			"rosalyn":2039,
			"roseline":2040,
			"rosemond":2041,
			"rosevelt":2042,
			"roxann":2043,
			"royce":2044,
			"roz":2045,
			"rozalyn":2046,
			"rueben":2047,
			"rufus":2048,
			"rupert":2049,
			"russ":2050,
			"russel":2051,
			"saint_paul":2052,
			"salomon":2053,
			"salvator":2054,
			"savanna":2055,
			"scarlett":2056,
			"serg":2057,
			"sergia":2058,
			"shady":2059,
			"shantel":2060,
			"sharla":2061,
			"sharlene":2062,
			"sharrel":2063,
			"sharron":2064,
			"sheela":2065,
			"sid":2066,
			"sierra":2067,
			"son":2068,
			"song":2069,
			"sonita":2070,
			"sonnie":2071,
			"stephenson":2072,
			"stephony":2073,
			"sterling":2074,
			"stevens":2075,
			"stonewall":2076,
			"sue_ann":2077,
			"sue_ellen":2078,
			"sunday":2079,
			"susan_mahoney":2080,
			"suzy":2081,
			"tad":2082,
			"tami":2083,
			"teddie":2084,
			"tessa":2085,
			"theo":2086,
			"tifani":2087,
			"tillman":2088,
			"timmy":2089,
			"tobi":2090,
			"tod":2091,
			"tomas":2092,
			"tommie":2093,
			"tori":2094,
			"trenton":2095,
			"trevin":2096,
			"trey":2097,
			"tri":2098,
			"tricia":2099,
			"trixy":2100,
			"tyron":2101,
			"ulysses":2102,
			"val":2103,
			"velma":2104,
			"velvet":2105,
			"ventura":2106,
			"veroncia":2107,
			"virgil":2108,
			"virgina":2109,
			"virginia_sue":2110,
			"vivianne":2111,
			"ward":2112,
			"wendall":2113,
			"wendi":2114,
			"wilburn":2115,
			"wilford":2116,
			"wiliam":2117,
			"wiljo":2118,
			"willoughby":2119,
			"wilmer":2120,
			"wilver":2121,
			"winfrid":2122,
			"winton":2123,
			"wolfgang":2124,
			"wonda":2125,
			"woody":2126,
			"zac":2127,
			"zane":2128,
			"zeb":2129,
			"zoe":2130,
			"agustinus":2131,
			"art":2132,
			"banks":2133,
			"bonnie":2134,
			"butch":2135,
			"cole":2136,
			"colton":2137,
			"dakota":2138,
			"dick":2139,
			"gemma":2140,
			"ian":2141,
			"jackie":2142,
			"jaque":2143,
			"jorie":2144,
			"locke":2145,
			"marty":2146,
			"mitch":2147,
			"nate":2148,
			"nickki":2149,
			"pamela":2150,
			"ronnie":2151,
			"sammy":2152,
			"shelby":2153,
			"suzanne":2154,
			"there":2155,
			"abby":2156,
			"abbi":2157,
			"abbey":2158,
			"abi":2159,
			"adell":2160,
			"allan":2161,
			"allen":2162,
			"allyson":2163,
			"alyssa":2164,
			"andreea":2165,
			"andreia":2166,
			"anne":2167,
			"anne_marie":2168,
			"anthony":2169,
			"ashlea":2170,
			"ashleigh":2171,
			"ashley":2172,
			"ashli":2173,
			"audry":2174,
			"benahmin":2175,
			"bethann":2176,
			"betty":2177,
			"beverley":2178,
			"beverly":2179,
			"billy":2180,
			"bobbie":2181,
			"bobby":2182,
			"bonney":2183,
			"bradd":2184,
			"brandie":2185,
			"brandy":2186,
			"brett":2187,
			"bridgett":2188,
			"bridgette":2189,
			"briget":2190,
			"brigette":2191,
			"bridgit":2192,
			"brittani":2193,
			"brittany":2194,
			"brittney":2195,
			"bryttany":2196,
			"brooke":2197,
			"bryan":2198,
			"brien":2199,
			"candy":2200,
			"cari":2201,
			"carie":2202,
			"carrie":2203,
			"cary":2204,
			"kari":2205,
			"kary":2206,
			"carli":2207,
			"carly":2208,
			"karly":2209,
			"cathie":2210,
			"cathy":2211,
			"kathy":2212,
			"kathi":2213,
			"kathie":2214,
			"cathryn":2215,
			"kathryn":2216,
			"chancelor":2217,
			"chantelle":2218,
			"charlie":2219,
			"charli":2220,
			"chelsey":2221,
			"chelsie":2222,
			"cherie":2223,
			"shari":2224,
			"sheri":2225,
			"sherri":2226,
			"cheryle":2227,
			"christina":2228,
			"kristina":2229,
			"christy":2230,
			"kristi":2231,
			"kristie":2232,
			"kristy":2233,
			"chrisy":2234,
			"clare":2235,
			"claudette":2236,
			"collin":2237,
			"corrie":2238,
			"korey":2239,
			"kori":2240,
			"courtnee":2241,
			"courtney":2242,
			"kourtney":2243,
			"crystal":2244,
			"crystel":2245,
			"kristal":2246,
			"kristel":2247,
			"daisy":2248,
			"danielle":2249,
			"darren":2250,
			"darrin":2251,
			"daryn":2252,
			"dayren":2253,
			"daryl":2254,
			"daryle":2255,
			"dasean":2256,
			"dashawn":2257,
			"debbie":2258,
			"debby":2259,
			"deborah":2260,
			"dee":2261,
			"deeann":2262,
			"deniece":2263,
			"denis":2264,
			"denise":2265,
			"derrick":2266,
			"devonne":2267,
			"dewayne":2268,
			"dwane":2269,
			"dian":2270,
			"diann":2271,
			"dianne":2272,
			"dinah":2273,
			"dione":2274,
			"dionne":2275,
			"dominick":2276,
			"dominique":2277,
			"donn":2278,
			"donnie":2279,
			"dony":2280,
			"dory":2281,
			"dustyn":2282,
			"edd":2283,
			"eddy":2284,
			"edmund":2285,
			"eilleen":2286,
			"elena":2287,
			"elizabeth":2288,
			"elley":2289,
			"ellin":2290,
			"elliott":2291,
			"erich":2292,
			"erick":2293,
			"erik":2294,
			"ericka":2295,
			"erika":2296,
			"erin":2297,
			"erinn":2298,
			"errin":2299,
			"evann":2300,
			"faye":2301,
			"felix":2302,
			"francis":2303,
			"franky":2304,
			"freddy":2305,
			"frederick":2306,
			"fredrick":2307,
			"fredrik":2308,
			"gabriele":2309,
			"gabrielle":2310,
			"gabriella":2311,
			"gale":2312,
			"gayle":2313,
			"garret":2314,
			"garrett":2315,
			"jemma":2316,
			"jema":2317,
			"gema":2318,
			"garry":2319,
			"gary":2320,
			"georg":2321,
			"george":2322,
			"georginna":2323,
			"gilles":2324,
			"giovanna":2325,
			"gisele":2326,
			"giselle":2327,
			"glenn":2328,
			"glyn":2329,
			"glynn":2330,
			"gregg":2331,
			"gregory":2332,
			"guivanny":2333,
			"haley":2334,
			"hannah":2335,
			"hanni":2336,
			"hany":2337,
			"harriette":2338,
			"helene":2339,
			"herry":2340,
			"hilllary":2341,
			"holly":2342,
			"iain":2343,
			"jacalyn":2344,
			"jackelen":2345,
			"jacqueline":2346,
			"jacquelyn":2347,
			"jackquelynn":2348,
			"jacqulyn":2349,
			"jackey":2350,
			"jaclyn":2351,
			"jaimee":2352,
			"jamie":2353,
			"jak":2354,
			"janean":2355,
			"janeen":2356,
			"janele":2357,
			"janelle":2358,
			"jannelle":2359,
			"janette":2360,
			"jani":2361,
			"janie":2362,
			"jannette":2363,
			"jay":2364,
			"jayson":2365,
			"jean":2366,
			"jeane":2367,
			"jeff":2368,
			"jeffrey":2369,
			"jeffry":2370,
			"geofry":2371,
			"jenell":2372,
			"jennipher":2373,
			"jerry":2374,
			"gery":2375,
			"jessi":2376,
			"jessie":2377,
			"jewell":2378,
			"jimmy":2379,
			"joanne":2380,
			"jocelyne":2381,
			"jodie":2382,
			"jody":2383,
			"johannah":2384,
			"jonathon":2385,
			"jonathan":2386,
			"johnny":2387,
			"jolene":2388,
			"johnell":2389,
			"jonel":2390,
			"jonnel":2391,
			"jordyn":2392,
			"juancarlos":2393,
			"juaneta":2394,
			"juanita":2395,
			"judy":2396,
			"julianne":2397,
			"julieanne":2398,
			"julliette":2399,
			"justine":2400,
			"justyn":2401,
			"kaitlyn":2402,
			"caryn":2403,
			"karen":2404,
			"karl":2405,
			"karolyn":2406,
			"katharine":2407,
			"katherine":2408,
			"katheryn":2409,
			"kathliene":2410,
			"katy":2411,
			"kati":2412,
			"caty":2413,
			"catie":2414,
			"kaye":2415,
			"k":2416,
			"kellie":2417,
			"kelly":2418,
			"kimberley":2419,
			"kimberli":2420,
			"kimberlie":2421,
			"kimberly":2422,
			"kymberly":2423,
			"kimm":2424,
			"kipp":2425,
			"kody":2426,
			"kolby":2427,
			"kris":2428,
			"krista":2429,
			"krysta":2430,
			"kristian":2431,
			"krystian":2432,
			"kristin":2433,
			"kristyn":2434,
			"krystin":2435,
			"kristine":2436,
			"kristofer":2437,
			"kristopher":2438,
			"krystal":2439,
			"kurt":2440,
			"kurtis":2441,
			"lacy":2442,
			"lakeisha":2443,
			"lakesha":2444,
			"lamarr":2445,
			"larry":2446,
			"latonia":2447,
			"latonya":2448,
			"laurie":2449,
			"lorri":2450,
			"lorrie":2451,
			"lory":2452,
			"lori":2453,
			"leeann":2454,
			"lesley":2455,
			"lew":2456,
			"lilly":2457,
			"lily":2458,
			"lonny":2459,
			"lora":2460,
			"loren":2461,
			"luanne":2462,
			"madelyn":2463,
			"mandy":2464,
			"marcella":2465,
			"marcie":2466,
			"marcy":2467,
			"marianne":2468,
			"maribelle":2469,
			"marjory":2470,
			"marline":2471,
			"mary":2472,
			"maryann":2473,
			"maryanne":2474,
			"marylou":2475,
			"maryelou":2476,
			"maryem":2477,
			"mat":2478,
			"matthew":2479,
			"meghan":2480,
			"mehdi":2481,
			"mehdy":2482,
			"melissa":2483,
			"mellisa":2484,
			"melodie":2485,
			"melody":2486,
			"meridith":2487,
			"meridyth":2488,
			"michal":2489,
			"micheal":2490,
			"mikel":2491,
			"michele":2492,
			"michelle":2493,
			"mickie":2494,
			"mitchell":2495,
			"mohammad":2496,
			"mohammed":2497,
			"moli":2498,
			"mollie":2499,
			"molly":2500,
			"monika":2501,
			"nancie":2502,
			"naomie":2503,
			"nathalia":2504,
			"nathalie":2505,
			"nathanael":2506,
			"nelly":2507,
			"nicholl":2508,
			"nicole":2509,
			"nicoll":2510,
			"nickey":2511,
			"nicki":2512,
			"nikki":2513,
			"nickolas":2514,
			"nicolas":2515,
			"noell":2516,
			"noelle":2517,
			"ola":2518,
			"olaa":2519,
			"pamala":2520,
			"pattie":2521,
			"patty":2522,
			"pennie":2523,
			"penny":2524,
			"philipp":2525,
			"phillip":2526,
			"phoebie":2527,
			"phyllis":2528,
			"prabhu":2529,
			"prabu":2530,
			"priscilla":2531,
			"rachal":2532,
			"rachel":2533,
			"raeann":2534,
			"raeanne":2535,
			"raegann":2536,
			"regan":2537,
			"ralf":2538,
			"randall":2539,
			"randolph":2540,
			"randy":2541,
			"raney":2542,
			"rani":2543,
			"rebecca":2544,
			"rebeckah":2545,
			"rebekah":2546,
			"reece":2547,
			"reese":2548,
			"renata":2549,
			"renatta":2550,
			"rene":2551,
			"renea":2552,
			"renee":2553,
			"renie":2554,
			"renne":2555,
			"renny":2556,
			"rickie":2557,
			"ricky":2558,
			"robby":2559,
			"robbie":2560,
			"robin":2561,
			"robyn":2562,
			"robynn":2563,
			"rodd":2564,
			"rolland":2565,
			"ronee":2566,
			"roni":2567,
			"ronny":2568,
			"rony":2569,
			"ronnald":2570,
			"rosemarie":2571,
			"rosemary":2572,
			"rosmarie":2573,
			"roseann":2574,
			"roseanne":2575,
			"rossanna":2576,
			"roxanne":2577,
			"rubin":2578,
			"rudolf":2579,
			"rudolph":2580,
			"russell":2581,
			"sabita":2582,
			"sabitha":2583,
			"sally":2584,
			"saly":2585,
			"salvatore":2586,
			"sarah":2587,
			"scott":2588,
			"shanon":2589,
			"shantell":2590,
			"shawn":2591,
			"shaun":2592,
			"shelbi":2593,
			"sherley":2594,
			"sherly":2595,
			"sonny":2596,
			"sunny":2597,
			"sonya":2598,
			"staci":2599,
			"stacie":2600,
			"stacy":2601,
			"stanly":2602,
			"stefany":2603,
			"stephanie":2604,
			"stephenie":2605,
			"stephan":2606,
			"stefen":2607,
			"stephen":2608,
			"subash":2609,
			"subhash":2610,
			"susann":2611,
			"susanne":2612,
			"suzann":2613,
			"suzan":2614,
			"tamarah":2615,
			"tammy":2616,
			"tammie":2617,
			"tanya":2618,
			"tedd":2619,
			"teddy":2620,
			"terri":2621,
			"terry":2622,
			"theresa":2623,
			"tiffani":2624,
			"tiffanie":2625,
			"tin":2626,
			"tinh":2627,
			"todd":2628,
			"tonny":2629,
			"tony":2630,
			"tonya":2631,
			"traci":2632,
			"tracie":2633,
			"tracy":2634,
			"trisha":2635,
			"trudi":2636,
			"trudy":2637,
			"tyrone":2638,
			"vallerie":2639,
			"vallery":2640,
			"vannessa":2641,
			"verline":2642,
			"verlyn":2643,
			"vickie":2644,
			"vicky":2645,
			"wendy":2646,
			"william":2647,
			"willliam":2648,
			"willy":2649,
			"yolonda":2650,
			"zach":2651,
			"zak":2652,
			"zackary":2653,
			"zoey":2654,
			"zoie":2655,
			"forest":2656
		},
		c:{
			"mutual_friend":1,
			"none":2
		}

	}
,
	"es":{
		a:{
			"d1_2_introduction":1,
			"d11_fire_prevention":2,
			"d13_15_closing_message":3,
			"d3_lead_source":4,
			"d4_direct_visitor":5,
			"d5_scene_setting":6,
			"d7_hurricane_preparedness":7,
			"d9_identity_theft_protection":8
		},
		b:{
			"false":1,
			"true":2,
			"mutual_friend":3,
			"none":4
		}

	}
};
window.rtc = window.rtc || {};
$.extend( true, rtc, {
	main: {
		playerAndBandwidthReady: function() {
			if ( rtc.bandwidth !== null && rtc.playerReady) {
				if ( StateEngine.START.getUrl( RTCVisit ) === null ) {
					rtc.player.playVideo({state:rtc.state.startState(), firstPlay:true});
				}
				else {
					// perform the repeat visior check before maxState is set
					rtc.utils.isRepeat( RTCVisit );
					rtc.card.showCard( "START" );
					$( "#timeline" ).slider( "disable" );
					$( "#skipforward,#skipback" ).attr( "disabled", "disabled" );
				}
			}
		},
		initPlayer: function() {
			rtc.player.init( function() {
				rtc.playerReady = true;
				rtc.main.playerAndBandwidthReady();
			}, RTCConfig.playerOptions );
		},
		hdToggleHandler: function() {
			if ( rtc.utils.isHD() ) {
				$( "#policyDisclaimer br" ).remove();
			}
			else if ( RTCVisit.RISKID && !RTCVisit.DEMO && $( "#policyDisclaimer" ).length ) {
				$( "#policyDisclaimer" ).html( $( "#policyDisclaimer" ).html().replace( /\. /, ".<br/> " ) );
			}
		}
	},
	card: {
		toggleSideCardHandler: function( name ) {
			if ( name == "customer-login" ) {
				window.open(RTCConfig.baseDir + "/customerloginwww.php?v=" + RTCVisit.name + '&s=' + RTCVisit.currentState, '_blank');
			}
			else if ( name == "download-app" ) {
				window.open(RTCConfig.baseDir + "/downloadappwww.php?v=" + RTCVisit.name + '&s=' + RTCVisit.currentState, '_blank');
			}
			else {
				return false;
			}

			return true;
		}
	}
} );

$(document).ready(function() {
	rtc.utils.checkCookiesEnabled();
	rtc.timeline.render( rtc.strings.get( "main", "timeline" ) );
	rtc.hd.css( "presentation_hq.css", "securityfirst_hq.css" );
	rtc.hd.addEventListener( rtc.main.hdToggleHandler );
	rtc.utils.bandwidth.check( rtc.main.playerAndBandwidthReady );
	rtc.timeline.configureTimelineMarker();

	$( "#playpause" ).click( function() {
		if ( $( "#cardStartStep1" ).is( ":visible" ) ) {
			$( "#cardStartSampleBtn" ).click();
		}
	} );
	$('.sideButtons').show().delay(500).animate({opacity:1},500);
	$('.sideButtons li').click(function() {
		if ( $( this ).attr( "disabled" ) != "disabled" ) {
			rtc.card.toggleSideCard($(this).attr('class'));
		}
	});
	rtc.session.save();
	rtc.session.setViewerProfile(RTCVisit);

	$( "#policyDisclaimer" ).show();

	if ( RTCVisit.startState ) {
		RTCVisit.currentState = RTCVisit.startState;
	}

	$('#termsLink').click(function() {
		window.open(RTCConfig.baseDir + "/termswww.php?v=" + RTCVisit.name, '_blank');
		return false;
	});
	$('#privacyPolicyLink').click(function() {
		window.open(RTCConfig.baseDir + "/privacyPolicywww.php?v=" + RTCVisit.name, '_blank');
		return false;
	});
	$('#HelpLink').click(function() {
		var language = RTCVisit.language || "en";
		rtc.utils.track("view.help");
		rtc.utils.popitup(RTCConfig.baseDir + ( language == "en" ? "" : "/es" ) + "/help.html");
		//window.open(RTCConfig.baseDir + "/privacyPolicywww.php?v=" + RTCVisit.name, '_blank');
		return false;
	});
	$('#language_buttons').show();

	rtc.utils.loadPromoImages();

	rtc.utils.vars.imagesToPreload = [ ];
	if ('seasonal' == RTCVisit.presentationType) {
		rtc.utils.vars.imagesToPreload.push("/securityfirst/css/images/seasonal/card7/card7-btns.jpg");
	}

	rtc.main.initPlayer();

	// load geoip without blocking.
	$.ajax({url:'//js.maxmind.com/js/geoip.js', dataType:'script', cache:true});

	rtc.logging.domLoadComplete();

	rtc.utils.showCorporateFirewallDetected();

	if ( rtc.state.documentReady ) {
		rtc.state.documentReady();
	}

	var fonts = [ "whitneybold", "whitneymedium" ];

	if ( RTCVisit.presentationType == "seasonal" ) {
		fonts.push( "freestyle_scriptregular" );
	}

	rtc.player.documentReady();
	rtc.app.documentReady();
	rtc.timeline.documentReady();
	rtc.utils.preloadFonts( fonts, function() {
		rtc.timeline.render();
	} );
	rtc.utils.documentReady();
	rtc.utils.showPromoImage();
	rtc.overlay.documentReady();
});