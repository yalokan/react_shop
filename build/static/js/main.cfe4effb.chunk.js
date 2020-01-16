(this.webpackJsonpreact_shop=this.webpackJsonpreact_shop||[]).push([[0],{30:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),l=n(8),i=n(13),u=n(9),s=n(11),m=n(12),d=n(19),f=n(18),E=n(20),p=n(10),b=r.a.createContext(),h=b.Provider,v=b.Consumer,O=function(e){return{type:"FETCH_BOOKS_SUCCESS",payload:e}},g=function(e){return{type:"FETCH_BOOKS_FAILURE",payload:e}},k=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},C=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t(O(e))})).catch((function(e){return t(g(e))}))}}},y=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},_=(n(39),function(e){var t=e.book,n=e.onAddedToCart,a=t.title,o=t.author,c=t.price,l=t.coverImage;return r.a.createElement("div",{className:"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:l,alt:"Cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"}," ",a," "),r.a.createElement("div",{className:"book-author"}," ",o," "),r.a.createElement("div",{className:"book-price"}," ",c," "),r.a.createElement("button",{onClick:n,className:"btn btn-info add-to-cart"},"Add to cart")))}),T=(n(40),n(41),function(){return r.a.createElement("div",null,"Loading...")}),j=(n(42),function(e){return r.a.createElement("div",null,e.error.message)}),N=function(e){var t=e.books,n=e.onAddedToCart;return r.a.createElement("ul",{className:"book-list"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(_,{onAddedToCart:function(){return n(e.id)},book:e}))})))},A=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,n=e.loading,a=e.error,o=e.onAddedToCart;return n?r.a.createElement(T,null):a?r.a.createElement(j,{error:a}):r.a.createElement(N,{books:t,onAddedToCart:o})}}]),t}(a.Component),I=y((function(e){return function(t){return r.a.createElement(v,null,(function(n){return r.a.createElement(e,Object.assign({},t,{bookstoreService:n}))}))}}),Object(l.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var n=t.bookstoreService;return Object(p.b)({fetchBooks:C(n),onAddedToCart:k},e)})))(A),S=(n(43),{onIncrease:k,onDecrease:function(e){return{type:"BOOK_DECREASED_IN_CART",payload:e}},onDelete:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}}}),D=Object(l.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}),S)((function(e){var t=e.items,n=e.total,a=e.onIncrease,o=e.onDecrease,c=e.onDelete;return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null," Your order: "),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Count"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,t.map((function(e,t){var n=e.id,l=e.title,i=e.count,u=e.total;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,t+1),r.a.createElement("td",null,l),r.a.createElement("td",null,i),r.a.createElement("td",null,"$",u),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return c(n)},className:"btn btn-outline-danger"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return a(n)},className:"btn btn-outline-success"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return o(n)},className:"btn btn-outline-warning"},r.a.createElement("i",{className:"fa fa-minus circle"}))))})))),r.a.createElement("div",{className:"total"},"Total: $ ",n))})),B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(D,null))},R=function(){return r.a.createElement("div",null," Cart Page")},K=(n(44),Object(l.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,total:t.orderTotal}}))((function(e){var t=e.items,n=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(i.b,{to:"/"},r.a.createElement("div",{className:"logo text-dark"}," Book Store ")),r.a.createElement(i.b,{to:"/cart"},r.a.createElement("div",{className:"shopping-cart"},r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t.length," items ($",n,")")))}))),w=(n(46),function(){return r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(K,{numItems:3,total:155}),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:B,exact:!0}),r.a.createElement(u.a,{path:"/cart",component:R})))}),F=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,errorInfo:null},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,errorInfo:t})}},{key:"render",value:function(){return this.state.hasError?(console.log(this.state.errorInfo),r.a.createElement(j,{message:"error message from Boundry ".concat(this.state.errorInfo)})):this.props.children}}]),t}(a.Component),L=function(){function e(){Object(s.a)(this,e),this.data=[{id:1,title:"title 1",author:"author 1",price:25,coverImage:"https://cdn1.ozone.ru/multimedia/c400/1037874847.jpg"},{id:2,title:"title 2",author:"author 2",price:43,coverImage:"https://cdn1.ozone.ru/multimedia/c400/1028566083.jpg"}]}return Object(m.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,n){setTimeout((function(){Math.random()>.85?n(new Error("something bad happened")):t(e.data)}),1e3)}))}}]),e}(),H=n(29),M=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},U=n(14),x=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return z(e,t.payload,1);case"BOOK_DECREASED_IN_CART":return z(e,t.payload,-1);case"BOOK_REMOVED_FROM_CART":var n=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return z(e,t.payload,-n.count);default:return e.shoppingCart}},P=function(e,t,n){return 0===t.count?[].concat(Object(U.a)(e.slice(0,n)),Object(U.a)(e.slice(n+1))):-1===n?[].concat(Object(U.a)(e),[t]):[].concat(Object(U.a)(e.slice(0,n)),[t],Object(U.a)(e.slice(n+1)))},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.id,r=void 0===a?e.id:a,o=t.count,c=void 0===o?0:o,l=t.title,i=void 0===l?e.title:l,u=t.total,s=void 0===u?0:u;return{id:r,title:i,count:c+n,total:s+e.price*n}};function z(e,t,n){var a,r=e.bookList.books,o=e.shoppingCart.cartItems,c=r.find((function(e){return e.id===t})),l=o.findIndex((function(e){return e.id===t})),i=o[l],u=$(c,i,n);return{cartItems:P(o,u,l),orderTotal:(a=P(o,u,l),a.reduce((function(e,t){return e+t.total}),0))}}var J,Q=Object(p.c)((function(e,t){return{bookList:M(e,t),shoppingCart:x(e,t)}}),Object(p.a)(H.a,(function(){return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}}),(function(e){var t=e.getState;return function(e){return function(n){return console.log(n.type,t()),e(n)}}})));Q.dispatch((J=3e3,function(e){setTimeout((function(){return e({type:"DELAYED_ACTION"})}),J)}));var V=Q,Y=new L;c.a.render(r.a.createElement(l.a,{store:V},r.a.createElement(F,null,r.a.createElement(h,{value:Y},r.a.createElement(i.a,null,r.a.createElement(w,null))))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.cfe4effb.chunk.js.map