import UserTable from '../containers/UserTable';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route, withRouter, Link} from 'react-router-dom';
import UserForm from '../containers/UserForm';
import React from 'react';
import AddUser from '../containers/AddUser';
import EditUser from '../containers/EditUser';
import UserDetails from '../containers/UserDetails';
import BooksTable from '../containers/BooksTable';
import AddBook from '../containers/AddBook';
import EditBook from '../containers/EditBook';
import BookDetails from '../components/BookDetails';
import RentedBooksTable from '../containers/RentedBooksTable';
import RentingUsersTable from '../containers/RentingUsersTable';
import Rent from '../containers/Rent';
import Menu from '../containers/Menu';
import Test from '../containers/FilterTableTest';
import RentedBookDetails from './RentedBookDetails';
import TestTable from '../containers/TestTable';

export default function App(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Users" component={UserTable}/>
                <Route path="/AddUser" component={AddUser}/>
                <Route path="/EditUser" component={EditUser}/>
                <Route path="/UserDetails" component={UserDetails}/>
                <Route path="/Books" component={BooksTable}/>
                <Route path="/AddBook" component={AddBook}/>
                <Route path="/EditBook" component={EditBook}/>
                <Route path="/BookDetails" component={BookDetails}/>
                <Route path="/RentedBooks" component={RentedBooksTable}/>
                <Route path="/RentingUsers" component={RentingUsersTable}/>
                <Route path="/Rent" component={Rent}/>
                <Route path="/Test" component={TestTable}/>
                <Route path="/RentedBookDetails" component={RentedBookDetails}/>
                <Route path="/" component={Menu}/>
            </Switch>
        </BrowserRouter>
    )
}