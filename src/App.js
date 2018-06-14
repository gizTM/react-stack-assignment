import React  from 'react';
import './App.css';
import { connect } from 'react-redux'
import { AddForm } from './components/createTodoForm'
import { TodoList } from './components/todo'
import { fetchTodo } from './actions/todoAction'
import styled from 'styled-components'

const mapStateToProps = state => {
  return {
    todos: state.todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchTodo: () => {
      dispatch(fetchTodo())
    }
  }
}

const TodoForm = styled.div`
  margin: 50px
  // background-color: lightgray
`

class App extends React.Component {
  componentDidMount() {
    // console.log('componentDidMount()')
    this.props.onFetchTodo()
  }

  render() {
    const { todos } = this.props;
    // console.log('render app: '+todos)
    return (
      <TodoForm className="App">
        {/* <Counter /> */}
        {/* <button onClick={ onFetchTodo }>fetch todos ({todos.length})</button> <br /> */}
        {/* <button onClick={ () => onCreateTodo({title: 'abc',done: false}) }>new todo</button> <br /> */}
        <AddForm />
        <TodoList todos={ todos } /> <br />
      </TodoForm>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
