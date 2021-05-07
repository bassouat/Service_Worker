function e(e){var t=new Uint8Array(e);return Array.from(t).map(function(e)
    {return e.toString(16).padStart(2,"0")}).join("")}function t(e,t)
    {(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}
    var r,n=function(){function e(e,t){void 0===e&&(e="keyval-store"),void 0===t&&(t="keyval"),this.storeName=t,this._dbp=new Promise(function(r,n){var o=indexedDB.open(e,1);o.onerror=function(){return n(o.error)},o.onsuccess=function(){return r(o.result)},o.onupgradeneeded=function(){o.result.createObjectStore(t)}})}return e.prototype._withIDBStore=function(e,t){var r=this;return this._dbp.then(function(n){return new Promise(function(o,i){var u=n.transaction(r.storeName,e);u.oncomplete=function(){return o()},u.onabort=u.onerror=function(){return i(u.error)},t(u.objectStore(r.storeName))})})},e}();function o(){return r||(r=new n),r}function i(e,t,r)
    {return void 0===r&&(r=o()),r._withIDBStore("readwrite",function(r){r.put(t,e)})}var u=function(e){try{return Promise.resolve(function(e,t){var r;return void 0===t&&(t=o()),t._withIDBStore("readonly",function(t){r=t.get(e)}).then(function(){return r.result})}(e)).then(function(e){return e||{}})}catch(e){return Promise.reject(e)}};function a(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var s,c=function(e,t)
    {try{return Promise.resolve(caches.open(e)).then(function(e){return Promise.resolve(Promise.all(t.map(function(t){try{var r=new Request(t,{credentials:"include",headers:[["X-Use-Fetch","true"]],redirect:"manual"});return Promise.resolve(a(function(){return Promise.resolve(fetch(r)).then(function(t){var n;function o(e){if(n)return e;if(404!==t.status&&410!==t.status)throw new Error("Bad status: "+t.status)}var i=t.headers.get("Cache-Control");if(!i||!i.includes("no-store")){var u=function(){if(200===t.status)return Promise.resolve(e.put(r,t)).then(function(){s.add(r.url),n=1})}();return u&&u.then?u.then(o):o(u)}})},function(){return Promise.resolve(caches.match(t)).then(function(r){var n=function(){if(r)return Promise.resolve(e.put(t,r)).then(function(){})}();if(n&&n.then)return n.then(function(){})})}))}catch(e){return Promise.reject(e)}}))).then(function(){})})}catch(e){return Promise.reject(e)}},f=function(r){void 0===r&&(r={});try{s=new Set;var n=document.documentElement.getAttribute("manifest"),o=function(){if(n&&"serviceWorker"in navigator){var o=new URL(n,location.href).href,f=a(function(){return Promise.resolve(function(r){try{var n=new Request(r,{credentials:"include",headers:[["X-Use-Fetch","true"]]});return Promise.resolve(fetch(n)).then(function(n){function o(){return Promise.resolve(n.text()).then(function(n){return Promise.resolve(function(t){try{var r=(new TextEncoder).encode(t);return Promise.resolve(crypto.subtle.digest("SHA-256",r)).then(e)}catch(e){return Promise.reject(e)}}(r+n)).then(function(e){return Promise.resolve(u("ManifestURLToHashes")).then(function(o){for(var a=o[r]||new Map,s=0,f=Object.keys(a);s<f.length;s++)if(f[s]===e)return e;var h=function(e,r){void 0===r&&(r=location.href);for(var n,o={cache:[],fallback:{},network:[],settings:[],unknown:[]},i=e.split("\n").map(function(e){return e.trim()}),u=new Map([["CACHE:","cache"],["NETWORK:","network"],["FALLBACK:","fallback"],["SETTINGS:","settings"]]),a="cache",s=function(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,void 0):void 0}}(e))){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(i);!(n=s()).done;){var c=n.value;if(!c.startsWith("CACHE MANIFEST")&&!c.startsWith("#")&&""!==c)if(c.endsWith(":"))a=u.get(c)||"unknown";else if("fallback"===a){var f=c.split(/\s+/,2).map(function(e){return new URL(e,r).href});o.fallback[f[0]]=f[1]}else"network"===a&&"*"===c?o.network.push("*"):o[a].push(new URL(c,r).href)}return o}(n);return a.set(e,h),o[r]=a,Promise.resolve(i("ManifestURLToHashes",o)).then(function(){return Promise.resolve(function(e,t,r){try{var n=Object.values(r.fallback),o=r.cache.concat(n);return Promise.resolve(u("PageURLToManifestURL")).then(function(n){for(var i=0,u=Object.entries(n);i<u.length;i++){var a=u[i];e===a[1]&&o.push(a[0])}return Promise.resolve(c(t,o)).then(function(){return r})})}catch(e){return Promise.reject(e)}}(r,e,h)).then(function(){return e})})})})})}if(404===n.status||410===n.status)return null;if(200!==n.status)throw new Error("Manifest response status: ${manifestResponse.status}.");var a=n.headers.get("date"),s=function(){if(a){var e=new Date(a).valueOf(),t=Date.now()-e,o=function(){if(t>864e5){var e=new Request(r,{cache:"reload",credentials:"include",headers:[["X-Use-Fetch","true"]]});return Promise.resolve(fetch(e)).then(function(e){n=e})}}();if(o&&o.then)return o.then(function(){})}}();return s&&s.then?s.then(o):o()})}catch(e){return Promise.reject(e)}}(o)).then(function(e){function t(){r.cachePopulatedCallback&&r.cachePopulatedCallback(Array.from(s))}var n=e?Promise.resolve(function(e,t){try{return Promise.resolve(u("PageURLToManifestURL")).then(function(r){return r[location.href]=e,Promise.resolve(Promise.all([i("PageURLToManifestURL",r),c(t,[location.href])])).then(function(){})})}catch(e){return Promise.reject(e)}}(o,e)).then(function(){}):Promise.resolve(function(e){try{return Promise.resolve(u("PageURLToManifestURL")).then(function(t){for(var r=0,n=Object.entries(t);r<n.length;r++){var o=n[r];e===o[1]&&delete t[o[0]]}return Promise.resolve(u("ManifestURLToHashes")).then(function(r){for(var n=0,o=Object.keys(r);n<o.length;n++){var u=o[n];e===u&&delete r[u]}return Promise.resolve(i("PageURLToManifestURL",t)).then(function(){return Promise.resolve(i("ManifestURLToHashes",r)).then(function(){})})})})}catch(e){return Promise.reject(e)}}(o)).then(function(){});return n&&n.then?n.then(t):t()})},function(e){console.error("Unable to update App Cache associations:",e)});if(f&&f.then)return f.then(function(){})}}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}; export{f as init};
    //# sourceMappingURL=index.modern.js.map
    