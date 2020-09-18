import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import UserComment from './Components/UserComments/UserComment';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (<> 
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/user/:userId">
          <UserComment/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path ="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
