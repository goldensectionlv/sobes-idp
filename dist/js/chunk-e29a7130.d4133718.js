(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e29a7130"],{"2d29":function(t,e,a){},"510e":function(t,e,a){"use strict";a("eb14")},"58df":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"fade"}},[t.animation?a("div",{staticClass:"nested_wrapper"},t._l(t.current_page_arr,(function(e){return a("product_card",{key:e.id,staticClass:"nested_wrapper__product_card",attrs:{product:e,action:t.add_to_cart,cart_ids:t.cart_ids}})})),1):t._e()]),0!==t.product_list.length?a("pagination",{staticStyle:{display:"flex","align-items":"center"},attrs:{items_array:t.product_list,"page-count":t.pageCount,"page-number":t.pageNumber,action:t.paginatedData}}):t._e()],1)},n=[],i=a("1da1"),c=a("5530"),o=(a("96cf"),a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zoom"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper__buttons_area"},[a("ratings",{attrs:{rating:t.product.rating}}),a("div",{on:{mouseenter:function(e){t.card_hover=!0},mouseleave:function(e){t.card_hover=!1},click:function(e){return t.action(t.product)}}},[a("app_icon",{attrs:{basket:!0,is_btn:!0,zoom:!0,width:"12px",height:"13px",color:t.card_hover||t.cart_ids.includes(t.product.id)?"black":"grey"}})],1)],1),a("div",{staticClass:"wrapper__details"},[a("product_photo",{staticClass:"wrapper__details__photo",attrs:{photo_link:"https://frontend-test.idaproject.com"+t.product.photo,alt:t.product.name}}),a("div",{staticClass:"wrapper__details__title_container"},[a("text_item",{staticClass:"wrapper__details__title_container__name",attrs:{text:t.product.name.toLowerCase().split(/\s+/).map((function(t){return t[0].toUpperCase()+t.substring(1)})).join(" ")+" "+t.product.id}}),a("text_item",{staticClass:"wrapper__details__title_container__price",attrs:{text:t.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),symbol:!0}})],1)],1)])])}),s=[],u=a("b87c"),p=a("9d9f"),d=a("7df5"),_=a("bdd4"),l={data:function(){return{card_hover:!1}},components:{product_photo:d["a"],text_item:u["a"],app_icon:p["a"],ratings:_["a"]},props:{product:Object,action:{type:Function,default:function(){}},cart_ids:{type:Array,default:function(){return[]}}}},f=l,m=(a("62ac"),a("0c7c")),g=Object(m["a"])(f,o,s,!1,null,"0d6212e8",null),b=g.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.pageCount,(function(e){return a("div",{key:e,staticClass:"number_of_page_item",class:t.pageNumber===e-1?"active_page":"",on:{click:function(a){return t.action({arr:t.items_array,pageNumber:e-1})}}},[t._v("\n    "+t._s(e)+"\n  ")])})),0)},v=[],w=(a("a9e3"),{props:{items_array:Array,action:Function,pageCount:Number,pageNumber:Number}}),y=w,C=(a("510e"),Object(m["a"])(y,h,v,!1,null,"215f5401",null)),k=C.exports,x=a("2f62"),j={data:function(){return{animation:!1}},components:{product_card:b,pagination:k},computed:Object(c["a"])(Object(c["a"])({},Object(x["c"])(["product_list","current_page_arr","pageCount","pageNumber","modal_filter","basket_list"])),{},{cart_ids:function(){var t=[];return this.basket_list.map((function(e){t.push(e.id)})),t}}),methods:Object(c["a"])({},Object(x["b"])(["get_category_products","filter_by","paginatedData","add_to_cart"])),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.get_category_products(t.$route.params.id);case 2:t.animation=!0,t.filter_by(t.modal_filter.active_product_filter),t.paginatedData({arr:t.product_list,pageNumber:0});case 5:case"end":return e.stop()}}),e)})))()}},O=j,N=(a("8924"),Object(m["a"])(O,r,n,!1,null,"0dcd7d93",null));e["default"]=N.exports},"62ac":function(t,e,a){"use strict";a("a103")},8924:function(t,e,a){"use strict";a("2d29")},a103:function(t,e,a){},eb14:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e29a7130.d4133718.js.map