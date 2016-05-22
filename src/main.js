import React from 'react'
import store from './data/store'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import Provider from './data/Provider'
import Home from './Home'


const RootRoute = {
    path: '/',
    // childRoutes: [
    //     About
    // ],
    indexRoute: { component: Home }
}

const MainRouter = (
    <Provider store={store}>
        <Router routes={RootRoute} history={hashHistory}/>
    </Provider>
)

ReactDOM.render(MainRouter, document.getElementById('content'));
