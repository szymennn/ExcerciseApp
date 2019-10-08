import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Typography, Table, TableBody, TableHead, TableCell, TableRow, Button, Fab, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Book from './Book';
import { UpdateBooksRequest } from '../actions/index';

function mapStateToProps(state){
    return {
        books: state.books.books
    }
}

function BookTable(props) {

    useEffect(() => {
        if(props.books.length === 0){
            props.dispatch(UpdateBooksRequest())
        }
    })

    function handleAdd(){
        props.history.push('/AddBook')
    }

    function handleEdit(id){

    }

    function handleDetails(id){
    
    }

    const books = props.books.map((book) => {
        let releaseDate = new Date(book.releaseDate)
        let addDate = new Date(book.addDate)
        let modifiedDate = new Date(book.modifiedDate)
        return(
            <Book 
            handleAdd={handleAdd} 
            handleEdit={handleEdit}
            handleDetails={handleDetails} 
            book={book} 
            releaseDate={releaseDate} 
            addDate={addDate}
            modifiedDate={modifiedDate}/>
        )
    })
    return (
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
            <Button color="default" variant="outlined" onClick={handleAdd}>Add</Button>
            </TableRow>
        </TableHead>
        <TableBody>
            {books}
        </TableBody>
     </Table>
    );
}

export default connect(mapStateToProps)(withRouter(BookTable))