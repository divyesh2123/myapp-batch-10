import { takeEvery, all, call, put, takeLeading,delay } from 'redux-saga/effects';
import { addPost } from '../apicall/postapi';






function* addPostSaga(action) {
  try {
   
    const data = yield call(addPost, action.payload);
    console.log(data);
    yield put({type:'SUC', payload: data});
  } catch (error) {
    yield put({type:'FAIL', payload : error});
  }
}

export function* addPostWatcher() {
  yield takeLeading('POST_REQ', addPostSaga);
}

