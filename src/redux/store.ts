import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import mySaga from '../sagas';
import { AppState} from '../types';


const initialState: AppState = {
    requests: [{id: 0, name: 'test', delay: 9000}],
    inProgress: false
};
const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;

