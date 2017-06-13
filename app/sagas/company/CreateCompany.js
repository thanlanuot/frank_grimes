import { put, takeEvery } from 'redux-saga/effects'
import * as api from '~/app/api'
import { SAGA_CREATE_COMPANY, CREATE_COMPANY } from '~/app/reducers/Company'
import { createAction } from 'redux-actions'

function* perform(_action) {
  try {
    const company = yield api.createCompany(_action.payload)
    yield put(createAction(CREATE_COMPANY)({company}))
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_CREATE_COMPANY, perform)
}

export default watch