import React, { useEffect } from 'react'
import './App.css';

import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login'
import Payment from './Components/Payment/Payment'
import {auth} from './firebase'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);

      if (authUser) {
        //the user just logged in/the user was logged in

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
      
        <Switch>

          {/* Checkout page */}
          <Route path = '/checkout'>
            <Header />
              <Checkout />
           </Route>

          {/* Login Page */}
           <Route path = '/login'>
              <Login />
           </Route>

          <Route path = '/payment'>
            <Header />
            <Payment />
          </Route>

          <Route path = '/'>
          {/* Home page */}
            {/* HOME */}
            <Header />
              <Home />
           </Route>

           
        </Switch>

    </div>
    </Router>
    
  );
}

export default App;
