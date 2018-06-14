import React from 'react'
import { writeTitle } from '../actions/createFormAction'
import { createTodo } from '../actions/todoAction'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = state => {
    // console.log('map state: '+JSON.stringify(state))
    return {
      title: state.form
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      onWriteTitle: (event) => {
        // console.log('dispatch writeTitle: '+event.target.value)
        dispatch(writeTitle(event.target.value))
      },
      onCreateTodo: (todo,title) => {
        // console.log('dispatch onCreate: '+title)
        dispatch(createTodo(todo))
      }
    }
}

const FormInput = styled.input`
  height: 30px
  border: 1px solid lightgray
  border-radius: 5px
`

const FormTitle = styled.p`
  color: gray
  display: inline-block
  margin: 15px
`

const FormAddButton = styled.button`
  color: lightgray
  background: green
  height: 30px
  border: 0px 
  border-radius: 8px
  margin: 8px
  padding: 8px
`

class CreateTodoForm extends React.Component {
    render() {
      const { title,onWriteTitle,onCreateTodo } = this.props
    //   console.log('***title: '+JSON.stringify(title))
      return (
          <React.Fragment>
            <FormTitle>Add to list:</FormTitle>
            <FormInput type="text" value={title} onChange={event => onWriteTitle(event)} />
            <FormAddButton onClick={ () => onCreateTodo({title: title,done: false},JSON.stringify(title)) }>NEW</FormAddButton>
            <br />
        </React.Fragment>
      );
    }
  }

const ConnectedCreateTodoForm = connect(mapStateToProps,mapDispatchToProps)(CreateTodoForm)

class AddForm extends React.Component {
    render() {
        return (<ConnectedCreateTodoForm/>)
    }
}

export { AddForm }