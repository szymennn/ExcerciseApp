import React from 'react';
import EnhancedEditBookForm from './EnhancedAddBookForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
    return {
        books: state.books.books,
        id: state.ids.updateId
    }
}

function EditBook(props){
    const book = props.books.find((book) => {
        return book.id === props.id
    })

    return(
        <EnhancedEditBookForm dispatch={props.dispatch} redirect={props.history.push} book={book} id={props.id}/>
    )
}

export default connect(mapStateToProps)(withRouter(EditBook))