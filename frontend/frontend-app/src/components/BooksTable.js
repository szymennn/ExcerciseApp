import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom';
import { DeleteUser, SetUpdateId, UpdateUserDetailsRequest, SortUsers, UpdateBookDetailsRequest, SortBooks, RentBookRequest } from '../actions/index';


function BooksTable(props) {
    function handleAdd(){
      props.history.push('/AddBook')
    }

    function handleEdit(id){
      props.dispatch(SetUpdateId(id))
      props.history.push('/EditBook')
    }

    function handleDetails(id){
      props.dispatch(UpdateBookDetailsRequest(id, props.history.push))
    }

    function handleSort(){
      props.dispatch(SortBooks())
    }

    function handleRent(){
        props.history.push('/Rent')
    }

    const formattedDateBooks = props.books.map((book) => {
        return {
          id: book.id,
          author: book.author,
          title: book.title,
          bookGenre: book.bookGenre,
          isbn: book.isbn,
          releaseDate: new Date(book.releaseDate).toDateString(),
          addDate: new Date(book.addDate).toDateString(),
          modifiedDate: new Date(book.modifiedDate).toDateString(),
        }
    })

    return (
      <div style={{ maxWidth: '100%' }}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <MaterialTable 
          options = {{
            filtering: true,
            actionsColumnIndex: -1
          }}
          columns={[
            { title: 'Id', field: 'id', type: 'numeric' },
            { title: 'Author', field: 'author' },
            { title: 'Title', field: 'title' },
            { title: 'Release Date', field: 'releaseDate', type: 'date' },
            { title: 'ISBN', field: 'isbn' },
            { title: 'Genre', field: 'bookGenre' },
            { title: 'Add Date', field: 'addDate', type: 'date'},
            { title: 'ModifiedDate', field: 'modifiedDate', type: 'date' },
          ]}
          actions={[
            {
              icon: 'add',
              tooltip: 'Add Book',
              isFreeAction: true,
              onClick: (event) => {
                handleAdd()
              }
            },
            {
              icon: 'library_add',
              tooltip: 'Rent',
              isFreeAction: true,
              onClick: (event) => {
                handleRent()
              }
            },
            {
                icon: 'sort',
                tooltip: 'Sort Books',
                isFreeAction: true,
                onClick: (event) => {
                  handleSort()
                }
            },
            {
              icon: 'edit',
              tooltip: 'Edit Book',
              onClick: (event, rowData)=>{
                handleEdit(rowData.id)
              }
            },
            {
              icon: 'info',
              tooltip: 'Book Info',
              onClick: (event, rowData)=>{
                handleDetails(rowData.id)
              }
            }
          ]}
          data={formattedDateBooks}
          title="Books"
        />
      </div>
    )
}

export default (withRouter(BooksTable))
