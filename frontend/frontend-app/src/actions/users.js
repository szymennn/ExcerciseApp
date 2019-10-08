import { UPDATE_USERS, UPDATE_USER, UPDATE_USER_DETAILS } from '../constants/actionTypes';
import { API_URL } from '../constants/apiUrl';
import axiosInstance from '../axios/config';

export function UpdateUsers(users){
    return {
        type: UPDATE_USERS,
        payload: {
            users: users
        }
    }
}

export function EditUser(user){
    return {
        type: UPDATE_USER,
        payload: {
            user: user
        }
    }
}

export function UpdateUserDetails(userDetails){
    return {
        type: UPDATE_USER_DETAILS,
        payload: {
            userDetails: userDetails
        }
    }
}

export function UpdateUsersRequest(){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/users`)
        .then(result => {
            dispatch(UpdateUsers(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}

export function AddUser(user, redirect){
    return(dispatch) => {
        return axiosInstance.post(`${API_URL}/users`, user)
        .then(result => {
            dispatch(UpdateUsers(result.data))
            redirect('/Users')
        })
        .catch(err => {
            throw err
        })
    }
}

export function DeleteUser(id){
    return (dispatch) => {
        return axiosInstance.delete(`${API_URL}/users/${id}`)
        .then(result => {
            dispatch(UpdateUsers(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}

export function EditUserRequest(user, id, redirect){
    return (dispatch) => {
        return axiosInstance.put(`${API_URL}/users/${id}`, user)
        .then(result => {
            dispatch(EditUser(result.data))
            redirect('/Users')
        })
        .catch(err => {
            throw err
        })
    }
}

export function UpdateUserDetailsRequest(id) {
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/users/${id}`)
        .then(result => {
            dispatch(UpdateUserDetails(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}
