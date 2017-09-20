import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';
import Main from './page/Main';
import SeriesDetails from './page/SeriesDetails';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import series from './state/Reducers'
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const reducer = combineReducers({
  series
})
const store = createStore(reducer, {series: {routing: {}}}, compose(
        applyMiddleware(
            thunk,
            promiseMiddleware
        ))
    )

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path = "/series/:slug" component = {SeriesDetails} />
                <Route path = "/" component = {Main} />
            </Switch>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
