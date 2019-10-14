import { combineReducers } from 'redux';
import users from './users';
import ids from './ids';
import books from './books';
import tab from './tab';
import error from './error';

export default combineReducers({
    users,
    books,
    ids, 
    tab,
    error
})