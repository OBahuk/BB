import { AppState, ActionTypes, SET_REQUESTS, RUN_REQUESTS, STOP_REQUESTS } from '../types';

export default function(state: AppState, action: ActionTypes) {
    switch (action.type) {
        case SET_REQUESTS:
            return {
                ...state,
                requests: [...action.payload]
            };
        case RUN_REQUESTS:
            return {
                ...state,
                inProgress: true
            };
        case STOP_REQUESTS:
            return {
                ...state,
                inProgress: false
            };
        default:
            return state;
    }
}