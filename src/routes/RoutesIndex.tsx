import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import About from '../pages/about/About';
import Login from '../pages/auth/Login';
import Home from '../pages/home/Home';
import { AuthGuard as PrivateRoute } from '../guard/AuthGuard'
import NotFound from '../pages/404/NotFound';
import RoutesUsuario from './RoutesUsuario';
import RoutesApps from './RoutesApps';

export default function RoutesIndex() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute exact={false} path="/usuario" >
        <RoutesUsuario />
      </PrivateRoute>
      <PrivateRoute exact={false} path="/apps" >
        <RoutesApps />
      </PrivateRoute>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route component={NotFound} />
    </Switch>
  )
}
