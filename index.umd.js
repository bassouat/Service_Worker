!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).appcachePolyfill={})}(this,function(e){function t(e){var t=new Uint8Array(e);return Array.from(t).map(function(e){return e.toString(16).padStart(2,"0")}).join("")}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n,o=function(){function e(e,t){void 0===e&&(e="keyval-store"),void 0===t&&(t="keyval"),this.storeName=t,this._dbp=new Promise(function(r,n){var o=indexedDB.open(e,1);o.onerror=function(){return n(o.error)},o.onsuccess=function(){return r(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(t)}})}return e.prototype._withIDBStore=function(e,t){var r=this;return this._dbp.then(function(n){return new Promise(function(o,i){var u=n.transaction(r.storeName,e);u.oncomplete=function(){return o()},u.onabort=u.onerror=function(){return i(u.error)},t(u.objectStore(r.storeName))})})},e}();function i(){return n||(n=new o),n}function u(e,t,r){return void 0===r&&(r=i()),r._withIDBStore("readwrite",function(r){r.put(t,e)})}var s=function(e){try{return Promise.resolve(function(e,t){var r;return void 0===t&&(t=i()),t._withIDBStore("readonly",function(t){r=t.get(e)}).then(function(){return r.result})}(e)).then(function(e){return e||{}})}catch(e){return Promise.reject(e)}};function a(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var c,f=function(e,t){try{return Promise.resolve(caches.open(e)).then(function(e){return Promise.resolve(Promise.all(t.map(function(t){try{var r=new Request(t,{credentials:"include",headers:[["X-Use-Fetch","true"]],redirect:"manual"});return Promise.resolve(a(function(){return Promise.resolve(fetch(r)).then(function(t){var n;function o(e){if(n)return e;if(404!==t.status&&410!==t.status)throw new Error("Bad status: "+t.status)}var i=t.headers.get("Cache-Control");if(!i||!i.includes("no-store")){var u=function(){if(200===t.status)return Promise.resolve(e.put(r,t)).then(function(){c.add(r.url),n=1})}();return u&&u.then?u.then(o):o(u)}})},function(){return Promise.resolve(caches.match(t)).then(function(r){var n=function(){if(r)return Promise.resolve(e.put(t,r)).then(function(){})}();if(n&&n.then)return n.then(function(){})})}))}catch(e){return Promise.reject(e)}}))).then(function(){})})}catch(e){return Promise.reject(e)}};e.init=function(e){void 0===e&&(e={});try{c=new Set;var n=document.documentElement.getAttribute("manifest"),o=function(){if(n&&"serviceWorker"in navigator){var o=new URL(n,location.href).href,i=a(function(){return Promise.resolve(function(e){try{var n=new Request(e,{credentials:"include",headers:[["X-Use-Fetch","true"]]});return Promise.resolve(fetch(n)).then(function(n){function o(){return Promise.resolve(n.text()).then(function(n){return Promise.resolve(function(e){try{var r=(new TextEncoder).encode(e);return Promise.resolve(crypto.subtle.digest("SHA-256",r)).then(t)}catch(e){return Promise.reject(e)}}(e+n)).then(function(t){return Promise.resolve(s("ManifestURLToHashes")).then(function(o){for(var i=o[e]||new Map,a=0,c=Object.keys(i);a<c.length;a++)if(c[a]===t)return t;var h=function(e,t){void 0===t&&(t=location.href);for(var n,o={cache:[],fallback:{},network:[],settings:[],unknown:[]},i=e.split("\n").map(function(e){return e.trim()}),u=new Map([["CACHE:","cache"],["NETWORK:","network"],["FALLBACK:","fallback"],["SETTINGS:","settings"]]),s="cache",a=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,void 0):void 0}}(e))){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(i);!(n=a()).done;){var c=n.value;if(!c.startsWith("CACHE MANIFEST")&&!c.startsWith("#")&&""!==c)if(c.endsWith(":"))s=u.get(c)||"unknown";else if("fallback"===s){var f=c.split(/\s+/,2).map(function(e){return new URL(e,t).href});o.fallback[f[0]]=f[1]}else"network"===s&&"*"===c?o.network.push("*"):o[s].push(new URL(c,t).href)}return o}(n);return i.set(t,h),o[e]=i,Promise.resolve(u("ManifestURLToHashes",o)).then(function(){return Promise.resolve(function(e,t,r){try{var n=Object.values(r.fallback),o=r.cache.concat(n);return Promise.resolve(s("PageURLToManifestURL")).then(function(n){for(var i=0,u=Object.entries(n);i<u.length;i++){var s=u[i];e===s[1]&&o.push(s[0])}return Promise.resolve(f(t,o)).then(function(){return r})})}catch(e){return Promise.reject(e)}}(e,t,h)).then(function(){return t})})})})})}if(404===n.status||410===n.status)return null;if(200!==n.status)throw new Error("Manifest response status: ${manifestResponse.status}.");var i=n.headers.get("date"),a=function(){if(i){var t=new Date(i).valueOf(),r=Date.now()-t,o=function(){if(r>864e5){var t=new Request(e,{cache:"reload",credentials:"include",headers:[["X-Use-Fetch","true"]]});return Promise.resolve(fetch(t)).then(function(e){n=e})}}();if(o&&o.then)return o.then(function(){})}}();return a&&a.then?a.then(o):o()})}catch(e){return Promise.reject(e)}}(o)).then(function(t){function r(){e.cachePopulatedCallback&&e.cachePopulatedCallback(Array.from(c))}var n=t?Promise.resolve(function(e,t){try{return Promise.resolve(s("PageURLToManifestURL")).then(function(r){return r[location.href]=e,Promise.resolve(Promise.all([u("PageURLToManifestURL",r),f(t,[location.href])])).then(function(){})})}catch(e){return Promise.reject(e)}}(o,t)).then(function(){}):Promise.resolve(function(e){try{return Promise.resolve(s("PageURLToManifestURL")).then(function(t){for(var r=0,n=Object.entries(t);r<n.length;r++){var o=n[r];e===o[1]&&delete t[o[0]]}return Promise.resolve(s("ManifestURLToHashes")).then(function(r){for(var n=0,o=Object.keys(r);n<o.length;n++){var i=o[n];e===i&&delete r[i]}return Promise.resolve(u("PageURLToManifestURL",t)).then(function(){return Promise.resolve(u("ManifestURLToHashes",r)).then(function(){})})})})}catch(e){return Promise.reject(e)}}(o)).then(function(){});return n&&n.then?n.then(r):r()})},function(e){console.error("Unable to update App Cache associations:",e)});if(i&&i.then)return i.then(function(){})}}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}});
//# sourceMappingURL=index.umd.js.map