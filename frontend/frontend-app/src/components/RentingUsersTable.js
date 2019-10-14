import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserDetails from '../containers/UserDetails';
import { DeleteUser, SetUpdateId, UpdateUserDetailsRequest, SortUsers } from '../actions/index';


function RentingUsersTable(props) {
    function handleDetails(id){
      props.dispatch(UpdateUserDetailsRequest(id, props.history.push))
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
            { title: 'First', field: 'firstName' },
            { title: 'Last', field: 'lastName' },
            { title: 'Email', field: 'email' },
            { title: 'Phone', field: 'phone', type: 'numeric' },
            { title: 'Birth Date', field: 'birthDate', type: 'date'},
            { title: 'Add Date', field: 'addDate', type: 'date'},
            { title: 'Modified Date', field: 'modifiedDate', type: 'date' },
          ]}
          actions={[
            {
              icon: 'info',
              tooltip: 'User Info',
              onClick: (event, rowData)=>{
                handleDetails(rowData.id)
              }
            }
          ]}
          data={formattedUsers}
          title="Renting Users"
        />
      </div>
    )
}

export default (withRouter(RentingUsersTable))

