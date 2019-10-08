import React from 'react';
import EnhancedAddBookForm from './EnhancedAddBookForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function AddBook(props){
    return(
        <EnhancedAddBookForm dispatch={props.dispatch} rediirect={props.history.push}/>
    )
}

export default connect()(withRouter(AddBook))