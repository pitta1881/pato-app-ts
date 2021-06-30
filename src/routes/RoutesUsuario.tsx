import React from 'react'
import {
  Switch,
} from "react-router-dom";
import { AuthGuard as PrivateRoute } from '../guard/AuthGuard'
import TodoModule from '../pages/usuarios/todo/TodoModule';

export default function RoutesUsuario() {
  return (
    <Switch>
      <PrivateRoute exact path="/usuario" >
        <div>dashboard usuario</div>
      </PrivateRoute>
      <PrivateRoute exact path="/usuario/todo" >
        <TodoModule />
      </PrivateRoute>
    </Switch>
  )
}
