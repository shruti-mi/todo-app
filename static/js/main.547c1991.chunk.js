(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),o=a.n(c),i=(a(14),a(2)),r=a(1),l=a(3),d=a(4),u=a(6),m=a(5);a(15),a(16);function h(e){return s.a.createElement("div",{className:"header"},s.a.createElement("h4",null,"You have ",e.numTodo," tasks todo"))}function v(e){var t=e.tasks.map((function(t,a){return s.a.createElement(p,{content:t,id:a,onDelete:e.onDelete})}));return s.a.createElement("div",{className:"list-wrapper"},t)}function p(e){return s.a.createElement("div",{className:"list-item"},e.content,s.a.createElement("button",{className:"delete-item",onClick:function(){e.onDelete(e.id)}}," X "))}var k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),""!==n.state.newTask&&(n.props.onAdd(n.state.newTask),n.setState({newTask:""}))},n.state={newTask:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleSubmit,className:"add-item"},s.a.createElement("input",{type:"text",className:"input",placeholder:"AddTask",value:this.state.newTask,onChange:function(t){return e.setState({newTask:t.target.value})}}),s.a.createElement("button",{className:"button"}," AddTodo "))}}]),a}(s.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleAdd=n.handleAdd.bind(Object(r.a)(n)),n.handleDelete=n.handleDelete.bind(Object(r.a)(n)),n.state={count:0,activeTasks:["task2","task3","task1"],completedTasks:[]},n}return Object(d.a)(a,[{key:"handleAdd",value:function(e){if(e.replace(/\s/g,"").length){var t=Object(i.a)(this.state.activeTasks);t.push(e),this.setState({activeTasks:t})}}},{key:"handleDelete",value:function(e){var t=Object(i.a)(this.state.activeTasks),a=Object(i.a)(this.state.completedTasks),n=t[e];t.splice(e,1),a.push(n),this.setState({activeTasks:t,completedTasks:a})}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(h,{numTodo:this.state.activeTasks.length}),s.a.createElement(v,{tasks:this.state.activeTasks,onDelete:this.handleDelete}),s.a.createElement(k,{onAdd:this.handleAdd}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.547c1991.chunk.js.map