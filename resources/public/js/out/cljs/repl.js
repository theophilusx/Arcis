// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39174_39186 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39175_39187 = null;
var count__39176_39188 = (0);
var i__39177_39189 = (0);
while(true){
if((i__39177_39189 < count__39176_39188)){
var f_39190 = cljs.core._nth.call(null,chunk__39175_39187,i__39177_39189);
cljs.core.println.call(null,"  ",f_39190);

var G__39191 = seq__39174_39186;
var G__39192 = chunk__39175_39187;
var G__39193 = count__39176_39188;
var G__39194 = (i__39177_39189 + (1));
seq__39174_39186 = G__39191;
chunk__39175_39187 = G__39192;
count__39176_39188 = G__39193;
i__39177_39189 = G__39194;
continue;
} else {
var temp__4425__auto___39195 = cljs.core.seq.call(null,seq__39174_39186);
if(temp__4425__auto___39195){
var seq__39174_39196__$1 = temp__4425__auto___39195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39174_39196__$1)){
var c__30597__auto___39197 = cljs.core.chunk_first.call(null,seq__39174_39196__$1);
var G__39198 = cljs.core.chunk_rest.call(null,seq__39174_39196__$1);
var G__39199 = c__30597__auto___39197;
var G__39200 = cljs.core.count.call(null,c__30597__auto___39197);
var G__39201 = (0);
seq__39174_39186 = G__39198;
chunk__39175_39187 = G__39199;
count__39176_39188 = G__39200;
i__39177_39189 = G__39201;
continue;
} else {
var f_39202 = cljs.core.first.call(null,seq__39174_39196__$1);
cljs.core.println.call(null,"  ",f_39202);

var G__39203 = cljs.core.next.call(null,seq__39174_39196__$1);
var G__39204 = null;
var G__39205 = (0);
var G__39206 = (0);
seq__39174_39186 = G__39203;
chunk__39175_39187 = G__39204;
count__39176_39188 = G__39205;
i__39177_39189 = G__39206;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__29812__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39207);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39207)))?cljs.core.second.call(null,arglists_39207):arglists_39207));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39178 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39179 = null;
var count__39180 = (0);
var i__39181 = (0);
while(true){
if((i__39181 < count__39180)){
var vec__39182 = cljs.core._nth.call(null,chunk__39179,i__39181);
var name = cljs.core.nth.call(null,vec__39182,(0),null);
var map__39183 = cljs.core.nth.call(null,vec__39182,(1),null);
var map__39183__$1 = ((cljs.core.seq_QMARK_.call(null,map__39183))?cljs.core.apply.call(null,cljs.core.hash_map,map__39183):map__39183);
var doc = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39208 = seq__39178;
var G__39209 = chunk__39179;
var G__39210 = count__39180;
var G__39211 = (i__39181 + (1));
seq__39178 = G__39208;
chunk__39179 = G__39209;
count__39180 = G__39210;
i__39181 = G__39211;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__39178);
if(temp__4425__auto__){
var seq__39178__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39178__$1)){
var c__30597__auto__ = cljs.core.chunk_first.call(null,seq__39178__$1);
var G__39212 = cljs.core.chunk_rest.call(null,seq__39178__$1);
var G__39213 = c__30597__auto__;
var G__39214 = cljs.core.count.call(null,c__30597__auto__);
var G__39215 = (0);
seq__39178 = G__39212;
chunk__39179 = G__39213;
count__39180 = G__39214;
i__39181 = G__39215;
continue;
} else {
var vec__39184 = cljs.core.first.call(null,seq__39178__$1);
var name = cljs.core.nth.call(null,vec__39184,(0),null);
var map__39185 = cljs.core.nth.call(null,vec__39184,(1),null);
var map__39185__$1 = ((cljs.core.seq_QMARK_.call(null,map__39185))?cljs.core.apply.call(null,cljs.core.hash_map,map__39185):map__39185);
var doc = cljs.core.get.call(null,map__39185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39216 = cljs.core.next.call(null,seq__39178__$1);
var G__39217 = null;
var G__39218 = (0);
var G__39219 = (0);
seq__39178 = G__39216;
chunk__39179 = G__39217;
count__39180 = G__39218;
i__39181 = G__39219;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map