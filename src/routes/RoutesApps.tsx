import React from 'react'
import {
  Route,
  Switch,
} from "react-router-dom";
import { AuthGuard as PrivateRoute } from '../guard/AuthGuard'
import NotFound from '../pages/404/NotFound';
import AppsDashboard from '../pages/apps/AppsDashboard/AppsDashboard';
import PaisesModule from '../pages/apps/Paises/PaisesModule';
import TodoModule from '../pages/apps/todo/TodoModule';

export default function RoutesApps() {
  return (
    <Switch>
      <PrivateRoute exact path="/apps" >
        <AppsDashboard />
      </PrivateRoute>
      <PrivateRoute exact path="/apps/todo" >
        <TodoModule />
      </PrivateRoute>
      <PrivateRoute exact path="/apps/paises" >
        <PaisesModule />
      </PrivateRoute>
      <Route component={NotFound} />
    </Switch>
  )
}
