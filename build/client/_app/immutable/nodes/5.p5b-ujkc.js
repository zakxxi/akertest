import{s as S,n as v}from"../chunks/scheduler.Bmg8oFKD.js";import{S as x,i as P,e as h,t as j,s as w,c as _,f,h as E,d as l,j as D,a as I,b as O,k as n}from"../chunks/index.DQZpanJt.js";const V=async s=>{const{fetch:t,params:e}=s,{postid:a}=e;return{post:await(await t(`https://jsonplaceholder.typicode.com/posts/${a}`)).json()}},H=Object.freeze(Object.defineProperty({__proto__:null,load:V},Symbol.toStringTag,{value:"Module"}));function k(s){let t,e,a,r=s[0].title+"",o,m,c,y=s[0].body+"",u;return{c(){t=h("div"),e=h("div"),a=h("h3"),o=j(r),m=w(),c=h("p"),u=j(y),this.h()},l(i){t=_(i,"DIV",{});var d=f(t);e=_(d,"DIV",{class:!0});var p=f(e);a=_(p,"H3",{});var b=f(a);o=E(b,r),b.forEach(l),m=D(p),c=_(p,"P",{});var g=f(c);u=E(g,y),g.forEach(l),p.forEach(l),d.forEach(l),this.h()},h(){I(e,"class","blog_content")},m(i,d){O(i,t,d),n(t,e),n(e,a),n(a,o),n(e,m),n(e,c),n(c,u)},p:v,i:v,o:v,d(i){i&&l(t)}}}function q(s,t,e){let{data:a}=t;const r=a.post;return s.$$set=o=>{"data"in o&&e(1,a=o.data)},[r,a]}class M extends x{constructor(t){super(),P(this,t,q,k,S,{data:1})}}export{M as component,H as universal};
