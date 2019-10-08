import React from 'react';
import { Button, TableRow, TableCell } from '@material-ui/core';

export default function Book(props){
    return(
            <TableRow>
                <TableCell>{props.book.id}</TableCell>
                <TableCell>{props.book.author}</TableCell>
                <TableCell>{props.title}</TableCell>
                <TableCell>{props.releaseDate.toDateString()}</TableCell>
                <TableCell>{props.book.isbn}</TableCell>
                <TableCell>{props.book.count}</TableCell>
                <TableCell>{props.addDate.toDateString()}</TableCell>
                <TableCell>{props.modifiedDate.toDateString()}</TableCell>
                <TableCell>{props.bookGenreId}</TableCell>
                <Button variant="contained" color="primary" onClick={(id) => {props.handleEdit(props.book.id)}}>Edit</Button>
                <Button variant="contained" color="default" onClick={(id) => {props.handleDetails(props.book.id)}}>Details</Button>
            </TableRow>
    )
}