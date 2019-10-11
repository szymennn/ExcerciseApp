import { UPDATE_USER_DETAILS } from '../constants/actionTypes';
import axiosInstance from '../axios/config';
import { API_URL } from '../constants/apiUrl';

export function UpdateUserDetails(userDetails){
    return {
        type: UPDATE_USER_DETAILS,
        payload: {
            userDetails: userDetails
        }
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
            throw err
        })
    }
}
