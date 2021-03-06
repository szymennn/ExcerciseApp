import { UPDATE_BOOKS, UPDATE_BOOK, UPDATE_BOOK_DETAILS, UPDATE_RENTED_BOOKS, ADD_RENTED_BOOK, SORT_BOOKS } from '../constants/actionTypes';
import { API_URL } from '../constants/apiUrl';
import axiosInstance from '../axios/config';
import { UpdateRentingUsersRequest, UpdateUsersRequest } from './users';
import { SetUpError } from './error';

export function UpdateBooks(books){
    return {
        type: UPDATE_BOOKS,
        payload: {
            books: books
        }
    }
}

export function UpdateBook(book){
    return {
        type: UPDATE_BOOK, 
        payload: {
            book: book
        }
    }
}

export function UpdateBookDetails(bookDetails){
    return {
        type: UPDATE_BOOK_DETAILS,
        payload: {
            bookDetails: bookDetails
        }
    }
}

export function UpdateRentedBooks(books){
    return {
        type: UPDATE_RENTED_BOOKS,
        payload: {
            rentedBooks: books
        }
    }
}

export function SortBooks(){
    return {
        type: SORT_BOOKS
    }
}

export function UpdateBooksRequest(redirect){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/books`)
        .then(result => {
            dispatch(UpdateBooks(result.data))
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function AddBook(book, redirect){
    return (dispatch) => {
        return axiosInstance.post(`${API_URL}/books`, book)
        .then(result => {
            dispatch(UpdateBooks(result.data))
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function EditBook(book, id, redirect){
    return(dispatch) => {
        let req = {
            url: `${API_URL}/books/${id}`,
            method: 'PUT',
            data: book
        }
        return axiosInstance(req)
        .then(result => {
            dispatch(UpdateBook(result.data))
            redirect('/Books')
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function UpdateBookDetailsRequest(id, redirect){
    return (dispatch) => {
        return axiosInstance.get(`${API_URL}/books/details/${id}`)
        .then(result => {
            dispatch(UpdateBookDetails(result.data))
            redirect('/RentedBookDetails')
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function UpdateRentedBooksRequest(redirect){
    return(dispatch) => {
        return axiosInstance.get(`${API_URL}/rentals/books`)
        .then(result => {
            dispatch(UpdateRentedBooks(result.data))
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function RentBookRequest(rental, redirect){
    return(dispatch) => {
        return axiosInstance.post(`${API_URL}/rentals`, rental)
        .then(result => {
            dispatch(UpdateRentedBooksRequest(redirect))
            dispatch(UpdateRentingUsersRequest(redirect))
            dispatch(UpdateUsersRequest(redirect))
            dispatch(UpdateBooksRequest(redirect))
            redirect('/')
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}

export function PassBookInRequest(id, redirect){
    return(dispatch) => {
        return axiosInstance.post(`${API_URL}/rentals/${id}`)
        .then(result => {
            dispatch(UpdateRentedBooks(result.data))
            dispatch(UpdateRentingUsersRequest(redirect))
            dispatch(UpdateBooksRequest(redirect))
            dispatch(UpdateUsersRequest(redirect))
        })
        .catch(error => {
            dispatch(SetUpError(error.response.data))
            redirect('/Error')
        })
    }
}
