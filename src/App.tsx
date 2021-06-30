import React, { useReducer } from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";

//propias
import { AuthContext } from './context/AuthContext';
import RoutesIndex from './routes/RoutesIndex';
import AuthReducer from './reducer/AuthReducer';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  const initialState = JSON.parse(sessionStorage.getItem('isLogged') || 'false') || false;
  const [isAuth, authEvent] = useReducer(AuthReducer, initialState);
  const contextoAuth = { isAuth, authEvent }

  return (
    <Router>
      <div className="d-flex flex-column justify-content-around" style={{ minHeight: "100vh" }}>
        <AuthContext.Provider value={contextoAuth}>
          <Navbar />
          <div className="bg-primary text-white text-center d-flex justify-content-center flex-grow-1">
            <RoutesIndex />
          </div>
          <Footer />
        </AuthContext.Provider>
      </div>
    </Router>
  );
}

export default App;
