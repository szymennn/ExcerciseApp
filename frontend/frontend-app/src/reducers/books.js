import { UPDATE_BOOKS, UPDATE_BOOK, UPDATE_BOOK_DETAILS, UPDATE_RENTED_BOOKS, ADD_RENTED_BOOK, SORT_BOOKS } from '../constants/actionTypes';

const initialState = {
    books: [],
    bookDetails: '',
    rented: [],
}

const books = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_BOOKS: 
            return Object.assign({}, state, {
                books: action.payload.books,
                bookDetails: state.bookDetails,
                rented: state.rented,
            })
        case UPDATE_BOOK: 
            return Object.assign({}, state, {
                books: state.books.map((book, index) => {
                    if(book.id === action.book.id){
                        return {
                            id: action.payload.book.id,
                            author: action.payload.book.author,
                            title: action.payload.book.title,
                            releaseDate: action.payload.book.releaseDate,
                            isbn: action.payload.book.isbn,
                            count: action.payload.book.count,
                            addDate: action.payload.book.addDate,
                            modifiedDate: action.payload.book.modifiedDate,
                            bookGenreId: action.payload.book.bookGenreId
                        }
                    }
                    return book
                }),
                bookDetails: state.bookDetails,
                rented: state.rented,
            })
        case UPDATE_RENTED_BOOKS: 
            return Object.assign({}, state, {
                rented: action.payload.rentedBooks,
                books: state.books,
                bookDetails: state.bookDetails,
            })
        case UPDATE_BOOK_DETAILS:
            return Object.assign({}, state, {
                books: state.books,
                bookDetails: action.payload.bookDetails,
                rented: state.rented
                })
        case SORT_BOOKS: 
            return Object.assign({}, state, {
                books: [...state.books].sort(function(a, b){
                    return b.borrowHistory.length - a.borrowHistory.length
                }),
                bookDetails: state.bookDetails,
                rented: state.rented
            })
        
        default: 
            return state
    }
}   

export default books