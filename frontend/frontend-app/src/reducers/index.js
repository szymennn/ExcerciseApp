import { combineReducers } from 'redux';
import users from './users';
import ids from './ids';
import books from './books';

export default combineReducers({
    users,
    books,
    ids
})