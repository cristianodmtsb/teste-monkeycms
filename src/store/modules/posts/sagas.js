import { call, put, all, takeLatest } from "redux-saga/effects";

import api from "../../../services/api";

import { listPostSuccess } from "./actions";

function* listPosts(action) {
  const response = yield call(api.get, "/posts");

  yield put(listPostSuccess(response.data));
}

// function* addPost(action) {}

export default all([takeLatest("@posts/REQUEST", listPosts)]);
