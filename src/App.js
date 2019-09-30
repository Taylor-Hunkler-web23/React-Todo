import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js'
import { isTemplateElement } from '@babel/types';

const todoData =
  [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      data: todoData

    };


  }
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false

    }
    this.setState({
      data: [...this.state.data, newTodo]

    })

  }

  toggleTodo = id => {
    this.setState({
      data: this.state.data.map(todo => {
        if (todo.id === id) {

          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(todo => !todo.completed)

    })

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList
          data={this.state.data}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
