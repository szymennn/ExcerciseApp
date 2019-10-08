import UserTable from '../containers/UserTable';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import UserForm from '../containers/UserForm';
import React from 'react';
import AddUser from '../containers/AddUser';
import EditUser from '../containers/EditUser';
import UserDetails from '../containers/UserDetails';
import BooksTable from '../containers/BooksTable';
import AddBook from '../containers/AddBook';

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
            </Switch>
        </BrowserRouter>
    )
}