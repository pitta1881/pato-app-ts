import React, { useReducer } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import * as dotenv from 'dotenv';


//propias
import { AuthContext } from './context/AuthContext';
import RoutesIndex from './routes/RoutesIndex';
import AuthReducer from './reducer/AuthReducer';
import NavbarComponent from './components/navbar/NavbarComponent';
import FooterComponent from './components/footer/FooterComponent';

function App() {
  dotenv.config();

  const initialState = JSON.parse(sessionStorage.getItem('isLogged') || 'false') || false;
  const [isAuth, authEvent] = useReducer(AuthReducer, initialState);
  const contextoAuth = { isAuth, authEvent }

  return (
    <Router>
      <div className="d-flex flex-column justify-content-around" style={{ minHeight: "100vh" }}>
        <AuthContext.Provider value={contextoAuth}>
          <NavbarComponent />
          <div className="bg-primary text-white text-center d-flex justify-content-center flex-grow-1 py-4">
            <RoutesIndex />
          </div>
          <FooterComponent />
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
