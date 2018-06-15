import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home'

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />


    </Switch>
  </Fragment>
)
export default App;
