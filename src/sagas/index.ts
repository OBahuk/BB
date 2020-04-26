import { put, takeEvery, select} from 'redux-saga/effects'
import {
    Request,
    AppState,
    RemoveRequestAction,
    AddRequestAction,
    REMOVE_REQUEST,
    SET_REQUESTS,
    ADD_REQUEST
} from '../types';

const getRequests = (state: AppState) => state.requests;

function* removeRequest(action: RemoveRequestAction) {
    const requests: Request[] = yield select(getRequests);
    const newRequests = requests.filter(item => item.id !== action.payload.id);

    yield put({type: SET_REQUESTS, payload: newRequests});
}

function* addRequest(action: AddRequestAction) {
    const requests: Request[] = yield select(getRequests);
    const newRequest: Request = {...action.payload, id: requests.length + action.payload.name};
    let newRequests: Request[] = [...requests, newRequest];

    if(newRequests.length > 10) {
        newRequests = newRequests.slice(newRequests.length - 10);
    }

    yield put({type: SET_REQUESTS, payload: newRequests});
}

export default function* mySaga() {
    yield takeEvery(ADD_REQUEST, addRequest);
    yield takeEvery(REMOVE_REQUEST, removeRequest);
}
