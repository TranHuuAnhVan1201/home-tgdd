(this.webpackJsonpprouducts=this.webpackJsonpprouducts||[]).push([[4],{109:function(t,e,n){"use strict";n.r(e);var c=n(3),a=(n(31),n(5),n(19)),r=n.n(a),i=n(29),u=n(30),s=n(0),o=n(27),d=n.n(o),l=n(82),j=(n(78),n(2)),h=n(28),b=n(77),p=n(4);e.default=function(t){var e=d.a.create({baseURL:"http://localhost:4333/product"}),n=Object(j.f)(),a=Object(h.b)(),o=Object(h.c)((function(t){return t.GetProductDatabase}));console.log(o);var f=Object(h.c)((function(t){return t.LoadProduct}));console.log(f);var O=Object(s.useState)({data:[],edit:[],submitEdit:!1}),x=Object(u.a)(O,2),m=x[0],v=x[1],y=Object(s.useState)({}),g=Object(u.a)(y,2),N=(g[0],g[1],Object(s.useState)(1)),k=Object(u.a)(N,2),P=k[0],C=k[1],w=Object(s.useState)(8),S=Object(u.a)(w,2),T=S[0],_=(S[1],Object(s.useState)([])),E=Object(u.a)(_,2),D=E[0],G=E[1],R=function(){var t=Object(i.a)(r.a.mark((function t(){var n,c,a,i,u,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=(n=P*T)-T,t.prev=2,t.next=5,e.get("/").then((function(t){return t.data}));case 5:for(a=t.sent,i=[],u=o.data.slice(c,n),v({data:u}),s=1;s<=Math.ceil(parseInt(a.result.length)/T);s++)i.push({item:s});G(i),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){R(),f&&f.length>0&&(o.data=f),P&&R()}),[P,f]);var q=function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.delete("/".concat(n));case 2:t.sent,R();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(t,e){var c;a(b.b()),m.data.filter((function(e){e.id===t&&e})),a((c=e,{type:p.l,payload:c})),n.push("product/upload")};return Object(c.jsx)("section",{className:"home-admin",children:Object(c.jsxs)("div",{className:"home-user home-right",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("span",{className:"btn add",onClick:function(){n.push("product/upload")},children:"Th\xeam t\xe0i kho\u1ea3n - Chuy\u1ec3n qua trang upload"})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"table",children:[Object(c.jsxs)("table",{className:"col-auto",children:[Object(c.jsx)("thead",{className:"title",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"T\xean"}),Object(c.jsx)("th",{children:"Kho"}),Object(c.jsx)("th",{children:"Gi\xe1"}),Object(c.jsx)("th",{children:"Danh m\u1ee5c"}),Object(c.jsx)("th",{children:"Ng\xe0y"}),Object(c.jsx)("th",{children:"PERFORM"})]})}),Object(c.jsx)("tbody",{children:void 0!==m.data?m.data.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.quantity_in_stock}),Object(c.jsx)("td",{children:t.price}),Object(c.jsx)("td",{children:t.cate_name}),Object(c.jsx)("td",{children:"C\u1eadp nh\u1eadp"}),Object(c.jsxs)("td",{className:"td-group",children:[Object(c.jsx)("span",{className:"btn delete",onClick:function(){return q(t.id)},children:"X\xf3a"}),Object(c.jsx)("span",{className:"btn edit",onClick:function(){return A(t.id,t)},children:"S\u1eeda nhanh"})]})]},e)})):null})]}),Object(c.jsx)(l.a,{onAddPage:function(t){setTimeout((function(){C(t)}),1e3)},totalPages:D})]})})]})})}},77:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return d})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return j})),n.d(e,"i",(function(){return h})),n.d(e,"b",(function(){return b}));var c=n(4),a=n(27),r=n.n(a);var i=function(t){return{type:c.i,id:t}},u=function(){return{type:c.g}},s=function(t){return{type:c.a,payload:t}},o=function(t){return{type:c.f,payload:t}},d=function(t){return{type:c.j,payload:t}},l=function(t){return{type:c.e,payload:t}},j=function(t){return{type:c.c,bill_id:t}},h=function(t){return{type:c.d,user_id:t}},b=function(){return function(t){return(e="product",n="GET",a=null,r()({method:n,headers:{"Content-Type":"application/json"},url:"".concat(c.b,"/").concat(e),data:a})).then((function(e){t(p(e.data))}));var e,n,a}},p=function(t){return{type:c.k,dataProduct:t}}},78:function(t,e,n){},82:function(t,e,n){"use strict";var c=n(3);n(0),n(83);e.a=function(t){var e=t.totalPages,n=t.onAddPage;return Object(c.jsx)("nav",{className:"navigation",children:Object(c.jsx)("ul",{className:"pagination",children:e.map.length>0?e.map((function(t,e){return Object(c.jsx)("li",{onClick:function(){return n(t.item)},className:"page-item",children:Object(c.jsx)("span",{className:"page-link",children:t.item})})})):null})})}},83:function(t,e,n){}}]);
//# sourceMappingURL=4.60b063ae.chunk.js.map