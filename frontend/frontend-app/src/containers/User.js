import React from 'react';
import { Button, TableRow, TableCell } from '@material-ui/core';

export default function User(props){
    return(
            <TableRow key={props.user.id}>
                <TableCell>{props.user.id}</TableCell>
                <TableCell>{props.user.firstName}</TableCell>
                <TableCell>{props.user.lastName}</TableCell>
                <TableCell>{props.birthDate.toDateString()}</TableCell>
                <TableCell>{props.user.email}</TableCell>
                <TableCell>{props.user.phone}</TableCell>
                <TableCell>{props.addDate.toDateString()}</TableCell>
                <TableCell>{props.modifiedDate.toDateString()}</TableCell>
                <Button variant="contained" color="primary" onClick={(id) => {props.handleEdit(props.user.id)}}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={(id) => {props.handleDelete(props.user.id)}}>Delete</Button>
                <Button variant="contained" color="default" onClick={(id) => {props.handleDetails(props.user.id)}}>Details</Button>
            </TableRow>
    )
}