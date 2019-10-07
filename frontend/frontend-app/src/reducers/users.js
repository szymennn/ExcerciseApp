import { UPDATE_USERS } from '../constants/actionTypes';

const initialState = {
    users: []
}

const users = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USERS:
            return Object.assign({}, state, {
                users: action.payload.users
            })
        default:
            return state
    }
}

export default users
