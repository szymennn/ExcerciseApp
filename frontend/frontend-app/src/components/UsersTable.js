import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteUser, SetUpdateId, UpdateUserDetailsRequest, SortUsers } from '../actions/index';


function UsersTable(props) {
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

    function isRenting(id){
      const user = props.users.find((user) => {
        return user.id === id
      })

      return user.rentedBooks.length === 0 ? false : true
    }

    function handleSort(){
      props.dispatch(SortUsers())
  }

    const formattedUsers = props.users.map((user) => {
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          addDate: new Date(user.addDate).toDateString(),
          modifiedDate: new Date(user.modifiedDate).toDateString(),
          birthDate: new Date(user.birthDate).toDateString()
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
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Email', field: 'email' },
            { title: 'Phone', field: 'phone', type: 'numeric' },
            { title: 'Birth Date', field: 'birthDate', type: 'date'},
            { title: 'Add Date', field: 'addDate', type: 'date'},
            { title: 'Modified Date', field: 'modifiedDate', type: 'date' },
          ]}
          actions={[
            {
              icon: 'add',
              tooltip: 'Add User',
              isFreeAction: true,
              onClick: (event) => {
                handleAdd()
              }
            },
            {
              icon: 'sort',
              tooltip: 'Sort Users',
              isFreeAction: true,
              onClick: (event) => {
                handleSort()
              }
            },
            rowData => ({
              icon: 'delete',
              onClick: (event, rowData)=>{
                handleDelete(rowData.id)
              },
              disabled: isRenting(rowData.id)
            }),
            {
              icon: 'edit',
              tooltip: 'Edit User',
              onClick: (event, rowData)=>{
                handleEdit(rowData.id)
              }
            },
            {
              icon: 'info',
              tooltip: 'User Info',
              onClick: (event, rowData)=>{
                handleDetails(rowData.id)
              }
            }
          ]}
          data={formattedUsers}
          title="Users"
        />
      </div>
    )
}

export default (withRouter(UsersTable))

