"use strict";(self.webpackChunkreact_ecommerce=self.webpackChunkreact_ecommerce||[]).push([[819],{3622:function(e,t,c){c.d(t,{Z:function(){return d}});var n=c(9439),s=c(2791),r=c(2677),i=c(7689),o=c(2945),l=c(9085),a=c(184),d=function(e){var t=e.title,c=e.productItem,d=e.addToCart,u=e.showImage,h=void 0===u||u,m=(0,s.useContext)(o.c).setSelectedProduct,f=(0,i.s0)(),x=(0,s.useState)(0),j=(0,n.Z)(x,2),p=j[0],g=j[1],C=function(){m(c),localStorage.setItem("selectedProduct-".concat(c.id),JSON.stringify(c)),f("/shop/".concat(c.id))};return(0,a.jsxs)(r.Z,{lg:3,md:4,sm:6,xs:12,className:"product mtop",children:["Big Discount"===t?(0,a.jsxs)("span",{className:"discount",children:[c.discount,"% Off"]}):null,h&&(0,a.jsx)("img",{loading:"lazy",onClick:function(){return C()},src:c.imgUrl,alt:""}),(0,a.jsxs)("div",{className:"product-like",children:[(0,a.jsx)("label",{children:p})," ",(0,a.jsx)("br",{}),(0,a.jsx)("ion-icon",{name:"heart-outline",onClick:function(){g(p+1)}})]}),(0,a.jsxs)("div",{className:"product-details",children:[(0,a.jsx)("h3",{onClick:function(){return C()},children:c.productName}),(0,a.jsxs)("div",{className:"price",children:[(0,a.jsxs)("h4",{children:["\u20b9",c.price]}),(0,a.jsx)("button",{"aria-label":"Add",type:"submit",className:"add",onClick:function(){return function(e){d(e),l.Am.success("Product has been added to cart!")}(c)},children:(0,a.jsx)("ion-icon",{name:"add"})})]})]})]})}},5965:function(e,t,c){c.r(t),c.d(t,{default:function(){return j}});var n=c(2791),s=c(7022),r=c(9743),i=c(2677),o=c(48),l=c(184),a=function(){return(0,l.jsx)("section",{className:"wrapper background",children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(r.Z,{children:o.Bz.map((function(e,t){return(0,l.jsxs)(i.Z,{md:3,sm:5,xs:9,style:{backgroundColor:e.bg},className:"feature",children:[(0,l.jsx)("div",{className:"icon",children:e.icon}),(0,l.jsx)("h3",{children:e.title}),(0,l.jsx)("p",{children:e.subtitle})]},t)}))})})})},d=c(3622),u=function(e){var t=e.title,c=e.bgColor,n=e.productItems,i=e.addToCart;return(0,l.jsx)("section",{style:{background:c},children:(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("div",{className:"heading",children:(0,l.jsx)("h1",{children:t})}),(0,l.jsx)(r.Z,{className:"justify-content-center",children:n.map((function(e){return(0,l.jsx)(d.Z,{title:t,productItem:e,addToCart:i},e.id)}))})]})})},h=c(2945),m=c(1413),f=c(5717),x=(c(3037),c(8688),function(){return(0,l.jsx)("section",{className:"homeSlide",children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(f.Z,(0,m.Z)((0,m.Z)({},{nav:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:o.cd.map((function(e,t){return(0,l.jsx)("img",{src:e.cover,alt:e.title,style:{width:"100%",height:"100%"}})}))}))})})}),j=function(){var e=(0,n.useContext)(h.c).addToCart;o.RB.filter((function(e){return"mobile"===e.category||"wireless"===e.category})),o.RB.filter((function(e){return"Blood"===e.category}));return(0,n.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(a,{}),(0,l.jsx)(u,{title:"Popular Packages",bgColor:"#f6f9fc",productItems:o.H_,addToCart:e}),(0,l.jsx)(u,{title:"Popular Tests",bgColor:"#f6f9fc",productItems:o.u1,addToCart:e})]})}}}]);
//# sourceMappingURL=819.8b44671d.chunk.js.map