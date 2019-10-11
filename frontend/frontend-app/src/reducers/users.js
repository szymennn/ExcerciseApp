import { UPDATE_USERS, UPDATE_USER, UPDATE_USER_DETAILS, UPDATE_RENTING_USERS, SORT_USERS } from '../constants/actionTypes';

const initialState = {
    users: [],
    userDetails: '',
    renting: []
}

const users = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USERS:
            return Object.assign({}, state, {
                users: action.payload.users,
                userDetails: state.userDetails,
                renting: state.renting
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
                }),
                userDetails: state.userDetails,
                renting: state.renting
            })
        case UPDATE_USER_DETAILS:
            return Object.assign({}, state, {
                users: state.users,
                userDetails: action.payload.userDetails,
                renting: state.renting
            })
        case UPDATE_RENTING_USERS: 
            return Object.assign({}, state,{
                users: state.users,
                userDetails: state.userDetails,
                renting: action.payload.rentingUsers
            })
        case SORT_USERS: 
            return Object.assign({}, state, {
                users: [...state.users].sort(function(a, b){
                    return b.borrowHistory.length - a.borrowHistory.length
                }),
                userDetails: state.userDetails,
                renting: state.renting
            })
        default:
            return state
    }
}

export default users
