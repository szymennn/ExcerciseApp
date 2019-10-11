import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function mapStateToProps(state){
    return {
        users: state.users.users
    }
}

function TestTable(props) {
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
            { title: 'Add Date', field: 'addDate', type: 'datetime'},
            { title: 'ModifiedDate', field: 'modifiedDate', type: 'datetime' },
            { title: 'Birth Date', field: 'birthDate', type: 'datetime'}
          ]}
          data={props.users}
          title="Demo Title"
        />
      </div>
    )
}

export default connect(mapStateToProps)(withRouter(TestTable))

