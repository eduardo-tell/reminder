(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{100:function(t,e,n){},101:function(t,e,n){},103:function(t,e,n){"use strict";n.r(e);var a,i,r=n(0),c=n.n(r),o=n(32),s=n.n(o),l=(n(94),n(16)),u=n(20),h=n(21),j=n(26),b=n(25),p=n(158),d=n(160),O=n(163),f=n(161),v=n(154),x=n(162),m=["title","titleId"];function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},y.apply(this,arguments)}function g(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function k(t,e){var n=t.title,c=t.titleId,o=g(t,m);return r.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:e,"aria-labelledby":c},o),n?r.createElement("title",{id:c},n):null,a||(a=r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"})),i||(i=r.createElement("path",{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"})))}var w=r.forwardRef(k),N=(n.p,n(2)),C=(p.a,function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"apagar",value:function(){var t=this.props.indice;this.props.apagarNota(t)}},{key:"render",value:function(){return Object(N.jsxs)(d.a,{sx:{minWidth:275},children:[Object(N.jsxs)(f.a,{children:[Object(N.jsx)(x.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:this.props.titulo}),Object(N.jsx)(x.a,{variant:"h5",component:"div",children:this.props.text})]}),Object(N.jsx)(O.a,{children:Object(N.jsxs)(v.a,{size:"small",indice:this.props.indice,onClick:this.apagar.bind(this),children:["Excluir ",Object(N.jsx)(w,{})," "]})})]})}}]),n}(r.Component)),E=C,_=n(155),I=n(153),S=(n(100),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(N.jsx)(_.a,{spacing:2,container:!0,children:this.props.notas.map((function(e,n){return Object(N.jsx)(I.a,{mb:3,display:"flex",children:Object(N.jsx)(E,{indice:n,apagarNota:t.props.apagarNota,titulo:e.titulo,text:e.texto})},n)}))})}}]),n}(r.Component)),z=S,T=n(151),H=(n(101),function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).titulo="",a.texto="",a}return Object(h.a)(n,[{key:"_mudancaTitulo",value:function(t){this.titulo=t.target.value}},{key:"_mudancaTexto",value:function(t){this.texto=t.target.value}},{key:"_criarNota",value:function(t){t.preventDefault(),this.props.criarNota(this.titulo,this.texto)}},{key:"render",value:function(){return Object(N.jsxs)("form",{className:"form",onSubmit:this._criarNota.bind(this),children:[Object(N.jsx)(T.a,{type:"text",id:"outlined-basic",label:"Titulo",variant:"outlined",onChange:this._mudancaTitulo.bind(this)}),Object(N.jsx)(T.a,{onChange:this._mudancaTexto.bind(this),label:"Escreva sua nota",multiline:!0,maxRows:4}),Object(N.jsx)(v.a,{type:"submit",variant:"outlined",children:"Adicionar"})]})}}]),n}(r.Component)),M=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"_eventoInput",value:function(t){console.log(t),"Enter"==t.key&&console.log("Categoria")}},{key:"render",value:function(){return Object(N.jsxs)("form",{children:[Object(N.jsx)("ul",{children:Object(N.jsxs)("li",{children:[" ",Object(N.jsx)("span",{children:" Item "})," "]})}),Object(N.jsx)(T.a,{type:"text",onKeyUp:this._eventoInput.bind(this),id:"outlined-basic",label:"Pesquisar",variant:"outlined"})]})}}]),n}(r.Component),P=M,V=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).state={notas:[]},t}return Object(h.a)(n,[{key:"criarNota",value:function(t,e){var n={titulo:t,texto:e},a={notas:[].concat(Object(l.a)(this.state.notas),[n])};this.setState(a)}},{key:"deletarNota",value:function(t){var e=this.state.notas;e.splice(t,1),console.log("Deletar"),this.setState({notas:e})}},{key:"render",value:function(){return Object(N.jsxs)(_.a,{container:!0,spacing:2,children:[Object(N.jsx)(_.a,{item:!0,lg:2,children:Object(N.jsx)(H,{criarNota:this.criarNota.bind(this)})}),Object(N.jsxs)(_.a,{item:!0,lg:10,children:[Object(N.jsx)(P,{}),Object(N.jsx)(z,{apagarNota:this.deletarNota.bind(this),notas:this.state.notas})]})]})}}]),n}(r.Component);s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(V,{})}),document.getElementById("root"))},94:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.6cf615af.chunk.js.map