import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom';
import { DeleteUser, SetUpdateId, UpdateUserDetailsRequest, SortUsers, UpdateBookDetailsRequest, PassBookInRequest } from '../actions/index';


function RentedBooksTable(props) {
    function handleDetails(id){
      props.dispatch(UpdateBookDetailsRequest(id, props.history.push))
    }

    function handlePassIn(id){
        props.dispatch(PassBookInRequest(id, props.history.push))
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
                icon: 'delete',
                tooltip: 'Pass Book In',
                onClick: (event, rowData) => {
                    handlePassIn(rowData.id)
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
          title="Rented Books"
        />
      </div>
    )
}

export default (withRouter(RentedBooksTable))
