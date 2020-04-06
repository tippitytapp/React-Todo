import React from 'react';


const tasks=[]

class App extends React.Component {
  constructor(){
    super();
    this.state={
      tasks
    };
  }

  addTodoListItem = (e, item) =>{
    e.preventDefault();
    const addedItem = {
      task: item,
      id: Math.floor(Math.random() * 24) + 1,
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, addedItem]
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Marc's ToDo List</h1>

      </div>
    );
  }
}

export default App;
