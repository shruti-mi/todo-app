import React from 'react';
import logo from './logo.svg';
import './App.css';


function TodoList(props) {
  const todos = props.tasks.map((task, index) => {
      if(props.active == 1)
        return <Todo content={task} id= {index} active={1} onDelete={props.onDelete} onRemove={props.onRemove}/>
      else
        return <Todo content={task} id= {index} active={0} onRemove={props.onRemove}/>
  });

var tasks_length = props.tasks.length;
tasks_length = tasks_length.toString();


//---------------------------CONDITIONAL RENDERING---------------------------

if(props.active)
  var str = "You have "+ tasks_length +" Incompleted todos";

else
  var str = "You have "+ tasks_length +" Completed todos";

  return  (
    <div className = 'list-wrapper'>
      <div className= 'header'>
        {str}
      </div>
      {todos}
    </div>
  );
}


function Todo(props) {

var button = <button className= 'delete-item' onClick={() => {props.onRemove(props.id, props.active)}}> Remove </button>

  if(props.active == 1) {
    return (
      <div className= 'list-item'>
        {props.content} 
        <button className= 'delete-item' onClick={() => {props.onDelete(props.id)}}> Mark as done </button>
        {button}
      </div>
    );
  }

  else {
    return (
      <div className= 'list-item'>
        {props.content} 
        {button}
      </div>
    );
  }
}


class Addtodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newTask === '' ) return;
    this.props.onAdd(this.state.newTask);
    this.setState({newTask: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='add-item'>
        <input type="text" className='input' placeholder="AddTask" value={this.state.newTask} onChange={(e) => this.setState({ newTask: e.target.value})}/>
        <button className='button' > AddTodo </button>
      </form>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
   
    this.state = { 
      count: 0,
      activeTasks: [ "task1", "task2", "task3"],
      completedTasks: ["task4"]
      };
  }


  handleAdd(addTask) {
    if(!addTask.replace(/\s/g, '').length)return;
    var active = [...this.state.activeTasks];
    active.push(addTask);

    this.setState({
      activeTasks: active
    });
  };


  handleDelete(i) {
    var active = [...this.state.activeTasks];
    var completed = [...this.state.completedTasks];
    var itemDeleted = active[i];

    active.splice(i, 1);
    completed.push(itemDeleted);

    this.setState({
      activeTasks: active,
      completedTasks: completed
    });
  };


  handleRemove(i, index) {
    if(index==1) {
      var active = [...this.state.activeTasks];
      active.splice(i, 1);

      this.setState({
        activeTasks: active
      });
    }

    else {
      var completed = [...this.state.completedTasks];
      completed.splice(i, 1);

      this.setState({
        completedTasks: completed
      });
    }
  }


  render() {
  return (
    <div className="wrapper">
      <Addtodo onAdd={this.handleAdd}/>
      <TodoList tasks={this.state.activeTasks} onDelete={this.handleDelete} onRemove={this.handleRemove} active={1}/>
      <TodoList tasks={this.state.completedTasks} onRemove={this.handleRemove} active={0}/>
    </div>
  );
  }
}

export default App;
