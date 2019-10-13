import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import EnhancedEditForm from '../components/EnhancedEditForm';

function mapStateToProps(state){
    return {
        id: state.ids.updateId,
        users: state.users.users
    }
}

function EditUser(props){
    const user = props.users.find((user) => {
        return user.id === props.id
    })

    return(
        <EnhancedEditForm dispatch={props.dispatch} redirect={props.history.push} id={props.id} user={user}/>
    )
}

export default connect(mapStateToProps)(withRouter(EditUser))