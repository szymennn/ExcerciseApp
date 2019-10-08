import { UPDATE_USERS, UPDATE_USER, UPDATE_USER_DETAILS } from '../constants/actionTypes';

const initialState = {
    users: [],
    userDetails: ''
}

const users = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USERS:
            return Object.assign({}, state, {
                users: action.payload.users
            })
        case UPDATE_USER: 
            return Object.assign({}, state, {
                users: state.users.map((user, index) => {
                    if(user.id === action.payload.user.id){
                        return Object.assign({}, user, {
                            firstName: action.payload.user.firstName,
                            lastName: action.payload.user.lastName,
                            email: action.payload.user.email,
                            phone: action.payload.user.phone,
                            birthDate: action.payload.user.birthDate,
                            addDate: action.payload.user.addDate,
                            modifiedDate: action.payload.user.modifiedDate
                        })
                    }
                    return user
                })
            })
        case UPDATE_USER_DETAILS: {
            return Object.assign({}, state, {
                userDetails: action.payload.userDetails
            })
        }
        default:
            return state
    }
}

export default users
