// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t39953 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39953 = (function (fn_handler,f,meta39954){
this.fn_handler = fn_handler;
this.f = f;
this.meta39954 = meta39954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t39953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39955,meta39954__$1){
var self__ = this;
var _39955__$1 = this;
return (new cljs.core.async.t39953(self__.fn_handler,self__.f,meta39954__$1));
});

cljs.core.async.t39953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39955){
var self__ = this;
var _39955__$1 = this;
return self__.meta39954;
});

cljs.core.async.t39953.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t39953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t39953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta39954","meta39954",1405107754,null)], null);
});

cljs.core.async.t39953.cljs$lang$type = true;

cljs.core.async.t39953.cljs$lang$ctorStr = "cljs.core.async/t39953";

cljs.core.async.t39953.cljs$lang$ctorPrWriter = (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t39953");
});

cljs.core.async.__GT_t39953 = (function cljs$core$async$fn_handler_$___GT_t39953(fn_handler__$1,f__$1,meta39954){
return (new cljs.core.async.t39953(fn_handler__$1,f__$1,meta39954));
});

}

return (new cljs.core.async.t39953(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__39957 = buff;
if(G__39957){
var bit__30486__auto__ = null;
if(cljs.core.truth_((function (){var or__29812__auto__ = bit__30486__auto__;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return G__39957.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__39957.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__39957);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__39957);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__39959 = arguments.length;
switch (G__39959) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__39962 = arguments.length;
switch (G__39962) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39964 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39964);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39964,ret){
return (function (){
return fn1.call(null,val_39964);
});})(val_39964,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__39966 = arguments.length;
switch (G__39966) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__30697__auto___39968 = n;
var x_39969 = (0);
while(true){
if((x_39969 < n__30697__auto___39968)){
(a[x_39969] = (0));

var G__39970 = (x_39969 + (1));
x_39969 = G__39970;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39971 = (i + (1));
i = G__39971;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t39975 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39975 = (function (alt_flag,flag,meta39976){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39976 = meta39976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t39975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39977,meta39976__$1){
var self__ = this;
var _39977__$1 = this;
return (new cljs.core.async.t39975(self__.alt_flag,self__.flag,meta39976__$1));
});})(flag))
;

cljs.core.async.t39975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39977){
var self__ = this;
var _39977__$1 = this;
return self__.meta39976;
});})(flag))
;

cljs.core.async.t39975.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t39975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t39975.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39976","meta39976",-693827727,null)], null);
});})(flag))
;

cljs.core.async.t39975.cljs$lang$type = true;

cljs.core.async.t39975.cljs$lang$ctorStr = "cljs.core.async/t39975";

cljs.core.async.t39975.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t39975");
});})(flag))
;

cljs.core.async.__GT_t39975 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t39975(alt_flag__$1,flag__$1,meta39976){
return (new cljs.core.async.t39975(alt_flag__$1,flag__$1,meta39976));
});})(flag))
;

}

return (new cljs.core.async.t39975(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t39981 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39981 = (function (alt_handler,flag,cb,meta39982){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39982 = meta39982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t39981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39983,meta39982__$1){
var self__ = this;
var _39983__$1 = this;
return (new cljs.core.async.t39981(self__.alt_handler,self__.flag,self__.cb,meta39982__$1));
});

cljs.core.async.t39981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39983){
var self__ = this;
var _39983__$1 = this;
return self__.meta39982;
});

cljs.core.async.t39981.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t39981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t39981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39982","meta39982",212302879,null)], null);
});

cljs.core.async.t39981.cljs$lang$type = true;

cljs.core.async.t39981.cljs$lang$ctorStr = "cljs.core.async/t39981";

cljs.core.async.t39981.cljs$lang$ctorPrWriter = (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t39981");
});

cljs.core.async.__GT_t39981 = (function cljs$core$async$alt_handler_$___GT_t39981(alt_handler__$1,flag__$1,cb__$1,meta39982){
return (new cljs.core.async.t39981(alt_handler__$1,flag__$1,cb__$1,meta39982));
});

}

