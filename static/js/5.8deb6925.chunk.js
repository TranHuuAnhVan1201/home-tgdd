(this.webpackJsonpprouducts=this.webpackJsonpprouducts||[]).push([[5,13],{77:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"h",(function(){return o})),e.d(n,"c",(function(){return s})),e.d(n,"d",(function(){return u})),e.d(n,"g",(function(){return l})),e.d(n,"f",(function(){return d})),e.d(n,"e",(function(){return j})),e.d(n,"i",(function(){return h})),e.d(n,"b",(function(){return f}));var c=e(4),r=e(27),i=e.n(r);var a=function(t){return{type:c.i,id:t}},o=function(){return{type:c.g}},s=function(t){return{type:c.a,payload:t}},u=function(t){return{type:c.f,payload:t}},l=function(t){return{type:c.j,payload:t}},d=function(t){return{type:c.e,payload:t}},j=function(t){return{type:c.c,bill_id:t}},h=function(t){return{type:c.d,user_id:t}},f=function(){return function(t){return(n="product",e="GET",r=null,i()({method:e,headers:{"Content-Type":"application/json"},url:"".concat(c.b,"/").concat(n),data:r})).then((function(n){t(p(n.data))}));var n,e,r}},p=function(t){return{type:c.k,dataProduct:t}}},80:function(t,n,e){},84:function(t,n,e){"use strict";e.r(n);var c=e(3),r=e(19),i=e.n(r),a=e(29),o=e(0),s=e(28),u=e(2);e(80);n.default=function(t){var n=Object(s.c)((function(t){return t.GetCarts})),e=Object(o.useRef)(),r=Object(u.f)();return Object(o.useEffect)((function(){window.paypal.Buttons({createOrder:function(t,e,c){return e.order.create({intent:"CAPTURE",purchase_units:[{description:"Thanh to\xe1n",amount:{value:parseFloat(n.totalPrice/23e4).toFixed(2)}}]})},onSuccess:function(n){console.log("The payment was succeeded!",n),t.onSuccess(n)},onApprove:function(){var t=Object(a.a)(i.a.mark((function t(n,e){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.order.capture();case 2:c=t.sent,console.log(c),console.log(n),alert("Transaction completed by "+c.payer.name.given_name),r.push("/history");case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),onError:function(t){console.log(t)}}).render(e.current)}),[]),Object(c.jsx)("div",{className:"paypal-av",children:Object(c.jsx)("div",{ref:e})})}},96:function(t,n,e){"use strict";e.r(n);var c=e(3),r=e(30),i=e(0),a=e(28),o=e(2),s=e(18),u=(e(97),e(77)),l=e(32),d=e(84),j=e(27),h=e.n(j);n.default=function(t){var n=Object(a.c)((function(t){return t.GetCarts})),e=Object(i.useState)(!1),j=Object(r.a)(e,2),f=j[0],p=j[1],b=Object(i.useState)(null),O=Object(r.a)(b,2),x=O[0],g=O[1],y=Object(o.f)();Object(i.useEffect)((function(){if(localStorage.getItem("token")){var t=Object(l.a)(localStorage.getItem("token"));g(t.role)}}),[]);var v=Object(a.b)(),m=function(t){if("string"!==typeof t)return String(t).split("").reverse().reduce((function(t,n,e){return(e%3?n:n+".")+t}))},k=function(){x?(p(!0),function(){var t={user_id:12,total_price:n.totalPrice/23e4,shipping_address_id:29};v(u.i(t.user_id)),h.a.post("http://localhost:4333/bill/add",t).then((function(t){v(u.e(t.data.id)),console.log(t.data.id)}),(function(t){console.log(t)}))}(),n.items.forEach((function(t){var e=parseInt(t.price)/23e4,c={product_id:t.id,quantity:t.quantity,cart_id:5,total:e*t.quantity,bill_id:parseInt(n.bill)+1};h.a.post("http://localhost:4333/cart/add_cart_item",c).then((function(t){console.log(t)}),(function(t){console.log(t)}))})),y.push("/paypal")):y.push("/login")};return console.log(n),Object(c.jsx)("section",{children:Object(c.jsxs)("div",{className:"carts",children:[Object(c.jsx)("h2",{className:"text-center",children:"Gi\u1ecf h\xe0ng c\u1ee7a b\u1ea1n"}),Object(c.jsx)("div",{className:"cart-content",children:Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\u1ea2nh"}),Object(c.jsx)("th",{children:"S\u1ea3n ph\u1ea9m"}),Object(c.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(c.jsx)("th",{children:"Gi\xe1 "}),Object(c.jsx)("th",{children:"Th\xe0nh ti\u1ec1n"}),Object(c.jsx)("th",{children:"X\xf3a"})]})}),Object(c.jsx)("tbody",{children:n.items.map((function(t,n){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:t.url,alt:123})}),Object(c.jsx)("td",{children:t.title||t.name}),Object(c.jsxs)("td",{className:"td-group",children:[Object(c.jsx)("span",{onClick:function(){return t=n,void v(u.f(t));var t},children:"-"}),Object(c.jsx)("span",{children:t.quantity}),Object(c.jsx)("span",{onClick:function(){return t=n,void v(u.g(t));var t},children:"+"})]}),Object(c.jsxs)("td",{children:[t.price," \u0111"]}),Object(c.jsxs)("td",{children:[m(parseInt(parseInt(t.price))*(t.quantity||1))," ","\u0111"]}),Object(c.jsx)("td",{onClick:function(){return t=n,void v(u.d(t));var t},children:"x\xf3a"})]},n)}))}),Object(c.jsx)("tfoot",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{colSpan:4,children:"T\u1ed5ng c\u1ed9ng: "}),Object(c.jsxs)("td",{children:[m(n.totalPrice)," \u0111"]}),Object(c.jsx)("td",{})]})})]})}),Object(c.jsxs)("div",{className:"btn-carts",children:[Object(c.jsxs)(s.b,{to:"/",className:"btn-back link",children:[Object(c.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Ti\u1ebfp t\u1ee5c mua s\u1eafm"]}),Object(c.jsx)("button",{onClick:function(){return k()},children:" Mua h\xe0ng"}),Object(c.jsxs)(s.b,{to:"/checkout",className:"btn-checkout link",children:[Object(c.jsx)("i",{className:"fas fa-long-arrow-alt-right"})," Thanh to\xe1n"]}),f?Object(c.jsx)(d.default,{}):Object(c.jsx)("button",{className:"btn-checkout link",onClick:function(){x?(p(!0),y.push("/paypal")):y.push("/login")},children:"CheckOut Paypal"})]})]})})}},97:function(t,n,e){}}]);
//# sourceMappingURL=5.8deb6925.chunk.js.map