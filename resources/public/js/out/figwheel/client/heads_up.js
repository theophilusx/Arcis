// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__30852__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__30852__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__38931_38939 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__38932_38940 = null;
var count__38933_38941 = (0);
var i__38934_38942 = (0);
while(true){
if((i__38934_38942 < count__38933_38941)){
var k_38943 = cljs.core._nth.call(null,chunk__38932_38940,i__38934_38942);
e.setAttribute(cljs.core.name.call(null,k_38943),cljs.core.get.call(null,attrs,k_38943));

var G__38944 = seq__38931_38939;
var G__38945 = chunk__38932_38940;
var G__38946 = count__38933_38941;
var G__38947 = (i__38934_38942 + (1));
seq__38931_38939 = G__38944;
chunk__38932_38940 = G__38945;
count__38933_38941 = G__38946;
i__38934_38942 = G__38947;
continue;
} else {
var temp__4425__auto___38948 = cljs.core.seq.call(null,seq__38931_38939);
if(temp__4425__auto___38948){
var seq__38931_38949__$1 = temp__4425__auto___38948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38931_38949__$1)){
var c__30597__auto___38950 = cljs.core.chunk_first.call(null,seq__38931_38949__$1);
var G__38951 = cljs.core.chunk_rest.call(null,seq__38931_38949__$1);
var G__38952 = c__30597__auto___38950;
var G__38953 = cljs.core.count.call(null,c__30597__auto___38950);
var G__38954 = (0);
seq__38931_38939 = G__38951;
chunk__38932_38940 = G__38952;
count__38933_38941 = G__38953;
i__38934_38942 = G__38954;
continue;
} else {
var k_38955 = cljs.core.first.call(null,seq__38931_38949__$1);
e.setAttribute(cljs.core.name.call(null,k_38955),cljs.core.get.call(null,attrs,k_38955));

var G__38956 = cljs.core.next.call(null,seq__38931_38949__$1);
var G__38957 = null;
var G__38958 = (0);
var G__38959 = (0);
seq__38931_38939 = G__38956;
chunk__38932_38940 = G__38957;
count__38933_38941 = G__38958;
i__38934_38942 = G__38959;
continue;
}
} else {
}
}
break;
}

