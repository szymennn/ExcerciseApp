import React, { useEffect } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow, Button, Paper, makeStyles, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import { UpdateUsersRequest, DeleteUser, SetUpdateId, UpdateUserDetailsRequest, UpdateRentingUsersRequest } from '../actions/index';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
    return {
        users: state.users.renting
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
    tablecell: {
        fontSize: '60pt'
    }
  });


function RentingUsersTable(props) {
    const classes = useStyles();

    useEffect(() => {
            props.dispatch(UpdateRentingUsersRequest())
    }, [])

    function handleDetails(id){
        props.dispatch(UpdateUserDetailsRequest(id, props.history.push))
    }

    const resultUsers = props.users.map((user, index) => {
        let birthDate = new Date(user.birthDate)
        let addDate = new Date(user.addDate)
        let modifiedDate = new Date(user.modifiedDate)
        return (
            <TableRow key={user.id} >
                <TableCell >{user.id}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{birthDate.toDateString()}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{addDate.toDateString()}</TableCell>
                <TableCell>{modifiedDate.toDateString()}</TableCell>
                <IconButton onClick={(id) => {handleDetails(user.id)}}>
                    <InfoIcon>
                    </InfoIcon>
                </IconButton>
            </TableRow>
        )
    })

    return (
    <Paper className={classes.root}>
        <Table className={classes.table} aria-label="Books">
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
            </TableRow>
        </TableHead>
        <TableBody>
            {resultUsers}
        </TableBody>
     </Table>
     </Paper>
    );
}

export default connect(mapStateToProps)(withRouter(RentingUsersTable))