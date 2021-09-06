import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from "./dashboard";

function Auth () {
  return (
    <div>
{/*       <form onSubmit={onSignIn}>
        
      </form> */}
    </div>
  )
}

  function App() {

    return (

      <Router>
        <div>
{/*           A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/">
              <Auth />
            </Route>
          </Switch>
        </div>
      </Router>

    );
  }

export default App;