import { SET_FILTER, SET_ANCHORE1 } from '../constants/actionTypes';

const initialState = {
    filter: '',
    anchorE1: null
}

const filters = (state = initialState, action) => {
    switch(action.type){
        case SET_FILTER:
            return {
                filter: action.payload.filter,
                anchorE1: state.anchorE1
            }
        default: 
            return state
    }
}

export default filters