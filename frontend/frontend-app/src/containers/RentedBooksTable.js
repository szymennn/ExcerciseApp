import React, { useEffect } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow, Button, Paper, makeStyles, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Book from './Book';
import { UpdateRentedBooksRequest, UpdateBookDetailsRequest, PassBookInRequest } from '../actions/index';

function mapStateToProps(state){
    return {
        rentedBooks: state.books.rented
    }
}

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });


function RentedBooksTable(props) {
    const classes = useStyles();

    useEffect(() => {
            props.dispatch(UpdateRentedBooksRequest())
    },[])

    function handleDetails(id){
        props.dispatch(UpdateBookDetailsRequest(id, props.history.push))
    }

    function handlePassIn(id){
        props.dispatch(PassBookInRequest(id))
    }

    const books = props.rentedBooks.map((book) => {
        let releaseDate = new Date(book.releaseDate)
        let addDate = new Date(book.addDate)
        let modifiedDate = new Date(book.modifiedDate)
        return(
            <TableRow>
            <TableCell>{book.id}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{releaseDate.toDateString()}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.count}</TableCell>
            <TableCell>{addDate.toDateString()}</TableCell>
            <TableCell>{modifiedDate.toDateString()}</TableCell>
            <TableCell>{book.bookGenreId}</TableCell>

            <TableCell>
                <IconButton onClick={(id) => {handlePassIn(book.id)}}>
                    <DeleteIcon>
                    </DeleteIcon>
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton onClick={(id) => {handleDetails(book.id)}}>
                    <InfoIcon>
                    </InfoIcon>
                </IconButton>
            </TableCell>
        </TableRow>
        )
    })
    return (
    <Paper className={classes.root}>
        <Table className={classes.table} aria-label="Books">
        <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Add Date</TableCell>
            <TableCell>Modified Date</TableCell>
            <TableCell>Book Genre Id</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {books}
        </TableBody>
     </Table>
     </Paper>
    );
}

export default connect(mapStateToProps)(withRouter(RentedBooksTable))