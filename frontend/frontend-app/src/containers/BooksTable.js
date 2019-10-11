import React, { useEffect } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow, Button, makeStyles, IconButton, Paper, Menu, MenuItem, Popover, Typography, FormGroup, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Book from './Book';
import { UpdateBooksRequest, SetUpdateId, UpdateBookDetailsRequest, SortBooks, SetFilter, SetAnchorE1 } from '../actions/index';
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';

function mapStateToProps(state){
    return {
        books: state.books.books,
        filter: state.filters.filter,
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

function BookTable(props) {
    const classes = useStyles()

    useEffect(() => {
            props.dispatch(UpdateBooksRequest())
    },[])

    function handleAdd(){
        props.history.push('/AddBook')
    }

    function handleEdit(id){
        props.dispatch(SetUpdateId(id))
        props.history.push('/EditBook')
    }

    function handleDetails(id){
        props.dispatch(SetUpdateId(id))
        props.history.push('/BookDetails')

    }

    function handleFilter(){
        props.dispatch(SetFilter("action"))
    }

    function handleRent(){
        props.history.push('/Rent')
    }

    function handleSort(){
        props.dispatch(SortBooks())
    }

    const books = props.books.map((book) => {
        let releaseDate = new Date(book.releaseDate)
        let addDate = new Date(book.addDate)
        let modifiedDate = new Date(book.modifiedDate)
        if(props.filter === ''){
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
        }
        if(props.filter === book.bookGenre){
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
        }
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
            <TableCell>Book Genre</TableCell>
            <TableCell>
            <IconButton onClick={handleAdd}>
                <AddIcon>
                </AddIcon>
            </IconButton>
            <IconButton onClick={handleSort}>
                <SortIcon>
                </SortIcon>
            </IconButton>
            
            <Button variant="outlined" onClick={handleRent}>Rent</Button>
            <Button variant="outlined" onClick={handleFilter}>Filter</Button>
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {books}
        </TableBody>
     </Table>
     </Paper>
    );
}

export default connect(mapStateToProps)(withRouter(BookTable))