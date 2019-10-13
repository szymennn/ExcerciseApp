import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EnhancedAddUserForm from '../components/EnhancedAddUserForm';

function AddUser(props){
    return(
        <EnhancedAddUserForm dispatch={props.dispatch} redirect={props.history.push}/>
    )
}

export default connect()(withRouter(AddUser))