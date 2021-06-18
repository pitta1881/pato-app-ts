import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TodoModule from './pages/todo/TodoModule';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';

function App() {

  const [isAuthenticated, setAuthenticated] = useState(JSON.parse(sessionStorage.getItem('isLogged') || 'false'));

  function setAuth(flag: boolean) {
    setAuthenticated(flag);
    (flag ? sessionStorage.setItem('isLogged', 'true') : sessionStorage.clear());
  }

  return (
    <Router>
      <Navbar auth={isAuthenticated}></Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/todo">
          <TodoModule auth={isAuthenticated}></TodoModule>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login handleAuth={setAuth}></Login>
        </Route>
        <Route exact path="/logout">
          <Logout handleAuth={setAuth}> </Logout>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
