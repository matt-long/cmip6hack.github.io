(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cmip6hack.github.io/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2b4b":function(t,e,a){"use strict";var n=a("8a7c"),s=a.n(n);s.a},"30db":function(t,e,a){"use strict";var n=a("a4c0"),s=a.n(n);s.a},4459:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"material-kit"}},[a("div",{class:{"nav-open":t.NavbarStore.showNavbar}},[a("router-view",{attrs:{name:"header"}}),a("div",[a("router-view")],1),a("router-view",{attrs:{name:"footer"}})],1)])},o=[],r=a("2877"),l={},c=Object(r["a"])(l,i,o,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("parallax",{staticClass:"section page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"},[a("h2",{staticClass:"title"},[t._v("\n            Dates: Oct. 16 - 18, 2019\n            "),a("br"),t._v("Venues: NCAR, Boulder, CO & "),a("br"),t._v("\n                          LDEO, Palisades, NY\n          ")]),a("h3",[t._v("Applications are now open!")]),a("md-button",{staticClass:"md-success md-lg md-round",attrs:{href:"",target:"https://forms.gle/CzHh9iedY1wxv9ye8"}},[a("md-icon",[t._v("how_to_reg")]),t._v("Register Here")],1)],1)])])]),a("div",{staticClass:"main main-raised"},[a("div",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"},[a("h2",{staticClass:"title text-center"},[t._v("Overview")]),t._m(0),a("h2",{staticClass:"title text-center"},[t._v("Sponsors")]),a("h5",{staticClass:"description"},[t._v("\n              NCAR CMIP6 Hackathon is made possible by the following sponsors:\n              "),a("br"),a("br"),a("img",{staticClass:"img-raised rounded img-fluid",attrs:{src:t.sponsorsImg,alt:"Sponsors",height:"500",width:"700"}})])])])])])])],1)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"description"},[t._v("\n              Centers around the world are currently running their state-of-the-art Earth system models (ESMs) to participate in the 6th phase of the Coupled Model Intercomparison Project (CMIP6), which supports the United Nations Environmental Program’s International Panel on Climate Change 6th Assessment (AR6). This event will explore new paradigms for community-driven analysis and will consist of the primary components: (1) tutorials on cutting-edge analysis tools, (2) peer-learning opportunities, and (3) open-ended project work in a highly collaborative environment.\n\n              "),a("br"),t._v("\n              The Hackathon will be held concurrently at two locations: the "),a("a",{attrs:{href:"https://goo.gl/maps/UMQ7fzxSGiKtrKEJ9"}},[t._v("NCAR Mesa Lab")]),t._v(", in Boulder CO, and the "),a("a",{attrs:{href:"https://goo.gl/maps/thqWXUsptr4zPCtZ6"}}),t._v(", in Palisades NY.\n              "),a("br"),t._v("\n\n              Limited funding is available to support travel and lodging, with preference given to early career scientists.\n\n            ")])}],f={bodyClass:"landing-page",props:{header:{type:String,default:a("c335")},sponsorsImg:{type:String,default:a("b351")}},data:function(){return{name:null,email:null,message:null}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.header,")")}}}},h=f,v=(a("2b4b"),Object(r["a"])(h,p,m,!1,null,"61720625",null)),g=v.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-transparent md-absolute",class:t.extraNavClasses,attrs:{id:"toolbar","md-elevation":"0","color-on-scroll":t.colorOnScroll}},[a("div",{staticClass:"md-toolbar-row md-collapse-lateral"},[a("div",{staticClass:"md-toolbar-section-start"},[a("h3",{staticClass:"md-title"},[t._v("NCAR CMIP6 Hackathon")])]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.toggledClass},on:{click:function(e){return t.toggleNavbarMobile()}}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-collapse-wrapper"},[a("mobile-menu",{attrs:{"nav-mobile-section-start":"false"}}),a("md-list",[a("md-list-item",{attrs:{href:"/#"}},[a("i",{staticClass:"material-icons"},[t._v("content_paste")]),a("p",[t._v("Curriculum")])]),a("md-list-item",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("people")]),a("p",[t._v("Lecturers")])]),a("md-list-item",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("work")]),a("p",[t._v("Hackathon Projects")])]),a("md-list-item",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("schedule")]),a("p",[t._v("Schedule & Materials")])]),a("li",{staticClass:"md-list-item"},[a("a",{staticClass:"md-list-item-router md-list-item-container md-button-clean dropdown",attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"md-list-item-content"},[a("drop-down",{attrs:{direction:"down"}},[a("md-button",{staticClass:"md-button md-button-link md-white md-simple dropdown-toggle",attrs:{slot:"title","data-toggle":"dropdown"},slot:"title"},[a("i",{staticClass:"material-icons"},[t._v("view_carousel")]),a("p",[t._v("More Information")])]),a("ul",{staticClass:"dropdown-menu dropdown-with-icons"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("view_day")]),a("p",[t._v("Registration")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("calendar_today")]),a("p",[t._v("Important Dates")])])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons"},[t._v("hotel")]),a("p",[t._v("Hotel Information")])])])])],1)],1)])])],1)],1)])],1)])])},y=[],C=(a("7f7f"),a("c5f6"),a("6762"),a("2fdb"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return"true"===t.navMobileSectionStart?a("md-list",{staticClass:"nav-mobile-menu nav-mobile-section-start"},[t._t("default")],2):t._e()}),_=[],w={name:"mobile-menu",props:{navMobileSectionStart:{type:String,default:"false"}}},x=w,P=Object(r["a"])(x,C,_,!1,null,null,null),S=P.exports;function k(t){n||(n=setTimeout(function(){n=null,t()},66))}var O={components:{MobileMenu:S},props:{type:{type:String,default:"white",validator:function(t){return["white","default","primary","danger","success","warning","info"].includes(t)}},colorOnScroll:{type:Number,default:0}},data:function(){return{extraNavClasses:"",toggledClass:!1}},computed:{showDownload:function(){var t=this,e=["login","landing","profile"];return e.every(function(e){return e!==t.$route.name})}},methods:{bodyClick:function(){var t=document.getElementById("bodyClick");if(null===t){var e=document.querySelector("body"),a=document.createElement("div");a.setAttribute("id","bodyClick"),e.appendChild(a);var n=document.getElementById("bodyClick");n.addEventListener("click",this.toggleNavbarMobile)}else t.remove()},toggleNavbarMobile:function(){this.NavbarStore.showNavbar=!this.NavbarStore.showNavbar,this.toggledClass=!this.toggledClass,this.bodyClick()},handleScroll:function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.getElementById("toolbar");this.currentScrollValue=t,this.colorOnScroll>0&&t>this.colorOnScroll?(this.extraNavClasses="md-".concat(this.type),e.classList.remove("md-transparent")):this.extraNavClasses&&(this.extraNavClasses="",e.classList.add("md-transparent"))},scrollListener:function(){k(this.handleScroll)},scrollToElement:function(){var t=document.getElementById("downloadSection");t&&t.scrollIntoView({block:"end",behavior:"smooth"})}},mounted:function(){document.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){document.removeEventListener("scroll",this.scrollListener)}},N=O,E=Object(r["a"])(N,b,y,!1,null,null,null),T=E.exports,j=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("footer",{staticClass:"footer",class:(t={},t["footer-"+e.type]=e.type,t),attrs:{"data-background-color":e.backgroundColor}},[n("div",{staticClass:"container"},[n("div",{staticClass:"copyright"},[e._v("\n      © "+e._s(e.year)+", made with "),n("md-icon",[e._v("favorite")]),e._v(" by\n      "),n("a",{attrs:{href:"https://github.com/cmip6hack",target:"_blank"}},[e._v("\n        Earth System Informatics Team\n      ")])],1)])])},$=[],M={props:{backgroundColor:String,type:String},data:function(){return{year:(new Date).getFullYear()}}},D=M,A=Object(r["a"])(D,j,$,!1,null,null,null),I=A.exports;s["default"].use(d["a"]);var B=new d["a"]({routes:[{path:"/",name:"index",components:{default:g,header:T,footer:I},props:{header:{colorOnScroll:400},footer:{backgroundColor:"black"}}}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}}}),L=a("43f9"),H=a.n(L),z=(a("51de"),a("60b6"),a("4459"),a("c7db")),R={install:function(t){t.directive("click-outside",z["directive"])}},U=R,Y={install:function(t){t.mixin({mounted:function(){var t=this.$options.bodyClass;t&&document.body.classList.add(t)},beforeDestroy:function(){var t=this.$options.bodyClass;t&&document.body.classList.remove(t)}})}},F=Y,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",[t._v(t._s(t.title))])])]),t._t("default")],2)},V=[],q={name:"drop-down",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},K=q,W=Object(r["a"])(K,J,V,!1,null,null,null),G=W.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t._t("default")],2)},X=[];function Z(t,e,a){var n;return function(){var s=this,i=arguments;clearTimeout(n),n=setTimeout(function(){n=null,a||t.apply(s,i)},e),a&&!n&&t.apply(s,i)}}var tt={name:"parallax",data:function(){return{styles:{},debounceTimeout:6}},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,a=Z(function(){return e.handleScroll(t)},this.debounceTimeout);a()}},mounted:function(){var t=this;window.addEventListener("scroll",function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}})}},et=tt,at=Object(r["a"])(et,Q,X,!1,null,null,null),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:t.paginationClass},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:a("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:a("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},it=[],ot={name:"pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},data:function(){return{defaultPagesToDisplay:5}},methods:{range:function(t,e){for(var a=[],n=t;n<=e;n++)a.push(n);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}}},rt=ot,lt=Object(r["a"])(rt,st,it,!1,null,null,null),ct=(lt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),ut=[],dt=a("cebc"),pt=a("e9fa"),mt=a.n(pt),ft={name:"slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},methods:{createSlider:function(){var t=this;mt.a.create(this.$el,Object(dt["a"])({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",function(){var a=e.get();a!==t.value&&t.$emit("input",a)})}},mounted:function(){this.createSlider()},watch:{value:function(t,e){var a=this.$el.noUiSlider,n=a.get();t!==e&&n!==t&&(Array.isArray(n)&&Array.isArray(t)?e.length===t.length&&e.every(function(e,a){return e===t[a]})&&a.set(t):a.set(t))}}},ht=ft,vt=Object(r["a"])(ht,ct,ut,!1,null,null,null),gt=(vt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)}),bt=[],yt={name:"badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}},Ct=yt,_t=Object(r["a"])(Ct,gt,bt,!1,null,null,null),wt=(_t.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[a("md-card-content",[t._t("content")],2)],1)}),xt=[],Pt={name:"nav-tabs-card",props:{noLabel:Boolean,tabsPlain:Boolean}},St=Pt,kt=Object(r["a"])(St,wt,xt,!1,null,null,null),Ot=(kt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[a("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),a("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),a("md-card-content",[t._t("description"),t._t("inputs")],2),a("md-card-actions",[t._t("footer")],2)],1)}),Nt=[],Et={name:"login-card",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},Tt=Et,jt=Object(r["a"])(Tt,Ot,Nt,!1,null,null,null),$t=(jt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[a("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),a("md-card-content",[a("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,function(e,n){var s;return a("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[n])},(s={},s[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[n]),s)],on:{click:function(e){return t.switchPanel(t.tabName[n])}}},[t._v("\n        "+t._s(t.tabName[n])+"\n        "),t.navPillsIcons?a("md-icon",[t._v(t._s(t.tabIcon[n]))]):t._e()],1)}),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"tab-content"},t._l(t.tabName,function(e,n){return t.isActivePanel(t.tabName[n])?a("div",{key:e,class:t.getTabContent(n+1)},[t._t(t.getTabContent(n+1),[t._v("\n            This is the default text!\n          ")])],2):t._e()}),0)])],1)],1)}),Mt=[],Dt={props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}},At=Dt,It=Object(r["a"])(At,$t,Mt,!1,null,null,null),Bt=(It.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body text-center"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),Lt=[],Ht={name:"modal",methods:{closeModal:function(){this.$emit("close")}}},zt=Ht,Rt=(a("30db"),Object(r["a"])(zt,Bt,Lt,!1,null,null,null)),Ut=(Rt.exports,a("e37d")),Yt={install:function(t){t.component("drop-down",G),t.component(nt.name,nt),t.component("v-popover",Ut["a"])}},Ft=Yt,Jt=a("283e"),Vt=a.n(Jt),qt=a("0a63"),Kt=a.n(qt),Wt={install:function(t){t.use(H.a),t.use(U),t.use(F),t.use(Ft),t.use(Kt.a),t.use(Vt.a,{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}};s["default"].config.productionTip=!1,s["default"].use(Wt);var Gt={showNavbar:!1};s["default"].mixin({data:function(){return{NavbarStore:Gt}}}),new s["default"]({router:B,render:function(t){return t(u)}}).$mount("#app")},"60b6":function(t,e,a){},"8a7c":function(t,e,a){},a4c0:function(t,e,a){},b351:function(t,e,a){t.exports=a.p+"img/sponsors.9f3e58a3.png"},c335:function(t,e,a){t.exports=a.p+"img/flow-dynamics.148d7f2a.png"}});
//# sourceMappingURL=app.78e0df33.js.map