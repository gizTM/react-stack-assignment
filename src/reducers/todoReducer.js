const todoReducer = (todos = [], action) => {
    switch (action.type) {
      case 'TODO_FETCH_SUCCEEDED':
        console.log('fetch todos succeeded', [...todos, ...action.todos])
        todos = []
        return [...todos,...action.todos];
      case 'TODO_CREATE_SUCCEEDED':
        console.log('create todo succeeded', [...todos, ...action.todos])
        return [...todos, ...action.todos];
      case 'TODO_UPDATE_SUCCEEDED':
        console.log('update todo succeeded', [...todos, ...action.todos])
        return [...todos, ...action.todos]
      case 'TODO_DELETE_SUCCEEDED':
        console.log('delete todo succeeded', [...todos, ...action.todos])
        return [...todos, ...action.todos]
      default:
        return todos;
    }
  }
  
  export default todoReducer 
  