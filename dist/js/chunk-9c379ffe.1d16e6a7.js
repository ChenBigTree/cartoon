(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c379ffe"],{"2b5b":function(t,a,e){},7473:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-end"},[e("div",{staticClass:"header clearfix"},[e("div",{staticClass:"back-icon fl",on:{click:function(a){return t.backNext()}}}),e("div",{staticClass:"header-title fl"},[t._v(t._s(t.primaryKey)+": "+t._s(t.bookname))]),e("div",{staticClass:"search-icon fr",on:{click:function(a){return t.backNext()}}})]),e("div",{staticClass:"book-list-box clearfix"},t._l(t.bookData,(function(a,s){return e("div",{key:s,staticClass:"book-card-box fl",on:{click:function(e){return t.goState({name:"detailed",params:{url:a.url,come:"0"}})}}},[e("div",{staticClass:"pic-box"},[e("img",{staticClass:"auto-img",attrs:{src:a.cover,alt:a.name}}),e("span",{staticClass:"black"},[t._v(t._s(a.tag))]),e("span",{staticClass:"star clearfix"},[e("i",{staticClass:"fl"}),e("span",{staticClass:"fl"},[t._v(t._s(a.status))])])]),e("div",{staticClass:"bookname"},[t._v(t._s(a.name))])])})),0)])},n=[],i=(e("b0c0"),e("d3b7"),{data:function(){return{primaryKey:"",bookname:"",bookData:""}},created:function(){var t=this,a=this.$route.params;if(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),"搜索"==a.type){this.primaryKey=a.type,this.bookname=a.name;var e="http://api.pingcc.cn/?mhname="+a.name;this.ajax(e).then((function(a){t.bookData=JSON.parse(a).list,t.$toast.clear()}))}else if("分类"==a.type){this.primaryKey=a.type,this.bookname=a.name.text;var s="http://api.pingcc.cn/?mhname="+a.name.code;this.ajax(s).then((function(a){t.bookData=JSON.parse(a).list,t.$toast.clear()}))}},methods:{goState:function(t){this.$router.push(t)},backNext:function(){window.history.back(-1)},ajax:function(t){return new Promise((function(a,e){var s=new XMLHttpRequest;s.onreadystatechange=function(){4===this.readyState&&200===this.status&&a(this.responseText)},s.open("Get",t,!1),s.send(null)}))}},beforeRouteLeave:function(t,a,e){this.$toast.clear(),e()}}),c=i,o=(e("a353"),e("2877")),r=Object(o["a"])(c,s,n,!1,null,"f0f4eb44",null);a["default"]=r.exports},a353:function(t,a,e){"use strict";var s=e("2b5b"),n=e.n(s);n.a},b0c0:function(t,a,e){var s=e("83ab"),n=e("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,r="name";!s||r in i||n(i,r,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-9c379ffe.1d16e6a7.js.map