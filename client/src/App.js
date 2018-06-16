import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import NavBar from './component/NavBar'
import Location from './component/Location'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/trips/:id" component={Location} />

    </Switch>
  </Fragment>
)
export default App;
