import React from 'react';
import EnhancedAddBookForm from '../components/EnhancedAddBookForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function AddBook(props){
    return(
        <EnhancedAddBookForm dispatch={props.dispatch} redirect={props.history.push} />
    )
}

export default connect()(withRouter(AddBook))