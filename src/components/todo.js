import React, { Component } from 'react'

class TodoItem extends React.Component {
    detailStyle = {
        display: 'inline-block',
        minWidth: '30px'
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.onUpdateTodo}>done</button> 
                <p style={this.detailStyle}>{this.props.todo}</p>
                <button onClick={this.props.onDeleteTodo}>delete</button>
            </React.Fragment>  
        )

    }
}

class TodoList extends React.Component {
    itemStyle = {
        display: 'inline-block'
    }
    render() {
        const { todos, onFetchTodo, onCreateTodo, onUpdateTodo, onDeleteTodo } = this.props;
        const itemRows = todos.map(item => {
            return (
                <TodoItem todo={item} onFetchTodo={onFetchTodo} onCreateTodo={onCreateTodo} 
                onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
            )
        })
        return (
            <React.Fragment>{itemRows}</React.Fragment>
        )
    }
}

export { TodoList, TodoItem }