return (new cljs.core.async.t39981(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39984_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39984_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39985_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39985_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__29812__auto__ = wport;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39986 = (i + (1));
i = G__39986;
continue;
}
} else {
return null;
}
break;
}
})();
var or__29812__auto__ = ret;
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__29800__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__29800__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__29800__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__30852__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__30852__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39989){
var map__39990 = p__39989;
var map__39990__$1 = ((cljs.core.seq_QMARK_.call(null,map__39990))?cljs.core.apply.call(null,cljs.core.hash_map,map__39990):map__39990);
var opts = map__39990__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39987){
var G__39988 = cljs.core.first.call(null,seq39987);
var seq39987__$1 = cljs.core.next.call(null,seq39987);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39988,seq39987__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__39992 = arguments.length;
switch (G__39992) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33677__auto___40041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___40041){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___40041){
return (function (state_40016){
var state_val_40017 = (state_40016[(1)]);
if((state_val_40017 === (7))){
var inst_40012 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40018_40042 = state_40016__$1;
(statearr_40018_40042[(2)] = inst_40012);

(statearr_40018_40042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (1))){
var state_40016__$1 = state_40016;
var statearr_40019_40043 = state_40016__$1;
(statearr_40019_40043[(2)] = null);

(statearr_40019_40043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (4))){
var inst_39995 = (state_40016[(7)]);
var inst_39995__$1 = (state_40016[(2)]);
var inst_39996 = (inst_39995__$1 == null);
var state_40016__$1 = (function (){var statearr_40020 = state_40016;
(statearr_40020[(7)] = inst_39995__$1);

return statearr_40020;
})();
if(cljs.core.truth_(inst_39996)){
var statearr_40021_40044 = state_40016__$1;
(statearr_40021_40044[(1)] = (5));

} else {
var statearr_40022_40045 = state_40016__$1;
(statearr_40022_40045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (13))){
var state_40016__$1 = state_40016;
var statearr_40023_40046 = state_40016__$1;
(statearr_40023_40046[(2)] = null);

(statearr_40023_40046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (6))){
var inst_39995 = (state_40016[(7)]);
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40016__$1,(11),to,inst_39995);
} else {
if((state_val_40017 === (3))){
var inst_40014 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40016__$1,inst_40014);
} else {
if((state_val_40017 === (12))){
var state_40016__$1 = state_40016;
var statearr_40024_40047 = state_40016__$1;
(statearr_40024_40047[(2)] = null);

(statearr_40024_40047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (2))){
var state_40016__$1 = state_40016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40016__$1,(4),from);
} else {
if((state_val_40017 === (11))){
var inst_40005 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
if(cljs.core.truth_(inst_40005)){
var statearr_40025_40048 = state_40016__$1;
(statearr_40025_40048[(1)] = (12));

} else {
var statearr_40026_40049 = state_40016__$1;
(statearr_40026_40049[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (9))){
var state_40016__$1 = state_40016;
var statearr_40027_40050 = state_40016__$1;
(statearr_40027_40050[(2)] = null);

(statearr_40027_40050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (5))){
var state_40016__$1 = state_40016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40028_40051 = state_40016__$1;
(statearr_40028_40051[(1)] = (8));

} else {
var statearr_40029_40052 = state_40016__$1;
(statearr_40029_40052[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (14))){
var inst_40010 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40030_40053 = state_40016__$1;
(statearr_40030_40053[(2)] = inst_40010);

(statearr_40030_40053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (10))){
var inst_40002 = (state_40016[(2)]);
var state_40016__$1 = state_40016;
var statearr_40031_40054 = state_40016__$1;
(statearr_40031_40054[(2)] = inst_40002);

(statearr_40031_40054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40017 === (8))){
var inst_39999 = cljs.core.async.close_BANG_.call(null,to);
var state_40016__$1 = state_40016;
var statearr_40032_40055 = state_40016__$1;
(statearr_40032_40055[(2)] = inst_39999);

(statearr_40032_40055[(1)] = (10));


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
});})(c__33677__auto___40041))
;
return ((function (switch__33615__auto__,c__33677__auto___40041){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_40036 = [null,null,null,null,null,null,null,null];
(statearr_40036[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_40036[(1)] = (1));

return statearr_40036;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_40016){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40037){if((e40037 instanceof Object)){
var ex__33619__auto__ = e40037;
var statearr_40038_40056 = state_40016;
(statearr_40038_40056[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40057 = state_40016;
state_40016 = G__40057;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_40016){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_40016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___40041))
})();
var state__33679__auto__ = (function (){var statearr_40039 = f__33678__auto__.call(null);
(statearr_40039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40041);

return statearr_40039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___40041))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__40241){
var vec__40242 = p__40241;
var v = cljs.core.nth.call(null,vec__40242,(0),null);
var p = cljs.core.nth.call(null,vec__40242,(1),null);
var job = vec__40242;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33677__auto___40424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results){
return (function (state_40247){
var state_val_40248 = (state_40247[(1)]);
if((state_val_40248 === (1))){
var state_40247__$1 = state_40247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40247__$1,(2),res,v);
} else {
if((state_val_40248 === (2))){
var inst_40244 = (state_40247[(2)]);
var inst_40245 = cljs.core.async.close_BANG_.call(null,res);
var state_40247__$1 = (function (){var statearr_40249 = state_40247;
(statearr_40249[(7)] = inst_40244);

return statearr_40249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40247__$1,inst_40245);
} else {
return null;
}
}
});})(c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results))
;
return ((function (switch__33615__auto__,c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_40253 = [null,null,null,null,null,null,null,null];
(statearr_40253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__);

(statearr_40253[(1)] = (1));

return statearr_40253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1 = (function (state_40247){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40254){if((e40254 instanceof Object)){
var ex__33619__auto__ = e40254;
var statearr_40255_40425 = state_40247;
(statearr_40255_40425[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40426 = state_40247;
state_40247 = G__40426;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = function(state_40247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1.call(this,state_40247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results))
})();
var state__33679__auto__ = (function (){var statearr_40256 = f__33678__auto__.call(null);
(statearr_40256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40424);

return statearr_40256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___40424,res,vec__40242,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40257){
var vec__40258 = p__40257;
var v = cljs.core.nth.call(null,vec__40258,(0),null);
var p = cljs.core.nth.call(null,vec__40258,(1),null);
var job = vec__40258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__30697__auto___40427 = n;
var __40428 = (0);
while(true){
if((__40428 < n__30697__auto___40427)){
var G__40259_40429 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40259_40429) {
case "compute":
var c__33677__auto___40431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40428,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (__40428,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function (state_40272){
var state_val_40273 = (state_40272[(1)]);
if((state_val_40273 === (1))){
var state_40272__$1 = state_40272;
var statearr_40274_40432 = state_40272__$1;
(statearr_40274_40432[(2)] = null);

(statearr_40274_40432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (2))){
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40272__$1,(4),jobs);
} else {
if((state_val_40273 === (3))){
var inst_40270 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40272__$1,inst_40270);
} else {
if((state_val_40273 === (4))){
var inst_40262 = (state_40272[(2)]);
var inst_40263 = process.call(null,inst_40262);
var state_40272__$1 = state_40272;
if(cljs.core.truth_(inst_40263)){
var statearr_40275_40433 = state_40272__$1;
(statearr_40275_40433[(1)] = (5));

} else {
var statearr_40276_40434 = state_40272__$1;
(statearr_40276_40434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (5))){
var state_40272__$1 = state_40272;
var statearr_40277_40435 = state_40272__$1;
(statearr_40277_40435[(2)] = null);

(statearr_40277_40435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (6))){
var state_40272__$1 = state_40272;
var statearr_40278_40436 = state_40272__$1;
(statearr_40278_40436[(2)] = null);

(statearr_40278_40436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40273 === (7))){
var inst_40268 = (state_40272[(2)]);
var state_40272__$1 = state_40272;
var statearr_40279_40437 = state_40272__$1;
(statearr_40279_40437[(2)] = inst_40268);

(statearr_40279_40437[(1)] = (3));


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
});})(__40428,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
;
return ((function (__40428,switch__33615__auto__,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_40283 = [null,null,null,null,null,null,null];
(statearr_40283[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__);

(statearr_40283[(1)] = (1));

return statearr_40283;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1 = (function (state_40272){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40284){if((e40284 instanceof Object)){
var ex__33619__auto__ = e40284;
var statearr_40285_40438 = state_40272;
(statearr_40285_40438[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40439 = state_40272;
state_40272 = G__40439;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = function(state_40272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1.call(this,state_40272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__;
})()
;})(__40428,switch__33615__auto__,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
})();
var state__33679__auto__ = (function (){var statearr_40286 = f__33678__auto__.call(null);
(statearr_40286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40431);

return statearr_40286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(__40428,c__33677__auto___40431,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
);


break;
case "async":
var c__33677__auto___40440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40428,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (__40428,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function (state_40299){
var state_val_40300 = (state_40299[(1)]);
if((state_val_40300 === (1))){
var state_40299__$1 = state_40299;
var statearr_40301_40441 = state_40299__$1;
(statearr_40301_40441[(2)] = null);

(statearr_40301_40441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (2))){
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40299__$1,(4),jobs);
} else {
if((state_val_40300 === (3))){
var inst_40297 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40299__$1,inst_40297);
} else {
if((state_val_40300 === (4))){
var inst_40289 = (state_40299[(2)]);
var inst_40290 = async.call(null,inst_40289);
var state_40299__$1 = state_40299;
if(cljs.core.truth_(inst_40290)){
var statearr_40302_40442 = state_40299__$1;
(statearr_40302_40442[(1)] = (5));

} else {
var statearr_40303_40443 = state_40299__$1;
(statearr_40303_40443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (5))){
var state_40299__$1 = state_40299;
var statearr_40304_40444 = state_40299__$1;
(statearr_40304_40444[(2)] = null);

(statearr_40304_40444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (6))){
var state_40299__$1 = state_40299;
var statearr_40305_40445 = state_40299__$1;
(statearr_40305_40445[(2)] = null);

(statearr_40305_40445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40300 === (7))){
var inst_40295 = (state_40299[(2)]);
var state_40299__$1 = state_40299;
var statearr_40306_40446 = state_40299__$1;
(statearr_40306_40446[(2)] = inst_40295);

(statearr_40306_40446[(1)] = (3));


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
});})(__40428,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
;
return ((function (__40428,switch__33615__auto__,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_40310 = [null,null,null,null,null,null,null];
(statearr_40310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__);

(statearr_40310[(1)] = (1));

return statearr_40310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1 = (function (state_40299){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40311){if((e40311 instanceof Object)){
var ex__33619__auto__ = e40311;
var statearr_40312_40447 = state_40299;
(statearr_40312_40447[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40448 = state_40299;
state_40299 = G__40448;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = function(state_40299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1.call(this,state_40299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__;
})()
;})(__40428,switch__33615__auto__,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
})();
var state__33679__auto__ = (function (){var statearr_40313 = f__33678__auto__.call(null);
(statearr_40313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40440);

return statearr_40313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(__40428,c__33677__auto___40440,G__40259_40429,n__30697__auto___40427,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40449 = (__40428 + (1));
__40428 = G__40449;
continue;
} else {
}
break;
}

var c__33677__auto___40450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___40450,jobs,results,process,async){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___40450,jobs,results,process,async){
return (function (state_40335){
var state_val_40336 = (state_40335[(1)]);
if((state_val_40336 === (1))){
var state_40335__$1 = state_40335;
var statearr_40337_40451 = state_40335__$1;
(statearr_40337_40451[(2)] = null);

(statearr_40337_40451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (2))){
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40335__$1,(4),from);
} else {
if((state_val_40336 === (3))){
var inst_40333 = (state_40335[(2)]);
var state_40335__$1 = state_40335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40335__$1,inst_40333);
} else {
if((state_val_40336 === (4))){
var inst_40316 = (state_40335[(7)]);
var inst_40316__$1 = (state_40335[(2)]);
var inst_40317 = (inst_40316__$1 == null);
var state_40335__$1 = (function (){var statearr_40338 = state_40335;
(statearr_40338[(7)] = inst_40316__$1);

return statearr_40338;
})();
if(cljs.core.truth_(inst_40317)){
var statearr_40339_40452 = state_40335__$1;
(statearr_40339_40452[(1)] = (5));

} else {
var statearr_40340_40453 = state_40335__$1;
(statearr_40340_40453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (5))){
var inst_40319 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40335__$1 = state_40335;
var statearr_40341_40454 = state_40335__$1;
(statearr_40341_40454[(2)] = inst_40319);

(statearr_40341_40454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (6))){
var inst_40316 = (state_40335[(7)]);
var inst_40321 = (state_40335[(8)]);
var inst_40321__$1 = cljs.core.async.chan.call(null,(1));
var inst_40322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40323 = [inst_40316,inst_40321__$1];
var inst_40324 = (new cljs.core.PersistentVector(null,2,(5),inst_40322,inst_40323,null));
var state_40335__$1 = (function (){var statearr_40342 = state_40335;
(statearr_40342[(8)] = inst_40321__$1);

return statearr_40342;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40335__$1,(8),jobs,inst_40324);
} else {
if((state_val_40336 === (7))){
var inst_40331 = (state_40335[(2)]);
var state_40335__$1 = state_40335;
var statearr_40343_40455 = state_40335__$1;
(statearr_40343_40455[(2)] = inst_40331);

(statearr_40343_40455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40336 === (8))){
var inst_40321 = (state_40335[(8)]);
var inst_40326 = (state_40335[(2)]);
var state_40335__$1 = (function (){var statearr_40344 = state_40335;
(statearr_40344[(9)] = inst_40326);

return statearr_40344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40335__$1,(9),results,inst_40321);
} else {
if((state_val_40336 === (9))){
var inst_40328 = (state_40335[(2)]);
var state_40335__$1 = (function (){var statearr_40345 = state_40335;
(statearr_40345[(10)] = inst_40328);

return statearr_40345;
})();
var statearr_40346_40456 = state_40335__$1;
(statearr_40346_40456[(2)] = null);

(statearr_40346_40456[(1)] = (2));


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
});})(c__33677__auto___40450,jobs,results,process,async))
;
return ((function (switch__33615__auto__,c__33677__auto___40450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_40350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__);

(statearr_40350[(1)] = (1));

return statearr_40350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1 = (function (state_40335){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40351){if((e40351 instanceof Object)){
var ex__33619__auto__ = e40351;
var statearr_40352_40457 = state_40335;
(statearr_40352_40457[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40458 = state_40335;
state_40335 = G__40458;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = function(state_40335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1.call(this,state_40335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___40450,jobs,results,process,async))
})();
var state__33679__auto__ = (function (){var statearr_40353 = f__33678__auto__.call(null);
(statearr_40353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40450);

return statearr_40353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___40450,jobs,results,process,async))
);


var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__,jobs,results,process,async){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__,jobs,results,process,async){
return (function (state_40391){
var state_val_40392 = (state_40391[(1)]);
if((state_val_40392 === (7))){
var inst_40387 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
var statearr_40393_40459 = state_40391__$1;
(statearr_40393_40459[(2)] = inst_40387);

(statearr_40393_40459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (20))){
var state_40391__$1 = state_40391;
var statearr_40394_40460 = state_40391__$1;
(statearr_40394_40460[(2)] = null);

(statearr_40394_40460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (1))){
var state_40391__$1 = state_40391;
var statearr_40395_40461 = state_40391__$1;
(statearr_40395_40461[(2)] = null);

(statearr_40395_40461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (4))){
var inst_40356 = (state_40391[(7)]);
var inst_40356__$1 = (state_40391[(2)]);
var inst_40357 = (inst_40356__$1 == null);
var state_40391__$1 = (function (){var statearr_40396 = state_40391;
(statearr_40396[(7)] = inst_40356__$1);

return statearr_40396;
})();
if(cljs.core.truth_(inst_40357)){
var statearr_40397_40462 = state_40391__$1;
(statearr_40397_40462[(1)] = (5));

} else {
var statearr_40398_40463 = state_40391__$1;
(statearr_40398_40463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (15))){
var inst_40369 = (state_40391[(8)]);
var state_40391__$1 = state_40391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40391__$1,(18),to,inst_40369);
} else {
if((state_val_40392 === (21))){
var inst_40382 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
var statearr_40399_40464 = state_40391__$1;
(statearr_40399_40464[(2)] = inst_40382);

(statearr_40399_40464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (13))){
var inst_40384 = (state_40391[(2)]);
var state_40391__$1 = (function (){var statearr_40400 = state_40391;
(statearr_40400[(9)] = inst_40384);

return statearr_40400;
})();
var statearr_40401_40465 = state_40391__$1;
(statearr_40401_40465[(2)] = null);

(statearr_40401_40465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (6))){
var inst_40356 = (state_40391[(7)]);
var state_40391__$1 = state_40391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40391__$1,(11),inst_40356);
} else {
if((state_val_40392 === (17))){
var inst_40377 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
if(cljs.core.truth_(inst_40377)){
var statearr_40402_40466 = state_40391__$1;
(statearr_40402_40466[(1)] = (19));

} else {
var statearr_40403_40467 = state_40391__$1;
(statearr_40403_40467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (3))){
var inst_40389 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40391__$1,inst_40389);
} else {
if((state_val_40392 === (12))){
var inst_40366 = (state_40391[(10)]);
var state_40391__$1 = state_40391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40391__$1,(14),inst_40366);
} else {
if((state_val_40392 === (2))){
var state_40391__$1 = state_40391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40391__$1,(4),results);
} else {
if((state_val_40392 === (19))){
var state_40391__$1 = state_40391;
var statearr_40404_40468 = state_40391__$1;
(statearr_40404_40468[(2)] = null);

(statearr_40404_40468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (11))){
var inst_40366 = (state_40391[(2)]);
var state_40391__$1 = (function (){var statearr_40405 = state_40391;
(statearr_40405[(10)] = inst_40366);

return statearr_40405;
})();
var statearr_40406_40469 = state_40391__$1;
(statearr_40406_40469[(2)] = null);

(statearr_40406_40469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (9))){
var state_40391__$1 = state_40391;
var statearr_40407_40470 = state_40391__$1;
(statearr_40407_40470[(2)] = null);

(statearr_40407_40470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (5))){
var state_40391__$1 = state_40391;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40408_40471 = state_40391__$1;
(statearr_40408_40471[(1)] = (8));

} else {
var statearr_40409_40472 = state_40391__$1;
(statearr_40409_40472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (14))){
var inst_40371 = (state_40391[(11)]);
var inst_40369 = (state_40391[(8)]);
var inst_40369__$1 = (state_40391[(2)]);
var inst_40370 = (inst_40369__$1 == null);
var inst_40371__$1 = cljs.core.not.call(null,inst_40370);
var state_40391__$1 = (function (){var statearr_40410 = state_40391;
(statearr_40410[(11)] = inst_40371__$1);

(statearr_40410[(8)] = inst_40369__$1);

return statearr_40410;
})();
if(inst_40371__$1){
var statearr_40411_40473 = state_40391__$1;
(statearr_40411_40473[(1)] = (15));

} else {
var statearr_40412_40474 = state_40391__$1;
(statearr_40412_40474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (16))){
var inst_40371 = (state_40391[(11)]);
var state_40391__$1 = state_40391;
var statearr_40413_40475 = state_40391__$1;
(statearr_40413_40475[(2)] = inst_40371);

(statearr_40413_40475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (10))){
var inst_40363 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
var statearr_40414_40476 = state_40391__$1;
(statearr_40414_40476[(2)] = inst_40363);

(statearr_40414_40476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (18))){
var inst_40374 = (state_40391[(2)]);
var state_40391__$1 = state_40391;
var statearr_40415_40477 = state_40391__$1;
(statearr_40415_40477[(2)] = inst_40374);

(statearr_40415_40477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40392 === (8))){
var inst_40360 = cljs.core.async.close_BANG_.call(null,to);
var state_40391__$1 = state_40391;
var statearr_40416_40478 = state_40391__$1;
(statearr_40416_40478[(2)] = inst_40360);

(statearr_40416_40478[(1)] = (10));


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
});})(c__33677__auto__,jobs,results,process,async))
;
return ((function (switch__33615__auto__,c__33677__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_40420 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__);

(statearr_40420[(1)] = (1));

return statearr_40420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1 = (function (state_40391){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40421){if((e40421 instanceof Object)){
var ex__33619__auto__ = e40421;
var statearr_40422_40479 = state_40391;
(statearr_40422_40479[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40480 = state_40391;
state_40391 = G__40480;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__ = function(state_40391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1.call(this,state_40391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__,jobs,results,process,async))
})();
var state__33679__auto__ = (function (){var statearr_40423 = f__33678__auto__.call(null);
(statearr_40423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_40423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__,jobs,results,process,async))
);

return c__33677__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__40482 = arguments.length;
switch (G__40482) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__40485 = arguments.length;
switch (G__40485) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__40488 = arguments.length;
switch (G__40488) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33677__auto___40540 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___40540,tc,fc){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___40540,tc,fc){
return (function (state_40514){
var state_val_40515 = (state_40514[(1)]);
if((state_val_40515 === (7))){
var inst_40510 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
var statearr_40516_40541 = state_40514__$1;
(statearr_40516_40541[(2)] = inst_40510);

(statearr_40516_40541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (1))){
var state_40514__$1 = state_40514;
var statearr_40517_40542 = state_40514__$1;
(statearr_40517_40542[(2)] = null);

(statearr_40517_40542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (4))){
var inst_40491 = (state_40514[(7)]);
var inst_40491__$1 = (state_40514[(2)]);
var inst_40492 = (inst_40491__$1 == null);
var state_40514__$1 = (function (){var statearr_40518 = state_40514;
(statearr_40518[(7)] = inst_40491__$1);

return statearr_40518;
})();
if(cljs.core.truth_(inst_40492)){
var statearr_40519_40543 = state_40514__$1;
(statearr_40519_40543[(1)] = (5));

} else {
var statearr_40520_40544 = state_40514__$1;
(statearr_40520_40544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (13))){
var state_40514__$1 = state_40514;
var statearr_40521_40545 = state_40514__$1;
(statearr_40521_40545[(2)] = null);

(statearr_40521_40545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (6))){
var inst_40491 = (state_40514[(7)]);
var inst_40497 = p.call(null,inst_40491);
var state_40514__$1 = state_40514;
if(cljs.core.truth_(inst_40497)){
var statearr_40522_40546 = state_40514__$1;
(statearr_40522_40546[(1)] = (9));

} else {
var statearr_40523_40547 = state_40514__$1;
(statearr_40523_40547[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (3))){
var inst_40512 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40514__$1,inst_40512);
} else {
if((state_val_40515 === (12))){
var state_40514__$1 = state_40514;
var statearr_40524_40548 = state_40514__$1;
(statearr_40524_40548[(2)] = null);

(statearr_40524_40548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (2))){
var state_40514__$1 = state_40514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40514__$1,(4),ch);
} else {
if((state_val_40515 === (11))){
var inst_40491 = (state_40514[(7)]);
var inst_40501 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40514__$1,(8),inst_40501,inst_40491);
} else {
if((state_val_40515 === (9))){
var state_40514__$1 = state_40514;
var statearr_40525_40549 = state_40514__$1;
(statearr_40525_40549[(2)] = tc);

(statearr_40525_40549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (5))){
var inst_40494 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40495 = cljs.core.async.close_BANG_.call(null,fc);
var state_40514__$1 = (function (){var statearr_40526 = state_40514;
(statearr_40526[(8)] = inst_40494);

return statearr_40526;
})();
var statearr_40527_40550 = state_40514__$1;
(statearr_40527_40550[(2)] = inst_40495);

(statearr_40527_40550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (14))){
var inst_40508 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
var statearr_40528_40551 = state_40514__$1;
(statearr_40528_40551[(2)] = inst_40508);

(statearr_40528_40551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (10))){
var state_40514__$1 = state_40514;
var statearr_40529_40552 = state_40514__$1;
(statearr_40529_40552[(2)] = fc);

(statearr_40529_40552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40515 === (8))){
var inst_40503 = (state_40514[(2)]);
var state_40514__$1 = state_40514;
if(cljs.core.truth_(inst_40503)){
var statearr_40530_40553 = state_40514__$1;
(statearr_40530_40553[(1)] = (12));

} else {
var statearr_40531_40554 = state_40514__$1;
(statearr_40531_40554[(1)] = (13));

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
});})(c__33677__auto___40540,tc,fc))
;
return ((function (switch__33615__auto__,c__33677__auto___40540,tc,fc){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_40535 = [null,null,null,null,null,null,null,null,null];
(statearr_40535[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_40535[(1)] = (1));

return statearr_40535;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_40514){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40536){if((e40536 instanceof Object)){
var ex__33619__auto__ = e40536;
var statearr_40537_40555 = state_40514;
(statearr_40537_40555[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40556 = state_40514;
state_40514 = G__40556;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_40514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_40514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___40540,tc,fc))
})();
var state__33679__auto__ = (function (){var statearr_40538 = f__33678__auto__.call(null);
(statearr_40538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___40540);

return statearr_40538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___40540,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_40603){
var state_val_40604 = (state_40603[(1)]);
if((state_val_40604 === (1))){
var inst_40589 = init;
var state_40603__$1 = (function (){var statearr_40605 = state_40603;
(statearr_40605[(7)] = inst_40589);

return statearr_40605;
})();
var statearr_40606_40621 = state_40603__$1;
(statearr_40606_40621[(2)] = null);

(statearr_40606_40621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (2))){
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40603__$1,(4),ch);
} else {
if((state_val_40604 === (3))){
var inst_40601 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40603__$1,inst_40601);
} else {
if((state_val_40604 === (4))){
var inst_40592 = (state_40603[(8)]);
var inst_40592__$1 = (state_40603[(2)]);
var inst_40593 = (inst_40592__$1 == null);
var state_40603__$1 = (function (){var statearr_40607 = state_40603;
(statearr_40607[(8)] = inst_40592__$1);

return statearr_40607;
})();
if(cljs.core.truth_(inst_40593)){
var statearr_40608_40622 = state_40603__$1;
(statearr_40608_40622[(1)] = (5));

} else {
var statearr_40609_40623 = state_40603__$1;
(statearr_40609_40623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (5))){
var inst_40589 = (state_40603[(7)]);
var state_40603__$1 = state_40603;
var statearr_40610_40624 = state_40603__$1;
(statearr_40610_40624[(2)] = inst_40589);

(statearr_40610_40624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (6))){
var inst_40592 = (state_40603[(8)]);
var inst_40589 = (state_40603[(7)]);
var inst_40596 = f.call(null,inst_40589,inst_40592);
var inst_40589__$1 = inst_40596;
var state_40603__$1 = (function (){var statearr_40611 = state_40603;
(statearr_40611[(7)] = inst_40589__$1);

return statearr_40611;
})();
var statearr_40612_40625 = state_40603__$1;
(statearr_40612_40625[(2)] = null);

(statearr_40612_40625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40604 === (7))){
var inst_40599 = (state_40603[(2)]);
var state_40603__$1 = state_40603;
var statearr_40613_40626 = state_40603__$1;
(statearr_40613_40626[(2)] = inst_40599);

(statearr_40613_40626[(1)] = (3));


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
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33616__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33616__auto____0 = (function (){
var statearr_40617 = [null,null,null,null,null,null,null,null,null];
(statearr_40617[(0)] = cljs$core$async$reduce_$_state_machine__33616__auto__);

(statearr_40617[(1)] = (1));

return statearr_40617;
});
var cljs$core$async$reduce_$_state_machine__33616__auto____1 = (function (state_40603){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40618){if((e40618 instanceof Object)){
var ex__33619__auto__ = e40618;
var statearr_40619_40627 = state_40603;
(statearr_40619_40627[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40628 = state_40603;
state_40603 = G__40628;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33616__auto__ = function(state_40603){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33616__auto____1.call(this,state_40603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33616__auto____0;
cljs$core$async$reduce_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33616__auto____1;
return cljs$core$async$reduce_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_40620 = f__33678__auto__.call(null);
(statearr_40620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_40620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__40630 = arguments.length;
switch (G__40630) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_40655){
var state_val_40656 = (state_40655[(1)]);
if((state_val_40656 === (7))){
var inst_40637 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
var statearr_40657_40681 = state_40655__$1;
(statearr_40657_40681[(2)] = inst_40637);

(statearr_40657_40681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (1))){
var inst_40631 = cljs.core.seq.call(null,coll);
var inst_40632 = inst_40631;
var state_40655__$1 = (function (){var statearr_40658 = state_40655;
(statearr_40658[(7)] = inst_40632);

return statearr_40658;
})();
var statearr_40659_40682 = state_40655__$1;
(statearr_40659_40682[(2)] = null);

(statearr_40659_40682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (4))){
var inst_40632 = (state_40655[(7)]);
var inst_40635 = cljs.core.first.call(null,inst_40632);
var state_40655__$1 = state_40655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40655__$1,(7),ch,inst_40635);
} else {
if((state_val_40656 === (13))){
var inst_40649 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
var statearr_40660_40683 = state_40655__$1;
(statearr_40660_40683[(2)] = inst_40649);

(statearr_40660_40683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (6))){
var inst_40640 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
if(cljs.core.truth_(inst_40640)){
var statearr_40661_40684 = state_40655__$1;
(statearr_40661_40684[(1)] = (8));

} else {
var statearr_40662_40685 = state_40655__$1;
(statearr_40662_40685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (3))){
var inst_40653 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40655__$1,inst_40653);
} else {
if((state_val_40656 === (12))){
var state_40655__$1 = state_40655;
var statearr_40663_40686 = state_40655__$1;
(statearr_40663_40686[(2)] = null);

(statearr_40663_40686[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (2))){
var inst_40632 = (state_40655[(7)]);
var state_40655__$1 = state_40655;
if(cljs.core.truth_(inst_40632)){
var statearr_40664_40687 = state_40655__$1;
(statearr_40664_40687[(1)] = (4));

} else {
var statearr_40665_40688 = state_40655__$1;
(statearr_40665_40688[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (11))){
var inst_40646 = cljs.core.async.close_BANG_.call(null,ch);
var state_40655__$1 = state_40655;
var statearr_40666_40689 = state_40655__$1;
(statearr_40666_40689[(2)] = inst_40646);

(statearr_40666_40689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (9))){
var state_40655__$1 = state_40655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40667_40690 = state_40655__$1;
(statearr_40667_40690[(1)] = (11));

} else {
var statearr_40668_40691 = state_40655__$1;
(statearr_40668_40691[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (5))){
var inst_40632 = (state_40655[(7)]);
var state_40655__$1 = state_40655;
var statearr_40669_40692 = state_40655__$1;
(statearr_40669_40692[(2)] = inst_40632);

(statearr_40669_40692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (10))){
var inst_40651 = (state_40655[(2)]);
var state_40655__$1 = state_40655;
var statearr_40670_40693 = state_40655__$1;
(statearr_40670_40693[(2)] = inst_40651);

(statearr_40670_40693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40656 === (8))){
var inst_40632 = (state_40655[(7)]);
var inst_40642 = cljs.core.next.call(null,inst_40632);
var inst_40632__$1 = inst_40642;
var state_40655__$1 = (function (){var statearr_40671 = state_40655;
(statearr_40671[(7)] = inst_40632__$1);

return statearr_40671;
})();
var statearr_40672_40694 = state_40655__$1;
(statearr_40672_40694[(2)] = null);

(statearr_40672_40694[(1)] = (2));


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
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_40676 = [null,null,null,null,null,null,null,null];
(statearr_40676[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_40676[(1)] = (1));

return statearr_40676;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_40655){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_40655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e40677){if((e40677 instanceof Object)){
var ex__33619__auto__ = e40677;
var statearr_40678_40695 = state_40655;
(statearr_40678_40695[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40696 = state_40655;
state_40655 = G__40696;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_40655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_40655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_40679 = f__33678__auto__.call(null);
(statearr_40679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_40679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj40698 = {};
return obj40698;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__29800__auto__ = _;
if(and__29800__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__29800__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30448__auto__ = (((_ == null))?null:_);
return (function (){var or__29812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj40700 = {};
return obj40700;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t40922 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t40922 = (function (mult,ch,cs,meta40923){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40923 = meta40923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t40922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40924,meta40923__$1){
var self__ = this;
var _40924__$1 = this;
return (new cljs.core.async.t40922(self__.mult,self__.ch,self__.cs,meta40923__$1));
});})(cs))
;

cljs.core.async.t40922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40924){
var self__ = this;
var _40924__$1 = this;
return self__.meta40923;
});})(cs))
;

cljs.core.async.t40922.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t40922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t40922.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t40922.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t40922.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t40922.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t40922.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40923","meta40923",-1737573918,null)], null);
});})(cs))
;

cljs.core.async.t40922.cljs$lang$type = true;

cljs.core.async.t40922.cljs$lang$ctorStr = "cljs.core.async/t40922";

cljs.core.async.t40922.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t40922");
});})(cs))
;

cljs.core.async.__GT_t40922 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t40922(mult__$1,ch__$1,cs__$1,meta40923){
return (new cljs.core.async.t40922(mult__$1,ch__$1,cs__$1,meta40923));
});})(cs))
;

}

return (new cljs.core.async.t40922(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33677__auto___41143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41143,cs,m,dchan,dctr,done){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41143,cs,m,dchan,dctr,done){
return (function (state_41055){
var state_val_41056 = (state_41055[(1)]);
if((state_val_41056 === (7))){
var inst_41051 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41057_41144 = state_41055__$1;
(statearr_41057_41144[(2)] = inst_41051);

(statearr_41057_41144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (20))){
var inst_40956 = (state_41055[(7)]);
var inst_40966 = cljs.core.first.call(null,inst_40956);
var inst_40967 = cljs.core.nth.call(null,inst_40966,(0),null);
var inst_40968 = cljs.core.nth.call(null,inst_40966,(1),null);
var state_41055__$1 = (function (){var statearr_41058 = state_41055;
(statearr_41058[(8)] = inst_40967);

return statearr_41058;
})();
if(cljs.core.truth_(inst_40968)){
var statearr_41059_41145 = state_41055__$1;
(statearr_41059_41145[(1)] = (22));

} else {
var statearr_41060_41146 = state_41055__$1;
(statearr_41060_41146[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (27))){
var inst_40996 = (state_41055[(9)]);
var inst_40927 = (state_41055[(10)]);
var inst_40998 = (state_41055[(11)]);
var inst_41003 = (state_41055[(12)]);
var inst_41003__$1 = cljs.core._nth.call(null,inst_40996,inst_40998);
var inst_41004 = cljs.core.async.put_BANG_.call(null,inst_41003__$1,inst_40927,done);
var state_41055__$1 = (function (){var statearr_41061 = state_41055;
(statearr_41061[(12)] = inst_41003__$1);

return statearr_41061;
})();
if(cljs.core.truth_(inst_41004)){
var statearr_41062_41147 = state_41055__$1;
(statearr_41062_41147[(1)] = (30));

} else {
var statearr_41063_41148 = state_41055__$1;
(statearr_41063_41148[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (1))){
var state_41055__$1 = state_41055;
var statearr_41064_41149 = state_41055__$1;
(statearr_41064_41149[(2)] = null);

(statearr_41064_41149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (24))){
var inst_40956 = (state_41055[(7)]);
var inst_40973 = (state_41055[(2)]);
var inst_40974 = cljs.core.next.call(null,inst_40956);
var inst_40936 = inst_40974;
var inst_40937 = null;
var inst_40938 = (0);
var inst_40939 = (0);
var state_41055__$1 = (function (){var statearr_41065 = state_41055;
(statearr_41065[(13)] = inst_40936);

(statearr_41065[(14)] = inst_40973);

(statearr_41065[(15)] = inst_40937);

(statearr_41065[(16)] = inst_40939);

(statearr_41065[(17)] = inst_40938);

return statearr_41065;
})();
var statearr_41066_41150 = state_41055__$1;
(statearr_41066_41150[(2)] = null);

(statearr_41066_41150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (39))){
var state_41055__$1 = state_41055;
var statearr_41070_41151 = state_41055__$1;
(statearr_41070_41151[(2)] = null);

(statearr_41070_41151[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (4))){
var inst_40927 = (state_41055[(10)]);
var inst_40927__$1 = (state_41055[(2)]);
var inst_40928 = (inst_40927__$1 == null);
var state_41055__$1 = (function (){var statearr_41071 = state_41055;
(statearr_41071[(10)] = inst_40927__$1);

return statearr_41071;
})();
if(cljs.core.truth_(inst_40928)){
var statearr_41072_41152 = state_41055__$1;
(statearr_41072_41152[(1)] = (5));

} else {
var statearr_41073_41153 = state_41055__$1;
(statearr_41073_41153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (15))){
var inst_40936 = (state_41055[(13)]);
var inst_40937 = (state_41055[(15)]);
var inst_40939 = (state_41055[(16)]);
var inst_40938 = (state_41055[(17)]);
var inst_40952 = (state_41055[(2)]);
var inst_40953 = (inst_40939 + (1));
var tmp41067 = inst_40936;
var tmp41068 = inst_40937;
var tmp41069 = inst_40938;
var inst_40936__$1 = tmp41067;
var inst_40937__$1 = tmp41068;
var inst_40938__$1 = tmp41069;
var inst_40939__$1 = inst_40953;
var state_41055__$1 = (function (){var statearr_41074 = state_41055;
(statearr_41074[(13)] = inst_40936__$1);

(statearr_41074[(18)] = inst_40952);

(statearr_41074[(15)] = inst_40937__$1);

(statearr_41074[(16)] = inst_40939__$1);

(statearr_41074[(17)] = inst_40938__$1);

return statearr_41074;
})();
var statearr_41075_41154 = state_41055__$1;
(statearr_41075_41154[(2)] = null);

(statearr_41075_41154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (21))){
var inst_40977 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41079_41155 = state_41055__$1;
(statearr_41079_41155[(2)] = inst_40977);

(statearr_41079_41155[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (31))){
var inst_41003 = (state_41055[(12)]);
var inst_41007 = done.call(null,null);
var inst_41008 = cljs.core.async.untap_STAR_.call(null,m,inst_41003);
var state_41055__$1 = (function (){var statearr_41080 = state_41055;
(statearr_41080[(19)] = inst_41007);

return statearr_41080;
})();
var statearr_41081_41156 = state_41055__$1;
(statearr_41081_41156[(2)] = inst_41008);

(statearr_41081_41156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (32))){
var inst_40997 = (state_41055[(20)]);
var inst_40996 = (state_41055[(9)]);
var inst_40998 = (state_41055[(11)]);
var inst_40995 = (state_41055[(21)]);
var inst_41010 = (state_41055[(2)]);
var inst_41011 = (inst_40998 + (1));
var tmp41076 = inst_40997;
var tmp41077 = inst_40996;
var tmp41078 = inst_40995;
var inst_40995__$1 = tmp41078;
var inst_40996__$1 = tmp41077;
var inst_40997__$1 = tmp41076;
var inst_40998__$1 = inst_41011;
var state_41055__$1 = (function (){var statearr_41082 = state_41055;
(statearr_41082[(20)] = inst_40997__$1);

(statearr_41082[(9)] = inst_40996__$1);

(statearr_41082[(22)] = inst_41010);

(statearr_41082[(11)] = inst_40998__$1);

(statearr_41082[(21)] = inst_40995__$1);

return statearr_41082;
})();
var statearr_41083_41157 = state_41055__$1;
(statearr_41083_41157[(2)] = null);

(statearr_41083_41157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (40))){
var inst_41023 = (state_41055[(23)]);
var inst_41027 = done.call(null,null);
var inst_41028 = cljs.core.async.untap_STAR_.call(null,m,inst_41023);
var state_41055__$1 = (function (){var statearr_41084 = state_41055;
(statearr_41084[(24)] = inst_41027);

return statearr_41084;
})();
var statearr_41085_41158 = state_41055__$1;
(statearr_41085_41158[(2)] = inst_41028);

(statearr_41085_41158[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (33))){
var inst_41014 = (state_41055[(25)]);
var inst_41016 = cljs.core.chunked_seq_QMARK_.call(null,inst_41014);
var state_41055__$1 = state_41055;
if(inst_41016){
var statearr_41086_41159 = state_41055__$1;
(statearr_41086_41159[(1)] = (36));

} else {
var statearr_41087_41160 = state_41055__$1;
(statearr_41087_41160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (13))){
var inst_40946 = (state_41055[(26)]);
var inst_40949 = cljs.core.async.close_BANG_.call(null,inst_40946);
var state_41055__$1 = state_41055;
var statearr_41088_41161 = state_41055__$1;
(statearr_41088_41161[(2)] = inst_40949);

(statearr_41088_41161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (22))){
var inst_40967 = (state_41055[(8)]);
var inst_40970 = cljs.core.async.close_BANG_.call(null,inst_40967);
var state_41055__$1 = state_41055;
var statearr_41089_41162 = state_41055__$1;
(statearr_41089_41162[(2)] = inst_40970);

(statearr_41089_41162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (36))){
var inst_41014 = (state_41055[(25)]);
var inst_41018 = cljs.core.chunk_first.call(null,inst_41014);
var inst_41019 = cljs.core.chunk_rest.call(null,inst_41014);
var inst_41020 = cljs.core.count.call(null,inst_41018);
var inst_40995 = inst_41019;
var inst_40996 = inst_41018;
var inst_40997 = inst_41020;
var inst_40998 = (0);
var state_41055__$1 = (function (){var statearr_41090 = state_41055;
(statearr_41090[(20)] = inst_40997);

(statearr_41090[(9)] = inst_40996);

(statearr_41090[(11)] = inst_40998);

(statearr_41090[(21)] = inst_40995);

return statearr_41090;
})();
var statearr_41091_41163 = state_41055__$1;
(statearr_41091_41163[(2)] = null);

(statearr_41091_41163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (41))){
var inst_41014 = (state_41055[(25)]);
var inst_41030 = (state_41055[(2)]);
var inst_41031 = cljs.core.next.call(null,inst_41014);
var inst_40995 = inst_41031;
var inst_40996 = null;
var inst_40997 = (0);
var inst_40998 = (0);
var state_41055__$1 = (function (){var statearr_41092 = state_41055;
(statearr_41092[(20)] = inst_40997);

(statearr_41092[(27)] = inst_41030);

(statearr_41092[(9)] = inst_40996);

(statearr_41092[(11)] = inst_40998);

(statearr_41092[(21)] = inst_40995);

return statearr_41092;
})();
var statearr_41093_41164 = state_41055__$1;
(statearr_41093_41164[(2)] = null);

(statearr_41093_41164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (43))){
var state_41055__$1 = state_41055;
var statearr_41094_41165 = state_41055__$1;
(statearr_41094_41165[(2)] = null);

(statearr_41094_41165[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (29))){
var inst_41039 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41095_41166 = state_41055__$1;
(statearr_41095_41166[(2)] = inst_41039);

(statearr_41095_41166[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (44))){
var inst_41048 = (state_41055[(2)]);
var state_41055__$1 = (function (){var statearr_41096 = state_41055;
(statearr_41096[(28)] = inst_41048);

return statearr_41096;
})();
var statearr_41097_41167 = state_41055__$1;
(statearr_41097_41167[(2)] = null);

(statearr_41097_41167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (6))){
var inst_40987 = (state_41055[(29)]);
var inst_40986 = cljs.core.deref.call(null,cs);
var inst_40987__$1 = cljs.core.keys.call(null,inst_40986);
var inst_40988 = cljs.core.count.call(null,inst_40987__$1);
var inst_40989 = cljs.core.reset_BANG_.call(null,dctr,inst_40988);
var inst_40994 = cljs.core.seq.call(null,inst_40987__$1);
var inst_40995 = inst_40994;
var inst_40996 = null;
var inst_40997 = (0);
var inst_40998 = (0);
var state_41055__$1 = (function (){var statearr_41098 = state_41055;
(statearr_41098[(20)] = inst_40997);

(statearr_41098[(9)] = inst_40996);

(statearr_41098[(30)] = inst_40989);

(statearr_41098[(11)] = inst_40998);

(statearr_41098[(21)] = inst_40995);

(statearr_41098[(29)] = inst_40987__$1);

return statearr_41098;
})();
var statearr_41099_41168 = state_41055__$1;
(statearr_41099_41168[(2)] = null);

(statearr_41099_41168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (28))){
var inst_41014 = (state_41055[(25)]);
var inst_40995 = (state_41055[(21)]);
var inst_41014__$1 = cljs.core.seq.call(null,inst_40995);
var state_41055__$1 = (function (){var statearr_41100 = state_41055;
(statearr_41100[(25)] = inst_41014__$1);

return statearr_41100;
})();
if(inst_41014__$1){
var statearr_41101_41169 = state_41055__$1;
(statearr_41101_41169[(1)] = (33));

} else {
var statearr_41102_41170 = state_41055__$1;
(statearr_41102_41170[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (25))){
var inst_40997 = (state_41055[(20)]);
var inst_40998 = (state_41055[(11)]);
var inst_41000 = (inst_40998 < inst_40997);
var inst_41001 = inst_41000;
var state_41055__$1 = state_41055;
if(cljs.core.truth_(inst_41001)){
var statearr_41103_41171 = state_41055__$1;
(statearr_41103_41171[(1)] = (27));

} else {
var statearr_41104_41172 = state_41055__$1;
(statearr_41104_41172[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (34))){
var state_41055__$1 = state_41055;
var statearr_41105_41173 = state_41055__$1;
(statearr_41105_41173[(2)] = null);

(statearr_41105_41173[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (17))){
var state_41055__$1 = state_41055;
var statearr_41106_41174 = state_41055__$1;
(statearr_41106_41174[(2)] = null);

(statearr_41106_41174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (3))){
var inst_41053 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41055__$1,inst_41053);
} else {
if((state_val_41056 === (12))){
var inst_40982 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41107_41175 = state_41055__$1;
(statearr_41107_41175[(2)] = inst_40982);

(statearr_41107_41175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (2))){
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41055__$1,(4),ch);
} else {
if((state_val_41056 === (23))){
var state_41055__$1 = state_41055;
var statearr_41108_41176 = state_41055__$1;
(statearr_41108_41176[(2)] = null);

(statearr_41108_41176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (35))){
var inst_41037 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41109_41177 = state_41055__$1;
(statearr_41109_41177[(2)] = inst_41037);

(statearr_41109_41177[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (19))){
var inst_40956 = (state_41055[(7)]);
var inst_40960 = cljs.core.chunk_first.call(null,inst_40956);
var inst_40961 = cljs.core.chunk_rest.call(null,inst_40956);
var inst_40962 = cljs.core.count.call(null,inst_40960);
var inst_40936 = inst_40961;
var inst_40937 = inst_40960;
var inst_40938 = inst_40962;
var inst_40939 = (0);
var state_41055__$1 = (function (){var statearr_41110 = state_41055;
(statearr_41110[(13)] = inst_40936);

(statearr_41110[(15)] = inst_40937);

(statearr_41110[(16)] = inst_40939);

(statearr_41110[(17)] = inst_40938);

return statearr_41110;
})();
var statearr_41111_41178 = state_41055__$1;
(statearr_41111_41178[(2)] = null);

(statearr_41111_41178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (11))){
var inst_40936 = (state_41055[(13)]);
var inst_40956 = (state_41055[(7)]);
var inst_40956__$1 = cljs.core.seq.call(null,inst_40936);
var state_41055__$1 = (function (){var statearr_41112 = state_41055;
(statearr_41112[(7)] = inst_40956__$1);

return statearr_41112;
})();
if(inst_40956__$1){
var statearr_41113_41179 = state_41055__$1;
(statearr_41113_41179[(1)] = (16));

} else {
var statearr_41114_41180 = state_41055__$1;
(statearr_41114_41180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (9))){
var inst_40984 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41115_41181 = state_41055__$1;
(statearr_41115_41181[(2)] = inst_40984);

(statearr_41115_41181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (5))){
var inst_40934 = cljs.core.deref.call(null,cs);
var inst_40935 = cljs.core.seq.call(null,inst_40934);
var inst_40936 = inst_40935;
var inst_40937 = null;
var inst_40938 = (0);
var inst_40939 = (0);
var state_41055__$1 = (function (){var statearr_41116 = state_41055;
(statearr_41116[(13)] = inst_40936);

(statearr_41116[(15)] = inst_40937);

(statearr_41116[(16)] = inst_40939);

(statearr_41116[(17)] = inst_40938);

return statearr_41116;
})();
var statearr_41117_41182 = state_41055__$1;
(statearr_41117_41182[(2)] = null);

(statearr_41117_41182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (14))){
var state_41055__$1 = state_41055;
var statearr_41118_41183 = state_41055__$1;
(statearr_41118_41183[(2)] = null);

(statearr_41118_41183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (45))){
var inst_41045 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41119_41184 = state_41055__$1;
(statearr_41119_41184[(2)] = inst_41045);

(statearr_41119_41184[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (26))){
var inst_40987 = (state_41055[(29)]);
var inst_41041 = (state_41055[(2)]);
var inst_41042 = cljs.core.seq.call(null,inst_40987);
var state_41055__$1 = (function (){var statearr_41120 = state_41055;
(statearr_41120[(31)] = inst_41041);

return statearr_41120;
})();
if(inst_41042){
var statearr_41121_41185 = state_41055__$1;
(statearr_41121_41185[(1)] = (42));

} else {
var statearr_41122_41186 = state_41055__$1;
(statearr_41122_41186[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (16))){
var inst_40956 = (state_41055[(7)]);
var inst_40958 = cljs.core.chunked_seq_QMARK_.call(null,inst_40956);
var state_41055__$1 = state_41055;
if(inst_40958){
var statearr_41123_41187 = state_41055__$1;
(statearr_41123_41187[(1)] = (19));

} else {
var statearr_41124_41188 = state_41055__$1;
(statearr_41124_41188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (38))){
var inst_41034 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41125_41189 = state_41055__$1;
(statearr_41125_41189[(2)] = inst_41034);

(statearr_41125_41189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (30))){
var state_41055__$1 = state_41055;
var statearr_41126_41190 = state_41055__$1;
(statearr_41126_41190[(2)] = null);

(statearr_41126_41190[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (10))){
var inst_40937 = (state_41055[(15)]);
var inst_40939 = (state_41055[(16)]);
var inst_40945 = cljs.core._nth.call(null,inst_40937,inst_40939);
var inst_40946 = cljs.core.nth.call(null,inst_40945,(0),null);
var inst_40947 = cljs.core.nth.call(null,inst_40945,(1),null);
var state_41055__$1 = (function (){var statearr_41127 = state_41055;
(statearr_41127[(26)] = inst_40946);

return statearr_41127;
})();
if(cljs.core.truth_(inst_40947)){
var statearr_41128_41191 = state_41055__$1;
(statearr_41128_41191[(1)] = (13));

} else {
var statearr_41129_41192 = state_41055__$1;
(statearr_41129_41192[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (18))){
var inst_40980 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41130_41193 = state_41055__$1;
(statearr_41130_41193[(2)] = inst_40980);

(statearr_41130_41193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (42))){
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41055__$1,(45),dchan);
} else {
if((state_val_41056 === (37))){
var inst_40927 = (state_41055[(10)]);
var inst_41014 = (state_41055[(25)]);
var inst_41023 = (state_41055[(23)]);
var inst_41023__$1 = cljs.core.first.call(null,inst_41014);
var inst_41024 = cljs.core.async.put_BANG_.call(null,inst_41023__$1,inst_40927,done);
var state_41055__$1 = (function (){var statearr_41131 = state_41055;
(statearr_41131[(23)] = inst_41023__$1);

return statearr_41131;
})();
if(cljs.core.truth_(inst_41024)){
var statearr_41132_41194 = state_41055__$1;
(statearr_41132_41194[(1)] = (39));

} else {
var statearr_41133_41195 = state_41055__$1;
(statearr_41133_41195[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (8))){
var inst_40939 = (state_41055[(16)]);
var inst_40938 = (state_41055[(17)]);
var inst_40941 = (inst_40939 < inst_40938);
var inst_40942 = inst_40941;
var state_41055__$1 = state_41055;
if(cljs.core.truth_(inst_40942)){
var statearr_41134_41196 = state_41055__$1;
(statearr_41134_41196[(1)] = (10));

} else {
var statearr_41135_41197 = state_41055__$1;
(statearr_41135_41197[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__33677__auto___41143,cs,m,dchan,dctr,done))
;
return ((function (switch__33615__auto__,c__33677__auto___41143,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33616__auto__ = null;
var cljs$core$async$mult_$_state_machine__33616__auto____0 = (function (){
var statearr_41139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41139[(0)] = cljs$core$async$mult_$_state_machine__33616__auto__);

(statearr_41139[(1)] = (1));

return statearr_41139;
});
var cljs$core$async$mult_$_state_machine__33616__auto____1 = (function (state_41055){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41140){if((e41140 instanceof Object)){
var ex__33619__auto__ = e41140;
var statearr_41141_41198 = state_41055;
(statearr_41141_41198[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41199 = state_41055;
state_41055 = G__41199;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33616__auto__ = function(state_41055){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33616__auto____1.call(this,state_41055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33616__auto____0;
cljs$core$async$mult_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33616__auto____1;
return cljs$core$async$mult_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41143,cs,m,dchan,dctr,done))
})();
var state__33679__auto__ = (function (){var statearr_41142 = f__33678__auto__.call(null);
(statearr_41142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41143);

return statearr_41142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41143,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__41201 = arguments.length;
switch (G__41201) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj41204 = {};
return obj41204;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__29800__auto__ = m;
if(and__29800__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30448__auto__ = (((m == null))?null:m);
return (function (){var or__29812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__30852__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__30852__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41209){
var map__41210 = p__41209;
var map__41210__$1 = ((cljs.core.seq_QMARK_.call(null,map__41210))?cljs.core.apply.call(null,cljs.core.hash_map,map__41210):map__41210);
var opts = map__41210__$1;
var statearr_41211_41214 = state;
(statearr_41211_41214[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__41210,map__41210__$1,opts){
return (function (val){
var statearr_41212_41215 = state;
(statearr_41212_41215[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41210,map__41210__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_41213_41216 = state;
(statearr_41213_41216[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41205){
var G__41206 = cljs.core.first.call(null,seq41205);
var seq41205__$1 = cljs.core.next.call(null,seq41205);
var G__41207 = cljs.core.first.call(null,seq41205__$1);
var seq41205__$2 = cljs.core.next.call(null,seq41205__$1);
var G__41208 = cljs.core.first.call(null,seq41205__$2);
var seq41205__$3 = cljs.core.next.call(null,seq41205__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41206,G__41207,G__41208,seq41205__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t41336 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41336 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41337){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41337 = meta41337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41338,meta41337__$1){
var self__ = this;
var _41338__$1 = this;
return (new cljs.core.async.t41336(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41337__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41338){
var self__ = this;
var _41338__$1 = this;
return self__.meta41337;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41336.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41337","meta41337",-1600335962,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t41336.cljs$lang$type = true;

cljs.core.async.t41336.cljs$lang$ctorStr = "cljs.core.async/t41336";

cljs.core.async.t41336.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41336");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t41336 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t41336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41337){
return (new cljs.core.async.t41336(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41337));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t41336(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33677__auto___41455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41408){
var state_val_41409 = (state_41408[(1)]);
if((state_val_41409 === (7))){
var inst_41352 = (state_41408[(7)]);
var inst_41357 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41352);
var state_41408__$1 = state_41408;
var statearr_41410_41456 = state_41408__$1;
(statearr_41410_41456[(2)] = inst_41357);

(statearr_41410_41456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (20))){
var inst_41367 = (state_41408[(8)]);
var state_41408__$1 = state_41408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41408__$1,(23),out,inst_41367);
} else {
if((state_val_41409 === (1))){
var inst_41342 = (state_41408[(9)]);
var inst_41342__$1 = calc_state.call(null);
var inst_41343 = cljs.core.seq_QMARK_.call(null,inst_41342__$1);
var state_41408__$1 = (function (){var statearr_41411 = state_41408;
(statearr_41411[(9)] = inst_41342__$1);

return statearr_41411;
})();
if(inst_41343){
var statearr_41412_41457 = state_41408__$1;
(statearr_41412_41457[(1)] = (2));

} else {
var statearr_41413_41458 = state_41408__$1;
(statearr_41413_41458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (24))){
var inst_41360 = (state_41408[(10)]);
var inst_41352 = inst_41360;
var state_41408__$1 = (function (){var statearr_41414 = state_41408;
(statearr_41414[(7)] = inst_41352);

return statearr_41414;
})();
var statearr_41415_41459 = state_41408__$1;
(statearr_41415_41459[(2)] = null);

(statearr_41415_41459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (4))){
var inst_41342 = (state_41408[(9)]);
var inst_41348 = (state_41408[(2)]);
var inst_41349 = cljs.core.get.call(null,inst_41348,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41350 = cljs.core.get.call(null,inst_41348,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41351 = cljs.core.get.call(null,inst_41348,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41352 = inst_41342;
var state_41408__$1 = (function (){var statearr_41416 = state_41408;
(statearr_41416[(11)] = inst_41349);

(statearr_41416[(7)] = inst_41352);

(statearr_41416[(12)] = inst_41351);

(statearr_41416[(13)] = inst_41350);

return statearr_41416;
})();
var statearr_41417_41460 = state_41408__$1;
(statearr_41417_41460[(2)] = null);

(statearr_41417_41460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (15))){
var state_41408__$1 = state_41408;
var statearr_41418_41461 = state_41408__$1;
(statearr_41418_41461[(2)] = null);

(statearr_41418_41461[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (21))){
var inst_41360 = (state_41408[(10)]);
var inst_41352 = inst_41360;
var state_41408__$1 = (function (){var statearr_41419 = state_41408;
(statearr_41419[(7)] = inst_41352);

return statearr_41419;
})();
var statearr_41420_41462 = state_41408__$1;
(statearr_41420_41462[(2)] = null);

(statearr_41420_41462[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (13))){
var inst_41404 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
var statearr_41421_41463 = state_41408__$1;
(statearr_41421_41463[(2)] = inst_41404);

(statearr_41421_41463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (22))){
var inst_41402 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
var statearr_41422_41464 = state_41408__$1;
(statearr_41422_41464[(2)] = inst_41402);

(statearr_41422_41464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (6))){
var inst_41406 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41408__$1,inst_41406);
} else {
if((state_val_41409 === (25))){
var state_41408__$1 = state_41408;
var statearr_41423_41465 = state_41408__$1;
(statearr_41423_41465[(2)] = null);

(statearr_41423_41465[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (17))){
var inst_41382 = (state_41408[(14)]);
var state_41408__$1 = state_41408;
var statearr_41424_41466 = state_41408__$1;
(statearr_41424_41466[(2)] = inst_41382);

(statearr_41424_41466[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (3))){
var inst_41342 = (state_41408[(9)]);
var state_41408__$1 = state_41408;
var statearr_41425_41467 = state_41408__$1;
(statearr_41425_41467[(2)] = inst_41342);

(statearr_41425_41467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (12))){
var inst_41382 = (state_41408[(14)]);
var inst_41368 = (state_41408[(15)]);
var inst_41361 = (state_41408[(16)]);
var inst_41382__$1 = inst_41361.call(null,inst_41368);
var state_41408__$1 = (function (){var statearr_41426 = state_41408;
(statearr_41426[(14)] = inst_41382__$1);

return statearr_41426;
})();
if(cljs.core.truth_(inst_41382__$1)){
var statearr_41427_41468 = state_41408__$1;
(statearr_41427_41468[(1)] = (17));

} else {
var statearr_41428_41469 = state_41408__$1;
(statearr_41428_41469[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (2))){
var inst_41342 = (state_41408[(9)]);
var inst_41345 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41342);
var state_41408__$1 = state_41408;
var statearr_41429_41470 = state_41408__$1;
(statearr_41429_41470[(2)] = inst_41345);

(statearr_41429_41470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (23))){
var inst_41393 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
if(cljs.core.truth_(inst_41393)){
var statearr_41430_41471 = state_41408__$1;
(statearr_41430_41471[(1)] = (24));

} else {
var statearr_41431_41472 = state_41408__$1;
(statearr_41431_41472[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (19))){
var inst_41390 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
if(cljs.core.truth_(inst_41390)){
var statearr_41432_41473 = state_41408__$1;
(statearr_41432_41473[(1)] = (20));

} else {
var statearr_41433_41474 = state_41408__$1;
(statearr_41433_41474[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (11))){
var inst_41367 = (state_41408[(8)]);
var inst_41373 = (inst_41367 == null);
var state_41408__$1 = state_41408;
if(cljs.core.truth_(inst_41373)){
var statearr_41434_41475 = state_41408__$1;
(statearr_41434_41475[(1)] = (14));

} else {
var statearr_41435_41476 = state_41408__$1;
(statearr_41435_41476[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (9))){
var inst_41360 = (state_41408[(10)]);
var inst_41360__$1 = (state_41408[(2)]);
var inst_41361 = cljs.core.get.call(null,inst_41360__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41362 = cljs.core.get.call(null,inst_41360__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41363 = cljs.core.get.call(null,inst_41360__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41408__$1 = (function (){var statearr_41436 = state_41408;
(statearr_41436[(17)] = inst_41362);

(statearr_41436[(10)] = inst_41360__$1);

(statearr_41436[(16)] = inst_41361);

return statearr_41436;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41408__$1,(10),inst_41363);
} else {
if((state_val_41409 === (5))){
var inst_41352 = (state_41408[(7)]);
var inst_41355 = cljs.core.seq_QMARK_.call(null,inst_41352);
var state_41408__$1 = state_41408;
if(inst_41355){
var statearr_41437_41477 = state_41408__$1;
(statearr_41437_41477[(1)] = (7));

} else {
var statearr_41438_41478 = state_41408__$1;
(statearr_41438_41478[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (14))){
var inst_41368 = (state_41408[(15)]);
var inst_41375 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41368);
var state_41408__$1 = state_41408;
var statearr_41439_41479 = state_41408__$1;
(statearr_41439_41479[(2)] = inst_41375);

(statearr_41439_41479[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (26))){
var inst_41398 = (state_41408[(2)]);
var state_41408__$1 = state_41408;
var statearr_41440_41480 = state_41408__$1;
(statearr_41440_41480[(2)] = inst_41398);

(statearr_41440_41480[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (16))){
var inst_41378 = (state_41408[(2)]);
var inst_41379 = calc_state.call(null);
var inst_41352 = inst_41379;
var state_41408__$1 = (function (){var statearr_41441 = state_41408;
(statearr_41441[(7)] = inst_41352);

(statearr_41441[(18)] = inst_41378);

return statearr_41441;
})();
var statearr_41442_41481 = state_41408__$1;
(statearr_41442_41481[(2)] = null);

(statearr_41442_41481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (10))){
var inst_41368 = (state_41408[(15)]);
var inst_41367 = (state_41408[(8)]);
var inst_41366 = (state_41408[(2)]);
var inst_41367__$1 = cljs.core.nth.call(null,inst_41366,(0),null);
var inst_41368__$1 = cljs.core.nth.call(null,inst_41366,(1),null);
var inst_41369 = (inst_41367__$1 == null);
var inst_41370 = cljs.core._EQ_.call(null,inst_41368__$1,change);
var inst_41371 = (inst_41369) || (inst_41370);
var state_41408__$1 = (function (){var statearr_41443 = state_41408;
(statearr_41443[(15)] = inst_41368__$1);

(statearr_41443[(8)] = inst_41367__$1);

return statearr_41443;
})();
if(cljs.core.truth_(inst_41371)){
var statearr_41444_41482 = state_41408__$1;
(statearr_41444_41482[(1)] = (11));

} else {
var statearr_41445_41483 = state_41408__$1;
(statearr_41445_41483[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (18))){
var inst_41362 = (state_41408[(17)]);
var inst_41368 = (state_41408[(15)]);
var inst_41361 = (state_41408[(16)]);
var inst_41385 = cljs.core.empty_QMARK_.call(null,inst_41361);
var inst_41386 = inst_41362.call(null,inst_41368);
var inst_41387 = cljs.core.not.call(null,inst_41386);
var inst_41388 = (inst_41385) && (inst_41387);
var state_41408__$1 = state_41408;
var statearr_41446_41484 = state_41408__$1;
(statearr_41446_41484[(2)] = inst_41388);

(statearr_41446_41484[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41409 === (8))){
var inst_41352 = (state_41408[(7)]);
var state_41408__$1 = state_41408;
var statearr_41447_41485 = state_41408__$1;
(statearr_41447_41485[(2)] = inst_41352);

(statearr_41447_41485[(1)] = (9));


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
});})(c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33615__auto__,c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33616__auto__ = null;
var cljs$core$async$mix_$_state_machine__33616__auto____0 = (function (){
var statearr_41451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41451[(0)] = cljs$core$async$mix_$_state_machine__33616__auto__);

(statearr_41451[(1)] = (1));

return statearr_41451;
});
var cljs$core$async$mix_$_state_machine__33616__auto____1 = (function (state_41408){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41452){if((e41452 instanceof Object)){
var ex__33619__auto__ = e41452;
var statearr_41453_41486 = state_41408;
(statearr_41453_41486[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41487 = state_41408;
state_41408 = G__41487;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33616__auto__ = function(state_41408){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33616__auto____1.call(this,state_41408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33616__auto____0;
cljs$core$async$mix_$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33616__auto____1;
return cljs$core$async$mix_$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33679__auto__ = (function (){var statearr_41454 = f__33678__auto__.call(null);
(statearr_41454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41455);

return statearr_41454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41455,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj41489 = {};
return obj41489;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__29800__auto__ = p;
if(and__29800__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__29800__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30448__auto__ = (((p == null))?null:p);
return (function (){var or__29812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__29800__auto__ = p;
if(and__29800__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__29800__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30448__auto__ = (((p == null))?null:p);
return (function (){var or__29812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__41491 = arguments.length;
switch (G__41491) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__29800__auto__ = p;
if(and__29800__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__29800__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30448__auto__ = (((p == null))?null:p);
return (function (){var or__29812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__29800__auto__ = p;
if(and__29800__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__29800__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30448__auto__ = (((p == null))?null:p);
return (function (){var or__29812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30448__auto__)]);
if(or__29812__auto__){
return or__29812__auto__;
} else {
var or__29812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__29812__auto____$1){
return or__29812__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__41495 = arguments.length;
switch (G__41495) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__29812__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__29812__auto__)){
return or__29812__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__29812__auto__,mults){
return (function (p1__41493_SHARP_){
if(cljs.core.truth_(p1__41493_SHARP_.call(null,topic))){
return p1__41493_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41493_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__29812__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t41496 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41496 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41497){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41497 = meta41497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41498,meta41497__$1){
var self__ = this;
var _41498__$1 = this;
return (new cljs.core.async.t41496(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41497__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41498){
var self__ = this;
var _41498__$1 = this;
return self__.meta41497;
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t41496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t41496.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t41496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t41496.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41497","meta41497",780457844,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t41496.cljs$lang$type = true;

cljs.core.async.t41496.cljs$lang$ctorStr = "cljs.core.async/t41496";

cljs.core.async.t41496.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41496");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t41496 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t41496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41497){
return (new cljs.core.async.t41496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41497));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t41496(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33677__auto___41619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41619,mults,ensure_mult,p){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41619,mults,ensure_mult,p){
return (function (state_41570){
var state_val_41571 = (state_41570[(1)]);
if((state_val_41571 === (7))){
var inst_41566 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41572_41620 = state_41570__$1;
(statearr_41572_41620[(2)] = inst_41566);

(statearr_41572_41620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (20))){
var state_41570__$1 = state_41570;
var statearr_41573_41621 = state_41570__$1;
(statearr_41573_41621[(2)] = null);

(statearr_41573_41621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (1))){
var state_41570__$1 = state_41570;
var statearr_41574_41622 = state_41570__$1;
(statearr_41574_41622[(2)] = null);

(statearr_41574_41622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (24))){
var inst_41549 = (state_41570[(7)]);
var inst_41558 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41549);
var state_41570__$1 = state_41570;
var statearr_41575_41623 = state_41570__$1;
(statearr_41575_41623[(2)] = inst_41558);

(statearr_41575_41623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (4))){
var inst_41501 = (state_41570[(8)]);
var inst_41501__$1 = (state_41570[(2)]);
var inst_41502 = (inst_41501__$1 == null);
var state_41570__$1 = (function (){var statearr_41576 = state_41570;
(statearr_41576[(8)] = inst_41501__$1);

return statearr_41576;
})();
if(cljs.core.truth_(inst_41502)){
var statearr_41577_41624 = state_41570__$1;
(statearr_41577_41624[(1)] = (5));

} else {
var statearr_41578_41625 = state_41570__$1;
(statearr_41578_41625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (15))){
var inst_41543 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41579_41626 = state_41570__$1;
(statearr_41579_41626[(2)] = inst_41543);

(statearr_41579_41626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (21))){
var inst_41563 = (state_41570[(2)]);
var state_41570__$1 = (function (){var statearr_41580 = state_41570;
(statearr_41580[(9)] = inst_41563);

return statearr_41580;
})();
var statearr_41581_41627 = state_41570__$1;
(statearr_41581_41627[(2)] = null);

(statearr_41581_41627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (13))){
var inst_41525 = (state_41570[(10)]);
var inst_41527 = cljs.core.chunked_seq_QMARK_.call(null,inst_41525);
var state_41570__$1 = state_41570;
if(inst_41527){
var statearr_41582_41628 = state_41570__$1;
(statearr_41582_41628[(1)] = (16));

} else {
var statearr_41583_41629 = state_41570__$1;
(statearr_41583_41629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (22))){
var inst_41555 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
if(cljs.core.truth_(inst_41555)){
var statearr_41584_41630 = state_41570__$1;
(statearr_41584_41630[(1)] = (23));

} else {
var statearr_41585_41631 = state_41570__$1;
(statearr_41585_41631[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (6))){
var inst_41501 = (state_41570[(8)]);
var inst_41549 = (state_41570[(7)]);
var inst_41551 = (state_41570[(11)]);
var inst_41549__$1 = topic_fn.call(null,inst_41501);
var inst_41550 = cljs.core.deref.call(null,mults);
var inst_41551__$1 = cljs.core.get.call(null,inst_41550,inst_41549__$1);
var state_41570__$1 = (function (){var statearr_41586 = state_41570;
(statearr_41586[(7)] = inst_41549__$1);

(statearr_41586[(11)] = inst_41551__$1);

return statearr_41586;
})();
if(cljs.core.truth_(inst_41551__$1)){
var statearr_41587_41632 = state_41570__$1;
(statearr_41587_41632[(1)] = (19));

} else {
var statearr_41588_41633 = state_41570__$1;
(statearr_41588_41633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (25))){
var inst_41560 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41589_41634 = state_41570__$1;
(statearr_41589_41634[(2)] = inst_41560);

(statearr_41589_41634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (17))){
var inst_41525 = (state_41570[(10)]);
var inst_41534 = cljs.core.first.call(null,inst_41525);
var inst_41535 = cljs.core.async.muxch_STAR_.call(null,inst_41534);
var inst_41536 = cljs.core.async.close_BANG_.call(null,inst_41535);
var inst_41537 = cljs.core.next.call(null,inst_41525);
var inst_41511 = inst_41537;
var inst_41512 = null;
var inst_41513 = (0);
var inst_41514 = (0);
var state_41570__$1 = (function (){var statearr_41590 = state_41570;
(statearr_41590[(12)] = inst_41512);

(statearr_41590[(13)] = inst_41514);

(statearr_41590[(14)] = inst_41536);

(statearr_41590[(15)] = inst_41511);

(statearr_41590[(16)] = inst_41513);

return statearr_41590;
})();
var statearr_41591_41635 = state_41570__$1;
(statearr_41591_41635[(2)] = null);

(statearr_41591_41635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (3))){
var inst_41568 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41570__$1,inst_41568);
} else {
if((state_val_41571 === (12))){
var inst_41545 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41592_41636 = state_41570__$1;
(statearr_41592_41636[(2)] = inst_41545);

(statearr_41592_41636[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (2))){
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41570__$1,(4),ch);
} else {
if((state_val_41571 === (23))){
var state_41570__$1 = state_41570;
var statearr_41593_41637 = state_41570__$1;
(statearr_41593_41637[(2)] = null);

(statearr_41593_41637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (19))){
var inst_41501 = (state_41570[(8)]);
var inst_41551 = (state_41570[(11)]);
var inst_41553 = cljs.core.async.muxch_STAR_.call(null,inst_41551);
var state_41570__$1 = state_41570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41570__$1,(22),inst_41553,inst_41501);
} else {
if((state_val_41571 === (11))){
var inst_41525 = (state_41570[(10)]);
var inst_41511 = (state_41570[(15)]);
var inst_41525__$1 = cljs.core.seq.call(null,inst_41511);
var state_41570__$1 = (function (){var statearr_41594 = state_41570;
(statearr_41594[(10)] = inst_41525__$1);

return statearr_41594;
})();
if(inst_41525__$1){
var statearr_41595_41638 = state_41570__$1;
(statearr_41595_41638[(1)] = (13));

} else {
var statearr_41596_41639 = state_41570__$1;
(statearr_41596_41639[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (9))){
var inst_41547 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41597_41640 = state_41570__$1;
(statearr_41597_41640[(2)] = inst_41547);

(statearr_41597_41640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (5))){
var inst_41508 = cljs.core.deref.call(null,mults);
var inst_41509 = cljs.core.vals.call(null,inst_41508);
var inst_41510 = cljs.core.seq.call(null,inst_41509);
var inst_41511 = inst_41510;
var inst_41512 = null;
var inst_41513 = (0);
var inst_41514 = (0);
var state_41570__$1 = (function (){var statearr_41598 = state_41570;
(statearr_41598[(12)] = inst_41512);

(statearr_41598[(13)] = inst_41514);

(statearr_41598[(15)] = inst_41511);

(statearr_41598[(16)] = inst_41513);

return statearr_41598;
})();
var statearr_41599_41641 = state_41570__$1;
(statearr_41599_41641[(2)] = null);

(statearr_41599_41641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (14))){
var state_41570__$1 = state_41570;
var statearr_41603_41642 = state_41570__$1;
(statearr_41603_41642[(2)] = null);

(statearr_41603_41642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (16))){
var inst_41525 = (state_41570[(10)]);
var inst_41529 = cljs.core.chunk_first.call(null,inst_41525);
var inst_41530 = cljs.core.chunk_rest.call(null,inst_41525);
var inst_41531 = cljs.core.count.call(null,inst_41529);
var inst_41511 = inst_41530;
var inst_41512 = inst_41529;
var inst_41513 = inst_41531;
var inst_41514 = (0);
var state_41570__$1 = (function (){var statearr_41604 = state_41570;
(statearr_41604[(12)] = inst_41512);

(statearr_41604[(13)] = inst_41514);

(statearr_41604[(15)] = inst_41511);

(statearr_41604[(16)] = inst_41513);

return statearr_41604;
})();
var statearr_41605_41643 = state_41570__$1;
(statearr_41605_41643[(2)] = null);

(statearr_41605_41643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (10))){
var inst_41512 = (state_41570[(12)]);
var inst_41514 = (state_41570[(13)]);
var inst_41511 = (state_41570[(15)]);
var inst_41513 = (state_41570[(16)]);
var inst_41519 = cljs.core._nth.call(null,inst_41512,inst_41514);
var inst_41520 = cljs.core.async.muxch_STAR_.call(null,inst_41519);
var inst_41521 = cljs.core.async.close_BANG_.call(null,inst_41520);
var inst_41522 = (inst_41514 + (1));
var tmp41600 = inst_41512;
var tmp41601 = inst_41511;
var tmp41602 = inst_41513;
var inst_41511__$1 = tmp41601;
var inst_41512__$1 = tmp41600;
var inst_41513__$1 = tmp41602;
var inst_41514__$1 = inst_41522;
var state_41570__$1 = (function (){var statearr_41606 = state_41570;
(statearr_41606[(17)] = inst_41521);

(statearr_41606[(12)] = inst_41512__$1);

(statearr_41606[(13)] = inst_41514__$1);

(statearr_41606[(15)] = inst_41511__$1);

(statearr_41606[(16)] = inst_41513__$1);

return statearr_41606;
})();
var statearr_41607_41644 = state_41570__$1;
(statearr_41607_41644[(2)] = null);

(statearr_41607_41644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (18))){
var inst_41540 = (state_41570[(2)]);
var state_41570__$1 = state_41570;
var statearr_41608_41645 = state_41570__$1;
(statearr_41608_41645[(2)] = inst_41540);

(statearr_41608_41645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41571 === (8))){
var inst_41514 = (state_41570[(13)]);
var inst_41513 = (state_41570[(16)]);
var inst_41516 = (inst_41514 < inst_41513);
var inst_41517 = inst_41516;
var state_41570__$1 = state_41570;
if(cljs.core.truth_(inst_41517)){
var statearr_41609_41646 = state_41570__$1;
(statearr_41609_41646[(1)] = (10));

} else {
var statearr_41610_41647 = state_41570__$1;
(statearr_41610_41647[(1)] = (11));

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
});})(c__33677__auto___41619,mults,ensure_mult,p))
;
return ((function (switch__33615__auto__,c__33677__auto___41619,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_41614 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41614[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_41614[(1)] = (1));

return statearr_41614;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_41570){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41615){if((e41615 instanceof Object)){
var ex__33619__auto__ = e41615;
var statearr_41616_41648 = state_41570;
(statearr_41616_41648[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41649 = state_41570;
state_41570 = G__41649;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_41570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_41570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41619,mults,ensure_mult,p))
})();
var state__33679__auto__ = (function (){var statearr_41617 = f__33678__auto__.call(null);
(statearr_41617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41619);

return statearr_41617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41619,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__41651 = arguments.length;
switch (G__41651) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__41654 = arguments.length;
switch (G__41654) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__41657 = arguments.length;
switch (G__41657) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33677__auto___41727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41696){
var state_val_41697 = (state_41696[(1)]);
if((state_val_41697 === (7))){
var state_41696__$1 = state_41696;
var statearr_41698_41728 = state_41696__$1;
(statearr_41698_41728[(2)] = null);

(statearr_41698_41728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (1))){
var state_41696__$1 = state_41696;
var statearr_41699_41729 = state_41696__$1;
(statearr_41699_41729[(2)] = null);

(statearr_41699_41729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (4))){
var inst_41660 = (state_41696[(7)]);
var inst_41662 = (inst_41660 < cnt);
var state_41696__$1 = state_41696;
if(cljs.core.truth_(inst_41662)){
var statearr_41700_41730 = state_41696__$1;
(statearr_41700_41730[(1)] = (6));

} else {
var statearr_41701_41731 = state_41696__$1;
(statearr_41701_41731[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (15))){
var inst_41692 = (state_41696[(2)]);
var state_41696__$1 = state_41696;
var statearr_41702_41732 = state_41696__$1;
(statearr_41702_41732[(2)] = inst_41692);

(statearr_41702_41732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (13))){
var inst_41685 = cljs.core.async.close_BANG_.call(null,out);
var state_41696__$1 = state_41696;
var statearr_41703_41733 = state_41696__$1;
(statearr_41703_41733[(2)] = inst_41685);

(statearr_41703_41733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (6))){
var state_41696__$1 = state_41696;
var statearr_41704_41734 = state_41696__$1;
(statearr_41704_41734[(2)] = null);

(statearr_41704_41734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (3))){
var inst_41694 = (state_41696[(2)]);
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41696__$1,inst_41694);
} else {
if((state_val_41697 === (12))){
var inst_41682 = (state_41696[(8)]);
var inst_41682__$1 = (state_41696[(2)]);
var inst_41683 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41682__$1);
var state_41696__$1 = (function (){var statearr_41705 = state_41696;
(statearr_41705[(8)] = inst_41682__$1);

return statearr_41705;
})();
if(cljs.core.truth_(inst_41683)){
var statearr_41706_41735 = state_41696__$1;
(statearr_41706_41735[(1)] = (13));

} else {
var statearr_41707_41736 = state_41696__$1;
(statearr_41707_41736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (2))){
var inst_41659 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41660 = (0);
var state_41696__$1 = (function (){var statearr_41708 = state_41696;
(statearr_41708[(7)] = inst_41660);

(statearr_41708[(9)] = inst_41659);

return statearr_41708;
})();
var statearr_41709_41737 = state_41696__$1;
(statearr_41709_41737[(2)] = null);

(statearr_41709_41737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (11))){
var inst_41660 = (state_41696[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41696,(10),Object,null,(9));
var inst_41669 = chs__$1.call(null,inst_41660);
var inst_41670 = done.call(null,inst_41660);
var inst_41671 = cljs.core.async.take_BANG_.call(null,inst_41669,inst_41670);
var state_41696__$1 = state_41696;
var statearr_41710_41738 = state_41696__$1;
(statearr_41710_41738[(2)] = inst_41671);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41696__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (9))){
var inst_41660 = (state_41696[(7)]);
var inst_41673 = (state_41696[(2)]);
var inst_41674 = (inst_41660 + (1));
var inst_41660__$1 = inst_41674;
var state_41696__$1 = (function (){var statearr_41711 = state_41696;
(statearr_41711[(7)] = inst_41660__$1);

(statearr_41711[(10)] = inst_41673);

return statearr_41711;
})();
var statearr_41712_41739 = state_41696__$1;
(statearr_41712_41739[(2)] = null);

(statearr_41712_41739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (5))){
var inst_41680 = (state_41696[(2)]);
var state_41696__$1 = (function (){var statearr_41713 = state_41696;
(statearr_41713[(11)] = inst_41680);

return statearr_41713;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41696__$1,(12),dchan);
} else {
if((state_val_41697 === (14))){
var inst_41682 = (state_41696[(8)]);
var inst_41687 = cljs.core.apply.call(null,f,inst_41682);
var state_41696__$1 = state_41696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41696__$1,(16),out,inst_41687);
} else {
if((state_val_41697 === (16))){
var inst_41689 = (state_41696[(2)]);
var state_41696__$1 = (function (){var statearr_41714 = state_41696;
(statearr_41714[(12)] = inst_41689);

return statearr_41714;
})();
var statearr_41715_41740 = state_41696__$1;
(statearr_41715_41740[(2)] = null);

(statearr_41715_41740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (10))){
var inst_41664 = (state_41696[(2)]);
var inst_41665 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41696__$1 = (function (){var statearr_41716 = state_41696;
(statearr_41716[(13)] = inst_41664);

return statearr_41716;
})();
var statearr_41717_41741 = state_41696__$1;
(statearr_41717_41741[(2)] = inst_41665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41696__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41697 === (8))){
var inst_41678 = (state_41696[(2)]);
var state_41696__$1 = state_41696;
var statearr_41718_41742 = state_41696__$1;
(statearr_41718_41742[(2)] = inst_41678);

(statearr_41718_41742[(1)] = (5));


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
});})(c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33615__auto__,c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_41722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41722[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_41722[(1)] = (1));

return statearr_41722;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_41696){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41723){if((e41723 instanceof Object)){
var ex__33619__auto__ = e41723;
var statearr_41724_41743 = state_41696;
(statearr_41724_41743[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41744 = state_41696;
state_41696 = G__41744;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_41696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_41696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33679__auto__ = (function (){var statearr_41725 = f__33678__auto__.call(null);
(statearr_41725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41727);

return statearr_41725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41727,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__41747 = arguments.length;
switch (G__41747) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___41802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41802,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41802,out){
return (function (state_41777){
var state_val_41778 = (state_41777[(1)]);
if((state_val_41778 === (7))){
var inst_41756 = (state_41777[(7)]);
var inst_41757 = (state_41777[(8)]);
var inst_41756__$1 = (state_41777[(2)]);
var inst_41757__$1 = cljs.core.nth.call(null,inst_41756__$1,(0),null);
var inst_41758 = cljs.core.nth.call(null,inst_41756__$1,(1),null);
var inst_41759 = (inst_41757__$1 == null);
var state_41777__$1 = (function (){var statearr_41779 = state_41777;
(statearr_41779[(7)] = inst_41756__$1);

(statearr_41779[(8)] = inst_41757__$1);

(statearr_41779[(9)] = inst_41758);

return statearr_41779;
})();
if(cljs.core.truth_(inst_41759)){
var statearr_41780_41803 = state_41777__$1;
(statearr_41780_41803[(1)] = (8));

} else {
var statearr_41781_41804 = state_41777__$1;
(statearr_41781_41804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (1))){
var inst_41748 = cljs.core.vec.call(null,chs);
var inst_41749 = inst_41748;
var state_41777__$1 = (function (){var statearr_41782 = state_41777;
(statearr_41782[(10)] = inst_41749);

return statearr_41782;
})();
var statearr_41783_41805 = state_41777__$1;
(statearr_41783_41805[(2)] = null);

(statearr_41783_41805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (4))){
var inst_41749 = (state_41777[(10)]);
var state_41777__$1 = state_41777;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41777__$1,(7),inst_41749);
} else {
if((state_val_41778 === (6))){
var inst_41773 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
var statearr_41784_41806 = state_41777__$1;
(statearr_41784_41806[(2)] = inst_41773);

(statearr_41784_41806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (3))){
var inst_41775 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41777__$1,inst_41775);
} else {
if((state_val_41778 === (2))){
var inst_41749 = (state_41777[(10)]);
var inst_41751 = cljs.core.count.call(null,inst_41749);
var inst_41752 = (inst_41751 > (0));
var state_41777__$1 = state_41777;
if(cljs.core.truth_(inst_41752)){
var statearr_41786_41807 = state_41777__$1;
(statearr_41786_41807[(1)] = (4));

} else {
var statearr_41787_41808 = state_41777__$1;
(statearr_41787_41808[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (11))){
var inst_41749 = (state_41777[(10)]);
var inst_41766 = (state_41777[(2)]);
var tmp41785 = inst_41749;
var inst_41749__$1 = tmp41785;
var state_41777__$1 = (function (){var statearr_41788 = state_41777;
(statearr_41788[(11)] = inst_41766);

(statearr_41788[(10)] = inst_41749__$1);

return statearr_41788;
})();
var statearr_41789_41809 = state_41777__$1;
(statearr_41789_41809[(2)] = null);

(statearr_41789_41809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (9))){
var inst_41757 = (state_41777[(8)]);
var state_41777__$1 = state_41777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41777__$1,(11),out,inst_41757);
} else {
if((state_val_41778 === (5))){
var inst_41771 = cljs.core.async.close_BANG_.call(null,out);
var state_41777__$1 = state_41777;
var statearr_41790_41810 = state_41777__$1;
(statearr_41790_41810[(2)] = inst_41771);

(statearr_41790_41810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (10))){
var inst_41769 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
var statearr_41791_41811 = state_41777__$1;
(statearr_41791_41811[(2)] = inst_41769);

(statearr_41791_41811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (8))){
var inst_41756 = (state_41777[(7)]);
var inst_41749 = (state_41777[(10)]);
var inst_41757 = (state_41777[(8)]);
var inst_41758 = (state_41777[(9)]);
var inst_41761 = (function (){var cs = inst_41749;
var vec__41754 = inst_41756;
var v = inst_41757;
var c = inst_41758;
return ((function (cs,vec__41754,v,c,inst_41756,inst_41749,inst_41757,inst_41758,state_val_41778,c__33677__auto___41802,out){
return (function (p1__41745_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41745_SHARP_);
});
;})(cs,vec__41754,v,c,inst_41756,inst_41749,inst_41757,inst_41758,state_val_41778,c__33677__auto___41802,out))
})();
var inst_41762 = cljs.core.filterv.call(null,inst_41761,inst_41749);
var inst_41749__$1 = inst_41762;
var state_41777__$1 = (function (){var statearr_41792 = state_41777;
(statearr_41792[(10)] = inst_41749__$1);

return statearr_41792;
})();
var statearr_41793_41812 = state_41777__$1;
(statearr_41793_41812[(2)] = null);

(statearr_41793_41812[(1)] = (2));


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
});})(c__33677__auto___41802,out))
;
return ((function (switch__33615__auto__,c__33677__auto___41802,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_41797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41797[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_41797[(1)] = (1));

return statearr_41797;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_41777){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41798){if((e41798 instanceof Object)){
var ex__33619__auto__ = e41798;
var statearr_41799_41813 = state_41777;
(statearr_41799_41813[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41814 = state_41777;
state_41777 = G__41814;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_41777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_41777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41802,out))
})();
var state__33679__auto__ = (function (){var statearr_41800 = f__33678__auto__.call(null);
(statearr_41800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41802);

return statearr_41800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41802,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__41816 = arguments.length;
switch (G__41816) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___41864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41864,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41864,out){
return (function (state_41840){
var state_val_41841 = (state_41840[(1)]);
if((state_val_41841 === (7))){
var inst_41822 = (state_41840[(7)]);
var inst_41822__$1 = (state_41840[(2)]);
var inst_41823 = (inst_41822__$1 == null);
var inst_41824 = cljs.core.not.call(null,inst_41823);
var state_41840__$1 = (function (){var statearr_41842 = state_41840;
(statearr_41842[(7)] = inst_41822__$1);

return statearr_41842;
})();
if(inst_41824){
var statearr_41843_41865 = state_41840__$1;
(statearr_41843_41865[(1)] = (8));

} else {
var statearr_41844_41866 = state_41840__$1;
(statearr_41844_41866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (1))){
var inst_41817 = (0);
var state_41840__$1 = (function (){var statearr_41845 = state_41840;
(statearr_41845[(8)] = inst_41817);

return statearr_41845;
})();
var statearr_41846_41867 = state_41840__$1;
(statearr_41846_41867[(2)] = null);

(statearr_41846_41867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (4))){
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41840__$1,(7),ch);
} else {
if((state_val_41841 === (6))){
var inst_41835 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41847_41868 = state_41840__$1;
(statearr_41847_41868[(2)] = inst_41835);

(statearr_41847_41868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (3))){
var inst_41837 = (state_41840[(2)]);
var inst_41838 = cljs.core.async.close_BANG_.call(null,out);
var state_41840__$1 = (function (){var statearr_41848 = state_41840;
(statearr_41848[(9)] = inst_41837);

return statearr_41848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41840__$1,inst_41838);
} else {
if((state_val_41841 === (2))){
var inst_41817 = (state_41840[(8)]);
var inst_41819 = (inst_41817 < n);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41819)){
var statearr_41849_41869 = state_41840__$1;
(statearr_41849_41869[(1)] = (4));

} else {
var statearr_41850_41870 = state_41840__$1;
(statearr_41850_41870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (11))){
var inst_41817 = (state_41840[(8)]);
var inst_41827 = (state_41840[(2)]);
var inst_41828 = (inst_41817 + (1));
var inst_41817__$1 = inst_41828;
var state_41840__$1 = (function (){var statearr_41851 = state_41840;
(statearr_41851[(10)] = inst_41827);

(statearr_41851[(8)] = inst_41817__$1);

return statearr_41851;
})();
var statearr_41852_41871 = state_41840__$1;
(statearr_41852_41871[(2)] = null);

(statearr_41852_41871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (9))){
var state_41840__$1 = state_41840;
var statearr_41853_41872 = state_41840__$1;
(statearr_41853_41872[(2)] = null);

(statearr_41853_41872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (5))){
var state_41840__$1 = state_41840;
var statearr_41854_41873 = state_41840__$1;
(statearr_41854_41873[(2)] = null);

(statearr_41854_41873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (10))){
var inst_41832 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41855_41874 = state_41840__$1;
(statearr_41855_41874[(2)] = inst_41832);

(statearr_41855_41874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (8))){
var inst_41822 = (state_41840[(7)]);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41840__$1,(11),out,inst_41822);
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
});})(c__33677__auto___41864,out))
;
return ((function (switch__33615__auto__,c__33677__auto___41864,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_41859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41859[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_41859[(1)] = (1));

return statearr_41859;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_41840){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41860){if((e41860 instanceof Object)){
var ex__33619__auto__ = e41860;
var statearr_41861_41875 = state_41840;
(statearr_41861_41875[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41876 = state_41840;
state_41840 = G__41876;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_41840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_41840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41864,out))
})();
var state__33679__auto__ = (function (){var statearr_41862 = f__33678__auto__.call(null);
(statearr_41862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41864);

return statearr_41862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41864,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t41884 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41884 = (function (map_LT_,f,ch,meta41885){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41885 = meta41885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41886,meta41885__$1){
var self__ = this;
var _41886__$1 = this;
return (new cljs.core.async.t41884(self__.map_LT_,self__.f,self__.ch,meta41885__$1));
});

cljs.core.async.t41884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41886){
var self__ = this;
var _41886__$1 = this;
return self__.meta41885;
});

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t41887 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41887 = (function (map_LT_,f,ch,meta41885,_,fn1,meta41888){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41885 = meta41885;
this._ = _;
this.fn1 = fn1;
this.meta41888 = meta41888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41889,meta41888__$1){
var self__ = this;
var _41889__$1 = this;
return (new cljs.core.async.t41887(self__.map_LT_,self__.f,self__.ch,self__.meta41885,self__._,self__.fn1,meta41888__$1));
});})(___$1))
;

cljs.core.async.t41887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41889){
var self__ = this;
var _41889__$1 = this;
return self__.meta41888;
});})(___$1))
;

cljs.core.async.t41887.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t41887.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t41887.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41877_SHARP_){
return f1.call(null,(((p1__41877_SHARP_ == null))?null:self__.f.call(null,p1__41877_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t41887.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41885","meta41885",-1177858442,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41888","meta41888",945003748,null)], null);
});})(___$1))
;

cljs.core.async.t41887.cljs$lang$type = true;

cljs.core.async.t41887.cljs$lang$ctorStr = "cljs.core.async/t41887";

cljs.core.async.t41887.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41887");
});})(___$1))
;

cljs.core.async.__GT_t41887 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t41887(map_LT___$1,f__$1,ch__$1,meta41885__$1,___$2,fn1__$1,meta41888){
return (new cljs.core.async.t41887(map_LT___$1,f__$1,ch__$1,meta41885__$1,___$2,fn1__$1,meta41888));
});})(___$1))
;

}

return (new cljs.core.async.t41887(self__.map_LT_,self__.f,self__.ch,self__.meta41885,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__29800__auto__ = ret;
if(cljs.core.truth_(and__29800__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__29800__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41884.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t41884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41885","meta41885",-1177858442,null)], null);
});

cljs.core.async.t41884.cljs$lang$type = true;

cljs.core.async.t41884.cljs$lang$ctorStr = "cljs.core.async/t41884";

cljs.core.async.t41884.cljs$lang$ctorPrWriter = (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41884");
});

cljs.core.async.__GT_t41884 = (function cljs$core$async$map_LT__$___GT_t41884(map_LT___$1,f__$1,ch__$1,meta41885){
return (new cljs.core.async.t41884(map_LT___$1,f__$1,ch__$1,meta41885));
});

}

return (new cljs.core.async.t41884(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t41893 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41893 = (function (map_GT_,f,ch,meta41894){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41894 = meta41894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41895,meta41894__$1){
var self__ = this;
var _41895__$1 = this;
return (new cljs.core.async.t41893(self__.map_GT_,self__.f,self__.ch,meta41894__$1));
});

cljs.core.async.t41893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41895){
var self__ = this;
var _41895__$1 = this;
return self__.meta41894;
});

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t41893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41894","meta41894",382120464,null)], null);
});

cljs.core.async.t41893.cljs$lang$type = true;

cljs.core.async.t41893.cljs$lang$ctorStr = "cljs.core.async/t41893";

cljs.core.async.t41893.cljs$lang$ctorPrWriter = (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41893");
});

cljs.core.async.__GT_t41893 = (function cljs$core$async$map_GT__$___GT_t41893(map_GT___$1,f__$1,ch__$1,meta41894){
return (new cljs.core.async.t41893(map_GT___$1,f__$1,ch__$1,meta41894));
});

}

return (new cljs.core.async.t41893(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t41899 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t41899 = (function (filter_GT_,p,ch,meta41900){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41900 = meta41900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t41899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41901,meta41900__$1){
var self__ = this;
var _41901__$1 = this;
return (new cljs.core.async.t41899(self__.filter_GT_,self__.p,self__.ch,meta41900__$1));
});

cljs.core.async.t41899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41901){
var self__ = this;
var _41901__$1 = this;
return self__.meta41900;
});

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t41899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41900","meta41900",1829512277,null)], null);
});

cljs.core.async.t41899.cljs$lang$type = true;

cljs.core.async.t41899.cljs$lang$ctorStr = "cljs.core.async/t41899";

cljs.core.async.t41899.cljs$lang$ctorPrWriter = (function (this__30391__auto__,writer__30392__auto__,opt__30393__auto__){
return cljs.core._write.call(null,writer__30392__auto__,"cljs.core.async/t41899");
});

cljs.core.async.__GT_t41899 = (function cljs$core$async$filter_GT__$___GT_t41899(filter_GT___$1,p__$1,ch__$1,meta41900){
return (new cljs.core.async.t41899(filter_GT___$1,p__$1,ch__$1,meta41900));
});

}

return (new cljs.core.async.t41899(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__41903 = arguments.length;
switch (G__41903) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___41946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___41946,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___41946,out){
return (function (state_41924){
var state_val_41925 = (state_41924[(1)]);
if((state_val_41925 === (7))){
var inst_41920 = (state_41924[(2)]);
var state_41924__$1 = state_41924;
var statearr_41926_41947 = state_41924__$1;
(statearr_41926_41947[(2)] = inst_41920);

(statearr_41926_41947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (1))){
var state_41924__$1 = state_41924;
var statearr_41927_41948 = state_41924__$1;
(statearr_41927_41948[(2)] = null);

(statearr_41927_41948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (4))){
var inst_41906 = (state_41924[(7)]);
var inst_41906__$1 = (state_41924[(2)]);
var inst_41907 = (inst_41906__$1 == null);
var state_41924__$1 = (function (){var statearr_41928 = state_41924;
(statearr_41928[(7)] = inst_41906__$1);

return statearr_41928;
})();
if(cljs.core.truth_(inst_41907)){
var statearr_41929_41949 = state_41924__$1;
(statearr_41929_41949[(1)] = (5));

} else {
var statearr_41930_41950 = state_41924__$1;
(statearr_41930_41950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (6))){
var inst_41906 = (state_41924[(7)]);
var inst_41911 = p.call(null,inst_41906);
var state_41924__$1 = state_41924;
if(cljs.core.truth_(inst_41911)){
var statearr_41931_41951 = state_41924__$1;
(statearr_41931_41951[(1)] = (8));

} else {
var statearr_41932_41952 = state_41924__$1;
(statearr_41932_41952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (3))){
var inst_41922 = (state_41924[(2)]);
var state_41924__$1 = state_41924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41924__$1,inst_41922);
} else {
if((state_val_41925 === (2))){
var state_41924__$1 = state_41924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41924__$1,(4),ch);
} else {
if((state_val_41925 === (11))){
var inst_41914 = (state_41924[(2)]);
var state_41924__$1 = state_41924;
var statearr_41933_41953 = state_41924__$1;
(statearr_41933_41953[(2)] = inst_41914);

(statearr_41933_41953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (9))){
var state_41924__$1 = state_41924;
var statearr_41934_41954 = state_41924__$1;
(statearr_41934_41954[(2)] = null);

(statearr_41934_41954[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (5))){
var inst_41909 = cljs.core.async.close_BANG_.call(null,out);
var state_41924__$1 = state_41924;
var statearr_41935_41955 = state_41924__$1;
(statearr_41935_41955[(2)] = inst_41909);

(statearr_41935_41955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (10))){
var inst_41917 = (state_41924[(2)]);
var state_41924__$1 = (function (){var statearr_41936 = state_41924;
(statearr_41936[(8)] = inst_41917);

return statearr_41936;
})();
var statearr_41937_41956 = state_41924__$1;
(statearr_41937_41956[(2)] = null);

(statearr_41937_41956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41925 === (8))){
var inst_41906 = (state_41924[(7)]);
var state_41924__$1 = state_41924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41924__$1,(11),out,inst_41906);
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
});})(c__33677__auto___41946,out))
;
return ((function (switch__33615__auto__,c__33677__auto___41946,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_41941 = [null,null,null,null,null,null,null,null,null];
(statearr_41941[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_41941[(1)] = (1));

return statearr_41941;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_41924){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_41924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e41942){if((e41942 instanceof Object)){
var ex__33619__auto__ = e41942;
var statearr_41943_41957 = state_41924;
(statearr_41943_41957[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41958 = state_41924;
state_41924 = G__41958;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_41924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_41924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___41946,out))
})();
var state__33679__auto__ = (function (){var statearr_41944 = f__33678__auto__.call(null);
(statearr_41944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___41946);

return statearr_41944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___41946,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__41960 = arguments.length;
switch (G__41960) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto__){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto__){
return (function (state_42127){
var state_val_42128 = (state_42127[(1)]);
if((state_val_42128 === (7))){
var inst_42123 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
var statearr_42129_42170 = state_42127__$1;
(statearr_42129_42170[(2)] = inst_42123);

(statearr_42129_42170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (20))){
var inst_42093 = (state_42127[(7)]);
var inst_42104 = (state_42127[(2)]);
var inst_42105 = cljs.core.next.call(null,inst_42093);
var inst_42079 = inst_42105;
var inst_42080 = null;
var inst_42081 = (0);
var inst_42082 = (0);
var state_42127__$1 = (function (){var statearr_42130 = state_42127;
(statearr_42130[(8)] = inst_42080);

(statearr_42130[(9)] = inst_42082);

(statearr_42130[(10)] = inst_42079);

(statearr_42130[(11)] = inst_42104);

(statearr_42130[(12)] = inst_42081);

return statearr_42130;
})();
var statearr_42131_42171 = state_42127__$1;
(statearr_42131_42171[(2)] = null);

(statearr_42131_42171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (1))){
var state_42127__$1 = state_42127;
var statearr_42132_42172 = state_42127__$1;
(statearr_42132_42172[(2)] = null);

(statearr_42132_42172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (4))){
var inst_42068 = (state_42127[(13)]);
var inst_42068__$1 = (state_42127[(2)]);
var inst_42069 = (inst_42068__$1 == null);
var state_42127__$1 = (function (){var statearr_42133 = state_42127;
(statearr_42133[(13)] = inst_42068__$1);

return statearr_42133;
})();
if(cljs.core.truth_(inst_42069)){
var statearr_42134_42173 = state_42127__$1;
(statearr_42134_42173[(1)] = (5));

} else {
var statearr_42135_42174 = state_42127__$1;
(statearr_42135_42174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (15))){
var state_42127__$1 = state_42127;
var statearr_42139_42175 = state_42127__$1;
(statearr_42139_42175[(2)] = null);

(statearr_42139_42175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (21))){
var state_42127__$1 = state_42127;
var statearr_42140_42176 = state_42127__$1;
(statearr_42140_42176[(2)] = null);

(statearr_42140_42176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (13))){
var inst_42080 = (state_42127[(8)]);
var inst_42082 = (state_42127[(9)]);
var inst_42079 = (state_42127[(10)]);
var inst_42081 = (state_42127[(12)]);
var inst_42089 = (state_42127[(2)]);
var inst_42090 = (inst_42082 + (1));
var tmp42136 = inst_42080;
var tmp42137 = inst_42079;
var tmp42138 = inst_42081;
var inst_42079__$1 = tmp42137;
var inst_42080__$1 = tmp42136;
var inst_42081__$1 = tmp42138;
var inst_42082__$1 = inst_42090;
var state_42127__$1 = (function (){var statearr_42141 = state_42127;
(statearr_42141[(8)] = inst_42080__$1);

(statearr_42141[(14)] = inst_42089);

(statearr_42141[(9)] = inst_42082__$1);

(statearr_42141[(10)] = inst_42079__$1);

(statearr_42141[(12)] = inst_42081__$1);

return statearr_42141;
})();
var statearr_42142_42177 = state_42127__$1;
(statearr_42142_42177[(2)] = null);

(statearr_42142_42177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (22))){
var state_42127__$1 = state_42127;
var statearr_42143_42178 = state_42127__$1;
(statearr_42143_42178[(2)] = null);

(statearr_42143_42178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (6))){
var inst_42068 = (state_42127[(13)]);
var inst_42077 = f.call(null,inst_42068);
var inst_42078 = cljs.core.seq.call(null,inst_42077);
var inst_42079 = inst_42078;
var inst_42080 = null;
var inst_42081 = (0);
var inst_42082 = (0);
var state_42127__$1 = (function (){var statearr_42144 = state_42127;
(statearr_42144[(8)] = inst_42080);

(statearr_42144[(9)] = inst_42082);

(statearr_42144[(10)] = inst_42079);

(statearr_42144[(12)] = inst_42081);

return statearr_42144;
})();
var statearr_42145_42179 = state_42127__$1;
(statearr_42145_42179[(2)] = null);

(statearr_42145_42179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (17))){
var inst_42093 = (state_42127[(7)]);
var inst_42097 = cljs.core.chunk_first.call(null,inst_42093);
var inst_42098 = cljs.core.chunk_rest.call(null,inst_42093);
var inst_42099 = cljs.core.count.call(null,inst_42097);
var inst_42079 = inst_42098;
var inst_42080 = inst_42097;
var inst_42081 = inst_42099;
var inst_42082 = (0);
var state_42127__$1 = (function (){var statearr_42146 = state_42127;
(statearr_42146[(8)] = inst_42080);

(statearr_42146[(9)] = inst_42082);

(statearr_42146[(10)] = inst_42079);

(statearr_42146[(12)] = inst_42081);

return statearr_42146;
})();
var statearr_42147_42180 = state_42127__$1;
(statearr_42147_42180[(2)] = null);

(statearr_42147_42180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (3))){
var inst_42125 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42127__$1,inst_42125);
} else {
if((state_val_42128 === (12))){
var inst_42113 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
var statearr_42148_42181 = state_42127__$1;
(statearr_42148_42181[(2)] = inst_42113);

(statearr_42148_42181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (2))){
var state_42127__$1 = state_42127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42127__$1,(4),in$);
} else {
if((state_val_42128 === (23))){
var inst_42121 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
var statearr_42149_42182 = state_42127__$1;
(statearr_42149_42182[(2)] = inst_42121);

(statearr_42149_42182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (19))){
var inst_42108 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
var statearr_42150_42183 = state_42127__$1;
(statearr_42150_42183[(2)] = inst_42108);

(statearr_42150_42183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (11))){
var inst_42093 = (state_42127[(7)]);
var inst_42079 = (state_42127[(10)]);
var inst_42093__$1 = cljs.core.seq.call(null,inst_42079);
var state_42127__$1 = (function (){var statearr_42151 = state_42127;
(statearr_42151[(7)] = inst_42093__$1);

return statearr_42151;
})();
if(inst_42093__$1){
var statearr_42152_42184 = state_42127__$1;
(statearr_42152_42184[(1)] = (14));

} else {
var statearr_42153_42185 = state_42127__$1;
(statearr_42153_42185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (9))){
var inst_42115 = (state_42127[(2)]);
var inst_42116 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42127__$1 = (function (){var statearr_42154 = state_42127;
(statearr_42154[(15)] = inst_42115);

return statearr_42154;
})();
if(cljs.core.truth_(inst_42116)){
var statearr_42155_42186 = state_42127__$1;
(statearr_42155_42186[(1)] = (21));

} else {
var statearr_42156_42187 = state_42127__$1;
(statearr_42156_42187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (5))){
var inst_42071 = cljs.core.async.close_BANG_.call(null,out);
var state_42127__$1 = state_42127;
var statearr_42157_42188 = state_42127__$1;
(statearr_42157_42188[(2)] = inst_42071);

(statearr_42157_42188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (14))){
var inst_42093 = (state_42127[(7)]);
var inst_42095 = cljs.core.chunked_seq_QMARK_.call(null,inst_42093);
var state_42127__$1 = state_42127;
if(inst_42095){
var statearr_42158_42189 = state_42127__$1;
(statearr_42158_42189[(1)] = (17));

} else {
var statearr_42159_42190 = state_42127__$1;
(statearr_42159_42190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (16))){
var inst_42111 = (state_42127[(2)]);
var state_42127__$1 = state_42127;
var statearr_42160_42191 = state_42127__$1;
(statearr_42160_42191[(2)] = inst_42111);

(statearr_42160_42191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42128 === (10))){
var inst_42080 = (state_42127[(8)]);
var inst_42082 = (state_42127[(9)]);
var inst_42087 = cljs.core._nth.call(null,inst_42080,inst_42082);
var state_42127__$1 = state_42127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42127__$1,(13),out,inst_42087);
} else {
if((state_val_42128 === (18))){
var inst_42093 = (state_42127[(7)]);
var inst_42102 = cljs.core.first.call(null,inst_42093);
var state_42127__$1 = state_42127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42127__$1,(20),out,inst_42102);
} else {
if((state_val_42128 === (8))){
var inst_42082 = (state_42127[(9)]);
var inst_42081 = (state_42127[(12)]);
var inst_42084 = (inst_42082 < inst_42081);
var inst_42085 = inst_42084;
var state_42127__$1 = state_42127;
if(cljs.core.truth_(inst_42085)){
var statearr_42161_42192 = state_42127__$1;
(statearr_42161_42192[(1)] = (10));

} else {
var statearr_42162_42193 = state_42127__$1;
(statearr_42162_42193[(1)] = (11));

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
});})(c__33677__auto__))
;
return ((function (switch__33615__auto__,c__33677__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____0 = (function (){
var statearr_42166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42166[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__);

(statearr_42166[(1)] = (1));

return statearr_42166;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____1 = (function (state_42127){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_42127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e42167){if((e42167 instanceof Object)){
var ex__33619__auto__ = e42167;
var statearr_42168_42194 = state_42127;
(statearr_42168_42194[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42195 = state_42127;
state_42127 = G__42195;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__ = function(state_42127){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____1.call(this,state_42127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33616__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto__))
})();
var state__33679__auto__ = (function (){var statearr_42169 = f__33678__auto__.call(null);
(statearr_42169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto__);

return statearr_42169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto__))
);

return c__33677__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__42197 = arguments.length;
switch (G__42197) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__42200 = arguments.length;
switch (G__42200) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__42203 = arguments.length;
switch (G__42203) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___42253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___42253,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___42253,out){
return (function (state_42227){
var state_val_42228 = (state_42227[(1)]);
if((state_val_42228 === (7))){
var inst_42222 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42229_42254 = state_42227__$1;
(statearr_42229_42254[(2)] = inst_42222);

(statearr_42229_42254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (1))){
var inst_42204 = null;
var state_42227__$1 = (function (){var statearr_42230 = state_42227;
(statearr_42230[(7)] = inst_42204);

return statearr_42230;
})();
var statearr_42231_42255 = state_42227__$1;
(statearr_42231_42255[(2)] = null);

(statearr_42231_42255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (4))){
var inst_42207 = (state_42227[(8)]);
var inst_42207__$1 = (state_42227[(2)]);
var inst_42208 = (inst_42207__$1 == null);
var inst_42209 = cljs.core.not.call(null,inst_42208);
var state_42227__$1 = (function (){var statearr_42232 = state_42227;
(statearr_42232[(8)] = inst_42207__$1);

return statearr_42232;
})();
if(inst_42209){
var statearr_42233_42256 = state_42227__$1;
(statearr_42233_42256[(1)] = (5));

} else {
var statearr_42234_42257 = state_42227__$1;
(statearr_42234_42257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (6))){
var state_42227__$1 = state_42227;
var statearr_42235_42258 = state_42227__$1;
(statearr_42235_42258[(2)] = null);

(statearr_42235_42258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (3))){
var inst_42224 = (state_42227[(2)]);
var inst_42225 = cljs.core.async.close_BANG_.call(null,out);
var state_42227__$1 = (function (){var statearr_42236 = state_42227;
(statearr_42236[(9)] = inst_42224);

return statearr_42236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42227__$1,inst_42225);
} else {
if((state_val_42228 === (2))){
var state_42227__$1 = state_42227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42227__$1,(4),ch);
} else {
if((state_val_42228 === (11))){
var inst_42207 = (state_42227[(8)]);
var inst_42216 = (state_42227[(2)]);
var inst_42204 = inst_42207;
var state_42227__$1 = (function (){var statearr_42237 = state_42227;
(statearr_42237[(10)] = inst_42216);

(statearr_42237[(7)] = inst_42204);

return statearr_42237;
})();
var statearr_42238_42259 = state_42227__$1;
(statearr_42238_42259[(2)] = null);

(statearr_42238_42259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (9))){
var inst_42207 = (state_42227[(8)]);
var state_42227__$1 = state_42227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42227__$1,(11),out,inst_42207);
} else {
if((state_val_42228 === (5))){
var inst_42207 = (state_42227[(8)]);
var inst_42204 = (state_42227[(7)]);
var inst_42211 = cljs.core._EQ_.call(null,inst_42207,inst_42204);
var state_42227__$1 = state_42227;
if(inst_42211){
var statearr_42240_42260 = state_42227__$1;
(statearr_42240_42260[(1)] = (8));

} else {
var statearr_42241_42261 = state_42227__$1;
(statearr_42241_42261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (10))){
var inst_42219 = (state_42227[(2)]);
var state_42227__$1 = state_42227;
var statearr_42242_42262 = state_42227__$1;
(statearr_42242_42262[(2)] = inst_42219);

(statearr_42242_42262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42228 === (8))){
var inst_42204 = (state_42227[(7)]);
var tmp42239 = inst_42204;
var inst_42204__$1 = tmp42239;
var state_42227__$1 = (function (){var statearr_42243 = state_42227;
(statearr_42243[(7)] = inst_42204__$1);

return statearr_42243;
})();
var statearr_42244_42263 = state_42227__$1;
(statearr_42244_42263[(2)] = null);

(statearr_42244_42263[(1)] = (2));


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
});})(c__33677__auto___42253,out))
;
return ((function (switch__33615__auto__,c__33677__auto___42253,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_42248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42248[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_42248[(1)] = (1));

return statearr_42248;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_42227){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_42227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e42249){if((e42249 instanceof Object)){
var ex__33619__auto__ = e42249;
var statearr_42250_42264 = state_42227;
(statearr_42250_42264[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42265 = state_42227;
state_42227 = G__42265;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_42227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_42227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___42253,out))
})();
var state__33679__auto__ = (function (){var statearr_42251 = f__33678__auto__.call(null);
(statearr_42251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___42253);

return statearr_42251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___42253,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__42267 = arguments.length;
switch (G__42267) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___42336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___42336,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___42336,out){
return (function (state_42305){
var state_val_42306 = (state_42305[(1)]);
if((state_val_42306 === (7))){
var inst_42301 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
var statearr_42307_42337 = state_42305__$1;
(statearr_42307_42337[(2)] = inst_42301);

(statearr_42307_42337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (1))){
var inst_42268 = (new Array(n));
var inst_42269 = inst_42268;
var inst_42270 = (0);
var state_42305__$1 = (function (){var statearr_42308 = state_42305;
(statearr_42308[(7)] = inst_42269);

(statearr_42308[(8)] = inst_42270);

return statearr_42308;
})();
var statearr_42309_42338 = state_42305__$1;
(statearr_42309_42338[(2)] = null);

(statearr_42309_42338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (4))){
var inst_42273 = (state_42305[(9)]);
var inst_42273__$1 = (state_42305[(2)]);
var inst_42274 = (inst_42273__$1 == null);
var inst_42275 = cljs.core.not.call(null,inst_42274);
var state_42305__$1 = (function (){var statearr_42310 = state_42305;
(statearr_42310[(9)] = inst_42273__$1);

return statearr_42310;
})();
if(inst_42275){
var statearr_42311_42339 = state_42305__$1;
(statearr_42311_42339[(1)] = (5));

} else {
var statearr_42312_42340 = state_42305__$1;
(statearr_42312_42340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (15))){
var inst_42295 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
var statearr_42313_42341 = state_42305__$1;
(statearr_42313_42341[(2)] = inst_42295);

(statearr_42313_42341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (13))){
var state_42305__$1 = state_42305;
var statearr_42314_42342 = state_42305__$1;
(statearr_42314_42342[(2)] = null);

(statearr_42314_42342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (6))){
var inst_42270 = (state_42305[(8)]);
var inst_42291 = (inst_42270 > (0));
var state_42305__$1 = state_42305;
if(cljs.core.truth_(inst_42291)){
var statearr_42315_42343 = state_42305__$1;
(statearr_42315_42343[(1)] = (12));

} else {
var statearr_42316_42344 = state_42305__$1;
(statearr_42316_42344[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (3))){
var inst_42303 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42305__$1,inst_42303);
} else {
if((state_val_42306 === (12))){
var inst_42269 = (state_42305[(7)]);
var inst_42293 = cljs.core.vec.call(null,inst_42269);
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42305__$1,(15),out,inst_42293);
} else {
if((state_val_42306 === (2))){
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42305__$1,(4),ch);
} else {
if((state_val_42306 === (11))){
var inst_42285 = (state_42305[(2)]);
var inst_42286 = (new Array(n));
var inst_42269 = inst_42286;
var inst_42270 = (0);
var state_42305__$1 = (function (){var statearr_42317 = state_42305;
(statearr_42317[(7)] = inst_42269);

(statearr_42317[(8)] = inst_42270);

(statearr_42317[(10)] = inst_42285);

return statearr_42317;
})();
var statearr_42318_42345 = state_42305__$1;
(statearr_42318_42345[(2)] = null);

(statearr_42318_42345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (9))){
var inst_42269 = (state_42305[(7)]);
var inst_42283 = cljs.core.vec.call(null,inst_42269);
var state_42305__$1 = state_42305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42305__$1,(11),out,inst_42283);
} else {
if((state_val_42306 === (5))){
var inst_42278 = (state_42305[(11)]);
var inst_42269 = (state_42305[(7)]);
var inst_42270 = (state_42305[(8)]);
var inst_42273 = (state_42305[(9)]);
var inst_42277 = (inst_42269[inst_42270] = inst_42273);
var inst_42278__$1 = (inst_42270 + (1));
var inst_42279 = (inst_42278__$1 < n);
var state_42305__$1 = (function (){var statearr_42319 = state_42305;
(statearr_42319[(11)] = inst_42278__$1);

(statearr_42319[(12)] = inst_42277);

return statearr_42319;
})();
if(cljs.core.truth_(inst_42279)){
var statearr_42320_42346 = state_42305__$1;
(statearr_42320_42346[(1)] = (8));

} else {
var statearr_42321_42347 = state_42305__$1;
(statearr_42321_42347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (14))){
var inst_42298 = (state_42305[(2)]);
var inst_42299 = cljs.core.async.close_BANG_.call(null,out);
var state_42305__$1 = (function (){var statearr_42323 = state_42305;
(statearr_42323[(13)] = inst_42298);

return statearr_42323;
})();
var statearr_42324_42348 = state_42305__$1;
(statearr_42324_42348[(2)] = inst_42299);

(statearr_42324_42348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (10))){
var inst_42289 = (state_42305[(2)]);
var state_42305__$1 = state_42305;
var statearr_42325_42349 = state_42305__$1;
(statearr_42325_42349[(2)] = inst_42289);

(statearr_42325_42349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42306 === (8))){
var inst_42278 = (state_42305[(11)]);
var inst_42269 = (state_42305[(7)]);
var tmp42322 = inst_42269;
var inst_42269__$1 = tmp42322;
var inst_42270 = inst_42278;
var state_42305__$1 = (function (){var statearr_42326 = state_42305;
(statearr_42326[(7)] = inst_42269__$1);

(statearr_42326[(8)] = inst_42270);

return statearr_42326;
})();
var statearr_42327_42350 = state_42305__$1;
(statearr_42327_42350[(2)] = null);

(statearr_42327_42350[(1)] = (2));


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
});})(c__33677__auto___42336,out))
;
return ((function (switch__33615__auto__,c__33677__auto___42336,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_42331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42331[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_42331[(1)] = (1));

return statearr_42331;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_42305){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_42305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e42332){if((e42332 instanceof Object)){
var ex__33619__auto__ = e42332;
var statearr_42333_42351 = state_42305;
(statearr_42333_42351[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42352 = state_42305;
state_42305 = G__42352;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_42305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_42305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___42336,out))
})();
var state__33679__auto__ = (function (){var statearr_42334 = f__33678__auto__.call(null);
(statearr_42334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___42336);

return statearr_42334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___42336,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__42354 = arguments.length;
switch (G__42354) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33677__auto___42427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33677__auto___42427,out){
return (function (){
var f__33678__auto__ = (function (){var switch__33615__auto__ = ((function (c__33677__auto___42427,out){
return (function (state_42396){
var state_val_42397 = (state_42396[(1)]);
if((state_val_42397 === (7))){
var inst_42392 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42398_42428 = state_42396__$1;
(statearr_42398_42428[(2)] = inst_42392);

(statearr_42398_42428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (1))){
var inst_42355 = [];
var inst_42356 = inst_42355;
var inst_42357 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42396__$1 = (function (){var statearr_42399 = state_42396;
(statearr_42399[(7)] = inst_42357);

(statearr_42399[(8)] = inst_42356);

return statearr_42399;
})();
var statearr_42400_42429 = state_42396__$1;
(statearr_42400_42429[(2)] = null);

(statearr_42400_42429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (4))){
var inst_42360 = (state_42396[(9)]);
var inst_42360__$1 = (state_42396[(2)]);
var inst_42361 = (inst_42360__$1 == null);
var inst_42362 = cljs.core.not.call(null,inst_42361);
var state_42396__$1 = (function (){var statearr_42401 = state_42396;
(statearr_42401[(9)] = inst_42360__$1);

return statearr_42401;
})();
if(inst_42362){
var statearr_42402_42430 = state_42396__$1;
(statearr_42402_42430[(1)] = (5));

} else {
var statearr_42403_42431 = state_42396__$1;
(statearr_42403_42431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (15))){
var inst_42386 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42404_42432 = state_42396__$1;
(statearr_42404_42432[(2)] = inst_42386);

(statearr_42404_42432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (13))){
var state_42396__$1 = state_42396;
var statearr_42405_42433 = state_42396__$1;
(statearr_42405_42433[(2)] = null);

(statearr_42405_42433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (6))){
var inst_42356 = (state_42396[(8)]);
var inst_42381 = inst_42356.length;
var inst_42382 = (inst_42381 > (0));
var state_42396__$1 = state_42396;
if(cljs.core.truth_(inst_42382)){
var statearr_42406_42434 = state_42396__$1;
(statearr_42406_42434[(1)] = (12));

} else {
var statearr_42407_42435 = state_42396__$1;
(statearr_42407_42435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (3))){
var inst_42394 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42396__$1,inst_42394);
} else {
if((state_val_42397 === (12))){
var inst_42356 = (state_42396[(8)]);
var inst_42384 = cljs.core.vec.call(null,inst_42356);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42396__$1,(15),out,inst_42384);
} else {
if((state_val_42397 === (2))){
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42396__$1,(4),ch);
} else {
if((state_val_42397 === (11))){
var inst_42364 = (state_42396[(10)]);
var inst_42360 = (state_42396[(9)]);
var inst_42374 = (state_42396[(2)]);
var inst_42375 = [];
var inst_42376 = inst_42375.push(inst_42360);
var inst_42356 = inst_42375;
var inst_42357 = inst_42364;
var state_42396__$1 = (function (){var statearr_42408 = state_42396;
(statearr_42408[(11)] = inst_42376);

(statearr_42408[(7)] = inst_42357);

(statearr_42408[(12)] = inst_42374);

(statearr_42408[(8)] = inst_42356);

return statearr_42408;
})();
var statearr_42409_42436 = state_42396__$1;
(statearr_42409_42436[(2)] = null);

(statearr_42409_42436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (9))){
var inst_42356 = (state_42396[(8)]);
var inst_42372 = cljs.core.vec.call(null,inst_42356);
var state_42396__$1 = state_42396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42396__$1,(11),out,inst_42372);
} else {
if((state_val_42397 === (5))){
var inst_42364 = (state_42396[(10)]);
var inst_42360 = (state_42396[(9)]);
var inst_42357 = (state_42396[(7)]);
var inst_42364__$1 = f.call(null,inst_42360);
var inst_42365 = cljs.core._EQ_.call(null,inst_42364__$1,inst_42357);
var inst_42366 = cljs.core.keyword_identical_QMARK_.call(null,inst_42357,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42367 = (inst_42365) || (inst_42366);
var state_42396__$1 = (function (){var statearr_42410 = state_42396;
(statearr_42410[(10)] = inst_42364__$1);

return statearr_42410;
})();
if(cljs.core.truth_(inst_42367)){
var statearr_42411_42437 = state_42396__$1;
(statearr_42411_42437[(1)] = (8));

} else {
var statearr_42412_42438 = state_42396__$1;
(statearr_42412_42438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (14))){
var inst_42389 = (state_42396[(2)]);
var inst_42390 = cljs.core.async.close_BANG_.call(null,out);
var state_42396__$1 = (function (){var statearr_42414 = state_42396;
(statearr_42414[(13)] = inst_42389);

return statearr_42414;
})();
var statearr_42415_42439 = state_42396__$1;
(statearr_42415_42439[(2)] = inst_42390);

(statearr_42415_42439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (10))){
var inst_42379 = (state_42396[(2)]);
var state_42396__$1 = state_42396;
var statearr_42416_42440 = state_42396__$1;
(statearr_42416_42440[(2)] = inst_42379);

(statearr_42416_42440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42397 === (8))){
var inst_42364 = (state_42396[(10)]);
var inst_42360 = (state_42396[(9)]);
var inst_42356 = (state_42396[(8)]);
var inst_42369 = inst_42356.push(inst_42360);
var tmp42413 = inst_42356;
var inst_42356__$1 = tmp42413;
var inst_42357 = inst_42364;
var state_42396__$1 = (function (){var statearr_42417 = state_42396;
(statearr_42417[(7)] = inst_42357);

(statearr_42417[(14)] = inst_42369);

(statearr_42417[(8)] = inst_42356__$1);

return statearr_42417;
})();
var statearr_42418_42441 = state_42396__$1;
(statearr_42418_42441[(2)] = null);

(statearr_42418_42441[(1)] = (2));


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
});})(c__33677__auto___42427,out))
;
return ((function (switch__33615__auto__,c__33677__auto___42427,out){
return (function() {
var cljs$core$async$state_machine__33616__auto__ = null;
var cljs$core$async$state_machine__33616__auto____0 = (function (){
var statearr_42422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42422[(0)] = cljs$core$async$state_machine__33616__auto__);

(statearr_42422[(1)] = (1));

return statearr_42422;
});
var cljs$core$async$state_machine__33616__auto____1 = (function (state_42396){
while(true){
var ret_value__33617__auto__ = (function (){try{while(true){
var result__33618__auto__ = switch__33615__auto__.call(null,state_42396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33618__auto__;
}
break;
}
}catch (e42423){if((e42423 instanceof Object)){
var ex__33619__auto__ = e42423;
var statearr_42424_42442 = state_42396;
(statearr_42424_42442[(5)] = ex__33619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42443 = state_42396;
state_42396 = G__42443;
continue;
} else {
return ret_value__33617__auto__;
}
break;
}
});
cljs$core$async$state_machine__33616__auto__ = function(state_42396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33616__auto____1.call(this,state_42396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33616__auto____0;
cljs$core$async$state_machine__33616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33616__auto____1;
return cljs$core$async$state_machine__33616__auto__;
})()
;})(switch__33615__auto__,c__33677__auto___42427,out))
})();
var state__33679__auto__ = (function (){var statearr_42425 = f__33678__auto__.call(null);
(statearr_42425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33677__auto___42427);

return statearr_42425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33679__auto__);
});})(c__33677__auto___42427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map