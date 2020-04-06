import React from 'react';

import ToDoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

import "./components/Todo.css"

const tasks=[{task: "showOnScreen", id: 254, completed: false}]

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tasks
    };
  }

  addItem = (e, item) =>{
    e.preventDefault();
    const newItem = {
      task: item,
      id: Math.floor(Math.random() * 24) + 1,
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleItem = itemId =>{
    console.log(itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
      <div>
        <h1>Marc's ToDo List</h1>
        <ToDoForm addItem={this.addItem}/>
        {/* <ToDoList tasks={this.state.tasks} /> */}
      </div>
      <div>
        <ToDoList tasks={this.state.tasks} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
      </div>
    );
  }
}

export default App;
