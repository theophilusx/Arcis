// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38281__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38282__i = 0, G__38282__a = new Array(arguments.length -  0);
while (G__38282__i < G__38282__a.length) {G__38282__a[G__38282__i] = arguments[G__38282__i + 0]; ++G__38282__i;}
  args = new cljs.core.IndexedSeq(G__38282__a,0);
} 
return G__38281__delegate.call(this,args);};
G__38281.cljs$lang$maxFixedArity = 0;
G__38281.cljs$lang$applyTo = (function (arglist__38283){
var args = cljs.core.seq(arglist__38283);
return G__38281__delegate(args);
});
G__38281.cljs$core$IFn$_invoke$arity$variadic = G__38281__delegate;
return G__38281;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38284){
var map__38286 = p__38284;
var map__38286__$1 = ((cljs.core.seq_QMARK_.call(null,map__38286))?cljs.core.apply.call(null,cljs.core.hash_map,map__38286):map__38286);
var message = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38286__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__29812__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__29800__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__29800__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__29800__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33677__auto___38415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___38415,ch){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___38415,ch){
return (function (state_38389){
var state_val_38390 = (state_38389[(1)]);
if((state_val_38390 === (7))){
var inst_38385 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
var statearr_38391_38416 = state_38389__$1;
(statearr_38391_38416[(2)] = inst_38385);

(statearr_38391_38416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (1))){
var state_38389__$1 = state_38389;
var statearr_38392_38417 = state_38389__$1;
(statearr_38392_38417[(2)] = null);

(statearr_38392_38417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (4))){
var inst_38353 = (state_38389[(7)]);
var inst_38353__$1 = (state_38389[(2)]);
var state_38389__$1 = (function (){var statearr_38393 = state_38389;
(statearr_38393[(7)] = inst_38353__$1);

return statearr_38393;
})();
if(cljs.core.truth_(inst_38353__$1)){
var statearr_38394_38418 = state_38389__$1;
(statearr_38394_38418[(1)] = (5));

} else {
var statearr_38395_38419 = state_38389__$1;
(statearr_38395_38419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (13))){
var state_38389__$1 = state_38389;
var statearr_38396_38420 = state_38389__$1;
(statearr_38396_38420[(2)] = null);

(statearr_38396_38420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (6))){
var state_38389__$1 = state_38389;
var statearr_38397_38421 = state_38389__$1;
(statearr_38397_38421[(2)] = null);

(statearr_38397_38421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (3))){
var inst_38387 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38389__$1,inst_38387);
} else {
if((state_val_38390 === (12))){
var inst_38360 = (state_38389[(8)]);
var inst_38373 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38360);
var inst_38374 = cljs.core.first.call(null,inst_38373);
var inst_38375 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38374);
var inst_38376 = console.warn("Figwheel: Not loading code with warnings - ",inst_38375);
var state_38389__$1 = state_38389;
var statearr_38398_38422 = state_38389__$1;
(statearr_38398_38422[(2)] = inst_38376);

(statearr_38398_38422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (2))){
var state_38389__$1 = state_38389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38389__$1,(4),ch);
} else {
if((state_val_38390 === (11))){
var inst_38369 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
var statearr_38399_38423 = state_38389__$1;
(statearr_38399_38423[(2)] = inst_38369);

(statearr_38399_38423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (9))){
var inst_38359 = (state_38389[(9)]);
var inst_38371 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38359,opts);
var state_38389__$1 = state_38389;
if(cljs.core.truth_(inst_38371)){
var statearr_38400_38424 = state_38389__$1;
(statearr_38400_38424[(1)] = (12));

} else {
var statearr_38401_38425 = state_38389__$1;
(statearr_38401_38425[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (5))){
var inst_38353 = (state_38389[(7)]);
var inst_38359 = (state_38389[(9)]);
var inst_38355 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38356 = (new cljs.core.PersistentArrayMap(null,2,inst_38355,null));
var inst_38357 = (new cljs.core.PersistentHashSet(null,inst_38356,null));
var inst_38358 = figwheel.client.focus_msgs.call(null,inst_38357,inst_38353);
var inst_38359__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38358);
var inst_38360 = cljs.core.first.call(null,inst_38358);
var inst_38361 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38359__$1,opts);
var state_38389__$1 = (function (){var statearr_38402 = state_38389;
(statearr_38402[(9)] = inst_38359__$1);

(statearr_38402[(8)] = inst_38360);

return statearr_38402;
})();
if(cljs.core.truth_(inst_38361)){
var statearr_38403_38426 = state_38389__$1;
(statearr_38403_38426[(1)] = (8));

} else {
var statearr_38404_38427 = state_38389__$1;
(statearr_38404_38427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (14))){
var inst_38379 = (state_38389[(2)]);
var state_38389__$1 = state_38389;
var statearr_38405_38428 = state_38389__$1;
(statearr_38405_38428[(2)] = inst_38379);

(statearr_38405_38428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (10))){
var inst_38381 = (state_38389[(2)]);
var state_38389__$1 = (function (){var statearr_38406 = state_38389;
(statearr_38406[(10)] = inst_38381);

return statearr_38406;
})();
var statearr_38407_38429 = state_38389__$1;
(statearr_38407_38429[(2)] = null);

(statearr_38407_38429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38390 === (8))){
var inst_38360 = (state_38389[(8)]);
var inst_38363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38364 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38360);
var inst_38365 = cljs.core.async.timeout.call(null,(1000));
var inst_38366 = [inst_38364,inst_38365];
var inst_38367 = (new cljs.core.PersistentVector(null,2,(5),inst_38363,inst_38366,null));
var state_38389__$1 = state_38389;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38389__$1,(11),inst_38367);
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
});})(c__33677__auto___38415,ch))
;
return ((function (switch__33615__auto__,c__33677__auto___38415,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____0 = (function (){
var statearr_38411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38411[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__);

(statearr_38411[(1)] = (1));

return statearr_38411;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____1 = (function (state_38389){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_38389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e38412){if((e38412 instanceof Object)){
var ex__33619__auto__ = e38412;
var statearr_38413_38430 = state_38389;
(statearr_38413_38430[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38431 = state_38389;
state_38389 = G__38431;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__ = function(state_38389){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____1.call(this,state_38389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33616__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___38415,ch))
})();
var state__33679__auto__ = (function (){var statearr_38414 = f__33678__auto__.call(null);
(statearr_38414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___38415);

return statearr_38414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___38415,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38432_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38432_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_38439 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38439){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_38437 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_38438 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_38437,_STAR_print_newline_STAR_38438,base_path_38439){
return (function() { 
var G__38440__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__38440 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38441__i = 0, G__38441__a = new Array(arguments.length -  0);
while (G__38441__i < G__38441__a.length) {G__38441__a[G__38441__i] = arguments[G__38441__i + 0]; ++G__38441__i;}
  args = new cljs.core.IndexedSeq(G__38441__a,0);
} 
return G__38440__delegate.call(this,args);};
G__38440.cljs$lang$maxFixedArity = 0;
G__38440.cljs$lang$applyTo = (function (arglist__38442){
var args = cljs.core.seq(arglist__38442);
return G__38440__delegate(args);
});
G__38440.cljs$core$IFn$_invoke$arity$variadic = G__38440__delegate;
return G__38440;
})()
;})(_STAR_print_fn_STAR_38437,_STAR_print_newline_STAR_38438,base_path_38439))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38438;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38437;
}}catch (e38436){if((e38436 instanceof Error)){
var e = e38436;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38439], null));
} else {
var e = e38436;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38439))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38443){
var map__38448 = p__38443;
var map__38448__$1 = ((cljs.core.seq_QMARK_.call(null,map__38448))?cljs.core.apply.call(null,cljs.core.hash_map,map__38448):map__38448);
var opts = map__38448__$1;
var build_id = cljs.core.get.call(null,map__38448__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38448,map__38448__$1,opts,build_id){
return (function (p__38449){
var vec__38450 = p__38449;
var map__38451 = cljs.core.nth.call(null,vec__38450,(0),null);
var map__38451__$1 = ((cljs.core.seq_QMARK_.call(null,map__38451))?cljs.core.apply.call(null,cljs.core.hash_map,map__38451):map__38451);
var msg = map__38451__$1;
var msg_name = cljs.core.get.call(null,map__38451__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38450,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__38450,map__38451,map__38451__$1,msg,msg_name,_,map__38448,map__38448__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38450,map__38451,map__38451__$1,msg,msg_name,_,map__38448,map__38448__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38448,map__38448__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38455){
var vec__38456 = p__38455;
var map__38457 = cljs.core.nth.call(null,vec__38456,(0),null);
var map__38457__$1 = ((cljs.core.seq_QMARK_.call(null,map__38457))?cljs.core.apply.call(null,cljs.core.hash_map,map__38457):map__38457);
var msg = map__38457__$1;
var msg_name = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38456,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38458){
var map__38466 = p__38458;
var map__38466__$1 = ((cljs.core.seq_QMARK_.call(null,map__38466))?cljs.core.apply.call(null,cljs.core.hash_map,map__38466):map__38466);
var on_compile_warning = cljs.core.get.call(null,map__38466__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38466__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38466,map__38466__$1,on_compile_warning,on_compile_fail){
return (function (p__38467){
var vec__38468 = p__38467;
var map__38469 = cljs.core.nth.call(null,vec__38468,(0),null);
var map__38469__$1 = ((cljs.core.seq_QMARK_.call(null,map__38469))?cljs.core.apply.call(null,cljs.core.hash_map,map__38469):map__38469);
var msg = map__38469__$1;
var msg_name = cljs.core.get.call(null,map__38469__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__38468,(1));
var pred__38470 = cljs.core._EQ_;
var expr__38471 = msg_name;
if(cljs.core.truth_(pred__38470.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38471))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38470.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38471))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38466,map__38466__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__,msg_hist,msg_names,msg){
return (function (state_38672){
var state_val_38673 = (state_38672[(1)]);
if((state_val_38673 === (7))){
var inst_38606 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38674_38715 = state_38672__$1;
(statearr_38674_38715[(2)] = inst_38606);

(statearr_38674_38715[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (20))){
var inst_38634 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38634)){
var statearr_38675_38716 = state_38672__$1;
(statearr_38675_38716[(1)] = (22));

} else {
var statearr_38676_38717 = state_38672__$1;
(statearr_38676_38717[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (27))){
var inst_38646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38647 = figwheel.client.heads_up.display_warning.call(null,inst_38646);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(30),inst_38647);
} else {
if((state_val_38673 === (1))){
var inst_38594 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38594)){
var statearr_38677_38718 = state_38672__$1;
(statearr_38677_38718[(1)] = (2));

} else {
var statearr_38678_38719 = state_38672__$1;
(statearr_38678_38719[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (24))){
var inst_38662 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38679_38720 = state_38672__$1;
(statearr_38679_38720[(2)] = inst_38662);

(statearr_38679_38720[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (4))){
var inst_38670 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38672__$1,inst_38670);
} else {
if((state_val_38673 === (15))){
var inst_38622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38623 = figwheel.client.format_messages.call(null,inst_38622);
var inst_38624 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38625 = figwheel.client.heads_up.display_error.call(null,inst_38623,inst_38624);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(18),inst_38625);
} else {
if((state_val_38673 === (21))){
var inst_38664 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38680_38721 = state_38672__$1;
(statearr_38680_38721[(2)] = inst_38664);

(statearr_38680_38721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (31))){
var inst_38653 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(34),inst_38653);
} else {
if((state_val_38673 === (32))){
var state_38672__$1 = state_38672;
var statearr_38681_38722 = state_38672__$1;
(statearr_38681_38722[(2)] = null);

(statearr_38681_38722[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (33))){
var inst_38658 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38682_38723 = state_38672__$1;
(statearr_38682_38723[(2)] = inst_38658);

(statearr_38682_38723[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (13))){
var inst_38612 = (state_38672[(2)]);
var inst_38613 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38614 = figwheel.client.format_messages.call(null,inst_38613);
var inst_38615 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38616 = figwheel.client.heads_up.display_error.call(null,inst_38614,inst_38615);
var state_38672__$1 = (function (){var statearr_38683 = state_38672;
(statearr_38683[(7)] = inst_38612);

return statearr_38683;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(14),inst_38616);
} else {
if((state_val_38673 === (22))){
var inst_38636 = figwheel.client.heads_up.clear.call(null);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(25),inst_38636);
} else {
if((state_val_38673 === (29))){
var inst_38660 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38684_38724 = state_38672__$1;
(statearr_38684_38724[(2)] = inst_38660);

(statearr_38684_38724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (6))){
var inst_38602 = figwheel.client.heads_up.clear.call(null);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(9),inst_38602);
} else {
if((state_val_38673 === (28))){
var inst_38651 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38651)){
var statearr_38685_38725 = state_38672__$1;
(statearr_38685_38725[(1)] = (31));

} else {
var statearr_38686_38726 = state_38672__$1;
(statearr_38686_38726[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (25))){
var inst_38638 = (state_38672[(2)]);
var inst_38639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38640 = figwheel.client.heads_up.display_warning.call(null,inst_38639);
var state_38672__$1 = (function (){var statearr_38687 = state_38672;
(statearr_38687[(8)] = inst_38638);

return statearr_38687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(26),inst_38640);
} else {
if((state_val_38673 === (34))){
var inst_38655 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38688_38727 = state_38672__$1;
(statearr_38688_38727[(2)] = inst_38655);

(statearr_38688_38727[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (17))){
var inst_38666 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38689_38728 = state_38672__$1;
(statearr_38689_38728[(2)] = inst_38666);

(statearr_38689_38728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (3))){
var inst_38608 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38608)){
var statearr_38690_38729 = state_38672__$1;
(statearr_38690_38729[(1)] = (10));

} else {
var statearr_38691_38730 = state_38672__$1;
(statearr_38691_38730[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (12))){
var inst_38668 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38692_38731 = state_38672__$1;
(statearr_38692_38731[(2)] = inst_38668);

(statearr_38692_38731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (2))){
var inst_38596 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38596)){
var statearr_38693_38732 = state_38672__$1;
(statearr_38693_38732[(1)] = (5));

} else {
var statearr_38694_38733 = state_38672__$1;
(statearr_38694_38733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (23))){
var inst_38644 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38644)){
var statearr_38695_38734 = state_38672__$1;
(statearr_38695_38734[(1)] = (27));

} else {
var statearr_38696_38735 = state_38672__$1;
(statearr_38696_38735[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (19))){
var inst_38631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38632 = figwheel.client.heads_up.append_message.call(null,inst_38631);
var state_38672__$1 = state_38672;
var statearr_38697_38736 = state_38672__$1;
(statearr_38697_38736[(2)] = inst_38632);

(statearr_38697_38736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (11))){
var inst_38620 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38620)){
var statearr_38698_38737 = state_38672__$1;
(statearr_38698_38737[(1)] = (15));

} else {
var statearr_38699_38738 = state_38672__$1;
(statearr_38699_38738[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (9))){
var inst_38604 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38700_38739 = state_38672__$1;
(statearr_38700_38739[(2)] = inst_38604);

(statearr_38700_38739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (5))){
var inst_38598 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(8),inst_38598);
} else {
if((state_val_38673 === (14))){
var inst_38618 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38701_38740 = state_38672__$1;
(statearr_38701_38740[(2)] = inst_38618);

(statearr_38701_38740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (26))){
var inst_38642 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38702_38741 = state_38672__$1;
(statearr_38702_38741[(2)] = inst_38642);

(statearr_38702_38741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (16))){
var inst_38629 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38672__$1 = state_38672;
if(cljs.core.truth_(inst_38629)){
var statearr_38703_38742 = state_38672__$1;
(statearr_38703_38742[(1)] = (19));

} else {
var statearr_38704_38743 = state_38672__$1;
(statearr_38704_38743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (30))){
var inst_38649 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38705_38744 = state_38672__$1;
(statearr_38705_38744[(2)] = inst_38649);

(statearr_38705_38744[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (10))){
var inst_38610 = figwheel.client.heads_up.clear.call(null);
var state_38672__$1 = state_38672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38672__$1,(13),inst_38610);
} else {
if((state_val_38673 === (18))){
var inst_38627 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38706_38745 = state_38672__$1;
(statearr_38706_38745[(2)] = inst_38627);

(statearr_38706_38745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38673 === (8))){
var inst_38600 = (state_38672[(2)]);
var state_38672__$1 = state_38672;
var statearr_38707_38746 = state_38672__$1;
(statearr_38707_38746[(2)] = inst_38600);

(statearr_38707_38746[(1)] = (7));


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
});})(c__33677__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33615__auto__,c__33677__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____0 = (function (){
var statearr_38711 = [null,null,null,null,null,null,null,null,null];
(statearr_38711[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__);

(statearr_38711[(1)] = (1));

return statearr_38711;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____1 = (function (state_38672){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_38672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e38712){if((e38712 instanceof Object)){
var ex__33619__auto__ = e38712;
var statearr_38713_38747 = state_38672;
(statearr_38713_38747[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38748 = state_38672;
state_38672 = G__38748;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__ = function(state_38672){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____1.call(this,state_38672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__,msg_hist,msg_names,msg))
})();
var state__33679__auto__ = (function (){var statearr_38714 = f__33678__auto__.call(null);
(statearr_38714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_38714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__,msg_hist,msg_names,msg))
);

return c__33677__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33677__auto___38811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___38811,ch){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___38811,ch){
return (function (state_38794){
var state_val_38795 = (state_38794[(1)]);
if((state_val_38795 === (1))){
var state_38794__$1 = state_38794;
var statearr_38796_38812 = state_38794__$1;
(statearr_38796_38812[(2)] = null);

(statearr_38796_38812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (2))){
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38794__$1,(4),ch);
} else {
if((state_val_38795 === (3))){
var inst_38792 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38794__$1,inst_38792);
} else {
if((state_val_38795 === (4))){
var inst_38782 = (state_38794[(7)]);
var inst_38782__$1 = (state_38794[(2)]);
var state_38794__$1 = (function (){var statearr_38797 = state_38794;
(statearr_38797[(7)] = inst_38782__$1);

return statearr_38797;
})();
if(cljs.core.truth_(inst_38782__$1)){
var statearr_38798_38813 = state_38794__$1;
(statearr_38798_38813[(1)] = (5));

} else {
var statearr_38799_38814 = state_38794__$1;
(statearr_38799_38814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (5))){
var inst_38782 = (state_38794[(7)]);
var inst_38784 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38782);
var state_38794__$1 = state_38794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38794__$1,(8),inst_38784);
} else {
if((state_val_38795 === (6))){
var state_38794__$1 = state_38794;
var statearr_38800_38815 = state_38794__$1;
(statearr_38800_38815[(2)] = null);

(statearr_38800_38815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (7))){
var inst_38790 = (state_38794[(2)]);
var state_38794__$1 = state_38794;
var statearr_38801_38816 = state_38794__$1;
(statearr_38801_38816[(2)] = inst_38790);

(statearr_38801_38816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38795 === (8))){
var inst_38786 = (state_38794[(2)]);
var state_38794__$1 = (function (){var statearr_38802 = state_38794;
(statearr_38802[(8)] = inst_38786);

return statearr_38802;
})();
var statearr_38803_38817 = state_38794__$1;
(statearr_38803_38817[(2)] = null);

(statearr_38803_38817[(1)] = (2));


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
});})(c__33677__auto___38811,ch))
;
return ((function (switch__33615__auto__,c__33677__auto___38811,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33616__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33616__auto____0 = (function (){
var statearr_38807 = [null,null,null,null,null,null,null,null,null];
(statearr_38807[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33616__auto__);

(statearr_38807[(1)] = (1));

return statearr_38807;
});
var figwheel$client$heads_up_plugin_$_state_machine__33616__auto____1 = (function (state_38794){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_38794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e38808){if((e38808 instanceof Object)){
var ex__33619__auto__ = e38808;
var statearr_38809_38818 = state_38794;
(statearr_38809_38818[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38819 = state_38794;
state_38794 = G__38819;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33616__auto__ = function(state_38794){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33616__auto____1.call(this,state_38794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33616__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33616__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___38811,ch))
})();
var state__33679__auto__ = (function (){var statearr_38810 = f__33678__auto__.call(null);
(statearr_38810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___38811);

return statearr_38810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___38811,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_38840){
var state_val_38841 = (state_38840[(1)]);
if((state_val_38841 === (1))){
var inst_38835 = cljs.core.async.timeout.call(null,(3000));
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(2),inst_38835);
} else {
if((state_val_38841 === (2))){
var inst_38837 = (state_38840[(2)]);
var inst_38838 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38840__$1 = (function (){var statearr_38842 = state_38840;
(statearr_38842[(7)] = inst_38837);

return statearr_38842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38840__$1,inst_38838);
} else {
return null;
}
}
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____0 = (function (){
var statearr_38846 = [null,null,null,null,null,null,null,null];
(statearr_38846[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__);

(statearr_38846[(1)] = (1));

return statearr_38846;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____1 = (function (state_38840){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_38840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e38847){if((e38847 instanceof Object)){
var ex__33619__auto__ = e38847;
var statearr_38848_38850 = state_38840;
(statearr_38848_38850[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38851 = state_38840;
state_38840 = G__38851;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__ = function(state_38840){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____1.call(this,state_38840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33616__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_38849 = f__33678__auto__.call(null);
(statearr_38849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_38849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38852){
var map__38858 = p__38852;
var map__38858__$1 = ((cljs.core.seq_QMARK_.call(null,map__38858))?cljs.core.apply.call(null,cljs.core.hash_map,map__38858):map__38858);
var ed = map__38858__$1;
var formatted_exception = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38858__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38859_38863 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38860_38864 = null;
var count__38861_38865 = (0);
var i__38862_38866 = (0);
while(true){
if((i__38862_38866 < count__38861_38865)){
var msg_38867 = cljs.core._nth.call(null,chunk__38860_38864,i__38862_38866);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38867);

var G__38868 = seq__38859_38863;
var G__38869 = chunk__38860_38864;
var G__38870 = count__38861_38865;
var G__38871 = (i__38862_38866 + (1));
seq__38859_38863 = G__38868;
chunk__38860_38864 = G__38869;
count__38861_38865 = G__38870;
i__38862_38866 = G__38871;
continue;
} else {
var temp__4425__auto___38872 = cljs.core.seq.call(null,seq__38859_38863);
if(temp__4425__auto___38872){
var seq__38859_38873__$1 = temp__4425__auto___38872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38859_38873__$1)){
var c__30597__auto___38874 = cljs.core.chunk_first.call(null,seq__38859_38873__$1);
var G__38875 = cljs.core.chunk_rest.call(null,seq__38859_38873__$1);
var G__38876 = c__30597__auto___38874;
var G__38877 = cljs.core.count.call(null,c__30597__auto___38874);
var G__38878 = (0);
seq__38859_38863 = G__38875;
chunk__38860_38864 = G__38876;
count__38861_38865 = G__38877;
i__38862_38866 = G__38878;
continue;
} else {
var msg_38879 = cljs.core.first.call(null,seq__38859_38873__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38879);

var G__38880 = cljs.core.next.call(null,seq__38859_38873__$1);
var G__38881 = null;
var G__38882 = (0);
var G__38883 = (0);
seq__38859_38863 = G__38880;
chunk__38860_38864 = G__38881;
count__38861_38865 = G__38882;
i__38862_38866 = G__38883;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38884){
var map__38886 = p__38884;
var map__38886__$1 = ((cljs.core.seq_QMARK_.call(null,map__38886))?cljs.core.apply.call(null,cljs.core.hash_map,map__38886):map__38886);
var w = map__38886__$1;
var message = cljs.core.get.call(null,map__38886__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__29800__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__29800__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__29800__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38893 = cljs.core.seq.call(null,plugins);
var chunk__38894 = null;
var count__38895 = (0);
var i__38896 = (0);
while(true){
if((i__38896 < count__38895)){
var vec__38897 = cljs.core._nth.call(null,chunk__38894,i__38896);
var k = cljs.core.nth.call(null,vec__38897,(0),null);
var plugin = cljs.core.nth.call(null,vec__38897,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38899 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38893,chunk__38894,count__38895,i__38896,pl_38899,vec__38897,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38899.call(null,msg_hist);
});})(seq__38893,chunk__38894,count__38895,i__38896,pl_38899,vec__38897,k,plugin))
);
} else {
}

var G__38900 = seq__38893;
var G__38901 = chunk__38894;
var G__38902 = count__38895;
var G__38903 = (i__38896 + (1));
seq__38893 = G__38900;
chunk__38894 = G__38901;
count__38895 = G__38902;
i__38896 = G__38903;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__38893);
if(temp__4425__auto__){
var seq__38893__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38893__$1)){
var c__30597__auto__ = cljs.core.chunk_first.call(null,seq__38893__$1);
var G__38904 = cljs.core.chunk_rest.call(null,seq__38893__$1);
var G__38905 = c__30597__auto__;
var G__38906 = cljs.core.count.call(null,c__30597__auto__);
var G__38907 = (0);
seq__38893 = G__38904;
chunk__38894 = G__38905;
count__38895 = G__38906;
i__38896 = G__38907;
continue;
} else {
var vec__38898 = cljs.core.first.call(null,seq__38893__$1);
var k = cljs.core.nth.call(null,vec__38898,(0),null);
var plugin = cljs.core.nth.call(null,vec__38898,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38908 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38893,chunk__38894,count__38895,i__38896,pl_38908,vec__38898,k,plugin,seq__38893__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38908.call(null,msg_hist);
});})(seq__38893,chunk__38894,count__38895,i__38896,pl_38908,vec__38898,k,plugin,seq__38893__$1,temp__4425__auto__))
);
} else {
}

var G__38909 = cljs.core.next.call(null,seq__38893__$1);
var G__38910 = null;
var G__38911 = (0);
var G__38912 = (0);
seq__38893 = G__38909;
chunk__38894 = G__38910;
count__38895 = G__38911;
i__38896 = G__38912;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__38914 = arguments.length;
switch (G__38914) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__30852__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__30852__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38917){
var map__38918 = p__38917;
var map__38918__$1 = ((cljs.core.seq_QMARK_.call(null,map__38918))?cljs.core.apply.call(null,cljs.core.hash_map,map__38918):map__38918);
var opts = map__38918__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38916){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38916));
});

//# sourceMappingURL=client.js.map