var seq__38935_38960 = cljs.core.seq.call(null,children);
var chunk__38936_38961 = null;
var count__38937_38962 = (0);
var i__38938_38963 = (0);
while(true){
if((i__38938_38963 < count__38937_38962)){
var ch_38964 = cljs.core._nth.call(null,chunk__38936_38961,i__38938_38963);
e.appendChild(ch_38964);

var G__38965 = seq__38935_38960;
var G__38966 = chunk__38936_38961;
var G__38967 = count__38937_38962;
var G__38968 = (i__38938_38963 + (1));
seq__38935_38960 = G__38965;
chunk__38936_38961 = G__38966;
count__38937_38962 = G__38967;
i__38938_38963 = G__38968;
continue;
} else {
var temp__4425__auto___38969 = cljs.core.seq.call(null,seq__38935_38960);
if(temp__4425__auto___38969){
var seq__38935_38970__$1 = temp__4425__auto___38969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38935_38970__$1)){
var c__30597__auto___38971 = cljs.core.chunk_first.call(null,seq__38935_38970__$1);
var G__38972 = cljs.core.chunk_rest.call(null,seq__38935_38970__$1);
var G__38973 = c__30597__auto___38971;
var G__38974 = cljs.core.count.call(null,c__30597__auto___38971);
var G__38975 = (0);
seq__38935_38960 = G__38972;
chunk__38936_38961 = G__38973;
count__38937_38962 = G__38974;
i__38938_38963 = G__38975;
continue;
} else {
var ch_38976 = cljs.core.first.call(null,seq__38935_38970__$1);
e.appendChild(ch_38976);

var G__38977 = cljs.core.next.call(null,seq__38935_38970__$1);
var G__38978 = null;
var G__38979 = (0);
var G__38980 = (0);
seq__38935_38960 = G__38977;
chunk__38936_38961 = G__38978;
count__38937_38962 = G__38979;
i__38938_38963 = G__38980;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq38928){
var G__38929 = cljs.core.first.call(null,seq38928);
var seq38928__$1 = cljs.core.next.call(null,seq38928);
var G__38930 = cljs.core.first.call(null,seq38928__$1);
var seq38928__$2 = cljs.core.next.call(null,seq38928__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__38929,G__38930,seq38928__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__30707__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__30708__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__30709__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__30710__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__30711__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__30707__auto__,prefer_table__30708__auto__,method_cache__30709__auto__,cached_hierarchy__30710__auto__,hierarchy__30711__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__30707__auto__,prefer_table__30708__auto__,method_cache__30709__auto__,cached_hierarchy__30710__auto__,hierarchy__30711__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__30711__auto__,method_table__30707__auto__,prefer_table__30708__auto__,method_cache__30709__auto__,cached_hierarchy__30710__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_38981 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_38981.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_38981.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_38981.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_38981);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__38982,st_map){
var map__38986 = p__38982;
var map__38986__$1 = ((cljs.core.seq_QMARK_.call(null,map__38986))?cljs.core.apply.call(null,cljs.core.hash_map,map__38986):map__38986);
var container_el = cljs.core.get.call(null,map__38986__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__38986,map__38986__$1,container_el){
return (function (p__38987){
var vec__38988 = p__38987;
var k = cljs.core.nth.call(null,vec__38988,(0),null);
var v = cljs.core.nth.call(null,vec__38988,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__38986,map__38986__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__38989,dom_str){
var map__38991 = p__38989;
var map__38991__$1 = ((cljs.core.seq_QMARK_.call(null,map__38991))?cljs.core.apply.call(null,cljs.core.hash_map,map__38991):map__38991);
var c = map__38991__$1;
var content_area_el = cljs.core.get.call(null,map__38991__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__38992){
var map__38994 = p__38992;
var map__38994__$1 = ((cljs.core.seq_QMARK_.call(null,map__38994))?cljs.core.apply.call(null,cljs.core.hash_map,map__38994):map__38994);
var content_area_el = cljs.core.get.call(null,map__38994__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_39036){
var state_val_39037 = (state_39036[(1)]);
if((state_val_39037 === (1))){
var inst_39021 = (state_39036[(7)]);
var inst_39021__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39022 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39023 = ["10px","10px","100%","68px","1.0"];
var inst_39024 = cljs.core.PersistentHashMap.fromArrays(inst_39022,inst_39023);
var inst_39025 = cljs.core.merge.call(null,inst_39024,style);
var inst_39026 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39021__$1,inst_39025);
var inst_39027 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39021__$1,msg);
var inst_39028 = cljs.core.async.timeout.call(null,(300));
var state_39036__$1 = (function (){var statearr_39038 = state_39036;
(statearr_39038[(8)] = inst_39026);

(statearr_39038[(9)] = inst_39027);

(statearr_39038[(7)] = inst_39021__$1);

return statearr_39038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39036__$1,(2),inst_39028);
} else {
if((state_val_39037 === (2))){
var inst_39021 = (state_39036[(7)]);
var inst_39030 = (state_39036[(2)]);
var inst_39031 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_39032 = ["auto"];
var inst_39033 = cljs.core.PersistentHashMap.fromArrays(inst_39031,inst_39032);
var inst_39034 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39021,inst_39033);
var state_39036__$1 = (function (){var statearr_39039 = state_39036;
(statearr_39039[(10)] = inst_39030);

return statearr_39039;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39036__$1,inst_39034);
} else {
return null;
}
}
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____0 = (function (){
var statearr_39043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39043[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__);

(statearr_39043[(1)] = (1));

return statearr_39043;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____1 = (function (state_39036){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39044){if((e39044 instanceof Object)){
var ex__33619__auto__ = e39044;
var statearr_39045_39047 = state_39036;
(statearr_39045_39047[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39048 = state_39036;
state_39036 = G__39048;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__ = function(state_39036){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____1.call(this,state_39036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_39046 = f__33678__auto__.call(null);
(statearr_39046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_39046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__39050 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__39050,(0),null);
var ln = cljs.core.nth.call(null,vec__39050,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__39053 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__39053,(0),null);
var file_line = cljs.core.nth.call(null,vec__39053,(1),null);
var file_column = cljs.core.nth.call(null,vec__39053,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__39053,file_name,file_line,file_column){
return (function (p1__39051_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__39051_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__39053,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__29812__auto__ = file_line;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
var and__29800__auto__ = cause;
if(cljs.core.truth_(and__29800__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__29800__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__39055 = figwheel.client.heads_up.ensure_container.call(null);
var map__39055__$1 = ((cljs.core.seq_QMARK_.call(null,map__39055))?cljs.core.apply.call(null,cljs.core.hash_map,map__39055):map__39055);
var content_area_el = cljs.core.get.call(null,map__39055__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_39102){
var state_val_39103 = (state_39102[(1)]);
if((state_val_39103 === (1))){
var inst_39085 = (state_39102[(7)]);
var inst_39085__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_39086 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_39087 = ["0.0"];
var inst_39088 = cljs.core.PersistentHashMap.fromArrays(inst_39086,inst_39087);
var inst_39089 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39085__$1,inst_39088);
var inst_39090 = cljs.core.async.timeout.call(null,(300));
var state_39102__$1 = (function (){var statearr_39104 = state_39102;
(statearr_39104[(7)] = inst_39085__$1);

(statearr_39104[(8)] = inst_39089);

return statearr_39104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39102__$1,(2),inst_39090);
} else {
if((state_val_39103 === (2))){
var inst_39085 = (state_39102[(7)]);
var inst_39092 = (state_39102[(2)]);
var inst_39093 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_39094 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_39095 = cljs.core.PersistentHashMap.fromArrays(inst_39093,inst_39094);
var inst_39096 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_39085,inst_39095);
var inst_39097 = cljs.core.async.timeout.call(null,(200));
var state_39102__$1 = (function (){var statearr_39105 = state_39102;
(statearr_39105[(9)] = inst_39092);

(statearr_39105[(10)] = inst_39096);

return statearr_39105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39102__$1,(3),inst_39097);
} else {
if((state_val_39103 === (3))){
var inst_39085 = (state_39102[(7)]);
var inst_39099 = (state_39102[(2)]);
var inst_39100 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_39085,"");
var state_39102__$1 = (function (){var statearr_39106 = state_39102;
(statearr_39106[(11)] = inst_39099);

return statearr_39106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39102__$1,inst_39100);
} else {
return null;
}
}
}
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__33616__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__33616__auto____0 = (function (){
var statearr_39110 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39110[(0)] = figwheel$client$heads_up$clear_$_state_machine__33616__auto__);

(statearr_39110[(1)] = (1));

return statearr_39110;
});
var figwheel$client$heads_up$clear_$_state_machine__33616__auto____1 = (function (state_39102){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39111){if((e39111 instanceof Object)){
var ex__33619__auto__ = e39111;
var statearr_39112_39114 = state_39102;
(statearr_39112_39114[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39115 = state_39102;
state_39102 = G__39115;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__33616__auto__ = function(state_39102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__33616__auto____1.call(this,state_39102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__33616__auto____0;
figwheel$client$heads_up$clear_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__33616__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_39113 = f__33678__auto__.call(null);
(statearr_39113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_39113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_39147){
var state_val_39148 = (state_39147[(1)]);
if((state_val_39148 === (1))){
var inst_39137 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_39147__$1 = state_39147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39147__$1,(2),inst_39137);
} else {
if((state_val_39148 === (2))){
var inst_39139 = (state_39147[(2)]);
var inst_39140 = cljs.core.async.timeout.call(null,(400));
var state_39147__$1 = (function (){var statearr_39149 = state_39147;
(statearr_39149[(7)] = inst_39139);

return statearr_39149;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39147__$1,(3),inst_39140);
} else {
if((state_val_39148 === (3))){
var inst_39142 = (state_39147[(2)]);
var inst_39143 = figwheel.client.heads_up.clear.call(null);
var state_39147__$1 = (function (){var statearr_39150 = state_39147;
(statearr_39150[(8)] = inst_39142);

return statearr_39150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39147__$1,(4),inst_39143);
} else {
if((state_val_39148 === (4))){
var inst_39145 = (state_39147[(2)]);
var state_39147__$1 = state_39147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39147__$1,inst_39145);
} else {
return null;
}
}
}
}
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____0 = (function (){
var statearr_39154 = [null,null,null,null,null,null,null,null,null];
(statearr_39154[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__);

(statearr_39154[(1)] = (1));

return statearr_39154;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____1 = (function (state_39147){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_39147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e39155){if((e39155 instanceof Object)){
var ex__33619__auto__ = e39155;
var statearr_39156_39158 = state_39147;
(statearr_39156_39158[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39159 = state_39147;
state_39147 = G__39159;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__ = function(state_39147){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____1.call(this,state_39147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_39157 = f__33678__auto__.call(null);
(statearr_39157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_39157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map