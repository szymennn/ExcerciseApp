import { combineReducers } from 'redux';
import users from './users';
import ids from './ids';
import books from './books';
import tab from './tab';
import filters from './filters';

export default combineReducers({
    users,
    books,
    ids, 
    tab,
    filters
})