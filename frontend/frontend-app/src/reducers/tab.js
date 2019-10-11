import { SET_TAB_VALUE } from '../constants/actionTypes';

const initialState = {
    value: 0
}

const tab = (state = initialState, action) => {
    switch(action.type){
        case SET_TAB_VALUE: 
            return {
                value: action.payload.value
            }
        default:
            return state
    }
}

export default tab