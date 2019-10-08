import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EnhancedUserForm from './EnhancedUserForm';

function AddUser(props){
    return(
        <EnhancedUserForm dispatch={props.dispatch} redirect={props.history.push}/>
    )
}

export default connect()(withRouter(AddUser))