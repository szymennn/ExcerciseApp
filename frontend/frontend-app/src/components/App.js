import UserTable from '../containers/UserTable';
import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import React from 'react';

export default function App(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Users" component={UserTable}/>
            </Switch>
        </BrowserRouter>
    )
}