(this.webpackJsonpv_store=this.webpackJsonpv_store||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),l=a.n(r),c=a(1);a(9);function m(e,t,a){var n=new FormData;n.append("page",t),n.append("query",a);var i=new URLSearchParams(n).toString(),r=new XMLHttpRequest;r.open("GET","/query_only?"+i),r.send(),r.onload=function(){var t=JSON.parse(r.response),a=t.pages_n,n=t.results;e(n,a)}}function o(e,t,a){a.append("page",t);var n=new URLSearchParams(a).toString(),i=new XMLHttpRequest;i.open("GET","/query_filter?"+n),i.send(),i.onload=function(){var t=JSON.parse(i.response),a=t.pages_n,n=t.results;e(n,a)}}var s={final:function(e){(e=document.getElementById(e)).classList.remove("initial_state")},initial:function(e){(e=document.getElementById(e)).classList.add("initial_state")}},u=function(e){var t=e.prod_list_change,a=e.saved_form_change,n=e.query_change,r=e.page_change,l=e.total_page_change,c=function(){s.initial("search"),s.initial("search_translucid_screen"),document.getElementById("recommendation").scrollIntoView(),a(void 0);var e=document.getElementById("search_input").value;n(e),t(void 0),r(1),m((function(e,a){l(a),t(e)}),1,e)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"header",className:"initial_state"},i.a.createElement("a",{href:"/",id:"logo"}," "),i.a.createElement("div",{id:"options_bellow_search"},i.a.createElement("a",{href:"",id:"contact"},"Contact me")),i.a.createElement("div",{id:"header_btns"},i.a.createElement("button",{id:"search_mobile_btn",onClick:function(){s.final("search"),s.final("search_translucid_screen")}}),i.a.createElement("button",{id:"hamb",onClick:function(){s.final("menu_screen"),s.final("menu")}}))),i.a.createElement("div",{id:"search_translucid_screen",className:"initial_state",onClick:function(){s.initial("search"),s.initial("search_translucid_screen")}},i.a.createElement("button",{id:"search_close_btn"})),i.a.createElement("div",{id:"search",className:"initial_state"},i.a.createElement("input",{type:"text",id:"search_input",onKeyDown:function(e){"Enter"==e.key&&c()}}),i.a.createElement("button",{id:"query_btn",onClick:c}," ",i.a.createElement("img",null)," ")))},d=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"menu_screen",className:"initial_state"},i.a.createElement("div",{id:"screen_to_onclick_event",onClick:function(){s.initial("menu_screen"),s.initial("menu")}}),i.a.createElement("div",{id:"menu",className:"initial_state"},i.a.createElement("button",{id:"menu_close_btn",onClick:function(){s.initial("menu_screen"),s.initial("menu")}}," ",i.a.createElement("img",null)," "),i.a.createElement("div",{id:"menu_items"},i.a.createElement("a",{href:""},"Visit my Website"),i.a.createElement("a",{href:"https://github.com/VitorFigm",target:"_blank",rel:"noopener noreferrer"},"Visit my github"),i.a.createElement("a",{href:""},"Contact me")))))},_=function(e){var t=e.query,a=e.brand_list,n=(e.brand_list_change,e.saved_form_change),r=e.prod_list_change,l=e.page_change,c=e.total_page_change,m=0!==a.length?a.map((function(e,t,a){return i.a.createElement("option",{value:e,key:t},e)})):i.a.createElement("option",{disabled:!0},"loading...");return window.addEventListener("load",(function(){document.getElementById("menu_filter").addEventListener("submit",(function(e){e.preventDefault();var t=this.elements.maximum_price.value;if(this.elements.minimum_price.value>t)document.getElementById("error_msg").innerHTML="Price min needs to be lower than Price max",s.final("error_msg_box");else{l(1),s.initial("menu_filter_screen"),s.initial("menu_filter"),document.getElementById("recommendation").scrollIntoView(),r(void 0);var a=new FormData(this);n(a),o((function(e,t){c(t),r(e)}),1,a)}}))})),i.a.createElement("div",{id:"menu_filter_screen",className:"initial_state"},i.a.createElement("div",{id:"menu_filter_onclick",onClick:function(){s.initial("menu_filter_screen"),s.initial("menu_filter")}}),i.a.createElement("button",{className:"filter_close_btn",onClick:function(){s.initial("menu_filter_screen"),s.initial("menu_filter")}}),i.a.createElement("form",{id:"menu_filter",className:"initial_state"},i.a.createElement("label",{htmlFor:"filter_for"}," Filter for: "),i.a.createElement("select",{name:"filter_for",className:"menu_filter_spaces"},i.a.createElement("option",{defaultValue:"better ratings"},"Better ratings"),i.a.createElement("option",{defaultValue:"lower price"},"Lower price"),i.a.createElement("option",{defaultValue:"higher price"},"Higher price")),i.a.createElement("label",{htmlFor:"brand"}," Brand: "),i.a.createElement("select",{name:"brand",className:"menu_filter_spaces",id:"filter_brands"},i.a.createElement("option",{defaultValue:"all"},"All"),m),i.a.createElement("label",{htmlFor:"minimum_price"},"Price min"),i.a.createElement("input",{type:"number",name:"minimum_price",className:"menu_filter_spaces"}),i.a.createElement("label",{htmlFor:"maximum_price"},"Price max"),i.a.createElement("input",{type:"number",name:"maximum_price",className:"menu_filter_spaces"}),i.a.createElement("input",{type:"hidden",name:"query",defaultValue:t}),i.a.createElement("input",{type:"submit",defaultValue:"Filter",id:"submit_btn"}),i.a.createElement("div",{id:"error_msg_box",className:"initial_state"},i.a.createElement("div",{id:"error_msg"}),i.a.createElement("button",{type:"button",className:"filter_close_btn",onClick:function(){s.initial("error_msg_box")}}))))},p=function(e){var t=e.page,a=e.total_page,n=e.total_page_change,r=e.query,l=e.prod_list_change,c=e.saved_form,u=e.page_change,d=function(e){document.getElementById("recommendation").scrollIntoView(),l(void 0),void 0!==c?o((function(t,a){n(a),u(e),l(t)}),e,c):m((function(t,a){n(a),u(e),l(t)}),e,r)};return i.a.createElement("section",null,i.a.createElement("div",{className:"container",id:"intro"},i.a.createElement("h1",null,"Hi, welcome to the V store, "),i.a.createElement("p",null,"A cellphone shop simulator")),i.a.createElement("div",{className:"blank_interval"}),i.a.createElement("div",{id:"recommendation",className:"container"},i.a.createElement("div",{className:"blank_interval"}),function(){var e="";if(""!==r&&(e+='Results for "'+r+'"'),void 0!==c){var t=c.get("filter_for"),a=c.get("brand"),n=c.get("minimum_price"),l=c.get("maximum_price");e+="  ("+t+")","All"!==a&&(e+="  ("+a+"brand phones)"),""===n&&""===l||(e+="  (Price rage:"+n+" to "+l+")")}return""==e&&(e="Highest Rated"),i.a.createElement("h1",{id:"results_title"},e)}(),e.children,i.a.createElement("div",{id:"page"},1==t?i.a.createElement("button",{className:"inactivated"}," ","<"," "):i.a.createElement("button",{className:"prev_page",onClick:function(){return d(t-1)}}," ","<"," "),i.a.createElement("div",null,"Page ",t," of ",a),t==a?i.a.createElement("button",{className:"inactivated"}," ",">"," "):i.a.createElement("button",{className:"next_page",onClick:function(){return d(t+1)}}," ",">"," ")),i.a.createElement("h1",null,"Help to find a cellphone"),i.a.createElement("div",{id:"find_a_cell",onClick:function(){s.final("menu_filter_screen"),s.final("menu_filter")}},"find with filters"),i.a.createElement("div",{className:"blank_interval"})))},f=function(e){var t=e.prod_list,a=(e.prod_list_change,Object(n.useState)()),r=Object(c.a)(a,2),l=r[0],m=r[1];Object(n.useEffect)((function(){m(void 0!==t?void 0:i.a.createElement("div",{id:"loading_prods"},i.a.createElement("h1",null,"Loading...")))}),[t]),window.addEventListener("load",(function(){}));var o=void 0!==t?t.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{className:"product",href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.image,id:e.image}),i.a.createElement("div",{id:"product_content"},i.a.createElement("div",{className:"name",id:e.img+"_name"},e.title.slice(0,60)+"..."),i.a.createElement("div",{className:"price",id:e.img+"_price"},"$",e.price))))})):i.a.createElement(i.a.Fragment,null);return i.a.createElement("div",{className:"product_container"},l,o)},g=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),m=Object(c.a)(l,2),o=m[0],s=m[1],g=Object(n.useState)([]),E=Object(c.a)(g,2),h=E[0],v=E[1],b=Object(n.useState)(1),y=Object(c.a)(b,2),N=y[0],w=y[1],k=Object(n.useState)(1),O=Object(c.a)(k,2),S=O[0],L=O[1],j=Object(n.useState)(),q=Object(c.a)(j,2),F=q[0],C=q[1];return window.addEventListener("load",(function(){!function(e,t){var a=new FormData;a.append("page",t);var n=new URLSearchParams(a).toString(),i=new XMLHttpRequest;i.open("GET","/home?"+n),i.send(),i.onload=function(){var t=JSON.parse(i.response),a=t.pages_n,n=t.results;e(n,a)}}((function(e,t){w(t),s(e)}),1),function(e){var t=new XMLHttpRequest;t.open("GET","brand_list"),t.send(),t.onload=function(){var a=JSON.parse(t.response);e(a)}}((function(e){v(e)}))})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"scroll"},"V"),i.a.createElement(u,{page_change:L,total_page_change:w,prod_list_change:s,query_change:r,saved_form_change:C}),i.a.createElement(_,{page_change:L,total_page_change:w,prod_list_change:s,query:a,brand_list:h,brand_list_change:v,saved_form_change:C}),i.a.createElement(d,null),i.a.createElement(p,{prod_list_change:s,page:S,total_page:N,total_page_change:w,page_change:L,query:a,saved_form:F},i.a.createElement(f,{prod_list:o,prod_list_change:s})))};l.a.render(i.a.createElement(g,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.89030fff.chunk.js.map