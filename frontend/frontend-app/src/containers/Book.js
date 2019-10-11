import React from 'react';
import { Button, TableRow, TableCell, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';

export default function Book(props){
    return(
            <TableRow>
                <TableCell>{props.book.id}</TableCell>
                <TableCell>{props.book.author}</TableCell>
                <TableCell>{props.book.title}</TableCell>
                <TableCell>{props.releaseDate.toDateString()}</TableCell>
                <TableCell>{props.book.isbn}</TableCell>
                <TableCell>{props.book.count}</TableCell>
                <TableCell>{props.addDate.toDateString()}</TableCell>
                <TableCell>{props.modifiedDate.toDateString()}</TableCell>
                <TableCell>{props.book.bookGenre}</TableCell>
                <TableCell>
                    <IconButton onClick={(id) => {props.handleEdit(props.book.id)}}>
                        <EditIcon>
                        </EditIcon>
                    </IconButton>
                    <IconButton onClick={(id) => {props.handleDetails(props.book.id)}}>
                        <InfoIcon>
                        </InfoIcon>
                    </IconButton>
                </TableCell>
            </TableRow>
    )
}