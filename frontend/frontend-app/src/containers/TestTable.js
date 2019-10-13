import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function TestTable(props) {

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

          columns={[
            { title: 'Id', field: 'id', type: 'numeric' },
            { title: 'First', field: 'firstName' },
            { title: 'Last', field: 'lastName' },
            { title: 'Email', field: 'email' },
            { title: 'Phone', field: 'phone', type: 'numeric' },
            { title: 'Birth Date', field: 'birthDate', type: 'date'},
            { title: 'Add Date', field: 'addDate', type: 'date'},
            { title: 'ModifiedDate', field: 'modifiedDate', type: 'date' },
          ]}
          actions={[
            {
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: ()=>{}
            },
            {
              icon: 'edit',
              tooltip: 'Edit User',
              onClick: ()=>{}
            },
            {
              icon: 'info',
              tooltip: 'User Info',
              onClick: ()=>{}
            }
          ]}
          data={formattedUsers}
          title="Demo Title"
        />
      </div>
    )
}

export default (withRouter(TestTable))

