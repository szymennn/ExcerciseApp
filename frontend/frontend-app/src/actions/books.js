import { UPDATE_BOOKS } from '../constants/actionTypes';
import { API_URL } from '../constants/apiUrl';
import axiosInstance from '../axios/config';

export function UpdateBooks(books){
    return {
        type: UPDATE_BOOKS,
        payload: {
            books: books
        }
    }
}

export function UpdateBooksRequest(){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/books`)
        .then(result => {
            dispatch(UpdateBooks(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}

export function AddBook(book){
    return (dispatch) => {
        return axiosInstance.post(`${API_URL}/books`)
        .then(result => {
            dispatch(UpdateBooks(result.data))
        })
        .catch(err => {
            throw err
        })
    }
}