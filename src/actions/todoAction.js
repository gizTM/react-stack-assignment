const fetchTodos = () => ({
    type: 'FETCH_ALL_TODOS'
})

const createTodo = (todo) => ({
    type: 'CREATE_TODO',
    todo: todo
})

const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    todo: todo
})

const deleteTodo = (uid) => ({
    type: 'DELETE_TODO',
    uid: uid
})

export { fetchTodos,createTodo,updateTodo,deleteTodo }