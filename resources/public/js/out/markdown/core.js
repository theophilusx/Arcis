// Compiled by ClojureScript 0.0-3308 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__38109){
var map__38115 = p__38109;
var map__38115__$1 = ((cljs.core.seq_QMARK_.call(null,map__38115))?cljs.core.apply.call(null,cljs.core.hash_map,map__38115):map__38115);
var replacement_transformers = cljs.core.get.call(null,map__38115__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__38115__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__38115,map__38115__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_38116 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__38117 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_38116,map__38115,map__38115__$1,replacement_transformers,custom_transformers){
return (function (p__38118,transformer){
var vec__38119 = p__38118;
var text = cljs.core.nth.call(null,vec__38119,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__38119,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_38116,map__38115,map__38115__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__29812__auto__ = replacement_transformers;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__38117,(0),null);
var new_state = cljs.core.nth.call(null,vec__38117,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_38116;
}});
;})(map__38115,map__38115__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(){
var argseq__30852__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30852__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq38120){
var G__38121 = cljs.core.first.call(null,seq38120);
var seq38120__$1 = cljs.core.next.call(null,seq38120);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__38121,seq38120__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__38126_38130 = cljs.core.seq.call(null,lines);
var chunk__38127_38131 = null;
var count__38128_38132 = (0);
var i__38129_38133 = (0);
while(true){
if((i__38129_38133 < count__38128_38132)){
var line_38134 = cljs.core._nth.call(null,chunk__38127_38131,i__38129_38133);
markdown.transformers.parse_reference_link.call(null,line_38134,references);

var G__38135 = seq__38126_38130;
var G__38136 = chunk__38127_38131;
var G__38137 = count__38128_38132;
var G__38138 = (i__38129_38133 + (1));
seq__38126_38130 = G__38135;
chunk__38127_38131 = G__38136;
count__38128_38132 = G__38137;
i__38129_38133 = G__38138;
continue;
} else {
var temp__4425__auto___38139 = cljs.core.seq.call(null,seq__38126_38130);
if(temp__4425__auto___38139){
var seq__38126_38140__$1 = temp__4425__auto___38139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38126_38140__$1)){
var c__30597__auto___38141 = cljs.core.chunk_first.call(null,seq__38126_38140__$1);
var G__38142 = cljs.core.chunk_rest.call(null,seq__38126_38140__$1);
var G__38143 = c__30597__auto___38141;
var G__38144 = cljs.core.count.call(null,c__30597__auto___38141);
var G__38145 = (0);
seq__38126_38130 = G__38142;
chunk__38127_38131 = G__38143;
count__38128_38132 = G__38144;
i__38129_38133 = G__38145;
continue;
} else {
var line_38146 = cljs.core.first.call(null,seq__38126_38140__$1);
markdown.transformers.parse_reference_link.call(null,line_38146,references);

var G__38147 = cljs.core.next.call(null,seq__38126_38140__$1);
var G__38148 = null;
var G__38149 = (0);
var G__38150 = (0);
seq__38126_38130 = G__38147;
chunk__38127_38131 = G__38148;
count__38128_38132 = G__38149;
i__38129_38133 = G__38150;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(){
var argseq__30852__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30852__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_38153 = markdown.transformers._STAR_substring_STAR_;
var formatter38154 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_38153,formatter38154){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_38153,formatter38154))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__38156_38159 = lines;
var vec__38157_38160 = G__38156_38159;
var line_38161 = cljs.core.nth.call(null,vec__38157_38160,(0),null);
var more_38162 = cljs.core.nthnext.call(null,vec__38157_38160,(1));
var state_38163 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__38156_38164__$1 = G__38156_38159;
var state_38165__$1 = state_38163;
while(true){
var vec__38158_38166 = G__38156_38164__$1;
var line_38167__$1 = cljs.core.nth.call(null,vec__38158_38166,(0),null);
var more_38168__$1 = cljs.core.nthnext.call(null,vec__38158_38166,(1));
var state_38169__$2 = state_38165__$1;
var state_38170__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_38169__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_38169__$2),cljs.core.first.call(null,more_38168__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_38169__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_38169__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_38168__$1))){
var G__38171 = more_38168__$1;
var G__38172 = cljs.core.assoc.call(null,transformer.call(null,html,line_38167__$1,cljs.core.first.call(null,more_38168__$1),state_38170__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_38167__$1));
G__38156_38164__$1 = G__38171;
state_38165__$1 = G__38172;
continue;
} else {
transformer.call(null,html,line_38167__$1,"",cljs.core.assoc.call(null,state_38170__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter38154;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_38153;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq38151){
var G__38152 = cljs.core.first.call(null,seq38151);
var seq38151__$1 = cljs.core.next.call(null,seq38151);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__38152,seq38151__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(){
var argseq__30852__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__30852__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq38173){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38173));
});

//# sourceMappingURL=core.js.map