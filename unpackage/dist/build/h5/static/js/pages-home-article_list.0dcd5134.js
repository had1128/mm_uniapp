(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-article_list"],{1954:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(i("b5c7"));function r(t){return t&&t.__esModule?t:{default:t}}var n={mixins:[a.default],components:{},data:function(){return{oauth:!1,url:"~/paper/all",query:{cid:""},list_img:[{img:"/static/img/banner1.jpg",url:"/pages/home/article_view?aid=1"},{img:"/static/img/banner2.jpg",url:"/pages/home/article_view?aid=2"},{img:"/static/img/banner3.jpg",url:"/pages/home/article_view?aid=3"},{img:"/static/img/banner4.jpg",url:"/pages/home/article_view?aid=4"}],list:[{title:"这是一文章",desc:"测试",icon:"/static/img/banner3.jpg",url:"/pages/home/article_view?aid=3"},{title:"这是一文章",desc:"测试",icon:"/static/img/banner2.jpg",url:"/pages/home/article_view?aid=2"},{title:"这是一文章",desc:"测试",icon:"/static/img/banner1.jpg",url:"/pages/home/article_view?aid=1"}]}},methods:{get_list_before:function(t){var e=this.$obj.copy(t);return e.index=t.page-1+"",delete e.page,e}}};e.default=n},2467:function(t,e,i){"use strict";i.r(e);var a=i("1954"),r=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=r.a},b038:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("mm_page",{staticClass:"page_home",attrs:{id:"home_article_list"}},[i("mm_warp",[i("mm_grid",{staticClass:"space-x",attrs:{col:"1"}},[i("mm_col",[i("mm_block",[i("mm_body",[i("mm_swiper_img",{attrs:{list:t.list_img}})],1)],1)],1),i("mm_col",[i("mm_block",[i("mm_body",{staticClass:"lr"},[i("mm_list_article",{staticClass:"big",attrs:{list:t.list,id:"mm_list_article"}})],1)],1)],1)],1)],1)],1)},r=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return r})},f3a5:function(t,e,i){"use strict";i.r(e);var a=i("b038"),r=i("2467");for(var n in r)"default"!==n&&function(t){i.d(e,t,function(){return r[t]})}(n);var s=i("2877"),l=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"87f11652",null);e["default"]=l.exports}}]);