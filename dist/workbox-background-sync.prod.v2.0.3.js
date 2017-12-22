/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

this.workbox = this.workbox || {};
(function (exports) {
'use strict';

class LogGroup{constructor(){this._logs=[],this._childGroups=[],this._isFallbackMode=!1;const a=/Firefox\/(\d*)\.\d*/.exec(navigator.userAgent);if(a)try{const b=parseInt(a[1],10);55>b&&(this._isFallbackMode=!0);}catch(a){this._isFallbackMode=!0;}/Edge\/\d*\.\d*/.exec(navigator.userAgent)&&(this._isFallbackMode=!0);}addPrimaryLog(a){this._primaryLog=a;}addLog(a){this._logs.push(a);}addChildGroup(a){0===a._logs.length||this._childGroups.push(a);}print(){return 0===this._logs.length&&0===this._childGroups.length?void this._printLogDetails(this._primaryLog):void(this._primaryLog&&(this._isFallbackMode?this._printLogDetails(this._primaryLog):console.groupCollapsed(...this._getLogContent(this._primaryLog))),this._logs.forEach((a)=>{this._printLogDetails(a);}),this._childGroups.forEach((a)=>{a.print();}),this._primaryLog&&!this._isFallbackMode&&console.groupEnd())}_printLogDetails(a){const b=a.logFunc?a.logFunc:console.log;b(...this._getLogContent(a));}_getLogContent(a){let b=a.message;this._isFallbackMode&&'string'==typeof b&&(b=b.replace(/%c/g,''));let c=[b];return!this._isFallbackMode&&a.colors&&(c=c.concat(a.colors)),a.args&&(c=c.concat(a.args)),c}}

function isDevBuild(){return`dev`==`prod`}

self.workbox=self.workbox||{},self.workbox.LOG_LEVEL=self.workbox.LOG_LEVEL||{none:-1,verbose:0,debug:1,warn:2,error:3};const LIGHT_GREY=`#bdc3c7`; const DARK_GREY=`#7f8c8d`; const LIGHT_GREEN=`#2ecc71`; const LIGHT_YELLOW=`#f1c40f`; const LIGHT_RED=`#e74c3c`; const LIGHT_BLUE=`#3498db`;class LogHelper{constructor(){this._defaultLogLevel=isDevBuild()?self.workbox.LOG_LEVEL.debug:self.workbox.LOG_LEVEL.warn;}log(a){this._printMessage(self.workbox.LOG_LEVEL.verbose,a);}debug(a){this._printMessage(self.workbox.LOG_LEVEL.debug,a);}warn(a){this._printMessage(self.workbox.LOG_LEVEL.warn,a);}error(a){this._printMessage(self.workbox.LOG_LEVEL.error,a);}_printMessage(a,b){if(this._shouldLogMessage(a,b)){const c=this._getAllLogGroups(a,b);c.print();}}_getAllLogGroups(a,b){const c=new LogGroup,d=this._getPrimaryMessageDetails(a,b);if(c.addPrimaryLog(d),b.error){const a={message:b.error,logFunc:console.error};c.addLog(a);}const e=new LogGroup;if(b.that&&b.that.constructor&&b.that.constructor.name){const a=b.that.constructor.name;e.addLog(this._getKeyValueDetails('class',a));}return b.data&&('object'!=typeof b.data||b.data instanceof Array?e.addLog(this._getKeyValueDetails('additionalData',b.data)):Object.keys(b.data).forEach((a)=>{e.addLog(this._getKeyValueDetails(a,b.data[a]));})),c.addChildGroup(e),c}_getKeyValueDetails(a,b){return{message:`%c${a}: `,colors:[`color: ${LIGHT_BLUE}`],args:b}}_getPrimaryMessageDetails(a,b){let c,d;a===self.workbox.LOG_LEVEL.verbose?(c='Info',d=LIGHT_GREY):a===self.workbox.LOG_LEVEL.debug?(c='Debug',d=LIGHT_GREEN):a===self.workbox.LOG_LEVEL.warn?(c='Warn',d=LIGHT_YELLOW):a===self.workbox.LOG_LEVEL.error?(c='Error',d=LIGHT_RED):void 0;let e=`%c🔧 %c[${c}]`;const f=[`color: ${LIGHT_GREY}`,`color: ${d}`];let g;return'string'==typeof b?g=b:b.message&&(g=b.message),g&&(g=g.replace(/\s+/g,' '),e+=`%c ${g}`,f.push(`color: ${DARK_GREY}; font-weight: normal`)),{message:e,colors:f}}_shouldLogMessage(a,b){if(!b)return!1;let c=this._defaultLogLevel;return self&&self.workbox&&'number'==typeof self.workbox.logLevel&&(c=self.workbox.logLevel),c===self.workbox.LOG_LEVEL.none||a<c?!1:!0}}var logHelper = new LogHelper;

var deprecate = ((a,b,c,d)=>{Object.prototype.hasOwnProperty.call(a,b)&&(logHelper.warn(`${b} is deprecated; use ${c} instead`,{Context:d}),a[c]=a[b]);});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var idb=createCommonjsModule(function(a){'use strict';(function(){function b(a){return Array.prototype.slice.call(a)}function c(a){return new Promise(function(b,c){a.onsuccess=function(){b(a.result);},a.onerror=function(){c(a.error);};})}function d(a,b,d){var e,f=new Promise(function(f,g){e=a[b].apply(a,d),c(e).then(f,g);});return f.request=e,f}function e(a,b,c){var e=d(a,b,c);return e.then(function(a){return a?new k(a,e.request):void 0})}function f(a,b,c){c.forEach(function(c){Object.defineProperty(a.prototype,c,{get:function(){return this[b][c]},set:function(a){this[b][c]=a;}});});}function g(a,b,c,e){e.forEach(function(e){e in c.prototype&&(a.prototype[e]=function(){return d(this[b],e,arguments)});});}function h(a,b,c,d){d.forEach(function(d){d in c.prototype&&(a.prototype[d]=function(){return this[b][d].apply(this[b],arguments)});});}function i(a,b,c,d){d.forEach(function(d){d in c.prototype&&(a.prototype[d]=function(){return e(this[b],d,arguments)});});}function j(a){this._index=a;}function k(a,b){this._cursor=a,this._request=b;}function l(a){this._store=a;}function m(a){this._tx=a,this.complete=new Promise(function(b,c){a.oncomplete=function(){b();},a.onerror=function(){c(a.error);},a.onabort=function(){c(a.error);};});}function n(a,b,c){this._db=a,this.oldVersion=b,this.transaction=new m(c);}function o(a){this._db=a;}f(j,'_index',['name','keyPath','multiEntry','unique']),g(j,'_index',IDBIndex,['get','getKey','getAll','getAllKeys','count']),i(j,'_index',IDBIndex,['openCursor','openKeyCursor']),f(k,'_cursor',['direction','key','primaryKey','value']),g(k,'_cursor',IDBCursor,['update','delete']),['advance','continue','continuePrimaryKey'].forEach(function(a){a in IDBCursor.prototype&&(k.prototype[a]=function(){var b=this,d=arguments;return Promise.resolve().then(function(){return b._cursor[a].apply(b._cursor,d),c(b._request).then(function(a){return a?new k(a,b._request):void 0})})});}),l.prototype.createIndex=function(){return new j(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new j(this._store.index.apply(this._store,arguments))},f(l,'_store',['name','keyPath','indexNames','autoIncrement']),g(l,'_store',IDBObjectStore,['put','add','delete','clear','get','getAll','getKey','getAllKeys','count']),i(l,'_store',IDBObjectStore,['openCursor','openKeyCursor']),h(l,'_store',IDBObjectStore,['deleteIndex']),m.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},f(m,'_tx',['objectStoreNames','mode']),h(m,'_tx',IDBTransaction,['abort']),n.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},f(n,'_db',['name','version','objectStoreNames']),h(n,'_db',IDBDatabase,['deleteObjectStore','close']),o.prototype.transaction=function(){return new m(this._db.transaction.apply(this._db,arguments))},f(o,'_db',['name','version','objectStoreNames']),h(o,'_db',IDBDatabase,['close']),['openCursor','openKeyCursor'].forEach(function(a){[l,j].forEach(function(c){c.prototype[a.replace('open','iterate')]=function(){var c=b(arguments),d=c[c.length-1],e=this._store||this._index,f=e[a].apply(e,c.slice(0,-1));f.onsuccess=function(){d(f.result);};};});}),[j,l].forEach(function(a){a.prototype.getAll||(a.prototype.getAll=function(a,b){var c=this,d=[];return new Promise(function(e){c.iterateCursor(a,function(a){return a?(d.push(a.value),void 0!==b&&d.length==b?void e(d):void a.continue()):void e(d)});})});});var p={open:function(a,b,c){var e=d(indexedDB,'open',[a,b]),f=e.request;return f.onupgradeneeded=function(a){c&&c(new n(f.result,a.oldVersion,f.transaction));},e.then(function(a){return new o(a)})},delete:function(a){return d(indexedDB,'deleteDatabase',[a])}};a.exports=p,a.exports.default=a.exports;})();});

class IDBHelper{constructor(a,b,c){if(a==void 0||b==void 0||c==void 0)throw Error('name, version, storeName must be passed to the constructor.');this._name=a,this._version=b,this._storeName=c;}_getDb(){return this._dbPromise?this._dbPromise:(this._dbPromise=idb.open(this._name,this._version,(a)=>{a.createObjectStore(this._storeName);}).then((a)=>a),this._dbPromise)}close(){return this._dbPromise?this._dbPromise.then((a)=>{a.close(),this._dbPromise=null;}):void 0}put(a,b){return this._getDb().then((c)=>{const d=c.transaction(this._storeName,'readwrite'),e=d.objectStore(this._storeName);return e.put(b,a),d.complete})}delete(a){return this._getDb().then((b)=>{const c=b.transaction(this._storeName,'readwrite'),d=c.objectStore(this._storeName);return d.delete(a),c.complete})}get(a){return this._getDb().then((b)=>b.transaction(this._storeName).objectStore(this._storeName).get(a))}getAllValues(){return this._getDb().then((a)=>a.transaction(this._storeName).objectStore(this._storeName).getAll())}getAllKeys(){return this._getDb().then((a)=>a.transaction(this._storeName).objectStore(this._storeName).getAllKeys())}}

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

let putResponse=(()=>{var a=asyncToGenerator(function*({hash:a,idbObject:b,response:c,idbQDb:d}){b.response={headers:JSON.stringify([...c.headers]),status:c.status,body:yield c.blob()},d.put(a,b);});return function(){return a.apply(this,arguments)}})();
let getResponse=(()=>{var a=asyncToGenerator(function*({id:a,dbName:b}){const c=new IDBHelper(b,1,'QueueStore'),d=yield c.get(a);return d&&d.response?d.response:null});return function(){return a.apply(this,arguments)}})();

const maxAge=432000000;
const defaultDBName='bgQueueSyncDB';
const broadcastMessageAddedType='BACKGROUND_REQUESTED_ADDED';
const broadcastMessageFailedType='BACKGROUND_REQUESTED_FAILED';
const defaultQueueName='DEFAULT_QUEUE';
const tagNamePrefix='SW_BACKGROUND_QUEUE_TAG_';
const broadcastMeta='SW_BACKGROUND_SYNC_QUEUE';
const allQueuesPlaceholder='QUEUES';
const replayAllQueuesTag='SW_BACKGROUND_QUEUE_TAG_REPLAY';

let getQueueableRequest=(()=>{var a=asyncToGenerator(function*({request:a,config:b}){let c={config:b,metadata:{creationTimestamp:Date.now()},request:{url:a.url,headers:JSON.stringify([...a.headers]),mode:a.mode,method:a.method,redirect:a.redirect,credentials:a.credentials}};const d=yield a.text();return 0<d.length&&(c.request.body=d),c});return function(){return a.apply(this,arguments)}})();
let getFetchableRequest=(()=>{var a=asyncToGenerator(function*({idbRequestObject:a}){let b={mode:a.mode,method:a.method,redirect:a.redirect,headers:new Headers(JSON.parse(a.headers)),credentials:a.credentials};return a.body&&(b.body=a.body),new Request(a.url,b)});return function(){return a.apply(this,arguments)}})();
let cleanupQueue=(()=>{var a=asyncToGenerator(function*(a){let b=new IDBHelper(a,1,'QueueStore'),c=yield b.get(allQueuesPlaceholder);return c?void(yield Promise.all(c.map((()=>{var a=asyncToGenerator(function*(a){const c=yield b.get(a);let d=[],e=[];yield Promise.all(c.map((()=>{var a=asyncToGenerator(function*(a){const c=yield b.get(a);c&&c.metadata&&c.metadata.creationTimestamp+c.config.maxAge<=Date.now()?e.push(b.delete(a)):d.push(a);});return function(){return a.apply(this,arguments)}})())),yield Promise.all(e),b.put(a,d);});return function(){return a.apply(this,arguments)}})()))):null});return function(){return a.apply(this,arguments)}})();

class RequestManager{constructor({callbacks:a,queue:b}={}){a=a||{};const c='workbox-background-sync.RequestManager.callbacks';deprecate(a,'onResponse','replayDidSucceed',c),deprecate(a,'onRetryFailure','replayDidFail',c),this._globalCallbacks=a,this._queue=b,this.attachSyncHandler();}attachSyncHandler(){self.addEventListener('sync',(a)=>{(a.tag===tagNamePrefix+this._queue.queueName||a.tag===replayAllQueuesTag)&&a.waitUntil(this.replayRequests());});}replayRequest(a){var b=this;return asyncToGenerator(function*(){try{const c=yield b._queue.getRequestFromQueue({hash:a});if(c.response)return;const d=yield getFetchableRequest({idbRequestObject:c.request}),e=yield fetch(d);if(!e.ok)return Promise.reject(e);putResponse({hash:a,idbObject:c,response:e.clone(),idbQDb:b._queue.idbQDb}),b._globalCallbacks.replayDidSucceed&&b._globalCallbacks.replayDidSucceed(a,e);}catch(a){return Promise.reject(a)}})()}replayRequests(){var a=this;return asyncToGenerator(function*(){const b=[];for(let c of yield a._queue.getQueue())try{yield a.replayRequest(c);}catch(d){a._globalCallbacks.replayDidFail&&a._globalCallbacks.replayDidFail(c,d),b.push(d);}return 0<b.length?Promise.reject(b):Promise.resolve()})()}}

var ErrorStackParser = {parse:()=>[]};

function isInstance(a,b){const c=Object.keys(a).pop();a[c]instanceof b||throwError(`The '${c}' parameter must be an instance of
      '${b.name}'`);}function isType(a,b){const c=Object.keys(a).pop(),d=typeof a[c];d!==b&&throwError(`The '${c}' parameter has the wrong type. (Expected:
      ${b}, actual: ${d})`);}function throwError(a){a=a.replace(/\s+/g,' ');const b=new Error(a);b.name='assertion-failed';const c=ErrorStackParser.parse(b);throw 3<=c.length&&(b.message=`Invalid call to ${c[2].functionName}() — `+a),b}

function broadcastMessage({broadcastChannel:a,type:b,url:c}){a&&(isInstance({broadcastChannel:a},BroadcastChannel),isType({type:b},'string'),isType({url:c},'string'),a.postMessage({type:b,meta:broadcastMeta,payload:{url:c}}));}

let _requestCounter=0; let _queueCounter=0;class RequestQueue{constructor({config:a,queueName:e=defaultQueueName+'_'+_queueCounter++,idbQDb:b,broadcastChannel:c,callbacks:d}){this._isQueueNameAddedToAllQueue=!1,this._queueName=e,this._config=a,this._idbQDb=b,this._broadcastChannel=c,this._globalCallbacks=d||{},this._queue=[],this._initializationPromise=this.initQueue();}initQueue(){var a=this;return asyncToGenerator(function*(){const b=yield a._idbQDb.get(a._queueName);b&&a._queue.push(...b);})()}addQueueNameToAllQueues(){var a=this;return asyncToGenerator(function*(){if(!a._isQueueNameAddedToAllQueue){let b=yield a._idbQDb.get(allQueuesPlaceholder);b=b||[],b.includes(a._queueName)||b.push(a._queueName),a._idbQDb.put(allQueuesPlaceholder,b),a._isQueueNameAddedToAllQueue=!0;}})()}saveQueue(){var a=this;return asyncToGenerator(function*(){yield a._idbQDb.put(a._queueName,(yield a.getQueue()));})()}pushIntoQueue({request:a}){var b=this;return asyncToGenerator(function*(){yield b.getQueue(),isInstance({request:a},Request);const c=`${a.url}!${Date.now()}!${_requestCounter++}`,d=yield getQueueableRequest({request:a,config:b._config});b._globalCallbacks.requestWillEnqueue&&b._globalCallbacks.requestWillEnqueue(d);try{return b._queue.push(c),yield Promise.all([b.saveQueue(),b._idbQDb.put(c,d),b.addQueueNameToAllQueues()]),self.registration&&self.registration.sync.register(tagNamePrefix+b._queueName),broadcastMessage({broadcastChannel:b._broadcastChannel,type:broadcastMessageAddedType,id:c,url:a.url}),c}catch(d){return broadcastMessage({broadcastChannel:b._broadcastChannel,type:broadcastMessageFailedType,id:c,url:a.url}),d}})()}getRequestFromQueue({hash:a}){var b=this;return asyncToGenerator(function*(){const c=yield b.getQueue();if(isType({hash:a},'string'),c.includes(a)){const c=yield b._idbQDb.get(a);return b._globalCallbacks.requestWillDequeue&&b._globalCallbacks.requestWillDequeue(c),c}})()}get queueName(){return this._queueName}getQueue(){var a=this;return asyncToGenerator(function*(){return yield a._initializationPromise,Object.assign([],a._queue)})()}get idbQDb(){return this._idbQDb}}

class Queue{constructor({broadcastChannel:a,callbacks:b,queueName:c,dbName:d=defaultDBName,maxRetentionTime:e=maxAge}={}){c&&isType({queueName:c},'string'),e&&isType({maxRetentionTime:e},'number'),a&&isInstance({broadcastChannel:a},BroadcastChannel),isType({dbName:d},'string'),this._dbName=d,this._queue=new RequestQueue({config:{maxAge:e},queueName:c,idbQDb:new IDBHelper(this._dbName,1,'QueueStore'),broadcastChannel:a,callbacks:b}),this._requestManager=new RequestManager({callbacks:b,queue:this._queue}),this.cleanupQueue();}cleanupQueue(){return cleanupQueue(this._dbName)}pushIntoQueue({request:a}){return isInstance({request:a},Request),this._queue.pushIntoQueue({request:a})}replayRequests(){return this._requestManager.replayRequests()}getResponse({id:a}){return getResponse({id:a,dbName:this._dbName})}}

class QueuePlugin extends Queue{fetchDidFail({request:a}){return this.pushIntoQueue({request:a})}}

exports.Queue = Queue;
exports.QueuePlugin = QueuePlugin;

}((this.workbox.backgroundSync = this.workbox.backgroundSync || {})));
//# sourceMappingURL=workbox-background-sync.prod.v2.0.3.js.map
