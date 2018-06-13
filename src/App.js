import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Counter from './components/counter'
import { TodoList, TodoItem } from './components/todo'
import { fetchTodos,createTodo,updateTodo,deleteTodo } from './actions/todoAction'
import axios from 'axios'

const mapStateToProps = state => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTodo: () => {
      dispatch(fetchTodos())
    },
    onCreateTodo: (todo) => {
      dispatch(createTodo(todo))
    },
    onUpdateTodo: (todo) => {
      dispatch(updateTodo(todo))
    },
    onDeleteTodo: (uid) => {
      dispatch(deleteTodo(uid))
    }
  }
}

class App extends Component {
  // componentDidMount() {
  //   axios.get('localhost:5000/todos') // Get user details
  //     .then(response => {
  //       // const todoItems = response;
  //       console.log('todoItems: '+response)
  //   }).catch(err => { console.log('catch err: '+err) })
  // }

  render() {
    const { todos, onFetchTodo, onCreateTodo, onUpdateTodo, onDeleteTodo } = this.props;
    console.log('fetched todos: '+todos)
    return (
      <div className="App">
        {/* <Counter /> */}
        <button onClick={onFetchTodo}>fetch todos</button>
        <TodoList todos={ todos } onFetchTodo={onFetchTodo} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
