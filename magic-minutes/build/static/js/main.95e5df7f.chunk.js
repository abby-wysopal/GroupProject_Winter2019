(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(48),u=a.n(r);a(55);var i=function(){return l.a.createElement("footer",null,l.a.createElement("h3",{className:"foot"},"i am the footer"))};var c=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"head"},"Magic Minutes!"))};var o=function(){return l.a.createElement("ul",null,l.a.createElement("li",null,"Today"),l.a.createElement("li",null,"Tomorrow"),l.a.createElement("li",null,"Plan"))},m=a(5),s=a(6),b=a(8),h=a(7),d=a(9),v=a(2),p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A date was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Date:",l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(l.a.Component);var E=function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"checkbox"}),l.a.createElement("p",null,"check the box"))};var f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={value:"Space Mountain"},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Your ride is: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Pick your ride:",l.a.createElement("select",{value:this.state.value,onChange:this.handleChange},l.a.createElement("option",{value:"Pirates"},"Pirates"),l.a.createElement("option",{value:"Autopia"},"Autopia"),l.a.createElement("option",{value:"Haunted Mansion"},"Haunted Mansion"),l.a.createElement("option",{value:"Space Mountain"},"Space Mountain"),l.a.createElement("option",{value:"Splash Mountain"},"Splash Mountain"))),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(l.a.Component),O=a(21),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(b.a)(this,Object(h.a)(t).call(this,e))).state={chartData:{labels:["January","","","February","","","March","","","April","","","May","","","June","","","July","","","August","","","September","","","October","","","November","","","December"],datasets:[{label:"Park Population",data:[55.8,45.7,37.54545455,40.8,45.55555556,47.55555556,39.8,48.6,52.63636364,50.1,44.3,50.7,51.4,49.4,55.09090909,53,51.3,47.6,44.6,51.2,53.09090909,47.9,45.5,46,43,41.4,43.9,55.8,41.4,43.9,40.1,53.9,45.4,38.3,41.3,67.11111111],borderColor:"rgba(255, 206, 86, .6)",backgroundColor:"rgba(255, 206, 86, .6)"}]}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"chart"},l.a.createElement(O.b,{data:this.state.chartData,options:{title:{display:!0,text:"Disneyland Park Population",fontSize:25},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}))}}]),t}(n.Component);n.Component;var y=function(){return l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement(c,null),l.a.createElement(o,null),l.a.createElement(p,null),l.a.createElement(E,null)),l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement(j,null),l.a.createElement(i,null)))};u.a.render(l.a.createElement(y,null),document.getElementById("root"))},50:function(e,t,a){e.exports=a(150)},55:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.95e5df7f.chunk.js.map