(function(t){function e(e){for(var n,r,c=e[0],o=e[1],h=e[2],l=0,d=[];l<c.length;l++)r=c[l],a[r]&&d.push(a[r][0]),a[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var h=0;h<c.length;h++)e(c[h]);var u=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"022e":function(t,e,i){"use strict";var n=i("1a84"),a=i.n(n);a.a},"1a84":function(t,e,i){},2856:function(t,e,i){},"30b3":function(t,e,i){t.exports=i.p+"img/background.48c32cd0.png"},"3f35":function(t,e,i){"use strict";var n=i("8e0b"),a=i.n(n);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},s=[],r=(i("5c0b"),i("2877")),c={},o=Object(r["a"])(c,a,s,!1,null,null,null);o.options.__file="App.vue";var h=o.exports,u=i("8c4f"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},t._l(t.$store.state.items,function(e,n){return i("div",{key:n},[t._m(0,!0),i("p",[t._v(t._s(e.hadeeth))]),i("router-link",{attrs:{to:"show/"+n}},[t._v("show")])],1)}))},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("b",[t._v("قال رسول الله صلى الله عليه و سلم")])])}],f={name:"home",data:function(){return{}}},p=f,g=(i("cccb"),Object(r["a"])(p,l,d,!1,null,null,null));g.options.__file="Home.vue";var v=g.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"progress",attrs:{width:t.width,height:t.height,viewBox:t.viewBox}},[i("CounterDefs",{attrs:{path:t.path,x:t.cx,y:t.cy,radius:t.RADIUS}}),i("rect",{attrs:{fill:"url(#background)",width:t.width,height:t.height}}),i("g",{attrs:{"clip-path":"url(#clipPath)"}},[i("rect",{attrs:{fill:"#fff",width:t.width,height:t.height}}),i("rect",{attrs:{fill:"url(#forground)",width:t.width,height:t.height}})]),t._l(Array.from(Array(100),function(t,e){return e}),function(e){return i("transition",{key:e,attrs:{name:"fade","enter-active-class":"fadeInUp","leave-active-class":"fadeOutUp"}},[t.count==e?i("text",{staticClass:"progress__text animated",attrs:{x:"50%",y:"50%","alignment-baseline":"middle","text-anchor":"middle"}},[t._v(t._s(t.tasbeeh.text))]):t._e()])}),i("transition",{attrs:{name:"fadeIn","enter-active-class":"fadeIn"}},[t.count==t.tasbeeh.times?i("CompletedMessage",{staticClass:"animated",attrs:{radius:t.RADIUS,x:t.cx,y:t.cy}}):t._e()],1),i("MaskedButton",{attrs:{radius:t.RADIUS,x:t.cx,y:t.cy,position:"top",text:"عودة",action:t.back}}),i("MaskedButton",{attrs:{radius:t.RADIUS,x:t.cx,y:t.cy,position:"bottom",text:"أحسب",action:t.increase}}),i("text",{attrs:{id:"counterValue",x:"50%",y:(t.cy-t.RADIUS)/2,"text-anchor":"middle","alignment-baseline":"central"}},[t._v(t._s(t.count))]),i("circle",{staticClass:"progress__meter",attrs:{cx:t.cx,cy:t.cy,r:t.RADIUS,"stroke-width":t.strockWidth}}),i("circle",{staticClass:"progress__value",style:{strokeDashoffset:t.dashoffset,strokeDasharray:t.CIRCUMFERENCE},attrs:{cx:t.cx,cy:t.cy,r:t.RADIUS,"stroke-width":t.strockWidth}})],2)},m=[],w=(i("9ddc"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{class:[t.active?"active":"","button"],on:{mousedown:function(e){t.active=!0},mouseup:function(e){t.active=!1},touchstart:function(e){t.active=!0},touchend:function(e){t.active=!1},click:t.action}},[i("circle",{attrs:{r:t.radius-10,cx:t.x,cy:t.y,"clip-path":["top"==t.position?"url(#topButtonMask)":"url(#bottomButtonMask)"]}}),i("text",{attrs:{x:"50%",y:t.topPosition,"text-anchor":"middle","alignment-baseline":"central"}},[t._v(t._s(t.text))])])}),y=[],b={name:"MaskedButton",props:["radius","x","y","position","text","fill","action"],data:function(){return{active:!1}},computed:{topPosition:function(){var t=this.radius/4;return"top"==this.position?this.y-this.radius+t:this.y+this.radius-t}}},_=b,M=(i("022e"),Object(r["a"])(_,w,y,!1,null,null,null));M.options.__file="MaskedButton.vue";var k=M.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("defs",[n("clipPath",{attrs:{id:"clipPath"}},[n("path",{attrs:{d:t.path}})]),n("clipPath",{attrs:{id:"CompletedMessage"}},[n("rect",{attrs:{width:2*t.radius,height:t.radius,x:t.x-t.radius,y:t.y-t.radius/2}})]),n("clipPath",{attrs:{id:"topButtonMask"}},[n("rect",{attrs:{width:2*t.radius,height:t.radius/2,x:t.x-t.radius,y:t.y-t.radius}})]),n("clipPath",{attrs:{id:"bottomButtonMask"}},[n("rect",{attrs:{width:2*t.radius,height:t.radius/2,x:t.x-t.radius,y:t.y+t.radius/2}})]),n("pattern",{attrs:{id:"background",patternUnits:"userSpaceOnUse",width:"100",height:"200"}},[n("image",{attrs:{"xlink:href":i("30b3"),width:"100",height:"200",x:"0",y:"0"}})]),n("pattern",{attrs:{id:"forground",patternUnits:"userSpaceOnUse",width:"100",height:"200"}},[n("image",{attrs:{"xlink:href":i("9c6b"),width:"100",height:"200",x:"0",y:"0"}})])])},R=[],I={name:"CounterDefs",props:["radius","path","x","y"],data:function(){return{}}},S=I,U=Object(r["a"])(S,C,R,!1,null,null,null);U.options.__file="CounterDefs.vue";var E=U.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",{staticStyle:{"transform-origin":"50%"}},[i("circle",{attrs:{cx:t.x,cy:t.y,r:t.radius-10,fill:"#03a9f4","clip-path":"url(#CompletedMessage)"}}),i("text",{staticStyle:{fill:"white","font-size":"3rem"},attrs:{x:"50%",y:"50%","text-anchor":"middle","alignment-baseline":"central"}},[t._v("بارك الله فيك")])])},L=[],O={name:"CompletedMessage",props:["x","y","radius"],data:function(){return{}}},P=O,$=Object(r["a"])(P,D,L,!1,null,null,null);$.options.__file="CompletedMessage.vue";var j=$.exports,A={name:"Show",components:{MaskedButton:k,CounterDefs:E,CompletedMessage:j},data:function(){return{tasbeeh:this.$store.state.items[this.$route.params.id],CIRCUMFERENCE:null,RADIUS:null,width:null,height:null,cx:null,cy:null,viewBox:null,strockWidth:14,count:this.$store.state.items[this.$route.params.id].count,value:0}},computed:{dashoffset:function(){return this.CIRCUMFERENCE*(1-this.value/100)},angle:function(){return 360*this.value/100},path:function(){var t=this.radToDeg(Math.atan(this.cx/this.cy)),e="";if(this.angle<t)e="L".concat(this.cx+Math.tan(this.degToRad(this.angle))*this.cy," 0");else if(this.angle==t)e="L".concat(this.width," 0");else if(this.angle>t&&this.angle<=180){var i=this.cy-this.cx*Math.tan(this.degToRad(90-this.angle));e="L".concat(this.width," 0 L").concat(this.width," ").concat(i)}else if(this.angle>180-t&&this.angle<=180+t){var n=this.cx+this.cy*Math.tan(this.degToRad(180-this.angle));e="L".concat(this.width," 0 L").concat(this.width," ").concat(this.height," L").concat(n," ").concat(this.height)}else if(this.angle>180+t&&this.angle<360){var a=this.cy+this.cx*Math.tan(this.degToRad(270-this.angle));e="L".concat(this.width," 0 L").concat(this.width," ").concat(this.height," L0 ").concat(this.height," L0 ").concat(a)}else 360==this.angle&&(e="L".concat(this.width," 0 L").concat(this.width," ").concat(this.height," L0 ").concat(this.height," L0 0 L").concat(this.cx," 0"));return["M".concat(this.cx," ").concat(this.cy),"L".concat(this.cx," 0"),"".concat(e),"Z"].join(" ")}},watch:{count:function(){this.value=100*this.count/this.tasbeeh.times}},methods:{radToDeg:function(t){return 180*t/Math.PI},degToRad:function(t){return t*Math.PI/180},increase:function(){this.count<this.tasbeeh.times&&(this.count++,this.$store.commit("increase",{index:this.$route.params.id,count:this.count}))},back:function(){this.$router.push({name:"home"})}},beforeMount:function(){var t=this;this.width=window.innerWidth>300?window.innerWidth:300,this.height=window.innerHeight,this.viewBox="0 0 ".concat(this.width," ").concat(this.height),this.cx=this.width/2,this.cy=this.height/2,this.RADIUS=this.cx<this.cy?this.cx-50:this.cy-50,this.CIRCUMFERENCE=2*Math.PI*this.RADIUS,window.addEventListener("resize",function(e){t.width=e.target.innerWidth>300?e.target.innerWidth:300,console.log(t.width),t.height=e.target.innerHeight,t.viewBox="0 0 ".concat(t.width," ").concat(t.height),t.cx=t.width/2,t.cy=t.height/2,t.RADIUS=t.cx<t.cy?t.cx-50:t.cy-50,t.CIRCUMFERENCE=2*Math.PI*t.RADIUS,t.$forceUpdate()})},mounted:function(){this.value=100*this.count/this.tasbeeh.times}},B=A,W=(i("3f35"),Object(r["a"])(B,x,m,!1,null,null,null));W.options.__file="Show.vue";var T=W.exports;n["a"].use(u["a"]);var F=new u["a"]({routes:[{path:"/",name:"home",component:v},{path:"/show/:id",name:"show",component:T}]}),N=i("2f62");n["a"].use(N["a"]);var H=new N["a"].Store({state:{width:null,height:null,items:[{hadeeth:"من قال حين يصبح وحين يمسي سبحان الله وبحمده مائة مرة غفرت خطاياه وإن كانت مثل زبد البحر",text:"سبحان الله وبحمده",times:100,count:0}]},mutations:{resize:function(t,e){var i=e.innerWidth,n=e.innerHeight;t.width=i,t.height=n},increase:function(t,e){var i=e.index,n=e.count;t.items[i].count=n}},actions:{}});if(n["a"].config.productionTip=!1,"serviceWorker"in navigator)try{navigator.serviceWorker.register("./serviceWorker.js")}catch(t){console.log(t)}new n["a"]({router:F,store:H,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("2856"),a=i.n(n);a.a},"8e0b":function(t,e,i){},"8f59":function(t,e,i){},"9c6b":function(t,e,i){t.exports=i.p+"img/forground.e413c2da.png"},cccb:function(t,e,i){"use strict";var n=i("8f59"),a=i.n(n);a.a}});
//# sourceMappingURL=app.c388543b.js.map