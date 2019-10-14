import { UPDATE_USERS, UPDATE_USER, UPDATE_USER_DETAILS, UPDATE_RENTING_USERS, SORT_USERS } from '../constants/actionTypes';
import { API_URL } from '../constants/apiUrl';
import axiosInstance from '../axios/config';
import { SetUpError } from './error';

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

export function UpdateRentingUsers(users){
    return {
        type: UPDATE_RENTING_USERS,
        payload: {
            rentingUsers: users
        }
    }
}

export function SortUsers(){
    return {
        type: SORT_USERS
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

export function UpdateUsersRequest(redirect){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/users`)
        .then(result => {
            dispatch(UpdateUsers(result.data))
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}

export function AddUser(user, redirect){
    return(dispatch) => {
        return axiosInstance.post(`${API_URL}/users`, user)
        .then(result => {
            dispatch(UpdateUsers(result.data))
            redirect('/')
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}

export function DeleteUser(id, redirect){
    return (dispatch) => {
        return axiosInstance.delete(`${API_URL}/users/${id}`)
        .then(result => {
            dispatch(UpdateUsers(result.data))
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}

export function EditUserRequest(user, id, redirect){
    return (dispatch) => {
        return axiosInstance.put(`${API_URL}/users/${id}`, user)
        .then(result => {
            dispatch(EditUser(result.data))
            redirect('/')
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}

export function UpdateUserDetailsRequest(id, redirect) {
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/users/${id}`)
        .then(result => {
            dispatch(UpdateUserDetails(result.data))
            redirect('/UserDetails')
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}

export function UpdateRentingUsersRequest(redirect){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/rentals/users`)
        .then(result => {
            dispatch(UpdateRentingUsers(result.data))
        })
        .catch(err => {
            dispatch(SetUpError(err.response.data))
            redirect('/Error')
        })
    }
}
