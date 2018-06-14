const createFormReducer = (title = '', action) => {
    switch (action.type) {
      case 'WRITE_TODO_TITLE':
        return String(action.title)
      default:
        return title;
    }
  }
  
  export default createFormReducer 
  