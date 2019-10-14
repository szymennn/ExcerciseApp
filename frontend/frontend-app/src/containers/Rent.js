import React, { useEffect } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { UpdateRentedBooksRequest, UpdateBookDetailsRequest } from '../actions/index';
import RentForm from '../components/RentForm';

function mapStateToProps(state){
    return {
        books: state.books.books,
        users: state.users.users
    }
}

function Rent(props) {
    return(
        <RentForm dispatch={props.dispatch} redirect={props.history.push} books={props.books} users={props.users}/>
    )
}

export default connect(mapStateToProps)(withRouter(Rent))