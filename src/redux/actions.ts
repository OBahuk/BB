import {RUN_REQUESTS, STOP_REQUESTS, ADD_REQUEST, REMOVE_REQUEST, } from './constants';
import {ActionTypes, Request, SET_REQUESTS} from '../types';

export function addRequest(request: Request): ActionTypes {
    return {
        type: ADD_REQUEST,
        payload: request
    }
}

export function removeRequest(request: Request): ActionTypes {
    return {
        type: REMOVE_REQUEST,
        payload: request
    }
}

export function runRequests() {
    return {
        type: RUN_REQUESTS
    }
}

export function stopRequests() {
    return {
        type: STOP_REQUESTS
    }
}

export function setRequests(requests: Request[]): ActionTypes  {
    return {
        type: SET_REQUESTS,
        payload: requests
    }
}

export function removeRequestByName(request: Request) {

}
