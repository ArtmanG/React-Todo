import React from 'react';
import ToDoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todo = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor() {
  super();
  this.state = {
    todo,
    name: ''
  };
};

addTask = taskName => {
  const newTask = {
    name: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todo: [...this.state.todo, newTask]
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList 
        todo={this.state.todo}
        />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  };
};

export default App;
