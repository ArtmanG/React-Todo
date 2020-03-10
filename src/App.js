import React from 'react';
import ToDoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

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

toggleCompleted = clickedTaskId => {
  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === clickedTaskId) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })
  });
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

deleteCompleted = () => {
  this.setState({
    todo: this.state.todo.filter((task) => !task.completed),
  })
}


  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
        </div>
        
        <ToDoList 
        todo={this.state.todo}
        toggleCompleted={this.toggleCompleted}
        deleteCompleted={this.deleteCompleted}
        />
        <TodoForm addTask={this.addTask} />
      </div>
    );
  };
};

export default App;
