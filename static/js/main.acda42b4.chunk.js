(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(t,n,e){},16:function(t,n,e){"use strict";e.r(n);var o=e(3),r=e.n(o),s=e(4),a=e(5),c=e(7),i=e(6),l=e(1),u=e.n(l);e(12),e(13),e(14);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){return d().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).filter((function(t,n){return n<5}))}))},h=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},m=e(0),b=function(t){var n=t.goods;return Object(m.jsx)("ul",{className:"main__list",children:n.map((function(t){return Object(m.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},j=function(t){Object(c.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t.handleClick=function(n){n.preventDefault(),"allGoods"===n.currentTarget.name&&d().then((function(n){t.setState({goods:n})})),"firstFive"===n.currentTarget.name&&f().then((function(n){t.setState({goods:n})})),"redGoods"===n.currentTarget.name&&h().then((function(n){t.setState({goods:n})}))},t}return Object(a.a)(e,[{key:"render",value:function(){var t=this.state.goods;return Object(m.jsxs)("main",{className:"main container",children:[Object(m.jsx)("h1",{className:"main__title",children:"Dynamic list of Goods"}),Object(m.jsxs)("div",{className:"main__buttons",children:[Object(m.jsx)("button",{className:"button is-success",name:"allGoods",type:"button",onClick:this.handleClick,children:"Load All goods"}),Object(m.jsx)("button",{className:"button is-warning",type:"button",name:"firstFive",onClick:this.handleClick,children:"Load 5 first goods"}),Object(m.jsx)("button",{className:"button is-danger",type:"button",name:"redGoods",onClick:this.handleClick,children:"Load red goods"})]}),Object(m.jsx)(b,{goods:t})]})}}]),e}(u.a.Component),g=j;r.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.acda42b4.chunk.js.map