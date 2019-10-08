import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Typography, Table, TableBody, TableHead, TableCell, TableRow, Button, Fab, makeStyles } from '@material-ui/core';
import { AddIcon } from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import axiosInstance from '../axios/config';
import { UpdateUsersRequest, DeleteUser, SetUpdateId, UpdateUserDetailsRequest } from '../actions/index';
import { withRouter } from 'react-router-dom';
import User from './User';

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

    function handleDelete(id){
        props.dispatch(DeleteUser(id))
    }

    function handleAdd(){
        props.history.push('/AddUser')
    }

    function handleEdit(id){
        props.dispatch(SetUpdateId(id))
        props.history.push('/EditUser')
    }

    function handleDetails(id){
        props.dispatch(UpdateUserDetailsRequest(id))
        props.history.push('/UserDetails')
    }

    const resultUsers = props.users.map((user, index) => {
        let birthDate = new Date(user.birthDate)
        let addDate = new Date(user.addDate)
        let modifiedDate = new Date(user.modifiedDate)
        return (
            <User index={index} addDate={addDate} birthDate={birthDate} modifiedDate={modifiedDate} user={user} handleDelete={handleDelete} handleEdit={handleEdit} handleDetails={handleDetails}/>
        )
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
            <Button color="default" variant="outlined" onClick={handleAdd}>Add</Button>
            </TableRow>
        </TableHead>
        <TableBody>
            {resultUsers}
        </TableBody>
     </Table>
    );
}

export default connect(mapStateToProps)(withRouter(UserTable))