import { SET_TAB_VALUE } from '../constants/actionTypes';

export function SetTabValue(value){
    return {
        type: SET_TAB_VALUE,
        payload: {
            value: value
        }
    }
}