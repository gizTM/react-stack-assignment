import { call, put, takeEvery } from 'redux-saga/effects'
import { fetch, create, update, del } from '../services/webService'

const todoURL = 'http://localhost:5000/todos/'

function* todoSaga() {
  yield takeEvery('FETCH_ALL_TODOS', fetchTodo);
  yield takeEvery('CREATE_TODO', createTodo);
  yield takeEvery('UPDATE_TODO', updateTodo);
  yield takeEvery('DELETE_TODO', deleteTodo);
}

function* fetchTodo() {
  try {
    const todos = yield call(fetch, todoURL);
    console.log('fetched todo: '+JSON.stringify(todos))
    yield put({ 
      type: 'TODO_FETCH_SUCCEEDED', 
      todos: todos.result 
    });
  } catch (error) {
    yield put({ 
      type: 'TODO_FETCH_FAILED', 
      todos: [] 
    });
  }
}

function* createTodo(action) {
  try {
    console.log('create action: '+JSON.stringify(action))
    yield call(create, todoURL, action.todo);
    // console.log('create todo: '+JSON.stringify(todos))
    const fetchedTodos = yield call(fetch, todoURL)
    console.log('refetch todo: '+JSON.stringify(fetchedTodos))
    yield put({
      type: 'TODO_FETCH_SUCCEEDED',
      todos: fetchedTodos.result
    })
  } catch (error) {
    yield put({ 
      type: 'TODO_CREATE_FAILED', 
      todos: [] 
    });
  }
}

function* updateTodo(action) {
  try {
    console.log('update todo: '+JSON.stringify(action.todo.uid))
    yield call(update, todoURL+action.todo.uid, action.todo);
    const fetchedTodos = yield call(fetch, todoURL)
    console.log('refetch todo: '+JSON.stringify(fetchedTodos))
    yield put({
      type: 'TODO_FETCH_SUCCEEDED',
      todos: fetchedTodos.result
    })
  } catch (error) {
    yield put({ 
      type: 'TODO_UPDATE_FAILED', 
      todos: [] 
    });
  }
}

function* deleteTodo(action) {
  try {
    const todos = yield call(del, todoURL+action.uid);
    console.log('delete todo: '+JSON.stringify(todos))
    const fetchedTodos = yield call(fetch, todoURL)
    console.log('refetch todo: '+JSON.stringify(fetchedTodos))
    yield put({
      type: 'TODO_FETCH_SUCCEEDED',
      todos: fetchedTodos.result
    })
  } catch (error) {
    yield put({ 
      type: 'TODO_DELETE_FAILED', 
      todos: [] 
    });
  }
}

export { todoSaga }