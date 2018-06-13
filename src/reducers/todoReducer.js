const todoReducer = (todos = [], action) => {
    switch (action.type) {
      case 'TODO_FETCH_SUCCEEDED':
        console.log('fetch todos succeeded', [...todos, ...action.todo])
        return [...todos, ...action.todo];
        break;
    //   case 'CREATE_TODO':
        // console.log('create todo succeeded', [...todos, ...action.users])
        // return [...users, ...action.users];
        // break;
      default:
        return todos;
        break;
    }
  }
  
  export default todoReducer 
  