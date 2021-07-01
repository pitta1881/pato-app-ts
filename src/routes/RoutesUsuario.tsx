import React from 'react'
import {
  Route,
  Switch,
} from "react-router-dom";
import { AuthGuard as PrivateRoute } from '../guard/AuthGuard'
import NotFound from '../pages/404/NotFound';
import Dashboard from '../pages/usuarios/dashboard/Dashboard';
import UpdateUsuario from '../pages/usuarios/updateDatos/UpdateUsuario';

export default function RoutesUsuario() {
  return (
    <Switch>
      <PrivateRoute exact path="/usuario" >
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/usuario/actualizar-datos" >
        <UpdateUsuario />
      </PrivateRoute>
      <Route component={NotFound} />
    </Switch>
  )
}
