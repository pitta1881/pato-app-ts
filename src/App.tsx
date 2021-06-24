import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//propias
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import TodoModule from './pages/todo/TodoModule';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import { AuthContext } from './context/AuthContext';

function App() {

  const initialState = JSON.parse(sessionStorage.getItem('isLogged') || 'false') || false;
  function reducer(state: any, action: string) {
    switch (action) {
      case 'login':
        sessionStorage.setItem('isLogged', 'true')
        return true;
      case 'logout':
        sessionStorage.setItem('isLogged', 'false')
        return false;
      default:
        throw new Error();
    }
  }

  const [isAuth, authEvent] = useReducer(reducer, initialState);
  const contextoAuth = { isAuth, authEvent }

  return (
    <AuthContext.Provider value={contextoAuth}>
      <Router>
        <Navbar />
        <div className="masthead bg-primary text-white text-center d-flex justify-content-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todo">
              <TodoModule />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
