import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Table, TableBody, TableHead, TableCell, TableRow, Button, Fab, makeStyles } from '@material-ui/core';

function mapStateToProps(state){
    return {
        rentedBooks: state.users.userDetails.rentedBooks,
        borrowHistory: state.users.userDetails.borrowHistory
    }
}

function UserDetails(props){
    console.log(props.rentedBooks)
    const userBooks = props.rentedBooks.map((book) => {
        let releaseDate = new Date(book.releaseDate)
        let addDate = new Date(book.addDate)
        let modifiedDate = new Date(book.modifiedDate)
        return (
            <TableRow key={book.id}>
            <TableCell>{book.id}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{releaseDate.toDateString()}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.count}</TableCell>
            <TableCell>{addDate.toDateString()}</TableCell>
            <TableCell>{modifiedDate.toDateString()}</TableCell>
            <TableCell>{book.bookGenreId}</TableCell>
        </TableRow>
        )
    })
    return(
        <Table>
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
            {userBooks}
        </TableBody>
     </Table>
    )
}

export default connect(mapStateToProps)(withRouter(UserDetails))