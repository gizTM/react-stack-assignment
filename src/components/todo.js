import React from 'react'
import { connect } from 'react-redux'
import { updateTodo,deleteTodo } from '../actions/todoAction'
import styled from 'styled-components'

const mapStateToProps = state => {
    return {
      todos: state.todo
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTodo: (todo) => {
            // console.log('dispatch update: '+JSON.stringify(todo))
            dispatch(updateTodo(todo))
        },
        onDeleteTodo: (uid) => {
            // console.log('dispatch delete: '+uid)
            dispatch(deleteTodo(uid))
        }
    }
}

const ItemFragment = styled.div`
    border: 1px solid transparent
`

const ItemDone = styled.input`
    width: 30px
    height: 30px
    background-color: ${props => props.checked ? 'gray' : 'white'}
    border-radius: 70%
    vertical-align: middle
    border: 1px solid #ccc
    -webkit-appearance: none
    outline: none
    cursor: pointer
`

const ItemTitle = styled.p`
    display: inline-block
    min-width: 350px
    color: gray
    text-align: left
    padding-left: 30px
    text-decoration: ${props => props.checked ? 'line-through' : 'none'}
    // text-decoration: underline
`

const ItemDelete = styled.button`
    color: red
    background: transparent
    font-size: 20px
    height: 30px
    border: 0px 
    border-radius: 8px
    margin: 8px
    padding: 8px
`

class TodoItem extends React.Component {
    render() {
        const { todo, onUpdateTodo, onDeleteTodo } = this.props
        // console.log('done: '+todo.done)
        // console.log('todo: '+JSON.stringify(todo))
        return (
            <ItemFragment>
                <ItemDone type='checkbox' checked={todo.done} onChange={ () => onUpdateTodo({ uid: todo.uid, title: todo.title, done: !todo.done }) } /> 
                <ItemTitle checked={todo.done}>{todo.title}</ItemTitle>
                <ItemDelete onClick={() => onDeleteTodo(todo.uid)}>x</ItemDelete> <br/>
            </ItemFragment>  
        )
    }
}

class TodoList extends React.Component {
    itemStyle = {
        display: 'inline-block'
    }
    render() {
        const { todos } = this.props;
        const itemRows = todos.map((item,i) => {
            return (
                <ConnectedTodoItem key={i} todo={item} />
            )
        })
        return (
            <React.Fragment>{itemRows}</React.Fragment>
        )
    }
}

const ConnectedTodoItem = connect(mapStateToProps,mapDispatchToProps)(TodoItem)
export { TodoList, ConnectedTodoItem }