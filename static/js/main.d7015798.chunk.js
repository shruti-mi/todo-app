(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(8),c=a.n(o),i=(a(14),a(2)),l=a(1),r=a(3),d=a(4),m=a(6),v=a(5);a(15),a(16);function u(e){var t=e.tasks.map((function(t,a){return 1==e.active?s.a.createElement(h,{content:t,id:a,active:1,onDelete:e.onDelete,onRemove:e.onRemove}):s.a.createElement(h,{content:t,id:a,active:0,onRemove:e.onRemove})})),a=e.tasks.length;if(a=a.toString(),e.active)var n="You have "+a+" Incompleted todos";else n="You have "+a+" Completed todos";return s.a.createElement("div",{className:"list-wrapper"},s.a.createElement("div",{className:"header"},n),t)}function h(e){var t=s.a.createElement("button",{className:"delete-item",onClick:function(){e.onRemove(e.id,e.active)}}," Remove ");return 1==e.active?s.a.createElement("div",{className:"list-item"},e.content,s.a.createElement("button",{className:"delete-item",onClick:function(){e.onDelete(e.id)}}," Mark as done "),t):s.a.createElement("div",{className:"list-item"},e.content,t)}var k=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),""!==n.state.newTask&&(n.props.onAdd(n.state.newTask),n.setState({newTask:""}))},n.state={newTask:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.handleSubmit,className:"add-item"},s.a.createElement("input",{type:"text",className:"input",placeholder:"AddTask",value:this.state.newTask,onChange:function(t){return e.setState({newTask:t.target.value})}}),s.a.createElement("button",{className:"button"}," AddTodo "))}}]),a}(s.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleAdd=n.handleAdd.bind(Object(l.a)(n)),n.handleDelete=n.handleDelete.bind(Object(l.a)(n)),n.handleRemove=n.handleRemove.bind(Object(l.a)(n)),n.state={count:0,activeTasks:["task1","task2","task3"],completedTasks:["task4"]},n}return Object(d.a)(a,[{key:"handleAdd",value:function(e){if(e.replace(/\s/g,"").length){var t=Object(i.a)(this.state.activeTasks);t.push(e),this.setState({activeTasks:t})}}},{key:"handleDelete",value:function(e){var t=Object(i.a)(this.state.activeTasks),a=Object(i.a)(this.state.completedTasks),n=t[e];t.splice(e,1),a.push(n),this.setState({activeTasks:t,completedTasks:a})}},{key:"handleRemove",value:function(e,t){if(1==t){var a=Object(i.a)(this.state.activeTasks);a.splice(e,1),this.setState({activeTasks:a})}else{var n=Object(i.a)(this.state.completedTasks);n.splice(e,1),this.setState({completedTasks:n})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(k,{onAdd:this.handleAdd}),s.a.createElement(u,{tasks:this.state.activeTasks,onDelete:this.handleDelete,onRemove:this.handleRemove,active:1}),s.a.createElement(u,{tasks:this.state.completedTasks,onRemove:this.handleRemove,active:0}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d7015798.chunk.js.map