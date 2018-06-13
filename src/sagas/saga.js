import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetch, create, update, del } from '../services/webService'

function* todoSaga() {
  yield takeEvery('FETCH_ALL_TODOS', fetchTodo);
}

function* fetchTodo() {
  try {
    const todos = yield call(fetch, 'https://localhost:5000/todos');
    yield put({ 
      type: 'TODO_FETCH_SUCCEEDED', 
      todos: todos 
    });
  } catch (error) {
    yield put({ 
      type: 'TODO_FETCH_FAILED', 
      todos: [] 
    });
  }
}

export {
  todoSaga
}