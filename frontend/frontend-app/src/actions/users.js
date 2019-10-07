import { UPDATE_USERS } from '../constants/actionTypes';
import axiosInstance from '../axios/config';

export function UpdateUsers(users){
    return {
        type: UPDATE_USERS,
        payload: {
            users: users
        }
    }
}

export function UpdateUsersRequest(){
    return (dispatch) => {
        return axiosInstance.get("https://localhost:5001/users")
        .then(result => {
            dispatch(UpdateUsers(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}