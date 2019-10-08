import { UPDATE_BOOKS } from '../constants/actionTypes';

const initialState = {
    books: []
}

const books = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_BOOKS: 
            return Object.assign({}, state, {
                books: action.payload.books
            })
        default: 
            return state
    }
}   

export default books