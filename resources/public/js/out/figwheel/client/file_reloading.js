// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__39240_SHARP_,p2__39241_SHARP_){
var and__29800__auto__ = p1__39240_SHARP_;
if(cljs.core.truth_(and__29800__auto__)){
return p2__39241_SHARP_;
} else {
return and__29800__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__29812__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__29812__auto__){
return or__29812__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__29812__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__29812__auto__){
return or__29812__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__29812__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__30707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30711__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30711__auto__,method_table__30707__auto__,prefer_table__30708__auto__,method_cache__30709__auto__,cached_hierarchy__30710__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__39242){
var map__39243 = p__39242;
var map__39243__$1 = ((cljs.core.seq_QMARK_.call(null,map__39243))?cljs.core.apply.call(null,cljs.core.hash_map,map__39243):map__39243);
var file = cljs.core.get.call(null,map__39243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__39244){
var map__39245 = p__39244;
var map__39245__$1 = ((cljs.core.seq_QMARK_.call(null,map__39245))?cljs.core.apply.call(null,cljs.core.hash_map,map__39245):map__39245);
var namespace = cljs.core.get.call(null,map__39245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__30707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30711__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30711__auto__,method_table__30707__auto__,prefer_table__30708__auto__,method_cache__30709__auto__,cached_hierarchy__30710__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e39246){if((e39246 instanceof Error)){
var e = e39246;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39246;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__39248 = arguments.length;
switch (G__39248) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39250,callback){
var map__39252 = p__39250;
var map__39252__$1 = ((cljs.core.seq_QMARK_.call(null,map__39252))?cljs.core.apply.call(null,cljs.core.hash_map,map__39252):map__39252);
var file_msg = map__39252__$1;
var request_url = cljs.core.get.call(null,map__39252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39252,map__39252__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39252,map__39252__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39253){
var map__39255 = p__39253;
var map__39255__$1 = ((cljs.core.seq_QMARK_.call(null,map__39255))?cljs.core.apply.call(null,cljs.core.hash_map,map__39255):map__39255);
var file_msg = map__39255__$1;
var namespace = cljs.core.get.call(null,map__39255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__39255__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__29812__auto__ = meta_data;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__29800__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__29800__auto__){
var or__29812__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__29812__auto____$1)){
return or__29812__auto____$1;
} else {
var and__29800__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__29800__auto____$1){
var or__29812__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__29812__auto____$2){
return or__29812__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__29800__auto____$1;
}
}
}
} else {
return and__29800__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39256,callback){
var map__39258 = p__39256;
var map__39258__$1 = ((cljs.core.seq_QMARK_.call(null,map__39258))?cljs.core.apply.call(null,cljs.core.hash_map,map__39258):map__39258);
var file_msg = map__39258__$1;
var request_url = cljs.core.get.call(null,map__39258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39258__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33677__auto___39345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___39345,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___39345,out){
return (function (state_39327){
var state_val_39328 = (state_39327[(1)]);
if((state_val_39328 === (1))){
var inst_39305 = cljs.core.nth.call(null,files,(0),null);
var inst_39306 = cljs.core.nthnext.call(null,files,(1));
var inst_39307 = files;
var state_39327__$1 = (function (){var statearr_39329 = state_39327;
(statearr_39329[(7)] = inst_39305);

(statearr_39329[(8)] = inst_39306);

(statearr_39329[(9)] = inst_39307);

return statearr_39329;
})();
var statearr_39330_39346 = state_39327__$1;
(statearr_39330_39346[(2)] = null);

(statearr_39330_39346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (2))){
var inst_39310 = (state_39327[(10)]);
var inst_39307 = (state_39327[(9)]);
var inst_39310__$1 = cljs.core.nth.call(null,inst_39307,(0),null);
var inst_39311 = cljs.core.nthnext.call(null,inst_39307,(1));
var inst_39312 = (inst_39310__$1 == null);
var inst_39313 = cljs.core.not.call(null,inst_39312);
var state_39327__$1 = (function (){var statearr_39331 = state_39327;
(statearr_39331[(10)] = inst_39310__$1);

(statearr_39331[(11)] = inst_39311);

return statearr_39331;
})();
if(inst_39313){
var statearr_39332_39347 = state_39327__$1;
(statearr_39332_39347[(1)] = (4));

} else {
var statearr_39333_39348 = state_39327__$1;
(statearr_39333_39348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (3))){
var inst_39325 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39327__$1,inst_39325);
} else {
if((state_val_39328 === (4))){
var inst_39310 = (state_39327[(10)]);
var inst_39315 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39310);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39327__$1,(7),inst_39315);
} else {
if((state_val_39328 === (5))){
var inst_39321 = cljs.core.async.close_BANG_.call(null,out);
var state_39327__$1 = state_39327;
var statearr_39334_39349 = state_39327__$1;
(statearr_39334_39349[(2)] = inst_39321);

(statearr_39334_39349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (6))){
var inst_39323 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39335_39350 = state_39327__$1;
(statearr_39335_39350[(2)] = inst_39323);

(statearr_39335_39350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (7))){
var inst_39311 = (state_39327[(11)]);
var inst_39317 = (state_39327[(2)]);
var inst_39318 = cljs.core.async.put_BANG_.call(null,out,inst_39317);
var inst_39307 = inst_39311;
var state_39327__$1 = (function (){var statearr_39336 = state_39327;
(statearr_39336[(12)] = inst_39318);

(statearr_39336[(9)] = inst_39307);

return statearr_39336;
})();
var statearr_39337_39351 = state_39327__$1;
(statearr_39337_39351[(2)] = null);

(statearr_39337_39351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33677__auto___39345,out))
;
return ((function (switch__33615__auto__,c__33677__auto___39345,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____0 = (function (){
var statearr_39341 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39341[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__);

(statearr_39341[(1)] = (1));

return statearr_39341;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____1 = (function (state_39327){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39342){if((e39342 instanceof Object)){
var ex__33619__auto__ = e39342;
var statearr_39343_39352 = state_39327;
(statearr_39343_39352[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39353 = state_39327;
state_39327 = G__39353;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__ = function(state_39327){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____1.call(this,state_39327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___39345,out))
})();
var state__33679__auto__ = (function (){var statearr_39344 = f__33678__auto__.call(null);
(statearr_39344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___39345);

return statearr_39344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___39345,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__39354,p__39355){
var map__39358 = p__39354;
var map__39358__$1 = ((cljs.core.seq_QMARK_.call(null,map__39358))?cljs.core.apply.call(null,cljs.core.hash_map,map__39358):map__39358);
var opts = map__39358__$1;
var url_rewriter = cljs.core.get.call(null,map__39358__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__39359 = p__39355;
var map__39359__$1 = ((cljs.core.seq_QMARK_.call(null,map__39359))?cljs.core.apply.call(null,cljs.core.hash_map,map__39359):map__39359);
var file_msg = map__39359__$1;
var file = cljs.core.get.call(null,map__39359__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39360){
var map__39363 = p__39360;
var map__39363__$1 = ((cljs.core.seq_QMARK_.call(null,map__39363))?cljs.core.apply.call(null,cljs.core.hash_map,map__39363):map__39363);
var eval_body__$1 = cljs.core.get.call(null,map__39363__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__29800__auto__ = eval_body__$1;
if(cljs.core.truth_(and__29800__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__29800__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e39364){var e = e39364;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39369,p__39370){
var map__39572 = p__39369;
var map__39572__$1 = ((cljs.core.seq_QMARK_.call(null,map__39572))?cljs.core.apply.call(null,cljs.core.hash_map,map__39572):map__39572);
var opts = map__39572__$1;
var before_jsload = cljs.core.get.call(null,map__39572__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__39572__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__39572__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__39573 = p__39370;
var map__39573__$1 = ((cljs.core.seq_QMARK_.call(null,map__39573))?cljs.core.apply.call(null,cljs.core.hash_map,map__39573):map__39573);
var msg = map__39573__$1;
var files = cljs.core.get.call(null,map__39573__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (state_39698){
var state_val_39699 = (state_39698[(1)]);
if((state_val_39699 === (7))){
var inst_39586 = (state_39698[(7)]);
var inst_39588 = (state_39698[(8)]);
var inst_39585 = (state_39698[(9)]);
var inst_39587 = (state_39698[(10)]);
var inst_39593 = cljs.core._nth.call(null,inst_39586,inst_39588);
var inst_39594 = figwheel.client.file_reloading.eval_body.call(null,inst_39593);
var inst_39595 = (inst_39588 + (1));
var tmp39700 = inst_39586;
var tmp39701 = inst_39585;
var tmp39702 = inst_39587;
var inst_39585__$1 = tmp39701;
var inst_39586__$1 = tmp39700;
var inst_39587__$1 = tmp39702;
var inst_39588__$1 = inst_39595;
var state_39698__$1 = (function (){var statearr_39703 = state_39698;
(statearr_39703[(7)] = inst_39586__$1);

(statearr_39703[(11)] = inst_39594);

(statearr_39703[(8)] = inst_39588__$1);

(statearr_39703[(9)] = inst_39585__$1);

(statearr_39703[(10)] = inst_39587__$1);

return statearr_39703;
})();
var statearr_39704_39773 = state_39698__$1;
(statearr_39704_39773[(2)] = null);

(statearr_39704_39773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (20))){
var inst_39637 = (state_39698[(12)]);
var inst_39630 = (state_39698[(13)]);
var inst_39631 = (state_39698[(14)]);
var inst_39635 = (state_39698[(15)]);
var inst_39634 = (state_39698[(16)]);
var inst_39640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_39642 = (function (){var all_files = inst_39630;
var files_SINGLEQUOTE_ = inst_39631;
var res_SINGLEQUOTE_ = inst_39634;
var res = inst_39635;
var files_not_loaded = inst_39637;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39630,inst_39631,inst_39635,inst_39634,inst_39640,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p__39641){
var map__39705 = p__39641;
var map__39705__$1 = ((cljs.core.seq_QMARK_.call(null,map__39705))?cljs.core.apply.call(null,cljs.core.hash_map,map__39705):map__39705);
var namespace = cljs.core.get.call(null,map__39705__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__39705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39630,inst_39631,inst_39635,inst_39634,inst_39640,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39643 = cljs.core.map.call(null,inst_39642,inst_39635);
var inst_39644 = cljs.core.pr_str.call(null,inst_39643);
var inst_39645 = figwheel.client.utils.log.call(null,inst_39644);
var inst_39646 = (function (){var all_files = inst_39630;
var files_SINGLEQUOTE_ = inst_39631;
var res_SINGLEQUOTE_ = inst_39634;
var res = inst_39635;
var files_not_loaded = inst_39637;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39630,inst_39631,inst_39635,inst_39634,inst_39640,inst_39642,inst_39643,inst_39644,inst_39645,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39630,inst_39631,inst_39635,inst_39634,inst_39640,inst_39642,inst_39643,inst_39644,inst_39645,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39647 = setTimeout(inst_39646,(10));
var state_39698__$1 = (function (){var statearr_39706 = state_39698;
(statearr_39706[(17)] = inst_39645);

(statearr_39706[(18)] = inst_39640);

return statearr_39706;
})();
var statearr_39707_39774 = state_39698__$1;
(statearr_39707_39774[(2)] = inst_39647);

(statearr_39707_39774[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (27))){
var inst_39657 = (state_39698[(19)]);
var state_39698__$1 = state_39698;
var statearr_39708_39775 = state_39698__$1;
(statearr_39708_39775[(2)] = inst_39657);

(statearr_39708_39775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (1))){
var inst_39577 = (state_39698[(20)]);
var inst_39574 = before_jsload.call(null,files);
var inst_39575 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_39576 = (function (){return ((function (inst_39577,inst_39574,inst_39575,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p1__39365_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39365_SHARP_);
});
;})(inst_39577,inst_39574,inst_39575,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39577__$1 = cljs.core.filter.call(null,inst_39576,files);
var inst_39578 = cljs.core.not_empty.call(null,inst_39577__$1);
var state_39698__$1 = (function (){var statearr_39709 = state_39698;
(statearr_39709[(20)] = inst_39577__$1);

(statearr_39709[(21)] = inst_39575);

(statearr_39709[(22)] = inst_39574);

return statearr_39709;
})();
if(cljs.core.truth_(inst_39578)){
var statearr_39710_39776 = state_39698__$1;
(statearr_39710_39776[(1)] = (2));

} else {
var statearr_39711_39777 = state_39698__$1;
(statearr_39711_39777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (24))){
var state_39698__$1 = state_39698;
var statearr_39712_39778 = state_39698__$1;
(statearr_39712_39778[(2)] = null);

(statearr_39712_39778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (4))){
var inst_39622 = (state_39698[(2)]);
var inst_39623 = (function (){return ((function (inst_39622,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p1__39366_SHARP_){
var and__29800__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39366_SHARP_);
if(cljs.core.truth_(and__29800__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39366_SHARP_));
} else {
return and__29800__auto__;
}
});
;})(inst_39622,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39624 = cljs.core.filter.call(null,inst_39623,files);
var state_39698__$1 = (function (){var statearr_39713 = state_39698;
(statearr_39713[(23)] = inst_39624);

(statearr_39713[(24)] = inst_39622);

return statearr_39713;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_39714_39779 = state_39698__$1;
(statearr_39714_39779[(1)] = (16));

} else {
var statearr_39715_39780 = state_39698__$1;
(statearr_39715_39780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (15))){
var inst_39612 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
var statearr_39716_39781 = state_39698__$1;
(statearr_39716_39781[(2)] = inst_39612);

(statearr_39716_39781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (21))){
var state_39698__$1 = state_39698;
var statearr_39717_39782 = state_39698__$1;
(statearr_39717_39782[(2)] = null);

(statearr_39717_39782[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (31))){
var inst_39665 = (state_39698[(25)]);
var inst_39675 = (state_39698[(2)]);
var inst_39676 = cljs.core.not_empty.call(null,inst_39665);
var state_39698__$1 = (function (){var statearr_39718 = state_39698;
(statearr_39718[(26)] = inst_39675);

return statearr_39718;
})();
if(cljs.core.truth_(inst_39676)){
var statearr_39719_39783 = state_39698__$1;
(statearr_39719_39783[(1)] = (32));

} else {
var statearr_39720_39784 = state_39698__$1;
(statearr_39720_39784[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (32))){
var inst_39665 = (state_39698[(25)]);
var inst_39678 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39665);
var inst_39679 = cljs.core.pr_str.call(null,inst_39678);
var inst_39680 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_39679)].join('');
var inst_39681 = figwheel.client.utils.log.call(null,inst_39680);
var state_39698__$1 = state_39698;
var statearr_39721_39785 = state_39698__$1;
(statearr_39721_39785[(2)] = inst_39681);

(statearr_39721_39785[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (33))){
var state_39698__$1 = state_39698;
var statearr_39722_39786 = state_39698__$1;
(statearr_39722_39786[(2)] = null);

(statearr_39722_39786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (13))){
var inst_39598 = (state_39698[(27)]);
var inst_39602 = cljs.core.chunk_first.call(null,inst_39598);
var inst_39603 = cljs.core.chunk_rest.call(null,inst_39598);
var inst_39604 = cljs.core.count.call(null,inst_39602);
var inst_39585 = inst_39603;
var inst_39586 = inst_39602;
var inst_39587 = inst_39604;
var inst_39588 = (0);
var state_39698__$1 = (function (){var statearr_39723 = state_39698;
(statearr_39723[(7)] = inst_39586);

(statearr_39723[(8)] = inst_39588);

(statearr_39723[(9)] = inst_39585);

(statearr_39723[(10)] = inst_39587);

return statearr_39723;
})();
var statearr_39724_39787 = state_39698__$1;
(statearr_39724_39787[(2)] = null);

(statearr_39724_39787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (22))){
var inst_39637 = (state_39698[(12)]);
var inst_39650 = (state_39698[(2)]);
var inst_39651 = cljs.core.not_empty.call(null,inst_39637);
var state_39698__$1 = (function (){var statearr_39725 = state_39698;
(statearr_39725[(28)] = inst_39650);

return statearr_39725;
})();
if(cljs.core.truth_(inst_39651)){
var statearr_39726_39788 = state_39698__$1;
(statearr_39726_39788[(1)] = (23));

} else {
var statearr_39727_39789 = state_39698__$1;
(statearr_39727_39789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (36))){
var state_39698__$1 = state_39698;
var statearr_39728_39790 = state_39698__$1;
(statearr_39728_39790[(2)] = null);

(statearr_39728_39790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (29))){
var inst_39664 = (state_39698[(29)]);
var inst_39669 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39664);
var inst_39670 = cljs.core.pr_str.call(null,inst_39669);
var inst_39671 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_39670)].join('');
var inst_39672 = figwheel.client.utils.log.call(null,inst_39671);
var state_39698__$1 = state_39698;
var statearr_39729_39791 = state_39698__$1;
(statearr_39729_39791[(2)] = inst_39672);

(statearr_39729_39791[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (6))){
var inst_39619 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
var statearr_39730_39792 = state_39698__$1;
(statearr_39730_39792[(2)] = inst_39619);

(statearr_39730_39792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (28))){
var inst_39664 = (state_39698[(29)]);
var inst_39663 = (state_39698[(2)]);
var inst_39664__$1 = cljs.core.get.call(null,inst_39663,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_39665 = cljs.core.get.call(null,inst_39663,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_39666 = cljs.core.get.call(null,inst_39663,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_39667 = cljs.core.not_empty.call(null,inst_39664__$1);
var state_39698__$1 = (function (){var statearr_39731 = state_39698;
(statearr_39731[(25)] = inst_39665);

(statearr_39731[(29)] = inst_39664__$1);

(statearr_39731[(30)] = inst_39666);

return statearr_39731;
})();
if(cljs.core.truth_(inst_39667)){
var statearr_39732_39793 = state_39698__$1;
(statearr_39732_39793[(1)] = (29));

} else {
var statearr_39733_39794 = state_39698__$1;
(statearr_39733_39794[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (25))){
var inst_39696 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39698__$1,inst_39696);
} else {
if((state_val_39699 === (34))){
var inst_39666 = (state_39698[(30)]);
var inst_39684 = (state_39698[(2)]);
var inst_39685 = cljs.core.not_empty.call(null,inst_39666);
var state_39698__$1 = (function (){var statearr_39734 = state_39698;
(statearr_39734[(31)] = inst_39684);

return statearr_39734;
})();
if(cljs.core.truth_(inst_39685)){
var statearr_39735_39795 = state_39698__$1;
(statearr_39735_39795[(1)] = (35));

} else {
var statearr_39736_39796 = state_39698__$1;
(statearr_39736_39796[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (17))){
var inst_39624 = (state_39698[(23)]);
var state_39698__$1 = state_39698;
var statearr_39737_39797 = state_39698__$1;
(statearr_39737_39797[(2)] = inst_39624);

(statearr_39737_39797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (3))){
var state_39698__$1 = state_39698;
var statearr_39738_39798 = state_39698__$1;
(statearr_39738_39798[(2)] = null);

(statearr_39738_39798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (12))){
var inst_39615 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
var statearr_39739_39799 = state_39698__$1;
(statearr_39739_39799[(2)] = inst_39615);

(statearr_39739_39799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (2))){
var inst_39577 = (state_39698[(20)]);
var inst_39584 = cljs.core.seq.call(null,inst_39577);
var inst_39585 = inst_39584;
var inst_39586 = null;
var inst_39587 = (0);
var inst_39588 = (0);
var state_39698__$1 = (function (){var statearr_39740 = state_39698;
(statearr_39740[(7)] = inst_39586);

(statearr_39740[(8)] = inst_39588);

(statearr_39740[(9)] = inst_39585);

(statearr_39740[(10)] = inst_39587);

return statearr_39740;
})();
var statearr_39741_39800 = state_39698__$1;
(statearr_39741_39800[(2)] = null);

(statearr_39741_39800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (23))){
var inst_39637 = (state_39698[(12)]);
var inst_39657 = (state_39698[(19)]);
var inst_39630 = (state_39698[(13)]);
var inst_39631 = (state_39698[(14)]);
var inst_39635 = (state_39698[(15)]);
var inst_39634 = (state_39698[(16)]);
var inst_39653 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_39656 = (function (){var all_files = inst_39630;
var files_SINGLEQUOTE_ = inst_39631;
var res_SINGLEQUOTE_ = inst_39634;
var res = inst_39635;
var files_not_loaded = inst_39637;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39657,inst_39630,inst_39631,inst_39635,inst_39634,inst_39653,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p__39655){
var map__39742 = p__39655;
var map__39742__$1 = ((cljs.core.seq_QMARK_.call(null,map__39742))?cljs.core.apply.call(null,cljs.core.hash_map,map__39742):map__39742);
var meta_data = cljs.core.get.call(null,map__39742__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_39637,inst_39657,inst_39630,inst_39631,inst_39635,inst_39634,inst_39653,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39657__$1 = cljs.core.group_by.call(null,inst_39656,inst_39637);
var inst_39658 = cljs.core.seq_QMARK_.call(null,inst_39657__$1);
var state_39698__$1 = (function (){var statearr_39743 = state_39698;
(statearr_39743[(32)] = inst_39653);

(statearr_39743[(19)] = inst_39657__$1);

return statearr_39743;
})();
if(inst_39658){
var statearr_39744_39801 = state_39698__$1;
(statearr_39744_39801[(1)] = (26));

} else {
var statearr_39745_39802 = state_39698__$1;
(statearr_39745_39802[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (35))){
var inst_39666 = (state_39698[(30)]);
var inst_39687 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39666);
var inst_39688 = cljs.core.pr_str.call(null,inst_39687);
var inst_39689 = [cljs.core.str("not required: "),cljs.core.str(inst_39688)].join('');
var inst_39690 = figwheel.client.utils.log.call(null,inst_39689);
var state_39698__$1 = state_39698;
var statearr_39746_39803 = state_39698__$1;
(statearr_39746_39803[(2)] = inst_39690);

(statearr_39746_39803[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (19))){
var inst_39630 = (state_39698[(13)]);
var inst_39631 = (state_39698[(14)]);
var inst_39635 = (state_39698[(15)]);
var inst_39634 = (state_39698[(16)]);
var inst_39634__$1 = (state_39698[(2)]);
var inst_39635__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_39634__$1);
var inst_39636 = (function (){var all_files = inst_39630;
var files_SINGLEQUOTE_ = inst_39631;
var res_SINGLEQUOTE_ = inst_39634__$1;
var res = inst_39635__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_39630,inst_39631,inst_39635,inst_39634,inst_39634__$1,inst_39635__$1,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p1__39368_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39368_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_39630,inst_39631,inst_39635,inst_39634,inst_39634__$1,inst_39635__$1,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39637 = cljs.core.filter.call(null,inst_39636,inst_39634__$1);
var inst_39638 = cljs.core.not_empty.call(null,inst_39635__$1);
var state_39698__$1 = (function (){var statearr_39747 = state_39698;
(statearr_39747[(12)] = inst_39637);

(statearr_39747[(15)] = inst_39635__$1);

(statearr_39747[(16)] = inst_39634__$1);

return statearr_39747;
})();
if(cljs.core.truth_(inst_39638)){
var statearr_39748_39804 = state_39698__$1;
(statearr_39748_39804[(1)] = (20));

} else {
var statearr_39749_39805 = state_39698__$1;
(statearr_39749_39805[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (11))){
var state_39698__$1 = state_39698;
var statearr_39750_39806 = state_39698__$1;
(statearr_39750_39806[(2)] = null);

(statearr_39750_39806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (9))){
var inst_39617 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
var statearr_39751_39807 = state_39698__$1;
(statearr_39751_39807[(2)] = inst_39617);

(statearr_39751_39807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (5))){
var inst_39588 = (state_39698[(8)]);
var inst_39587 = (state_39698[(10)]);
var inst_39590 = (inst_39588 < inst_39587);
var inst_39591 = inst_39590;
var state_39698__$1 = state_39698;
if(cljs.core.truth_(inst_39591)){
var statearr_39752_39808 = state_39698__$1;
(statearr_39752_39808[(1)] = (7));

} else {
var statearr_39753_39809 = state_39698__$1;
(statearr_39753_39809[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (14))){
var inst_39598 = (state_39698[(27)]);
var inst_39607 = cljs.core.first.call(null,inst_39598);
var inst_39608 = figwheel.client.file_reloading.eval_body.call(null,inst_39607);
var inst_39609 = cljs.core.next.call(null,inst_39598);
var inst_39585 = inst_39609;
var inst_39586 = null;
var inst_39587 = (0);
var inst_39588 = (0);
var state_39698__$1 = (function (){var statearr_39754 = state_39698;
(statearr_39754[(7)] = inst_39586);

(statearr_39754[(8)] = inst_39588);

(statearr_39754[(33)] = inst_39608);

(statearr_39754[(9)] = inst_39585);

(statearr_39754[(10)] = inst_39587);

return statearr_39754;
})();
var statearr_39755_39810 = state_39698__$1;
(statearr_39755_39810[(2)] = null);

(statearr_39755_39810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (26))){
var inst_39657 = (state_39698[(19)]);
var inst_39660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39657);
var state_39698__$1 = state_39698;
var statearr_39756_39811 = state_39698__$1;
(statearr_39756_39811[(2)] = inst_39660);

(statearr_39756_39811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (16))){
var inst_39624 = (state_39698[(23)]);
var inst_39626 = (function (){var all_files = inst_39624;
return ((function (all_files,inst_39624,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function (p1__39367_SHARP_){
return cljs.core.update_in.call(null,p1__39367_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_39624,state_val_39699,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var inst_39627 = cljs.core.map.call(null,inst_39626,inst_39624);
var state_39698__$1 = state_39698;
var statearr_39757_39812 = state_39698__$1;
(statearr_39757_39812[(2)] = inst_39627);

(statearr_39757_39812[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (30))){
var state_39698__$1 = state_39698;
var statearr_39758_39813 = state_39698__$1;
(statearr_39758_39813[(2)] = null);

(statearr_39758_39813[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (10))){
var inst_39598 = (state_39698[(27)]);
var inst_39600 = cljs.core.chunked_seq_QMARK_.call(null,inst_39598);
var state_39698__$1 = state_39698;
if(inst_39600){
var statearr_39759_39814 = state_39698__$1;
(statearr_39759_39814[(1)] = (13));

} else {
var statearr_39760_39815 = state_39698__$1;
(statearr_39760_39815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (18))){
var inst_39630 = (state_39698[(13)]);
var inst_39631 = (state_39698[(14)]);
var inst_39630__$1 = (state_39698[(2)]);
var inst_39631__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_39630__$1);
var inst_39632 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_39631__$1);
var state_39698__$1 = (function (){var statearr_39761 = state_39698;
(statearr_39761[(13)] = inst_39630__$1);

(statearr_39761[(14)] = inst_39631__$1);

return statearr_39761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39698__$1,(19),inst_39632);
} else {
if((state_val_39699 === (37))){
var inst_39693 = (state_39698[(2)]);
var state_39698__$1 = state_39698;
var statearr_39762_39816 = state_39698__$1;
(statearr_39762_39816[(2)] = inst_39693);

(statearr_39762_39816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39699 === (8))){
var inst_39598 = (state_39698[(27)]);
var inst_39585 = (state_39698[(9)]);
var inst_39598__$1 = cljs.core.seq.call(null,inst_39585);
var state_39698__$1 = (function (){var statearr_39763 = state_39698;
(statearr_39763[(27)] = inst_39598__$1);

return statearr_39763;
})();
if(inst_39598__$1){
var statearr_39764_39817 = state_39698__$1;
(statearr_39764_39817[(1)] = (10));

} else {
var statearr_39765_39818 = state_39698__$1;
(statearr_39765_39818[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
;
return ((function (switch__33615__auto__,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____0 = (function (){
var statearr_39769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39769[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__);

(statearr_39769[(1)] = (1));

return statearr_39769;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____1 = (function (state_39698){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39770){if((e39770 instanceof Object)){
var ex__33619__auto__ = e39770;
var statearr_39771_39819 = state_39698;
(statearr_39771_39819[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39820 = state_39698;
state_39698 = G__39820;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__ = function(state_39698){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____1.call(this,state_39698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
})();
var state__33679__auto__ = (function (){var statearr_39772 = f__33678__auto__.call(null);
(statearr_39772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_39772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__,map__39572,map__39572__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__39573,map__39573__$1,msg,files))
);

return c__33677__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__39823,link){
var map__39825 = p__39823;
var map__39825__$1 = ((cljs.core.seq_QMARK_.call(null,map__39825))?cljs.core.apply.call(null,cljs.core.hash_map,map__39825):map__39825);
var file = cljs.core.get.call(null,map__39825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__39825,map__39825__$1,file){
return (function (p1__39821_SHARP_,p2__39822_SHARP_){
if(cljs.core._EQ_.call(null,p1__39821_SHARP_,p2__39822_SHARP_)){
return p1__39821_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__39825,map__39825__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__39829){
var map__39830 = p__39829;
var map__39830__$1 = ((cljs.core.seq_QMARK_.call(null,map__39830))?cljs.core.apply.call(null,cljs.core.hash_map,map__39830):map__39830);
var match_length = cljs.core.get.call(null,map__39830__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__39830__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__39826_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__39826_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__39832 = arguments.length;
switch (G__39832) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__39834){
var map__39836 = p__39834;
var map__39836__$1 = ((cljs.core.seq_QMARK_.call(null,map__39836))?cljs.core.apply.call(null,cljs.core.hash_map,map__39836):map__39836);
var f_data = map__39836__$1;
var file = cljs.core.get.call(null,map__39836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__39836__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__29812__auto__ = request_url;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__39837,files_msg){
var map__39859 = p__39837;
var map__39859__$1 = ((cljs.core.seq_QMARK_.call(null,map__39859))?cljs.core.apply.call(null,cljs.core.hash_map,map__39859):map__39859);
var opts = map__39859__$1;
var on_cssload = cljs.core.get.call(null,map__39859__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__39860_39880 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__39861_39881 = null;
var count__39862_39882 = (0);
var i__39863_39883 = (0);
while(true){
if((i__39863_39883 < count__39862_39882)){
var f_39884 = cljs.core._nth.call(null,chunk__39861_39881,i__39863_39883);
figwheel.client.file_reloading.reload_css_file.call(null,f_39884);

var G__39885 = seq__39860_39880;
var G__39886 = chunk__39861_39881;
var G__39887 = count__39862_39882;
var G__39888 = (i__39863_39883 + (1));
seq__39860_39880 = G__39885;
chunk__39861_39881 = G__39886;
count__39862_39882 = G__39887;
i__39863_39883 = G__39888;
continue;
} else {
var temp__4425__auto___39889 = cljs.core.seq.call(null,seq__39860_39880);
if(temp__4425__auto___39889){
var seq__39860_39890__$1 = temp__4425__auto___39889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39860_39890__$1)){
var c__30597__auto___39891 = cljs.core.chunk_first.call(null,seq__39860_39890__$1);
var G__39892 = cljs.core.chunk_rest.call(null,seq__39860_39890__$1);
var G__39893 = c__30597__auto___39891;
var G__39894 = cljs.core.count.call(null,c__30597__auto___39891);
var G__39895 = (0);
seq__39860_39880 = G__39892;
chunk__39861_39881 = G__39893;
count__39862_39882 = G__39894;
i__39863_39883 = G__39895;
continue;
} else {
var f_39896 = cljs.core.first.call(null,seq__39860_39890__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_39896);

var G__39897 = cljs.core.next.call(null,seq__39860_39890__$1);
var G__39898 = null;
var G__39899 = (0);
var G__39900 = (0);
seq__39860_39880 = G__39897;
chunk__39861_39881 = G__39898;
count__39862_39882 = G__39899;
i__39863_39883 = G__39900;
continue;
}
} else {
}
}
break;
}

var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload){
return (function (state_39870){
var state_val_39871 = (state_39870[(1)]);
if((state_val_39871 === (1))){
var inst_39864 = cljs.core.async.timeout.call(null,(100));
var state_39870__$1 = state_39870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39870__$1,(2),inst_39864);
} else {
if((state_val_39871 === (2))){
var inst_39866 = (state_39870[(2)]);
var inst_39867 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_39868 = on_cssload.call(null,inst_39867);
var state_39870__$1 = (function (){var statearr_39872 = state_39870;
(statearr_39872[(7)] = inst_39866);

return statearr_39872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39870__$1,inst_39868);
} else {
return null;
}
}
});})(c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload))
;
return ((function (switch__33615__auto__,c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____0 = (function (){
var statearr_39876 = [null,null,null,null,null,null,null,null];
(statearr_39876[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__);

(statearr_39876[(1)] = (1));

return statearr_39876;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____1 = (function (state_39870){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39877){if((e39877 instanceof Object)){
var ex__33619__auto__ = e39877;
var statearr_39878_39901 = state_39870;
(statearr_39878_39901[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39902 = state_39870;
state_39870 = G__39902;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__ = function(state_39870){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____1.call(this,state_39870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload))
})();
var state__33679__auto__ = (function (){var statearr_39879 = f__33678__auto__.call(null);
(statearr_39879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_39879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__,map__39859,map__39859__$1,opts,on_cssload))
);

return c__33677__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map