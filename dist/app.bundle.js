webpackJsonp([0],[,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),r(6),r(7);var o=r(0),a=n(o),u=r(1),i=n(u),c=r(23),s=n(c),l=r(2),p=n(l),f=r(3),d=n(f),m=r(27),g=n(m),h=r(29),b=n(h),$=r(30),y=n($),v=r(8),w=(n(v),r(11)),P=(n(w),r(16)),x=(n(P),r(20)),j=(n(x),r(17)),E=(n(j),r(18)),A=(n(E),r(19)),O=(n(A),r(15)),S=(n(O),r(14)),R=(n(S),r(10)),T=(n(R),r(13)),_=(n(T),r(9)),k=(n(_),r(12));n(k);t.default=a.default.module("app",[p.default,s.default,i.default,d.default]).service("API",y.default).controller("AppController",b.default).config(g.default).run(["$location","$rootScope",function(e,t){"ngInject";t.$on("$routeChangeSuccess",function(e,r,n){r.hasOwnProperty("$$route")&&(t.title=r.$$route.title)})}])},function(e,t){},function(e,t){},function(e,t,r){e.exports=r.p+"/public/images/grey-linen.jpg"},function(e,t,r){e.exports=r.p+"/public/images/glow-arrow-small.png"},function(e,t,r){e.exports=r.p+"/public/images/glow-arrow-big.png"},function(e,t,r){e.exports=r.p+"/public/images/grey-tile.jpg"},function(e,t,r){e.exports=r.p+"/public/images/m-icon-small.png"},function(e,t,r){e.exports=r.p+"/public/images/neon-arrow-small.png"},function(e,t,r){e.exports=r.p+"/public/images/neon-arrow-big.png"},function(e,t,r){e.exports=r.p+"/public/images/ux.jpg"},function(e,t,r){e.exports=r.p+"/public/images/bug.jpg"},function(e,t,r){e.exports=r.p+"/public/images/dry.jpg"},function(e,t,r){e.exports=r.p+"/public/images/help.jpg"},function(e,t,r){e.exports=r.p+"/public/images/me.jpg"},function(e,t,r){e.exports=r.p+"/public/images/culture.jpg"},,,function(e,t,r){"use strict";r(24),e.exports="ngResource"},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/**
 * @license AngularJS v1.6.9
 * (c) 2010-2018 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(e,t){function r(e){return null!=e&&""!==e&&"hasOwnProperty"!==e&&i.test("."+e)}function o(e,n){if(!r(n))throw u("badmember",'Dotted member path "@{0}" is invalid.',n);for(var o=n.split("."),a=0,i=o.length;a<i&&t.isDefined(e);a++){var c=o[a];e=null!==e?e[c]:void 0}return e}function a(e,r){r=r||{},t.forEach(r,function(e,t){delete r[t]});for(var n in e)!e.hasOwnProperty(n)||"$"===n.charAt(0)&&"$"===n.charAt(1)||(r[n]=e[n]);return r}var u=t.$$minErr("$resource"),i=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;t.module("ngResource",["ng"]).info({angularVersion:"1.6.9"}).provider("$resource",function(){var e=/^https?:\/\/\[[^\]]*][^\/]*/,r=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},delete:{method:"DELETE"}}},this.$get=["$http","$log","$q","$timeout",function(i,c,s,l){function p(e,t){this.template=e,this.defaults=g({},r.defaults,t),this.urlParams={}}function f(e,t,f,w){function P(e,r){var n={};return r=g({},t,r),m(r,function(t,r){y(t)&&(t=t(e)),n[r]=t&&t.charAt&&"@"===t.charAt(0)?o(e,t.substr(1)):t}),n}function x(e){return e.resource}function j(e){a(e||{},this)}var E=new p(e,w);return f=g({},r.defaults.actions,f),j.prototype.toJSON=function(){var e=g({},this);return delete e.$promise,delete e.$resolved,delete e.$cancelRequest,e},m(f,function(e,t){var r=!0===e.hasBody||!1!==e.hasBody&&/^(POST|PUT|PATCH)$/i.test(e.method),o=e.timeout,p=$(e.cancellable)?e.cancellable:E.defaults.cancellable;o&&!v(o)&&(c.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete e.timeout,o=null),j[t]=function(c,f,$,v){function w(e){W.catch(d),null!==T&&T.resolve(e)}var A,O,S,R={};switch(arguments.length){case 4:S=v,O=$;case 3:case 2:if(!y(f)){R=c,A=f,O=$;break}if(y(c)){O=c,S=f;break}O=f,S=$;case 1:y(c)?O=c:r?A=c:R=c;break;case 0:break;default:throw u("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length)}var T,_,k=this instanceof j,q=k?A:e.isArray?[]:new j(A),M={},C=e.interceptor&&e.interceptor.response||x,U=e.interceptor&&e.interceptor.responseError||void 0,D=!!S,I=!!U;m(e,function(e,t){switch(t){default:M[t]=h(e);break;case"params":case"isArray":case"interceptor":case"cancellable":}}),!k&&p&&(T=s.defer(),M.timeout=T.promise,o&&(_=l(T.resolve,o))),r&&(M.data=A),E.setUrlParams(M,g({},P(A,e.params||{}),R),e.url);var W=i(M).then(function(r){var o=r.data;if(o){if(b(o)!==!!e.isArray)throw u("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",t,e.isArray?"array":"object",b(o)?"array":"object",M.method,M.url);if(e.isArray)q.length=0,m(o,function(e){"object"===(void 0===e?"undefined":n(e))?q.push(new j(e)):q.push(e)});else{var i=q.$promise;a(o,q),q.$promise=i}}return r.resource=q,r},function(e){return e.resource=q,s.reject(e)});return W=W.finally(function(){q.$resolved=!0,!k&&p&&(q.$cancelRequest=d,l.cancel(_),T=_=M.timeout=null)}),W=W.then(function(e){var t=C(e);return(O||d)(t,e.headers,e.status,e.statusText),t},D||I?function(e){return D&&!I&&W.catch(d),D&&S(e),I?U(e):s.reject(e)}:void 0),k?W:(q.$promise=W,q.$resolved=!1,p&&(q.$cancelRequest=w),q)},j.prototype["$"+t]=function(e,r,n){y(e)&&(n=r,r=e,e={});var o=j[t].call(this,e,this,r,n);return o.$promise||o}}),j}var d=t.noop,m=t.forEach,g=t.extend,h=t.copy,b=t.isArray,$=t.isDefined,y=t.isFunction,v=t.isNumber,w=t.$$encodeUriQuery,P=t.$$encodeUriSegment;return p.prototype={setUrlParams:function(t,r,n){var o,a,i=this,c=n||i.template,s="",l=i.urlParams=Object.create(null);m(c.split(/\W/),function(e){if("hasOwnProperty"===e)throw u("badname","hasOwnProperty is not a valid parameter name.");!new RegExp("^\\d+$").test(e)&&e&&new RegExp("(^|[^\\\\]):"+e+"(\\W|$)").test(c)&&(l[e]={isQueryParamValue:new RegExp("\\?.*=:"+e+"(?:\\W|$)").test(c)})}),c=c.replace(/\\:/g,":"),c=c.replace(e,function(e){return s=e,""}),r=r||{},m(i.urlParams,function(e,t){o=r.hasOwnProperty(t)?r[t]:i.defaults[t],$(o)&&null!==o?(a=e.isQueryParamValue?w(o,!0):P(o),c=c.replace(new RegExp(":"+t+"(\\W|$)","g"),function(e,t){return a+t})):c=c.replace(new RegExp("(/?):"+t+"(\\W|$)","g"),function(e,t,r){return"/"===r.charAt(0)?r:t+r})}),i.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/"),c=c.replace(/\/\.(?=\w+($|\?))/,"."),t.url=s+c.replace(/\/(\\|%5C)\./,"/."),m(r,function(e,r){i.urlParams[r]||(t.params=t.params||{},t.params[r]=e)})}},f}]})}(window,window.angular)},,,function(e,t,r){"use strict";function n(e,t,r){"ngInject";e.when("/",{title:"Mike",templateUrl:"index",controller:"AppController",controllerAs:"app"}).otherwise({redirectTo:"/"}),t.html5Mode({enabled:!0,requireBase:!1}),r.defaults.headers.common["X-CSRF-Token"]=(0,a.default)("meta[name=csrf-token]").attr("content")}n.$inject=["$routeProvider","$locationProvider","$httpProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var o=r(4),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},,function(e,t,r){"use strict";function n(e,t,r){"ngInject";function n(){for(var e=[90,100,110,500,1e3],t=[];o--;){var r=Math.floor(Math.random()*(o+1));if(t.push(e[r]),e.splice(r,1),5==t.length)return o=5,t}}var o=5;e.glow=!1,e.flicker=function(){r.when(n()).then(function(r){e.test=r,e.glow=!0,t(function(){e.glow=!1,t(function(){e.glow=!0,t(function(){e.glow=!1,t(function(){e.glow=!0,t(function(){e.glow=!1},r[4])},r[3])},r[2])},r[1])},r[0])})}}n.$inject=["$scope","$timeout","$q"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict"}],[5]);