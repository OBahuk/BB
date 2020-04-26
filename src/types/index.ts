export interface Request {
    id?: number | string,
    name: string,
    delay: number
}

export interface AppState {
    requests: Request[],
    inProgress: boolean
}

export const ADD_REQUEST = 'ADD_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const RUN_REQUESTS = 'RUN_REQUESTS';
export const STOP_REQUESTS = 'STOP_REQUESTS';
export const SET_REQUESTS = 'SET_REQUESTS';

export interface AddRequestAction {
    type: typeof ADD_REQUEST
    payload: Request
}

export interface RemoveRequestAction {
    type: typeof REMOVE_REQUEST
    payload: Request
}

export interface RunRequests {
    type: typeof RUN_REQUESTS
}

export interface StopRequests {
    type: typeof STOP_REQUESTS
}

export interface SetRequests {
    type: typeof SET_REQUESTS,
    payload: Request[]
}

export type ActionTypes = AddRequestAction | RemoveRequestAction | RunRequests | StopRequests | SetRequests;