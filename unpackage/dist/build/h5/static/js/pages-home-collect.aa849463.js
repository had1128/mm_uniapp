(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-collect"],{"271c":function(t,e,a){"use strict";a.r(e);var s=a("b6b0"),i=a("5cbe");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);var n=a("2877"),l=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"c4521cf6",null);e["default"]=l.exports},"5cbe":function(t,e,a){"use strict";a.r(e);var s=a("aa9f"),i=a.n(s);for(var c in s)"default"!==c&&function(t){a.d(e,t,function(){return s[t]})}(c);e["default"]=i.a},aa9f:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("b5c7"));function i(t){return t&&t.__esModule?t:{default:t}}var c={mixins:[s.default],components:{},data:function(){return{oauth:!1,list:[{title:"这是一文章",desc:"测试",icon:"/static/img/banner3.jpg",createTime:"2019-06-21",url:"/pages/home/article_view?aid=3"},{title:"这是一文章",desc:"测试",icon:"/static/img/banner3.jpg",createTime:"2019-06-21",url:"/pages/home/article_view?aid=2"},{title:"这是一文章",desc:"测试",icon:"/static/img/banner3.jpg",createTime:"2019-06-21",url:"/pages/home/article_view?aid=1"}],list_news:[]}}};e.default=c},b6b0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page_home",attrs:{id:"home_news_list"}},[a("mm_header",[a("mm_warp")],1),a("mm_bodyer",[a("mm_warp",[a("mm_grid",{staticClass:"space-x",attrs:{col:"1"}},[a("mm_col",[a("mm_block",[a("mm_head",{staticClass:"font_small"},[a("mm_title",[t._v("课程")])],1),a("mm_body",{staticClass:"lr"},[a("mm_list_article",{staticClass:"big",attrs:{list:t.list}})],1),a("mm_foot",{staticClass:"bt"},[a("mm_div",{staticClass:"center"},[a("mm_desc",[t._v("已收藏15篇")])],1)],1)],1)],1),t.list_news.length>0?a("mm_col",[a("mm_block",[a("mm_head",{staticClass:"font_small"},[a("mm_title",[t._v("新闻")])],1),a("mm_body",{staticClass:"rl"},[a("mm_list_news",{staticClass:"big",attrs:{list:t.list_news}})],1),a("mm_foot",{staticClass:"bt"},[a("mm_div",{staticClass:"center"},[a("mm_desc",[t._v("已收藏15篇")])],1)],1)],1)],1):t._e()],1)],1)],1)],1)},i=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})}}]);