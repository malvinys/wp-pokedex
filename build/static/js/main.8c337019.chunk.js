(this["webpackJsonpwp-pokedex"]=this["webpackJsonpwp-pokedex"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(16),r=n.n(c),o=n(5),s=n(13),i=n(3),u=n.n(i),p=n(8),l="https://pokeapi.co/api/v2/",m="pokemon",d="type",f=n(35),b=n(34),j=n.n(b),h={backend:function(){var e=Object(p.a)(u.a.mark((function e(t,n,a){var c,r,o,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>3&&void 0!==s[3]?s[3]:{},r=Object(f.a)({},c),e.prev=2,e.next=5,j()({method:t,url:"".concat(l).concat(n),data:a,headers:r});case 5:return o=e.sent,e.abrupt("return",o.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n,a){return e.apply(this,arguments)}}()},x=Object(s.b)({name:"pokemonFilters",initialState:{types:[]},reducers:{setTypes:function(e,t){e.types=t.payload}}}),k=x.actions,O=function(e){return e.pokemonFilters},v=x.reducer,g=Object(s.b)({name:"pokemons",initialState:{pokemons:null,pokemon:null,pokemonCompares:null,floatingCompareBtn:[]},reducers:{setPokemons:function(e,t){e.pokemons=t.payload},setAdditionalPokemons:function(e,t){var n=t.payload,a=n.next,c=n.data;e.pokemons.next=a;for(var r=0;r<c.length;r++){var o=c[r];e.pokemons.data.push(o)}},setPokemon:function(e,t){e.pokemon=t.payload},setPokemonCompares:function(e,t){e.pokemonCompares=t.payload},setFloatingCompareBtn:function(e,t){e.floatingCompareBtn.push(t.payload)},setFloatingCompareBtnReset:function(e){e.floatingCompareBtn=[]}}}),y=g.actions,w=function(e){return e.pokemons},N=g.reducer;function C(e){return P.apply(this,arguments)}function P(){return(P=Object(p.a)(u.a.mark((function e(t){var n,a,c,r,o,s,i,p,l,d,f,b;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.backend("GET","".concat(m,"/").concat(t));case 2:return n=e.sent,a=n.name,c=n.sprites,r=n.types,o=n.stats,s=c.front_default,i=r.map((function(e){return e.type.name})),p=o.filter((function(e){return"hp"===e.stat.name})).map((function(e){return e.base_stat}))[0],l=o.filter((function(e){return"attack"===e.stat.name})).map((function(e){return e.base_stat}))[0],d=o.filter((function(e){return"defense"===e.stat.name})).map((function(e){return e.base_stat}))[0],f=o.filter((function(e){return"speed"===e.stat.name})).map((function(e){return e.base_stat}))[0],b=p+l+d+f,e.abrupt("return",{id:t,name:a,image:s,types:i,hp:p,attack:l,defense:d,speed:f,overall:b});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a,c,r,o,s,i,p;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.count,a=t.next,c=t.results,r=[],o=0;case 4:if(!(o<c.length)){e.next=14;break}return s=c[o].url,i=s.replace("".concat(l).concat(m),"").replace(/\//g,""),e.next=9,C(i);case 9:p=e.sent,r.push(p);case 11:o++,e.next=4;break;case 14:return e.abrupt("return",{count:n,next:a,data:r});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(u.a.mark((function e(t,n){var a,c,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n);case 2:a=e.sent,c=a.count,r=a.next,o=a.data,t(y.setPokemons({count:c,next:r,data:o}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(u.a.mark((function e(t,n){var a,c,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n);case 2:a=e.sent,c=a.count,r=a.next,o=a.data,t(y.setAdditionalPokemons({count:c,next:r,data:o}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){var t=Object(p.a)(u.a.mark((function t(n){var a,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=7;break}return t.next=3,h.backend("GET",m);case 3:a=t.sent,A(n,a),t.next=12;break;case 7:return c=e.replace("".concat(l).concat(m),""),t.next=10,h.backend("GET","".concat(m).concat(c));case 10:r=t.sent,B(n,r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},F=Object(s.a)({reducer:{pokemonFilters:v,pokemons:N},middleware:Object(s.c)({serializableCheck:!1})}),I=(n(63),n(18)),T=n(4),D=(n(64),n(1)),G=function(e){var t=e.id,n=e.name,a=e.image,c=e.types,r=e.hp,s=e.attack,i=e.defense,u=e.speed,p=e.status,l=e.btnDetail,m=e.btnAddCompare,d=Object(o.b)(),f=Object(o.c)(w).floatingCompareBtn,b=f.filter((function(e){return e.id===t})).length>0||2===f.length;return Object(D.jsx)(D.Fragment,{children:t&&Object(D.jsxs)("div",{className:"card-item",children:[Object(D.jsx)("img",{src:a,alt:""}),Object(D.jsx)("h2",{children:n}),Object(D.jsx)("div",{className:"card-item-type",children:c.map((function(e){return Object(D.jsx)("p",{children:e},"".concat(e))}))}),r&&Object(D.jsxs)("p",{children:["HP:\xa0",r]}),s&&Object(D.jsxs)("p",{children:["Attack:\xa0",s]}),i&&Object(D.jsxs)("p",{children:["Defense:\xa0",i]}),u&&Object(D.jsxs)("p",{children:["Speed:\xa0",u]}),p&&Object(D.jsx)("p",{className:"card-item-status",children:p}),l&&Object(D.jsx)("a",{href:"/detail/".concat(t),className:"btn btn-primary card-item-btn-detail",children:"Detail"}),m&&Object(D.jsx)("button",{type:"button",className:"btn btn-warning card-item-btn-compare",disabled:b,onClick:function(){d(y.setFloatingCompareBtn({id:t,name:n}))},children:"Add Compare"})]})})};G.defaultProps={id:null,name:null,image:"https://i1.wp.com/www.cssscript.com/wp-content/uploads/2014/10/iOS-OS-X-Style-Pure-CSS-Loading-Spinner.jpg?fit=400%2C300&ssl=1",types:[],hp:null,attack:null,defense:null,speed:null,status:null,btnDetail:!1,btnAddCompare:!1};var _=G,L=(n(66),function(e){var t=e.pokemon1Id,n=e.pokemon1Name,a=e.pokemon2Id,c=e.pokemon2Name,r=Object(o.b)(),s=t||a,i=!(t&&a),u=t?"/".concat(t):"",p=a?"/".concat(a):"",l="/compare".concat(u).concat(p);return Object(D.jsx)(D.Fragment,{children:s&&Object(D.jsxs)("div",{className:"floating-compare",children:[Object(D.jsxs)("div",{className:"floating-compare-top",children:[Object(D.jsx)("p",{className:"floating-compare-top-pokemon-1",children:n}),Object(D.jsx)("p",{className:"floating-compare-top-vs",children:"VS"}),Object(D.jsx)("p",{className:"floating-compare-top-pokemon-2",children:c})]}),Object(D.jsxs)("div",{className:"floating-compare-bottom",children:[Object(D.jsx)("button",{type:"button",className:"btn btn-secondary floating-compare-bottom-close",onClick:function(){r(y.setFloatingCompareBtnReset())},children:"Close"}),Object(D.jsx)("button",{type:"button",className:"btn btn-warning floating-compare-bottom-submit",disabled:i,onClick:function(){window.location=l},children:"Compare"})]})]})})});L.defaultProps={pokemon1Id:null,pokemon1Name:"???",pokemon2Id:null,pokemon2Name:"???"};var R=L,W=(n(67),function(){var e=Object(o.b)(),t=Object(o.c)(O).types,n=Object(o.c)(w),c=n.pokemons,r=n.floatingCompareBtn,s=r.length>0?r[0]:null,i=r.length>1?r[1]:null,f=s?s.id:null,b=s?s.name:null,j=i?i.id:null,x=i?i.name:null;Object(a.useEffect)((function(){e(function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.backend("GET",d);case 2:n=e.sent,t(k.setTypes(n.results));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(E())}),[e]);var v=function(t){var n,a=t.target.value;e((n=a,function(){var e=Object(p.a)(u.a.mark((function e(t){var a,c,r,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.replace("".concat(l).concat(d),"").replace(/\//g,""),c=a?"".concat(d,"/").concat(a):"".concat(m),e.next=4,h.backend("GET",c);case 4:r=e.sent,o=r.results?r.results:r.pokemon.filter((function(e,t){return t<20})).map((function(e){return e.pokemon})),s=r.count?r.count:o.length,i=r.next?r.next:null,A(t,{count:s,next:i,results:o});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(D.jsxs)("div",{className:"home-page",children:[Object(D.jsx)("h1",{className:"home-page-title",children:"Pokedex"}),Object(D.jsx)("div",{className:"home-page-filter",children:Object(D.jsx)("div",{className:"form-group",children:Object(D.jsxs)("select",{className:"form-control",onChange:function(e){return v(e)},children:[Object(D.jsx)("option",{value:"",children:"All Types"}),t.map((function(e){return Object(D.jsx)("option",{value:e.url,children:e.name},e.url)}))]})})}),Object(D.jsx)("div",{className:"home-page-card-container",children:c&&c.data.map((function(e){return Object(D.jsx)(_,{id:e.id,name:e.name,image:e.image,types:e.types,btnDetail:!0,btnAddCompare:!0},e.id)}))}),c&&c.next&&Object(D.jsx)("button",{type:"button",className:"btn btn-success home-page-card-load-more",onClick:function(){return t=c.next,void e(E(t));var t},children:"Load More"}),Object(D.jsx)(R,{pokemon1Id:f,pokemon1Name:b,pokemon2Id:j,pokemon2Name:x})]})}),H=(n(68),function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("a",{href:"/",type:"button",className:"btn btn-secondary btn-redirect-to-home",children:"Back To Home"})})}),J=(n(69),function(){var e=Object(T.f)().id,t=Object(o.b)(),n=Object(o.c)(w).pokemon;return Object(a.useEffect)((function(){t(function(e){return function(){var t=Object(p.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:a=t.sent,n(y.setPokemon(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]),Object(D.jsxs)("div",{className:"detail-page",children:[n&&Object(D.jsx)(_,{id:n.id,name:n.name,image:n.image,types:n.types,hp:n.hp,attack:n.attack,defense:n.defense,speed:n.speed},n.id),Object(D.jsx)(H,{})]})}),z=(n(71),function(){var e=Object(T.f)(),t=e.idPokemon1,n=e.idPokemon2,c=Object(o.b)(),r=Object(o.c)(w).pokemonCompares,s=r?r.pokemon1:null,i=r?r.pokemon2:null,l=null,m=null;return s&&i&&(s.overall>i.overall?(l="WIN",m="LOSE"):s.overall<i.overall?(l="LOSE",m="WIN"):(l="DRAW",m="DRAW")),Object(a.useEffect)((function(){var e,a;c((e=t,a=n,function(){var t=Object(p.a)(u.a.mark((function t(n){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:return c=t.sent,t.next=5,C(a);case 5:r=t.sent,n(y.setPokemonCompares({pokemon1:c,pokemon2:r}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[c]),Object(D.jsxs)("div",{className:"compare-page",children:[s&&Object(D.jsx)(_,{id:s.id,name:s.name,image:s.image,types:s.types,hp:s.hp,attack:s.attack,defense:s.defense,speed:s.speed,status:l},s.id),i&&Object(D.jsx)(_,{id:i.id,name:i.name,image:i.image,types:i.types,hp:i.hp,attack:i.attack,defense:i.defense,speed:i.speed,status:m},i.id),Object(D.jsx)(H,{})]})}),M=function(){return Object(D.jsx)(I.a,{children:Object(D.jsxs)(T.c,{children:[Object(D.jsx)(T.a,{exact:!0,path:"/",component:W}),Object(D.jsx)(T.a,{exact:!0,path:"/detail/:id",component:J}),Object(D.jsx)(T.a,{exact:!0,path:"/compare/:idPokemon1/:idPokemon2",component:z})]})})};var V=function(){return Object(D.jsx)("div",{className:"App",children:Object(D.jsx)("div",{className:"container",children:Object(D.jsx)(M,{})})})};r.a.render(Object(D.jsx)(o.a,{store:F,children:Object(D.jsx)(V,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.8c337019.chunk.js.map