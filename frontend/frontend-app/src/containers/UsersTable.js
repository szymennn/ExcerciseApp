import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Typography, Table, TableBody, TableHead, TableCell, TableRow, Button, Fab, makeStyles, Paper } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import { connect } from 'react-redux';
import axiosInstance from '../axios/config';
import { UpdateUsersRequest, DeleteUser, SetUpdateId, UpdateUserDetailsRequest, SortUsers } from '../actions/index';
import { withRouter } from 'react-router-dom';
import User from '../components/User';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SortIcon from '@material-ui/icons/Sort';

function mapStateToProps(state){
    return {
        users: state.users.users
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

function UsersTable(props) {
    const classes = useStyles();

    useEffect(() => {
            props.dispatch(UpdateUsersRequest(props.history.push))
    },[])

    function handleDelete(id){
        props.dispatch(DeleteUser(id, props.history.push))
    }

    function handleAdd(){
        props.history.push('/AddUser')
    }

    function handleEdit(id){
        props.dispatch(SetUpdateId(id))
        props.history.push('/EditUser')
    }

    function handleDetails(id){
        props.dispatch(UpdateUserDetailsRequest(id, props.history.push))
    }

    function handleSort(){
        props.dispatch(SortUsers())
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
    <Paper className={classes.root}>
     <Table className={classes.table} aria-label="Users">
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
            <TableCell>
                <IconButton onClick={handleAdd}>
                    <AddIcon>
                    </AddIcon>
                </IconButton>
                </TableCell>
            <TableCell>
                <IconButton onClick={handleSort}>
                    <SortIcon>
                    </SortIcon>
                </IconButton>
            </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {resultUsers}
        </TableBody>
     </Table>
     </Paper>
    );
}

export default connect(mapStateToProps)(withRouter(UsersTable))