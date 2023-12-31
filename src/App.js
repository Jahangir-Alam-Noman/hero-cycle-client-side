import './App.css';
import Home from './Pages/Home/Home/Home';
import React from "react";
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* <Route path="/register">
              <Register></Register>
            </Route> */}

             <PrivateRoute path="/register">
               <Register></Register>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>     
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
