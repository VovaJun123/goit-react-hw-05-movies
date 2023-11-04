"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[137],{6815:function(n,e,t){t.d(e,{$0:function(){return f},Fg:function(){return m},HC:function(){return x},NZ:function(){return d},aV:function(){return l}});var r,a,o,c,i,u=t(168),s=t(1087),p=t(5867),f=p.ZP.section(r||(r=(0,u.Z)(["\n    padding-right: 50px;\n    padding-left: 50px;\n"]))),d=p.ZP.h2(a||(a=(0,u.Z)(["\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding-left: 5px;\n    font-size: 30px;\n    font-weight: 600;\n    text-align: center;\n    border-bottom: 2px solid #000;\n    padding-bottom: 5px;\n"]))),l=p.ZP.ul(o||(o=(0,u.Z)(["\n    list-style: disc;\n    color: #8a0f2c;\n"]))),x=p.ZP.li(c||(c=(0,u.Z)(["\n    &:not(:last-child) {\n        margin-bottom: 15px;\n    }\n"]))),m=(0,p.ZP)(s.rU)(i||(i=(0,u.Z)(["\n    font-style: 20px;\n    color: #8a0f2c;\n    transition: color 200ms ease-in-out, border-bottom 200ms ease-in-out;\n\n    &:hover,\n    &:focus {\n        color: #8a0f2c;\n        border: 2px solid #8a0f2c;\n        padding: 3px;\n    }\n"])))},1137:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,o,c=t(5861),i=t(9439),u=t(7757),s=t.n(u),p=t(2791),f=t(9014),d=t(1087),l=t(7689),x=t(9545),m=t(168),v=t(5867),g=v.ZP.form(r||(r=(0,m.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 20px;\n"]))),h=v.ZP.input(a||(a=(0,m.Z)(["\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    padding: 8px;\n    margin-right: 15px;\n    font-size: 16px;\n"]))),b=v.ZP.button(o||(o=(0,m.Z)(["\n    display: flex;\nalign-items: center;\njustify-content: center;\nfont-size: 18px;\nwidth: 100px;\nheight: 36px;\nborder: none;\noutline: none;\ncolor: #4e2323;\nbackground: #fff;\ncursor: pointer;\nposition: relative;\nz-index: 0;\nborder-radius: 10px;\nborder: 2px solid #000;\n\n&:active{\n    color: #000;\n}\n\n\n\n&:hover:{\n    color: #4e2333;\n}\n\n\n"]))),Z=t(184),y=function(n){var e=n.onSubmit;return(0,Z.jsxs)(g,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.query.value;t?(e(t),n.target.reset()):f.Am.error("Please enter something!")},children:[(0,Z.jsx)(h,{name:"query",type:"text",placeholder:"Search movies"}),(0,Z.jsx)(b,{type:"submit",children:"Search"})]})},k=t(6815),w=function(){var n=(0,p.useState)([]),e=(0,i.Z)(n,2),t=e[0],r=e[1],a=(0,d.lr)(),o=(0,i.Z)(a,2),u=o[0],m=o[1],v=(0,l.TH)();(0,p.useEffect)((function(){var n,e=null!==(n=u.get("query"))&&void 0!==n?n:"";if(e){var t=function(){var n=(0,c.Z)(s().mark((function n(){var t,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.E3)(e);case 3:t=n.sent,0===(a=t.results).length?(f.Am.dismiss(),f.Am.error("No movies found"),r([])):r(a),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),f.Am.error(n.t0.message),r([]);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();t()}}),[u]);return(0,Z.jsx)("main",{children:(0,Z.jsxs)(k.$0,{children:[(0,Z.jsx)(k.NZ,{children:"Movies Page"}),(0,Z.jsx)(y,{onSubmit:function(n){m({query:n})}}),(0,Z.jsx)(k.aV,{children:t.map((function(n){return(0,Z.jsx)(k.HC,{children:(0,Z.jsx)(k.Fg,{to:"/movies/".concat(n.id),state:{from:v},children:n.title})},n.id)}))})]})})}},9545:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return l},Mc:function(){return f},_k:function(){return s},uV:function(){return d}});var r=t(5861),a=t(7757),o=t.n(a),c=t(1243),i="https://api.themoviedb.org",u="bd6023ae3d7655a9ba206f8d576c79ae",s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"/3/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=137.98aa3cb0.chunk.js.map