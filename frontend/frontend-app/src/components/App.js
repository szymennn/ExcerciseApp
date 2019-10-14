import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route, withRouter, Link} from 'react-router-dom';
import React from 'react';
import AddUser from '../containers/AddUser';
import EditUser from '../containers/EditUser';
import UserDetails from '../containers/UserDetails';
import BookDetails from '../containers/BookDetails';
import AddBook from '../containers/AddBook';
import EditBook from '../containers/EditBook';
import Rent from '../containers/Rent';
import RentedBookDetails from '../containers/RentedBookDetails';
import Menu from '../containers/Menu';
import UsersTable from '../containers/UsersTable';
import SimpleSelect from '../containers/material';


export default function App(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Users" component={UsersTable}/>
                <Route path="/AddUser" component={AddUser}/>
                <Route path="/EditUser" component={EditUser}/>
                <Route path="/UserDetails" component={UserDetails}/>
                <Route path="/AddBook" component={AddBook}/>
                <Route path="/EditBook" component={EditBook}/>
                <Route path="/BookDetails" component={BookDetails}/>
                <Route path="/Rent" component={Rent}/>
                <Route path="/RentedBookDetails" component={RentedBookDetails}/>
                <Route path="/SelectTest" component={SimpleSelect}/>
                <Route path="/" component={Menu}/>
            </Switch>
        </BrowserRouter>
    )
}