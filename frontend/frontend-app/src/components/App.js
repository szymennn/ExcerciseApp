import UserTable from '../containers/UserTable';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import React from 'react';

export default function App(props){
    return(
        <Container>
            <UserTable/>
        </Container>
    )
}