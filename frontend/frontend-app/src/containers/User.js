import React from 'react';
import { Button, TableRow, TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

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
                <TableCell>
                    <IconButton onClick={(id) => {props.handleDelete(props.user.id)}}>
                        <DeleteIcon>
                        </DeleteIcon>
                    </IconButton>
                </TableCell>
                <TableCell>
                <IconButton onClick={(id) => {props.handleEdit(props.user.id)}}>
                        <EditIcon>
                        </EditIcon>
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton onClick={(id) => {props.handleDetails(props.user.id)}}>
                        <InfoIcon>
                        </InfoIcon>
                    </IconButton>
                </TableCell>
            </TableRow>
    )
}