(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"09ef":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("d77a")),s=n(i("b5c7"));function n(t){return t&&t.__esModule?t:{default:t}}var r={mixins:[s.default],components:{list_menu:e.default},data:function(){return{auto:!1,title:"Hello",list_img:[{img:"/static/img/banner1.jpg",url:"/pages/home/article_view"},{img:"/static/img/banner2.jpg",url:"/pages/home/article_view"},{img:"/static/img/banner3.jpg",url:"/pages/home/article_view"},{img:"/static/img/banner4.jpg",url:"/pages/home/article_view"}],list_text:[{title:"这是一条公告，轮播公告",url:"/pages/home/bulletin_view"},{title:"这是一条公告，轮播公告",url:"/pages/home/bulletin_view"}]}}};a.default=r},2647:function(t,a,i){var e=i("fa2c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("2df6b7d6",e,!0,{sourceMap:!1,shadowMode:!1})},"281d":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"page_home",attrs:{id:"home_index"}},[i("mm_bodyer",[i("mm_warp",[i("mm_grid",{staticClass:"space-x",attrs:{col:"1"}},[i("mm_col",{staticClass:"pn-b"},[i("mm_swiper_img",{attrs:{list:t.list_img}})],1),i("mm_col",{staticClass:"pn-tb"},[i("mm_block",[i("list_menu")],1)],1),i("mm_col",{staticClass:"pn-t"},[i("mm_block",{staticClass:"lr"},[i("mm_side",{staticClass:"hot_icon"},[i("mm_div",{staticClass:"font_default",attrs:{url:"./bulletin_list"}},[i("v-uni-text",{staticClass:"fa fa-bullhorn"})],1)],1),i("mm_main",{staticClass:"pn"},[i("mm_swiper_text",{attrs:{list:t.list_text}})],1)],1)],1),i("mm_col",[i("v-uni-view",{staticClass:"banner"},[i("v-uni-view",{staticClass:"banner_title"},[t._v("务实进取 诚信共赢")]),i("v-uni-navigator",{attrs:{url:"../demo/index","hover-class":"navigator-hover"}},[i("v-uni-image",{staticClass:"banner_image",attrs:{src:"/static/img/ad.jpg"}})],1)],1)],1),i("mm_col",{attrs:{id:"dbd_list"}},[i("mm_block",{staticClass:"dbd"},[i("mm_head",{staticClass:"lr"},[i("mm_item",{staticClass:"font_small",attrs:{url:"/pages/calculation/dbd_view"}},[i("mm_div",{staticClass:"arrow"},[i("mm_title",[t._v("为您推荐")]),i("mm_desc",[t._v("DBD说明")])],1)],1)],1),i("mm_body",{staticClass:"lr"},[i("mm_list",{staticClass:"dbd_item",attrs:{col:"1"}},[i("mm_item",{staticClass:"big",attrs:{url:"/pages/calculation/dbd_view"}},[i("mm_side",[i("mm_icon",{attrs:{src:"http://img.sccnn.com/bimg/334/0957.jpg"}})],1),i("mm_main",{staticClass:"introduce"},[i("mm_title",[t._v("DBD礼包")]),i("mm_desc",[i("v-uni-text",{staticClass:"price"},[t._v("298.00")])],1),i("mm_desc",[t._v("有效天数：365")])],1)],1)],1)],1)],1)],1),i("mm_col",[i("mm_div",{staticClass:"footer_info"},[i("v-uni-navigator",{staticClass:"footer_link",attrs:{url:"../home/article_view?title=关于我们"}},[t._v("比特中心")]),i("v-uni-text",{staticClass:"copyright"},[t._v("Copyright © 2019-2022 weui.io")])],1)],1)],1)],1)],1)],1)},s=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return s})},"482e":function(t,a,i){var e=i("f2ff");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("165ca2c2",e,!0,{sourceMap:!1,shadowMode:!1})},"4dbf":function(t,a,i){"use strict";i.r(a);var e=i("09ef"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=s.a},"5d3e":function(t,a,i){"use strict";i.r(a);var e=i("e3d3"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,function(){return e[t]})}(n);a["default"]=s.a},"98b3":function(t,a,i){"use strict";var e=i("2647"),s=i.n(e);s.a},b99a:function(t,a,i){"use strict";var e=i("482e"),s=i.n(e);s.a},c36b:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("mm_list",{staticClass:"menu"},[i("v-uni-navigator",{staticClass:"menu_item",attrs:{url:"/pages/home/article_view?title=关于我们"}},[i("v-uni-view",{staticClass:"menu_icon",staticStyle:{"background-image":"linear-gradient(135deg, rgb(252, 207, 49) 10%, rgb(245, 85, 85) 100%)"}},[i("v-uni-text",{staticClass:"fa fa-user-circle-o"})],1),i("v-uni-text",{staticClass:"menu_title"},[t._v("关于我们")])],1),i("v-uni-navigator",{staticClass:"menu_item",attrs:{url:"/pages/calculation/dbd_view"}},[i("v-uni-view",{staticClass:"menu_icon",staticStyle:{"background-image":"linear-gradient(135deg, #FFF720 10%, #3CD500 100%)"}},[i("v-uni-text",{staticClass:"fa fa-cloud"})],1),i("v-uni-text",{staticClass:"menu_title"},[t._v("DBD介绍")])],1),i("v-uni-navigator",{staticClass:"menu_item",attrs:{url:"/pages/home/news_list"}},[i("v-uni-view",{staticClass:"menu_icon",staticStyle:{"background-image":"linear-gradient(135deg, #5EFCE8 10%, #736EFE 100%)"}},[i("v-uni-text",{staticClass:"fa fa-send"})],1),i("v-uni-text",{staticClass:"menu_title"},[t._v("新闻动态")])],1),i("v-uni-navigator",{staticClass:"menu_item",attrs:{url:"/pages/home/question_list"}},[i("v-uni-view",{staticClass:"menu_icon",staticStyle:{"background-image":"linear-gradient(135deg, #EE9AE5 10%, #5961F9 100%)"}},[i("v-uni-text",{staticClass:"fa fa-question-circle"})],1),i("v-uni-text",{staticClass:"menu_title"},[t._v("常见问题")])],1)],1)},s=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return s})},d5ca:function(t,a,i){"use strict";i.r(a);var e=i("281d"),s=i("4dbf");for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);i("b99a");var r=i("2877"),l=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,"46513476",null);a["default"]=l.exports},d77a:function(t,a,i){"use strict";i.r(a);var e=i("c36b"),s=i("5d3e");for(var n in s)"default"!==n&&function(t){i.d(a,t,function(){return s[t]})}(n);i("98b3");var r=i("2877"),l=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,"70d177b2",null);a["default"]=l.exports},e3d3:function(t,a,i){},f2ff:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,'.banner[data-v-46513476]{text-align:center}.banner_title[data-v-46513476]{padding:.5rem 0;background:#fff}.banner_image[data-v-46513476]{width:100%;height:8.75rem}.copyright[data-v-46513476]{color:rgba(0,0,0,.3);font-size:.625rem}.footer[data-v-46513476]{text-align:center;padding:1.5rem}.footer_link[data-v-46513476]{color:#576b95;font-size:85%}.hot_icon[data-v-46513476]{padding-top:0;padding-bottom:0;height:2.5rem;line-height:2.5rem;position:relative}.hot_icon[data-v-46513476]:after{display:block;content:"";position:absolute;height:60%;top:20%;bottom:0;right:0;border-right:1px solid rgba(0,0,0,.1)}.footer_info[data-v-46513476]{padding:1rem 0;margin-bottom:.5rem;text-align:center}.dbd .mm_head .mm_title[data-v-46513476]{color:#333}',""])},fa2c:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".menu[data-v-70d177b2]{text-align:center;padding:.75rem;overflow:hidden}.menu_item[data-v-70d177b2]{float:left;padding-top:.5rem;width:25%}.menu_icon[data-v-70d177b2]{font-size:1.4rem;width:3rem;height:3rem;line-height:3rem;-webkit-border-radius:.5rem;border-radius:.5rem;color:#fff;margin:0 auto}.menu_title[data-v-70d177b2]{color:#333;font-size:85%}",""])}}]);