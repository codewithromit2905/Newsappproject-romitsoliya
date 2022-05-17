import './App.css';
import Navbar from './component/Navbar';
import React, { Component } from 'react'
import News from './component/News';
// import PropTypes from 'prop-types'


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>@
        <Router>
      <Navbar/>
      <Switch>
            <Route  path="/"> element={<News key="General" pageSize={6} country="in" category="General"/>}</Route>
            <Route  path="/Business"> element={<News key="Business"  pageSize={6} country="in" category="Business"/>}</Route>
            <Route  path="/Health"> element={<News key="Health"  pageSize={6} country="in" category="Health"/>}</Route>
            <Route  path="/Health"> element={<News key="Entertainment"  pageSize={6} country="in" category="Entertainment"/>}</Route>
            <Route  path="/Science"> element={<News key="Science" pageSize={6} country="in" category="Science"/>}</Route>
            <Route  path="/Technology"> element={<News key='Technology' pageSize={6} country="in" category="Technology"/>}</Route>
        </Switch> 
        </Router>
      </div>
    )
  }}

