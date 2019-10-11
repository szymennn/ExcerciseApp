import { SET_FILTER, SET_ANCHORE1 } from '../constants/actionTypes';

export function SetFilter(filter){
    return {
        type: SET_FILTER,
        payload: {
            filter: filter
        }
    }
}

