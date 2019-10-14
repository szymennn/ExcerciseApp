import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SetUpError } from '../actions';
import { Container } from '@material-ui/core';

function mapStateToProps(state){
    return {
        title: state.error.title,
        status: state.error.status,
        detail: state.error.detail,
        occurred: state.error.occurred
    }
}

function ErrorStatusCodeHandler(props){
    return (
        <Container>
            <h1>Oops, Something went wrong : (</h1>
            <h1 >{props.status}</h1>
            <p >{props.title}</p>
            <p>{props.detail}</p>
        </Container>
    )
}

export default connect(mapStateToProps)(withRouter(ErrorStatusCodeHandler))