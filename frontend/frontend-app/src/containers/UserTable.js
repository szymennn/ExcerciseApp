import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Typography, Table, TableBody, TableHead, TableCell, TableRow, Button, Fab, makeStyles } from '@material-ui/core';
import { AddIcon } from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import axiosInstance from '../axios/config';
import { UpdateUsersRequest } from '../actions/index';

function mapStateToProps(state){
    return {
        users: state.users.users
    }
}

function UserTable(props) {

    useEffect(() => {
        if(props.users.length === 0){
            props.dispatch(UpdateUsersRequest())
        }
    })

    return (
     <Table>
        <TableHead>
            <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Birth Date</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Add Date</TableCell>
            <TableCell>Modified Date</TableCell>
            <Button color="default" variant="outlined" >Add</Button>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.users.map(user => {
                let birthDate = new Date(user.birthDate)
                let addDate = new Date(user.addDate)
                let modifiedDate = new Date(user.modifiedDate)
                return (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{birthDate.toDateString()}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{addDate.toDateString()}</TableCell>
                        <TableCell>{modifiedDate.toDateString()}</TableCell>
                        <Button variant="contained" color="primary">Edit</Button>
                        <Button variant="contained" color="secondary">Delete</Button>
                    </TableRow>
                )
            })}
        </TableBody>
     </Table>
    );
}

export default connect(mapStateToProps)(UserTable)