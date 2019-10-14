import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter} from 'react-router-dom';
import ErrorBoundary from './containers/ErrorBoundary';

const rootElement = document.getElementById('root');
ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
<ErrorBoundary>
        <App/>
</ErrorBoundary>
    </Provider>    
</BrowserRouter>, rootElement);
