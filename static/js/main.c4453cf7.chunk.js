(this.webpackJsonpprouducts=this.webpackJsonpprouducts||[]).push([[0],{4:function(e,t,a){"use strict";a.d(t,"i",(function(){return i})),a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"f",(function(){return c})),a.d(t,"j",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"m",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return o})),a.d(t,"h",(function(){return u})),a.d(t,"l",(function(){return D})),a.d(t,"k",(function(){return m})),a.d(t,"n",(function(){return h})),a.d(t,"o",(function(){return g})),a.d(t,"b",(function(){return S}));var i="ID",n="GETPRODUCT",r="ADD_PRODUCT_TO_CART",c="DELETE_CART",l="INCREASE_QUANTITY",p="DECREASE_QUANTITY",s="TOTAL_PRICE",d="BILL_ID",o="CART_ID",u="GETPRODUCT_DATABASE",D="PRODUCT_EDIT",m="LOAD_PRODUCT_LIST",h="UPIMG_ID",g="UPPRODUCT_ID",S="http://localhost:4333"},44:function(e,t){},50:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),r=a.n(n),c=a(15),l=a.n(c),p=(a(50),a(30)),s=a(32),d=a(18),o=a(2),u=a(33),D=r.a.lazy((function(){return a.e(23).then(a.bind(null,111))})),m=r.a.lazy((function(){return a.e(16).then(a.bind(null,112))})),h=r.a.lazy((function(){return a.e(17).then(a.bind(null,113))})),g=r.a.lazy((function(){return a.e(20).then(a.bind(null,114))})),S=r.a.lazy((function(){return a.e(19).then(a.bind(null,115))})),G=r.a.lazy((function(){return a.e(13).then(a.bind(null,84))})),B=r.a.lazy((function(){return a.e(22).then(a.bind(null,116))})),y=r.a.lazy((function(){return a.e(14).then(a.bind(null,117))})),I=Object(i.jsx)("div",{className:"pt-3 text-center",children:Object(i.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})});var H=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");if(e){var t=Object(s.a)(e);c(t.role),"admin"===a&&console.log("\u0110\xe3 \u0111\u0103ng nh\u1eadp")}}),[]),Object(i.jsx)(d.a,{children:Object(i.jsx)(u.a,{children:Object(i.jsx)(r.a.Suspense,{fallback:I,children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/login",exact:!0,component:m}),Object(i.jsx)(o.a,{path:"/register",exact:!0,component:h}),Object(i.jsx)(o.a,{path:"/admin",component:"admin"===a?g:S}),Object(i.jsx)(o.a,{path:"/paypal",component:G}),Object(i.jsx)(o.a,{path:"/order",component:B}),Object(i.jsx)(o.a,{path:"/history",component:y}),Object(i.jsx)(o.a,{path:"/",component:D})]})})})})},b=a(28),x=a(11),v=function(e){e&&e instanceof Function&&a.e(24).then(a.bind(null,118)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))},A=a(43),k=a(5),C=a(4),L=JSON.parse(localStorage.getItem("IDName"))||[],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.i:return e={id:t.id},localStorage.setItem("IDName",JSON.stringify(e)),Object(k.a)({},e);default:return e}},N=JSON.parse(localStorage.getItem("cart"))||{numberCart:0,totalPrice:0,items:[],bill:0,userID:0,upload:[],imgID:[],productID:0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=function(){var t=0;if(e.items.length>0){for(var a=0;a<e.items.length;a++)t+=parseInt(e.items[a].price)*(e.items[a].quantity||1);e.totalPrice=t}0!==e.items.length&&localStorage.setItem("cart",JSON.stringify(e))};switch(t.type){case C.a:if(0===e.numberCart){var i={id:t.payload.id,quantity:1,title:t.payload.title,name:t.payload.name,url:t.payload.url,price:t.payload.price};e.items.push(i)}else{var n=!1;if(e.items.map((function(a,i){a.id===t.payload.id&&(e.items[i].quantity++,n=!0)})),!n){var r={id:t.payload.id,quantity:1,title:t.payload.title,name:t.payload.name,url:t.payload.url,price:t.payload.price};e.items.push(r)}}return Object(k.a)(Object(k.a)({},e),{},{numberCart:e.numberCart+1});case C.j:return e.numberCart++,e.items[t.payload].quantity++,a(),Object(k.a)({},e);case C.e:var c=e.items[t.payload].quantity;return c>1&&(e.numberCart--,e.items[t.payload].quantity--),a(),Object(k.a)({},e);case C.f:var l=e.items[t.payload].quantity;return e.numberCart-=l,e.items=e.items.filter((function(a){return a.id!==e.items[t.payload].id})),e.items.length&&a(),0===e.items.length&&(localStorage.removeItem("cart"),e.totalPrice=0),Object(k.a)({},e);case C.c:return Object(k.a)(Object(k.a)({},e),{},{bill:t.bill_id});case C.d:return Object(k.a)(Object(k.a)({},e),{},{userID:t.user_id});default:return a(),e}},O=[{id:28,user_id:27,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u laptop 1",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"1 Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",url:"https://cdn.tgdd.vn/Products/Images/44/216292/Feature/lenovo-tet-2021-fix-720x333.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Lenovo",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:27,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u laptop 2",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5-7200U",pin:100,ram:40,ssd:2560,title:"laptop-2-1",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"2 Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:28,user_id:27,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"3 Laptop Apple MacBook Air 2017 i5 1.8GHz/8GB/128GB (MQD32SA/A)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/106875/apple-macbook-air-mqd32sa-a-i5-5350u-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Apple",cpuDetail:"3 Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:43,user_id:27,review:2e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"4 Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Laptop Lenovo IdeaPad S340 14IIL i5 1035G1/8GB/512GB/Win10 (81VV003SVN)",url:"https://cdn.tgdd.vn/Products/Images/44/214708/lenovo-ideapad-s340-14iil-i5-1035g1-8gb-512gb-win1-8-214708-2-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Lenovo",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:44,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"5 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:45,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"6 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:46,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"7 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:47,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"8 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:48,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"9 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:49,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"10 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:50,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"11 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:51,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"12 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:53,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"13 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:54,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"14 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:55,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"15 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019},{id:56,user_id:27,review:1e3,textBouns:"Nh\u1eadn b\u1ed9 qu\xe0 h\u1ea5p d\u1eabn \u0111\u1ebfn 8.5 tri\u1ec7u",sale:10,priceSale:"13.990.000",price:2349e4,textkm:"H\xe0ng s\u1eafp v\u1ec1",core:"i5- 7200U",pin:10,ram:4,ssd:256,title:"16 Laptop Acer Aspire A315 56 308N i3 1005G1/4GB/256GB/Win10 (NX.HS5SV.00C)",preorder:"\u0110\u1eb7t h\xe0ng tr\u01b0\u1edbc ng\xe0y 12/ 01",picAlt:"Samsung Galaxy S M\u1edbi 2",url:"https://cdn.tgdd.vn/Products/Images/44/223654/acer-aspire-a315-56-308n-i3-nxhs5sv00c-15-223654-400x400.jpg",categoryBeadcrumb:"Laptop",companyBeadcrumb:"Acer",cpuDetail:"Intel Core i5 Ice Lake, 1035G1, 1.00 GHz",ramDetail:"8 GB, DDR4 (On board 4GB +1 khe 4GB), 2666 MHz",ssdDetail:"SSD 512 GB M.2 PCIe, H\u1ed7 tr\u1ee3 khe c\u1eafm HDD SATA",lcdDetail:"14 inch, Full HD (1920 x 1080)",vgaDetail:"Card \u0111\u1ed3 h\u1ecda t\xedch h\u1ee3p, Intel UHD Graphics",inputDetail:"2 x USB 3.1, HDMI, USB Type-C",winDetail:"Windows 10 Home SL",settingDetail:"V\u1ecf nh\u1ef1a - n\u1eafp l\u01b0ng b\u1eb1ng kim lo\u1ea1i, PIN li\u1ec1n",sizeDetail:"D\xe0y 17.9 mm, 1.6 kg",years:2019}],j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.g:default:return e}},f=a(44),M=a.n(f),w=a(19),T=a.n(w),z=a(29),_=a(27),V=a.n(_),W={numberCart:0,edit:{}};(function(){var e=Object(z.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V.a.create({baseURL:"http://localhost:4333/product"}),e.next=3,t.get("/").then((function(e){W.data=e.data.result})).catch((function(e){console.log(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),t.type){case C.h:return e;case C.l:var a={id:t.payload.id,name:t.payload.name,quantity_in_stock:t.payload.quantity_in_stock,price:t.payload.price,description:t.payload.description,category_id:t.payload.category_id,htx_id:t.payload.htx_id,user_id:t.payload.user_id,isDeleted:t.payload.isDeleted,ID_Product:t.payload.ID_Product,id_Image:t.payload.id_Image,link_img:t.payload.link_img};return e.edit=a,Object(k.a)(Object(k.a)({},e),{},{numberCart:1});default:return e}},q=a(23),F=[],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.k:return e=t.dataProduct.result,Object(q.a)(e);default:return Object(q.a)(e)}},X=Object(x.c)({IDName:U,GetProduct:j,GetCarts:P,GetUser:M.a,GetProductDatabase:R,LoadProduct:E}),J=(a(75),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d),Q=Object(x.e)(X,J(Object(x.a)(A.a)));l.a.render(Object(i.jsx)(b.a,{store:Q,children:Object(i.jsx)(H,{})}),document.getElementById("root")),v()}},[[76,1,2]]]);
//# sourceMappingURL=main.c4453cf7.chunk.js.map