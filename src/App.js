import React from 'react';
import logo from './logo.svg';
import './App.css';


function Header(props) {
    return (
      <div className= 'header'>
        You have {props.numTodo} tasks todo
      </div>
    )
}


function TodoList(props) {
  const todos = props.tasks.map((task, index) => {
        return <Todo content={task} id= {index} onDelete={props.onDelete} />
  });
  return  (
    <div className = 'list-wrapper'>
      {todos}
    </div>
  );
}


function Todo(props) {
  return (
    <div className= 'list-item'>
      {props.content} 
      <button className= 'delete-item' onClick={() => {props.onDelete(props.id)}}> X </button>
    </div>
  );
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
   
    this.state = { 
      count: 0,
      activeTasks: [ "task1", "task2", "task3"],
      completedTasks: []
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


  render() {
  return (
    <div className="wrapper">
      <Header numTodo = {this.state.activeTasks.length} />
      <TodoList tasks={this.state.activeTasks} onDelete={this.handleDelete}/>
      <Addtodo onAdd={this.handleAdd}/>
    </div>
  );
  }
}

export default App;
